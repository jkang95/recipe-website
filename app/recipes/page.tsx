import type { RecipeCategory } from "@/types/recipe-types";

export default async function Recipes({
    searchParams,
}: {
    searchParams: Promise<{ category?: string | string[] }>;
}) {
    const { category } = await searchParams;

    const categories: RecipeCategory[] = ["소스", "메인 요리", "디저트", "밀프렙"];

    let selectedCategory = "전체";

    if(typeof category === "string") {
        const value = category.trim();

        if(categories.some(item => item === value)) {
            selectedCategory = value;
        }
    }

    return (
        <main>
            <section id="recipes" aria-labelledby="recipes-heading">
                <p>ALL RECIPES</p>
                <h1 id="recipes-heading">{selectedCategory} 레시피</h1>
            </section>
        </main>
    );
}