import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeAllComponent } from './see-all.component';
import { SeeAllRoutingModule } from './see-all.routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [SeeAllComponent],
    imports: [CommonModule, SeeAllRoutingModule, SharedModule]
})
export class SeeAllModule {}
