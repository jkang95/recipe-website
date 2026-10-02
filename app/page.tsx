import IntroSection from "@/components/home/intro-section";
import RecipeSection from "@/components/home/recipe-section";
import AboutContactCta from "@/components/home/about-contact-cta";


export default function Home() {
  return (
    <div className="w-full flex-1">
      <main>
        <IntroSection />
        <RecipeSection />
        <AboutContactCta />
      </main>
    </div>
  );
}
