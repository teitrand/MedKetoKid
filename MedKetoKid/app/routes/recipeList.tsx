// routes/recipeList.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Recipe List",
    description: "List of all available recipes"
  };
};

export default function RecipeList() {
  return (
    <div>
      <h2>Recipe List</h2>
      <p>This is the list of all available recipes.</p>
    </div>
  );
}
