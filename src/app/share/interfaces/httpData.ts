import { Observable } from 'rxjs';
export interface HttpData {
  method?: String;
  data?: Object;
  params?: Object;
  roles?: Array<Number>;
  observable?: Observable<any>;
}
