import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`header_nav_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`link_type\` text DEFAULT 'internal' NOT NULL,
  	\`internal_page_id\` integer,
  	\`external_url\` text,
  	FOREIGN KEY (\`internal_page_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_nav_links_order_idx\` ON \`header_nav_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_nav_links_parent_id_idx\` ON \`header_nav_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_nav_links_internal_page_idx\` ON \`header_nav_links\` (\`internal_page_id\`);`)
  await db.run(sql`CREATE TABLE \`header\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`logo_text\` text DEFAULT 'TogoBuild',
  	\`logo_image_url_id\` integer,
  	\`logo_image_alt\` text DEFAULT 'TogoBuild',
  	\`raq_button_text\` text DEFAULT 'Request a Quote' NOT NULL,
  	\`raq_button_href\` text DEFAULT '#',
  	\`raq_button_color\` text DEFAULT '#003366',
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_image_url_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`header_logo_image_logo_image_url_idx\` ON \`header\` (\`logo_image_url_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_sections_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text NOT NULL,
  	\`href\` text,
  	\`icons\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer_sections\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_sections_links_order_idx\` ON \`footer_sections_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`footer_sections_links_parent_id_idx\` ON \`footer_sections_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_sections\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_sections_order_idx\` ON \`footer_sections\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`footer_sections_parent_id_idx\` ON \`footer_sections\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`logo_text\` text DEFAULT 'TogoBuild' NOT NULL,
  	\`logo_url_id\` integer,
  	\`logo_alt\` text DEFAULT 'TogoBuild Logo',
  	\`description\` text DEFAULT 'Building dreams in Togo for the global diaspora. Your trusted partner for seamless, remote construction projects.',
  	\`copyright_text\` text DEFAULT '© 2024 TogoBuild. All rights reserved.',
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_url_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_logo_logo_url_idx\` ON \`footer\` (\`logo_url_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`header_nav_links\`;`)
  await db.run(sql`DROP TABLE \`header\`;`)
  await db.run(sql`DROP TABLE \`footer_sections_links\`;`)
  await db.run(sql`DROP TABLE \`footer_sections\`;`)
  await db.run(sql`DROP TABLE \`footer\`;`)
}
