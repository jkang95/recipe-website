import { sampleRecipes } from "@/data/sample-recipes";
import { categories, categoryGradients } from "@/constants/recipe-categories";
import RecipeCard from "@/components/home/recipe-card";
import Link from "next/link";

export default function RecipeSection() {
    
    return (
        <section id="recipes" aria-labelledby="recipes-heading" className="mx-auto w-full max-w-7xl border-b border-line bg-canvas">
            <div className="px-6 py-12 sm:px-8 md:px-10 md:py-16">
                <h2 className="font-serif text-2xl text-ink sm:text-3xl">카테고리별로 보기</h2>
                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map(category =>
                            <li key={category}>
                                <Link href={{
                                    pathname: "/recipes",
                                    query: { category: category}
                                }} className={categoryGradients[category] + " min-h-36 rounded-xl border border-ink/10 bg-linear-to-br p-5 text-ink block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"}>
                                    <h3 className="font-serif text-2xl leading-tight">{category}</h3>
                                    <p className="mt-2 text-sm text-ink/75">{sampleRecipes.filter(recipe => recipe.category === category).length}개 레시피</p>
                                </Link>
                            </li>
                    )}
                </ul>
                <h2 id="recipes-heading" className="mt-12 border-t border-line pt-10 font-serif text-2xl text-ink sm:text-3xl">오늘의 레시피</h2>
                <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {sampleRecipes.map(recipe => 
                    <li key={recipe.id}>
                        <RecipeCard recipe={recipe} />
                    </li>
                    )}
                </ul>
            </div>
        </section>
    );
}