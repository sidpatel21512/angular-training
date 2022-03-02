import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PreloadComponentDataResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    // your logic goes here
    return {component: 'TestComponent', url: '/test'};
  }
}
