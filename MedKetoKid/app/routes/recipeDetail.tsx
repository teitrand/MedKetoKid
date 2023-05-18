// routes/recipeDetail.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export let meta: V2_MetaFunction = () => {
    return [{
      name: 'description',
      content: 'Detailed view of a selected recipe'
    }, {
      name: 'title',
      content: 'Recipe Detail'
    }];
  }
  
export default function RecipeDetail() {
  return (
    <div>
      <h2>Recipe Detail</h2>
      <p>Here you can see the details of the selected recipe.</p>
    </div>
  );
}
