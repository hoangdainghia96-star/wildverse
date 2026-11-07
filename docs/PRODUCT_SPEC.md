# Product Specification

## 1. Vision

WILDVERSE is a digital natural-history museum and scientific animal encyclopedia. It should feel immersive and beautiful without sacrificing accuracy, accessibility, or usability.

**Core promise:** discover animal life visually, understand it clearly, and inspect the scientific evidence behind important claims.

## 2. Audience

The platform serves a broad audience:
- Curious general readers and families
- Students and educators
- Wildlife enthusiasts
- Advanced learners and researchers

Use progressive disclosure: concise explanations for beginners, expandable scientific detail for advanced users.

## 3. Scope of the knowledge catalogue

- All major animal groups, including vertebrates and invertebrates.
- Living and extinct taxa.
- All relevant taxonomic ranks in the underlying catalogue.
- Species are the primary browseable unit; individual animals are separate entities and are only added when credible individual-level data exists.
- Accepted, under-review, disputed, and synonym relationships must be distinguishable.

Do not claim that the catalogue contains every animal species until coverage, duplicates, taxonomy, and source licensing have been measured and validated.

## 4. Public site information architecture

1. **Home:** cinematic hero, global search, major animal groups, featured discoveries, ecosystem pathways, extinct-world feature, learning content, source/about section.
2. **Species Explorer:** browsable catalogue, taxonomy navigation, filters, sorting, and search.
3. **Species Profile:** scientific identity, common names, classification, biology, ecology, distribution, conservation where applicable, media, evidence and sources.
4. **Earth Explorer:** interactive 2D geographic map with optional future 3D globe entry point.
5. **Ecosystems:** forests, oceans, deserts, mountains, polar regions, freshwater and other habitats.
6. **Extinct World:** extinct animal taxa, geological period, fossil evidence, discovery locations, reconstruction uncertainty.
7. **Learn:** accessible educational explainers and curated journeys.
8. **Scientific Sources:** methods, source registry, licensing approach, editorial standards and project information.
9. **Account area (optional):** favorites, collections, history, watchlist, notification preferences and sync.
10. **Admin area (private):** catalogue operations, taxonomy, editorial review, media, imports, monitoring and access management.

## 5. Homepage experience

Selected direction: **Hybrid Experience**.

- Cinematic visual hero creates emotional entry.
- Prominent search makes the encyclopedia immediately useful.
- Animal group cards and curated discoveries help browsing.
- Earth Explorer and ecosystem sections provide interactive exploration.
- Extinct World and learning sections deepen engagement.
- Avoid putting every feature above the fold; use an intentional page journey.

## 6. Adaptive visual identity

Use a consistent brand across dark and light sections:
- Dark nature sections for cinematic storytelling, Earth Explorer, featured experiences and Extinct World.
- Warm light sections for data-heavy pages, search results, species facts and scientific reading.
- The same typography, spacing, color semantics, component language and navigation must unify both modes.

## 7. Species profile content layers

### Layer 1 — Core Record
- Stable Wildverse ID
- Accepted scientific name where an authority supports it
- Common names and synonyms with language/region metadata
- Taxonomic placement and authority/version
- Taxonomic status and source provenance

### Layer 2 — Enriched Profile
- Description and morphology
- Habitat, diet, behavior and reproduction
- Ecology and distribution
- Conservation information when applicable
- Claims linked to sources and review state

### Layer 3 — Comprehensive Profile
- Licensed photos and videos
- 2D maps and distribution layers
- Selected 3D model/anatomy/fossil reconstruction
- Deeper research references and interactive learning

A completeness indicator measures how much information is present; it must not be confused with taxonomic confidence or evidence quality.

## 8. Discovery and search

Initial search should use PostgreSQL-native capabilities:
- Exact and full-text search across scientific/common names and aliases
- Fuzzy matching for misspellings
- Structured taxonomy and biological filters
- Filters for habitat, diet, conservation status and temporal/geological fields where data supports them

Natural-language discovery can later translate user requests into structured filters. Returned taxa must come from actual catalogue records, not model invention.

## 9. Accounts and notifications

Public reading and basic search remain open without registration. Optional free accounts may save favorites, collections, history and watchlists, and sync between devices.

Personalized updates are opt-in. Start with in-app notifications and optional email for meaningful verified updates. Users control topics and frequency and can unsubscribe easily. Do not send every minor database change.

Community contributions are not in the initial MVP. If introduced later, they require moderation, identity/privacy controls, provenance, and review workflow.

## 10. AI assistant — later phase

WILDVERSE INTELLIGENCE is a research and discovery assistant, not an ungrounded general chatbot. Planned abilities include Q&A, comparisons, biology explanations, discovery journeys and source retrieval.

Answers should use a verified knowledge network and show inline citations plus an evidence panel. Distinguish direct evidence, synthesis/inference, hypotheses, disputes and insufficient evidence. Core catalogue/search must work when AI quota or services are unavailable.
