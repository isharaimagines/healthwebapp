import "./Profile.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Navigate to the desired route after sign-out
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <div className="account">
        <div className="account_title">
          <h1>Welcome back !</h1>
        </div>
        <div className="details">
          {user && (
            <div class="chatBoxheader">
              <img
                src={user.photoURL}
                alt="dp"
                width="55"
                height="55"
                style={{ borderRadius: "50%" }}
              />
              <span>{user.displayName}</span>
            </div>
          )}
          {user && (
            <div class="chat-box-logout">
              <button onClick={handleSignOut} title="Sign Out">
                <i class="ri-upload-2-line"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
