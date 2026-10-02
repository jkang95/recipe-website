import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer>
            <nav aria-label="푸터 메뉴">
                <ul>
                    <li><Link href="/recipes">레시피</Link></li>
                    <li><Link href="/about">요리사 이야기</Link></li>
                    <li><Link href="/contact">문의</Link></li>
                </ul>
            </nav>
        </footer>

    );
}