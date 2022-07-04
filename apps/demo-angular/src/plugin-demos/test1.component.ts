import { Component, NgZone } from '@angular/core';
import { DemoSharedTest1 } from '@demo/shared';
import {} from '@nativescript/test1';

@Component({
  selector: 'demo-test1',
  templateUrl: 'test1.component.html',
})
export class Test1Component {
  demoShared: DemoSharedTest1;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTest1();
  }
}
