const db = require("./firebase");

async function addJob() {
  await db.collection("jobs").add({
    title: "Test Job",
    company: "SkillJobs India",
    qualification: "ITI",
    category: "Government",
    salary: "25000",
    location: "India",
    lastDate: "31/12/2026",
    applyLink: "https://example.com",
    image: ""
  });

  console.log("Job Added Successfully");
}

addJob().catch(console.error);
