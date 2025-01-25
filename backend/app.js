const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Endpoint for proposal submission
app.post('/submit-proposal', upload.array('pdfs'), async (req, res) => {
  const { 
    name, 
    email, 
    proposalTitle, 
    description, 
    difficulty, 
    mentors,
    references
  } = req.body;

  const mentorList = mentors.split(',').map(mentor => {
    const [mentorName, mentorEmail] = mentor.trim().split(':');
    return { name: mentorName.trim(), email: mentorEmail.trim() };
  });

  try {
    // Sender Confirmation Email
    await transporter.sendMail({
      from: 'your_email@gmail.com',
      to: email,
      subject: 'Proposal Submission Confirmation',
      html: `
        <h2>Proposal Submission Confirmation</h2>
        <p>Hi ${name},</p>
        <p>Your proposal "${proposalTitle}" has been submitted successfully.</p>
        <h3>Proposal Details:</h3>
        <ul>
          <li><strong>Title:</strong> ${proposalTitle}</li>
          <li><strong>Difficulty:</strong> ${difficulty}</li>
          <li><strong>Description:</strong> ${description}</li>
        </ul>
      `,
      attachments: req.files.map(file => ({
        filename: file.originalname,
        path: file.path
      }))
    });

    // Mentor Notification Emails
    for (const mentor of mentorList) {
      await transporter.sendMail({
        from: 'your_email@gmail.com',
        to: mentor.email,
        subject: `New Proposal: ${proposalTitle}`,
        html: `
          <h2>Proposal Notification</h2>
          <p>A new proposal has been submitted:</p>
          <h3>Proposal Details:</h3>
          <ul>
            <li><strong>Submitter:</strong> ${name}</li>
            <li><strong>Title:</strong> ${proposalTitle}</li>
            <li><strong>Difficulty:</strong> ${difficulty}</li>
            <li><strong>Description:</strong> ${description}</li>
          </ul>
        `,
        attachments: req.files.map(file => ({
          filename: file.originalname,
          path: file.path
        }))
      });
    }

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send emails', error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));