import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderComponent } from './reader/reader.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { StoryComponent } from './story/story.component';
import {AppModule} from '../app.module';
import {DatetimePipe} from '../pipes/datetime.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ReaderComponent, StoryComponent, DatetimePipe],
    imports: [
        CommonModule,
        FontAwesomeModule,
        AppModule,
        NgxPaginationModule,
        SharedModule,
    ]
})
export class CoreModule { }
