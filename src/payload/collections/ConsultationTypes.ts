import { CollectionConfig } from 'payload/types';

export const ConsultationTypes: CollectionConfig = {
  slug: 'consultation-types',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'duration',
      type: 'number',
      required: true,
    },
  ],
};