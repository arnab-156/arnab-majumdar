import Link from "next/link";
import { buttonStyle } from "../utility/stylevariables";

const authBaseUrl = process.env.NEXT_PUBLIC_AUTH_BASE_URL ?? "http://localhost:4000";

const providers = [
  {
    label: "Continue with Google",
    href: `${authBaseUrl}/auth/google`,
    method: "GET" as const,
  },
];

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 pb-32">
      <div className="max-w-2xl w-full px-6">
        <h1 className="text-3xl font-bold text-center uppercase mb-6">Login</h1>
        <p className="text-center mb-10">
          Choose your preferred sign-in provider. After authentication you will be
          redirected back to your account page where you can review your profile details.
        </p>

        <div className="flex flex-col gap-4">
          {providers.map(provider => (
            <Link
              key={provider.label}
              href={provider.href}
              className={`${buttonStyle} text-center`}
              prefetch={false}
            >
              {provider.label}
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center">
          Already authenticated? Visit your
          <Link href="/account" className={`ml-2 underline text-purple-700`}>account</Link>
          page to review your details.
        </p>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Sign in with Apple is available via the backend service. Integrate your preferred client-side
          flow to call the `/auth/apple/callback` endpoint when ready.
        </p>
      </div>
    </main>
  );
}
