import type { Config } from 'drizzle-kit';

export default {
  schema: './app/(internal)/_providers/db/schema.ts',
  out: './app/(internal)/_providers/db/.migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL || '',
  }
} satisfies Config
