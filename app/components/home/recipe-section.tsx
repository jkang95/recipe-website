import type { Recipe } from "@/types/recipe-types";
import RecipeCard from "@/components/home/recipe-card";

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
    }
];

export default function RecipeSection() {
    return (
        <section id="recipes" aria-labelledby="recipes-heading">
            <div>
                <h2 id="recipes-heading">오늘의 레시피</h2>
                <ul>
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