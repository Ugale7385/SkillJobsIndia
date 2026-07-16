const express = require("express");
const cors = require("cors");
const db = require("./firebase");
const runAllSources = require("./sources");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SkillJobs India Backend Running");
});

app.get("/jobs", async (req, res) => {
  try {
    const snapshot = await db.collection("jobs").get();

    const jobs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(jobs);

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

app.get("/update-jobs", async (req, res) => {
  try {
    await runAllSources();

    res.json({
      success: true,
      message: "All sources checked successfully"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
