export type RecipeCategory = "소스" | "메인 요리" | "디저트" | "밀프렙";

export type Recipe = {
    id: number;
    name: string;
    category: RecipeCategory;
    serving: number;
    ingredients: RecipeIngredient[];
    steps: RecipeStep[];
    chefNote?: string;
    description: string;
    prepMinutes: number;
    cookMinutes: number;
    difficulty: RecipeDifficulty;
}

export type RecipeSummary = Pick<
    Recipe,
    "id" | "name" | "category" | "serving"
>;

export type RecipeCardProps = {
    recipe: RecipeSummary;
};

export type RecipeIngredient = {
    name: string;
    quantity: number | null;
    unit: string;
    note?: string;
}

export type RecipeStep = {
    title: string;
    description: string;
}

type RecipeDifficulty = "쉬움" | "보통" | "어려움";

export type RecipeIngredientsProps = {
    serving: number;
    ingredients: RecipeIngredient[];
}

export type RecipeSectionProps = {
    recipes: RecipeSummary[];
}