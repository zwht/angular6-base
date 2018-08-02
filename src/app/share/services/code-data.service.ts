import { Injectable } from '@angular/core';
import { CodeService } from '../restServices/CodeService';
import { SessionService } from './SessionService';

@Injectable({
  providedIn: 'root'
})
export class CodeDataService {
  codeList=[]
  codeObjList={}
  codeObj={}

  constructor(private codeService:CodeService,
  private sessionService:SessionService) { 
    this.getDataLocalStorage()
  }
  getDataLocalStorage(){
    if(this.sessionService.getItem('codeObjList')){
      this.codeObjList=JSON.parse(this.sessionService.getItem('codeObjList'))
    }
    if(this.sessionService.getItem('codeObj')){
      this.codeObj=JSON.parse(this.sessionService.getItem('codeObj'))
    }
    if(this.sessionService.getItem('codeList')){
      this.codeList=JSON.parse(this.sessionService.getItem('codeList'))
    }
  }
  getData(){
    this.codeService['list']({
      params: {
        params2: 1,
        params3: 1000
      },
      data: {}
    })
      .then(response => {
        if (response.code == 200) {
          this.codeObjList={}
          this.codeObj={}
          this.codeList = response.data.pageData;
          
          this.codeList.forEach(item=>{
            this.codeObj[item.code]=item.name
            if(this.codeObjList[item.groups]){
              this.codeObjList[item.groups].push(Object.assign({
                value:item.code,
                label:item.name
              },item));
            }else{
              this.codeObjList[item.groups]=[Object.assign({
                value:item.code,
                label:item.name
              },item)]
            }
          })
          this.sessionService.setItem("codeObjList",JSON.stringify(this.codeObjList))
          this.sessionService.setItem("codeList",JSON.stringify(this.codeList))
          this.sessionService.setItem("codeObj",JSON.stringify(this.codeObj))
        }
      })
  }
}
