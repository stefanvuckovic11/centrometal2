import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeAllComponent } from './see-all.component';
import { SeeAllRoutingModule } from './see-all.routing.module';
import { SharedModule } from '../../shared/shared.module';
import {HomeModule} from "../home/home.module";
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [SeeAllComponent, FilterBarComponent],
    exports: [
        FilterBarComponent
    ],
    imports: [CommonModule, SeeAllRoutingModule, SharedModule, HomeModule, FormsModule]
})
export class SeeAllModule {}
