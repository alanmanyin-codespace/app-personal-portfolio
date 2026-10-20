---
name: Starlight Stack
description: A full-stack developer portfolio as a quiet night sky — blue-glass instrument panels over a painted indigo nebula.
colors:
  night-950: "#070a1f"
  night-900: "#0b1026"
  night-800: "#111a3b"
  night-700: "#1b2750"
  ink: "#e7ecf7"
  ink-muted: "#b4c0dc"
  ink-faint: "#8794b4"
  azure-200: "#bcd4ff"
  azure-300: "#8fb6ff"
  azure-400: "#5a9bff"
  azure-500: "#2e6bff"
  violet-300: "#c4b5fd"
  cyan-300: "#67e8f9"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 2
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "24px"
  xl: "40px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.azure-500}"
    textColor: "{colors.night-950}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.cyan-300}"
    textColor: "{colors.night-950}"
  button-secondary:
    backgroundColor: "{colors.night-800}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.night-800}"
    textColor: "{colors.ink}"
  card-glass:
    backgroundColor: "{colors.night-700}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  chip-tag:
    backgroundColor: "{colors.night-800}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.md}"
    padding: "4px 10px"
    typography: "{typography.label}"
---

# Design System: Starlight Stack

## Overview

**Creative North Star: "Starlight Stack — instrument panels in a night sky"**

This is a developer portfolio built as a quiet, deep-indigo night sky. Real
enterprise work floats as translucent blue-glass panels — instrument readouts
lit from within — over a painted nebula and a drifting procedural starfield. The
tech stack is drawn as a literal constellation: the owner's portrait is the
brightest star at center, each core technology an icon node joined to it by faint
lines. The world refuses both the flat white resume page and the generic
dark-hero-with-gradient dev template; its materials (glass, backlight, starlight)
are load-bearing, not decoration.

The density is calm and centered. The hero is a single vertical column that opens
full-bleed over the starfield, with generous vertical rhythm (64–80px between
sections) and a narrow readable measure for prose. Everything that holds content
is glass: a navy fill behind a 14px backdrop blur with a hairline blue border and
a faint inner top-edge highlight, so panels read as lit instrument faces rather
than flat cards. Color is disciplined — the ground is near-black indigo, text is
cool off-white, and the electric azure→cyan accent is spent sparingly on the one
primary action and on active/hover states.

Motion is restrained to one authored moment: the starfield twinkles, drifts, and
parallaxes a few pixels toward the pointer, and content rises once on load. All of
it collapses to stillness under `prefers-reduced-motion`.

**Key Characteristics:**
- Deep indigo night ground (#0b1026) carrying a painted nebula plus a live starfield
- Translucent blue-glass panels as the primary material, lit not flat
- A single electric azure→cyan accent, spent rarely
- Inter for everything structural; Geist Mono reserved for data, status, and tags
- The portrait-centered tech constellation as the signature device
- Reduced-motion-aware; one authored motion moment

## Colors

A cool, near-monochrome indigo palette: a four-step night ground, three steps of
cool off-white ink, and a single azure→cyan→violet accent family used sparingly.

### Primary
- **Electric Azure** (#2e6bff, `azure-500`): The core accent. Anchors the primary
  button gradient (azure-500 → cyan-300), the skip-link, and accent glows.
- **Azure Bright** (#5a9bff, `azure-400`): Focus-ring color, active-link underline
  gradient, selection and scrollbar tints, portrait/panel backlight glow.
- **Azure Sky** (#8fb6ff, `azure-300`): The hairline-border color (used at low
  alpha, e.g. `/25`), icon-well strokes, icon accents.
- **Azure Pale** (#bcd4ff, `azure-200`): Interactive-link text and chip label text
  on dark glass.

### Secondary
- **Cyan Spark** (#67e8f9, `cyan-300`): The bright terminus of the primary-button
  gradient and the "available" status dot; the single brightest point on screen.

### Tertiary
- **Soft Violet** (#c4b5fd, `violet-300`): Reserved accent — the placeholder/notice
  color and the "Core capabilities" icon. Signals a different register (meta,
  provisional) from the azure action family.

### Neutral
- **Ink** (#e7ecf7): Primary text and headings; near-white, faintly cool.
- **Ink Muted** (#b4c0dc): Body copy, secondary labels, nav rest state.
- **Ink Faint** (#8794b4): Tertiary text — copyright, disabled/"to be added" labels.
- **Night 950** (#070a1f): Deepest ground; footer fill, primary-button text color.
- **Night 900** (#0b1026): The page background and nebula base fill.
- **Night 800** (#111a3b): Glass-panel and icon-well fills (used translucent).
- **Night 700** (#1b2750): The lighter top of the glass fill gradient.

### Named Rules
**The One Bright Star Rule.** The cyan→azure primary gradient appears once per
viewport — on the single most important action (Get in touch). Secondary actions
are glass outlines, never a second gradient. The accent's rarity is what makes it
read as light.

**The Ink-On-Night Rule.** Text is always one of the three ink steps on a night
or glass ground; never pure `#ffffff` except inside `::selection` and the
skip-link. Accent colors label and illuminate — they do not set body copy.

## Typography

**Display Font:** Inter (via next/font; fallback ui-sans-serif, system-ui)
**Body Font:** Inter
**Label/Mono Font:** Geist Mono (via next/font; fallback ui-monospace, SFMono-Regular)

**Character:** A clean, confident geometric-humanist sans for all structure, paired
with a precise monospace used only for signals — status lines, metadata, tags, and
the constellation node labels. The mono is data, never a "technical" costume.

### Hierarchy
- **Display** (700, `clamp(3rem, 5vw, 3.75rem)` / text-5xl→6xl, tight tracking):
  The hero name only. One per page.
- **Headline** (700, text-4xl→5xl, tight tracking): Inner-page `PageHeader` h1.
- **Title** (700, text-3xl→4xl, tight tracking): Section headings (`SectionHeading`
  h2) and the contact-panel heading.
- **Body** (400, 1.125rem / leading-8, `ink-muted`): Descriptions and prose; held
  to a `max-w-3xl` measure.
- **Label** (400, 0.68–0.7rem, Geist Mono, wide tracking, `ink-muted`): Status pills,
  panel metadata, tech tags, and constellation labels.

### Named Rules
**The Mono-Is-Data Rule.** Geist Mono is used only for machine-flavored facts:
status lines ("Open to full-stack opportunities"), role·period metadata, tech
tags, and constellation labels. Never set a sentence or heading in mono.

**The No-Kicker Rule.** Sections and pages open directly on their heading. There
are no eyebrow/kicker labels above titles; the `eyebrow` prop on `SectionHeading`
and `PageHeader` is retained for call-site compatibility but deliberately never
rendered.

## Layout

A single centered column model. `Container` caps content at `max-w-6xl` (72rem)
with responsive side padding (20px → 32px → 40px). The home hero is a centered,
stacked column (`max-w-md`→`max-w-xl` constellation, `max-w-2xl` tagline); content
sections use left-aligned headings over 1- to 3-column card grids
(`sm:grid-cols-3`, `lg:grid-cols-3`). Vertical rhythm is steady: sections are
`py-16` (64px) rising to `py-20` (80px) at `sm`; the footer sits `mt-24` (96px)
below content. Card grids gap at 16–24px. The single desktop/mobile breakpoint
behavior: the glass nav collapses to a hamburger below `md`, multi-column grids
stack to one column, and type steps down one scale step.

## Elevation & Depth

Depth is built from translucency and backlight, not drop shadows. The whole page is
layered: a fixed starfield at `z-0` (painted nebula + canvas twinkle), content at
`z-10`, sticky header at `z-30`, skip-link at `z-50`. Glass panels sit above the
starfield and earn their lift from an inner top-edge highlight plus a soft,
far-offset ambient shadow; hover lifts the panel 3px and warms the shadow toward
azure. Hero panels (`.glass-lit`) add an inner radial backlight so they read as lit
from within.

### Shadow Vocabulary
- **Glass ambient** (`box-shadow: 0 1px 0 0 rgba(188,212,255,0.08) inset, 0 18px 40px -24px rgba(5,10,30,0.9)`):
  Resting elevation for standard glass panels.
- **Glass lit** (`box-shadow: 0 1px 0 0 rgba(188,212,255,0.16) inset, 0 0 40px -22px rgba(90,155,255,0.7) inset, 0 22px 50px -26px rgba(5,10,30,0.95)`):
  Backlit hero instrument panels.
- **Glass hover** (`box-shadow: 0 1px 0 0 rgba(188,212,255,0.12) inset, 0 24px 60px -28px rgba(46,107,255,0.5)` + `translateY(-3px)`):
  State response on interactive panels.
- **Primary glow** (`box-shadow: 0 10px 30px -10px rgba(46,107,255,0.8)`, hover → `0 14px 38px -10px rgba(103,232,249,0.8)`):
  The azure/cyan halo under the primary button.
- **Node/icon glow** (`box-shadow: 0 0 40px -6px rgba(90,155,255,0.8)` on the portrait; `0 0 20px -6px` on icon wells):
  Localized backlight around the constellation portrait and icon wells.

### Named Rules
**The Backlit-Glass Rule.** Panels are translucent navy glass — never opaque
cards. Elevation comes from a hairline top highlight plus a far, soft shadow; a
panel that needs to feel primary gets an inner radial backlight (`.glass-lit`),
not a heavier drop shadow.

## Shapes

Soft, generously rounded geometry on a strict radius ladder. Containers and panels
use `rounded-2xl` (16px); the large contact panel uses `rounded-3xl` (24px). Icon
wells and the hero-panel icon chips are `rounded-xl` (12px) or fully circular; tech
tags are `rounded-md` (6px); the monogram tile is `rounded-lg` (8px). All pills,
the status chip, the constellation nodes, and the portrait are `rounded-full`.
Borders are a defining feature: a single hairline (1px) in `azure-300` at low alpha
(`/10`–`/30`), brightening on hover/focus. Circular icon wells and the portrait
ring recur as a silhouette throughout.

## Components

### Buttons
- **Shape:** Fully rounded pill (`rounded-full`), `min-h-11` (44px), `px-5 py-2.5`,
  `text-sm font-semibold`, 300ms all-transition.
- **Primary:** Left-to-right gradient from `azure-500` to `cyan-300` on
  `night-950` text, carrying an azure glow (`0 10px 30px -10px rgba(46,107,255,0.8)`).
- **Hover / Focus:** Shadow warms toward cyan and grows; button lifts `-translate-y-0.5`.
  Focus shows the global 2px `azure-400` ring at 3px offset.
- **Secondary:** Glass outline pill — `azure-300/25` border on `night-800/50` fill
  with `backdrop-blur-sm`; hover brightens border to `/60` and fill to `/80`.
- **Unavailable:** Same pill, `azure-300/15` border on `night-800/40`, `ink-faint`
  text, `cursor-not-allowed`.

### Chips / Tags
- **Tech tag:** `rounded-md` (6px), `azure-300/15` border on `night-800/50`, Geist
  Mono 0.7rem, `ink-muted`.
- **Featured badge:** `rounded-full`, `azure-300/30` border on `azure-500/15`, mono
  0.68rem, `azure-200`.
- **Status pill:** `rounded-full`, `azure-300/25` border on `night-900/75`, mono,
  with a cyan status dot carrying a cyan glow.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (16px); large feature panels `rounded-3xl` (24px).
- **Background:** `.glass` (navy gradient, `night-700/55` → `night-900/60`) or
  `.glass-lit` (with inner radial azure backlight) for hero panels.
- **Shadow Strategy:** See Elevation — ambient at rest, warm azure lift on hover
  via `.glass-hover`.
- **Border:** 1px `azure-300` hairline at `/18`–`/22` alpha, brightening to `/40` on hover.
- **Internal Padding:** `p-5` (20px) for hero panels, `p-6` (24px) for project cards,
  `p-8`→`p-12` for the large contact panel.

### Navigation
- **Header:** Sticky, `z-30`, `night-900/70` fill with `backdrop-blur-xl` and an
  `azure-300/10` bottom hairline. Brand monogram is a `rounded-lg` glass tile with a
  code-bracket mark. Links are `text-sm font-medium`, `ink-muted` at rest →
  `ink` on hover; the active link is `azure-200` with a gradient (`azure-400`→
  `cyan-300`) underline. Below `md` the nav collapses to a hamburger (`MobileNavigation`).
- **Footer:** `night-950/60` glass with a gradient top hairline (transparent →
  `azure-400/40` → transparent); link columns in `ink-muted` → `azure-200` on hover.

### Inputs / Fields
- **Focus:** All interactive elements share the global focus-visible treatment — a
  2px `azure-400` outline at 3px offset, 6px radius. (No standalone text-input
  component ships in the current build; new fields should adopt the glass-outline
  treatment from the secondary button: `azure-300/25` border on `night-800/50`,
  azure focus ring.)

### Hero Constellation (signature component)
The portrait sits as the brightest star (circular, `azure-300/60` ring, azure
backlight glow) at a fixed anchor; six technology nodes orbit it, each a circular
glass icon well (`azure-300/25` border, `night-800/70` fill, `backdrop-blur-sm`)
with a Geist Mono label, joined to the portrait by faint `constellation-line`
strokes (`azure-300` at `/28`, 1px non-scaling). Behind everything, the fixed
`Starfield`: a painted nebula plus a procedural canvas of drifting, twinkling,
pointer-parallaxed stars (azure and violet tints), with a radial readability veil
under the central text column. The whole motion layer stills under reduced-motion.

## Do's and Don'ts

### Do:
- **Do** build every content surface as translucent navy glass (`.glass` /
  `.glass-lit`) with a 1px `azure-300` hairline border — not an opaque card.
- **Do** reserve the azure→cyan gradient for the single primary action per view;
  make every other action a glass-outline secondary pill.
- **Do** set all status lines, metadata, and tags in Geist Mono at 0.68–0.7rem,
  wide tracking, `ink-muted`.
- **Do** keep text to the three ink steps on a night ground, and use `violet-300`
  only for provisional/placeholder register.
- **Do** honor `prefers-reduced-motion`: collapse the starfield and `rise`
  animation to stillness.
- **Do** carry the global focus-visible ring (2px `azure-400`, 3px offset) on every
  interactive element.

### Don't:
- **Don't** add eyebrow/kicker labels above headings; sections open on their title.
- **Don't** spend the primary gradient twice in one viewport, or use it for body text.
- **Don't** use pure `#ffffff` for text (reserved for `::selection` and the skip-link).
- **Don't** convey depth with hard/opaque drop shadows; use the inner highlight +
  soft ambient + backlight vocabulary.
- **Don't** set sentences or headings in the mono face, or use mono as a "technical" costume.
- **Don't** introduce a new hue family; extend within night / ink / azure / cyan / violet.
