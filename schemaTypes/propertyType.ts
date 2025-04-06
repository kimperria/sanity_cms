import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const propertyType = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().error('Required to list item on a page on the webite'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required().error('Required to generate a page on the webite'),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'image',
      type: 'image',
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
      description: 'Estimate cost in kenyan shillings',
      type: 'number',
    }),
    defineField({
      name: 'owner',
      description: 'This could a caretaker, landlord or any other contact person',
      type: 'reference',
      to: [{type: 'owner'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'owner.client_name',
      media: 'image',
    },
  },
})
