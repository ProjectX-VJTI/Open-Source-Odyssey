const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(bodyParser.json());

// Endpoint for handling the form submission
app.post("/send-email", upload.single("document"), async (req, res) => {
  const { name, email, phone, proposal } = req.body;
  const document = req.file;

  if (!name || !email || !phone || !proposal || !document) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "chavandipesh399@gmail.com", // Replace with your email
        pass: "ybod oife gsgz lxtr",  // Replace with your app password (not email password)
    },
  });

  const mailOptions = {
    from: "chavandipesh399@gmail.com",
    to: email,
    subject: "Proposal Submission Confirmation",
    html: `<h1>Thank you, ${name}!</h1><p>Your proposal has been received. We will get back to you soon.</p>`,
    attachments: [
      {
        filename: document.originalname,
        path: document.path,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Proposal submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
