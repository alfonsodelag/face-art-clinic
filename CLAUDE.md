# CLAUDE.md

## Project Overview

This project is a premium aesthetic clinic website for **Face Art Clinic Panamá**.

The goal is to create a clean, elegant, warm, high-end and conversion-focused website for a facial aesthetic clinic. The website should communicate beauty, trust, natural results, clinical professionalism and artistic precision.

The site should feel like a **boutique facial aesthetics clinic**, not a generic spa, beauty salon or cold medical website.

The experience should be:

- Premium
- Soft
- Elegant
- Feminine but not childish
- Clinical but not cold
- Artistic but not chaotic
- Warm, calm and trustworthy
- Focused on facial harmony and natural beauty

The website should be easy to adapt by changing:

- Business information
- Services
- Images
- Logo
- Contact information
- Instagram / WhatsApp links
- FAQs
- Testimonials
- Colors
- Local SEO content

Do not overcomplicate the project. This is a static, transferable, client-friendly website.

---

## Brand

Business name:

**Face Art Clinic Panamá**

Instagram:

**https://www.instagram.com/faceartclinic.panama/**

Brand concept:

**The face as art.**

Suggested positioning:

> Medicina estética facial enfocada en armonía, naturalidad y confianza.

Alternative positioning:

> Tratamientos estéticos personalizados para realzar la belleza natural del rostro con precisión, cuidado y elegancia.

The brand should not feel aggressive, overly medical, overly trendy or cheap. It should feel refined, careful and personal.

---

## Important Content Accuracy Rule

Do not invent unverified business facts.

If a specific detail is not confirmed, such as exact services, doctors, prices, address, phone number, WhatsApp number, schedule or certifications, use clean placeholders or generic wording until the real information is provided.

Use comments like:

```ts
// TODO: Replace with confirmed Face Art Clinic WhatsApp number.
```

or visible neutral copy like:

```txt
Agenda tu evaluación personalizada.
```

Do not publish fake prices, fake doctors, fake addresses or fake credentials.

---

## Preferred Stack

Use the following stack:

- Astro
- Tailwind CSS
- Light TypeScript
- Static local content files
- Web3Forms for contact forms
- Vercel for deployment
- GitHub for version control and ownership transfer
- Sanity CMS only if the client explicitly needs editable blog/content

Avoid:

- Firebase
- Supabase
- Authentication
- Dashboards
- Databases
- Payment systems
- User accounts
- Heavy JavaScript frameworks
- Complex backend logic
- Overengineered CMS setup unless requested

When choosing between a powerful solution and a simple transferable solution, choose the simple transferable solution.

---

## Editable Files

Use local content/config files as the main source of truth.

Expected editable files:

```txt
src/config/site.ts
src/content/services.ts
src/content/faqs.ts
src/content/testimonials.ts
src/content/doctors.ts
src/content/blog.ts
src/content/gallery.ts
src/content/promotions.ts
```

The intended workflow is:

1. Duplicate the template.
2. Remove old Git history.
3. Change business info in one place.
4. Replace images and logo.
5. Adjust colors.
6. Update services and FAQs.
7. Deploy to Vercel.
8. Transfer ownership if needed.

---

## Project Structure

```txt
src/
  components/
  sections/
  layouts/
  pages/
  config/
  content/
  styles/

public/
  images/
  favicon.svg
  logo.svg
```

Keep the structure clean and easy to understand.

---

## Visual Direction

The design direction is:

**Luxury soft medical aesthetic**

The website should combine the polish of a luxury beauty brand with the trust of a professional clinic.

Use inspiration from elite visual web design and art direction, but adapt it to a lightweight Astro/Tailwind site.

Inspirational principles:

- Editorial composition
- Elegant typography
- Strong hero section
- Large visual areas
- Scroll rhythm
- Smooth microinteractions
- Spacious layouts
- Minimal but memorable visual details
- Artistic use of typography
- Premium photography
- Soft movement
- High-end magazine feeling

Do not copy any specific designer or studio. Use the general design principles only.

Avoid heavy WebGL, complex 3D, sound effects, excessive animations or performance-heavy interactions. This site must remain fast, simple and transferable.

---

## Design Philosophy

The site should feel like:

> A refined facial aesthetics clinic where art, science and natural beauty meet.

The user should immediately feel:

- “This clinic is professional.”
- “This clinic is elegant.”
- “They focus on natural results.”
- “I can trust them with my face.”
- “I can easily book an appointment.”

Every section should support conversion toward WhatsApp/contact.

---

## Color Palette

Main brand colors:

```css
--color-cream: #f3e7d9;
--color-gold: #aa800f;
--color-white: #fcfefb;
--color-brown: #51473b;
```

Suggested extended palette:

```css
--color-light-cream: #faf4ec;
--color-soft-gold: #d7bd7a;
--color-deep-brown: #332c25;
--color-muted-text: #7a6e61;
--color-border: #e4d6c5;
```

Color usage:

- `#F3E7D9` should be used for warm background sections.
- `#FCFEFB` should be used for clean white sections, cards, forms and navigation.
- `#AA800F` should be used as a premium accent color, mainly for buttons, icons, small lines, hover states and highlights.
- `#51473B` should be used for headings, body text and footer backgrounds.
- Avoid pure black.
- Avoid bright pink.
- Avoid cold hospital blue.
- Avoid overusing gold as a large background.

The site should feel warm and refined, not yellow, dark or heavy.

---

## Tailwind Theme Direction

Configure Tailwind with semantic brand colors when possible.

Example naming:

```ts
colors: {
  cream: "#F3E7D9",
  gold: "#AA800F",
  ivory: "#FCFEFB",
  brown: "#51473B",
  lightCream: "#FAF4EC",
  softGold: "#D7BD7A",
  deepBrown: "#332C25",
  mutedText: "#7A6E61",
  borderSoft: "#E4D6C5",
}
```

Use semantic utility classes in components where possible.

---

## Typography

Recommended typography direction:

- Headings: elegant editorial serif
- Body: clean modern sans-serif

Suggested fonts:

- Headings: `Playfair Display`, `Cormorant Garamond`, or similar
- Body: `Inter`, `Manrope`, or similar

Recommended final pairing:

- Headings: **Playfair Display**
- Body: **Inter**

Heading style:

- Elegant
- Slightly editorial
- Not too decorative
- Large hero typography
- Good line height
- Use typography as a visual element

Body style:

- Clean
- Readable
- Calm
- Professional

Avoid:

- Overly playful fonts
- Script fonts
- All-caps everywhere
- Tiny low-contrast text

---

## Layout Direction

The website should be structured as a premium landing page.

Recommended sections:

1. Navbar
2. Hero
3. Trust / intro statement
4. Services
5. Featured treatments
6. Philosophy / natural results
7. About the clinic
8. Before & after / gallery, only if real assets exist
9. Why choose Face Art Clinic
10. Testimonials, only if real testimonials exist
11. FAQs
12. Contact / appointment form
13. Footer

The layout should use:

- Large spacing
- Soft asymmetry
- Editorial image placement
- Alternating cream and ivory sections
- Rounded image corners
- Subtle gold lines and accents
- Premium service cards
- Clear CTAs

---

## Hero Section

The hero section is critical.

Visual direction:

- Warm cream background
- Large elegant heading
- Strong facial/aesthetic image
- Gold CTA button
- Secondary outline CTA
- Short trust-building copy

Suggested hero copy:

```txt
Belleza facial con armonía, precisión y naturalidad
```

Suggested subtitle:

```txt
Tratamientos estéticos personalizados para realzar tus rasgos, cuidar tu piel y ayudarte a verte fresca, segura y natural.
```

Primary CTA:

```txt
Agendar evaluación
```

Secondary CTA:

```txt
Ver tratamientos
```

Hero should include a premium facial image, skin detail image or clinic image.

Image style:

- Soft light
- Warm tones
- Clean skin
- Elegant composition
- No stock-photo cheesiness
- No overly artificial beauty retouching
- No aggressive before/after in hero

---

## Services Direction

Services should be presented in elegant cards.

Possible service categories, pending confirmation:

- Armonización facial
- Toxina botulínica
- Rellenos faciales
- Relleno de labios
- Limpieza facial profunda
- Tratamientos para manchas
- Tratamientos para acné
- Rejuvenecimiento facial
- Skinboosters
- Bioestimuladores
- Microneedling
- Peelings químicos

Important:

Do not present any service as confirmed unless it is verified from the client or official Instagram/content.

Use placeholder content safely if needed.

Service card style:

- Ivory background
- Soft border
- Small gold detail
- Brown heading
- Short description
- CTA: “Consultar tratamiento”
- Subtle hover lift
- No loud icons

Example service card copy:

```txt
Tratamientos diseñados para mejorar la armonía facial, cuidar la piel y resaltar la belleza natural de cada rostro.
```

---

## Content Tone

Use Spanish for the website.

Tone should be:

- Elegant
- Clear
- Warm
- Trustworthy
- Premium
- Calm
- Professional
- Human

Avoid:

- Overpromising results
- Medical claims without evidence
- Aggressive sales language
- Cheap promo language
- Excessive emojis
- “Resultados garantizados”
- “Rejuvenece 20 años”
- “La mejor clínica de Panamá” unless verified
- Fake scarcity
- Fake medical authority

Preferred language:

- “Resultados naturales”
- “Evaluación personalizada”
- “Armonía facial”
- “Cuidado profesional”
- “Belleza natural”
- “Tratamientos personalizados”
- “Bienestar y confianza”
- “Enfoque facial”
- “Cuidado de la piel”

---

## Medical/Aesthetic Compliance Tone

Be careful with procedure claims.

Avoid:

```txt
Elimina arrugas por completo.
```

Prefer:

```txt
Ayuda a suavizar la apariencia de líneas de expresión.
```

Avoid:

```txt
Resultados perfectos garantizados.
```

Prefer:

```txt
Buscamos resultados armónicos y naturales según las características de cada paciente.
```

Avoid:

```txt
Sin riesgos.
```

Prefer:

```txt
Cada tratamiento debe ser evaluado previamente por el equipo profesional correspondiente.
```

---

## Visual Style Rules

Use:

- Rounded corners
- Soft shadows
- Thin borders
- Large white/cream space
- Gold micro-details
- Editorial image crops
- Calm transitions
- Elegant serif headings
- Clear responsive layout

Avoid:

- Heavy gradients
- Neon colors
- Black backgrounds except maybe very dark brown footer
- Medical stock icons everywhere
- Generic hospital aesthetic
- Overcrowded sections
- Carousel overload
- Too many animations
- Complex 3D/WebGL
- Harsh shadows
- Generic Bootstrap-like layout

---

## Animation And Interaction

Use minimal, tasteful animation.

Allowed:

- Fade-in on scroll
- Gentle image reveal
- Soft hover lift on cards
- Button hover color shift
- Smooth scroll
- Small decorative line animations
- Subtle navbar shadow on scroll

Avoid:

- Heavy JavaScript
- Complex scroll hijacking
- Long loading animations
- WebGL effects
- Sound
- Cursor gimmicks
- Interactions that hurt usability

The site should feel premium, not gimmicky.

---

## Components

Recommended reusable components:

```txt
Button.astro
SectionHeader.astro
ServiceCard.astro
TreatmentFeature.astro
FAQItem.astro
TestimonialCard.astro
DoctorCard.astro
ContactForm.astro
WhatsAppButton.astro
GalleryGrid.astro
Navbar.astro
Footer.astro
```

Buttons:

Primary button:

- Gold background
- Ivory text
- Rounded full
- Smooth hover

Secondary button:

- Transparent
- Gold border
- Gold text
- Rounded full

Cards:

- Ivory background
- Soft cream/gold border
- Brown headings
- Muted text
- Small gold accent line

---

## Contact Forms

Use Web3Forms.

Do not build a custom backend for forms.

Required environment variable:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=
```

Never hardcode private keys.

The contact form should include:

- Name
- Phone / WhatsApp
- Email, optional
- Interested treatment
- Message
- Consent/notice text if needed

CTA copy:

```txt
Agenda tu evaluación
```

or:

```txt
Solicitar información
```

After form submission, show a clear success message.

---

## WhatsApp CTA

The website should strongly prioritize WhatsApp conversion.

Use:

- Navbar CTA
- Hero CTA
- Service card CTA
- Floating WhatsApp button
- Contact section CTA
- Footer WhatsApp link

If WhatsApp number is unknown, use placeholder:

```ts
whatsapp: "";
```

and add:

```ts
// TODO: Add confirmed WhatsApp number.
```

Do not invent a phone number.

---

## SEO

Every page should have:

- Unique title
- Meta description
- Semantic headings
- Descriptive alt text
- Local SEO references where natural
- Clean URL structure

Suggested SEO theme:

```txt
clínica estética facial en Panamá
medicina estética facial en Panamá
armonización facial en Panamá
tratamientos faciales en Panamá
```

Do not keyword-stuff.

Example title:

```txt
Face Art Clinic Panamá | Estética facial y belleza natural
```

Example meta description:

```txt
Clínica estética facial en Panamá enfocada en tratamientos personalizados para realzar la belleza natural, la armonía del rostro y el cuidado de la piel.
```

Use verified services only when writing final SEO copy.

---

## Accessibility

Maintain:

- Semantic HTML
- Proper heading hierarchy
- Keyboard-accessible links and buttons
- Visible focus states
- Descriptive alt text
- Sufficient color contrast
- Clear form labels
- No text embedded in images unless duplicated in HTML
- No animation required to understand content

Color contrast is especially important with gold and cream. Do not use gold text on cream if contrast is too low. Use brown for body text.

---

## Performance

Prefer:

- Astro static rendering
- Local content
- Optimized images
- Minimal JavaScript
- Lazy-loaded images below the fold
- SVG icons where appropriate
- No heavy animation libraries unless absolutely necessary

Avoid:

- Heavy client-side libraries
- Large unoptimized images
- Video backgrounds unless specifically requested
- WebGL
- Complex sliders
- Large icon libraries if only a few icons are needed

The site should load fast on mobile.

---

## Mobile Experience

Mobile is critical.

The site should feel excellent on phones.

Prioritize:

- Large readable headings
- Clear WhatsApp CTA
- Short sections
- Easy tap targets
- Fast load
- Simple nav
- Sticky or accessible booking CTA
- No tiny text
- No cluttered grids

Mobile conversion matters more than desktop visual complexity.

---

## Images

Use images that feel:

- Premium
- Warm
- Clean
- Human
- Facial
- Editorial
- Softly lit
- Natural

Ideal image categories:

- Close-up of skin
- Face profile
- Hands performing facial treatment
- Clinic interior
- Detail of skincare tools
- Professional portrait of doctor/team
- Calm patient consultation

Avoid:

- Cheap spa imagery
- Overly fake stock photos
- Excessive makeup glamour
- Harsh clinical surgery imagery
- Unverified before/after images
- Unrealistic AI-looking faces

If real clinic photos are unavailable, use tasteful placeholders and mark them for replacement.

---

## Suggested Page Copy Direction

Main theme:

```txt
Realzamos tu belleza natural con tratamientos faciales personalizados, pensados para cuidar tu piel, armonizar tus rasgos y ayudarte a sentirte segura con tu imagen.
```

Clinic philosophy:

```txt
Cada rostro es único. Por eso cada tratamiento debe partir de una evaluación cuidadosa, buscando resultados naturales, equilibrados y acordes a tus facciones.
```

Trust section:

```txt
Nuestro enfoque combina criterio estético, atención personalizada y cuidado profesional para que cada paciente reciba una experiencia clara, segura y cercana.
```

Final CTA:

```txt
Agenda tu evaluación y descubre qué tratamiento es ideal para ti.
```

---

## Suggested Sections Copy

### Hero

```txt
Belleza facial con armonía, precisión y naturalidad

Tratamientos estéticos personalizados para realzar tus rasgos, cuidar tu piel y ayudarte a verte fresca, segura y natural.
```

### Philosophy

```txt
En Face Art Clinic creemos que la estética facial debe resaltar tu belleza natural, no cambiar quién eres. Por eso cada tratamiento se diseña con una visión personalizada, buscando equilibrio, frescura y armonía.
```

### Why Choose Us

Possible bullets:

```txt
Evaluación personalizada
Enfoque en resultados naturales
Tratamientos orientados a la armonía facial
Atención cercana y profesional
Ambiente cálido, elegante y confiable
```

Use only claims that are safe and not overly specific.

---

## FAQ Direction

Suggested FAQs:

```txt
¿Necesito una evaluación antes del tratamiento?
¿Cuánto duran los resultados?
¿Cuándo se ven los resultados?
¿Los tratamientos duelen?
¿Hay tiempo de recuperación?
¿Qué cuidados debo tener después?
¿Cómo sé qué tratamiento necesito?
¿Cómo puedo agendar una cita?
```

Keep answers short, calm and trust-building.

Avoid absolute claims.

---

## Blog

Do not set up Sanity CMS unless the client explicitly needs editable blog/content.

For now, use static local blog content in:

```txt
src/content/blog.ts
```

Possible blog topics:

- ¿Qué es la armonización facial?
- Botox: mitos y realidades
- Cómo cuidar tu piel después de un tratamiento facial
- Diferencia entre limpieza facial y tratamiento facial
- Qué debes saber antes de un relleno facial
- Cómo lograr resultados naturales en medicina estética

If blog is not needed, keep the blog section optional or hidden.

---

## Client Transferability

Keep dependencies understandable and easy for a client to own:

- GitHub repo owned by or transferred to client
- Vercel project owned by or transferred to client
- Domain owned by client
- Web3Forms account owned by client if possible
- CMS account only if a CMS is used

Do not lock the client into unnecessary services.

---

## Development Rules

When modifying this project:

1. Keep the site static-first.
2. Keep content editable from `src/config` and `src/content`.
3. Avoid hardcoding business information across many components.
4. Avoid fake data.
5. Use placeholders only where needed.
6. Keep the design premium and restrained.
7. Prioritize mobile conversion.
8. Use semantic HTML.
9. Keep Tailwind classes readable.
10. Avoid unnecessary dependencies.

---

## Suggested Config Shape

`src/config/site.ts` should contain:

```ts
export const siteConfig = {
  name: "Face Art Clinic Panamá",
  tagline: "Belleza facial con armonía, precisión y naturalidad",
  description:
    "Clínica estética facial en Panamá enfocada en tratamientos personalizados para realzar la belleza natural, la armonía del rostro y el cuidado de la piel.",
  url: "",
  instagram: "https://www.instagram.com/faceartclinic.panama/",
  whatsapp: "",
  email: "",
  phone: "",
  address: "",
  city: "Panamá",
  country: "Panamá",
  hours: "",
};
```

Add TODO comments for unknown values.

---

## Design Do / Don't

### Do

- Use cream, ivory, gold and brown elegantly.
- Make the hero feel premium.
- Use strong editorial typography.
- Keep CTAs clear.
- Make WhatsApp easy to find.
- Use soft transitions.
- Use real clinic information when available.
- Keep copy refined and trustworthy.
- Prioritize fast mobile performance.

### Don't

- Do not create a generic clinic template feel.
- Do not make it look like a cheap beauty salon.
- Do not overuse gold.
- Do not use pure black.
- Do not use bright pink.
- Do not invent services, prices or doctors.
- Do not add complex backend features.
- Do not add CMS unless requested.
- Do not overanimate.
- Do not sacrifice accessibility for aesthetics.

---

## Final Creative Direction

Build Face Art Clinic as a:

**premium boutique facial aesthetics website**

Visual formula:

```txt
warm nude background
+ clean ivory sections
+ old-gold accents
+ elegant brown typography
+ editorial facial photography
+ soft motion
+ clear WhatsApp conversion
```

The final site should communicate:

```txt
natural beauty
facial harmony
clinical trust
elegance
warmth
personalized care
premium experience
```
