import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUpload, FaUsers, FaPaperclip } from 'react-icons/fa';
import { proposalSchema } from './ProposalFields';
import ProposalPreview from './ProposalPreview';

const ProposalForm = () => {
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);
  const [references, setReferences] = useState([{ title: '', link: '' }]);

  const { 
    control, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    setValue,
    reset 
  } = useForm({
    resolver: yupResolver(proposalSchema),
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log('Proposal Submitted:', {
      ...data,
      images: images,
      references
    });
    setFormData(data);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImages(previews);
    setValue('images', files);
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
            <Controller name="name" control={control} defaultValue=""
              render={({ field }) => (
                <div className="relative flex items-center">
                  <input {...field} placeholder="Your Name"
                    className={`w-full p-3 pl-10 bg-slate-700 rounded-lg ${
                      errors.name ? 'border-2 border-red-500' : ''
                    }`}
                  />
                  <FaUsers className="absolute left-3 text-slate-400" />
                </div>
              )}
            />
            <Controller name="email" control={control} defaultValue=""
              render={({ field }) => (
                <div className="relative flex items-center">
                  <input {...field} type="email" placeholder="Email Address"
                    className={`w-full p-3 pl-10 bg-slate-700 rounded-lg ${
                      errors.email ? 'border-2 border-red-500' : ''
                    }`}
                  />
                  <FaPaperclip className="absolute left-3 text-slate-400" />
                </div>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Controller name="proposalTitle" control={control} defaultValue=""
              render={({ field }) => (
                <input {...field} placeholder="Proposal Title"
                  className={`w-full p-3 bg-slate-700 rounded-lg ${
                    errors.proposalTitle ? 'border-2 border-red-500' : ''
                  }`}
                />
              )}
            />
            <Controller name="difficulty" control={control} defaultValue="beginner"
              render={({ field }) => (
                <select {...field} className="w-full p-3 border-r-[12px] border-b-2 flex border-transparent bg-slate-700 rounded-lg">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              )}
            />
          </div>

          <Controller name="mentors" control={control} defaultValue=""
            render={({ field }) => (
              <input {...field} placeholder="Project Mentors"
                className={`w-full p-3 bg-slate-700 rounded-lg ${
                  errors.mentors ? 'border-2 border-red-500' : ''
                }`}
              />
            )}
          />

          <Controller name="description" control={control} defaultValue=""
            render={({ field }) => (
              <textarea {...field} placeholder="Proposal Description" rows={4}
                className="w-full p-3 bg-slate-700 rounded-lg resize-none"
              />
            )}
          />

          <div className="space-y-3">
            {references.map((ref, index) => (
              <div key={index} className="grid grid-cols-2 gap-3">
                <input placeholder="Reference Title" value={ref.title}
                  onChange={(e) => {
                    const newRefs = [...references];
                    newRefs[index].title = e.target.value;
                    setReferences(newRefs);
                  }}
                  className="p-3 bg-slate-700 rounded-lg"
                />
                <input placeholder="Reference Link" value={ref.link}
                  onChange={(e) => {
                    const newRefs = [...references];
                    newRefs[index].link = e.target.value;
                    setReferences(newRefs);
                  }}
                  className="p-3 bg-slate-700 rounded-lg"
                />
              </div>
            ))}
            <button type="button" onClick={addReferenceField} 
                className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              + Add Reference
            </button>
          </div>

          <div>
            <input
              type="file" multiple onChange={handleImageUpload}
              className="hidden" id="image-upload" accept="image/*"
            />
            <label htmlFor="image-upload" className="flex items-center justify-center w-full 
                p-4 border-2 border-dashed border-slate-600 rounded-lg cursor-pointer 
                hover:border-blue-500 transition-colors"
            >
              <FaUpload className="mr-3 text-slate-400" />
              <span className="text-slate-400">Upload Project Images</span>
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 
            text-white p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            Submit Proposal
          </button>
        </form>

        <ProposalPreview formData={formData} references={references} images={images}/>

      </div>
      <svg className="absolute bottom-0 left-0 right-0 z-[-1] opacity-100" viewBox="0 0 1440 320"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}>
        <use href="src/assets/wordcloud.svg" />
      </svg>
    </div>
  );
};

export default ProposalForm;