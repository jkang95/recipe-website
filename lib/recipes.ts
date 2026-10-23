import { createPublicSupabaseClient } from "./supabase";
import type { RecipeSummary } from "@/types/recipe-types";

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