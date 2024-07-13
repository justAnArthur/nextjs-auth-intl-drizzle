import { migrate } from "drizzle-orm/postgres-js/migrator";
import db from "@/db";
import drizzleConfig from "@/drizzle.config";

(async function runMigrate() {
  const start = Date.now()
  console.log("⏳ Running migrations...")

  await migrate(db, { migrationsFolder: drizzleConfig.out })

  const end = Date.now()
  console.log(`✅ Migrations is completed in ${end - start}ms`)

  process.exit(0)
})()
  .catch((err) => {
    console.error("❌ Migration is failed")
    console.error(err)
    process.exit(1)
  })

