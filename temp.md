# 📘 Style Guideline

This style guide ensures visual consistency across all section blocks in your Next.js component library using ShadCN UI and Tailwind CSS. All values are optimized for both **mobile** and **desktop** layouts.

---

## 1. Typography

### 1.1 Headings

| Heading | Font Size (Mobile) | Font Size (Desktop) | Tailwind Class |
|--------|--------------------|---------------------|----------------|
| H1     | 30px               | 48px                | `text-3xl` → `lg:text-5xl` |
| H2     | 24px               | 36px                | `text-2xl` → `lg:text-4xl` |
| H3     | 20px               | 30px                | `text-xl` → `lg:text-3xl` |
| H4     | 18px               | 24px                | `text-lg` → `lg:text-2xl` |
| H5     | 16px               | 20px                | `text-base` → `lg:text-xl` |
| H6     | 14px               | 16px                | `text-sm` → `lg:text-base` |

**Font Weight:**  
- Headings: `font-semibold` or `font-bold`  
- Subheadings: `font-medium`

### 1.2 Paragraphs

| Type             | Font Size | Tailwind Class   |
|------------------|-----------|------------------|
| Body Text        | 16px      | `text-base`      |
| Small Text/Note  | 14px      | `text-sm`        |
| Extra Small Note | 12px      | `text-xs`        |

---

## 2. Spacing Guidelines

### 2.1 Section Padding (top/bottom)

| Viewport | Padding         | Tailwind Classes           |
|----------|------------------|----------------------------|
| Mobile   | 40px (2.5rem)    | `py-10`                    |
| Desktop  | 80px (5rem)      | `lg:py-20`                 |

### 2.2 Section Margin (between blocks)

| Viewport | Margin          | Tailwind Classes           |
|----------|------------------|----------------------------|
| Mobile   | 24px (1.5rem)    | `mt-6` or `space-y-6`      |
| Desktop  | 48px (3rem)      | `lg:mt-12` or `lg:space-y-12` |

### 2.3 Heading to Content Gap

| Viewport | Spacing         | Tailwind Class     |
|----------|------------------|--------------------|
| All      | 24px (1.5rem)    | `mt-6`             |

---

## 3. Layout Grid System

### 3.1 Container Width

| Viewport | Max Width        | Tailwind Class           |
|----------|------------------|--------------------------|
| Mobile   | 100%             | `w-full` + `px-4`        |
| Desktop  | 1280px           | `max-w-7xl` + `mx-auto` + `px-6` |

### 3.2 Column Gap (grid-based layout)

| Viewport | Gap              | Tailwind Class    |
|----------|------------------|-------------------|
| Mobile   | 16px (1rem)      | `gap-4`           |
| Desktop  | 32px (2rem)      | `lg:gap-8`        |

---

## 4. Cards & Components

### 4.1 Card Padding

| Viewport | Padding        | Tailwind Class         |
|----------|----------------|------------------------|
| Mobile   | 20px (1.25rem) | `p-5`                  |
| Desktop  | 32px (2rem)    | `lg:p-8`               |

### 4.2 Card Margin (Between Cards)

| Viewport | Margin         | Tailwind Class      |
|----------|----------------|---------------------|
| Mobile   | 16px (1rem)    | `space-y-4`         |
| Desktop  | 24px (1.5rem)  | `lg:space-y-6`      |

---

## 5. Buttons

| Type    | Padding             | Tailwind Class             |
|---------|----------------------|----------------------------|
| Primary | 12px x 24px          | `px-6 py-3`                |
| Small   | 8px x 16px           | `px-4 py-2`                |

**Border Radius:**  
- Standard: `rounded-lg` (8px)  
- Pill Shape: `rounded-full`

---

## 6. Images & Media

### 6.1 Image Radius

- Default: `rounded-xl` (12px)

### 6.2 Hero/Banner Images

| Viewport | Height          | Tailwind Class     |
|----------|------------------|--------------------|
| Mobile   | 200–300px        | `h-[200px]`         |
| Desktop  | 400–500px        | `lg:h-[500px]`      |

---

## 7. Navigation

### 7.1 Navbar Height

| Viewport | Height          | Tailwind Class     |
|----------|------------------|--------------------|
| Mobile   | 56px             | `h-14`             |
| Desktop  | 80px             | `lg:h-20`          |

**Padding inside navbar:**  
- Mobile: `px-4`  
- Desktop: `px-8`

---

## 8. Modals & Dialogs

| Attribute     | Value             | Tailwind Classes             |
|---------------|-------------------|------------------------------|
| Padding       | 32px (2rem)       | `p-8`                        |
| Max Width     | 560px             | `max-w-xl`                   |
| Border Radius | 12px              | `rounded-xl`                 |

---

## 9. Icons & Elements

- Standard size: `w-5 h-5` (20px)
- Large icons: `w-6 h-6` or `w-8 h-8`

Use `text-muted-foreground` for subtle icons.

---

## 10. Animation & Motion

| Element Type      | Suggested Motion      | Tailwind Utility/Custom      |
|-------------------|-----------------------|------------------------------|
| Section entrance  | Fade or Slide Up      | `animate-fadeInUp` (custom) |
| Button hover      | Scale slightly        | `hover:scale-105` + `transition` |

---

## 11. Shadows & Elevation

| Use Case      | Tailwind Class     |
|---------------|--------------------|
| Card shadow   | `shadow-md`        |
| Dialog/modal  | `shadow-xl`        |
| Subtle hover  | `hover:shadow-sm`  |

---

## 12. Border & Radius

| Element       | Radius    | Tailwind Class |
|---------------|-----------|----------------|
| Card          | 12px      | `rounded-xl`   |
| Buttons       | 8px       | `rounded-lg`   |
| Inputs        | 6px       | `rounded-md`   |

---

## 13. Responsive Breakpoints (Tailwind Default)

| Breakpoint | Min Width | Tailwind Prefix |
|------------|-----------|-----------------|
| sm         | 640px     | `sm:`           |
| md         | 768px     | `md:`           |
| lg         | 1024px    | `lg:`           |
| xl         | 1280px    | `xl:`           |
| 2xl        | 1536px    | `2xl:`          |

---

## Notes

- Use `space-y-*` or `gap-*` to control vertical and horizontal spacing.
- Prefer using `max-w-*` and `mx-auto` to center content in blocks.
- Always use consistent padding/margin scales (multiple of 4).

---

This guide will help ensure that every block in your library looks consistent, polished, and professional across all screen sizes.
