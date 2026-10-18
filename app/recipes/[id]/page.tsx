import { sampleRecipes } from "@/data/sample-recipes";
import { categoryGradients } from "@/constants/recipe-categories";
import { getRelatedRecipes } from "@/data/get-related-recipes";
import { notFound } from "next/navigation";
import RecipeCard from "@/components/home/recipe-card";

export default async function RecipeDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;

    const recipeId = Number(id);

    const recipe = sampleRecipes.find(recipe => recipe.id === recipeId);

    if (!recipe) {
        return notFound();
    }

    const relatedRecipes = getRelatedRecipes(recipeId, recipe.category);

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
            <div>
                <dt className="text-xs text-body">전체 시간</dt>
                <dd className="mt-1 font-serif text-xl leading-relaxed text-ink sm:text-2xl">
                    {recipe.prepMinutes + recipe.cookMinutes}분
                    <small className="mt-1 block font-sans text-xs leading-relaxed text-body">
                        준비 {recipe.prepMinutes}분 · 조리 {recipe.cookMinutes}분
                    </small>
                </dd>
            </div>
            <div>
                <dt className="text-xs text-body">난이도</dt>
                <dd className="mt-1 font-serif text-xl leading-relaxed text-ink sm:text-2xl">
                    {recipe.difficulty}
                </dd>
            </div>
        </dl>
        <nav aria-label="이 레시피에서" className="flex flex-wrap gap-x-4 gap-y-1 pt-4 text-xs text-body sm:gap-x-6">
            <a href="#ingredients" className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                재료
            </a>
            <a href="#steps" className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                만드는 법
            </a>
            {recipe.chefNote && <a href="#chef-note" className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                셰프 노트
            </a>}
            {relatedRecipes.length > 0 && <a href="#related-recipes" className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                함께 둘러보기
            </a>}
        </nav>
        <div className="mt-6 grid items-start gap-10 md:mt-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] md:gap-9">
            <section id="ingredients" aria-labelledby="ingredients-heading">
                <h2 id="ingredients-heading" className="font-serif text-2xl leading-normal tracking-tight text-ink sm:text-3xl">재료</h2>
                <ul className="mt-4 divide-y divide-line rounded-xl bg-panel px-4 py-2 sm:px-5">
                    {recipe.ingredients.map(ingredient => 
                        <li key={ingredient.name}>
                            <label className="flex min-h-15 cursor-pointer items-center gap-2.5 py-3">
                                <input type="checkbox" className="h-4 w-4 shrink-0 accent-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink" />
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-sm text-ink break-keep">
                                            {ingredient.name}
                                        </span>
                                        {ingredient.note && (
                                            <small className="mt-0.5 block text-xs leading-relaxed text-ink/75">
                                                {ingredient.note}
                                            </small>)
                                        }
                                    </span>

                                    {ingredient.quantity !== null && (
                                        <span className="shrink-0 whitespace-nowrap text-xs tabular-nums text-ink">
                                            {ingredient.quantity}{ingredient.unit}
                                        </span>
                                    )}
                            </label>
                        </li>
                    )}
                </ul>
            </section>
            <section id="steps" aria-labelledby="steps-heading">
                <div className="flex min-h-11 flex-wrap items-center justify-between gap-3">
                    <h2 id="steps-heading" className="font-serif text-2xl leading-normal tracking-tight text-ink sm:text-3xl">만드는 법</h2>
                    <span className="text-xs text-body">
                        {recipe.steps.length}단계
                    </span>
                </div>
                <ol className="mt-6 flex flex-col gap-6">
                    {recipe.steps.map((step, i) =>
                        <li key={i} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3.5">
                            <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full border border-line font-serif text-lg text-ink">
                                {i+1}
                            </span>
                            <div className="min-w-0">
                                <h3 className="pt-0.5 text-base font-medium leading-7 text-ink break-keep"> {step.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-body break-keep">{step.description}</p>
                            </div>
                        </li>
                    )}
                </ol>
            </section>
        </div>
        {recipe.chefNote && (
            <section id="chef-note" aria-labelledby="chef-note-heading" className="mt-9 rounded-xl bg-panel px-5 py-6 sm:mt-11 sm:px-7">
                <p className="text-xs font-medium tracking-[0.16em] text-accent">CHEF&apos;S NOTE</p>
                <h2 id="chef-note-heading" className="mt-1 font-serif text-xl leading-normal tracking-tight text-ink sm:text-2xl">셰프 노트</h2>
                <p className="mt-4 text-sm leading-7 text-ink/75 break-keep">{recipe.chefNote}</p>
            </section>
        )}
        {relatedRecipes.length > 0 && <section id="related-recipes" aria-labelledby="related-recipes-heading" className="mt-9 border-t border-line pt-6 sm:mt-12 sm:pt-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 id="related-recipes-heading" className="font-serif text-2xl leading-normal tracking-tight text-ink sm:text-3xl">
                    함께 둘러볼 레시피
                </h2>
                <span className="text-xs text-body">주방의 다른 기록</span>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-6">
                {relatedRecipes.map(recipe =>
                    <li key={recipe.id}>
                        <RecipeCard recipe={recipe} />
                    </li>
                )}
            </ul>
        </section>}
    </main>
  )
}
