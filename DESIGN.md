---
name: "Historia wagi"
description: "A bilingual editorial data journal for a personal health and fitness report."
colors:
  paper: "#f3efe6"
  paper-deep: "#e7dfd0"
  ink: "#18334c"
  ink-soft: "#587083"
  line: "#c9c0b1"
  red: "#bb503b"
  red-dark: "#8f392b"
  blue: "#2d657f"
  white: "#fffdf8"
typography:
  display:
    fontFamily: '"Newsreader Variable", Georgia, serif'
    fontWeight: 470
    lineHeight: 0.98
    letterSpacing: "-0.042em"
  sans:
    fontFamily: '"Instrument Sans Variable", system-ui, sans-serif'
    fontSize: "17px"
  label:
    fontFamily: '"Instrument Sans Variable", system-ui, sans-serif'
    fontWeight: 700
    fontSize: "0.72rem"
    letterSpacing: "0.08em"
rounded:
  none: "0"
  circle: "50%"
  scrollbar: "999px"
spacing:
  page: "min(1180px, calc(100vw - 48px))"
  prose: "68ch"
  section: "desktop: clamp(72px, 5vw, 104px); mobile: clamp(90px, 13vw, 180px)"
components:
  coffee-action:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    border: "1px solid {colors.ink}"
    padding: "14px 20px"
  score-card:
    backgroundColor: "{colors.white}"
    border: "1px solid {colors.ink}"
    shadow: "13px 13px 0 {colors.red}"
---

## Overview

Historia wagi is a bilingual, single-page editorial data journal for Hubert’s personal account of returning to health and fitness. It pairs a warm, quiet reading surface with observable evidence: milestones, small-rule lists, a raw weight line, and a deliberate summer regression.

Editorial rather than promotional, the interface gives the first-person story and its data equal weight. It remains mobile-first and legible without the JavaScript enhancements that refine the chart and header behavior.

**Key characteristics:**

- Warm paper with navy ink and a small, disciplined red accent.
- Newsreader’s editorial voice for narrative and numbers; Instrument Sans for labels and interface.
- Thin rules, modular grids, and full-bleed data chapters rather than decorative cards.
- Regressions remain visible and brick red; data is evidence, not a success funnel.
- The story uses typography, charts and restrained geometric motifs; it deliberately contains no photography.

## Colors

The palette treats the page as paper and the information as ink. `paper` and `paper-deep` form the reading surface; `ink`, `ink-soft`, and `line` establish hierarchy without a separate UI chrome. `blue` belongs to measured data, while `red` and `red-dark` reserve their force for change, warning, correction, and the visible rebound. `white` lifts key data against dark chapters.

**The Evidence Rule.** Use muted blue for measurement and brick red only for change, correction, or regression; keep paper and navy as the default reading environment.

## Typography

Newsreader is the editorial voice for headings, narrative emphasis, quotes, and oversized measurements. Instrument Sans keeps navigation, paragraphs, captions, chart labels, and all-caps metadata practical and compact. The contrast should feel like a printed annual report with carefully set marginal data.

**The Reportage Rule.** Let Newsreader carry the personal narrative and large figures; Instrument Sans carries labels, navigation, and operational data.

## Layout

The page alternates a constrained editorial column with full-bleed evidence chapters. The shared `page` measure anchors header, text, and data; `prose` prevents the long story from becoming too wide. Large vertical intervals make each chapter feel like a report entry, while lines and grid divisions separate facts without turning them into cards.

On narrower screens, two-column story, score, detail, and stage layouts become a single reading sequence. The checkpoints change from a horizontal route into a vertical route, and the chart retains its own protected minimum height.

## Elevation & Depth

The document is mostly flat. Borders, tonal paper shifts, and full-bleed color blocks create structure. Offset red shadows appear only on the competitive score and the chart tooltip, where a moment of data interaction benefits from a physical interruption.

**The Flat Page Rule.** Keep surfaces flat and use the single red offset shadow only where a competitive score needs a tactile interruption.

## Shapes

Rectangles remain square and ruled. Circles identify the wordmark, checkpoint markers and chart dots; the only pill is the quiet scrollbar. Avoid soft card radii, badges, and progress-lozenge language.

## Components

### Header and language switch

The header is an editorial masthead: a compact circular mark, spaced wordmark, minimal section links, and an explicit PL/EN switch. It stays visually light over the hero and collapses its non-language links at the tablet layout.

### Competitive score card

The score card is the one deliberately tactile panel. A ruled white surface, compact metadata rows, and an offset red shadow make the private competition feel like an inserted score slip rather than a dashboard widget.

### Weight chart

The chart is an evidence panel on dark ink. It preserves the raw line, a clearer rebound segment, milestone labels, and a keyboard-accessible point tooltip. The trend may clarify; it must not erase volatility.

### Summer regression panel

This full-bleed red chapter makes the setback legible as part of the report. The oversized delta is paired with reflective copy instead of an alarm or recovery CTA.

### Checkpoint route

Four simple circular markers turn milestones into a route. The desktop line becomes vertical on mobile, preserving sequence without pretending that progress was linear.

### Coffee action

The coffee link arrives only after the report, disclaimer, and next-step narrative. It is a restrained inverted text action with a small lift on hover, never a sticky conversion device.

## Do's and Don'ts

### Do

- Keep the raw line and the rebound visible.
- Use thin rules and open space to structure reading.
- Use red to call out a correction, warning, or competitive result.
- Let large numbers appear as evidence, not calls to action.

### Don't

- Do not turn the page into a fitness landing page or before-and-after gallery.
- Do not add gradients, rounded card grids, neon green or photography.
- Do not smooth away difficult periods in the data.
- Do not use the coffee link as a sticky or primary call to action.
