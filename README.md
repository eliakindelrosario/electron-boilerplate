# Electron Biolerplate Template

This app is a template to help get an electron project up an running in little time.

# Setting Up Electron Environemnt from scratch

Alternatively, here are the instructions to set one up from scratch

```
# Create package.json
# follow the setup instruction and make sure the entry point is main.js
npm init

# Install app dependencies
npm i -D electron electron-packager nodemon
npm i electron-log

# In package.json, add the following scripts
"start": "electron .",
"dev": "nodemon --exec electron .",
"package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds",
"package-win": "electron-packager . --overwrite --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=false --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"APP NAME\"",
"package-linux": "electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=false --out=release-builds"
```
