import Link from "next/link";
export function Footer() { return <footer className="bg-[#05698e] px-5 py-14 text-white">
  <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
    <div><img src="https://us-wbe-img2.gr-cdn.com/user/d651373d-9b11-4bc5-9645-3895ddb4fa48/0fd0bb05-b0e0-4161-802d-76bfe26655a5.png" alt="Lifetime Lifestyle" className="h-[60px] w-auto" /><p className="mt-5 max-w-xs text-sm leading-7 text-white/70">Simple, faith-filled resources to help families grow healthy and strong — inside and out.</p></div>
    <div><p className="eyebrow">Explore</p><div className="mt-4 grid gap-3 text-sm text-white/80"><Link href="/">Home</Link><Link href="/books">Books</Link><Link href="/programs">Programs & webinars</Link><Link href="/blogs">Blogs</Link><Link href="/about">About us</Link><Link href="/contact">Contact us</Link></div></div>
    <div><p className="eyebrow">Connect</p><p className="mt-4 text-sm leading-7 text-white/70">Phone: +1 918-658-9557<br /><a href="mailto:lifetimelifestylellc@gmail.com">lifetimelifestylellc@gmail.com</a></p><div className="mt-4 flex gap-4 text-sm"><a href="https://www.instagram.com/lifetimelifestylellc/">Instagram</a><a href="https://www.youtube.com/@Gina-lifestyle2024">YouTube</a></div></div>
  </div><div className="container mt-12 border-t border-white/10 pt-5 text-xs text-white/50">© 2025 Lifetime Lifestyle LLC. All Rights Reserved.</div>
</footer>; }
