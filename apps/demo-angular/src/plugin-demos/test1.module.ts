import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Test1Component } from './test1.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: Test1Component }])],
  declarations: [Test1Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Test1Module {}
