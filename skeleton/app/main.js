"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic(); //creat an instance
platform.bootstrapModule(app_module_1.AppModule); //Initializes the app module
//# sourceMappingURL=main.js.map