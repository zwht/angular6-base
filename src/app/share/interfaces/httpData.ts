import { Observable } from 'rxjs';
export interface HttpData {
  method?: String;
  data?: Object;
  params?: Object;
  // formData?: FormData;
  roles?: Array<Number>;
  observable?: Observable<any>;
}
