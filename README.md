This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More


## Testing
```bash
npm test
```

## Deploy on Vercel
https://arnab-majumdar.vercel.app/

## Environment Variables

To use the new authentication flow, configure the following variable in your Next.js environment (e.g. `.env.local`):

```
NEXT_PUBLIC_AUTH_BASE_URL=http://localhost:4000
```

This should match the origin where the backend auth service is running.
