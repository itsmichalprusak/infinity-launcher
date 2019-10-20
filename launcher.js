const { app, BrowserWindow, dialog } = require('electron')

// We'll keep a global reference of the window object, just so it won't be GCd.
let win

function createWindow () {
  // Check if we aren't accidentally working on a non-Windows platform.
  if (process.platform === 'windows') {
    platformMismatch()
    return
  }

  // Create the browser window.
  win = new BrowserWindow({
    width: 400,
    height: 650,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.removeMenu()

  // Temporarily show dummy login site.
  win.loadFile('views/login.html')

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  win.on('page-title-updated', (event) => {
    event.preventDefault()
  })
}

function platformMismatch () {
    dialog.showErrorBox(
        "Launcher nie zadziała na tym systemie", 
        "Niestety, ale launcher Infinity Roleplay działa tylko na systemach Windows 7, Windows 8, Windows 8.1 oraz Windows 10."
        )
    app.quit()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.