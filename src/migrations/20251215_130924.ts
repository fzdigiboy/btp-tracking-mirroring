import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "btp_tracking_app"."enum_users_roles" AS ENUM('admin', 'user', 'author');
  CREATE TYPE "btp_tracking_app"."enum_users_social_links_platform" AS ENUM('linkedin', 'twitter', 'email', 'website');
  CREATE TYPE "btp_tracking_app"."enum_projects_project_info_size_unit" AS ENUM('m2', 'hectare');
  CREATE TYPE "btp_tracking_app"."enum_settings_reseau_sociaux_icon" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'snapchat', 'pinterest', 'reddit', 'whatsapp', 'telegram', 'discord', 'twitch', 'dribbble', 'behance', 'github');
  CREATE TYPE "btp_tracking_app"."enum_header_nav_links_link_type" AS ENUM('internal', 'external');
  CREATE TABLE "btp_tracking_app"."users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "btp_tracking_app"."enum_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."users_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "btp_tracking_app"."enum_users_social_links_platform",
  	"url" varchar
  );
  
  CREATE TABLE "btp_tracking_app"."users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar,
  	"last_name" varchar,
  	"title" varchar,
  	"bio" varchar,
  	"avatar_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "btp_tracking_app"."media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "btp_tracking_app"."pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'New Page' NOT NULL,
  	"description" varchar DEFAULT 'Page description' NOT NULL,
  	"handle" varchar DEFAULT 'new-page' NOT NULL,
  	"page" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."services_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"titre" varchar NOT NULL,
  	"logo" varchar DEFAULT '🗺️' NOT NULL,
  	"description" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"button_title" varchar NOT NULL,
  	"button_href" varchar DEFAULT '/contacts' NOT NULL,
  	"image_right" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."project_types" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"titre" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."testimonies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"content" varchar NOT NULL,
  	"country" varchar NOT NULL,
  	"project_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."contacts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"firstname" varchar NOT NULL,
  	"lastname" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"service_id" integer NOT NULL,
  	"message" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"location" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"project_info_duration" varchar NOT NULL,
  	"project_info_size_value" numeric NOT NULL,
  	"project_info_size_unit" "btp_tracking_app"."enum_projects_project_info_size_unit" DEFAULT 'm2' NOT NULL,
  	"project_type_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."projects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"services_id" integer
  );
  
  CREATE TABLE "btp_tracking_app"."payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"services_id" integer,
  	"project_types_id" integer,
  	"testimonies_id" integer,
  	"contacts_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "btp_tracking_app"."payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "btp_tracking_app"."payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."settings_tel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"numero" varchar NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."settings_reseau_sociaux" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "btp_tracking_app"."enum_settings_reseau_sociaux_icon" NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enterprise_name" varchar NOT NULL,
  	"logo_id" integer NOT NULL,
  	"adresse" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "btp_tracking_app"."header_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"link_type" "btp_tracking_app"."enum_header_nav_links_link_type" DEFAULT 'internal' NOT NULL,
  	"internal_page_id" integer,
  	"external_url" varchar
  );
  
  CREATE TABLE "btp_tracking_app"."header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_text" varchar DEFAULT 'TogoBuild',
  	"logo_image_url_id" integer,
  	"logo_image_alt" varchar DEFAULT 'TogoBuild',
  	"raq_button_text" varchar DEFAULT 'Request a Quote' NOT NULL,
  	"raq_button_href" varchar DEFAULT '#',
  	"raq_button_color" varchar DEFAULT '#003366',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "btp_tracking_app"."footer_sections_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar,
  	"icons" varchar
  );
  
  CREATE TABLE "btp_tracking_app"."footer_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "btp_tracking_app"."footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_text" varchar DEFAULT 'TogoBuild' NOT NULL,
  	"logo_url_id" integer,
  	"logo_alt" varchar DEFAULT 'TogoBuild Logo',
  	"description" varchar DEFAULT 'Building dreams in Togo for the global diaspora. Your trusted partner for seamless, remote construction projects.',
  	"copyright_text" varchar DEFAULT '© 2024 TogoBuild. All rights reserved.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "btp_tracking_app"."users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "btp_tracking_app"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."users_social_links" ADD CONSTRAINT "users_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "btp_tracking_app"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "btp_tracking_app"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "btp_tracking_app"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."services_content" ADD CONSTRAINT "services_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "btp_tracking_app"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "btp_tracking_app"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."testimonies" ADD CONSTRAINT "testimonies_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "btp_tracking_app"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."contacts" ADD CONSTRAINT "contacts_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "btp_tracking_app"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."projects" ADD CONSTRAINT "projects_project_type_id_project_types_id_fk" FOREIGN KEY ("project_type_id") REFERENCES "btp_tracking_app"."project_types"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "btp_tracking_app"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."projects_rels" ADD CONSTRAINT "projects_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "btp_tracking_app"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."projects_rels" ADD CONSTRAINT "projects_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "btp_tracking_app"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "btp_tracking_app"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "btp_tracking_app"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "btp_tracking_app"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "btp_tracking_app"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "btp_tracking_app"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_project_types_fk" FOREIGN KEY ("project_types_id") REFERENCES "btp_tracking_app"."project_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonies_fk" FOREIGN KEY ("testimonies_id") REFERENCES "btp_tracking_app"."testimonies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contacts_fk" FOREIGN KEY ("contacts_id") REFERENCES "btp_tracking_app"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "btp_tracking_app"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "btp_tracking_app"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "btp_tracking_app"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."settings_tel" ADD CONSTRAINT "settings_tel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "btp_tracking_app"."settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."settings_reseau_sociaux" ADD CONSTRAINT "settings_reseau_sociaux_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "btp_tracking_app"."settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."settings" ADD CONSTRAINT "settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "btp_tracking_app"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."header_nav_links" ADD CONSTRAINT "header_nav_links_internal_page_id_pages_id_fk" FOREIGN KEY ("internal_page_id") REFERENCES "btp_tracking_app"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."header_nav_links" ADD CONSTRAINT "header_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "btp_tracking_app"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."header" ADD CONSTRAINT "header_logo_image_url_id_media_id_fk" FOREIGN KEY ("logo_image_url_id") REFERENCES "btp_tracking_app"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."footer_sections_links" ADD CONSTRAINT "footer_sections_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "btp_tracking_app"."footer_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."footer_sections" ADD CONSTRAINT "footer_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "btp_tracking_app"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btp_tracking_app"."footer" ADD CONSTRAINT "footer_logo_url_id_media_id_fk" FOREIGN KEY ("logo_url_id") REFERENCES "btp_tracking_app"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "users_roles_order_idx" ON "btp_tracking_app"."users_roles" USING btree ("order");
  CREATE INDEX "users_roles_parent_idx" ON "btp_tracking_app"."users_roles" USING btree ("parent_id");
  CREATE INDEX "users_social_links_order_idx" ON "btp_tracking_app"."users_social_links" USING btree ("_order");
  CREATE INDEX "users_social_links_parent_id_idx" ON "btp_tracking_app"."users_social_links" USING btree ("_parent_id");
  CREATE INDEX "users_sessions_order_idx" ON "btp_tracking_app"."users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "btp_tracking_app"."users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_avatar_idx" ON "btp_tracking_app"."users" USING btree ("avatar_id");
  CREATE INDEX "users_updated_at_idx" ON "btp_tracking_app"."users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "btp_tracking_app"."users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "btp_tracking_app"."users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "btp_tracking_app"."media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "btp_tracking_app"."media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "btp_tracking_app"."media" USING btree ("filename");
  CREATE INDEX "pages_updated_at_idx" ON "btp_tracking_app"."pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "btp_tracking_app"."pages" USING btree ("created_at");
  CREATE INDEX "services_content_order_idx" ON "btp_tracking_app"."services_content" USING btree ("_order");
  CREATE INDEX "services_content_parent_id_idx" ON "btp_tracking_app"."services_content" USING btree ("_parent_id");
  CREATE INDEX "services_image_idx" ON "btp_tracking_app"."services" USING btree ("image_id");
  CREATE INDEX "services_updated_at_idx" ON "btp_tracking_app"."services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "btp_tracking_app"."services" USING btree ("created_at");
  CREATE INDEX "project_types_updated_at_idx" ON "btp_tracking_app"."project_types" USING btree ("updated_at");
  CREATE INDEX "project_types_created_at_idx" ON "btp_tracking_app"."project_types" USING btree ("created_at");
  CREATE INDEX "testimonies_project_idx" ON "btp_tracking_app"."testimonies" USING btree ("project_id");
  CREATE INDEX "testimonies_updated_at_idx" ON "btp_tracking_app"."testimonies" USING btree ("updated_at");
  CREATE INDEX "testimonies_created_at_idx" ON "btp_tracking_app"."testimonies" USING btree ("created_at");
  CREATE INDEX "contacts_service_idx" ON "btp_tracking_app"."contacts" USING btree ("service_id");
  CREATE INDEX "contacts_updated_at_idx" ON "btp_tracking_app"."contacts" USING btree ("updated_at");
  CREATE INDEX "contacts_created_at_idx" ON "btp_tracking_app"."contacts" USING btree ("created_at");
  CREATE INDEX "projects_project_type_idx" ON "btp_tracking_app"."projects" USING btree ("project_type_id");
  CREATE INDEX "projects_updated_at_idx" ON "btp_tracking_app"."projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "btp_tracking_app"."projects" USING btree ("created_at");
  CREATE INDEX "projects_rels_order_idx" ON "btp_tracking_app"."projects_rels" USING btree ("order");
  CREATE INDEX "projects_rels_parent_idx" ON "btp_tracking_app"."projects_rels" USING btree ("parent_id");
  CREATE INDEX "projects_rels_path_idx" ON "btp_tracking_app"."projects_rels" USING btree ("path");
  CREATE INDEX "projects_rels_media_id_idx" ON "btp_tracking_app"."projects_rels" USING btree ("media_id");
  CREATE INDEX "projects_rels_services_id_idx" ON "btp_tracking_app"."projects_rels" USING btree ("services_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "btp_tracking_app"."payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "btp_tracking_app"."payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "btp_tracking_app"."payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "btp_tracking_app"."payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_project_types_id_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("project_types_id");
  CREATE INDEX "payload_locked_documents_rels_testimonies_id_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("testimonies_id");
  CREATE INDEX "payload_locked_documents_rels_contacts_id_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("contacts_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "btp_tracking_app"."payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_preferences_key_idx" ON "btp_tracking_app"."payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "btp_tracking_app"."payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "btp_tracking_app"."payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "btp_tracking_app"."payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "btp_tracking_app"."payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "btp_tracking_app"."payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "btp_tracking_app"."payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "btp_tracking_app"."payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "btp_tracking_app"."payload_migrations" USING btree ("created_at");
  CREATE INDEX "settings_tel_order_idx" ON "btp_tracking_app"."settings_tel" USING btree ("_order");
  CREATE INDEX "settings_tel_parent_id_idx" ON "btp_tracking_app"."settings_tel" USING btree ("_parent_id");
  CREATE INDEX "settings_reseau_sociaux_order_idx" ON "btp_tracking_app"."settings_reseau_sociaux" USING btree ("_order");
  CREATE INDEX "settings_reseau_sociaux_parent_id_idx" ON "btp_tracking_app"."settings_reseau_sociaux" USING btree ("_parent_id");
  CREATE INDEX "settings_logo_idx" ON "btp_tracking_app"."settings" USING btree ("logo_id");
  CREATE INDEX "header_nav_links_order_idx" ON "btp_tracking_app"."header_nav_links" USING btree ("_order");
  CREATE INDEX "header_nav_links_parent_id_idx" ON "btp_tracking_app"."header_nav_links" USING btree ("_parent_id");
  CREATE INDEX "header_nav_links_internal_page_idx" ON "btp_tracking_app"."header_nav_links" USING btree ("internal_page_id");
  CREATE INDEX "header_logo_image_logo_image_url_idx" ON "btp_tracking_app"."header" USING btree ("logo_image_url_id");
  CREATE INDEX "footer_sections_links_order_idx" ON "btp_tracking_app"."footer_sections_links" USING btree ("_order");
  CREATE INDEX "footer_sections_links_parent_id_idx" ON "btp_tracking_app"."footer_sections_links" USING btree ("_parent_id");
  CREATE INDEX "footer_sections_order_idx" ON "btp_tracking_app"."footer_sections" USING btree ("_order");
  CREATE INDEX "footer_sections_parent_id_idx" ON "btp_tracking_app"."footer_sections" USING btree ("_parent_id");
  CREATE INDEX "footer_logo_logo_url_idx" ON "btp_tracking_app"."footer" USING btree ("logo_url_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "btp_tracking_app"."users_roles" CASCADE;
  DROP TABLE "btp_tracking_app"."users_social_links" CASCADE;
  DROP TABLE "btp_tracking_app"."users_sessions" CASCADE;
  DROP TABLE "btp_tracking_app"."users" CASCADE;
  DROP TABLE "btp_tracking_app"."media" CASCADE;
  DROP TABLE "btp_tracking_app"."pages" CASCADE;
  DROP TABLE "btp_tracking_app"."services_content" CASCADE;
  DROP TABLE "btp_tracking_app"."services" CASCADE;
  DROP TABLE "btp_tracking_app"."project_types" CASCADE;
  DROP TABLE "btp_tracking_app"."testimonies" CASCADE;
  DROP TABLE "btp_tracking_app"."contacts" CASCADE;
  DROP TABLE "btp_tracking_app"."projects" CASCADE;
  DROP TABLE "btp_tracking_app"."projects_rels" CASCADE;
  DROP TABLE "btp_tracking_app"."payload_kv" CASCADE;
  DROP TABLE "btp_tracking_app"."payload_locked_documents" CASCADE;
  DROP TABLE "btp_tracking_app"."payload_locked_documents_rels" CASCADE;
  DROP TABLE "btp_tracking_app"."payload_preferences" CASCADE;
  DROP TABLE "btp_tracking_app"."payload_preferences_rels" CASCADE;
  DROP TABLE "btp_tracking_app"."payload_migrations" CASCADE;
  DROP TABLE "btp_tracking_app"."settings_tel" CASCADE;
  DROP TABLE "btp_tracking_app"."settings_reseau_sociaux" CASCADE;
  DROP TABLE "btp_tracking_app"."settings" CASCADE;
  DROP TABLE "btp_tracking_app"."header_nav_links" CASCADE;
  DROP TABLE "btp_tracking_app"."header" CASCADE;
  DROP TABLE "btp_tracking_app"."footer_sections_links" CASCADE;
  DROP TABLE "btp_tracking_app"."footer_sections" CASCADE;
  DROP TABLE "btp_tracking_app"."footer" CASCADE;
  DROP TYPE "btp_tracking_app"."enum_users_roles";
  DROP TYPE "btp_tracking_app"."enum_users_social_links_platform";
  DROP TYPE "btp_tracking_app"."enum_projects_project_info_size_unit";
  DROP TYPE "btp_tracking_app"."enum_settings_reseau_sociaux_icon";
  DROP TYPE "btp_tracking_app"."enum_header_nav_links_link_type";`)
}
