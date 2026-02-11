import { useState } from 'react';
import { Sparkles } from 'lucide-react';

type X9MembershipCardProps = {
  title: string;
  subtitle: string;
};

const X9MembershipCard = ({ title, subtitle }: X9MembershipCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        relative overflow-hidden rounded-2xl
        w-full
        sm:w-[90%]
        md:w-[48%]
        lg:w-[42%]
        xl:w-[36%]
        aspect-[16/10]
        mx-auto

        border border-white/20
        bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black
        shadow-[0_8px_25px_rgba(0,0,0,0.6)]
        transition-all duration-300
        hover:shadow-[0_8px_40px_rgba(139,44,44,0.35)]
      "
    >
      {/* Soft decorative glow */}
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-red-600/20 blur-3xl" />

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/5" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5 md:p-6 text-white">
        {/* Icon */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-red-600/20 p-2">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {title}
          </h3>
        </div>

        <p className="mt-2 text-xs sm:text-sm md:text-base opacity-80">
          {subtitle}
        </p>
      </div>

      {/* Hover Overlay (desktop only) */}
      {isHovered && (
        <div
          className="
            absolute inset-0 z-20
            hidden md:flex
            items-center justify-center
            bg-black/60
            transition-all duration-300
          "
        >
          <div className="rounded-xl bg-black/70 p-5 text-center text-sm leading-6 text-white">
            • Exclusive Access <br />
            • Concierge Services <br />
            • Personalized Perks
          </div>
        </div>
      )}
    </div>
  );
};

export default X9MembershipCard;
