# Authentication Backend

This Express service provides a minimal OAuth bridge for Google and Sign in with Apple. It is intentionally lightweight so you can wire it to either the portfolio site or any other client that needs authenticated access.

## Features

- Google OAuth 2.0 flow using Passport
- Apple Sign In support (services ID flow)
- Session-based user persistence (in-memory by default)
- CORS configured to allow credentialed requests from your frontend
- Health check and helpful JSON responses for success / failure

## Getting Started

1. Install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Copy `.env.example` to `.env` and populate the values provided by Google and Apple:

   ```bash
   cp .env.example .env
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The server listens on port `4000` by default. Adjust `PORT` in your `.env` if needed.

## Environment Variables

| Variable | Description |
| --- | --- |
| `PORT` | Port the Express server listens on (default `4000`). |
| `SESSION_SECRET` | Secret used to sign session cookies. Use a strong, unique value. |
| `CLIENT_ORIGIN` | Comma-separated list of allowed origins for CORS (e.g. `http://localhost:3000`). |
| `AUTH_SUCCESS_REDIRECT` | URL the user is redirected to after a successful login. |
| `AUTH_FAILURE_REDIRECT` | URL the user is redirected to when authentication fails. |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Credentials from the Google Cloud Console. |
| `GOOGLE_CALLBACK_URL` | Callback URL registered with Google (defaults to `/auth/google/callback`). |
| `APPLE_CLIENT_ID` | Services ID configured in Apple Developer portal. |
| `APPLE_TEAM_ID` | Team ID from Apple Developer portal. |
| `APPLE_KEY_ID` | Key identifier for the private key used with Apple. |
| `APPLE_PRIVATE_KEY` | Contents of the private key (wrap each line with `\n` sequences). |
| `APPLE_CALLBACK_URL` | Callback URL registered for the Apple Sign In flow. |

## Routes

- `GET /` – Returns basic service metadata and which providers are configured.
- `GET /health` – Simple health check.
- `GET /auth/google` – Initiates Google OAuth flow.
- `GET /auth/google/callback` – Handles Google OAuth callback.
- `POST /auth/apple/callback` – Handles Apple Sign In callback.
- `GET /auth/success` – Returns the authenticated user (JSON).
- `GET /auth/failure` – Returns an authentication failure response.
- `POST /auth/logout` – Ends the current user session.

## Persisting Users

The sample keeps user records in memory. Replace the `users` map with a database integration (e.g. MongoDB using the existing dependency) when you are ready for production.

## Frontend Integration Tips

- Send requests with `credentials: 'include'` so cookies persist across the browser and server.
- Point your frontend success and failure pages to the routes configured in the environment file.
- When deploying, remember to update OAuth redirect URIs in both Google and Apple developer dashboards.

