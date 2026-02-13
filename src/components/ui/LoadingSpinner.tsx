"use client";
import { useState, useEffect } from "react";
import loading_logo from "../../assets/images/loading_logo.png";
import Silk from "@/components/ui/BgUi";

export function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const minDuration = 1200;

      setTimeout(() => {
        setIsLoading(false);
      }, Math.max(minDuration - elapsed, 0));
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setVisible(false), 500);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-500
      ${isLoading ? "opacity-100" : "opacity-0"}`}
    >
      {/* Silk Background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <Silk
          speed={2.5}
          scale={1.3}
          color="#4a1d4e"
          noiseIntensity={1.2}
          rotation={Math.PI / 8}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10" />

      {/* Loader */}
      <div className="relative z-50">
        <style>{`
          @keyframes rotate-center {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes float {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>

        <div
          className="w-72 h-72 flex items-center justify-center animate-[float_3s_ease-in-out_infinite]"
          style={{
            animation: "rotate-center 2s linear infinite",
            filter: "drop-shadow(0 20px 40px rgba(239,223,187,.45))"
          }}
        >
          <img
            src={loading_logo}
            alt="Loading"
            className="w-52 h-52 md:w-60 md:h-60 object-contain select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}