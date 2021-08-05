fx_version 'adamant'
games { 'gta5' }

author 'Weponz'
description 'Image Slideshow Loading Screen'
version '1.0.0'

loadscreen 'html/index.html'

files {
    'html/index.html',
    'html/css/style.css',
	'html/js/main.js',
	'html/img/1.jpg',
	'html/img/2.jpg',
	'html/img/3.jpg',
	'html/audio/background.mp3'
}

loadscreen_manual_shutdown 'yes'

client_script 'client/main.lua'