import React from 'react'
interface SideButtonProps {
    title: string;
    children: React.ReactNode;

}
export default function SideButton({ title, children }: SideButtonProps) {
    return (
        <div>
            <button className="side-button" style={{ margin: '20px' }}>
                <h3> {title}</h3>
                {children}
            </button>
        </div>
    )
}
