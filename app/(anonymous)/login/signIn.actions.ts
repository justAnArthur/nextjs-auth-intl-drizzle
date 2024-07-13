'use server'

import { redirect } from "next/navigation"
import { signIn } from "@/auth"

export async function signInUser(prevState: any, formData: FormData) {
  let result = null

  try {
    await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: false
    })
  } catch (error) {
    result = error.toString()
  }

  if (result)
    return { message: result }

  redirect('/protected')
}
