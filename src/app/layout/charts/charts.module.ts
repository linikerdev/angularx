import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
    CommonModule,
        ChartsRoutingModule,
        Ng2Charts,
        FormsModule,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
