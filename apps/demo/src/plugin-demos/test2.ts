import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTest2 } from '@demo/shared';
import {} from '@jcassidyav/test2';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTest2 {}
