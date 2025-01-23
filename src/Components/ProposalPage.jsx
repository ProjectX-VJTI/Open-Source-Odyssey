import React from 'react';
import ProposalForm from './ProposalForm';

const ProposalPage = () => {
  return (
    <div className="min-h-screen bg--100% text-white flex items-center justify-center">
      <div className="w-full max-w-4x rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center"style={{ color: '#814fde' }}>Proposal Submission</h1>
        <ProposalForm />
      </div>
    </div>
  );
};

export default ProposalPage;