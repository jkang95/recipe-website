import { sampleRecipes } from "@/data/sample-recipes";
import { notFound } from "next/navigation";

export default async function RecipeDetail({
    params,
}: {
    params: Promise<{ id: string}>;
}) {

    const { id } = await params;

    const recipeId = Number(id);

    const recipe = sampleRecipes.find(recipe => recipe.id === recipeId);

    if (!recipe) {
        return notFound();
    }

  return (
    <main>
        <h1>{recipe.name}</h1>
    </main>
  )
}
