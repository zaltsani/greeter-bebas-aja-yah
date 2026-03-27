import type { MetaFunction } from "react-router";
import { LoginFeature } from "~/features/auth/sign-in";

export const meta: MetaFunction = () => {
  return [
    { title: "Hearth - Welcome Back" },
    { name: "description", content: "Sign in to your Hearth account" },
  ];
};

export default function LoginRoute() {
  return (
    <LoginFeature />
  );
}