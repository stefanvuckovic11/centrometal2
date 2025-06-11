import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeeAllComponent } from './see-all.component';
import { SeeAllRoutingModule} from "./see-all.routing.module";
import { SharedModule } from '../../shared/shared.module';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@NgModule({
    declarations: [
        SeeAllComponent,
        FilterBarComponent
    ],
    imports: [
        CommonModule,
        SeeAllRoutingModule,
        SharedModule,
        FormsModule
    ],
    exports: [
        FilterBarComponent
    ]
})
export class SeeAllModule {}