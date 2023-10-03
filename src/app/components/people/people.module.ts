import {NgModule} from '@angular/core';
import {PeopleComponent} from './people.component';

@NgModule({
  declarations: [PeopleComponent],
  exports: [PeopleComponent]
})
export class PeopleModule {}
