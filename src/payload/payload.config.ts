import { buildConfig } from 'payload/config';
import path from 'path';
import { Products } from './collections/Products';
import { Media } from './collections/Media';
import { ConsultationTypes } from './collections/ConsultationTypes';
import { Reviews } from './collections/Reviews';
import { Users } from './collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Elegant Drapes Admin',
      favicon: '/favicon.ico',
    },
    components: {
      beforeLogin: [
        {
          Component: () => {
            return 'Welcome to Elegant Drapes Admin Panel';
          },
        },
      ],
    },
  },
  collections: [
    Users,
    Products,
    Media,
    ConsultationTypes,
    Reviews,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: ['http://localhost:5173'],
  csrf: ['http://localhost:5173'],
  db: {
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost/elegant-drapes',
  },
});