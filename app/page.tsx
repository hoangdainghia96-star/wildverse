import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SpeciesCard } from "@/components/species-card";
import { species } from "@/lib/species";

export default function Home() {
  return <div id="top">
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="Conceptual artwork of a deer in a misty forest valley" />
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <p className="eyebrow light"><span className="eyebrow-line" /> A WORLD WORTH KNOWING</p>
          <h1 id="hero-title">Every life has<br /><em>a story.</em></h1>
          <p className="hero-copy">Step into the wild. Discover the remarkable diversity of animal life, and the stories that connect us all.</p>
          <Link href="/discover" className="button button-light">Explore the collection <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-bottom wrap"><span>SCROLL TO DISCOVER <span aria-hidden="true">↓</span></span><span>CONCEPTUAL ARTWORK · NOT A WILDLIFE PHOTOGRAPH</span></div>
      </section>

      <section className="intro wrap" id="about">
        <div><p className="eyebrow"><span className="eyebrow-line" /> WELCOME TO WILDVERSE</p><h2>A little closer to<br /><em>the living world.</em></h2></div>
        <div className="intro-copy"><p>Wildlife is all around us, yet there is always more to discover. WILDVERSE is a growing home for the curious—a place to explore animal life with wonder and a commitment to science.</p><a className="text-link" href="#approach">THE WAY WE WORK <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="discover section-pad" id="discover"><div className="wrap">
        <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> A FIRST LOOK AT THE COLLECTION</p><h2>Meet your<br /><em>fellow earthlings.</em></h2></div><p>A few stories to begin with.<br />A world of discovery still to come.</p></div>
        <div className="species-grid featured-grid">{species.slice(0, 3).map(item => <SpeciesCard key={item.slug} item={item} />)}</div>
        <div className="discover-bottom"><p>Explore our small, source-linked demonstration collection.</p><Link className="text-link" href="/discover">VIEW ALL SPECIES <span aria-hidden="true">↗</span></Link></div>
      </div></section>

      <section className="feature section-pad" id="explore"><div className="wrap feature-grid">
        <div className="feature-art"><div className="art-label">CONCEPTUAL ARTWORK <span> / </span> 01</div></div>
        <div className="feature-content"><p className="eyebrow light"><span className="eyebrow-line" /> AN INVITATION TO EXPLORE</p><h2>One planet.<br /><em>Countless ways</em><br />to be alive.</h2><p>From ocean depths to forest canopies, the natural world invites a closer look. Explore the connections between animals, their environments, and the greater web of life.</p><a href="#learn" className="button button-outline">Discover the stories <span aria-hidden="true">↗</span></a></div>
      </div></section>

      <section className="learning section-pad" id="learn"><div className="wrap"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> THE CURIOUS MIND</p><h2>Wonder is just<br /><em>the beginning.</em></h2></div><p>A little knowledge can change the way<br />we see the world.</p></div>
        <div className="learning-grid"><article className="learning-card"><span className="learning-number">01 / THE BIG PICTURE</span><div className="learning-symbol" aria-hidden="true">✳</div><h3>What is biodiversity?</h3><p>A starting point for thinking about the variety of life around us.</p><span className="coming-soon">LEARNING GUIDE · COMING SOON</span></article><article className="learning-card"><span className="learning-number">02 / THE FAMILY TREE</span><div className="learning-symbol" aria-hidden="true">⌘</div><h3>How do we classify life?</h3><p>An introduction to the names and relationships that help us navigate nature.</p><span className="coming-soon">LEARNING GUIDE · COMING SOON</span></article><article className="learning-card"><span className="learning-number">03 / OUR APPROACH</span><div className="learning-symbol" aria-hidden="true">◌</div><h3>Why sources matter</h3><p>Good discovery starts with evidence, transparency, and room for uncertainty.</p><span className="coming-soon">LEARNING GUIDE · COMING SOON</span></article></div>
      </div></section>
      <section className="mission" id="approach"><div className="wrap mission-inner"><p className="eyebrow light"><span className="eyebrow-line" /> BUILT ON CURIOSITY & CARE</p><h2>For a world that never<br />stops <em>wondering.</em></h2><p>We’re building WILDVERSE with science, thoughtful sourcing, and an openness to what we have yet to learn. The journey is just beginning.</p><a className="button button-light" href="#top">Back to the beginning <span aria-hidden="true">↑</span></a></div></section>
    </main>
    <SiteFooter />
  </div>;
}
