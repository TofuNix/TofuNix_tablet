-- Function to open the tablet client-side
function openTablet(data)
    if data and data.useThinFrame then
        SendNUIMessage({ action = 'useThinBackgroundFrame' })
    end

    -- Trigger the NUI to open the tablet interface
    TriggerClientEvent('tablet:open', source, data)
end

-- Event to handle item usage
RegisterNetEvent('tablet:use', function()
    local src = source
    local player = GetPlayerIdentifiers(src)[1]  -- Get player identifier (you may need to adjust this based on your setup)

    -- Check if the player has the tablet in their inventory
    -- This is a placeholder; replace with your actual inventory check logic
    local hasTablet = true  -- Replace with actual check

    if hasTablet then
        openTablet()  -- Open the tablet if the player has it
    else
        TriggerClientEvent('ox_lib:notify', src, { type = 'error', description = 'You do not have a tablet.' })
    end
end)

-- Command to use the tablet
RegisterCommand("openMyTablet", function(source, args, rawCommand)
    TriggerEvent('tablet:use')  -- Trigger the tablet usage event
end)