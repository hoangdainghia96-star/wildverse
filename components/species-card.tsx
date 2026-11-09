import Link from "next/link";
import type { Species } from "@/lib/species";

export function SpeciesCard({ item }: { item: Species }) {
  return <article className="species-card">
    <Link href={`/species/${item.slug}`} className="species-card-link">
      <div className={`species-card-art ${item.color}`} aria-hidden="true"><span>{item.symbol}</span><small>WILDVERSE / FIELD NOTES</small></div>
      <div className="species-card-body"><div className="species-card-meta"><span>{item.group}</span><span>↗</span></div><h3><i>{item.scientificName}</i></h3><p>{item.commonName}</p></div>
    </Link>
  </article>;
}
