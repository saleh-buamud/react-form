import React from 'react';
interface IsModelProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    message: string;
}
export default function IsModel({ setShowModal, message, showModal }: IsModelProps) {
    if (!showModal) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-popup">
                <h2>Modal Title</h2>
                <p>{message}</p>

                <button onClick={() => setShowModal(false)}>Close</button>
            </div>

            <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99999;
        }

        .modal-popup {
          width: 400px;
          max-width: 90%;
          background: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 100000;
        }

        .modal-popup h2 {
          margin-bottom: 15px;
        }

        .modal-popup p {
          margin-bottom: 25px;
          color: #666;
        }

        .modal-popup button {
          padding: 10px 25px;
          border: none;
          border-radius: 8px;
          background: #4f46e5;
          color: white;
          cursor: pointer;
          font-size: 16px;
        }

        .modal-popup button:hover {
          opacity: 0.85;
        }
      `}</style>
        </div>
    )
}