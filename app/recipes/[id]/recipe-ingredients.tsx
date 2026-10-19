"use client"

import { useState } from "react";
import { RecipeIngredientsProps } from '@/types/recipe-types'

export default function RecipeIngredients(props: RecipeIngredientsProps ) {
    const { ingredients, serving } = props;
    const [selectedServing, setSelectedServing] = useState(serving);

    const servingRatio = selectedServing / serving;
    
    return (
    <section id="ingredients" aria-labelledby="ingredients-heading">
        <div className="flex min-h-11 flex-wrap items-center jsutify-between gap-3">
            <h2 id="ingredients-heading" className="font-serif text-2xl leading-normal tracking-tight text-ink sm:text-3xl">재료</h2>
            <div role="group" aria-label="인분 조절" className="inline-flex items-center rounded-full border border-line">
                <button 
                    type="button" 
                    disabled={selectedServing === 1} 
                    onClick={() => setSelectedServing(prev => Math.max(1,prev - 1))}
                    className="grid h-11 w-11 place-items-center rounded-full text-lg text-ink transition-colors enabled:hover:bg-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-30"    
                >
                    -
                </button>
                <span
                    aria-live="polite"
                    aria-atomic="true"
                    className="min-w-14 text-center text-sm tabular-nums text-ink"
                >
                    {selectedServing}인분
                </span>
                <button 
                    type="button" 
                    onClick={() => setSelectedServing(prev => prev + 1)}
                    className="grid h-11 w-11 place-items-center rounded-full text-lg text-ink transition-colors enabled:hover:bg-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-30"
                >
                    +
                </button>
            </div>
        </div>
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
                                    {Math.round(ingredient.quantity * servingRatio)}{ingredient.unit}
                                </span>
                            )}
                    </label>
                </li>
            )}
        </ul>
    </section>
  )
}
