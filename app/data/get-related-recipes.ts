import type { RecipeCategory } from "@/types/recipe-types";
import { sampleRecipes } from "./sample-recipes";

// 함께 둘러볼 레시피들을 랜덤하게 뽑아주는 함수
export function getRelatedRecipes(recipeId: number, category: RecipeCategory) {
    const candidateRecipes = sampleRecipes.filter(recipe => recipe.id !== recipeId); // 레시피 페이지와 같은 레시피가 아닌 레시피들만 추린 배열
    const sameCategoryRecipes = candidateRecipes.filter(candidateRecipe => candidateRecipe.category === category); // 같은 카테고리의 레시피만 뽑아낸 배열
    const otherCategoryRecipes = candidateRecipes.filter(candidateRecipe => candidateRecipe.category !== category); // 카테고리가 다른 레시피만 뽑아낸 배열
    const remainingRecipes = [...sameCategoryRecipes]; // 같은 카테고리의 레시피 배열을 복사
    const selectedSameCategoryRecipes = [];

    while(remainingRecipes.length > 0 && selectedSameCategoryRecipes.length < 3) {
        const randomIndex = Math.floor(Math.random() * remainingRecipes.length); //같은 카테고리 내에서 무작위 인덱스 추첨
        const selectedRecipe = remainingRecipes[randomIndex]; // 뽑한 레시피 객체

        selectedSameCategoryRecipes.push(selectedRecipe); //뽑힌 레시피 객체를 새로운 배열에 담아놓기
        remainingRecipes.splice(randomIndex, 1); // 카피한 배열에서 뽑힌 레시피는 지우기
        
    }

    // 카테고리에 3개 미만의 레시피가 존재 할 경우에 다른 카테고리 레시피를 뽑기
    const relatedRecipes = [...selectedSameCategoryRecipes]; 
    const remainingOtherRecipes = [...otherCategoryRecipes];

    while(remainingOtherRecipes.length > 0 && relatedRecipes.length < 3) {
        const randomIndex = Math.floor(Math.random() * remainingOtherRecipes.length);
        const selectedRecipe = remainingOtherRecipes[randomIndex];

        relatedRecipes.push(selectedRecipe);
        remainingOtherRecipes.splice(randomIndex, 1);
    }
    return relatedRecipes;
}