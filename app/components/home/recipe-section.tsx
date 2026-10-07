type RecipeCategory = "소스" | "메인 요리" | "디저트" | "밀프렙";

type Recipe = {
    id: number;
    name: string;
    category: RecipeCategory;
    serving: number;
}

type RecipeCardProps = {
    recipe : Recipe
};

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

function RecipeCard(props: RecipeCardProps) {
    const {category, name, serving} = props.recipe;
  return (
    <article>
        <div>
        </div>
        <p>{category}</p>
        <h3>{name}</h3>
        <p>{serving}인분</p>     
    </article>
  );
}


export default function RecipeSection() {
    return (
        <section id="recipes" aria-labelledby="recipes-heading">
            <div>
                <h2 id="recipes-heading">오늘의 레시피</h2>
                <ul>
                    {sampleRecipes.map(recipe => 
                    <li key={recipe.id}>
                        <RecipeCard recipe = {recipe} />
                    </li>
                    )}
                </ul>
            </div>
        </section>
    );
}