# Comprehensive QA Checklist for Web Templates

**Created:** 2026-02-08  
**Template:** CyberSec Pro V2  
**Purpose:** Ensure zero defects before deployment

---

## 🔴 Critical Pre-Deploy Checks (MUST PASS)

### 1. Build & Deployment
- [ ] `npm run build` completes without errors
- [ ] `npm run preview` runs without errors
- [ ] Git push succeeds
- [ ] GitHub Pages deployment completes

### 2. Navigation (All Links Must Work)
- [ ] Header logo links to home
- [ ] All header nav links work (Solutions, Products, Pricing, Resources, About)
- [ ] All footer links work
- [ ] All CTA buttons link to valid pages
- [ ] All internal links use correct paths (test with base URL)
- [ ] No 404 errors when clicking any link

### 3. Images (Zero Broken Images)
- [ ] All hero images load
- [ ] All card images load
- [ ] All team photos load
- [ ] All logo images load (or use proper fallbacks)
- [ ] No placeholder.com URLs in production
- [ ] Image alt text present

### 4. Theme Toggle (Light & Dark Mode)
- [ ] Dark mode displays correctly
- [ ] Light mode displays correctly
- [ ] Header readable in both modes (text contrast)
- [ ] All text readable in both modes
- [ ] Toggle between modes works smoothly
- [ ] Card backgrounds appropriate in both modes
- [ ] Footer readable in both modes

---

## 🟠 Visual QA

### 5. Typography
- [ ] Fonts load correctly
- [ ] Headings have proper hierarchy
- [ ] Body text readable (16px minimum)
- [ ] No text overflow/clipping
- [ ] Line height comfortable for reading

### 6. Spacing & Layout
- [ ] Consistent padding/margins
- [ ] No overlapping elements
- [ ] Proper alignment of elements
- [ ] Container max-width works correctly
- [ ] No horizontal scroll on any page

### 7. Colors & Contrast
- [ ] Primary colors match design system
- [ ] Text has sufficient contrast (WCAG AA)
- [ ] Links distinguishable from text
- [ ] Hover states visible
- [ ] Focus states visible

---

## 🔵 Responsive QA (Test All Breakpoints)

### 8. Mobile (375px)
- [ ] Navigation hamburger menu works
- [ ] All content readable
- [ ] Images scale properly
- [ ] Touch targets minimum 44x44px
- [ ] No horizontal overflow

### 9. Tablet (768px)
- [ ] Layout adapts appropriately
- [ ] Grids adjust column count
- [ ] Images scale properly
- [ ] Navigation works

### 10. Desktop (1024px & 1440px)
- [ ] Full navigation visible
- [ ] Grids display correct columns
- [ ] No excessive whitespace
- [ ] Images crisp and properly sized

---

## 🟢 Functional QA

### 11. Interactive Elements
- [ ] All buttons clickable
- [ ] Form inputs work
- [ ] Form validation works
- [ ] Form submission works
- [ ] Accordions expand/collapse
- [ ] Carousels navigate
- [ ] Filters work
- [ ] Tabs switch content

### 12. Animations
- [ ] Hero animations play
- [ ] Scroll animations trigger
- [ ] Hover animations smooth
- [ ] No janky/stuttering animations
- [ ] Respects prefers-reduced-motion

### 13. Third-Party Integrations
- [ ] Google Fonts load
- [ ] Analytics (if any) works
- [ ] External images load (Unsplash, etc.)

---

## 🟣 Performance QA

### 14. Load Time
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] No render-blocking resources
- [ ] Images optimized

### 15. Bundle Size
- [ ] JavaScript bundles reasonable size
- [ ] CSS not bloated
- [ ] Tree shaking working

---

## ⚫ Browser Console Check

### 16. Console Errors (MUST BE ZERO)
- [ ] No JavaScript errors
- [ ] No 404 resource errors
- [ ] No CORS errors
- [ ] No CSS errors
- [ ] No deprecation warnings (ideally)

---

## 📝 Page-by-Page Checklist

For **EACH PAGE**, verify:

| Page | Header | Footer | Links | Images | Light Mode | Dark Mode | Mobile | Tablet | Desktop |
|------|--------|--------|-------|--------|------------|-----------|--------|--------|---------|
| Home | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Solutions | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Products | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Pricing | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Resources | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| About | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Team | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Contact | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Docs | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Portfolio | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## 🚨 Common Issues to Watch For

1. **Placeholder Images** - Search codebase for `via.placeholder.com`
2. **Hardcoded Links** - Links without base URL prefix
3. **Missing Header/Footer** - Pages without navigation
4. **Light Mode Contrast** - Header/text not visible on light background
5. **404 Links** - Links to pages that don't exist (e.g., /demo)
6. **Mobile Menu** - Hamburger not working
7. **Fixed Header Overlap** - Content hidden behind fixed header

---

## 🔧 Pre-Deploy Commands

```bash
# 1. Search for placeholder images
grep -rn "via.placeholder" src/

# 2. Build and check for errors
npm run build

# 3. Preview locally
npm run preview

# 4. Test all pages manually
# Open browser to localhost and test each page

# 5. Deploy
git add -A && git commit -m "ready for deployment" && git push
```

---

## ✅ Sign-Off

**QA Completed By:** _______________  
**Date:** _______________  
**All Critical Checks Passed:** [ ] Yes [ ] No  
**Ready for Production:** [ ] Yes [ ] No

---

*This checklist prevents issues like broken images, 404 links, and contrast problems from reaching production. Follow it for every deployment.*
