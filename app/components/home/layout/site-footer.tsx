import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="mx-auto w-full max-w-7xl bg-canvas px-6 py-8 sm:px-8 md:px-10">
            <nav aria-label="푸터 메뉴">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-body">
                    <li><Link href="/recipes" className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">레시피</Link></li>
                    <li><Link href="/about" className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">요리사 이야기</Link></li>
                    <li><Link href="/contact" className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">문의</Link></li>
                    <li><Link href="/privacy" className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">개인정보처리방침</Link></li>
                </ul>
            </nav>
             <p className="mt-4 text-xs leading-6 text-body">© 2026 Jingles</p>
        </footer>
    );
}