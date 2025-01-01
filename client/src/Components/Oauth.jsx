import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../lib/Firebase";
import { useNavigate } from "react-router-dom";
import { useContext, } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Bounce, toast } from "react-toastify";

export default function Oauth({active,isPopupOpen, setIsPopupOpen}) {
  // console.log(isPopupOpen)
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const handleGoogleClick = async () => {
    try {
      

      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      // Sign in with Google
      const result = await signInWithPopup(auth, provider);

      // Communicate with the backend
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_BASEURL}/api/auth/google`,
        {
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
        }
      );
      // console.log(res)

      if (!res.ok) {
        throw new Error("Failed to communicate with the backend.");
      }

      const data = await res.json();
      // console.log(data.message)
      

      // Update user context
      
      updateUser(data.user);
      setIsPopupOpen(false);
      navigate("/profile");
      toast.success("🎉🎉" + (data.message || ""), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition:Bounce,
      });
    } catch (err) {
      console.error("Could not sign in with Google", err);
      toast.error("❌ "+ (err.data.error || ""), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition:Bounce,
      });
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success w-100 mt-2"
        onClick={handleGoogleClick}
      >
        Continue With Google
      </button>
    </div>
  );
}
