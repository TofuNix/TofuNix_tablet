-- Function to open the tablet
function openTablet(data)
    if data and data.useThinFrame then
        SendNUIMessage({ action = 'useThinBackgroundFrame' })
    end

    -- Trigger the NUI to open the tablet interface
    SetNuiFocus(true, true)  -- Set focus to the NUI
    SendNUIMessage({ action = 'openTablet' })  -- Send message to NUI to open the tablet
end

-- Event to open the tablet from the server-side
RegisterNetEvent('tablet:open', function(data)
    openTablet(data)
end)

-- Event to handle when the tablet is closed
RegisterNetEvent('tablet:client:tabletClosed', function()
    SetNuiFocus(false, false)  -- Remove focus from the NUI
end)

-- Example of handling NUI callbacks (e.g., when the user closes the tablet)
RegisterNUICallback('closeTablet', function(data, cb)
    TriggerServerEvent('tablet:client:tabletClosed')  -- Notify the server that the tablet is closed
    SetNuiFocus(false, false)  -- Remove focus from the NUI
    SendNUIMessage({ action = 'closeTablet' })  -- Send message to NUI to close the tablet
    cb('ok')  -- Acknowledge the callback
end)

-- Command to open the tablet directly from the chat
RegisterCommand("openMyTablet", function()
    print("Command to open tablet triggered")  -- Debugging line
    openTablet()  -- Call the openTablet function with empty data
end)