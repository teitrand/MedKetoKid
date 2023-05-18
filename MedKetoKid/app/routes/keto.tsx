// routes/keto.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Keto",
    description: "Keto page"
  };
};

export default function Keto() {
  return (
    <div>
      <h2>Keto Information</h2>
      <p>Welcome to the Keto page.</p>
    </div>
  );
}
