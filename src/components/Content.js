import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp, onSnapshot, query, orderBy, doc, getDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import FirebaseUsersCounter from "./FirebaseUsersCounter";
import "../css and scss/content.css";

function Content() {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");
  const [messagees, setMessages] = useState([]);
  const [userColors, setUserColors] = useState({});

  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy("createdAt"));
    const unsub = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    const fetchUserColor = async (userId) => {
      const userColorRef = doc(db, "user_colors", userId);
      const userColorSnapshot = await getDoc(userColorRef);
      const userColorData = userColorSnapshot.data();
      const userColor = userColorData ? userColorData.color : '';
      setUserColors(prevUserColors => ({
        ...prevUserColors,
        [userId]: userColor
      }));
    };

    const userId = auth.currentUser.uid;
    fetchUserColor(userId);
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    const userId = auth.currentUser.uid;
    const userColor = userColors[userId] || '';

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      uidd: userId,
      userColor: userColor
    });

    setNewMessage("");
  };

  function logOut() {
    navigate("/welcom");
    return signOut(auth);
  }

  return (
    <div className="container12">
      <div className="content">
        <div className="content-header">
          <div onClick={logOut}>
            <button className="btn-signup">
              Выйти
            </button>
          </div>
          <div className="content-center">
            <div className="content-name">
              KRSU CHAT
              <div className="content-status" style={{ display: "flex" }}>{<FirebaseUsersCounter />} <p>-участников</p></div>
            </div>
          </div>
          <div className="content-avatar avatar-profile" title="Скоро добавится в будущем обновлении"></div>
        </div>
        <div className="content-body">
          <div className="content-body_messengs">
            {messagees.map((message) => {
              const createdAt = message.createdAt ? message.createdAt.toDate() : null;

              let timeString = 'Unknown';

              if (createdAt) {
                const options = { hour: 'numeric', minute: 'numeric', hour12: false };
                timeString = createdAt.toLocaleTimeString('en-US', options);
              }
              return (
                <div key={message.id}>
                  {message.uidd === auth.currentUser.uid ? (
                    <div className="content-message sent">
                      <div className="content-bubble">{message.text}</div>
                      <div className="content-time">{timeString}</div>
                    </div>
                  ) : (
                    <div className="section-message">
                      <div className="content-avatar"></div>
                      <div className="content-message received">
                        <h4 className="content-nicname" style={{ color: message.userColor, margin: '0px 0px 5px 0px' }}>{message.user}</h4>
                        <div className="content-bubble">{message.text}</div>
                        <div className="content-time">{timeString}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="">
            <form onSubmit={HandleSubmit} className="content-footer">
              <input onChange={(e) => setNewMessage(e.target.value)} type="text" value={newMessage} className="content-input" placeholder="Написать сообщение..." />
              <button type="submit" className="content-button" >
                <svg className="content-button-icon" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;