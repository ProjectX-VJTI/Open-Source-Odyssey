import * as yup from 'yup';

export const proposalSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  proposalTitle: yup.string()
    .min(5, 'Title must be at least 5 characters')
    .required('Title is required'),
  description: yup.string()
    .min(20, 'Description must be at least 20 characters')
    .required('Description is required'),
  difficulty: yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'], 'Invalid difficulty')
    .required('Difficulty is required'),
  mentors: yup.string()
    .test('valid-mentors', 'Provide mentor names and emails (name1:email1, name2:email2)', function(value) {
      if (!value) return false;
      const mentorEntries = value.split(',').map(entry => entry.trim());
      return mentorEntries.every(entry => {
        const [name, email] = entry.split(':').map(part => part.trim());
        return name && email && yup.string().email().isValidSync(email);
      });
    })
    .required('Mentors are required'),
  pdfs: yup.array().of(
    yup.mixed()
      .test('fileType', 'Only PDF files are allowed', (value) => {
        return value && value.type === 'application/pdf';
      })
      .test('fileSize', 'PDF must be less than 5MB', (value) => {
        return value && value.size <= 5 * 1024 * 1024; // 5MB
      })
  ).nullable()
});