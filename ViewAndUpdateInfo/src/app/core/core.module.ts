import { HomeComponent } from '../core/home/home.component';
import { NgModule } from '@angular/core';
// import { SixSigmaService } from 'src/app/shared/services/sixsigma.service';
// import { UserService } from 'src/app/shared/services/user.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
// import { UserListModule } from '../user-list/user-list.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ HomeComponent, FooterComponent, HeaderComponent ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule
    ],
    exports: [ HomeComponent, FooterComponent, HeaderComponent ],
 providers: []
})

export class CoreModule { }
