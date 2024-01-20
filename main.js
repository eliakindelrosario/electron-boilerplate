import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { app, BrowserWindow, Menu } from "electron";
import log from "electron-log";

// these variables are not present in ES Module standard as they are
// from commonjs standard.
// so we have to create them to be able to use them
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set env
process.env.NODE_ENV = "development";
// process.env.NODE_ENV = "production";

const isDevelopment = process.env.NODE_ENV !== "production" ? true : false;
const isMac = process.platform === "darwin" ? true : false;

let mainWindow;

function createMainWindow() {
	mainWindow = new BrowserWindow({
		title: "APP NAME",
		width: isDevelopment ? 800 : 500,
		height: 600,
		icon: `${__dirname}/assets/icons/icon.png`,
		resizable: isDevelopment,
		backgroundColor: "white",
		webPreferences: {
			nodeIntegration: true,
		},
	});

	if (isDevelopment) {
		mainWindow.webContents.openDevTools();
	}

	mainWindow.loadFile("./app/index.html");
}

app.on("ready", () => {
	createMainWindow();

	const mainMenu = Menu.buildFromTemplate(menu);
	Menu.setApplicationMenu(mainMenu);
});

const menu = [
	...(isMac ? [{ role: "appMenu" }] : []),
	{
		role: "fileMenu",
	},
	...(isDevelopment
		? [
				{
					label: "Developer",
					submenu: [
						{ role: "reload" },
						{ role: "forcereload" },
						{ type: "separator" },
						{ role: "toggledevtools" },
					],
				},
		  ]
		: []),
];

app.on("window-all-closed", () => {
	if (!isMac) {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createMainWindow();
	}
});

app.allowRendererProcessReuse = true;
