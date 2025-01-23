// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
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

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Proposal Schema
const proposalSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  file: String, // Store the file path in MongoDB
  fileName: String, // Store the original file name in MongoDB
});

const Proposal = mongoose.model('Proposal', proposalSchema);

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

// Handle file uploads and save to MongoDB
app.post('/api/submit-proposal', upload.single('file'), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const file = req.file;

    if (!file || file.mimetype !== 'application/pdf') {
      return res.status(400).json({ message: 'Only PDF files are allowed.' });
    }

    const filePath = file.path; // Get the file path
    const proposalData = {
      name,
      email,
      phone,
      file: filePath, // Store the file path in MongoDB
      fileName: file.originalname, // Store the original file name in MongoDB
    };

    const proposal = new Proposal(proposalData);
    await proposal.save();

    // Send confirmation email with user-specific details
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Proposal Submission Confirmation',
      text: `Thank you for submitting your proposal, ${name}. We have received it and will review it shortly.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({ message: 'Error sending confirmation email.' });
      }
      console.log('Email sent: ' + info.response);
    });

    res.status(200).json({ message: 'Proposal submitted successfully!' });
  } catch (error) {
    console.error('Error saving proposal:', error);
    res.status(500).json({ message: 'Error submitting proposal.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));