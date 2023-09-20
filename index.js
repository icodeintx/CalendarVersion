const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const currentVersion = core.getInput('current-version');
  console.log(`Current Version: ${currentVersion}!`);
  
//Add Logic here.

  const newVersion = '2023.1.1.1';
  core.setOutput("newVersion", newVersion);
  
  // Get the JSON webhook payload for the event that triggered the workflow
  //const payload = JSON.stringify(github.context.payload, undefined, 2)
  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
