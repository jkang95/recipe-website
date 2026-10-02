import IntroSection from "@/components/home/intro-section";
import RecipeSection from "@/components/home/recipe-section";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <IntroSection />
        <RecipeSection />
      </main>
    </div>
  );
}
