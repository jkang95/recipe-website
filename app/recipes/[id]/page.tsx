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
        <p>{recipe.category}</p>
        <h1>{recipe.name}</h1>
        <p>{recipe.serving}인분</p>
        <section aria-labelledby="ingredients-heading">
            <h2 id="ingredients-heading">재료</h2>
            <ul>
                {recipe.ingredients.map(ingredient => 
                    <li key={ingredient.name}>
                        <span>{ingredient.name}</span>
                        {ingredient.quantity !== null && (
                            <span> {ingredient.quantity}{ingredient.unit}</span>
                        )}
                        {ingredient.note && (<p className="text-sm text-ink/65">{ingredient.note}</p>)}
                    </li>
                )}
            </ul>
        </section>
        <section aria-labelledby="steps-heading">
            <h2 id="steps-heading">만드는 법</h2>
            <ol>
                {recipe.steps.map((step, i) =>
                    <li key={i}>
                        <h3>{i+1} {step.title}</h3>
                        <p>{step.description}</p>
                    </li>
                )}
            </ol>
        </section>
        {recipe.chefNote && (
            <section aria-labelledby="chef-note-heading">
                <p>CHEF&apos;S NOTE</p>
                <h2 id="chef-note-heading">셰프 노트</h2>
                <p>{recipe.chefNote}</p>
            </section>
        )}
    </main>
  )
}
