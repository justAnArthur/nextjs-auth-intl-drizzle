'use server'

import { redirect } from "next/navigation"
import { createUser, getUser } from "@/db/calls"

export async function registerUser(prevState: any, formData: FormData) {
  let email = formData.get('email') as string
  let password = formData.get('password') as string
  let user = await getUser(email)

  // @ts-ignore
  if (user.length > 0) {
    return { message: 'User already exists' }
  } else {
    await createUser(email, password)
    redirect('/login')
  }
}
