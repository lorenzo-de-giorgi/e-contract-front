"use client"

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date_of_birth, setBirthday] = useState('');
    const today = new Date().toISOString().split('T')[0];

    const handleRegister = async (e) => {
        e.preventDefault();
    
        const formData = {
            username,
            email,
            password,
            name,
            surname,
            date_of_birth,
        };
    
        console.log("Dati Utente: " + formData);
    
        try {
            const response = await axios.post('http://127.0.0.1:3000/users', { user: formData });
            console.log('User created successfully:', response.data);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    
    return(
        <div className="container">
            <h1 className="text-center mb-3">Register</h1>
            <form className="d-flex flex-column mt-4" onSubmit={handleRegister}>

                <div className="row mb-3">
                    <div className="col">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required className="form-control p-2"/>
                    </div>
                    <div className="col">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" required className="form-control p-2" minLength={2}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required className="form-control p-2" minLength={8}/>
                    </div>
                    <div className="col">
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" required className="form-control p-2" minLength={8}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" required className="form-control p-2" minLength={3}/>
                    </div>
                    <div className="col">
                        <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" placeholder="Surname" required className="form-control p-2" minLength={3}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input value={date_of_birth} onChange={(e) => setBirthday(e.target.value)} type="date" placeholder="Date Of Birth" required className="form-control p-2" max={today}/>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Registrati</button>
            </form>
            <p className="text-center mt-4">Sei già registrato? <Link href="/login">Accedi</Link></p>
        </div>
    )
}