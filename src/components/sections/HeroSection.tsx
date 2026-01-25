import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

/* ---------------- TYPES ---------------- */
type Square = {
  id: number;
  src: string;
};

/* ---------------- DATA ---------------- */
const squareData: Square[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dv4psordd/image/upload/gift-boxes-with-golden-ribbon-black-friday-front-view_rywovk",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dv4psordd/image/upload/parking-valet-taking-care-customer-vehicle_rmd4de",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dv4psordd/image/upload/receptionists-elegant-suits-work-hours_1_qz4t9x",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dv4psordd/image/upload/side-view-man-living-as-digital-nomad_tyuql6",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dv4psordd/image/upload/medium-shot-middle-aged-doctor-explaining-diagnosis-via-tablet-pc_qbtk33",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1820&q=80",
  },
];

/* ---------------- HELPERS ---------------- */
const shuffleArray = (array: Square[]) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/* ---------------- COMPONENTS ---------------- */

const ShuffleGrid = () => {
  const timeoutRef = useRef<number | null>(null);

  const [squares, setSquares] = useState<Square[]>(() =>
    shuffleArray(squareData)
  );

  const shuffleSquares = useCallback(() => {
    setSquares(shuffleArray(squareData));
    timeoutRef.current = window.setTimeout(shuffleSquares, 3000);
  }, []);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(shuffleSquares, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shuffleSquares]);

  return (
    <div className="grid grid-cols-4 grid-rows-3 h-[450px] gap-1">
      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.4, type: "spring" }}
          className="w-full h-full rounded-md"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
};

/* ---------------- HERO SECTION ---------------- */

const HeroSection = () => {
  return (
    <section className="w-full px-8 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      {/* LEFT */}
      <div>
       <span className="block mb-4 text-sm text-[#270e29] font-medium">
         Redefine Time
       </span>


        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Your Concierge for Modern Life
        </h1>

        <p className="mt-6 text-base md:text-lg text-slate-600 max-w-md">
          X9 is a private lifestyle management service designed for busy individuals who value time, discretion, and precision — seamlessly handling travel, scheduling, events, and daily coordination on your behalf.
        </p>

        <button className="mt-8 bg-[#270e29] text-[#efdfbb] font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-95">
         Request Access
         </button>


      </div>

      {/* RIGHT */}
      <ShuffleGrid />
    </section>
  );
};

export default HeroSection;
