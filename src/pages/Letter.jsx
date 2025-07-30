import { useLocation } from "react-router-dom"


export function Letter() {
    const location = useLocation();
    const { title, content, deliveryDate } = location.state || {};

    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>Delivery Date: {deliveryDate}</p>
        </div>
    )
}