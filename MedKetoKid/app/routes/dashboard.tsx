// routes/dashboard.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export let meta: V2_MetaFunction = () => {
    return [{
      name: 'description',
      content: 'User Dashboard'
    }, {
      name: 'title',
      content: 'Dashboard'
    }];
  }
  
export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard.</p>
    </div>
  );
}
