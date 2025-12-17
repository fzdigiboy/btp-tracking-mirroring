import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "btp_tracking_app"."enum_footer_sections_links_link_type" AS ENUM('internal', 'external');
  ALTER TYPE "btp_tracking_app"."enum_header_nav_links_link_type" ADD VALUE 'custom';
  ALTER TABLE "btp_tracking_app"."header_nav_links" ADD COLUMN "custom_url" varchar;
  ALTER TABLE "btp_tracking_app"."footer_sections_links" ADD COLUMN "link_type" "btp_tracking_app"."enum_footer_sections_links_link_type" DEFAULT 'external';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "btp_tracking_app"."header_nav_links" ALTER COLUMN "link_type" SET DATA TYPE text;
  ALTER TABLE "btp_tracking_app"."header_nav_links" ALTER COLUMN "link_type" SET DEFAULT 'internal'::text;
  DROP TYPE "btp_tracking_app"."enum_header_nav_links_link_type";
  CREATE TYPE "btp_tracking_app"."enum_header_nav_links_link_type" AS ENUM('internal', 'external');
  ALTER TABLE "btp_tracking_app"."header_nav_links" ALTER COLUMN "link_type" SET DEFAULT 'internal'::"btp_tracking_app"."enum_header_nav_links_link_type";
  ALTER TABLE "btp_tracking_app"."header_nav_links" ALTER COLUMN "link_type" SET DATA TYPE "btp_tracking_app"."enum_header_nav_links_link_type" USING "link_type"::"btp_tracking_app"."enum_header_nav_links_link_type";
  ALTER TABLE "btp_tracking_app"."header_nav_links" DROP COLUMN "custom_url";
  ALTER TABLE "btp_tracking_app"."footer_sections_links" DROP COLUMN "link_type";
  DROP TYPE "btp_tracking_app"."enum_footer_sections_links_link_type";`)
}
