import React from 'react'
interface ProductCardProps {
    productName: string;
    description: string;
    price: number;
    children: React.ReactNode
}
export default function ProductCard({ productName, description, price, children }: ProductCardProps) {
    console.log(children)
    return (
        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '20px',
                margin: '20px',
                width: '250px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
            }}
        >
            {/* Product Name */}
            <h2
                style={{
                    fontSize: '22px',
                    color: '#333',
                    marginBottom: '10px',
                }}
            >
                {productName}
            </h2>

            {/* Product Description */}
            <p
                style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '15px',
                }}
            >
                {description}
            </p>

            {/* Product Price */}
            <p
                style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#d24c4c',
                }}
            >
                $                {price} - {children}

            </p>
        </div>
    )
}