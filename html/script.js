// Listen for messages from Lua
window.addEventListener('message', function(event) {
    if (event.data.action === 'openTablet') {
        document.body.style.display = 'flex';  // Show the tablet
    } else if (event.data.action === 'closeTablet') {
        document.body.style.display = 'none';  // Hide the tablet
    }
});

// Track whether we are in the app list or in an app
let inAppList = true;

function openApp(app) {
    const appTitle = document.getElementById('app-title');
    const appBody = document.getElementById('app-body');
    const appContent = document.getElementById('app-content');
    const appList = document.getElementById('app-list');

    appList.style.display = 'none';
    appContent.style.display = 'block';
    inAppList = false; // We are now in an app

    if (app === 'terminal') {
        appTitle.innerText = 'Terminal';
        appBody.innerHTML = '<p>Welcome to the terminal!</p>';
    } else if (app === 'file-manager') {
        appTitle.innerText = 'File Manager';
        appBody.innerHTML = '<p>Here you can manage your files.</p>';
    } else if (app === 'settings') {
        appTitle.innerText = 'Settings';
        appBody.innerHTML = '<p>Adjust your settings here.</p>';
    }
}

function closeApp() {
    const appContent = document.getElementById('app-content');
    const appList = document.getElementById('app-list');

    appContent.style.display = 'none';
    appList.style.display = 'block';
    inAppList = true; // We are back in the app list
}

// Handle Escape key press
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !inAppList) {
        closeApp(); // Close the app if we are in an app
    }
});

// Close the tablet when clicking the close button
document.getElementById('close-button').addEventListener('click', function() {
    if (inAppList) {
        // Only close the tablet if we are on the app list
        fetch(`https://${GetParentResourceName()}/closeTablet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
    } else {
        closeApp(); // Close the app if we are in an app
    }
});