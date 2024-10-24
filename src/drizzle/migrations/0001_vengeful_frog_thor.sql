DROP INDEX IF EXISTS "products.clerk_user_id_index";--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "clerk_user_id" text NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products.clerk_user_id_index" ON "products" USING btree ("clerk_user_id");--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN IF EXISTS "cler_user)id";