import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const pgDefaultTable: typeof pgTable = (...args) => {
  args[1]['id'] = uuid('id').primaryKey().defaultRandom()
  args[1]['createdAt'] = timestamp('created_at', { mode: 'date', precision: 3 }).defaultNow()
  // @ts-ignore
  args[1]['updatedAt'] = timestamp('updated_at', { mode: 'date', precision: 3 }).$onUpdate(() => new Date())

  return pgTable(...args)
}
