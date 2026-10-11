import Link from "next/link"

export default function RecipeNotFound() {
  return (
    <main className="mx-auto border-b border-line flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-8 md:px-10">
        <h1 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            레시피를 찾을 수 없어요.
        </h1>
        <Link href="/recipes" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-ink bg-ink px-6 py-3 text-sm font-medium text-canvas transition-colors hover:bg-ink/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
            전체 레시피 보기
        </Link>
    </main>
  )
}

