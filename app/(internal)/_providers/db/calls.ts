import { eq } from "drizzle-orm";
import db from "@/db"
import { users } from "@/db/schema"

export async function getUser(email: string) {
  return db.select().from(users).where(eq(users.email, email))
}

export async function createUser(email: string, password: string) {
  const { genSaltSync, hashSync } = await import('bcrypt-ts')

  let salt = genSaltSync(10)
  let hash = hashSync(password, salt)

  return db.insert(users).values({ email, password: hash })
}
