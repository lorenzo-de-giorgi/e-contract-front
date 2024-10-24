"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";
import '../globals.css';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log("Username: " + username + "Password: " + password);
    }

    return (
        <div className="container">
            <h1 className="text-center">Login</h1>
            <form onSubmit={handleLogin} className="d-flex flex-column">
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" required className="form-control p-2 mb-3 mt-3 input-style"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required className="form-control p-2 input-style"/>
                <p className="text-center mt-4">Hai dimenticato la password? <Link href="/reset_password">Reimposta</Link></p>
                <Button type="submit" className="mt-3 input-style">Login</Button>
            </form>
            <p className="text-center mt-4">Non sei ancora registrato? <Link href="/register">Registrati</Link></p>
        </div>
    );
}