// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite' // database-adapter-import
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages/Pages'

import { plugins } from './plugins'
import { Settings } from './globals/Settings'
import { Services } from './collections/Services'
import { ProjectTypes } from './collections/Project_Type'
import { Testimonies } from './collections/Testimonies'
import { Contacts } from './collections/Contacts'
import { Projects } from './collections/Projects'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

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
  globals: [Settings],
  secret: process.env.PAYLOAD_SECRET!,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
  // database-adapter-config-end
  sharp,
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
})
