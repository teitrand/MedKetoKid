import { Link } from "@remix-run/react";

export default function KetoDetailsPage() {
  return (
    <div>
      <h2>Keto Diet Details</h2>
      <p>This is a page where we will provide details about a medical keto diet.</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

