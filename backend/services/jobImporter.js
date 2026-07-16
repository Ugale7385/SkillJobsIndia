const db = require("../firebase");

async function importJobs() {

  console.log("Checking for new jobs...");

  const job = {
    title: "Sample Government Job",
    company: "SkillJobs India",
    qualification: "ITI / Diploma",
    category: "Government",
    salary: "₹25,000 - ₹40,000",
    location: "India",
    lastDate: "31-12-2026",
    applyLink: "https://example.com",
    image: ""
  };

  const snapshot = await db.collection("jobs")
    .where("title", "==", job.title)
    .get();

  if (!snapshot.empty) {
    console.log("Job already exists");
    return;
  }

  await db.collection("jobs").add(job);

  console.log("New Job Added");

}

module.exports = importJobs;
