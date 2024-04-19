// pages/auth/signin.js
import { signIn } from "next-auth/react";

export default function SignIn() {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                signIn('credentials', {
                    username: e.target.username.value,
                    password: e.target.password.value,
                    callbackUrl: '/'
                });
            }}>
                <input name="username" type="text" required />
                <input name="password" type="password" required />
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}
