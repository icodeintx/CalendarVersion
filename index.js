const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the current version input from caller
  const currentVersion = core.getInput('current-version');
  console.log(`Current Version: ${currentVersion}!`);

  let newVersion = '';

  // Get variables for current Year, Month, Day
  var currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let day = currentDate.getDate();

   const versionArray = currentVersion.split('.');
   if (versionArray.length == 4)
   {
      if (versionArray[0] == year && versionArray[1] == month & versionArray[2] == day)
      {
         //increment last digit
         newVersion = `${year}.${month}.${day}.${++versionArray[3]}`;
      }
      else
      {
         // Date does not match.  Set Date to current date and revision to 1
         newVersion = `${year}.${month}.${day}.1`;
      }
   }
   else
   {
      // CurrentVersion input parameter was invalid. Set Date to current date and revision to 1
      newVersion = `${year}.${month}.${day}.1`;
   }

   console.log(`New Version: ${newVersion}`);
   core.setOutput("newVersion", newVersion);
  
  // Get the JSON webhook payload for the event that triggered the workflow
  //const payload = JSON.stringify(github.context.payload, undefined, 2)
  //console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
