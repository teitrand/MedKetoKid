// routes/dashboard.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Dashboard",
    description: "User Dashboard"
  };
};

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard.</p>
    </div>
  );
}
