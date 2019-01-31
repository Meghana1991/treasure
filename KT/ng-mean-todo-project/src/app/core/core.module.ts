import { NgModule } from "@angular/core";
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { LoggerService } from '../services/logger.service';
import { ServersService } from '../routing-example/servers/servers.service';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth-guard.service';

@NgModule({
    declarations: [WelcomePageComponent,
        HeaderComponent],
    imports: [SharedModule,
        AppRoutingModule],
    exports: [AppRoutingModule,
        HeaderComponent],
    providers: [LoggerService,/*ModifyService*/, ServersService, AuthService, AuthGuard]
})

export class CoreModule { }