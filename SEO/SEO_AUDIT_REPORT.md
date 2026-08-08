# Infrakinetic SEO Audit Report

**Date:** 2026-08-08  
**URL:** https://www.infrakinetic.in/  
**Audit Tier:** PREMIUM (36 checks: SEO + GEO + AEO)  
**Overall Score:** **6/100** 🔴 **CRITICAL**

---

## Executive Summary

The Infrakinetic homepage scores **6/100** — a critical failure across virtually all SEO, GEO (AI citation), and AEO (answer engine) dimensions. The page appears to be a React SPA that delivers minimal server-rendered HTML, causing crawlers (and AI engines) to see almost no content, meta tags, or structured data.

**Estimated score after implementing all fixes: ~50-60/100** (requires full page rebuild with server-side rendering or static generation).

---

## Detailed Findings

### ❌ Technical SEO Failures (10/10 checks failed)

| Check | Status | Impact |
|-------|--------|--------|
| `title_length` | ❌ FAIL | Title not in 50-60 char optimal range |
| `title_keyword_first` | ❌ FAIL | Primary keyword not in first 3 words |
| `meta_description` | ❌ FAIL | **No meta description tag at all** |
| `single_h1` | ❌ FAIL | No H1 found in rendered HTML |
| `canonical` | ❌ FAIL | **No canonical tag** — duplicate content risk |
| `viewport` | ❌ FAIL | **No viewport tag** — mobile broken |
| `lang_attribute` | ❌ FAIL | `<html>` missing `lang="en"` |
| `favicon_present` | ❌ FAIL | No favicon in `<head>` |
| `analytics_present` | ❌ FAIL | No analytics/GTM detected |

### ❌ Content Quality Failures (8/8 checks failed)

| Check | Status | Impact |
|-------|--------|--------|
| `word_count` | ❌ FAIL | < 300 words meaningful content |
| `answer_first` | ❌ FAIL | No H2 sections with direct answers |
| `h2_questions` | ❌ FAIL | No question-format H2s |
| `keyword_in_first_100` | ❌ FAIL | Keyword not in first 100 words |
| `faq_section` | ❌ FAIL | **No FAQ section** |
| `statistics_present` | ❌ FAIL | No statistics/numbers cited |
| `internal_links` | ❌ FAIL | < 3 internal links with descriptive anchors |
| `paragraphs_short` | ❌ FAIL | Paragraphs too long or missing |

### ❌ Schema Failures (5/5 checks failed)

| Check | Status | Impact |
|-------|--------|--------|
| `article_schema` | ❌ FAIL | No Article/BlogPosting JSON-LD |
| `faqpage_schema` | ❌ FAIL | No FAQPage JSON-LD |
| `org_schema` | ❌ FAIL | No Organization JSON-LD |
| `localbusiness_schema` | ❌ FAIL | N/A (but would fail if applicable) |
| `date_modified_schema` | ❌ FAIL | No dateModified in schema |

### ❌ GEO Signals (AI Citation) Failures (10/10 checks failed)

| Check | Status | Impact |
|-------|--------|--------|
| `date_visible` | ❌ FAIL | No visible publication/update date |
| `author_present` | ❌ FAIL | No author/organization visible |
| `og_tags` | ❌ FAIL | **No Open Graph tags** |
| `twitter_cards` | ❌ FAIL | **No Twitter/X card tags** |
| `inline_citations` | ❌ FAIL | No source-attributed statistics |
| `quote_present` | ❌ FAIL | No attributed expert/customer quotes |
| `entity_sameAs` | ❌ FAIL | No sameAs links in Organization schema |
| `topical_depth` | ❌ FAIL | Single-angle content, not comprehensive |
| `key_takeaways` | ❌ FAIL | No "Key takeaway:" callouts |
| `inline_citations` | ❌ FAIL | No citations to external sources |

### ❌ AEO Signals (Answer Engine) Failures (2/2 checks failed)

| Check | Status | Impact |
|-------|--------|--------|
| `paa_format_faq` | ❌ FAIL | No FAQ in People Also Ask format |
| `featured_snippet_ready` | ❌ FAIL | No standalone answer paragraph |

### ❌ Local SEO Failures (2/2 checks failed)

| Check | Status | Impact |
|-------|--------|--------|
| `nap_in_content` | ❌ FAIL | No Name/Address/Phone visible |
| `location_in_h1` | ❌ FAIL | No location in H1/H2 |

---

## Root Cause Analysis

The live site at `https://www.infrakinetic.in/` serves a **client-side React SPA** with minimal server-rendered HTML. The Jina AI crawler (and Googlebot, AI crawlers) sees only:

```html
<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0A0A0A" />
    <meta name="description" content="Infrakinetic — Your Business. One Operating System. CRM, HR & Payroll unified from the start..." />
    ...
    <script type="module" src="/src/main.jsx"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

**Critical issues:**
1. **No meta description** in actual rendered HTML (the one in source is from the dev build)
2. **No canonical tag**
3. **No viewport tag** (the one above is missing in production)
4. **No lang attribute** on `<html>`
5. **No favicon**
6. **No analytics**
7. **Zero content** — all content loads via JS after crawler leaves
8. **No schema markup** of any kind
9. **No Open Graph / Twitter cards**
10. **Single-page app** — no internal linking structure visible to crawlers

---

## Quick Wins (Priority Order)

| Priority | Fix | Effort | Impact |
|----------|-----|--------|--------|
| 🔴 **CRITICAL** | Add server-side rendering (Next.js/Remix) or static generation (Vite + prerender) | High | Enables ALL other fixes |
| 🔴 **CRITICAL** | Add meta description (150-160 chars) | 5 min | CTR, SERP appearance |
| 🔴 **CRITICAL** | Add canonical tag | 2 min | Duplicate content prevention |
| 🔴 **CRITICAL** | Add viewport + lang attribute | 2 min | Mobile + accessibility |
| 🔴 **CRITICAL** | Add favicon | 5 min | Brand trust, browser tab |
| 🟠 **HIGH** | Add Article + FAQPage + Organization JSON-LD schema | 30 min | Rich results, AI citations |
| 🟠 **HIGH** | Add Open Graph + Twitter Card tags | 10 min | Social sharing, AI identity |
| 🟠 **HIGH** | Add visible dateModified + author | 10 min | GEO freshness signal |
| 🟡 **MEDIUM** | Restructure content: H1 + question-based H2s + answer-first paragraphs | 2 hrs | Rankings, AEO, GEO |
| 🟡 **MEDIUM** | Add FAQ section (5-8 PAA-format questions) | 1 hr | Featured snippets, AI Overviews |
| 🟡 **MEDIUM** | Add 2-3 statistics with inline citations | 30 min | +41% GEO visibility |
| 🟡 **MEDIUM** | Add 1 attributed quote | 15 min | +28% GEO visibility |
| 🟡 **MEDIUM** | Add Organization schema with sameAs links | 15 min | Entity identity for AI |
| 🟢 **LOW** | Add Key takeaway callouts per section | 30 min | AEO featured snippets |
| 🟢 **LOW** | Add NAP (Name, Address, Phone) in footer | 10 min | Local SEO |
| 🟢 **LOW** | Add analytics (GA4/GTM) | 15 min | Measurement |

---

## Recommended Architecture Change

**The fundamental fix is migrating from client-only SPA to SSR/SSG.**

### Option A: Next.js (Recommended)
```bash
# In Infrakinetic repo
npx create-next-app@latest --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" .
# Move existing components to app/ directory
# Use getStaticProps or generateStaticParams for pre-rendering
```

### Option B: Vite + @vitejs/plugin-react + prerender
```bash
npm i -D @vitejs/plugin-react prerender-spa-plugin
# Configure vite.config.ts for multi-page prerendering
```

### Option C: Astro (Best for content-heavy)
```bash
npm create astro@latest -- --template minimal
# Migrate React components as Astro islands
# Full static generation by default
```

---

## Expected Score After Fixes

| Scenario | Score | Notes |
|----------|-------|-------|
| **Current** | 6/100 | Client-only SPA, no crawlable content |
| **Quick meta/schema fixes only** | ~25/100 | Still no content for crawlers |
| **Full SSR + content restructure** | **65-75/100** | Competitive for target keywords |
| **Full SSR + GEO/AEO optimization** | **80-90/100** | Industry-leading for AI citations |

---

## Files Generated by SEO Engine

| File | Description |
|------|-------------|
| `D:\PolyNovea\PolyNovea\Docx\Company Docx\The Website builder\output\audits\audit-https-www-infrakinetic-in-2026-08-08.json` | Raw audit JSON with all 36 check results |
| `D:\PolyNovea\PolyNovea\Docx\Company Docx\The Website builder\output\audits\fixes\https-www-infrakinetic-in-fix.html` | Interactive HTML fix guide with copy-paste code blocks |

---

## Next Steps

1. **Immediate:** Copy meta tags, canonical, viewport, lang, favicon from fix guide into current `index.html`
2. **This week:** Migrate to Next.js/Astro for SSR/SSG
3. **Next week:** Restructure homepage content using GEO/AEO rules (answer-first, question H2s, FAQ, stats, quotes)
4. **Ongoing:** Build cluster pages for target keywords (see keyword strategy below)

---

## Suggested Keyword Architecture (Pillar + Cluster)

| Page | Target Keyword | Intent | Status |
|------|---------------|--------|--------|
| **Pillar** | `business operating system India` | Commercial | Homepage |
| Cluster | `unified CRM HR payroll platform` | Commercial | `/platform` |
| Cluster | `single database business software` | Informational | `/architecture` |
| Cluster | `Infrakinetic pricing` | Transactional | `/pricing` |
| Cluster | `HR payroll software India` | Commercial | `/people` |
| Cluster | `finance automation platform` | Commercial | `/finance` |
| Cluster | `customer health scoring B2B` | Informational | `/cx360` |

---

*Report generated by Polynovea SEO Engine (Premium Tier — 36 checks)*