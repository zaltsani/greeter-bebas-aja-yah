import type { Route } from "./+types/login";

export default function Login({}: Route.ComponentProps) {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <h1>Login</h1>
    </div>
  );
}
