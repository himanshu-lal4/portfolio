"use client";
import React, { useState, useCallback, memo } from "react";
import styles from "../../styles/Feedback.module.css";

function Feedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reactionClicked, setReactionClicked] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState("");

  const openModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Function to handle textarea change
  const handleChange = useCallback((event) => {
    setTextAreaValue(event.target.value);
  }, []);

  // Function to handle emoji click
  const handleEmojiClick = useCallback((emoji) => {
    setReactionClicked(true);
    setSelectedEmoji((prev) => (prev === emoji ? null : emoji));
  }, []);

  return (
    <>
      <div className={styles.feedBackBtn}>
        <img
          src="/feedback.png"
          alt="developerLogo"
          width="25"
          height="25"
          style={{ transform: "rotate(-90deg)" }}
        />
        <button onClick={openModal}>Feedback</button>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.cross} onClick={() => setIsModalOpen(false)}>
            <img src="/cross.png" alt="developerLogo" />
          </div>
          <h2 style={{ fontSize: "20px", textAlign: "center" }}>
            How would you rate your experience?
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "10px",
              width: "250px",
              height: "40px",
            }}>
            <div
              className={
                selectedEmoji === 1
                  ? `${styles.emojiClicked}`
                  : `${styles.emoji}`
              }
              onClick={() => handleEmojiClick(1)}>
              <img src="/dead.png" alt="developerLogo" />
            </div>
            <div
              className={
                selectedEmoji === 2
                  ? `${styles.emojiClicked}`
                  : `${styles.emoji}`
              }
              onClick={() => handleEmojiClick(2)}>
              <img src="/sad.png" alt="developerLogo" />
            </div>
            <div
              className={
                selectedEmoji === 3
                  ? `${styles.emojiClicked}`
                  : `${styles.emoji}`
              }
              onClick={() => handleEmojiClick(3)}>
              <img src="/neutral.png" alt="developerLogo" />
            </div>
            <div
              className={
                selectedEmoji === 4
                  ? `${styles.emojiClicked}`
                  : `${styles.emoji}`
              }
              onClick={() => handleEmojiClick(4)}>
              <img src="/happy.png" alt="developerLogo" />
            </div>
            <div
              className={
                selectedEmoji === 5
                  ? `${styles.emojiClicked}`
                  : `${styles.emoji}`
              }
              onClick={() => handleEmojiClick(5)}>
              <img src="/veryHappy.png" alt="developerLogo" />
            </div>
          </div>
          {reactionClicked && (
            <>
              <div>
                <textarea
                  value={textAreaValue}
                  onChange={handleChange}
                  rows={2}
                  cols={30}
                  placeholder="Write your opinion..."
                  style={{ padding: "0 5px", outline: 0 }}
                />
              </div>
              <div className={styles.sendBtn}>
                <button>Submit</button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(Feedback);
