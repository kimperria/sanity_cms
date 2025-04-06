import {defineField, defineType} from 'sanity'

export const propertyType = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'size_in_hectares',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'owner',
      type: 'reference',
      to: [{type: 'owner'}],
    }),
  ],
})
