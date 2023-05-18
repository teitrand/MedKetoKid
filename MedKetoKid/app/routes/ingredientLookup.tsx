// routes/ingredientLookup.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Ingredient Lookup",
    description: "Page for looking up ingredients"
  };
};

export default function IngredientLookup() {
  return (
    <div>
      <h2>Ingredient Lookup</h2>
      <p>Lookup</p>
    </div>
    );
}

