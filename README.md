# Face Art Clinic Panama

Sitio web para Face Art Clinic Panama, construido con Astro, Tailwind CSS, contenido local de respaldo y Sanity Studio para la gestion del blog.

## Horario

- Lunes a Viernes: 9:00 a.m. - 7:00 p.m.
- Sabados: 9:00 a.m. - 4:30 p.m.
- Domingos: 10:00 a.m. - 3:00 p.m.
- Atencion: sujeta a previa cita

## Stack

- Astro
- Tailwind CSS
- TypeScript ligero
- Sanity Studio en `/studio`
- Sanity Content Lake para blog e imagenes del blog
- Web3Forms para formulario de contacto
- Vercel para deploy

## Instalar

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Sitio local: `http://localhost:4321`
Studio local: `http://localhost:4321/studio`

## Build y preview

```bash
npm run build
npm run preview
```

## Configuracion del negocio

La informacion principal vive en `src/config/site.ts`:

- Nombre del negocio
- Direccion
- Horarios
- Redes sociales
- SEO base
- Datos de contacto

## Contenido local de respaldo

- Servicios: `src/content/services.ts`
- Preguntas frecuentes: `src/content/faqs.ts`
- Testimonios: `src/content/testimonials.ts`
- Doctores: `src/content/doctors.ts`
- Blog fallback: `src/content/blog.ts`

Las imagenes publicas viven en `public/images`.

## Sanity

El Studio esta disponible en `/studio`.

Proyecto Sanity:

- Project ID: `jdls3x4j`
- Dataset: `production`
- Organization ID: `oefjG3H6V`

Scripts utiles:

```bash
npm run sanity:dev
npm run sanity:deploy
npm run sanity:seed
npm run sanity:upload-blog-images
```

El sitio tiene fallback local para mantener el blog disponible si Sanity no responde durante build. Las imagenes del blog ya estan guardadas como assets en Sanity CDN.

## Variables de entorno

Crea `.env` local usando `.env.example` como referencia.

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key
SANITY_PROJECT_ID=jdls3x4j
SANITY_ORGANIZATION_ID=oefjG3H6V
SANITY_DATASET=production
SANITY_API_VERSION=2025-06-22
SANITY_USE_CDN=false
SANITY_API_READ_TOKEN=
```

`SANITY_API_READ_TOKEN` es opcional. Usalo solo si el build necesita leer contenido privado desde Sanity sin hacer publico todo el dataset.

## Deploy en Vercel

Production URL:

```txt
https://demo-facial-art-clinic-alfonsodelag.vercel.app
```

Configuracion recomendada en Vercel:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Variables: las mismas de `.env.example` que apliquen para production

## Formulario con Web3Forms

El formulario usa `PUBLIC_WEB3FORMS_ACCESS_KEY`. En Vercel, configura esa variable en Project Settings > Environment Variables.
