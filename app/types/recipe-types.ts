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
}

export type RecipeCardProps = {
    recipe: Recipe
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