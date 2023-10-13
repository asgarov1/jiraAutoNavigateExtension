async function getCurrentTab() {
    let queryOptions = {active: true, lastFocusedWindow: true};
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

function getUrl() {
    return fetch("../url.txt")
        .then(response => response.text());
}


////////////////////////////////
/////////PROGRAM START//////////

/**
 * This event is fired with the user accepts the input in the omnibox.
 */
chrome.omnibox.onInputEntered.addListener((text) => {
    Promise.all([getUrl(), getCurrentTab()])
        .then(result => {
            const [urlFromTextFile, tab] = result;

            // if url is numbers only
            if (/^\d+$/.test(text)) {
                // prepend url from url.txt, e.g. prepend 'https://jira.services.ama.at/browse/EWEB-'
                chrome.tabs.update(tab.id, {url: `${urlFromTextFile}${text}`});
            } else if (/^\w+-\d+$/.test(text)) {
                chrome.tabs.update(tab.id, {url: `https://jira.services.ama.at/browse/${text}`});
            }
        })
});


