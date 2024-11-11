fx_version 'cerulean'
game 'gta5'

author 'Your Name'
description 'TofuNix Tablet'
version '1.0.0'

-- Specify the UI files
ui_page 'html/index.html'  -- Change this to your main HTML file

files {
    'html/index.html',  -- Main HTML file
    'html/style.css',   -- CSS file
    'html/script.js',   -- JavaScript file
    'html/images/bg.jpeg' -- Add your background image here
}

client_script 'client.lua'  -- Your client-side script
server_script 'server.lua'  -- Your server-side script