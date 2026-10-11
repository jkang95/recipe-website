import { categories, categoryGradients } from "@/constants/recipe-categories";
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
        </main>
    );
}