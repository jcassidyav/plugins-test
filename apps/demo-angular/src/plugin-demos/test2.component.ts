import { Component, NgZone } from '@angular/core';
import { DemoSharedTest2 } from '@demo/shared';
import {} from '@jcassidyav/test2';

@Component({
  selector: 'demo-test2',
  templateUrl: 'test2.component.html',
})
export class Test2Component {
  demoShared: DemoSharedTest2;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTest2();
  }
}
