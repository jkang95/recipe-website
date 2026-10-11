import type { RecipeCategory } from "@/types/recipe-types";

export const categories: RecipeCategory[] = ["소스", "메인 요리", "디저트", "밀프렙"];

export const categoryGradients: Record<RecipeCategory, string> = {
    소스 : "from-category-sauce-start to-category-sauce-end",
    "메인 요리" : "from-category-main-start to-category-main-end",
    디저트 : "from-category-dessert-start to-category-dessert-end",
    밀프렙 : "from-category-mealprep-start to-category-mealprep-end"
};