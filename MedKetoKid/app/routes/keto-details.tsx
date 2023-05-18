import { Link } from "@remix-run/react";
//import { ketogenicRatio, carbs, protein, fats } from "../config/ketogenicsConfig";
import config from "../config/ketogenicsConfig";

export default function KetoDetailsPage() {
  return (
    <div>
      <h2>Keto Diet Details</h2>
      <p>This is a page where we will provide details about a medical keto diet.</p>

      <h3>Keto Diet Configuration</h3>
      <ul>
        <li><strong>Ketogenic Ratio:</strong> {config.ketogenicRatio}</li>
        <li><strong>Carbohydrates:</strong> {config.dailyCarbsLimit} grams</li>
        <li><strong>Protein:</strong> {config.dailyProteinLimit} grams</li>
        <li><strong>Fats:</strong> {config.dailyFatTarget} grams</li>
      </ul>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}
