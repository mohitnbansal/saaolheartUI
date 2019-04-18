import { AadharTranformPipe } from './aadhar/aadhar-tranform.pipe';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [AadharTranformPipe],
  imports: [
  ],
 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AadharTranformPipe  ],
      providers:[]
})
export class PipesModule { }
