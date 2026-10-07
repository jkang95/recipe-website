export type RecipeCategory = "소스" | "메인 요리" | "디저트" | "밀프렙";

export type Recipe = {
    id: number;
    name: string;
    category: RecipeCategory;
    serving: number;
}

export type RecipeCardProps = {
    recipe : Recipe
};