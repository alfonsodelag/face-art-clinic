import { defineField, defineType } from "sanity";

export const bodySection = defineType({
  name: "bodySection",
  title: "Seccion del articulo",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Titulo de seccion",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "paragraphs",
      title: "Parrafos",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required().min(1)
    })
  ],
  preview: {
    select: {
      title: "heading"
    }
  }
});

export const blogPost = defineType({
  name: "post",
  title: "Articulo de blog",
  type: "document",
  fields: [
    defineField({
      name: "site",
      title: "Sitio",
      type: "string",
      initialValue: "art-clinic-panama",
      readOnly: true,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "language",
      title: "Idioma",
      type: "string",
      initialValue: "es",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "market",
      title: "Mercado",
      type: "string",
      initialValue: "Panama",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "excerpt",
      title: "Resumen",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(240)
    }),
    defineField({
      name: "date",
      title: "Fecha de publicacion",
      type: "date",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "string",
      initialValue: "Art Clinic Panama"
    }),
    defineField({
      name: "readingTime",
      title: "Tiempo de lectura",
      type: "string",
      initialValue: "5 min de lectura"
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      initialValue: "Medicina estetica",
      options: {
        list: [
          { title: "Medicina estética", value: "Medicina estetica" },
          { title: "Cuidado de piel", value: "Cuidado de piel" },
          { title: "Post-tratamiento", value: "Post-tratamiento" },
          { title: "Armonización facial", value: "Armonizacion facial" },
          { title: "Botox y toxina botulínica", value: "Botox y toxina" },
          { title: "Rellenos faciales", value: "Rellenos faciales" },
          { title: "Skincare", value: "Skincare" }
        ]
      }
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: "credit",
          title: "Credito",
          type: "string",
          initialValue: ""
        })
      ]
    }),
    defineField({
      name: "imageUrl",
      title: "URL externa de imagen",
      type: "url",
      description: "Usa este campo si la imagen se mantiene en Unsplash en vez de subirla como asset."
    }),
    defineField({
      name: "imageAlt",
      title: "Texto alternativo para URL externa",
      type: "string"
    }),
    defineField({
      name: "imageCredit",
      title: "Credito de URL externa",
      type: "string",
      initialValue: ""
    }),
    defineField({
      name: "bodySections",
      title: "Contenido",
      type: "array",
      of: [{ type: "bodySection" }],
      validation: (Rule) => Rule.required().min(1)
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "mainImage"
    }
  }
});
