async function mockUser() {

}

(async function runSeed(input: { count: number }) {
  const start = Date.now()
  console.log("⏳ Running seeding...")

  // await Promise.all(process.argv.slice(2).map(async (val) => {
  //     switch (val) {
  //       case 'maids':
  //         try {
  //           const count = input.count ?? 100
  //
  //           const wageCategoryId = await createRandomWageCategory()
  //           console.log("📝 Inserting wageCategory ", 1)
  //
  //           for (let i = 0; i < count; i++)
  //             await createRandomMaid(wageCategoryId)
  //           console.log("📝 Inserting maids ", count)
  //         } catch (err) {
  //           console.error(err)
  //         }
  //         break
  //
  //       case 'taskTypes':
  //         try {
  //           const count = input.count ?? 10
  //
  //           const cleaningFactorId = await createRandomCleaningFactor()
  //           console.log("📝 Inserting cleaningFactor ", 1)
  //
  //           for (let i = 0; i < count; i++)
  //             await createRandomTaskType(cleaningFactorId)
  //           console.log("📝 Inserting taskTypes ", count)
  //         } catch (err) {
  //           console.error(err)
  //         }
  //
  //         break
  //
  //       default:
  //         console.log("🚫 Invalid seed: ", val)
  //     }
  //   })
  // )

  const end = Date.now()
  console.log(`🌱 Seeding is completed in ${end - start}ms`)

  process.exit(0)
})()
  .catch((err) => {
    console.error("❌ Seeding is failed")
    console.error(err)
    process.exit(1)
  })

