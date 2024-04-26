import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Community.css";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, app } from "../firebase";

const db = getFirestore(app);

export const Community = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
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

  useEffect(() => {
    // Scroll to the bottom of the page whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const scrollToBottom = () => {
    // Scroll to the bottom of the page whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) {
      return; // Exit the function if message is empty or contains only whitespace
    }
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
      reaction: 0,
    });
    setNewMessage("");
  };

  const deleteMessage = async (messageId, messageTimestamp) => {
    // Calculate the time difference between current time and message timestamp
    const currentTime = Timestamp.now();
    const differenceInSeconds = currentTime.seconds - messageTimestamp.seconds;

    // Check if the message was sent within the last 5 minutes (300 seconds)
    if (differenceInSeconds <= 600) {
      // Delete the message document from Firestore
      await deleteDoc(doc(db, "messages", messageId));
    } else {
      // Alert the user that the message cannot be deleted
      alert("You can only delete messages sent within the last 10 minutes.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  function formatDate(timestamp) {
    if (!timestamp) return ""; // Return empty string if timestamp is null or undefined
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }

  function formatTime(timestamp) {
    if (!timestamp) return ""; // Return empty string if timestamp is null or undefined
    const date = new Date(timestamp);
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return date.toLocaleTimeString(undefined, options);
  }

  const handleBodyClick = () => {
    const checkbox = document.getElementById("nav_check");

    checkbox.checked = false;
  };

  const addReaction = async (messageId, reactionType) => {
    const messageRef = doc(db, "messages", messageId);
    const messageDoc = await getDoc(messageRef);

    if (messageDoc.exists()) {
      let currentReaction = messageDoc.data().reaction || 0;

      if (reactionType === "like") {
        currentReaction++; // Increase reaction by one for thumbs up
      } else if (reactionType === "love") {
        currentReaction--; // Decrease reaction by one for thumbs down
      }

      // Update the reaction field in Firestore
      await updateDoc(messageRef, {
        reaction: currentReaction,
      });
    } else {
      console.log("Document does not exist");
    }
  };

  return (
    <>
      <ol className="timeline" onClick={handleBodyClick}>
        <li className="timeline-item">
          <span className="timeline-item-icon | faded-icon">
            <i class="ri-check-fill | avatar"></i>
          </span>

          <div className="timeline-item-description">
            <span>
              <Link href="#">Ravindu Ishara</Link> has started the community
              successfully
            </span>
          </div>
        </li>

        <li className="timeline-item">
          <span className="timeline-item-icon | faded-icon">
            <i className="ri-pencil-fill"></i>
          </span>

          <div className="timeline-item-description">
            <span>
              <Link href="#">Ravindu Ishara</Link> has changed
              <Link href="#">🧩 2 attributes</Link> on
              <time datetime="19-01-2024">Jan 19, 2024</time>
            </span>
          </div>
        </li>
        <li className="timeline-item">
          <span className="timeline-item-icon | faded-icon">
            <i className="ri-arrow-right-fill"></i>
          </span>
          <div className="timeline-item-description">
            <span>
              <Link href="#">Ravindu Ishara</Link> moved{" "}
              <Link href="#">Ishan Wishara</Link> to
              <Link href="#">📚 Technical Test</Link> on
              <time datetime="19-01-2024">Jan 19, 2024</time>
            </span>
          </div>
        </li>

        {messages.map((msg) => (
          <li
            className={`timeline-item | extra-space ${
              msg.data.uid === user?.uid ? "right-msg" : "left-msg"
            }`}
            key={msg.id}
          >
            <span className="timeline-item-icon | filled-icon">
              <i className="ri-question-answer-fill"></i>
              {/*  <i className="ri-discuss-fill"></i>  */}
            </span>
            <div className="timeline-item-wrapper" ref={messagesEndRef}>
              <div className="timeline-item-description">
                <div className="details_comment">
                  <img
                    src={msg.data.photoURL}
                    alt="dp"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                  <span>
                    <Link href="#">{msg.data.displayName}</Link>
                  </span>
                </div>

                <div className="comment">
                  <p className="button_chat text">{msg.data.text}</p>
                  <div className="reactions">
                    {/* Render reaction buttons */}
                    <button
                      onClick={() => addReaction(msg.id, "like")}
                      title="Like"
                    >
                      👍 {"  "} {msg.data.reaction}
                    </button>
                    <button
                      onClick={() => addReaction(msg.id, "love")}
                      title="Love"
                    >
                      👎
                    </button>
                    {/* Add more buttons for other reaction types as needed */}
                  </div>
                  <span>
                    {msg.data.timestamp ? (
                      <span>
                        <sub>
                          {formatDate(msg.data.timestamp.toDate())} {" | "}
                          {formatTime(msg.data.timestamp.toDate())}
                        </sub>
                      </span>
                    ) : (
                      "Unknown"
                    )}
                    {user && user.uid === msg.data.uid && (
                      <button
                        className="delete_btn"
                        onClick={() =>
                          deleteMessage(msg.id, msg.data.timestamp)
                        }
                        title="Delete Message"
                      >
                        <i className="ri-delete-bin-5-line"></i>
                      </button>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="sticky_section" onClick={handleBodyClick}>
        <div class="chat-box">
          {user && (
            <div class="chat-box-header">
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
            <div class="chat-box-input">
              <input
                type="text"
                placeholder={newMessage ? newMessage : "Type your message..."}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button onClick={sendMessage} title="Send">
                <i class="ri-send-plane-2-fill"></i>
              </button>
            </div>
          )}
          {user && (
            <div class="chat-box-logout">
              <button onClick={() => auth.signOut()} title="Sign Out">
                <i class="ri-upload-2-line"></i>
              </button>
            </div>
          )}
          {!user && (
            <div className="border-open">
              <h3 style={{ marginRight: "50px" }}>
                Let's Join with Our Community
              </h3>
              <div className="chat-box-login">
                <button
                  className="google-login-button"
                  onClick={handleGoogleLogin}
                  title="Login Account"
                >
                  <div className="icons">
                    <img
                      alt="Google"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
                    />
                  </div>
                  <span className="button-text">Sign in with Google</span>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="dropdown_btn">
          <button onClick={scrollToBottom} title="Scroll to bottom">
            <i class="ri-skip-down-line"></i>
          </button>
        </div>
      </div>
    </>
  );
};
