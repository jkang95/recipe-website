import IntroSection from "@/components/home/intro-section";
import RecipeSection from "@/components/home/recipe-section";
import AboutContactCta from "@/components/home/about-contact-cta";
import { createPublicSupabaseClient } from "../lib/supabase";


export default async function Home() {
  const supabase = createPublicSupabaseClient();

  const { data: categories, error } = await supabase
    .from("categories")
    .select("id, name")
    .order("id", { ascending: true });

  if (error) {
    console.error("카테고리 조회 실패:", error);
  } else {
    console.log("Supabase 카테고리:", categories);
  }

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
