import React, { useState } from 'react';
import './createAcc.css';

const CreateAcc = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Automatically open modal when component mounts.

  const closeModal = () => {
    setIsModalOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>Create Account</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateAcc;
