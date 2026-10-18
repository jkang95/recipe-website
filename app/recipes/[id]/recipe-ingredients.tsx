import { RecipeIngredientsProps } from '@/types/recipe-types'

export default function RecipeIngredients(props: RecipeIngredientsProps ) {
    const { ingredients, serving } = props;
    return (
    <section id="ingredients" aria-labelledby="ingredients-heading">
        <h2 id="ingredients-heading" className="font-serif text-2xl leading-normal tracking-tight text-ink sm:text-3xl">재료</h2>

        <ul className="mt-4 divide-y divide-line rounded-xl bg-panel px-4 py-2 sm:px-5">
            {ingredients.map(ingredient => 
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
  )
}
