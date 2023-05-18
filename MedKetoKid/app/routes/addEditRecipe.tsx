// routes/addEditRecipe.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Add/Edit Recipe",
    description: "Page for adding or editing recipes"
  };
};

export default function AddEditRecipe() {
  return (
    <div>
      <h2>Add/Edit Recipe</h2>
      <p>Here you can add or edit recipes.</p>
    </div>
  );
}
