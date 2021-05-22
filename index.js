const electron = require('electron');
const url = require('url')
const path = require('path')
const { app, BrowserWindow, Menu, dialog  } = electron
let mainWindow;
app.on('ready', () => {
    const options = {
        type: 'question',
        buttons: ['Cancel', 'Evet', 'Hayır'],
        defaultId: 2,
        title: 'Soru',
        message: 'Bunu istion mu?',
        detail: 'Sana kalmış ona göre yani gülüm',
        checkboxLabel: 'Cevabımı hatırlat',
        checkboxChecked: true,
      };
    
      dialog.showMessageBox(null, options, (response, checkboxChecked) => {
        console.log(response);
        console.log(checkboxChecked);
      });

mainWindow = new BrowserWindow({});
mainWindow.loadURL(
    url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    })
);

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
Menu.setApplicationMenu(mainMenu)
});


const mainMenuTemplate = [
    {
    label : "Menü",
    submenu: [
        {
        label : "bruh" 
    },
    {
        label : "çıkış",
        accelerator : process.platform == "darwin" ? "Command+Q" : "Ctrl+W",
        role: "quit"
    }
]
}
]

if(process.platform == "darwin"){
    mainMenuTemplate.unshift({
        label: app.getName(),
        role: "TODO"
    })
}