import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SmoothCursor } from "../ui/SmoothCursor";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import Silk from "@/components/ui/BgUi";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* GLOBAL SILK BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Silk
          speed={2.5}
          scale={1.3}
          color="#4a1d4e"
          noiseIntensity={1.2}
          rotation={Math.PI / 8}
        />
      </div>

      <SmoothCursor />
      <LoadingSpinner />
      <Header />

      <main className="relative z-10 flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}