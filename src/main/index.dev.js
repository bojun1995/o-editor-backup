import { BrowserWindow } from 'electron'
require('electron-debug')({ showDevTools: true })

require('electron').app.on('ready', () => {
	let installExtension = require('electron-devtools-installer')
	BrowserWindow.addDevToolsExtension('node_modules/vue-devtools/vender')
	installExtension
		.default(installExtension.VUEJS_DEVTOOLS)
		.then(() => {})
		.catch((err) => {
			console.log('Unable to install `vue-devtools`: \n', err)
		})
})

require('./index')