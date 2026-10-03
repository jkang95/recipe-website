import Link from "next/link";

export default function AboutContactCta() {
  return (
    <section aria-labelledby="about-contact-heading" className="bg-canvas">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-y-4 border-b border-line px-6 py-12 sm:px-8 md:grid-cols-2 md:items-center md:gap-x-16 md:gap-y-6 md:px-10 md:py-16">
        <p className="text-xs font-medium tracking-[0.16em] text-accent md:col-span-2">
          ONE GOOD SAUCE. A WHOLE NEW DISH
        </p>

        <h2 id="about-contact-heading" className="max-w-md font-serif text-4xl leading-tight text-ink md:text-5xl">
          좋은 소스 하나가
          <br />
          맛의
          <br />
          전부를 바꾸다
        </h2>

        <div className="max-w-xl md:justify-self-end">
          <p className="text-body">
            여러 주방에서 반복해 만들고 실패를 줄인 레시피를 소개합니다. 좋은
            결과보다 다시 만들 수 있는 과정을 먼저 생각합니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
              소개
            </Link>

            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-cta px-6 py-3 text-sm text-canvas transition-colors hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
              문의
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}