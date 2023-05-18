// routes/recipeList.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export let meta: V2_MetaFunction = () => {
    return [{
      name: 'description',
      content: 'List of all available recipes'
    }, {
      name: 'title',
      content: 'Recipe List'
    }];
  }
  
export default function RecipeList() {
  return (
    <div>
      <h2>Recipe List</h2>
      <p>This is the list of all available recipes.</p>
    </div>
  );
}
