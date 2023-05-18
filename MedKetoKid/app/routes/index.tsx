// routes/index.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "MedKetoKid",
    description: "Welcome to MedKetoKid"
  };
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to MedKetoKid</h1>
      <ul>
        <li>
          <a href="/keto">Go to Keto Page</a>
        </li>
        <li>
          <a href="/recipes">Go to Recipes Page</a>
        </li>
      </ul>
    </div>
  );
}
