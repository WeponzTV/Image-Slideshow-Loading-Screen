
local shutdown = false

AddEventHandler('playerSpawned', function ()
	if not shutdown then
		ShutdownLoadingScreenNui()
		shutdown = true
	end
end)