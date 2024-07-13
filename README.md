# next.js + next-intl + next-auth + drizzle + tailwind

This is a [Next.js](https://nextjs.org/) starter kit that uses [NextAuth.js](https://next-auth.js.org/) for simple
email + password login, [Drizzle](https://orm.drizzle.team) as the ORM, and
a [Next intl](https://next-intl-docs.vercel.app/) as messages' handler.

## Developing Locally

You can clone & create this repo with the following command

```bash
npx create-next-app name_of_project --example "https://github.com/justAnArthur/nextjs-auth-intl-drizzle.git"
```

## Getting Started

First, install dependencies and update `.env`:

```bash
npm install
```

```
POSTGRES_URL=
```

*You can use any adapter, just update by [Drizzle documentation](https://orm.drizzle.team/docs/overview).

In Second, run the migration script:

```bash
npm run db:migrate
```

*There's checking on two `.env` files: `.env` and `.env.local` - create them or update `package.json` script.

And Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
