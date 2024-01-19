import Image from "next/image";
import {
  Hero,
  Navbar,
  Body1,
  Body2,
  Plan,
  Contactbtn,
  Teste,
} from "@/Components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Body1 />
      <Body2 />
      <Plan />
      <Contactbtn />
      <Teste />
    </main>
  );
}
