import Link from "next/link";
const links = [
  { href: "/discover", label: "Discover" },
  { href: "/#explore", label: "Explore" },
  { href: "/#learn", label: "Learn" },
  { href: "/#about", label: "Our mission" },
];
export function SiteHeader() {
  return <header className="site-header"><div className="header-inner">
    <Link className="wordmark" href="/" aria-label="Wildverse home"><span className="brand-mark" aria-hidden="true">✳</span> WILDVERSE<span className="brand-dot">.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
    <Link className="header-cta" href="/discover">Start exploring <span aria-hidden="true">↗</span></Link>
    <details className="mobile-nav"><summary aria-label="Navigation menu"><span></span><span></span></summary><nav aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label} <span aria-hidden="true">↗</span></Link>)}</nav></details>
  </div></header>;
}
