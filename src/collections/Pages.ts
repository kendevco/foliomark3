export const Pages = {
  slug: 'pages',
  fields: [
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'internalName',
      type: 'text',
      label: 'Internal Name',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Layout',
      blocks: [],
    },
  ],
}
