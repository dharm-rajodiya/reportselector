npm install -g yarn
ng new app
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
Add BrowserAnimationsModule to imports in app.module from '@angular/platform-browser/animations"
ng g m shared\material --flat
style.css -> @import "~@angular/material/prebuilt-themes/indigo-pink.css"; (theme inclusion)
npm install --save hammerjs (Gesture support)
import hammerjs in main.ts
index.html ->  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>


npm install -g @angular/cli
ng new [projectname]
    #   For Windows User Only
    #   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
ng add @angular/material
    #    The package @angular/material@14.0.4 will be installed and executed.
    #    Would you like to proceed? Yes
    #    ✔ Packages successfully installed.
    #    ? Choose a prebuilt theme name, or "custom" for a custom theme: Purple/Green       [ Preview:
    #    https://material.angular.io?theme=purple-green ]
    #    ? Set up global Angular Material typography styles? Yes
    #    ? Include the Angular animations module? Include and enable animations

#Import all modules https://gist.github.com/rajasharma1603/8bdf9c11e28615364dffbb6c85360c43
