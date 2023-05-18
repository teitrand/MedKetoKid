// routes/login.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export let meta: V2_MetaFunction = () => {
    return [{
      name: 'description',
      content: 'Login page'
    }, {
      name: 'title',
      content: 'Login'
    }];
  }
  
export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <p>Enter your credentials to log in.</p>
    </div>
  );
}
