# Clyvanta Homepage Design System Audit & Implementation Plan

**Date**: December 22, 2024  
**Auditor**: Claude Code  
**Design System Reference**: `/Users/vicky/.claude/skills/design-system.md`  
**Selected Fonts**: **Manrope Bold (Headings) + Inter (Body)**  
**Status**: 🚀 Ready for Implementation

---

## Executive Summary

This audit evaluates the Clyvanta homepage against professional design system standards from Google Fonts, U.S. Web Design System (USWDS), and WCAG accessibility guidelines. Following proper design and development best practices.

**Overall Grade**: B- → **Target**: A

### Key Findings
- ✅ Solid responsive foundation
- ✅ Good component structure
- ⚠️ Incomplete typography system
- ⚠️ Color palette needs structure
- ⚠️ Missing accessibility features (focus states)
- ⚠️ Some inline styles need conversion to Tailwind

---

## Typography System: Manrope + Inter

### Selected Font Pairing

**Headings**: Manrope Bold (700)  
**Body**: Inter Regular (400)  
**Accent**: Inter Semi-Bold (600)

**Why this works**:
- Bold distinctive headings with proven readable body text
- Used by modern tech companies
- Two font files (Manrope Bold + Inter Variable)
- Great contrast between display and body text

### Font Loading

```typescript
// app/layout.tsx
import { Inter, Manrope } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-manrope',
  display: 'swap',
})
```

---

## Issues Found & Implementation Checklist

### 🔴 HIGH PRIORITY - Must Fix Immediately

#### ✅ 1. Update Font System in layout.tsx
**File**: `clyvanta-website/app/layout.tsx`  
**Status**: ⏳ Pending

**Action**:
- Import Manrope and Inter from next/font/google
- Apply font variables to body element
- Add font-display: swap for performance

---

#### ✅ 2. Define Complete Typography Classes
**File**: `clyvanta-website/app/globals.css`  
**Status**: ⏳ Pending

**Issue**: Components use `.heading-section`, `.heading-subsection`, `.heading-card`, `.eyebrow` but they're undefined

**Solution**:
```css
/* Heading Typography - Manrope Bold */
.heading-display {
  @apply text-4xl md:text-5xl lg:text-6xl font-bold text-white;
  font-family: var(--font-manrope), system-ui, sans-serif;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.heading-section {
  @apply text-3xl md:text-4xl lg:text-5xl font-bold text-white;
  font-family: var(--font-manrope), system-ui, sans-serif;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.heading-subsection {
  @apply text-2xl md:text-3xl lg:text-4xl font-bold text-white;
  font-family: var(--font-manrope), system-ui, sans-serif;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.heading-card {
  @apply text-xl md:text-2xl font-bold;
  font-family: var(--font-manrope), system-ui, sans-serif;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

/* Body Typography - Inter */
.text-hero {
  @apply text-xl md:text-2xl;
  font-family: var(--font-inter), system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.75;
}

.text-intro {
  @apply text-lg md:text-xl;
  font-family: var(--font-inter), system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.7;
}

.text-body {
  @apply text-base md:text-lg leading-relaxed;
  font-family: var(--font-inter), system-ui, sans-serif;
  font-weight: 400;
}

/* Supporting Text */
.eyebrow {
  @apply text-sm uppercase tracking-wider font-semibold;
  font-family: var(--font-inter), system-ui, sans-serif;
  letter-spacing: 0.1em;
}

/* Apply Inter to body by default */
body {
  font-family: var(--font-inter), system-ui, sans-serif;
}
```

---

#### ✅ 3. Fix Tailwind Config - Complete Color Palette
**File**: `clyvanta-website/tailwind.config.js`  
**Status**: ⏳ Pending

**Current Issue**:
```javascript
colors: {
  'clyvanta-blue-dark': '#1E40AF',
  'clyvanta-blue-cyan': '#06B6D4',
  'clyvanta-orange': '#F97316',
}
```

**Problems**:
- Only 3 colors defined
- No neutral scale
- No semantic colors
- No hover state variants

**Solution**:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2563EB', // Blue-600
        dark: '#1D4ED8',    // Blue-700 (hover)
        light: '#3B82F6',   // Blue-500
      },
      secondary: {
        DEFAULT: '#F97316', // Orange-500
        dark: '#EA580C',    // Orange-600 (hover)
        light: '#FB923C',   // Orange-400
      },
      neutral: {
        950: '#020617',
        900: '#0F172A',
        800: '#1E293B',
        700: '#334155',
        600: '#475569',
        400: '#94A3B8',
        200: '#E2E8F0',
        100: '#F1F5F9',
      },
      semantic: {
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      heading: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
    },
  },
},
```

---

#### ✅ 4. Fix bg-section-blue Gradient
**File**: `clyvanta-website/app/globals.css`  
**Status**: ⏳ Pending

**Issue**: Uses `blue-950` which doesn't exist in Tailwind (only goes to 900)

**Current**:
```css
.bg-section-blue {
  @apply bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950;
}
```

**Solution** (solid dark for clean professional look):
```css
.bg-section-blue {
  @apply bg-slate-950;
}
```

---

#### ✅ 5. Add Focus States for Accessibility
**Files**: Hero.tsx, Header.tsx, FinalCTA.tsx, Footer.tsx  
**Status**: ⏳ Pending

**Issue**: No visible focus indicators (WCAG violation)

**Solution Examples**:
```typescript
// CTA Button
<button className="... focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none">

// Navigation Link
<Link className="... focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:rounded focus:outline-none">

// Pillar Cards in Hero
<motion.button className="... focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none">
```

---

### 🟡 MEDIUM PRIORITY - Fix Soon

#### ✅ 6. Remove Inline Styles from ValueProposition.tsx
**File**: `clyvanta-website/components/ValueProposition.tsx`  
**Status**: ⏳ Pending

**Issues**:
- Line 36: `style={{ maxWidth: '600px' }}`
- Line 48: `style={{ lineHeight: '1.8' }}`
- Line 52: `style={{ lineHeight: '1.9' }}`

**Solution**:
```typescript
// Before
<h2 className="heading-display text-white" style={{ maxWidth: '600px' }}>

// After
<h2 className="heading-display text-white max-w-[600px]">

// Before
<p className="text-intro text-blue-100" style={{ lineHeight: '1.8' }}>

// After
<p className="text-intro text-blue-100 leading-[1.8]">
```

---

#### ✅ 7. Add Max-Width to Long Text Blocks
**Files**: HowWeWork.tsx, ValueProposition.tsx  
**Status**: ⏳ Pending

**Issue**: Long paragraphs without width constraints (optimal: 45-80 characters per line)

**Solution**:
```typescript
<p className="text-body text-blue-100 max-w-3xl">
  Enterprise AI systems and platform consolidation...
</p>
```

---

#### ✅ 8. Standardize Color Usage
**Files**: All components  
**Status**: ⏳ Pending

**Issue**: Mix of `text-blue-100`, `text-white`, `text-gray-400`, custom colors

**Semantic Color Guide**:
- Primary text on dark: `text-white`
- Secondary text on dark: `text-neutral-200` (was text-blue-100)
- Tertiary text on dark: `text-neutral-400` (was text-gray-400)
- Accent text: `text-primary-light` or `text-secondary`
- Eyebrows: `text-neutral-400`

---

### 🟢 LOW PRIORITY - Enhancement

#### ✅ 9. Normalize Gap Spacing
**File**: ValueProposition.tsx  
**Status**: ⏳ Pending

**Issue**: Uses `lg:gap-20` (80px) - not in standard 8pt grid

**Solution**: Replace with `lg:gap-16` (64px)

---

#### ✅ 10. Extract Repeated Patterns
**Files**: All section components  
**Status**: ⏳ Pending

**Issue**: Animated gradient and pattern overlay repeated in every section

**Solution**:
```css
.section-overlay-gradient {
  @apply absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-orange-600/10 animate-pulse;
}

.section-overlay-pattern {
  @apply absolute inset-0 opacity-[0.03];
  background-image: url("data:image/svg+xml,...");
}
```

---

## Component-Specific Notes

### Hero.tsx ✅
- Recently fixed spacing (pt-32 md:pt-40)
- Horizontal 3-column layout working
- **Needs**: Focus states on CTA and pillar cards

### Capabilities.tsx ✅
- Square images working well
- Aspect ratio handling correct
- **Needs**: Color contrast verification

### ValueProposition.tsx ⚠️
- **Needs**: Remove inline styles
- **Needs**: Add max-width to text blocks
- **Needs**: Standardize colors

### WhoWeHelp.tsx ⚠️
- Uses `text-gray-400` (should be `text-neutral-400`)

### HowWeWork.tsx ⚠️
- **Needs**: max-width on paragraph

### FinalCTA.tsx ✅
- Clean layout
- **Needs**: Focus state on button

---

## Implementation Order

### Phase 1: Typography Foundation (20 min)
1. ✅ Update layout.tsx with Manrope + Inter
2. ✅ Update globals.css with complete typography system
3. ✅ Update tailwind.config.js with font families

### Phase 2: Color System (15 min)
4. ✅ Fix tailwind.config.js color palette
5. ✅ Fix bg-section-blue gradient
6. ✅ Standardize color usage in components

### Phase 3: Accessibility (15 min)
7. ✅ Add focus states to all interactive elements
8. ✅ Test keyboard navigation

### Phase 4: Polish (15 min)
9. ✅ Remove inline styles from ValueProposition.tsx
10. ✅ Add max-width to text blocks
11. ✅ Normalize gap spacing

### Phase 5: Testing & Deployment (15 min)
12. ✅ Build and test locally
13. ✅ Deploy to Vercel
14. ✅ Verify on live site

**Total Estimated Time**: 1.5 hours

---

## Testing Checklist

### Typography
- [ ] All headings use Manrope Bold
- [ ] All body text uses Inter
- [ ] Line heights correct (1.1-1.25 headings, 1.5+ body)
- [ ] Letter spacing applied to headings
- [ ] Fonts load without layout shift

### Colors
- [ ] All components use semantic color names
- [ ] Text contrast meets WCAG AA (4.5:1)
- [ ] No hardcoded hex values in components
- [ ] Hover states use defined variants

### Accessibility
- [ ] All buttons have focus states
- [ ] All links have focus states
- [ ] Keyboard navigation works
- [ ] Focus indicators are visible
- [ ] Tab order is logical

### Responsive
- [ ] Mobile (375px) displays correctly
- [ ] Tablet (768px) displays correctly
- [ ] Desktop (1440px) displays correctly
- [ ] Text remains readable at all sizes
- [ ] No horizontal scroll at any size

---

## Resources

- **Design System Skill**: /Users/vicky/.claude/skills/design-system.md
- **Manrope Font**: https://fonts.google.com/specimen/Manrope
- **Inter Font**: https://fonts.google.com/specimen/Inter
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

---

## Notes

- Following USWDS and Google Fonts best practices
- Implementing WCAG AA accessibility standards
- Using 8pt grid system for spacing
- Prioritizing performance with font-display: swap
- Semantic color naming for maintainability

---

**Status**: 🚀 Ready to implement all fixes
**Next Action**: Start Phase 1 - Typography Foundation
