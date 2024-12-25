import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../lib/Firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Oauth() {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // Sign in with Google
      const result = await signInWithPopup(auth, provider);

      // Communicate with the backend
      const res = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensure cookies are included
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to communicate with the backend.");
      }

      const data = await res.json();

      // Update user context and navigate
      updateUser(data);
      navigate("/");
    } catch (error) {
      console.error("Could not sign in with Google", error);
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-success w-100 mt-2" onClick={handleGoogleClick}>
        Continue With Google
      </button>
    </div>
  );
}
