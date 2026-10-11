

export default async function RecipeDetail({
    params,
}: {
    params: Promise<{ id: string}>;
}) {

    const { id } = await params;

  return (
    <main>
        <h1>레시피 상세</h1>
        <p>레시피 번호 {id}</p>
    </main>
  )
}
