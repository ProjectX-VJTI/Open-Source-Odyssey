import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaFilePdf, FaSpinner } from 'react-icons/fa';
import ProposalPreview from './ProposalPreview';
import { proposalSchema } from './ProposalFields';
import axios from 'axios';

const ProposalForm = () => {
  const [formData, setFormData] = useState({});
  const [pdfs, setPdfs] = useState([]);
  const [references, setReferences] = useState([{ title: '', link: '' }]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { 
    control, 
    handleSubmit, 
    formState: { errors }, 
    setValue,
    reset 
  } = useForm({
    resolver: yupResolver(proposalSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    const hasEmptyReference = references.some(ref => 
      !ref.title.trim() || !ref.link.trim()
    );

    if (hasEmptyReference) {
      alert('Please fill in all reference fields or remove empty references');
      return;
    }

    try {
      setIsSubmitting(true);
      setFormData(data);

      const formDataToSend = new FormData();
      Object.keys(data).forEach(key => {
        if (key !== 'pdfs') {
          formDataToSend.append(key, data[key]);
        }
      });

      formDataToSend.append('references', JSON.stringify(references));
      
      pdfs.forEach(pdfFile => {
        formDataToSend.append('pdfs', pdfFile);
      });
      
      const response = await axios.post('http://localhost:3001/submit-proposal', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Proposal submitted successfully!');
      
      reset();
      setPdfs([]);
      setReferences([{ title: '', link: '' }]);
    } catch (error) {
      console.error('Submission error:', error);
      alert(error.response?.data?.message || 'Failed to submit proposal');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePdfUpload = (e) => {
    const files = Array.from(e.target.files);
    setPdfs(files);
    setValue('pdfs', files);
  };

  const addReferenceField = () => {
    setReferences([...references, { title: '', link: '' }]);
  };

  return (
    <div className="bg-transparent min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto grid grid-cols-2 gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800 rounded-2xl p-8 space-y-5 text-white">
          <div className="text-4xl font-bold font-mono text-center mb-6 text-blue-500">Submit Proposal</div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Controller 
                name="name" 
                control={control} 
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <input 
                      {...field} 
                      placeholder="Your Name"
                      className={`w-full p-3 flex items-center bg-slate-700 rounded-lg ${
                        errors.name ? 'border-2 border-red-500' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
            <div>
              <Controller 
                name="email" 
                control={control} 
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <input 
                      {...field} 
                      type="email" 
                      placeholder="Email Address"
                      className={`w-full p-3 bg-slate-700 rounded-lg ${
                        errors.email ? 'border-2 border-red-500' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>

          <div>
            <Controller 
              name="mentors" 
              control={control} 
              defaultValue=""
              render={({ field }) => (
                <div>
                  <input 
                    {...field} 
                    placeholder="Mentors (name1:email1, name2:email2)"
                    className={`w-full p-3 bg-slate-700 rounded-lg ${
                      errors.mentors ? 'border-2 border-red-500' : ''
                    }`}
                  />
                  {errors.mentors && (
                    <p className="text-red-500 text-sm mt-1">{errors.mentors.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Controller 
              name="proposalTitle" 
              control={control} 
              defaultValue=""
              render={({ field }) => (
                <div>
                  <input 
                    {...field} 
                    placeholder="Proposal Title"
                    className={`w-full p-3 bg-slate-700 rounded-lg ${
                      errors.proposalTitle ? 'border-2 border-red-500' : ''
                    }`}
                  />
                  {errors.proposalTitle && (
                    <p className="text-red-500 text-sm mt-1">{errors.proposalTitle.message}</p>
                  )}
                </div>
              )}
            />
            <Controller 
              name="difficulty" 
              control={control} 
              defaultValue="beginner"
              render={({ field }) => (
                <div>
                  <select 
                    {...field} 
                    className={`w-full p-3 border-r-[12px] border-b-2 flex border-transparent bg-slate-700 rounded-lg ${
                      errors.difficulty ? 'border-2 border-red-500' : ''
                    }`}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  {errors.difficulty && (
                    <p className="text-red-500 text-sm mt-1">{errors.difficulty.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <Controller 
            name="description" 
            control={control} 
            defaultValue=""
            render={({ field }) => (
              <div>
                <textarea 
                  {...field} 
                  placeholder="Proposal Description" 
                  rows={4}
                  className={`w-full p-3 bg-slate-700 rounded-lg resize-none ${
                    errors.description ? 'border-2 border-red-500' : ''
                  }`}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                )}
              </div>
            )}
          />

          <div className="space-y-3">
            {references.map((ref, index) => (
              <div key={index} className="grid grid-cols-2 gap-3">
                <input 
                  placeholder="Reference Title" 
                  value={ref.title}
                  onChange={(e) => {
                    const newRefs = [...references];
                    newRefs[index].title = e.target.value;
                    setReferences(newRefs);
                  }}
                  className="p-3 bg-slate-700 rounded-lg"
                />
                <input 
                  placeholder="Reference Link" 
                  value={ref.link}
                  onChange={(e) => {
                    const newRefs = [...references];
                    newRefs[index].link = e.target.value;
                    setReferences(newRefs);
                  }}
                  className="p-3 bg-slate-700 rounded-lg"
                />
              </div>
            ))}
            <button 
              type="button" 
              onClick={addReferenceField} 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              + Add Reference
            </button>
          </div>

          <div>
            <input 
              type="file" 
              multiple 
              onChange={handlePdfUpload}
              className="hidden" 
              id="pdf-upload" 
              accept=".pdf"
            />
            <label 
              htmlFor="pdf-upload" 
              className={`flex items-center justify-center w-full 
                p-4 border-2 border-dashed rounded-lg cursor-pointer 
                transition-colors ${
                  errors.pdfs 
                    ? 'border-red-500 text-red-500' 
                    : 'border-slate-600 text-slate-400 hover:border-blue-500'
                }`}
            >
              <FaFilePdf className="mr-3" />
              <span>{errors.pdfs ? errors.pdfs.message : 'Upload Project PDFs'}</span>
            </label>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full p-3 rounded-lg transition-colors ${
              isSubmitting 
                ? 'bg-blue-800 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Proposal'
            )}
          </button>
        </form>

        <ProposalPreview formData={formData} references={references} pdfs={pdfs}/>
      </div>
    </div>
  );
};

export default ProposalForm;