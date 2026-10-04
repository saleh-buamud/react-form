import { useState } from 'react';
import './MyForm.css';

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}
interface myFormProps {
    createUser: (user: User) => void;
}

export default function MyForm({ createUser }: myFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: 0,

    });


    return (
        <main className="my-form-page">
            <form
                className="my-form-card"
                onSubmit={(event) => {
                    event.preventDefault();
                    createUser(formData);
                    console.log(formData);
                }}

            >
                <div className="my-form-header">
                    <span className="my-form-badge">
                        Get Started
                    </span>

                    <h1 className="my-form-title">
                        Create your account
                    </h1>

                    <p className="my-form-description">
                        Enter your information below to get started.
                    </p>
                </div>

                <div className="my-form-field">
                    <label
                        className="my-form-label"
                        htmlFor="name"
                    >
                        Full Name
                    </label>

                    <input
                        className="my-form-input"
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                name: event.target.value
                            });
                        }}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required

                    />
                </div>

                <div className="my-form-field">
                    <label
                        className="my-form-label"
                        htmlFor="email"
                    >
                        Email Address
                    </label>

                    <input
                        className="my-form-input"
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                email: event.target.value
                            });
                        }}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                    />
                </div>
                <div className="my-form-field">
                    <label
                        className="my-form-label"
                        htmlFor="age"
                    >
                        age
                    </label>

                    <input
                        className="my-form-input"
                        type="number"
                        id="age"
                        value={formData.age}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                age: Number(event.target.value)
                            });
                        }}
                        placeholder="age example: 20"
                        autoComplete="age"
                        required
                    />
                </div>

                <button
                    className="my-form-button"
                    type="submit"
                >
                    Create User
                </button>

                <p className="my-form-footer">
                    Your information is safe with us.
                </p>
            </form>
        </main>
    );
}
