import { Injectable } from '@angular/core';
import { CodeService } from '../restServices/CodeService';

@Injectable({
  providedIn: 'root'
})
export class CodeDataService {
  codeList=[]
  codeObjList={}
  codeObj={}

  constructor(private codeService:CodeService) { 
    this.getDataLocalStorage()
  }
  getDataLocalStorage(){
    if(localStorage.getItem('codeObjList')){
      this.codeObjList=JSON.parse(localStorage.getItem('codeObjList'))
    }
    if(localStorage.getItem('codeObj')){
      this.codeObj=JSON.parse(localStorage.getItem('codeObj'))
    }
    if(localStorage.getItem('codeList')){
      this.codeList=JSON.parse(localStorage.getItem('codeList'))
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
              this.codeObjList[item.groups].push(item);
            }else{
              this.codeObjList[item.groups]=[item]
            }
          })
          localStorage.setItem("codeObjList",JSON.stringify(this.codeObjList))
          localStorage.setItem("codeList",JSON.stringify(this.codeList))
          localStorage.setItem("codeObj",JSON.stringify(this.codeObj))
          debugger
        }
      })
  }
}
