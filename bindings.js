
// If the active tab is displaying google search, allow a key press to open a search result.

browser.commands.onCommand.addListener((command) => {
    let re = /goto-link-./;
    if (re.test(command)) {
        doEverything(command);
    }
});

async function doEverything(command) {
    let currentTabs = await browser.tabs.query({currentWindow: true, active: true});
    browser.tabs.sendMessage(currentTabs[0].id, command);
}
