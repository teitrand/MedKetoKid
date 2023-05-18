import type { V2_MetaFunction } from "@remix-run/node";

export let meta: V2_MetaFunction = () => {
    return [{
      name: 'description',
      content: 'Page for adding or editing recipes'
    }, {
      name: 'title',
      content: 'Add/Edit Recipe'
    }];
  }

export default function AddEditRecipe() {
  return (
    <div>
      <h2>Add/Edit Recipe</h2>
      <p>Here you can add or edit recipes.</p>
    </div>
  );
}
