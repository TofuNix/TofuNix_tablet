-- Function to open the tablet client-side
function openTablet(src, data)
    TriggerClientEvent('tablet:open', src, data)
end

-- Function to check if the player has the tablet in their inventory
local function hasTabletInInventory(playerId)
    -- Placeholder logic; replace with your actual inventory check
    return true  -- Assume player has a tablet for demonstration
end

-- Event to handle item usage
RegisterNetEvent('tablet:use', function()
    local src = source

    -- Check if the player has the tablet in their inventory
    local hasTablet = hasTabletInInventory(src)

    if hasTablet then
        openTablet(src)  -- Open the tablet if the player has it
    else
        TriggerClientEvent('ox_lib:notify', src, { type = 'error', description = 'You do not have a tablet.' })
    end
end)

-- Command to open the tablet directly from the chat
RegisterCommand("openMyTablet", function(source)
    print("Command to open tablet triggered")  -- Debugging line
    openTablet({})  -- Call the openTablet function with empty data
end)