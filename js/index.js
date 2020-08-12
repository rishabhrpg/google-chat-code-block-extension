console.info("G-Chat ReStyler")

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('css/index.css');

document.body.appendChild(link);