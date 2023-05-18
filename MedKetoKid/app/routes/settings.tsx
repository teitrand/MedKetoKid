import { Form } from "@remix-run/react";
//import { ketogenicRatio, carbsPerMeal, proteinPerMeal, fatsPerMeal, mealsPerDay } from "config/ketogenicsConfig";
import config from "config/ketogenicsConfig";
import React, { useState } from "react";

export default function SettingsPage() {
  const [ketoRatio, setKetoRatio] = useState(config.ketogenicRatio);
  const [carbs, setCarbs] = useState(config.karbsPerMeal);
  const [protein, setProtein] = useState(config.proteinPerMeal);
  const [fats, setFats] = useState(config.fatPerMeal);
  const [meals, setMeals] = useState(config.mealsPerDay);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Save the new values to your data source here
  }

  return (
    <div>
      <h2>Settings</h2>
      <p>This is a page where we will set the details of the keto diet.</p>

      <Form onSubmit={handleSubmit}>
        <label>
          Ketogenic Ratio:
          // This is a ratio number. Like 2.5:1 or 4:1. It is the ratio of fats to carbs and protein.
          <input type="number" step="0.1" value={ketoRatio} onChange={e => setKetoRatio(parseFloat(e.target.value))} />
        </label>
        <label>
          Carbohydrates per meal (grams):
          <input type="number" value={carbs} onChange={e => setCarbs(parseInt(e.target.value, 10))} />
        </label>
        <label>
          Protein per meal (grams):
          <input type="number" value={protein} onChange={e => setProtein(parseInt(e.target.value, 10))} />
        </label>
        <label>
          Fats per meal (grams):
          <input type="number" value={fats} onChange={e => setFats(parseInt(e.target.value, 10))} />
        </label>
        <label>
          Meals per day:
          <input type="number" value={meals} onChange={e => setMeals(parseInt(e.target.value, 10))} />
        </label>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
}
