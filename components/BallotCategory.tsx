import React from 'react';
import BallotItem from './BallotItem';

interface BallotItem {
  title: string;
  photoUrL: string;
  id: string;
}

interface BallotCategoryProps {
  title: string;
  nominees: BallotItem[];
  selectedNomineeId: string | null;
  onNomineeSelect: (nomineeId: string) => void;
}

const BallotCategory: React.FC<BallotCategoryProps> = ({
  title,
  nominees,
  selectedNomineeId,
  onNomineeSelect,
}) => {
  return (
    <div className="ballot-category">
      <div className="ballot-category-title">
        <h2>{title}</h2>
      </div>
      <div className="ballot-items">
        {nominees.map((nominee) => (
          <BallotItem
            key={nominee.id}
            title={nominee.title}
            photoUrL={nominee.photoUrL}
            id={nominee.id}
            selected={selectedNomineeId === nominee.id}
            onClick={() => onNomineeSelect(nominee.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BallotCategory;
