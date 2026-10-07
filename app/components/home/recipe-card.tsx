import type { RecipeCardProps } from "@/types/recipe-types";

export default function RecipeCard(props: RecipeCardProps) {
    const { category, name, serving } = props.recipe;
  return (
    <article>
        <div>
        </div>
        <p>{category}</p>
        <h3>{name}</h3>
        <p>{serving}인분</p>     
    </article>
  );
};