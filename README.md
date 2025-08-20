Hero image credit: Unsplash (dining/restaurant imagery). All images referenced via Unsplash CDN.

## Features

- Clean, semantic HTML with clear sectioning (Home, About, Menu, Gallery, Location, Contact)
- Sticky, responsive navigation with mobile menu toggle
- Smooth in-page scrolling and active section highlighting
- Animated fade-in on scroll using Intersection Observer
- Gallery lightbox with keyboard-friendly close
- Contact form with client-side validation and user feedback messages
- Scroll-to-top button
- Lazy-loaded images and embedded Google Map
- Accessibility touches: ARIA labels/roles, reduced motion support, focus styles

## Tech Stack

- HTML5
- CSS3 (via external `style.css`)
- Vanilla JavaScript (via external `app.js`)
- Google Fonts (Playfair Display, Inter)
- Font Awesome icons

## Getting Started

1. Download or clone the project.
2. Ensure the following files are in the same directory:
   - index.html
   - style.css
   - app.js
3. Open index.html in your browser.

Tip: You can serve locally for cleaner routing and caching:
- macOS: `python3 -m http.server 8000`
- Node: `npx serve`

Then navigate to http://localhost:8000

## File Overview

- index.html: Main page structure and content
- style.css: Global styles, layout, responsive rules, animations
- app.js: Navigation behavior, smooth scroll, fade-in observer, form validation, lightbox, scroll-to-top

## Section Map

- Navigation: Sticky top nav with mobile toggle button
- Hero: Full-viewport background image with primary/secondary CTAs
- About: Story, features (fresh ingredients, creative menu, curated drinks) and image
- Menu: Card grid with icons, descriptions, and prices
- Gallery: Clickable grid with overlay and lightbox
- Location: Address, phone, hours, and Google Maps embed
- Contact: Form (name, email, phone, menu item, message) with validation and feedback; contact methods and social links
- Footer: Quick links, menu recap, contact info, and copyright

## Configuration Notes

- Images: Currently sourced from Unsplash; replace URLs with your own assets if needed.
- Map: The iframe uses a simple query URL; update the address in the src to your real location.
- Contact Form: Currently client-side only (no backend). To make it functional, integrate with an API endpoint or form service and replace the form `action` and submit handler in `app.js`.

## Accessibility & UX

- ARIA attributes and roles added where appropriate (e.g., nav controls, status messages)
- Keyboard support for closing the lightbox (Escape)
- Focus-visible styles for interactive elements
- Respects `prefers-reduced-motion` to limit animations

## Performance Considerations

- `loading="lazy"` on images
- Defer script loading (use `defer` on app.js)
- Reuse fonts via Google Fonts CDN

## Customization

- Colors and typography can be customized in style.css
- Menu items, pricing, and copy are edited directly in index.html (Menu and Contact select)
- Social links in Contact section can be updated to real profiles

## Suggested Enhancements

- Add serverless/form backend for contact submissions (e.g., Netlify Forms, Formspree, custom API)
- Add menu filtering/tags (e.g., vegan, gluten-free)
- Add structured data (Schema.org Restaurant) for SEO
- Inline critical CSS or use a build step for performance
- Replace map with a Google Maps API key-based embed for better accuracy and controls

## License

This template is provided as-is for personal or commercial use. Replace imagery as needed based on their respective licenses
