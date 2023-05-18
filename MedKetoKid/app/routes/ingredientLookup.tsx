// routes/ingredientLookup.tsx

import type { V2_MetaFunction } from "@remix-run/node";

// This is the updated syntax for V2
export let meta: V2_MetaFunction = () => {
    return [{
      name: 'description',
      content: 'Page for looking up ingredients'
    }, {
      name: 'title',
      content: 'Ingredient Lookup'
    }];
  }
  
export default function IngredientLookup() {
  return (
    <div>
      <h2>Ingredient Lookup</h2>
      <p>Lookup</p>
    </div>
    );
}

