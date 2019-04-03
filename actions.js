
const results = document.getElementsByClassName("r");
let links = new Array();
for (var i = 0; i < results.length; i++) {
    let anchor = results[i].firstElementChild;
    links.push( anchor.getAttribute("href") );
}

browser.runtime.onMessage.addListener(openWindow);
    
function openWindow(message) {
    console.log('actions.js worked');

    let keyString = message.split('-').pop();
    let keyNum = parseInt(keyString);

    if (links.length >= keyNum) {
        window.open(links[keyNum - 1], '_self');
        return Promise.resolve({response: "window is opened"});
    }
    return Promise.reject("There is not an open tab that corresponds to that key");
}