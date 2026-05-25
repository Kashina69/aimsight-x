# Style Skill — Neobrutalist Editorial (Tailwind)

## Aesthetic
Retro newspaper meets neobrutalism. Cream backgrounds, ink-dark borders, hand-stamped typography, zero gradients, hard corners. Everything looks typeset and pressed.

---

## Setup

**tailwind.config.js**
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Caprasimo', 'serif'],
        body:    ['Outfit', 'sans-serif'],
        alt:     ['Bricolage Grotesque', 'sans-serif'],
      },
      colors: {
        bg:      '#f7f5ef',
        surface: '#f0ede3',
        shadow:  '#d4c98a',
        ink:     '#404040',
        'ink-dark':  '#363636',
        'ink-light': '#4b4b4b',
      },
      boxShadow: {
        neo:       '4px 4px 0px #404040',
        'neo-sm':  '2px 2px 0px #404040',
        'neo-none': '0px 0px 0px #404040',
      },
      borderRadius: { DEFAULT: '0px', none: '0px' },
    },
  },
}
```

**Google Fonts** — add to `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Outfit:wght@200;400;600&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet">
```

---

## Class Cheatsheet

### Typography
| Role | Classes |
|---|---|
| Masthead | `font-display text-5xl text-ink-dark` |
| Section heading | `font-display text-2xl text-ink-dark` |
| Card heading | `font-display text-lg text-ink-dark` |
| Body copy | `font-body text-base text-ink leading-relaxed text-justify` |
| Caption / label | `font-body text-xs font-light text-ink` |
| Meta / dateline | `font-body text-sm text-ink` |

### Colors
| Use | Classes |
|---|---|
| Page background | `bg-bg` |
| Header / footer / surface | `bg-surface` |
| All borders | `border-ink` |
| Primary text | `text-ink-dark` |
| Body text | `text-ink` |
| Muted / captions | `text-ink-light` |
| Image overlay caption bg | `bg-ink text-bg` |

### Borders & Shadows
| Use | Classes |
|---|---|
| Standard border | `border-2 border-ink` |
| Divider | `border border-ink` |
| Section break | `border-double border-t-2 border-ink` |
| Neobrutalist shadow | `shadow-neo` |
| Small shadow | `shadow-neo-sm` |
| No shadow (pressed) | `shadow-neo-none` |

> **Never use** `rounded-*` — hard corners only.  
> **Never use** `shadow-*` built-ins — only `shadow-neo` variants.

---

## Components

**Button**
```html
<button class="font-display px-5 h-14 bg-surface border-2 border-ink shadow-neo
               active:shadow-neo-none active:translate-x-1 active:translate-y-1
               transition-all duration-75 cursor-pointer">
  Click me
</button>
```

**Card**
```html
<div class="border-2 border-ink bg-bg p-4 flex flex-col gap-3">
  <h2 class="font-display text-xl text-ink-dark">Heading</h2>
  <p class="font-body text-base text-ink leading-relaxed text-justify">Body copy.</p>
</div>
```

**Image block**
```html
<div class="relative border-2 border-ink overflow-hidden aspect-video">
  <img src="..." class="w-full h-full object-cover grayscale" />
  <span class="absolute bottom-0 right-0 bg-ink text-bg text-xs font-light px-2 py-0.5">
    Caption here
  </span>
</div>
```

**Marquee ticker**
```html
<div class="overflow-hidden border-t-2 border-b-2 border-ink py-2 bg-surface">
  <div class="flex gap-8 w-max animate-[marquee_40s_linear_infinite]">
    <span class="font-body text-sm text-ink">☆ Headline one</span>
    <span class="font-body text-sm text-ink">☆ Headline two</span>
    <!-- duplicate items for seamless loop -->
  </div>
</div>
```
Add to tailwind config keyframes:
```js
keyframes: {
  marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } }
},
animation: { marquee: 'marquee 40s linear infinite' }
```

**Sticky header**
```html
<header class="sticky top-0 z-10 bg-surface flex flex-col items-center pt-4">
  <h1 class="font-display text-5xl text-ink-dark">Masthead</h1>
  <!-- marquee goes here -->
</header>
```

**Article strip (meta bar)**
```html
<div class="flex justify-between px-6 py-1.5 border-t border-b border-ink text-sm text-ink font-body">
  <span>Saturday, May 23 2026</span>
  <span>Vol. 1 · Issue 1</span>
  <span>Free</span>
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
| `bg-bg` / `bg-surface` only | Any other background color |
| `grayscale` on all images | Color images |
| `border-2 border-ink` everywhere | `border-gray-*` or thin borders |
| `font-display` for all headings | Other display fonts |
| `shadow-neo` for raised elements | Tailwind's built-in shadows |
| Hard corners (no `rounded-*`) | Any `rounded-*` class |
| `text-justify` for long body copy | Default left-align on paragraphs |
| `border-double` for major dividers | Decorative or colored dividers |