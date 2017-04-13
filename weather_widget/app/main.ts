import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();  //creat an instance
platform.bootstrapModule(AppModule);        //Initializes the app module
