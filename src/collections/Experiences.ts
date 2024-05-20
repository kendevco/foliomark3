// src/collections/Experiences.ts
import { CollectionConfig } from 'payload/types'

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText', // Assuming you're using richText here
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'date',
      type: 'text',
    },
  ],
}
