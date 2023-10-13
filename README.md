# AutoJiraTranslate ChromeExtension 

## Purpose:
To automatically bavigate to a Jira Ticket


## To install
 - Update the [url.txt](./url.txt) with you default url path for a jira ticket number (e.g. `https://jira.services.domain.at/browse/JIRA-`)
 - Open Chrome
 - type `chrome://extensions/`
 - click **Developer mode** toggle.
 - press the appeared **Load unpacked** button.
 - then just select the folder of this project and that is it.

## Usage
- Type `j` to activate the jira omnibus
- now if you type only numbers it will prepend the text from [url.txt](./url.txt) in this example resulting in `https://jira.services.domain.at/browse/JIRA-1234
- else if you type `word-number` (e.g. `XPROJ-1234`) it will only prepend up to `browse` resulting in 
`https://jira.services.domain.at/browse/XPROJ-1234`
