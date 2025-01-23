// backend/server.js
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: 'GET,POST,PUT,PATCH,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

app.use(express.json());

// Ensure the uploads directory exists
const fs = require('fs');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Set up Multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir); // Ensure the directory exists
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage: storage });

// List of recipient emails
const recipientEmails = ['skshah_b23@ce.vjti.ac.in']; // Add more emails if needed

// Handle file uploads and send email
app.post('/api/submit-proposal', upload.single('file'), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const file = req.file;

    if (!file || file.mimetype !== 'application/pdf') {
      return res.status(400).json({ message: 'Only PDF files are allowed.' });
    }

    const filePath = file.path; // Get the file path

    // Send confirmation email to the user
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Proposal Submission Confirmation',
      html: `<p>Thank you for submitting your proposal, <strong>${name}</strong>. We have received it and will review it shortly.</p>`,
    };

    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.error('User email sending error:', error);
        return res.status(500).json({ message: 'Error sending confirmation email to user.' });
      }
      console.log('User email sent: ' + info.response);
    });

    // Send proposal email to recipients
    const proposalMailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmails.join(', '), // Join recipient emails with commas
      subject: `Proposal from ${name}`,
      html: `<p>A new proposal has been submitted by <strong>${name}</strong> (<a href="mailto:${email}">${email}</a>, Phone: <strong>${phone}</strong>).</p>`,
      attachments: [
        {
          path: filePath,
          filename: file.originalname, // Ensure the attachment has the original file name
        },
      ],
    };

    transporter.sendMail(proposalMailOptions, (error, info) => {
      if (error) {
        console.error('Proposal email sending error:', error);
        return res.status(500).json({ message: 'Error sending proposal email.' });
      }
      console.log('Proposal email sent: ' + info.response);

      // Optionally, delete the file after sending the email
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        } else {
          console.log('File deleted successfully');
        }
      });

      res.status(200).json({ message: 'Proposal submitted successfully!' });
    });
  } catch (error) {
    console.error('Error processing proposal:', error);
    res.status(500).json({ message: 'Error submitting proposal.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));