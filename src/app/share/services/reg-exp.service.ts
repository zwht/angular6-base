import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegExpService {
  list = [
    {
      lable: '前后空格',
      value: /(^\s*)|(\s*$)/g
    },
    {
      lable: '电话码',
      value: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/
    },
    {
      lable: '邮件',
      value: /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/
    },
  ];
  listObj = {};
  constructor() {
    this.list.forEach(item => {
      this.listObj[item.lable] = item.value;
    });
  }
  test(strValue, item) {
    return this.listObj[item].test(strValue);
  }
  replace(name, str, key) {
    if (str !== '' && str !== null && str !== undefined) {
      str = str.replace(this.listObj[name], key);
    }
    return str;
  }

}
