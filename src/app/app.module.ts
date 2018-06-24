import { routes } from '@router/app.router';
import { NgModule } from '@angular/core';
import { GrowlModule } from 'primeng/growl';
import { PagesModule } from '@pages/pages.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoaderService } from '@services/loader/loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '@components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ComponentsModule,
        PagesModule,
        GrowlModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: [
        LoaderService,
        MessageService,
        PokemonService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
