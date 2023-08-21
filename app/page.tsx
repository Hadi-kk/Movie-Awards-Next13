"use client"
import React from 'react';
import BallotCategory from '@/components/BallotCategory';
import BallotModal from '@/components/BallotModal';

interface BallotItem {
  title: string;
  photoUrL: string;
  id: string;
}

interface BallotCategoryData {
  id: string;
  items: BallotItem[];
  title: string;
}

const BallotPage: React.FC = () => {
  const [ballotData, setBallotData] = React.useState<BallotCategoryData[]>([]);
  const [selectedNominees, setSelectedNominees] = React.useState<{ [category: string]: string }>(
    {}
  );
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    fetchBallotData();
  }, []);

  const fetchBallotData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/ballots');
      if (!response.ok) {
        throw new Error('Failed to fetch ballot data');
      }
      const data: { items: BallotCategoryData[] } = await response.json();
      setBallotData(data.items);
    } catch (error) {
      console.error('Error fetching ballot data:', error);
    }
  };

  const handleNomineeSelect = (category: string, nomineeId: string) => {
    setSelectedNominees((prevSelections) => ({
      ...prevSelections,
      [category]: nomineeId,
    }));
  };

  const handleSubmit = () => {
    console.log('Selected Nominees:', selectedNominees);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedNominees({});
  };

  return (
    <main>
      <div className="ballot-page">
        <h1 className="title">Movie Awards Ballot</h1>
        {ballotData.map((category) => (
          <BallotCategory
            key={category.id}
            title={category.title}
            nominees={category.items}
            selectedNomineeId={selectedNominees[category.id] || null}
            onNomineeSelect={(nomineeId) => handleNomineeSelect(category.id, nomineeId)}
          />
        ))}
        <button className="ballot-submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {showModal && (
        <BallotModal
          nominees={Object.keys(selectedNominees).map((category) => ({
            category,
            nominee: selectedNominees[category],
          }))}
          onClose={closeModal}
        />
      )}
    </main>
  );
};

export default function Home() {
  return <BallotPage />;
}
