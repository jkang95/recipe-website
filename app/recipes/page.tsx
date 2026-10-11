import { categories, categoryGradients } from "@/constants/recipe-categories";
import { Recipe } from "@/types/recipe-types";
import RecipeCard from "@/components/home/recipe-card";
import Link from "next/link";

export default async function Recipes({
    searchParams,
}: {
    searchParams: Promise<{ category?: string | string[] }>;
}) {
    const { category } = await searchParams;

    let selectedCategory = "전체";

    if(typeof category === "string") {
        const value = category.trim();

        if(categories.some(item => item === value)) {
            selectedCategory = value;
        }
    }

    const sampleRecipes: Recipe[] = [
        {
            id: 1,
            name: "치미추리",
            category: "소스",
            serving: 1
        },
        {
            id: 2,
            name: "제육볶음",
            category: "메인 요리",
            serving: 2
        },
        {
            id: 3,
            name: "티라미수",
            category: "디저트",
            serving: 3
        },
        {
            id: 4,
            name: "닭가슴살 부리또",
            category: "밀프렙",
            serving: 7
        },
        {
            id: 5,
            name: "고단백 라자냐",
            category: "밀프렙",
            serving: 7
        }
    ];
    
    const filteredRecipes = selectedCategory === "전체" ? sampleRecipes : sampleRecipes.filter(recipe => recipe.category === selectedCategory);

    return (
        <main>
            <section id="recipes" aria-labelledby="recipes-heading">
                <p>ALL RECIPES</p>
                <h1 id="recipes-heading">전체 레시피</h1>
            </section>
            <nav aria-label="레시피 카테고리">
                <ul className="mt-6 flex flex-wrap gap-2">
                    <li>
                        <Link href="/recipes" aria-current={selectedCategory === "전체" ? "true" : undefined} className={"inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink " + (selectedCategory === "전체" ? "border-ink bg-ink text-canvas" : "border-line bg-canvas text-ink hover:bg-ink/5")}>전체 레시피</Link>
                    </li>
                    {categories.map(category => 
                        <li key={category}>
                            <Link href={{
                                pathname: "/recipes",
                                query: { category: category}
                            }}
                            className={"inline-flex gap-2 min-h-11 items-center justify-center rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink " + (selectedCategory === category ? "border-ink bg-ink text-canvas" : "border-line bg-canvas text-ink hover:bg-ink/5")}
                            aria-current={selectedCategory === category ? "true" : undefined}> 
                                <span aria-hidden="true" className={"h-2.5 w-2.5 shrink-0 rounded-full bg-linear-to-br " + categoryGradients[category]} />
                                {category}
                            </Link>                        
                        </li>
                    )}
                </ul>
            </nav>
            <p className="mt-8 text-sm text-ink/60">{filteredRecipes.length}개 레시피</p>
            {filteredRecipes.length === 0 && (
                <p className="mt-6 rounded-xl border border-line p-6 text-sm text-ink/70">아직 등록된 레시피가 없어요.</p>
            )}
            <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRecipes.map(recipe => 
                    <li key={recipe.id}>
                        <RecipeCard recipe={recipe} />
                    </li>
                )}
            </ul>
        </main>
    );
}