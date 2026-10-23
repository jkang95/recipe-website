import { createPublicSupabaseClient } from "./supabase";
import type { Recipe, RecipeSummary } from "@/types/recipe-types";

export async function getRecipeSummaries(): Promise<RecipeSummary[]> {
    const supabase = createPublicSupabaseClient();

    const { data: recipesFromDatabase, error } = await supabase
        .from("recipes")
        .select(`
            id,
            name,
            serving,
            categories (
                name
            )    
        `)
        .order("id", { ascending: true });

    if (error) {
        console.error("레시피 목록 조회 실패: ", error);
        throw new Error("레시피 목록을 불러오지 못했습니다.");
    }

    const recipeSumaries: RecipeSummary[] =
        recipesFromDatabase.map((recipe) => {
            const categoryFromDatabase: unknown = recipe.categories;

            if (
                typeof categoryFromDatabase !== "object" ||
                categoryFromDatabase === null ||
                !("name" in categoryFromDatabase)
            ) {
                throw new Error("레시피의 카테고리를 확인할 수 없습니다.");
            }

            const categoryName = categoryFromDatabase.name;

            if (
                categoryName !== "소스" &&
                categoryName !== "메인 요리" &&
                categoryName !== "디저트" &&
                categoryName !== "밀프렙" 
            ) {
                throw new Error("등록되지 않은 카테고리입니다.");
            }

            return {
                id: recipe.id,
                name: recipe.name,
                category: categoryName,
                serving: recipe.serving,
            };
        });

    return recipeSumaries;
}

export async function getRecipeById(recipeId: number): Promise<Recipe | null> {
    if (!Number.isSafeInteger(recipeId) || recipeId < 1) {
        return null;
    }

    const supabase = createPublicSupabaseClient();

    const { data: recipeFromDatabase, error } = await supabase
        .from("recipes")
        .select(`
            id,
            name,
            description,
            serving,
            prep_minutes,
            cook_minutes,
            difficulty,
            chef_note,
            categories (name),
            recipe_ingredients (name, quantity, unit, note, sort_order),
            recipe_steps (title, description, sort_order)    
        `)
        .eq("id", recipeId)
        .order("sort_order", {
            referencedTable: "recipe_ingredients",
            ascending: true,
        })
        .order("sort_order", {
            referencedTable: "recipe_steps",
            ascending: true,
        })
        .maybeSingle();
        
    if (error) {
        console.error("레시피 상세 조회 실패: ", error);
        throw new Error("레시피 상세 정보를 불러오지 못했습니다.");
    }

    if (!recipeFromDatabase) {
        return null;
    }

    const categoryFromDatabase: unknown = recipeFromDatabase.categories;

    if (
        typeof categoryFromDatabase !== "object" ||
        categoryFromDatabase === null ||
        !("name" in categoryFromDatabase)
    ) {
        throw new Error("레시피의 카테고리를 확인할 수 없습니다.");
    }

    const categoryName = categoryFromDatabase.name;

    if (
        categoryName !== "소스" &&
        categoryName !== "메인 요리" &&
        categoryName !== "디저트" &&
        categoryName !== "밀프렙" 
    ) {
        throw new Error("등록되지 않은 카테고리입니다.");
    }

    const difficultyFromDatabase: unknown = recipeFromDatabase.difficulty;

    if (
        difficultyFromDatabase !== "쉬움" &&
        difficultyFromDatabase !== "보통" &&
        difficultyFromDatabase !== "어려움"
    ) {
        throw new Error("틍록되지 않은 난이도입니다.")
    }

    const recipe: Recipe = {
        id: recipeFromDatabase.id,
        name: recipeFromDatabase.name,
        category: categoryName,
        serving: recipeFromDatabase.serving,
        description: recipeFromDatabase.description,
        prepMinutes: recipeFromDatabase.prep_minutes,
        cookMinutes: recipeFromDatabase.cook_minutes,
        difficulty: difficultyFromDatabase,
        chefNote: recipeFromDatabase.chef_note ?? undefined,

        ingredients: recipeFromDatabase.recipe_ingredients.map(ingredient => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit,
            note: ingredient.note ?? undefined
        })),

        steps: recipeFromDatabase.recipe_steps.map(step => ({
            title: step.title,
            description: step.description,
        })),
    };

    return recipe;
}