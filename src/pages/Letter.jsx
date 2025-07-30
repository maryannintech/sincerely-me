import { useLocation } from "react-router-dom";

export function Letter() {
  const location = useLocation();
  const { title, content, deliveryDate } = location.state || {};
  document.title = `${title} - Sincerely, Me`;

  return (
    <div className="text-center">
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Delivery Date: {deliveryDate}</p>
    </div>
  );
}
