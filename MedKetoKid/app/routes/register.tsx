// routes/register.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export let meta: V2_MetaFunction = () => {
    return [{
      name: 'description',
      content: 'Registration page'
    }, {
      name: 'title',
      content: 'Register'
    }];
  }
  
export default function Register() {
  return (
    <div>
      <h2>Register</h2>
      <p>Create a new account.</p>
    </div>
  );
}
