import {defineField, defineType} from 'sanity'

export const propertyOwnerType = defineType({
  name: 'owner',
  title: 'Owner',
  type: 'document',
  fields: [
    defineField({
      name: 'client_name',
      type: 'string',
    }),
    defineField({
      name: 'phone_number',
      type: 'number',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      type: 'string',
    }),
    defineField({
      name: 'city',
      type: 'string',
    }),
  ],
})
