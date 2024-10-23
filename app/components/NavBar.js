import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar(){
    return(
        <nav className="d-flex justify-content-between align-items-center py-3">
            <div>
                <h1>Gestione Contratti</h1>
            </div>
            <div>
                <Link href="" className="me-3 btn btn-dark">Accedi</Link>
                <Link href="" className="btn btn-outline-dark">Registrati</Link>
            </div>
        </nav>
    )
}