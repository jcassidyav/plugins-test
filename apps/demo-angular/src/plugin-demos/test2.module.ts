import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Test2Component } from './test2.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: Test2Component }])],
  declarations: [Test2Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Test2Module {}
