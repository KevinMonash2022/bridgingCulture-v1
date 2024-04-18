import { signIn } from "next-auth/react";

// Functional component for the login page
export default function Login() {
  // Event handler for form submission
  const handleLogin = async (event) => {
    event.preventDefault();  // Prevent the default form submission behavior
    const username = event.target.username.value;  // Extract the username from the form
    const password = event.target.password.value;  // Extract the password from the form

    // Call the signIn method from NextAuth, passing in credentials and redirect option
    const result = await signIn("credentials", {
      redirect: false,  // Disable automatic redirection after sign in
      username,
      password,
    });

    // Check for errors in the result of the signIn operation
    if (result.error) {
      // If there's an error, log it to the console
      console.error(result.error);
    } else {
      // If no error, redirect the user manually to the homepage/dashboard
      window.location.href = "/";
    }
  };

  // Component's rendered JSX
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f0f2f5" }}>
      <div style={{ maxWidth: "400px", width: "100%", padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        {/* Form element with an onSubmit handler */}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2>Welcome Back!</h2>  
            <p>Sign in to your account</p>  
          </div>
          {/* Input fields for username and password */}
          <input name="username" type="text" placeholder="Username" required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          <input name="password" type="password" placeholder="Password" required style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          {/* Submit button for the form */}
          <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "none", background: "#007bff", color: "white", cursor: "pointer" }}>Log in</button>
        </form>
      </div>
    </div>
  );
}

