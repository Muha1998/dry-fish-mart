import { ItemsList } from "@/components/landing/itemsList";
import { LatestSlider } from "@/components/landing/latestSlider";
import HeaderCustomText from "@/components/layout-text-flip-demo";

export default function Home() {
  return (
    <main >
      <div className="relative w-full">
        <div className="container mx-auto p-8 pt-24 ">
          <div className="my-8">
            <div className="text-center space-y-4">

              <span className="inline-block px-4 py-1 text-sm rounded-full border bg-white/50 dark:bg-neutral-900/50 backdrop-blur">
                🐟 Premium Quality Dry Fish
              </span>

              <HeaderCustomText />

              {/* <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  කරවල කඩේ
                </span>
              </h1> */}

              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Bringing you the finest selection of traditional Sri Lankan dry fish — fresh, flavorful, and trusted quality.
              </p>

            </div>
          </div>
          <LatestSlider />
          <ItemsList />
        </div>
      </div>
    </main>
  );
}
