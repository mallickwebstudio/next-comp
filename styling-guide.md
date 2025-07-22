# 📘 Style Guideline

This style guide ensures visual consistency across all section blocks in your Next.js component library using **ShadCN UI** and **Tailwind CSS**. All values are optimized for **mobile**, **tablet**, and **desktop** layouts.

---

## 1. Section Structure

Defines how every section should be wrapped to maintain consistent layout and responsiveness.

### 1.1 Recommended Section Structure

```jsx
<section className="bg-muted">
  <div className="mx-auto container p-6 sm:py-10 md:p-12 lg:py-16">
    {/* Content */}
  </div>
</section>
```

### 1.2 Explanation

- `section`: Full-width element, often with a background color (`bg-muted`, `bg-primary`, etc.)
- `div.container`: Centers the content and limits its max-width.
- Padding is applied to the inner `div` to control spacing around the content.

---

## 2. Typography

Standardizes font sizes across viewports using Tailwind’s responsive utilities.

### 2.1 Headings

| Heading | Mobile | Tablet | Desktop | Tailwind Class                         |
|---------|--------|--------|---------|----------------------------------------|
| H1      | 30px   | 36px   | 48px    | `text-3xl md:text-4xl lg:text-5xl`     |
| H2      | 24px   | 30px   | 36px    | `text-2xl md:text-3xl lg:text-4xl`     |
| H3      | 20px   | 24px   | 30px    | `text-xl md:text-2xl lg:text-3xl`      |
| H4      | 18px   | 20px   | 24px    | `text-lg md:text-xl lg:text-2xl`       |
| H5      | 16px   | 18px   | 20px    | `text-base md:text-lg lg:text-xl`      |
| H6      | 14px   | 16px   | 16px    | `text-sm md:text-base`                 |

**Font Weight:**

- Headings: `font-semibold` or `font-bold`
- Subheadings: `font-medium`

### 2.2 Paragraphs

| Type             | Mobile | Tablet | Desktop | Tailwind Class         |
|------------------|--------|--------|---------|------------------------|
| Body Text        | 16px   | 16px   | 18px    | `text-base lg:text-lg` |
| Small Text/Note  | 14px   | 14px   | 14px    | `text-sm`              |
| Extra Small Note | 12px   | 12px   | 12px    | `text-xs`              |

---

## 3. Header Block

Headers typically contain a heading and an optional paragraph. This standardizes layout, alignment, and readability.

### 3.1 Recommended Header Structure

```jsx
<header className="md:mx-auto md:max-w-2xl">
  <h2>{heading}</h2>
  <p>{sub-heading}</p>
</header>
```

### 3.2 Why This Structure?

- `md:max-w-2xl` restricts the width of long headings and paragraphs to improve readability on medium and larger screens.
- `md:mx-auto` centers the header block horizontally when a max-width is applied.
- `text-center` ensures both heading and paragraph are center-aligned.
- Clean, minimal markup that works well above content blocks like forms, grids, or cards.

---

## 4. Spacing

Defines consistent vertical and horizontal spacing between layout elements.

### 4.1 Heading → Subheading / Paragraph

| Context     | Mobile | Tablet / Desktop | Tailwind Class      |
|-------------|--------|------------------|---------------------|
| Spacing     | 12px   | 16px             | `mt-3 md:mt-4`      |

- Use to separate a heading from its supporting paragraph or subheading.
- Apply `mt-3` to the paragraph when placed after a heading.

### 4.2 Header Block → Main Content

| Context     | Mobile | Tablet / Desktop | Tailwind Class      |
|-------------|--------|------------------|---------------------|
| Spacing     | 40px   | 48px             | `mt-10 md:mt-12`    |

- Used when transitioning from a header section to the main UI block like a form, grid, or card layout.
- Apply to the **main content wrapper** after the heading/paragraph block.

---

## 5. Horizontal & Vertical Gaps

Defines spacing between horizontally adjacent content blocks (like cards or columns).

### 5.1 Use Case-Based Gap Guidelines

| Context        | Mobile   | Tablet / Desktop | Tailwind Class      |
|----------------|----------|------------------|---------------------|
| Card-to-Card   | 24px     | 24px             | `gap-6`             |
| Content/Column | 32px     | 40px             | `gap-8 md:gap-10`   |

- Use inside `flex` or `grid` containers when placing blocks side by side.
- For sections with two columns (e.g., text + image, card + CTA), use `gap-8 md:gap-10`.

### Summary

| Use Case                         | Mobile Class     | Tablet/Desktop Class |
|----------------------------------|------------------|----------------------|
| Heading → Paragraph              | `mt-3`           | `md:mt-4`            |
| Header → Content Block           | `mt-10`          | `md:mt-12`           |
| Card to Card (horizontal)        | `gap-6`          | `md:gap-6`           |
| Content Columns / Section Blocks | `gap-8`          | `md:gap-10`          |

---
## 6. Rounded Corners

Rounded corners provide a modern and soft UI aesthetic that aligns with the ShadCN design language. For visual consistency across all components, we use a base radius and scale up or down based on the component’s hierarchy or visual role.

### 6.1 General Guidelines

- Use `rounded-md` as the **default** border-radius for **all components** including:
  - Cards
  - Images & Media (video, iframes)
  - Buttons
  - Sections
- Increase or decrease the radius only when the component hierarchy or design emphasis demands it.

#### Radius Levels by Context

| Component Type                                    | Radius Class                 | Notes                                               |
|---------------------------------------------------|------------------------------|-----------------------------------------------------|
| All standard components                           | `rounded-md`                 | Default — applies to cards, containers, media, etc. |
| Prominent elements (e.g., CTA cards, hero media)  | `rounded-lg`                 | Slightly more visual softness                       |
| Inner components or dense UI (e.g., tag, chip)    | `rounded-sm` or `rounded-xs` | For subtle or compact UI items                      |

### 6.2 Example Usage

```jsx
// Image or Video block (default radius)
<img src="/media.jpg" className="rounded-md" />

// Card
<div className="rounded-md border p-4">Card Content</div>

// Hero or prominent feature banner
<div className="rounded-lg overflow-hidden">...</div>

// Compact component (e.g., badge)
<span className="rounded-sm px-2 py-1 bg-muted">Badge</span>
```

> ✅ Always **start with `rounded-md`** and only deviate based on visual hierarchy or UX density.


---

## 7. Micro interactions

### 7.1 Underline

```jsx
<span className="underline underline-offset-2 hover:underline-offset-4">Link</span>
```

This guide should help ensure spacing, typography, layout, and design consistency across your component library.
