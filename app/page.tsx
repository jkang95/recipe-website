import IntroSection from "@/components/home/intro-section";
import RecipeSection from "@/components/home/recipe-section";
import AboutContactCta from "@/components/home/about-contact-cta";
import { getRecipeSummaries } from "../lib/recipes";


export default async function Home() {
  const recipeSummaries = await getRecipeSummaries();

  return (
    <div className="w-full flex-1">
      <main>
        <IntroSection />
        <RecipeSection recipes={recipeSummaries} />
        <AboutContactCta />
      </main>
    </div>
  );
}
