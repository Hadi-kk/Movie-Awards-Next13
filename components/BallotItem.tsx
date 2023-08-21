import Image from 'next/image';
import React from 'react';

interface BallotItemProps {
  title: string;
  photoUrL: string;
  id: string;
  selected: boolean;
  onClick: () => void;
}

const BallotItem: React.FC<BallotItemProps> = ({ title, photoUrL, id, selected, onClick }) => {
  return (
    <div className={`ballot-item ${selected ? 'selected' : ''}`} onClick={onClick}>
      <p>{title}</p>
      <div style={{ position: 'relative', width: 'auto', height: '300px' }}>
        <Image src={photoUrL} alt={title} width={200} height={300} />
      </div>
      
      
        <button className={`select-button ${selected ? 'selected' : ''}`} onClick={onClick}>
          {selected ? "selected" : "Select"}
        </button>
      
    </div>
  );
};

export default BallotItem;
