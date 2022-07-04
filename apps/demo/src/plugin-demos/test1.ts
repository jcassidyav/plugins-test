import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTest1 } from '@demo/shared';
import {} from '@nativescript/test1';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTest1 {}
