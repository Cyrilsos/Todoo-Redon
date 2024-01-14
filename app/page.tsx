import Image from "next/image";
import { Hero, Navbar } from "@/Components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
