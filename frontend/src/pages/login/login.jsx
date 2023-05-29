import { useState } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';

const loginInfos = {
    email: '',
    password: '',
};

function Login() {
    const [login, setLogin] = useState(loginInfos);
    const { email, password } = login;
    console.log(login);
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    return (
        <div className={styles.container}>
            <form id="form" className={styles.form}>
                <h2>Log In</h2>

                <div className={styles.formControl}>
                    <label htmlFor="email">Email</label>
                    <input
                        typeof="text"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleLoginChange}
                    />
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="password">Password</label>
                    <input
                        typeof="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={handleLoginChange}
                    />
                </div>

                <button>Log In</button>
            </form>
        </div>
    );
}

export default Login;
