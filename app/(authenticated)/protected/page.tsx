import { auth, signOut } from '@/auth'

export default async function ProtectedPage() {
  let session = await auth()

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        You are logged in as {session?.user?.email}
        <SignOut/>
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form // @ts-ignore I have here an error, and don't know why ts-ignore not working
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}