import React from 'react';
import { FaLink } from 'react-icons/fa';

const ProposalPreview = ({ formData, references, images }) => (
    <div className="bg-slate-800 rounded-2xl p-8 pt-9 space-y-6 text-white">
    <h3 className="text-3xl text-purple-600 font-mono font-bold">Proposal Preview</h3>
    
    {Object.keys(formData).length > 0 && (
      <div className="space-y-4">
        <div className='font-mono text-xl'>
          <span>Name:</span> {formData.name}
        </div>
        <div className='font-mono text-xl' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
          <span>Email:</span> {formData.email}
        </div>
        <div className='font-mono text-xl' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
          <span>Proposal Title:</span> {formData.proposalTitle}
        </div>
        <div className='font-mono text-xl' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
          <span>Description:</span> {formData.description}
        </div>
        <div className='font-mono text-xl'>
          <span>Difficulty:</span> {formData.difficulty}
        </div>
        <div className='font-mono text-xl' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
          <span>Mentors:</span> {formData.mentors}
        </div>
        
        {references.length > 0 && (
          <div>
            <div className='font-mono text-xl'>References:</div>
            {references.map((ref, index) => (
              ref.title && ref.link && (
                <div key={index} className="flex items-center space-x-2 mt-1 text-xl">
                  <FaLink className="w-4 h-4 text-blue-400" />
                  <a href={ref.link} target="_blank" rel="noopener noreferrer"
                    className="text-blue-300 hover:underline">{ref.title}</a>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    )}

    {images.length > 0 && (
      <div className="grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} 
            className="w-full h-32 object-cover rounded-lg"/>
        ))}
      </div>
    )}
  </div>
);

export default ProposalPreview;