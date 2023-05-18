// routes/settings.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Settings",
    description: "User settings page"
  };
};

export default function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <p>Update your user settings.</p>
    </div>
  );
}
