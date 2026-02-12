import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SmoothCursor } from "../ui/SmoothCursor";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="cursor-none">
  <SmoothCursor />


  

      <Header />
      <main className="flex-1 pt-0">
        {children}
      </main>
      <Footer />
      </div>
    </div>
  );
}