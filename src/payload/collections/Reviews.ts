import { CollectionConfig } from 'payload/types';

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'userName',
  },
  fields: [
    {
      name: 'userName',
      type: 'text',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'comment',
      type: 'textarea',
      required: true,
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
    },
  ],
};