import { createAuthClient } from "better-auth/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AuthClient = ReturnType<typeof createAuthClient<Record<string, any>>>;

export const authClient: AuthClient = createAuthClient({
  baseURL: import.meta.env.VITE_API_URL,
});
