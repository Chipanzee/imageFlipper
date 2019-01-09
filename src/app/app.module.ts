import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ImageFlipperComponent } from "./image-flipper/image-flipper.component";

@NgModule({
  declarations: [AppComponent, ImageFlipperComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
