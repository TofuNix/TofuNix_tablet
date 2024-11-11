// Function to open the hacking interface
function openApp() {
    console.log('Hacking Interface opened');
    document.getElementById('hacking-interface').style.display = 'block'; // Show the hacking interface
}

// Function to open the web browser
function openBrowser() {
    console.log('Web Browser opened');
    document.getElementById('browser-interface').style.display = 'block'; // Show the web browser
}

// Function to open the file explorer
function openFiles() {
    console.log('File Explorer opened');
    document.getElementById('file-explorer').style.display = 'block'; // Show the file explorer
}

// Function to close the hacking interface
function closeApp() {
    console.log('Closing Hacking Interface');
    document.getElementById('hacking-interface').style.display = 'none'; // Hide the hacking interface
}

// Function to close the web browser
function closeBrowser() {
    console.log('Closing Web Browser');
    document.getElementById('browser-interface').style.display = 'none'; // Hide the web browser
}

// Function to close the file explorer
function closeFiles() {
    console.log('Closing File Explorer');
    document.getElementById('file-explorer').style.display = 'none'; // Hide the file explorer
}

// Function to execute commands in the hacking interface
function executeHack() {
    const input = document.getElementById('hack-input').value; // Get the input value
    const output = document.getElementById('hack-output');
    output.innerHTML = ''; // Clear previous output

    if (input) {
        // Simulate command execution for other commands
        output.innerHTML += `<p>Executing: ${input}</p>`;
        if (input === 'hack') {
            output.innerHTML += `<p>Hacking in progress...</p>`;
        } else if (input === 'status') {
            output.innerHTML += `<p>Status: All systems operational.</p>`;
        } else {
            output.innerHTML += `<p>Unknown command: ${input}</p>`;
        }
        document.getElementById('hack-input').value = ''; // Clear input field
    } else {
        output.innerHTML += `<p>Please enter a command.</p>`;
    }
}

// This function will be called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Listen for messages from the Lua script
    window.addEventListener('message', function(event) {
        if (event.data.action === 'openTablet') {
            document.body.style.display = 'block'; // Show the tablet
            openApp(); // Open the hacking interface
        } else if (event.data.action === 'closeTablet') {
            closeApp(); // Close the hacking interface
            document.body.style.display = 'none'; // Hide the tablet
        }
    });

    // Close the tablet when the close button is clicked
    const closeButton = document.getElementById('close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            closeTablet();
        });
    }

    // Function to close the tablet entirely
    function closeTablet() {
        document.body.style.display = 'none'; // Hide the tablet
        // Optionally, send a message to the server to notify that the tablet is closed
        fetch(`https://${GetParentResourceName()}/closeTablet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
    }

    // Handle Escape key press to close the app
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeTablet(); // Close the tablet
        }
    });
});