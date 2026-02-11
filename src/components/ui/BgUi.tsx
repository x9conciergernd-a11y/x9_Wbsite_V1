import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useRef, useMemo, useLayoutEffect, useEffect } from 'react';
import { Color, Mesh, ShaderMaterial } from 'three';

/* ---------- helpers ---------- */
const hexToNormalizedRGB = (hex: string): [number, number, number] => {
  const cleanHex = hex.replace('#', '');
  return [
    parseInt(cleanHex.slice(0, 2), 16) / 255,
    parseInt(cleanHex.slice(2, 4), 16) / 255,
    parseInt(cleanHex.slice(4, 6), 16) / 255
  ];
};

/* ---------- shaders ---------- */
const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;

uniform float uTime;
uniform vec3 uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  vec2 r = e * sin(e * texCoord);
  return fract(r.x * r.y);
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2 rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 uv = rotateUvs(vUv * uScale, uRotation);
  float t = uSpeed * uTime;

  uv.y += 0.03 * sin(8.0 * uv.x - t);

  float pattern =
    0.6 +
    0.4 *
      sin(
        5.0 * (uv.x + uv.y + cos(3.0 * uv.x + 5.0 * uv.y) + 0.02 * t) +
          sin(20.0 * (uv.x + uv.y - 0.1 * t))
      );

  vec3 color = uColor * pattern - rnd / 15.0 * uNoiseIntensity;
  gl_FragColor = vec4(color, 1.0);
}
`;

/* ---------- types ---------- */
type SilkUniforms = {
  uTime: { value: number };
  uColor: { value: Color };
  uSpeed: { value: number };
  uScale: { value: number };
  uRotation: { value: number };
  uNoiseIntensity: { value: number };
};

type SilkPlaneProps = {
  uniforms: SilkUniforms;
};

/* ---------- SilkPlane ---------- */
const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(({ uniforms }, ref) => {
  const { viewport } = useThree();

  const material = useMemo(
    () =>
      new ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader
      }),
    [uniforms]
  );

  useLayoutEffect(() => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [viewport, ref]);

  useFrame((_, delta) => {
    uniforms.uTime.value += delta * 0.1;
  });

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
});

SilkPlane.displayName = 'SilkPlane';

/* ---------- main component ---------- */
type SilkProps = {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
};

const BgUi = ({
  speed = 5,
  scale = 1,
  color = '#7B7481',
  noiseIntensity = 1.5,
  rotation = 0
}: SilkProps) => {
  const meshRef = useRef<Mesh>(null);

  const uniforms = useMemo<SilkUniforms>(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: speed },
      uScale: { value: scale },
      uRotation: { value: rotation },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) }
    }),
    [speed, scale, rotation, noiseIntensity, color]
  );

  return (
    <Canvas dpr={[1, 2]} frameloop="always">
      <SilkPlane ref={meshRef} uniforms={uniforms} />
    </Canvas>
  );
};

export default BgUi;
