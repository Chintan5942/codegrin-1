import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  // In a real app you'd fetch data with the productId
  return (
    <div>
      <h2>Product Details</h2>
      <p>Showing details for product id: <strong>{productId}</strong></p>

      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(`/users/${productId}`)} style={{ marginLeft: 8 }}>
        View User Profile with same id
      </button>
    </div>
  );
}
