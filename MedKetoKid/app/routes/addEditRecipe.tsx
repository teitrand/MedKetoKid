import { V2_MetaFunction as MetaFunction } from "@remix-run/react";


export let meta: MetaFunction = () => {
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
