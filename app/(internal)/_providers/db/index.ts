import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

import config from "./config"
import * as schema from "./schema";

const url = config.dbCredentials.url + (config.dbCredentials['ssl'] === 'require' ? '?sslmode=require' : '')

const client = postgres(url)
export const db = drizzle(client, { schema })
export default db
