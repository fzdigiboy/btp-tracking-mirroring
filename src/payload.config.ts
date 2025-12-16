// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
// import { postgresAdapter } from '@payloadcms/db-postgres';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import { Media } from './collections/Media';
import { Pages } from './collections/Pages/Pages';
import { Users } from './collections/Users';

import { uploadthingStorage } from '@payloadcms/storage-uploadthing';
import { Contacts } from './collections/Contacts';
import { ProjectTypes } from './collections/Project_Type';
import { Projects } from './collections/Projects';
import { Services } from './collections/Services';
import { Testimonies } from './collections/Testimonies';
import { Footer } from './globals/footer';
import { Header } from './globals/header';
import { Settings } from './globals/Settings';
import { plugins } from './plugins';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isProd = process.env.NODE_ENV === 'production'

export default buildConfig({
  routes: {
    admin: '/admin',
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, Services, ProjectTypes, Testimonies, Contacts, Projects],
  globals: [Settings,Header,Footer],
  secret: process.env.PAYLOAD_SECRET!,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: isProd
    ? vercelPostgresAdapter({
        pool: {
          connectionString: process.env.POSTGRES_URL,
        },
        schemaName: 'btp_tracking_app',
      })
    : sqliteAdapter({
        client: {
          url: process.env.DATABASE_URI || 'file:./payload.db',
        },
      }),
  // database-adapter-config-end
  sharp,
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
    uploadthingStorage({
      collections:{
        media:true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN || '',
        // acl: 'public-read',
      },
      // apiKey: process.env.UPLOADTHING_TOKEN,
      // baseUrl: 'https://uploadthing.com/api/v1',
      // bucket: 'btp-tracking',
      // folder: 'images',
      // mediaCollection: Media,
      // uploadOptions: {
      //   uploadType: 'multipart',
      //   multipartOptions: {
      //     contentType: 'image/jpeg',
      //     filename: ({ originalname }) => originalname,
      //   },
      // },
    }),
  ],
})
