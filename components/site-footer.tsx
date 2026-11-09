import Link from "next/link";
export function SiteFooter() {
  return <footer><div className="wrap footer-inner"><div><Link className="wordmark" href="/"><span className="brand-mark" aria-hidden="true">✳</span> WILDVERSE<span className="brand-dot">.</span></Link><p>Explore every life.<br />Discover our wild world.</p></div><div className="footer-links"><div><span>EXPLORE</span><Link href="/discover">Species explorer</Link><Link href="/#explore">The natural world</Link><Link href="/#learn">Learn</Link></div><div><span>WILDVERSE</span><Link href="/#about">Our mission</Link><Link href="/#approach">Our approach</Link></div></div></div><div className="wrap footer-bottom"><span>© WILDVERSE · A WORLD WORTH KNOWING</span><span>MADE FOR THE CURIOUS, EVERYWHERE.</span></div></footer>;
}
