// routes/login.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Login",
    description: "Login page"
  };
};

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <p>Enter your credentials to log in.</p>
    </div>
  );
}
