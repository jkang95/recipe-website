export default function IntroSection() {
  return (
    <section id="intro" aria-labelledby="intro-heading" className="bg-canvas">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 border-b border-line px-6 py-12 sm:px-8 md:grid-cols-2 md:items-center md:gap-x-16 md:gap-y-6 md:px-10 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent md:col-span-2">
          FROM PROFESSIONAL KITCHENS TO YOUR HOME
        </p>

        <h1 id="intro-heading" className="max-w-xl font-serif text-4xl leading-[1.15] text-ink md:text-5xl">
          주방에서 직접 사용하는 레시피를 집에서도 간단하게
        </h1>

        <p className="max-w-xl text-base leading-7 text-body md:justify-self-end">
          흔한 요리책에 있지 않은 주방에서 실제로 사용하는 레시피를 집에서도
          간단하게 만들 수 있게 알려드립니다.
        </p>
      </div>
    </section>
  );
}