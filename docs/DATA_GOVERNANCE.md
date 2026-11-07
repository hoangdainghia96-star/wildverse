# Scientific Data Governance

## 1. Taxonomic policy

Use a multi-source taxonomy model with a designated **Primary Authority per taxonomic scope** (for example, group, region, or living/extinct domain). Do not assume one authority is universally best for all animal groups.

Store the selected authority, source release/version, effective date and selection rationale. Retain meaningful alternative opinions rather than flattening disagreements into false certainty.

Public taxonomic states:
- `ACCEPTED`: accepted by the configured authority for the relevant scope/version.
- `UNDER_REVIEW`: under active review or not resolved.
- `DISPUTED`: meaningful taxonomic disagreement exists.
- `SYNONYM`: a name linked to the relevant taxon concept; do not make it a duplicate species record by default.

A single species is a taxon at rank Species. The catalogue should also represent higher/lower taxonomic ranks and extinct taxa. Individual animals are separate entities.

## 2. Identity and taxon history

Every Wildverse taxon gets an immutable internal ID (format is implementation-defined; do not rely on sequential public IDs). Store external identifiers separately with their source and version.

Never reuse a Wildverse ID. If a taxon is split, merged, renamed or synonymized, create explicit relationship/history records and retain prior assertions and source lineage.

Names are data records with language, region, name type, source, validity and status. Scientific names should be rendered with correct typographic conventions; common names may vary by region.

## 3. Progressive completeness

- Level 1 Core Record: stable identity, accepted/scientific name where available, rank/placement, taxonomic status and provenance.
- Level 2 Enriched Profile: sourced morphology, habitat, diet, behavior, reproduction, ecology, distribution and conservation claims.
- Level 3 Comprehensive Profile: licensed media, map layers, deeper references, 3D assets and interactive content.

Completeness is separate from taxonomic acceptance and evidence quality. Missing fields must remain explicitly unknown/unavailable.

## 4. Dual-track launch

Track 1: broad global catalogue sourced from approved datasets, with verified core records and progressive enrichment.

Track 2: curated Featured Collection with deeper, carefully reviewed profiles spanning multiple groups and including extinct animals.

Do not announce a global species count before normalization, deduplication, source-license checks and taxonomy review.

## 5. Intelligent ingestion pipeline

1. Connector retrieves an approved source release or API response.
2. Preserve original payload and source metadata in immutable raw staging.
3. Check license, redistribution rights, source terms and attribution requirements.
4. Validate schema and expected fields.
5. Normalize scientific names, ranks, identifiers and concepts.
6. Match external identifiers and detect duplicates.
7. Detect conflicts, taxonomic changes and high-impact differences.
8. Auto-accept only low-risk, structurally valid updates covered by an approved policy.
9. Route disputed, consequential, novel biological or rights-unclear records to review.
10. Publish approved normalized records transactionally and record a full audit trail.

Never directly overwrite published data from an upstream synchronization job.

## 6. Sources and evidence

Maintain a source registry including publisher/provider, dataset/document title, URL or persistent identifier, version, access date, publication date, license, attribution, terms, scope, and reliability notes.

Claims should be separately stored or linked to evidence records. Retain page/section/record identifiers where available. Distinguish source reliability from search relevance.

Useful source families include Catalogue of Life, GBIF, OBIS, IUCN, BirdLife and specialist or peer-reviewed sources. These are candidate sources, not blanket permission to reuse all their data. Check the license/terms for every dataset and field.

## 7. Licensing policy

Prefer public-domain/CC0 and compatible open licenses such as CC BY. CC BY-SA and other licenses require case-by-case compatibility review. Non-commercial or no-derivatives terms must not be treated as freely reusable for all purposes.

Track rights separately for dataset contents, database structure, prose, photographs, videos, maps, 3D models and AI-generated assets. Store creator, source, exact license/version, attribution text, acquisition date, permitted transformations, commercial permissions and redistribution conditions.

Unknown or incompatible rights block public publication. Do not infer permission from public availability or the ability to download a file.

## 8. Media governance

Prefer authentic wildlife photography/video with verified reuse rights. Clearly label AI illustrations and scientific reconstructions, especially extinct animals. Never present generated imagery as documentary photography.

Store original/source reference and optimized derivatives separately. Sharp may produce thumbnails/responsive variants in suitable formats. Record dimensions, checksum, MIME type, creator, attribution, license and processing history.

## 9. Geospatial evidence

Use separate layers for:
- occurrence observations
- accepted/known range polygons
- modeled range predictions
- migration routes
- historical range/fossil evidence

Every feature needs source, license, date/time coverage, coordinate uncertainty, evidence type, taxonomic match, methodology and review status.

Do not turn scattered occurrence points into a range polygon without a valid method/source. Apply generalization, delay or suppression for sensitive species locations and any locations that could facilitate poaching or disturbance.

## 10. Translation governance

English is the launch language. Store localized content separately by language/region and source revision. AI-assisted translations use a controlled biological glossary and must be reviewed before publication, especially scientific/conservation content. Scientific names, IDs, citations, units and numerical values must remain consistent.

## 11. AI/RAG knowledge governance

Only approved/reviewed content is eligible for the primary RAG index. Use hybrid retrieval (PostgreSQL full text/trigram plus pgvector) and keep evidence relevance separate from scientific reliability scoring.

Use versioned embedding model identifiers, dimensions, chunking/preprocessing config and index generation. Never mix incompatible embedding spaces. Re-embed using a controlled migration process.

RAG answers should include inline claim citations and an evidence panel. Distinguish established fact, observation, model output, inference, hypothesis and uncertainty. If evidence is insufficient, say so.
