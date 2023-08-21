import React from 'react';

interface BallotModalProps {
  nominees: { category: string; nominee: string }[];
  onClose: () => void;
}

const BallotModal: React.FC<BallotModalProps> = ({ nominees, onClose }) => {
  return (
    <div className="ballot-modal">
      <div className="modal-content">
        <div className='modal-header'>
      
        <h2>Selected Nominees</h2>
        <button className="modal-close" onClick={onClose}>
          x
        </button>
        </div>
        {nominees.map((item, index) => (
          <div key={index}>
            <p>
              <strong>{item.category}:</strong> {item.nominee}
            </p>
          </div>
        ))}
        <p>Vote casted successfully!</p>
        
      </div>
    </div>
  );
};

export default BallotModal;
