# Style Skill — Neobrutalist Editorial

## Aesthetic
Retro newspaper meets neobrutalism. Cream backgrounds, ink-dark borders, hand-stamped typography, and zero gradients. Everything looks typeset, pressed, and intentional.

---

## Tokens

```css
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&family=Outfit:wght@200;400;600&family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap');

:root {
  --bg:        oklch(98.7% 0.022 95.277);
  --surface:   oklch(96.209% 0.03854 95.871);
  --shadow:    oklch(82.711% 0.06845 96.458);
  --ink:       #404040;
  --ink-dark:  #363636;
  --ink-light: #4b4b4b;

  --font-display: 'Caprasimo', serif;
  --font-body:    'Outfit', sans-serif;
  --font-alt:     'Bricolage Grotesque', sans-serif;

  --border:   2px solid var(--ink);
  --radius:   0px;           /* hard corners everywhere */
  --shadow-offset: 4px 4px 0px var(--ink);
}
```

---

## Rules

| Rule | Value |
|---|---|
| Corners | Always `0` — no border-radius |
| Shadows | Box-shadow offset only: `4px 4px 0 var(--ink)` |
| Gradients | Never |
| Color | Cream/ink only; no bright accent colors |
| Images | `filter: saturate(0%)` — always grayscale |
| Borders | `2px solid var(--ink)` standard; `1px` for dividers |
| Buttons | Press effect: `box-shadow → 0` + `translate(4px,4px)` on `:active` |

---

## Typography

```css
/* Masthead / hero titles */
.display { font-family: var(--font-display); font-size: clamp(32px, 6vw, 64px); color: var(--ink-dark); }

/* Section headings */
.heading { font-family: var(--font-display); font-size: clamp(20px, 3vw, 32px); color: var(--ink-dark); }

/* Body copy */
.body { font-family: var(--font-body); font-size: 16px; color: var(--ink); line-height: 1.7; }

/* Captions / labels */
.label { font-family: var(--font-body); font-size: 12px; font-weight: 200; color: var(--ink); }
```

**Long-shadow effect on display text:**
```css
.display {
  text-shadow:
    1px 1px 0 var(--shadow), 2px 2px 0 var(--shadow),
    3px 3px 0 var(--shadow), 4px 4px 0 var(--shadow),
    5px 5px 0 var(--shadow), 6px 6px 0 var(--shadow),
    7px 7px 0 var(--shadow), 8px 8px 0 var(--shadow);
}
```

**Outlined title (pseudo-element stroke):**
```css
.display::before {
  content: attr(data-text);
  position: absolute; inset: 0;
  color: transparent;
  -webkit-text-stroke: 5px var(--shadow);
  filter: drop-shadow(4px 4px 0 var(--shadow));
  z-index: -1;
}
```

---

## Core Components

**Button**
```css
.btn {
  font-family: var(--font-display);
  height: 56px; padding: 0 20px;
  background: var(--surface);
  border: var(--border);
  box-shadow: var(--shadow-offset);
  cursor: pointer;
}
.btn:active { box-shadow: none; transform: translate(4px, 4px); }
```

**Card**
```css
.card {
  border: var(--border);
  background: var(--bg);
  padding: 16px;
}
```

**Image block**
```css
.img-block { position: relative; border: var(--border); overflow: hidden; }
.img-block img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0%); display: block; }
.img-block .caption {
  position: absolute; bottom: 0; right: 0;
  background: var(--ink); color: var(--bg);
  font-size: 12px; font-weight: 200; padding: 2px 8px;
}
```

**Marquee ticker**
```css
.marquee { overflow: hidden; border-top: var(--border); border-bottom: var(--border); padding: 8px 0; }
.marquee-track { display: flex; gap: 32px; width: max-content; animation: ticker 40s linear infinite; }
@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
```

**Sticky header**
```css
.header {
  position: sticky; top: 0; z-index: 10;
  background: var(--surface);
  padding: 16px 0 0;
  display: flex; flex-direction: column; align-items: center;
}
```

**Fixed footer bar**
```css
.footer {
  position: fixed; bottom: 0; width: 100%;
  background: var(--surface);
  border-top: 2px double var(--ink);
  padding: 12px 24px;
  display: flex; justify-content: space-between; align-items: center;
  z-index: 10;
}
```

**Article strip (dateline/meta bar)**
```css
.strip {
  display: flex; justify-content: space-between;
  padding: 6px 24px;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
  font-size: 13px; color: var(--ink);
}
```

**Column layout**
```css
.grid { display: flex; gap: 24px; padding: 24px; }
.col  { display: flex; flex-direction: column; gap: 24px; flex: 1; }
.col-wide { flex: 2; }
```

---

## Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Cream/ink palette only | Bright colors or gradients |
| Hard corners everywhere | Border-radius |
| Grayscale images | Color photos |
| Caprasimo for all headings | Other display fonts |
| Offset box-shadows | Drop shadows or blur |
| Double borders for section breaks | Hairline or decorative borders |
| Justified body text | Left-only alignment for long copy |