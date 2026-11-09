import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { species } from "@/lib/species";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return species.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = species.find(entry => entry.slug === slug);
  return { title: item ? `${item.scientificName} | WILDVERSE` : "Species not found | WILDVERSE" };
}
export default async function SpeciesPage({ params }: Props) {
  const { slug } = await params;
  const item = species.find(entry => entry.slug === slug);
  if (!item) notFound();
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">
    <section className={`profile-hero ${item.color}`}><div className="wrap"><Link href="/discover" className="back-link">← BACK TO THE COLLECTION</Link><div className="profile-heading"><div><p className="eyebrow light"><span className="eyebrow-line" /> {item.group.toUpperCase()} / SPECIES PROFILE</p><h1><i>{item.scientificName}</i></h1><p className="profile-common">{item.commonName}</p></div><div className="profile-symbol" aria-hidden="true">{item.symbol}</div></div></div></section>
    <section className="profile-content wrap"><div className="profile-main"><p className="eyebrow"><span className="eyebrow-line" /> AN INTRODUCTION</p><h2>Get to know<br /><em>{item.commonName.toLowerCase()}.</em></h2><p className="profile-description">{item.description} <a href="#source" aria-label="See source for this description">[1]</a></p><div className="profile-detail"><h3>Habitat & range</h3><p>{item.habitat} <a href="#source" aria-label="See source for habitat and range">[1]</a></p></div><div className="source-box" id="source"><p className="eyebrow">SOURCE & CONTEXT</p><h3>Follow the evidence.</h3><p>[1] <a href={item.source.url}>{item.source.name} ↗</a><br />Accessed {item.source.accessed}. This demonstration summary is paraphrased from the linked species account. Source accounts may age; consult current authorities before relying on taxonomy or range information.</p></div></div><aside className="profile-aside"><p className="eyebrow">AT A GLANCE</p><dl><div><dt>Scientific name</dt><dd><i>{item.scientificName}</i> <a href="#source">[1]</a></dd></div><div><dt>Common name</dt><dd>{item.commonName} <a href="#source">[1]</a></dd></div><div><dt>Group</dt><dd>{item.group} <a href="#source">[1]</a></dd></div><div><dt>Family</dt><dd>{item.family} <a href="#source">[1]</a></dd></div><div><dt>Conservation status</dt><dd>Not assessed in this demo</dd></div></dl><p className="aside-note">A demonstration profile, not a complete scientific record. Unavailable information is intentionally omitted.</p></aside></section>
    <div className="wrap profile-return"><Link href="/discover" className="text-link">← EXPLORE MORE SPECIES</Link></div>
  </main><SiteFooter /></>;
}
