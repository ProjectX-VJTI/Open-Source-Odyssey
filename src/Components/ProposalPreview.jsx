import React from 'react';
import { FaLink, FaFilePdf } from 'react-icons/fa';

const ProposalPreview = ({ formData, references, pdfs }) => (
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
        <div className='font-mono text-xl'>
          <span>Mentors:</span> {formData.mentors}
        </div>
        <div className='font-mono text-xl' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
          <span>Proposal Title:</span> {formData.proposalTitle}
        </div>
        <div className='font-mono text-xl'>
          <span>Difficulty:</span> {formData.difficulty}
        </div>
        <div className='font-mono text-xl' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
          <span>Description:</span> {formData.description}
        </div>
      </div>
    )}

    {references.length > 0 && (
      <div>
        <div className='font-mono text-xl mb-2'>References:</div>
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

    {pdfs.length > 0 && (
      <div>
        <div className='font-mono text-xl mb-2'>Uploaded PDFs:</div>
        <div className="grid grid-cols-1 gap-2">
          {pdfs.map((pdf, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 bg-slate-700 p-2 rounded-lg"
            >
              <FaFilePdf className="text-red-500 w-6 h-6" />
              <span className="text-white truncate">{pdf.name}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ProposalPreview;