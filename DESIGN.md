# Style Skill — Minimal Brutalist Auth (Tailwind)

## Aesthetic
Minimal brutalism with editorial DNA. Paper backgrounds, deep ink borders, bold display type, mono captions, hard corners, and stamped shadow offsets. No gradients. Everything feels like a printed interface.

---

## Setup

**Google Fonts** — add to `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Use Tailwind arbitrary values for colors and fonts to keep the palette precise:
- Paper: `bg-[#f7f5f0]`
- Ink: `text-[#1a1a1a]`, `border-[#1a1a1a]`
- Participant accent: `bg-[#c8b89a]`
- Enterprise accent: `bg-[#8fa3a8]`
- Muted surface: `bg-[#e8e4dc]`
- Display font: `[font-family:'Bebas_Neue',sans-serif]`
- Body font: `[font-family:'Space_Grotesk',sans-serif]`
- Mono labels: `[font-family:'DM_Mono',monospace]`

---

## Class Cheatsheet

### Typography
| Role | Classes |
|---|---|
| Masthead | `text-[clamp(48px,7vw,82px)] [font-family:'Bebas_Neue',sans-serif] tracking-[2px]` |
| Section heading | `text-[40px] [font-family:'Bebas_Neue',sans-serif] tracking-[1px]` |
| Card heading | `text-[34px] [font-family:'Bebas_Neue',sans-serif] tracking-[2px]` |
| Body copy | `text-[14px] [font-family:'Space_Grotesk',sans-serif] leading-[1.6]` |
| Label / meta | `text-[10px] [font-family:'DM_Mono',monospace] uppercase tracking-[2px]` |
| Inline meta | `text-[11px] [font-family:'DM_Mono',monospace] tracking-[1px]` |

### Colors
| Use | Classes |
|---|---|
| Page background | `bg-[#f7f5f0]` |
| Primary ink | `text-[#1a1a1a]` |
| Borders | `border-[#1a1a1a]` |
| Participant accent | `bg-[#c8b89a]` |
| Enterprise accent | `bg-[#8fa3a8]` |
| Muted surface | `bg-[#e8e4dc]` |

### Borders & Shadows
| Use | Classes |
|---|---|
| Standard border | `border-2 border-[#1a1a1a]` |
| Divider | `border-[1.5px] border-[#1a1a1a]` |
| Card shadow | `shadow-[6px_6px_0_#1a1a1a]` |
| Button shadow | `shadow-[4px_4px_0_#1a1a1a]` |
| Pressed state | `active:shadow-[2px_2px_0_#1a1a1a] active:translate-x-0 active:translate-y-0` |

> **Never use** `rounded-*` — hard corners only.  
> **Never use** Tailwind built-in `shadow-*` — use explicit offsets like `shadow-[4px_4px_0_#1a1a1a]`.

---

## Components

**Primary button**
```html
<button class="border-2 border-[#1a1a1a] bg-[#1a1a1a] px-4 py-3
               text-[14px] font-extrabold uppercase tracking-[2px] text-[#f7f5f0]
               shadow-[4px_4px_0_#1a1a1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5
               hover:shadow-[6px_6px_0_#1a1a1a] active:translate-x-0 active:translate-y-0
               active:shadow-[2px_2px_0_#1a1a1a]">
  Continue →
</button>
```

**Role card**
```html
<div class="border-2 border-[#1a1a1a] bg-[#f7f5f0] shadow-[6px_6px_0_#1a1a1a]">
  <div class="border-b-2 border-[#1a1a1a] bg-[#c8b89a] px-7 pb-5 pt-7">
    <h2 class="text-[34px] tracking-[2px] [font-family:'Bebas_Neue',sans-serif]">PARTICIPANT</h2>
    <div class="text-[12px] tracking-[1px] opacity-60 [font-family:'DM_Mono',monospace]">Individual · Explorer · Creator</div>
  </div>
  <div class="px-7 pb-7 pt-5">...</div>
</div>
```

**Tabs**
```html
<div class="flex border-2 border-[#1a1a1a] bg-[#f7f5f0] shadow-[4px_4px_0_#1a1a1a]">
  <button class="flex-1 border-r-2 border-[#1a1a1a] px-3 py-3 text-[13px] font-bold uppercase tracking-[1.5px] opacity-35">Login</button>
  <button class="flex-1 px-3 py-3 text-[13px] font-bold uppercase tracking-[1.5px] bg-[#c8b89a] opacity-100">Sign up</button>
</div>
```

**Inputs**
```html
<input class="w-full border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3.5 py-2.5 text-[14px]
              font-medium text-[#1a1a1a] shadow-[3px_3px_0_#1a1a1a] transition-all
              focus:bg-white focus:shadow-[4px_4px_0_#1a1a1a]" />
```

**Auth sidebar**
```html
<aside class="hidden w-[380px] border-r-2 border-[#1a1a1a] bg-[#c8b89a] md:flex">
  <div class="px-9 py-11">...</div>
</aside>
```

**Grid overlay**
```html
<div class="relative before:content-[''] before:fixed before:inset-0 before:pointer-events-none
            before:[background-image:linear-gradient(rgba(26,26,26,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.04)_1px,transparent_1px)]
            before:[background-size:36px_36px]">
  ...
</div>
```

**Column grid**
```html
<div class="flex gap-6 p-6 pb-20">
  <div class="flex flex-col gap-6 flex-[2]"><!-- main --></div>
  <div class="flex flex-col gap-6 flex-1"><!-- sidebar --></div>
</div>
```

**Fixed footer**
```html
<footer class="fixed bottom-0 w-full bg-surface border-t-2 border-double border-ink
               px-6 py-3 flex justify-between items-center z-10">
  <button class="...btn classes...">← Prev</button>
  <span class="font-display text-sm text-ink">Page 1 of 8</span>
  <button class="...btn classes...">Next →</button>
</footer>
```

**Sidebar list item**
```html
<div class="flex gap-4 items-start">
  <img src="..." class="w-20 h-14 object-cover grayscale border-2 border-ink shrink-0" />
  <div class="flex flex-col gap-1">
    <h3 class="font-display text-base text-ink-dark">Story title</h3>
    <p class="font-body text-sm text-ink leading-snug">Short summary here.</p>
  </div>
</div>
```

---

## Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| `bg-[#f7f5f0]` with ink borders | White backgrounds |
| `shadow-[4px_4px_0_#1a1a1a]` offsets | Tailwind `shadow-*` |
| `Bebas Neue` for headings | Generic heading fonts |
| `DM Mono` for labels | Mixed label fonts |
| Hard corners (no `rounded-*`) | Any `rounded-*` class |
| Accent blocks only in #c8b89a / #8fa3a8 | Bright saturated accents |