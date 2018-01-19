import { NavbarComponent } from 'app/core/modules/theme/navbar/navbar.component';
import { ThemeModule } from './modules/theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule
  ],
  declarations: [],
  exports: [NavbarComponent]
})
export class CoreModule { }
