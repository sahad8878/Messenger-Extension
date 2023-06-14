// public/content.js
const root = document.createElement('div');
root.id = 'messenger-matic-extension-root';
document.body.appendChild(root);

const script = document.createElement('script');
script.src = chrome.runtime.getURL('static/js/main.js');
document.body.appendChild(script);
