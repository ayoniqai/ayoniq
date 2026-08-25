# AYONIQ SEO MASTER ROADMAP

Official Website • Technical SEO • Entity • Research • Discoverability

**উদ্দেশ্য:** ayoniq.org-কে AYONIQ-এর official source of truth হিসেবে সাজানো—যেখানে company, products, research, projects, open-source work এবং official updates প্রথম পক্ষের (first-party) তথ্য হিসেবে প্রকাশিত হবে।

## 1. SEO-এর মূল নীতি
- [ ] AYONIQ.org-এ অন্য কোম্পানির সাধারণ news portal তৈরি করা হবে না।
- [ ] নিজস্ব Company Updates, Product Updates, Research, Projects, Open Source, Community ও Press coverage প্রকাশ করা হবে।
- [ ] SEO-এর লক্ষ্য শুধু traffic নয়; AYONIQ-এর brand/entity authority তৈরি করা।
- [ ] প্রতিটি গুরুত্বপূর্ণ page যেন crawlable, indexable, useful, original এবং internally linked হয়।

## 2. Recommended Website Structure

```
ayoniq.org/
├── about
├── technology
├── products
├── research
│   ├── publications
│   ├── projects
│   └── labs
├── updates
│   ├── company
│   ├── products
│   └── research
├── open-source
├── community
├── careers
├── press
└── contact

labs.ayoniq.org/
├── research
├── publications
├── projects
├── datasets
├── experiments
├── open-source
└── reports
```

## 3. Phase 0 — Foundation ও Asset Inventory
- [ ] Primary domain ঠিক করো: https://ayoniq.org/
- [ ] www বনাম non-www একটি canonical version নির্ধারণ করো এবং অন্য version 301 redirect করো।
- [ ] Cloudflare DNS/SSL এবং HTTPS ঠিকমতো চালু রাখো।
- [ ] AYONIQ logo-এর SVG/PNG, favicon, social image এবং organization information এক জায়গায় প্রস্তুত রাখো।
- [ ] Official social profiles-এর তালিকা তৈরি করো: X, Facebook, Instagram, LinkedIn, YouTube, GitHub।

## 4. Phase 1 — Technical SEO
- [ ] robots.txt তৈরি: https://ayoniq.org/robots.txt
- [ ] XML sitemap তৈরি: https://ayoniq.org/sitemap.xml
- [ ] Sitemap-এ শুধু index করতে চাওয়া canonical URL রাখো।
- [ ] প্রতিটি indexable page-এ canonical URL দাও।
- [ ] 404 এবং প্রয়োজন হলে 410 handling ঠিক করো।
- [ ] পুরনো URL স্থায়ীভাবে বদলালে 301 redirect ব্যবহার করো।
- [ ] Duplicate URL, query parameter ও trailing-slash সমস্যা নিয়ন্ত্রণ করো।
- [ ] Important content যেন JavaScript-এর কারণে search crawler থেকে লুকিয়ে না যায়।
- [ ] Mobile responsive design নিশ্চিত করো।
- [ ] Core Web Vitals ও page performance নিয়মিত পরীক্ষা করো।
- [ ] Images-এর জন্য WebP/AVIF, responsive sizing, lazy loading এবং meaningful alt text ব্যবহার করো।

*Google-এর guidance অনুযায়ী sitemap search engine-কে preferred/canonical URL discover করতে সাহায্য করে; root-এ sitemap রাখা এবং Search Console-এ submit করা recommended practice। একটি sitemap-এ সর্বোচ্চ 50,000 URL বা 50MB uncompressed সীমা রয়েছে।*

## 5. Phase 2 — Google ও Bing Setup
- [ ] Google Search Console-এ Domain property verify করো।
- [ ] Google Search Console → Sitemaps → sitemap.xml submit করো।
- [ ] Homepage, About, Products, Research ও গুরুত্বপূর্ণ pages URL Inspection দিয়ে check করো।
- [ ] Bing Webmaster Tools-এ domain verify করো।
- [ ] Bing-এ sitemap submit করো।
- [ ] IndexNow enable করো যাতে নতুন/updated/deleted URL-এর পরিবর্তন দ্রুত notify করা যায়।

## 6. Phase 3 — Homepage SEO
- **Recommended title:** AYONIQ — Artificial Intelligence & Emerging Technology
- **Recommended meta description:** AYONIQ is an Artificial Intelligence research and deployment company advancing AI through research, infrastructure, intelligent systems, and open technology.
- **H1-এর ধারণা:** Building Intelligence for a Better Future
- [ ] Homepage-এ AYONIQ কী, কী তৈরি করে, কোন technology areas-এ কাজ করে এবং ecosystem কী—স্পষ্টভাবে লিখো।
- [ ] Homepage-এ Organization এবং WebSite structured data যোগ করো।
- [ ] Official social profiles-এর sameAs links structured data ও footer-এ consistent রাখো।

## 7. Phase 4 — Entity SEO ও Brand Identity
- [ ] AYONIQ-এর official name, logo, description, URL এবং social profiles সব জায়গায় একইভাবে ব্যবহার করো।
- [ ] About page-এ company identity, mission, vision, products, research এবং official links রাখো।
- [ ] Founder/people information থাকলে dedicated profile page তৈরি করো।
- [ ] AYONIQ LABS-কে আলাদা research organization identity হিসেবে labs.ayoniq.org-এ প্রতিষ্ঠা করো।
- [ ] AYONIQ Community-কে community/collaboration identity হিসেবে রাখো।

## 8. Phase 5 — Page-by-Page On-Page SEO

| Page | SEO Title | H1 | Main intent | Schema |
|---|---|---|---|---|
| Home | AYONIQ — Artificial Intelligence & Emerging Technology | AYONIQ | Brand/entity | Organization + WebSite |
| About | About AYONIQ — AI & Technology Organization | About AYONIQ | Organization | Organization |
| Research | AYONIQ Research — AI, Computing & Emerging Technology | Research | Research | CollectionPage |
| Products | AYONIQ Products — AI, Cloud, Payments & More | Products | Products | Product/SoftwareApplication |
| Open Source | AYONIQ Open Source | Open Source | Projects | SoftwareSourceCode |
| Careers | Careers at AYONIQ | Careers | Jobs | JobPosting |
| Press | AYONIQ Press & Media | Press | External coverage | WebPage |

## 9. Phase 6 — Content Strategy
- [ ] Company Updates: launch, partnership, milestone, events, hiring, announcements।
- [ ] Product Updates: নতুন feature, release notes, documentation updates, security notices।
- [ ] Research: AYONIQ/AYONIQ LABS-এর নিজস্ব research, reports, experiments, publications।
- [ ] Projects: public projects, prototypes, open-source releases।
- [ ] Press: অন্যরা AYONIQ সম্পর্কে কোথায় লিখেছে—তার verified external coverage।
- [ ] Industry news চাইলে social media-তে commentary/share করা যাবে; official website-কে general AI news portal বানানো হবে না।

## 10. Research & Publication SEO
- [ ] প্রতিটি publication-এর unique title, abstract/summary, authors, publication date, updated date এবং references রাখো।
- [ ] PDF থাকলে HTML summary page-ও রাখো।
- [ ] Research pages থেকে related projects/datasets/code-এ internal links দাও।
- [ ] Original research-এর source, methodology এবং limitations স্পষ্ট করো।
- [ ] একই research-এর duplicate URL এড়িয়ে canonical URL নির্ধারণ করো।

## 11. Internal Linking & Information Architecture
- [ ] প্রতিটি গুরুত্বপূর্ণ page homepage বা navigation থেকে crawlable link পাবে।
- [ ] Research → Project → GitHub/Dataset → Publication একে অপরের সাথে link করবে।
- [ ] Products → Documentation → Updates → Contact flow তৈরি করো।
- [ ] Descriptive anchor text ব্যবহার করো; 'click here' কম ব্যবহার করো।
- [ ] Orphan page নিয়মিত খুঁজে internal link যোগ করো।

## 12. Structured Data / Schema Plan
- [ ] Homepage: Organization + WebSite
- [ ] Breadcrumb-enabled pages: BreadcrumbList
- [ ] Research/publications: Article/ScholarlyArticle যেখানে উপযুক্ত
- [ ] Software projects: SoftwareApplication/SoftwareSourceCode যেখানে উপযুক্ত
- [ ] Individual jobs: JobPosting
- [ ] Events: Event
- [ ] FAQ schema কেবল সত্যিকারের FAQ content থাকলে এবং current search-engine eligibility অনুযায়ী ব্যবহার করো।

## 13. Image & Social SEO
- [ ] প্রতিটি important image-এর descriptive filename রাখো।
- [ ] Meaningful alt text ব্যবহার করো; keyword stuffing করো না।
- [ ] Open Graph title, description ও image সেট করো।
- [ ] X/Twitter card metadata সেট করো।
- [ ] 1200×630 social share image-এর একটি master template রাখো।

## 14. Performance / Core Web Vitals
- [ ] Largest Contentful Paint (LCP) লক্ষ্য: ভালো performance বজায় রাখা; Google-এর current Core Web Vitals thresholds অনুসরণ করো।
- [ ] Cumulative Layout Shift (CLS) কম রাখো।
- [ ] Interaction to Next Paint (INP) ভালো রাখো।
- [ ] Above-the-fold image preload/priority ঠিকভাবে ব্যবহার করো।
- [ ] অপ্রয়োজনীয় third-party scripts কমাও।
- [ ] Next.js Image, font optimization, caching এবং CDN ব্যবহার করো।

## 15. Authority / Off-Page SEO
- [ ] Official GitHub repositories তৈরি ও maintain করো।
- [ ] Research publication-এর external citations/mentions তৈরি করো।
- [ ] Relevant universities, research communities ও technology publications-এর legitimate mentions পাওয়ার চেষ্টা করো।
- [ ] Company profiles-এ একই official website link ব্যবহার করো।
- [ ] Paid/spam backlink, PBN, automated link schemes এড়িয়ে চলো।

## 16. AI Search / Answer Engine Readiness
- [ ] Content factual, original, clearly structured এবং source-backed রাখো।
- [ ] Important facts HTML text হিসেবে রাখো; শুধু image-এর মধ্যে text রেখে দিও না।
- [ ] Entity names, dates, relationships এবং official URLs consistent রাখো।
- [ ] Research/product pages-এ concise summary + detailed content দুটোই রাখো।
- [ ] Updated content হলে accurate lastmod এবং update date ব্যবহার করো।
- [ ] Bing/Copilot-এর জন্য crawlability, internal links, sitemap, canonical ও IndexNow ঠিক রাখো।

## 17. Analytics & Monitoring
- [ ] Google Search Console: impressions, clicks, CTR, queries, indexing ও Core Web Vitals monitor করো।
- [ ] Bing Webmaster Tools: search performance, crawl issues, recommendations ও IndexNow status monitor করো।
- [ ] Analytics platform-এ organic landing pages ও conversions track করো।
- [ ] Broken links, 404, redirect chains এবং indexing anomalies নিয়মিত audit করো।
- [ ] মাসিক SEO report তৈরি করো।

## 18. 30-Day Implementation Plan

| সময় | কাজ |
|---|---|
| Day 1–3 | Domain/canonical, HTTPS, favicon, metadata architecture |
| Day 4–7 | robots.txt, sitemap.xml, canonical, 404, redirects |
| Week 2 | Search Console + Bing Webmaster + IndexNow |
| Week 2 | Homepage + About + Products + Research SEO |
| Week 3 | Organization/WebSite/Breadcrumb schema + OG/X metadata |
| Week 3 | Internal linking + image optimization + performance |
| Week 4 | Research/Project/Open Source pages + external profile consistency |
| Day 30 | Full crawl audit + indexing review + fix priority issues |

## 19. Priority Checklist
- [ ] P0 — HTTPS + canonical domain
- [ ] P0 — robots.txt
- [ ] P0 — sitemap.xml
- [ ] P0 — Google Search Console
- [ ] P0 — Bing Webmaster Tools
- [ ] P0 — IndexNow
- [ ] P0 — Homepage title/meta/H1
- [ ] P0 — Organization/WebSite structured data
- [ ] P1 — About / Products / Research / Open Source pages
- [ ] P1 — Internal linking
- [ ] P1 — OG/X cards
- [ ] P1 — Performance/Core Web Vitals
- [ ] P1 — Research publication architecture
- [ ] P2 — External mentions/backlinks
- [ ] P2 — Monthly SEO audit/report

## 20. Official Reference Links
- Google Search Central — SEO documentation: https://developers.google.com/search/docs
- Google Search Central — Build & submit sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Bing Webmaster Tools: https://www.bing.com/webmasters/
- Bing IndexNow: https://www.bing.com/indexnow/getstarted

*Important: SEO কোনো একবারের কাজ নয়। প্রথমে technical foundation ঠিক করবে, তারপর content architecture, entity/structured data, performance এবং external authority ধাপে ধাপে build করবে।*
