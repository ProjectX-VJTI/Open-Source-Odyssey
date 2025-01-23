import * as yup from 'yup';

export const proposalSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  proposalTitle: yup.string().min(5, 'Title must be at least 5 characters').required('Title is required'),
  description: yup.string().min(20, 'Description must be at least 20 characters').required('Description is required'),
  difficulty: yup.string().oneOf(['beginner', 'intermediate', 'advanced'], 'Invalid difficulty').required('Difficulty is required'),
  mentors: yup.string().required('Mentor names are required')
});
