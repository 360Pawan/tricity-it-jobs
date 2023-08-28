import { HeroHome } from "@/module/home/hero";
import { Jobs } from "@/module/home/jobs";
import { SearchJob } from "@/module/home/search-job";

export default function Home() {
  return (
    <main className="">
      <HeroHome />
      <SearchJob />
      <Jobs />
    </main>
  );
}
