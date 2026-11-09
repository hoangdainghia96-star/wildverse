import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SpeciesCard } from "@/components/species-card";
import { findSpecies } from "@/lib/species";

export const metadata = { title: "Species explorer | WILDVERSE", description: "Explore the WILDVERSE demonstration catalogue." };

type Props = { searchParams: Promise<{ q?: string | string[]; group?: string | string[] }> };
export default async function Discover({ searchParams }: Props) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";
  const group = typeof params.group === "string" ? params.group : "";
  const results = findSpecies(query, group);
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">
    <section className="catalogue-hero"><div className="wrap"><p className="eyebrow light"><span className="eyebrow-line" /> THE WILDVERSE COLLECTION</p><h1>Meet the <em>living world.</em></h1><p>A starting point for discovery. Explore our small demonstration collection, one species at a time.</p></div></section>
    <section className="catalogue-content wrap"><div className="catalogue-intro"><div><p className="eyebrow"><span className="eyebrow-line" /> SPECIES EXPLORER</p><h2>A closer look.</h2></div><p>This is a limited, manually curated demo—not a complete catalogue. Follow the sources on each profile for more detail.</p></div>
      <form className="search-form" action="/discover" method="get"><div className="search-field"><label htmlFor="q">Search the collection</label><input id="q" name="q" type="search" defaultValue={query} placeholder="Try a name, group or family" /></div><div className="search-field"><label htmlFor="group">Animal group</label><select id="group" name="group" defaultValue={group}><option value="">All groups</option><option>Mammals</option><option>Reptiles</option><option>Insects</option></select></div><button className="button search-button" type="submit">Search <span aria-hidden="true">↗</span></button></form>
      <div className="results-heading"><p aria-live="polite">{results.length} {results.length === 1 ? "species" : "species"} found</p><Link href="/discover">Clear filters <span aria-hidden="true">↗</span></Link></div>
      {results.length ? <div className="species-grid">{results.map(item => <SpeciesCard item={item} key={item.slug} />)}</div> : <div className="empty-state"><h3>No species found.</h3><p>Try another name or clear your filters. This demo currently contains only four species.</p><Link className="text-link" href="/discover">VIEW ALL SPECIES ↗</Link></div>}
    </section>
  </main><SiteFooter /></>;
}
