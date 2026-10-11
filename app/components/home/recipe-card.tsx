import type { RecipeCardProps } from "@/types/recipe-types";
import Link from "next/link";

export default function RecipeCard(props: RecipeCardProps) {
    const { id, category, name, serving } = props.recipe;
  return (
    <Link href={"/recipes/" + id} className="block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
      <article className="min-w-0">
          <div className="aspect-[4/3] w-full rounded-lg bg-line">
          </div>
          <p className="mt-4 text-xs font-medium tracking-wide text-accent">{category}</p>
          <h3 className="mt-1 font-serif text-xl leading-snug text-ink">{name}</h3>
          <p className="mt-2 text-sm text-body">{serving}인분</p>     
      </article>
    </Link>
  );
};