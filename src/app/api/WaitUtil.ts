import { Injectable } from '@angular/core';
import { isObservable, Observable } from 'rxjs';

@Injectable()
export class WaitUtil {
  declare Zone: any;

  constructor() {
    console.log('Carga Api Provider');
  }

  async waitFor<T>(prom: Promise<T> | Observable<T>): Promise<T> {
    if (isObservable(prom)) {
      //prom = firstValueFrom(prom);
      prom = prom.toPromise();
    }
    const macroTask = this.Zone.current.scheduleMacroTask(
      `WAITFOR-${Math.random()}`,
      () => {},
      {},
      () => {}
    );
    return prom.then((p: T) => {
      macroTask.invoke();
      return p;
    });
  }
}
