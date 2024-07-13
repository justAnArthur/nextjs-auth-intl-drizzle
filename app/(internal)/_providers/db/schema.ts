import { varchar } from "drizzle-orm/pg-core";
import { pgDefaultTable } from "@/app/(internal)/_providers/db/utils";

export const users = pgDefaultTable('users', {
  email: varchar('email', { length: 64 }),
  password: varchar('password', { length: 64 }),

  locale: varchar('locale', { length: 3 })
})

