// routes/recipes.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Recipes",
    description: "Recipes page"
  };
};

export default function Recipes() {
  return (
    <div>
      <h2>Recipes</h2>
      <p>Explore delicious and healthy recipes.</p>
    </div>
  );
}
