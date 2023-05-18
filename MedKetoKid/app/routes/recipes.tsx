// routes/recipes.tsx

import type { V2_MetaFunction } from "@remix-run/node";

export let meta: V2_MetaFunction = () => {
  return [{
    name: 'description',
    content: 'Recipes page'
  }, {
    name: 'title',
    content: 'Recipes'
  }];
}

export default function Recipes() {
  return (
    <div>
      <h2>Recipes</h2>
      <p>Explore delicious and healthy recipes.</p>
    </div>
  );
}
