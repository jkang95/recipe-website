import { sampleRecipes } from "@/data/sample-recipes";
import { categoryGradients } from "@/constants/recipe-categories";
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
    <main className="mx-auto w-full max-w-7xl border-b border-line px-6 py-10 sm:px-8 md:px-10 md:py-12">
        <header className="grid gap-7 pb-7 sm:grid-cols-2 sm:items-center sm:gap-6 sm:pb-9 md:gap-10">
            <div className="min-w-0">
                <p className="text-xs font-medium tracking-[0.16em] text-accent">FROM THE KITCHEN</p>
                <p className="mt-4 inline-flex items-center gap-2 text-xs text-body sm:mt-5">
                    <span aria-hidden="true" className={"h-2.5 w-2.5 shrink-0 rounded-full bg-linear-to-br " + categoryGradients[recipe.category]} />
                    {recipe.category}
                </p>
                <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">{recipe.name}</h1>
                <p className="mt-4 text-sm leading-7 text-body break-keep">
                    {recipe.description}
                </p>
                <a href="#ingredients" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:bg-ink/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                    재료와 조리법 보기
                </a>
            </div>
            <div role="img" aria-label="레시피 대표 사진 자리" className="aspect-[4/3] w-full rounded-xl bg-line" />
        </header>
        <dl className="grid grid-cols-3 gap-3 border-y border-line py-5 sm:gap-5">
            <div>
                <dt className="text-xs text-body">기본 분량</dt>
                <dd className="mt-1 font-serif text-xl leading-relaxed text-ink sm:text-2xl">
                    {recipe.serving}인분
                </dd>
            </div>
        </dl>
        <section id="ingredients" aria-labelledby="ingredients-heading">
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
