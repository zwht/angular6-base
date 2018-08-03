import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor() { }

  E = null
  editor = null
  biaoti = null
  neirong = null

  ngOnInit() {
    this.E = window["wangEditor"]
    this.editor = new this.E( document.getElementById('editor'))
    this.editor.create()
  }
  get(){
    this.neirong = this.editor.txt.html()
  }

}
