import type { Recipe, RecipeCategory } from "@/types/recipe-types";
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
    },
    {
        id: 5,
        name: "고단백 라자냐",
        category: "밀프렙",
        serving: 7
    }
];

const categories: RecipeCategory[] = ["소스", "메인 요리", "디저트", "밀프렙"];

export default function RecipeSection() {
    
    return (
        <section id="recipes" aria-labelledby="recipes-heading">
            <div>
                <h2>카테고리별로 보기</h2>
                <ul>
                    {categories.map(category =>
                        <li key={category}>
                            <h3>{category}</h3>
                            <p>{sampleRecipes.filter(recipe => recipe.category === category).length}개 레시피</p>
                        </li>
                    )}
                </ul>
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