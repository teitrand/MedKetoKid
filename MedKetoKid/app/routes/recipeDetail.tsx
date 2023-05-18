// routes/recipeDetail.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return {
    title: "Recipe Detail",
    description: "Detailed view of a selected recipe"
  };
};

export default function RecipeDetail() {
  return (
    <div>
      <h2>Recipe Detail</h2>
      <p>Here you can see the details of the selected recipe.</p>
    </div>
  );
}
