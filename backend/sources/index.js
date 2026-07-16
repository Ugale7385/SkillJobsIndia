const drdo = require("./drdo");
const bel = require("./bel");
const csir = require("./csir");
const hal = require("./hal");
const isro = require("./isro");
const rrb = require("./rrb");
const apprenticeship = require("./apprenticeship");

async function runAllSources() {

  console.log("Checking all job sources...");

  await drdo();
  await bel();
  await csir();
  await hal();
  await isro();
  await rrb();
  await apprenticeship();

  console.log("All Sources Completed");

}

module.exports = runAllSources;
