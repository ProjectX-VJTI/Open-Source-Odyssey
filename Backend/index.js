const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const multer = require("multer");
const path = require("path");

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password123@",
    database: "alumni_db"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL");
});

const createTableQuery = `
   CREATE TABLE IF NOT EXISTS alumni (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    graduationYear INT NOT NULL,
    roleInClub VARCHAR(255) NOT NULL,
    currentOccupation VARCHAR(255) NOT NULL,
    contactInfo VARCHAR(255) NOT NULL,
    status ENUM('pending', 'approved') DEFAULT 'pending',
    imageUrl VARCHAR(500) DEFAULT NULL
);
`;
db.query(createTableQuery, err => {
    if (err) {
        console.error("Table creation failed:", err);
    } else {
        console.log("Alumni table is ready.");
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); 
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); 
    },
  });

  const upload = multer({ storage });
app.post("/submit-alumni",upload.single("image"), (req, res) => {
    const { name, graduationYear, roleInClub, currentOccupation, contactInfo} = req.body;
    
    console.log(req.body);
    
    const imageUrl = `/uploads/${req.file.filename}`;
    console.log(name, graduationYear, roleInClub, currentOccupation, imageUrl)
    const query = "INSERT INTO alumni (name, graduationYear, roleInClub, currentOccupation, contactInfo,imageUrl) VALUES (?, ?, ?, ?, ?,?)";
    db.query(query, [name, graduationYear, roleInClub, currentOccupation, contactInfo,imageUrl], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Failed to submit information.");
        } else {
            res.status(200).send("Information submitted successfully. Awaiting admin approval.");
        }
    });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.put("/approve-alumni/:id", (req, res) => {
    const { id } = req.params;

    const query = "UPDATE alumni SET status = 'approved' WHERE id = ?";
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Failed to approve information.");
        } else if (result.affectedRows === 0) {
            res.status(404).send("Alumni information not found.");
        } else {
            res.status(200).send("Alumni information approved successfully.");
        }
    });
});


app.get("/approved-alumni", (req, res) => {
    const status = req.query.status || "approved"; 
    const query = "SELECT * FROM alumni WHERE status = ?";
    db.query(query, [status], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send("Failed to fetch alumni information.");
        } else {
            res.status(200).json(results);
        }
    });
});

app.get("/alumni", (req, res) => {
    const { status } = req.query;
    const query = "SELECT * FROM alumni WHERE status = ?";
    db.query(query, [status], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch alumni." });
      }
      res.json(results);
    });
  });
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
