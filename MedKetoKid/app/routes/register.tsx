// routes/register.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Register",
    description: "Registration page"
  };
};

export default function Register() {
  return (
    <div>
      <h2>Register</h2>
      <p>Create a new account.</p>
    </div>
  );
}
