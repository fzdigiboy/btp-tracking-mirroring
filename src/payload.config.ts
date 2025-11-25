// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite' // database-adapter-import
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages/Pages'
import { Categories } from './collections/Categories'
import { Posts } from './collections/Posts'
import { Testimonials } from './collections/Testimonials'
import { Comments } from './collections/Comments'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { plugins } from './plugins'

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
  collections: [Users, Media, Pages, Categories, Posts, Testimonials, Comments, ContactSubmissions],
  globals: [],
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
