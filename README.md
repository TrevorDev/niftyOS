# niftyOS
browser based VR ready OS interface

# Goals
- Make apps webpages
- Create the best dev environment for typescript, node and web apps
- Remove the need for long "compiling" when developing apps
- Make apps like atom editor startup as quickly as making a new tab
- Merge browser tabs with taskbar icons
- Have a faster startup than mainstream os's
- Experiment with new user interfaces

# Screenshots
![img](https://raw.githubusercontent.com/TrevorDev/niftyOS/master/screenshots/desktop.PNG)
![img](https://raw.githubusercontent.com/TrevorDev/niftyOS/master/screenshots/search.PNG)
![img](https://raw.githubusercontent.com/TrevorDev/niftyOS/master/screenshots/office.PNG)

```
Todo
back/forward buttons
webpage search
nicer icons
pin to taskbar
console
side by side apps
default apps
get good text editor working
get adblock to work in webview
multiple desktops


install archlinux in virtual box
https://www.howtoforge.com/tutorial/arch-linux-installation-with-xfce-desktop/
install nodejs, npm
install xorg gedit xterm
virtualbox sux so xorg needs a bunch of config
install Guest additions disc when using virtualbox
try:
X -configure
X
the above gave me blank screen
try running
xinit gedit
this should open gedit as its own fullscreen app

npm install electron-prebuilt -g
electron requires
gconf
libnotify
gtk2
nss
alsa-lib

touch ~/.xinitrc
edit that file to add
electron main.js
cd into folder with main.js (electron entry point)
run: xinit
interface has been launched
```
