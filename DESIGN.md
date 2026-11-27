---
name: Historia wagi
description: A bilingual personal record of change, where real measurements become a readable landscape.
colors:
  paper: "#f7f8f6"
  ink: "#172631"
  muted: "#52616a"
  line: "#d4dcdd"
  night: "#101b24"
  light: "#f1f5f5"
  accent: "#fa9b7d"
  blue: "#225b70"
  orange: "#a64525"
typography:
  display: {fontFamily: "Instrument Sans Variable", fontSize: "clamp(3rem, 5.7vw, 5.75rem)", fontWeight: 500, lineHeight: 1.04, letterSpacing: "-0.04em"}
  headline: {fontFamily: "Instrument Sans Variable", fontSize: "clamp(2rem, 3.8vw, 3.6rem)", fontWeight: 550, lineHeight: 1.12, letterSpacing: "-0.035em"}
  body: {fontFamily: "Instrument Sans Variable", fontSize: "18px", fontWeight: 400, lineHeight: 1.65}
  editorial: {fontFamily: "Newsreader Variable", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 400, lineHeight: 1.15}
rounded: {sm: "4px", pill: "100%"}
spacing: {page: "min(1280px, calc(100% - 112px))", section: "110px", mobileSection: "60px"}
components:
  primary-link: {backgroundColor: "transparent", textColor: "{colors.ink}", rounded: "{rounded.sm}", padding: "14px 22px"}
  dark-surface: {backgroundColor: "{colors.night}", textColor: "{colors.light}"}
---

# Overview

## North Star

**Dane jako krajobraz.** A bilingual personal journal in which the actual 318-measurement record is the visual subject: a dark opening, a light editorial reading surface, and one coral mark for the summer setback. It documents an ongoing personal journey, not fitness marketing or medical advice.

The visual language is measured and durable: real lines, dates, axes, whitespace, and short annotations do the storytelling. There are no photos or raster images. Instrument Sans carries the interface and data; Newsreader gives reflective passages a slower voice.

## Colors

Paper `#f7f8f6` is the reading surface; ink `#172631` is primary text; muted `#52616a` supports secondary copy; line `#d4dcdd` draws quiet rules. Night `#101b24` opens the journey; light `#f1f5f5` sits on dark surfaces. Blue `#225b70` is the evidence/trend accent; light-blue chart strokes use `#87a9b5`; accent coral `#fa9b7d` and rust `#a64525` identify the summer rebound and action emphasis.

Named rules:

- **The Evidence Is the Image Rule:** prefer the measurement line, axis, and annotation to decorative imagery.
- **The Regression Must Read Rule:** setbacks use coral/rust and remain visible; do not smooth away the record.

## Typography

Instrument Sans Variable is the working voice: navigation, labels, prose, and chart annotations. Newsreader Variable is editorial emphasis: quotes, mottos, and reflective stops. Display headings are 500 weight, tight (`-0.04em`); headlines are 550 with `-0.035em`; body is 18px/1.65. Labels remain compact and legible, generally 13–16px.

## Layout

The page measure is `min(1280px, calc(100% - 112px))`. Sections breathe at 110px, reducing to 60px on phones. At 1000px the page gutter becomes 64px; at 700px it becomes 40px, body copy becomes 17px, grids stack, and chart annotations simplify. Charts reflow their SVG geometry for mobile while retaining the complete date range and data sequence.

**The True Timeline Rule:** preserve dates, gaps, and the full time axis at every viewport. Responsive geometry may change; the record may not.

## Elevation & Depth

Depth comes from tonal transitions—night evidence surfaces into paper chapters—not from card stacks. Rules are 1px and quiet. The only purposeful shadow is the chart tooltip: `0 5px 20px #101b2420`, with a 5px radius. The landscape reveal uses `2.2s cubic-bezier(.2,.7,.25,1)`; reduced motion removes animation and transitions.

## Shapes

Editorial blocks are mostly square and calm. Links and tooltips use a 4px radius; measurement points are circular (`100%`); chart strokes are rounded. Avoid pills except where a compact status or point marker genuinely needs one.

## Components

- **Masthead:** bilingual title and sparse navigation on the night surface, with light text and a restrained rule.
- **Hero landscape:** night surface with the 318-point weight line, a light-blue evidence stroke, explicit axes, and coral summer rebound markers.
- **Chart shell:** heading, key, full time axis, and concise note; never turn the chart into a decorative card.
- **Summer chapter:** dark tonal interruption that explains the coral regression in plain language.
- **Checkpoint route:** editorial milestones connected by a thin rule and circular points.
- **Annual stage navigation:** two numbered editorial links on the night surface; the current page has a coral rule and `aria-current`. Both full annual ranges remain visible on mobile. Stage 1 runs Dec 1, 2025–Nov 30, 2026; stage 2 runs Dec 1, 2026–Nov 30, 2027. Each has its own page in both languages.
- **Stage-two opening:** a typographic 02 and an explicit preview status introduce the next year. Existing composition and strength measurements are dated pre-start evidence, not stage-two results. Charts use the same grammar and true dates.
- **Coffee action:** a quiet bordered link, 4px radius, `14px 22px` padding.

## Do's and Don'ts

Do make the real record the hero; keep the 108kg → 89.5kg, Dec 1 2025 → Nov 26 2026 story honest; use coral sparingly for the rebound; preserve PL/EN clarity; test reduced motion and mobile charts.

Don't add stock photography, raster decoration, invented metrics, gamified badges, fitness-marketing language, rounded-card dashboards, hidden gaps, or a second visual theme.

## Finish review — November 27, 2026

Verdict: the annual chapters are distinct while preserving the accepted data-landscape identity. Stage 1 keeps the weight record; stage 2 presents a dated pre-start baseline and its own goals. Reviewed the rendered Polish desktop and mobile pages and the English stage-two mobile page. Automated browser checks covered all four language/stage routes at 1440px, 390px, and 320px: no horizontal overflow, broken local anchors, or client errors; language links preserve the stage and canonical URLs match. The weight chart remains keyboard accessible. Reduced motion was enabled during captures. No raster assets are shipped.
