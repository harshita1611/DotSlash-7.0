import react from 'react';
import Form from "../components/form.jsx";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <Link to="/dashboard"><Form/></Link>
        </div>
    )
}

export default Login;