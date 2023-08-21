import { HomeHero } from "@/module/home/hero";
import { Services } from "@/module/home/services";

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 ">
      <HomeHero />
      <Services/>
      </main>
  );
}
