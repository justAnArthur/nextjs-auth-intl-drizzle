CREATE TABLE IF NOT EXISTS "users" (
	"email" varchar(64),
	"password" varchar(64),
	"locale" varchar(3),
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp (3) DEFAULT now(),
	"updated_at" timestamp (3)
);
