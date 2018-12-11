/*
 Navicat Premium Data Transfer

 Source Server         : 120.79.171.251
 Source Server Type    : PostgreSQL
 Source Server Version : 100400
 Source Host           : 120.79.171.251
 Source Database       : blog
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 100400
 File Encoding         : utf-8

 Date: 12/11/2018 11:12:43 AM
*/

-- ----------------------------
--  Table structure for code
-- ----------------------------
DROP TABLE IF EXISTS "code";
CREATE TABLE "code" (
	"id" varchar(120) COLLATE "default",
	"code" varchar(20) COLLATE "default",
	"groups" varchar(20) COLLATE "default",
	"name" varchar(20) COLLATE "default",
	"description" varchar(120) COLLATE "default"
)
WITH (OIDS=FALSE);

-- ----------------------------
--  Records of code
-- ----------------------------
BEGIN;
INSERT INTO "code" VALUES ('2f10a75f-41bf-4f7c-aca1-80d51b6940f4', '1004', '10', '客户', '客户');
INSERT INTO "code" VALUES ('36b06397-d83f-4f8f-be06-b9cdaf812161', '1001', '10', '超级管理员', '牛逼a');
INSERT INTO "code" VALUES ('b0935ff6-7ef3-41ac-938c-b6e535a98408', '1002', '10', '管理员', '235');
INSERT INTO "code" VALUES ('10127f36-3bcd-4767-af17-d773ea9c2ce6', '1003', '10', '员工', '235');
INSERT INTO "code" VALUES ('e7de6d77-9d33-4d76-9eaf-75b077acfd98', '1105', '11', '已上线', '发布上线');
INSERT INTO "code" VALUES ('06012fed-e06f-4247-b959-d6d3d80343ee', '1106', '11', '已下架', '下架');
INSERT INTO "code" VALUES ('9ac2a67b-470a-426e-89aa-0f6c70db58f5', '1101', '11', '未提交', '文章保存但未提交审核');
INSERT INTO "code" VALUES ('2bf266be-f268-43ef-ad32-5a002896e39f', '1102', '11', '待审核', '文章提交，待审核');
INSERT INTO "code" VALUES ('507bb90b-73a4-4661-8d9d-059c6d419b7a', '1103', '11', '未通过审核', '未通过审核');
INSERT INTO "code" VALUES ('0c62e347-af6e-477f-99d0-e14105297ba1', '1104', '11', '审核通过', '审核通过未上线');
INSERT INTO "code" VALUES ('b2f589fb-51dd-4708-a3e9-b5befa38b9b4', '1201', '12', '评论提交', '评论提交，审核中');
INSERT INTO "code" VALUES ('798765be-04a3-4f66-bdc1-9682d4c63f3d', '1202', '12', '未通过审核', '评论未通过审核');
INSERT INTO "code" VALUES ('4acead7d-0508-4504-80e3-80867ae0b4bf', '1203', '12', '审核通过', '评论审核通过，可以展示');
INSERT INTO "code" VALUES ('e7438478-1474-46b5-83ed-dc5885dd143c', '1301', '13', '头像图片', '');
INSERT INTO "code" VALUES ('13fa19f2-b4d6-455e-a7fc-2212ecad39ab', '1302', '13', '文章图片', '');
INSERT INTO "code" VALUES ('ac66477f-6588-4b9c-a44d-43d585b5574d', '1401', '14', '富文本编辑', '');
INSERT INTO "code" VALUES ('cbdabcbe-a5e8-4201-9b47-f05e00fcc5a2', '1402', '14', 'markdown编辑', '');
COMMIT;

-- ----------------------------
--  Table structure for news_type
-- ----------------------------
DROP TABLE IF EXISTS "news_type";
CREATE TABLE "news_type" (
	"id" varchar(120) NOT NULL COLLATE "default",
	"name" varchar(50) COLLATE "default",
	"parent_id" varchar(120) COLLATE "default",
	"index" numeric(10,0),
	"description" varchar(240) COLLATE "default",
	"user_group_id" varchar COLLATE "default"
)
WITH (OIDS=FALSE);

-- ----------------------------
--  Records of news_type
-- ----------------------------
BEGIN;
INSERT INTO "news_type" VALUES ('8888', '日记', '', '0', '日记', '');
INSERT INTO "news_type" VALUES ('ba1c5294-e554-4b52-a4e6-0a8efe6c64e9', 'golang', '', '0', 'golang', '');
INSERT INTO "news_type" VALUES ('910fb016-fa5e-4302-be8f-1f9016007d28', '大前端', '4205b4f4-de8c-44ec-b782-cd078bfabf5d', '0', '前端技术分享', '');
INSERT INTO "news_type" VALUES ('d36d9de7-c899-4e57-a642-fb3081d6ba94', '面试', '', '0', '面试', '');
INSERT INTO "news_type" VALUES ('b987d2c9-cc22-435b-930b-a002ec11825d', 'java', '', '0', 'java', '');
INSERT INTO "news_type" VALUES ('95548ce8-b434-4cc0-86ba-89de0d4c606a', 'springMVC', '', '0', 'springMVC', '');
INSERT INTO "news_type" VALUES ('7d783a26-1a66-4729-a162-aef1f3ef23a3', 'mybatis', '', '0', 'mybatis', '');
COMMIT;

-- ----------------------------
--  Table structure for news_review
-- ----------------------------
DROP TABLE IF EXISTS "news_review";
CREATE TABLE "news_review" (
	"id" varchar NOT NULL COLLATE "default",
	"new_id" varchar COLLATE "default",
	"content" varchar COLLATE "default",
	"create_time" timestamp(6) NULL,
	"ip" varchar COLLATE "default",
	"user_id" varchar COLLATE "default",
	"parent_id" varchar COLLATE "default",
	"email" varchar COLLATE "default",
	"user_name" varchar COLLATE "default",
	"url" varchar COLLATE "default",
	"img" varchar COLLATE "default",
	"state" int2
)
WITH (OIDS=FALSE);

-- ----------------------------
--  Records of news_review
-- ----------------------------
BEGIN;
INSERT INTO "news_review" VALUES ('0b9855fe-6336-4cfa-acbf-39f885ca2dcd', '5ef13a49-23cb-4676-8bc6-33348ab073da', '不错哦', '2018-11-16 17:34:50.274536', '182.148.58.39', '', '', '237898913@qq.com', '小赵', '', '', '1203');
INSERT INTO "news_review" VALUES ('220224de-a1e8-4a0b-92e4-29ae91248a7e', '712b6bfd-190f-4f8f-8005-19a309a0ba35', 'sd', '2018-11-23 13:52:07.438184', '', '', '', '2121@11.fd', 'w21', 'sd', '', '1203');
COMMIT;

-- ----------------------------
--  Table structure for users_group
-- ----------------------------
DROP TABLE IF EXISTS "users_group";
CREATE TABLE "users_group" (
	"id" varchar COLLATE "default",
	"name" varchar COLLATE "default",
	"description" varchar COLLATE "default"
)
WITH (OIDS=FALSE);

-- ----------------------------
--  Records of users_group
-- ----------------------------
BEGIN;
INSERT INTO "users_group" VALUES ('b37ecc71-18c7-4a89-bdc5-50fb80f7097b', '腾讯', '游戏');
INSERT INTO "users_group" VALUES ('5ff557d7-7055-4395-af22-d1a65c270867', '川峰门业', '套装门生成');
INSERT INTO "users_group" VALUES ('abdcc33e-7cee-4c6a-be5c-af33fff65e7a', '小米科技', '手机的');
COMMIT;

-- ----------------------------
--  Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "users";
CREATE TABLE "users" (
	"id" varchar(120) NOT NULL COLLATE "default",
	"name" varchar(20) COLLATE "default",
	"loginname" varchar(20) COLLATE "default",
	"phone" varchar(11) COLLATE "default",
	"email" varchar(30) COLLATE "default",
	"password" varchar(300) COLLATE "default",
	"roles" varchar(100) COLLATE "default",
	"state" bool,
	"parent_id" varchar COLLATE "default",
	"img" varchar COLLATE "default"
)
WITH (OIDS=FALSE);

-- ----------------------------
--  Records of users
-- ----------------------------
BEGIN;
INSERT INTO "users" VALUES ('73806f22-401b-4d99-a6b0-985834dd5ae7', '赵伟', '赵伟', '13540416116', '1512763623@qq.com', '87d9bb400c0634691f0e3baaf1e2fd0d', '1004', 't', 'vpn', 'eb4711a1-0f98-4271-82bb-3e72f453518b.jpg');
INSERT INTO "users" VALUES ('7960ea0a-3c8e-4bd1-9e01-0d18335905f0', 'zw', 'zwht', '13540416118', '1512763621@qq.com', '87d9bb400c0634691f0e3baaf1e2fd0d', '1001', 't', 'vpn', 'eb4711a1-0f98-4271-82bb-3e72f453518b.jpg');
COMMIT;

-- ----------------------------
--  Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS "news";
CREATE TABLE "news" (
	"id" varchar NOT NULL COLLATE "default",
	"title" varchar COLLATE "default",
	"content" varchar COLLATE "default",
	"create_time" timestamp(6) NULL,
	"author" varchar COLLATE "default",
	"type_id" varchar COLLATE "default",
	"see_sum" numeric,
	"index" numeric,
	"img" varchar COLLATE "default",
	"is_hot" numeric,
	"review_sum" numeric,
	"user_group_id" varchar COLLATE "default",
	"state" int2,
	"abstract" varchar COLLATE "default",
	"labels" varchar COLLATE "default",
	"url_en" varchar COLLATE "default",
	"author_id" varchar COLLATE "default",
	"source" varchar COLLATE "default",
	"content_markdown" varchar COLLATE "default",
	"markdown" int2
)
WITH (OIDS=FALSE);

-- ----------------------------
--  Records of news
-- ----------------------------
BEGIN;
INSERT INTO "news" VALUES ('075d6d74-fc62-4176-b0cd-ed948e4403bf', 'linux后台运行问题', '<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit; font-size: medium;">Linux的后台运行问题，使用和不能后台运行</font></font></p><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit; font-size: medium;">因为运行代码别更新中断</font></font></p><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit; font-size: medium;">使用小括号，如:( go run main.go＆）</font></font></p><p><br></p>', '2018-11-08 10:02:32.369366', 'zw', '8888', '16', null, '', null, '0', '', '1102', 'linux后台运行问题，使用&不能后台运行', 'linux,go', 'linux-background-run', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '原创', 'ew', '1402');
INSERT INTO "news" VALUES ('cf0ad21f-6884-4a9d-b37c-9457e57aae59', 'rxjs angular 发布订阅模式', '<p>观察者模式定义</p><p>观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。</p><p><br/></p><p>我们可以使用日常生活中，期刊订阅的例子来形象地解释一下上面的概念。期刊订阅包含两个主要的角色：期刊出版方和订阅者，他们之间的关系如下：</p><p><br/></p><p>期刊出版方 - 负责期刊的出版和发行工作</p><p><br/></p><p>订阅者 - 只需执行订阅操作，新版的期刊发布后，就会主动收到通知，如果取消订阅，以后就不会再收到通知</p><p><br/></p><p>在观察者模式中也有两个主要角色：Subject (主题) 和 Observer (观察者) 。它们分别对应例子中的期刊出版方和订阅者。接下来我们来看张图，从而加深对上面概念的理解。</p><p><br/></p><p>图片描述</p><p><br/></p><p>观察者模式结构</p><p>图片描述</p><p><br/></p><p>观察者模式实战</p><p>Subject 类定义</p><pre class="brush:js;toolbar:false">class&nbsp;Subject&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;constructor()&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.observerCollection&nbsp;=&nbsp;[];
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;addObserver(observer)&nbsp;{&nbsp;//&nbsp;添加观察者
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.observerCollection.push(observer);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;deleteObserver(observer)&nbsp;{&nbsp;//&nbsp;移除观察者
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;index&nbsp;=&nbsp;this.observerCollection.indexOf(observer);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(index&nbsp;&gt;=&nbsp;0)&nbsp;this.observerCollection.splice(index,&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;notifyObservers()&nbsp;{&nbsp;//&nbsp;通知观察者
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.observerCollection.forEach((observer)=&gt;observer.notify());
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre><p>Observer 类定义</p><p>class Observer {</p><p>constructor(name) {</p><p>this.name = name;</p><p>}</p><p>notify() {</p><p>console.log(`${this.name} has been notified.`);</p><p>}</p><p>}</p><p>使用示例</p><p>let subject = new Subject(); // 创建主题对象</p><p><br/></p><p>let observer1 = new Observer(&#39;semlinker&#39;); // 创建观察者A - &#39;semlinker&#39;</p><p>let observer2 = new Observer(&#39;lolo&#39;); // 创建观察者B - &#39;lolo&#39;</p><p><br/></p><p>subject.addObserver(observer1); // 注册观察者A</p><p>subject.addObserver(observer2); // 注册观察者B</p><p>subject.notifyObservers(); // 通知观察者</p><p><br/></p><p>subject.deleteObserver(observer1); // 移除观察者A</p><p><br/></p><p>subject.notifyObservers(); // 验证是否成功移除</p><p>以上代码成功运行后控制台的输出结果：</p><p><br/></p><p>semlinker has been notified.</p><p>lolo has been notified.</p><p>lolo has been notified.</p><p>Observable subscribe</p><p>在介绍 RxJS - Subject 之前，我们先来看个示例：</p><p><br/></p><p>const interval$ = Rx.Observable.interval(1000).take(3);</p><p><br/></p><p>interval$.subscribe({</p><p>next: value =&gt; console.log(&#39;Observer A get value: &#39; + value);</p><p>});</p><p><br/></p><p>setTimeout(() =&gt; {</p><p>interval$.subscribe({</p><p>next: value =&gt; console.log(&#39;Observer B get value: &#39; + value);</p><p>});</p><p>}, 1000);</p><p>以上代码运行后，控制台的输出结果：</p><p><br/></p><p>Observer A get value: 0</p><p>Observer A get value: 1</p><p>Observer B get value: 0</p><p>Observer A get value: 2</p><p>Observer B get value: 1</p><p>Observer B get value: 2</p><p>通过以上示例，我们可以得出以下结论：</p><p><br/></p><p>Observable 对象可以被重复订阅</p><p><br/></p><p>Observable 对象每次被订阅后，都会重新执行</p><p><br/></p><p>上面的示例，我们可以简单地认为两次调用普通的函数，具体参考以下代码：</p><p><br/></p><p>function interval() {</p><p>setInterval(() =&gt; console.log(&#39;..&#39;), 1000);</p><p>}</p><p><br/></p><p>interval();</p><p><br/></p><p>setTimeout(() =&gt; {</p><p>interval();</p><p>}, 1000);</p><p>Observable 对象的默认行为，适用于大部分场景。但有些时候，我们会希望在第二次订阅的时候，不会从头开始接收 Observable 发出的值，而是从第一次订阅当前正在处理的值开始发送，我们把这种处理方式成为组播 (multicast)，那我们要怎么实现呢 ？回想一下我们刚才介绍过观察者模式，你脑海中是不是已经想到方案了。没错，我们可以通过自定义 Subject 来实现上述功能。</p><p><br/></p><p>自定义 Subject</p><p>Subject 类定义</p><p>class Subject {</p><p>constructor() {</p><p>this.observers = [];</p><p>}</p><p>addObserver(observer) {</p><p>this.observers.push(observer);</p><p>}</p><p>next(value) {</p><p>this.observers.forEach(o =&gt; o.next(value));</p><p>}</p><p>error(error){</p><p>this.observers.forEach(o =&gt; o.error(error));</p><p>}</p><p>complete() {</p><p>this.observers.forEach(o =&gt; o.complete());</p><p>}</p><p>}</p><p>使用示例</p><p>const interval$ = Rx.Observable.interval(1000).take(3);</p><p>let subject = new Subject();</p><p><br/></p><p>let observerA = {</p><p>next: value =&gt; console.log(&#39;Observer A get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer A error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer A complete!&#39;)</p><p>};</p><p><br/></p><p>var observerB = {</p><p>next: value =&gt; console.log(&#39;Observer B get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer B error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer B complete!&#39;)</p><p>};</p><p><br/></p><p>subject.addObserver(observerA); // 添加观察者A</p><p>interval$.subscribe(subject); // 订阅interval$对象</p><p>setTimeout(() =&gt; {</p><p>subject.addObserver(observerB); // 添加观察者B</p><p>}, 1000);</p><p>以上代码运行后，控制台的输出结果：</p><p><br/></p><p>Observer A get value: 0</p><p>Observer A get value: 1</p><p>Observer B get value: 1</p><p>Observer A get value: 2</p><p>Observer B get value: 2</p><p>Observer A complete!</p><p>Observer B complete!</p><p>通过自定义 Subject，我们实现了前面提到的功能。接下来我们进入正题 - RxJS Subject。</p><p><br/></p><p>RxJS Subject</p><p>首先我们通过 RxJS Subject 来重写一下上面的示例：</p><p><br/></p><p>const interval$ = Rx.Observable.interval(1000).take(3);</p><p>let subject = new Rx.Subject();</p><p><br/></p><p>let observerA = {</p><p>next: value =&gt; console.log(&#39;Observer A get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer A error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer A complete!&#39;)</p><p>};</p><p><br/></p><p>var observerB = {</p><p>next: value =&gt; console.log(&#39;Observer B get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer B error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer B complete!&#39;)</p><p>};</p><p><br/></p><p>subject.subscribe(observerA); // 添加观察者A</p><p>interval$.subscribe(subject); // 订阅interval$对象</p><p>setTimeout(() =&gt; {</p><p>subject.subscribe(observerB); // 添加观察者B</p><p>}, 1000);</p><p>RxJS Subject 源码片段</p><p>/**</p><p>* Suject继承于Observable</p><p>*/</p><p>export class Subject extends Observable {</p><p>constructor() {</p><p>super();</p><p>this.observers = []; // 观察者列表</p><p>this.closed = false;</p><p>this.isStopped = false;</p><p>this.hasError = false;</p><p>this.thrownError = null;</p><p>}</p><p>next(value) {</p><p>if (this.closed) {</p><p>throw new ObjectUnsubscribedError();</p><p>}</p><p>if (!this.isStopped) {</p><p>const { observers } = this;</p><p>const len = observers.length;</p><p>const copy = observers.slice();</p><p>for (let i = 0; i <span style="color: #ffffff;">&lt;</span> len; i++) { // 循环调用观察者next方法，通知观察者</p><p>copy[i].next(value);</p><p>}</p><p>}</p><p>}</p><p>error(err) {</p><p>if (this.closed) {</p><p>throw new ObjectUnsubscribedError();</p><p>}</p><p>this.hasError = true;</p><p>this.thrownError = err;</p><p>this.isStopped = true;</p><p>const { observers } = this;</p><p>const len = observers.length;</p><p>const copy = observers.slice();</p><p>for (let i = 0; i <span style="color: #ffffff;">&lt;</span> len; i++) { // 循环调用观察者error方法</p><p>copy[i].error(err);</p><p>}</p><p>this.observers.length = 0;</p><p>}</p><p>complete() {</p><p>if (this.closed) {</p><p>throw new ObjectUnsubscribedError();</p><p>}</p><p>this.isStopped = true;</p><p>const { observers } = this;</p><p>const len = observers.length;</p><p>const copy = observers.slice();</p><p>for (let i = 0; i <span style="color: #ffffff;">&lt;</span> len; i++) { // 循环调用观察者complete方法</p><p>copy[i].complete();</p><p>}</p><p>this.observers.length = 0; // 清空内部观察者列表</p><p>}</p><p>}</p><p>通过 RxJS Subject 示例和源码片段，对于 Subject 我们可以得出以下结论：</p><p><br/></p><p>Subject 既是 Observable 对象，又是 Observer 对象</p><p><br/></p><p>当有新消息时，Subject 会对内部的 observers 列表进行组播 (multicast)</p><p><br/></p><p>Angular 2 RxJS Subject 应用</p><p>在 Angular 2 中，我们可以利用 RxJS Subject 来实现组件通信，具体示例如下：</p><p><br/></p><p>message.service.ts</p><p><br/></p><p>import { Injectable } from &#39;@angular/core&#39;;</p><p>import {Observable} from &#39;rxjs/Observable&#39;;</p><p>import { Subject } from &#39;rxjs/Subject&#39;;</p><p><br/></p><p>@Injectable()</p><p>export class MessageService {</p><p>private subject = new Subject&lt;<span style="color: #e06c75;">any</span>&gt;();</p><p><br/></p><p>sendMessage(message: string) {</p><p>this.subject.next({ text: message });</p><p>}</p><p><br/></p><p>clearMessage() {</p><p>this.subject.next();</p><p>}</p><p><br/></p><p>getMessage(): Observable&lt;<span style="color: #e06c75;">any</span>&gt; {</p><p>return this.subject.asObservable();</p><p>}</p><p>}</p><p>home.component.ts</p><p><br/></p><p>import { Component } from &#39;@angular/core&#39;;</p><p><br/></p><p>import { MessageService } from &#39;../_services/index&#39;;</p><p><br/></p><p>@Component({</p><p>moduleId: module.id,</p><p>templateUrl: &#39;home.component.html&#39;</p><p>})</p><p><br/></p><p>export class HomeComponent {</p><p>constructor(private messageService: MessageService) {}</p><p>sendMessage(): void { // 发送消息</p><p>this.messageService.sendMessage(&#39;Message from Home Component to App Component!&#39;);</p><p>}</p><p><br/></p><p>clearMessage(): void { // 清除消息</p><p>this.messageService.clearMessage();</p><p>}</p><p>}</p><p>app.component.ts</p><p><br/></p><p>import { Component, OnDestroy } from &#39;@angular/core&#39;;</p><p>import { Subscription } from &#39;rxjs/Subscription&#39;;</p><p><br/></p><p>import { MessageService } from &#39;./_services/index&#39;;</p><p><br/></p><p>@Component({</p><p>moduleId: module.id,</p><p>selector: &#39;app&#39;,</p><p>templateUrl: &#39;app.component.html&#39;</p><p>})</p><p><br/></p><p>export class AppComponent implements OnDestroy {</p><p>message: any;</p><p>subscription: Subscription;</p><p><br/></p><p>constructor(private messageService: MessageService) {</p><p>this.subscription = this.messageService.getMessage()</p><p>.subscribe(message =&gt; { this.message = message; });</p><p>}</p><p><br/></p><p>ngOnDestroy() {</p><p>this.subscription.unsubscribe();</p><p>}</p><p>}</p><p>以上示例实现的功能是组件之间消息通信，即 HomeComponent 子组件，向 AppComponent 父组件发送消息。代码运行后，浏览器的显示结果如下：</p><p><br/></p><p>图片描述</p><p><br/></p><p>Plunker 示例</p><p><br/></p><p>Subject 存在的问题</p><p>因为 Subject 在订阅时，是把 observer 存放到观察者列表中，并在接收到新值的时候，遍历观察者列表并调用观察者上的 next 方法，具体如下：</p><p><br/></p><p>next(value) {</p><p>if (this.closed) {</p><p>throw new ObjectUnsubscribedError();</p><p>}</p><p>if (!this.isStopped) {</p><p>const { observers } = this;</p><p>const len = observers.length;</p><p>const copy = observers.slice();</p><p>for (let i = 0; i <span style="color: #ffffff;">&lt;</span> len; i++) { // 循环调用观察者next方法，通知观察者</p><p>copy[i].next(value);</p><p>}</p><p>}</p><p>}</p><p>这样会有一个大问题，如果某个 observer 在执行时出现异常，却没进行异常处理，就会影响到其它的订阅者，具体示例如下：</p><p><br/></p><p>const source = Rx.Observable.interval(1000);</p><p>const subject = new Rx.Subject();</p><p><br/></p><p>const example = subject.map(x =&gt; {</p><p>if (x === 1) {</p><p>throw new Error(&#39;oops&#39;);</p><p>}</p><p>return x;</p><p>});</p><p>subject.subscribe(x =&gt; console.log(&#39;A&#39;, x));</p><p>example.subscribe(x =&gt; console.log(&#39;B&#39;, x));</p><p>subject.subscribe(x =&gt; console.log(&#39;C&#39;, x));</p><p><br/></p><p>source.subscribe(subject);</p><p>以上代码运行后，控制台的输出结果：</p><p><br/></p><p>A 0</p><p>B 0</p><p>C 0</p><p>A 1</p><p>Rx.min.js:74 Uncaught Error: oops</p><p>JSBin - Subject Problem Demo</p><p><br/></p><p>在代码运行前，大家会认为观察者B 会在接收到 1 值时抛出异常，观察者 A 和 C 仍会正常运行。但实际上，在当前的 RxJS 版本中若观察者 B 报错，观察者 A 和 C 也会停止运行。那么应该如何解决这个问题呢？目前最简单的方式就是为所有的观察者添加异常处理，更新后的代码如下：</p><p><br/></p><p>const source = Rx.Observable.interval(1000);</p><p>const subject = new Rx.Subject();</p><p><br/></p><p>const example = subject.map(x =&gt; {</p><p>if (x === 1) {</p><p>throw new Error(&#39;oops&#39;);</p><p>}</p><p>return x;</p><p>});</p><p><br/></p><p>subject.subscribe(</p><p>x =&gt; console.log(&#39;A&#39;, x),</p><p>error =&gt; console.log(&#39;A Error:&#39; + error)</p><p>);</p><p>example.subscribe(</p><p>x =&gt; console.log(&#39;B&#39;, x),</p><p>error =&gt; console.log(&#39;B Error:&#39; + error)</p><p>);</p><p><br/></p><p>subject.subscribe(</p><p>x =&gt; console.log(&#39;C&#39;, x),</p><p>error =&gt; console.log(&#39;C Error:&#39; + error)</p><p>);</p><p><br/></p><p>source.subscribe(subject);</p><p>JSBin - RxJS Subject Problem Solved Demo</p><p><br/></p><p>RxJS Subject &amp; Observable</p><p>Subject 其实是观察者模式的实现，所以当观察者订阅 Subject 对象时，Subject 对象会把订阅者添加到观察者列表中，每当有 subject 对象接收到新值时，它就会遍历观察者列表，依次调用观察者内部的 next() 方法，把值一一送出。</p><p><br/></p><p>Subject 之所以具有 Observable 中的所有方法，是因为 Subject 类继承了 Observable 类，在 Subject 类中有五个重要的方法：</p><p><br/></p><p>next - 每当 Subject 对象接收到新值的时候，next 方法会被调用</p><p><br/></p><p>error - 运行中出现异常，error 方法会被调用</p><p><br/></p><p>complete - Subject 订阅的 Observable 对象结束后，complete 方法会被调用</p><p><br/></p><p>subscribe - 添加观察者</p><p><br/></p><p>unsubscribe - 取消订阅 (设置终止标识符、清空观察者列表)</p><p><br/></p><p>BehaviorSubject</p><p>BehaviorSubject 定义</p><p>BehaviorSubject 源码片段</p><p><br/></p><p>export class BehaviorSubject extends Subject {</p><p>constructor(_value) { // 设置初始值</p><p>super();</p><p>this._value = _value;</p><p>}</p><p>get value() { // 获取当前值</p><p>return this.getValue();</p><p>}</p><p>_subscribe(subscriber) {</p><p>const subscription = super._subscribe(subscriber);</p><p>if (subscription &amp;&amp; !subscription.closed) {</p><p>subscriber.next(this._value); // 为新的订阅者发送当前最新的值</p><p>}</p><p>return subscription;</p><p>}</p><p>getValue() {</p><p>if (this.hasError) {</p><p>throw this.thrownError;</p><p>}</p><p>else if (this.closed) {</p><p>throw new ObjectUnsubscribedError();</p><p>}</p><p>else {</p><p>return this._value;</p><p>}</p><p>}</p><p>next(value) { // 调用父类Subject的next方法，同时更新当前值</p><p>super.next(this._value = value);</p><p>}</p><p>}</p><p>BehaviorSubject 应用</p><p>有些时候我们会希望 Subject 能保存当前的最新状态，而不是单纯的进行事件发送，也就是说每当新增一个观察者的时候，我们希望 Subject 能够立即发出当前最新的值，而不是没有任何响应。具体我们先看一下示例：</p><p><br/></p><p>var subject = new Rx.Subject();</p><p><br/></p><p>var observerA = {</p><p>next: value =&gt; console.log(&#39;Observer A get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer A error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer A complete!&#39;)</p><p>};</p><p><br/></p><p>var observerB = {</p><p>next: value =&gt; console.log(&#39;Observer B get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer B error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer B complete!&#39;)</p><p>};</p><p><br/></p><p>subject.subscribe(observerA);</p><p><br/></p><p>subject.next(1);</p><p>subject.next(2);</p><p>subject.next(3);</p><p><br/></p><p>setTimeout(() =&gt; {</p><p>subject.subscribe(observerB); // 1秒后订阅</p><p>}, 1000);</p><p>以上代码运行后，控制台的输出结果：</p><p><br/></p><p>Observer A get value: 1</p><p>Observer A get value: 2</p><p>Observer A get value: 3</p><p>通过输出结果，我们发现在 observerB 订阅 Subject 对象后，它再也没有收到任何值了。因为 Subject 对象没有再调用 next() 方法。但很多时候我们会希望 Subject 对象能够保存当前的状态，当新增订阅者的时候，自动把当前最新的值发送给订阅者。要实现这个功能，我们就需要使用 BehaviorSubject。</p><p><br/></p><p>BehaviorSubject 跟 Subject 最大的不同就是 BehaviorSubject 是用来保存当前最新的值，而不是单纯的发送事件。BehaviorSubject 会记住最近一次发送的值，并把该值作为当前值保存在内部的属性中。接下来我们来使用 BehaviorSubject 重新一下上面的示例：</p><p><br/></p><p>var subject = new Rx.BehaviorSubject(0); // 设定初始值</p><p><br/></p><p>var observerA = {</p><p>next: value =&gt; console.log(&#39;Observer A get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer A error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer A complete!&#39;)</p><p>};</p><p><br/></p><p>var observerB = {</p><p>next: value =&gt; console.log(&#39;Observer B get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer B error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer B complete!&#39;)</p><p>};</p><p><br/></p><p>subject.subscribe(observerA);</p><p><br/></p><p>subject.next(1);</p><p>subject.next(2);</p><p>subject.next(3);</p><p><br/></p><p>setTimeout(() =&gt; {</p><p>subject.subscribe(observerB); // 1秒后订阅</p><p>}, 1000);</p><p>以上代码运行后，控制台的输出结果：</p><p><br/></p><p>Observer A get value: 0</p><p>Observer A get value: 1</p><p>Observer A get value: 2</p><p>Observer A get value: 3</p><p>Observer B get value: 3</p><p>JSBin - BehaviorSubject</p><p><br/></p><p>ReplaySubject</p><p>ReplaySubject 定义</p><p>ReplaySubject 源码片段</p><p><br/></p><p>export class ReplaySubject extends Subject {</p><p>constructor(bufferSize = Number.POSITIVE_INFINITY,</p><p>windowTime = Number.POSITIVE_INFINITY,</p><p>scheduler) {</p><p>super();</p><p>this.scheduler = scheduler;</p><p>this._events = []; // ReplayEvent对象列表</p><p>this._bufferSize = bufferSize <span style="color: #ffffff;">&lt;</span> 1 ? 1 : bufferSize; // 设置缓冲区大小</p><p>this._windowTime = windowTime <span style="color: #ffffff;">&lt;</span> 1 ? 1 : windowTime;</p><p>}</p><p>next(value) {</p><p>const now = this._getNow();</p><p>this._events.push(new ReplayEvent(now, value));</p><p>this._trimBufferThenGetEvents();</p><p>super.next(value);</p><p>}</p><p>_subscribe(subscriber) {</p><p>const _events = this._trimBufferThenGetEvents(); // 过滤ReplayEvent对象列表</p><p>let subscription;</p><p>if (this.closed) {</p><p>throw new ObjectUnsubscribedError();</p><p>}</p><p>...</p><p>else {</p><p>this.observers.push(subscriber);</p><p>subscription = new SubjectSubscription(this, subscriber);</p><p>}</p><p>...</p><p>const len = _events.length;</p><p>// 重新发送设定的最后bufferSize个值</p><p>for (let i = 0; i <span style="color: #ffffff;">&lt;</span> len &amp;&amp; !subscriber.closed; i++) {</p><p>subscriber.next(_events[i].value);</p><p>}</p><p>...</p><p>return subscription;</p><p>}</p><p>}</p><p><br/></p><p>class ReplayEvent {</p><p>constructor(time, value) {</p><p>this.time = time;</p><p>this.value = value;</p><p>}</p><p>}</p><p>ReplaySubject 应用</p><p>有些时候我们希望在 Subject 新增订阅者后，能向新增的订阅者重新发送最后几个值，这时我们就可以使用 ReplaySubject ，具体示例如下：</p><p><br/></p><p>var subject = new Rx.ReplaySubject(2); // 重新发送最后2个值</p><p><br/></p><p>var observerA = {</p><p>next: value =&gt; console.log(&#39;Observer A get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer A error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer A complete!&#39;)</p><p>};</p><p><br/></p><p>var observerB = {</p><p>next: value =&gt; console.log(&#39;Observer B get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer B error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer B complete!&#39;)</p><p>};</p><p><br/></p><p>subject.subscribe(observerA);</p><p><br/></p><p>subject.next(1);</p><p>subject.next(2);</p><p>subject.next(3);</p><p><br/></p><p>setTimeout(() =&gt; {</p><p>subject.subscribe(observerB); // 1秒后订阅</p><p>}, 1000);</p><p>以上代码运行后，控制台的输出结果：</p><p><br/></p><p>Observer A get value: 1</p><p>Observer A get value: 2</p><p>Observer A get value: 3</p><p>Observer B get value: 2</p><p>Observer B get value: 3</p><p>可能会有人认为 ReplaySubject(1) 是不是等同于 BehaviorSubject，其实它们是不一样的。在创建BehaviorSubject 对象时，是设置初始值，它用于表示 Subject 对象当前的状态，而 ReplaySubject 只是事件的重放。</p><p><br/></p><p>JSBin - ReplaySubject</p><p><br/></p><p>AsyncSubject</p><p>AsyncSubject 定义</p><p>AsyncSubject 源码片段</p><p><br/></p><p>export class AsyncSubject extends Subject {</p><p>constructor() {</p><p>super(...arguments);</p><p>this.value = null;</p><p>this.hasNext = false;</p><p>this.hasCompleted = false; // 标识是否已完成</p><p>}</p><p>_subscribe(subscriber) {</p><p>if (this.hasError) {</p><p>subscriber.error(this.thrownError);</p><p>return Subscription.EMPTY;</p><p>}</p><p>else if (this.hasCompleted &amp;&amp; this.hasNext) { // 等到完成后，才发出最后的值</p><p>subscriber.next(this.value);</p><p>subscriber.complete();</p><p>return Subscription.EMPTY;</p><p>}</p><p>return super._subscribe(subscriber);</p><p>}</p><p>next(value) {</p><p>if (!this.hasCompleted) { // 若未完成，保存当前的值</p><p>this.value = value;</p><p>this.hasNext = true;</p><p>}</p><p>}</p><p>}</p><p>AsyncSubject 应用</p><p>AsyncSubject 类似于 last 操作符，它会在 Subject 结束后发出最后一个值，具体示例如下：</p><p><br/></p><p>var subject = new Rx.AsyncSubject();</p><p><br/></p><p>var observerA = {</p><p>next: value =&gt; console.log(&#39;Observer A get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer A error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer A complete!&#39;)</p><p>};</p><p><br/></p><p>var observerB = {</p><p>next: value =&gt; console.log(&#39;Observer B get value: &#39; + value),</p><p>error: error =&gt; console.log(&#39;Observer B error: &#39; + error),</p><p>complete: () =&gt; console.log(&#39;Observer B complete!&#39;)</p><p>};</p><p><br/></p><p>subject.subscribe(observerA);</p><p><br/></p><p>subject.next(1);</p><p>subject.next(2);</p><p>subject.next(3);</p><p><br/></p><p>subject.complete();</p><p><br/></p><p>setTimeout(() =&gt; {</p><p>subject.subscribe(observerB); // 1秒后订阅</p><p>}, 1000);</p><p>以上代码运行后，控制台的输出结果：</p><p><br/></p><p>Observer A get value: 3</p><p>Observer A complete!</p><p>Observer B get value: 3</p><p>Observer B complete!</p><p><br/></p><p><br/></p>', '2018-11-14 19:49:54.511981', 'zw', '910fb016-fa5e-4302-be8f-1f9016007d28', '6', null, '', null, '0', '', '1102', '在观察者模式中也有两个主要角色：主题（主题）和观察者（观察者）。它们分别对应例子中的期刊出版方和订阅者。接下来我们来看张图，从而加深对上面概念的理解。', 'rxjs,angular2,subject', 'rxjs-angular2-subject', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '转载', '观察者模式定义

观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。

<br>

我们可以使用日常生活中，期刊订阅的例子来形象地解释一下上面的概念。期刊订阅包含两个主要的角色：期刊出版方和订阅者，他们之间的关系如下：

<br>

期刊出版方 - 负责期刊的出版和发行工作

<br>

订阅者 - 只需执行订阅操作，新版的期刊发布后，就会主动收到通知，如果取消订阅，以后就不会再收到通知

<br>

在观察者模式中也有两个主要角色：Subject (主题) 和 Observer (观察者) 。它们分别对应例子中的期刊出版方和订阅者。接下来我们来看张图，从而加深对上面概念的理解。

<br>

图片描述

<br>

观察者模式结构

图片描述

<br>

观察者模式实战

Subject 类定义

<pre>class&nbsp;Subject&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;constructor()&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.observerCollection&nbsp;=&nbsp;[];
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;addObserver(observer)&nbsp;{&nbsp;//&nbsp;添加观察者
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.observerCollection.push(observer);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;deleteObserver(observer)&nbsp;{&nbsp;//&nbsp;移除观察者
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;index&nbsp;=&nbsp;this.observerCollection.indexOf(observer);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(index&nbsp;&gt;=&nbsp;0)&nbsp;this.observerCollection.splice(index,&nbsp;1);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;notifyObservers()&nbsp;{&nbsp;//&nbsp;通知观察者
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.observerCollection.forEach((observer)=&gt;observer.notify());
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre>

Observer 类定义

class Observer {

constructor(name) {

this.name = name;

}

notify() {

console.log(\`${this.name} has been notified.\`);

}

}

使用示例

let subject = new Subject(); // 创建主题对象

<br>

let observer1 = new Observer(''semlinker''); // 创建观察者A - ''semlinker''

let observer2 = new Observer(''lolo''); // 创建观察者B - ''lolo''

<br>

subject.addObserver(observer1); // 注册观察者A

subject.addObserver(observer2); // 注册观察者B

subject.notifyObservers(); // 通知观察者

<br>

subject.deleteObserver(observer1); // 移除观察者A

<br>

subject.notifyObservers(); // 验证是否成功移除

以上代码成功运行后控制台的输出结果：

<br>

semlinker has been notified.

lolo has been notified.

lolo has been notified.

Observable subscribe

在介绍 RxJS - Subject 之前，我们先来看个示例：

<br>

const interval$ = Rx.Observable.interval(1000).take(3);

<br>

interval$.subscribe({

next: value => console.log(''Observer A get value: '' + value);

});

<br>

setTimeout(() => {

interval$.subscribe({

next: value => console.log(''Observer B get value: '' + value);

});

}, 1000);

以上代码运行后，控制台的输出结果：

<br>

Observer A get value: 0

Observer A get value: 1

Observer B get value: 0

Observer A get value: 2

Observer B get value: 1

Observer B get value: 2

通过以上示例，我们可以得出以下结论：

<br>

Observable 对象可以被重复订阅

<br>

Observable 对象每次被订阅后，都会重新执行

<br>

上面的示例，我们可以简单地认为两次调用普通的函数，具体参考以下代码：

<br>

function interval() {

setInterval(() => console.log(''..''), 1000);

}

<br>

interval();

<br>

setTimeout(() => {

interval();

}, 1000);

Observable 对象的默认行为，适用于大部分场景。但有些时候，我们会希望在第二次订阅的时候，不会从头开始接收 Observable 发出的值，而是从第一次订阅当前正在处理的值开始发送，我们把这种处理方式成为组播 (multicast)，那我们要怎么实现呢 ？回想一下我们刚才介绍过观察者模式，你脑海中是不是已经想到方案了。没错，我们可以通过自定义 Subject 来实现上述功能。

<br>

自定义 Subject

Subject 类定义

class Subject {

constructor() {

this.observers = [];

}

addObserver(observer) {

this.observers.push(observer);

}

next(value) {

this.observers.forEach(o => o.next(value));

}

error(error){

this.observers.forEach(o => o.error(error));

}

complete() {

this.observers.forEach(o => o.complete());

}

}

使用示例

const interval$ = Rx.Observable.interval(1000).take(3);

let subject = new Subject();

<br>

let observerA = {

next: value => console.log(''Observer A get value: '' + value),

error: error => console.log(''Observer A error: '' + error),

complete: () => console.log(''Observer A complete!'')

};

<br>

var observerB = {

next: value => console.log(''Observer B get value: '' + value),

error: error => console.log(''Observer B error: '' + error),

complete: () => console.log(''Observer B complete!'')

};

<br>

subject.addObserver(observerA); // 添加观察者A

interval$.subscribe(subject); // 订阅interval$对象

setTimeout(() => {

subject.addObserver(observerB); // 添加观察者B

}, 1000);

以上代码运行后，控制台的输出结果：

<br>

Observer A get value: 0

Observer A get value: 1

Observer B get value: 1

Observer A get value: 2

Observer B get value: 2

Observer A complete!

Observer B complete!

通过自定义 Subject，我们实现了前面提到的功能。接下来我们进入正题 - RxJS Subject。

<br>

RxJS Subject

首先我们通过 RxJS Subject 来重写一下上面的示例：

<br>

const interval$ = Rx.Observable.interval(1000).take(3);

let subject = new Rx.Subject();

<br>

let observerA = {

next: value => console.log(''Observer A get value: '' + value),

error: error => console.log(''Observer A error: '' + error),

complete: () => console.log(''Observer A complete!'')

};

<br>

var observerB = {

next: value => console.log(''Observer B get value: '' + value),

error: error => console.log(''Observer B error: '' + error),

complete: () => console.log(''Observer B complete!'')

};

<br>

subject.subscribe(observerA); // 添加观察者A

interval$.subscribe(subject); // 订阅interval$对象

setTimeout(() => {

subject.subscribe(observerB); // 添加观察者B

}, 1000);

RxJS Subject 源码片段

/\*\*

\* Suject继承于Observable

\*/

export class Subject extends Observable {

constructor() {

super();

this.observers = []; // 观察者列表

this.closed = false;

this.isStopped = false;

this.hasError = false;

this.thrownError = null;

}

next(value) {

if (this.closed) {

throw new ObjectUnsubscribedError();

}

if (!this.isStopped) {

const { observers } = this;

const len = observers.length;

const copy = observers.slice();

for (let i = 0; i <span style="color: #ffffff;">&lt;</span>

 len; i++) { // 循环调用观察者next方法，通知观察者

copy[i].next(value);

}

}

}

error(err) {

if (this.closed) {

throw new ObjectUnsubscribedError();

}

this.hasError = true;

this.thrownError = err;

this.isStopped = true;

const { observers } = this;

const len = observers.length;

const copy = observers.slice();

for (let i = 0; i <span style="color: #ffffff;">&lt;</span>

 len; i++) { // 循环调用观察者error方法

copy[i].error(err);

}

this.observers.length = 0;

}

complete() {

if (this.closed) {

throw new ObjectUnsubscribedError();

}

this.isStopped = true;

const { observers } = this;

const len = observers.length;

const copy = observers.slice();

for (let i = 0; i <span style="color: #ffffff;">&lt;</span>

 len; i++) { // 循环调用观察者complete方法

copy[i].complete();

}

this.observers.length = 0; // 清空内部观察者列表

}

}

通过 RxJS Subject 示例和源码片段，对于 Subject 我们可以得出以下结论：

<br>

Subject 既是 Observable 对象，又是 Observer 对象

<br>

当有新消息时，Subject 会对内部的 observers 列表进行组播 (multicast)

<br>

Angular 2 RxJS Subject 应用

在 Angular 2 中，我们可以利用 RxJS Subject 来实现组件通信，具体示例如下：

<br>

message.service.ts

<br>

import { Injectable } from ''@angular/core'';

import {Observable} from ''rxjs/Observable'';

import { Subject } from ''rxjs/Subject'';

<br>

@Injectable()

export class MessageService {

private subject = new Subject<<span style="color: #e06c75;">any</span>

\>();

<br>

sendMessage(message: string) {

this.subject.next({ text: message });

}

<br>

clearMessage() {

this.subject.next();

}

<br>

getMessage(): Observable<<span style="color: #e06c75;">any</span>

\> {

return this.subject.asObservable();

}

}

home.component.ts

<br>

import { Component } from ''@angular/core'';

<br>

import { MessageService } from ''../\_services/index'';

<br>

@Component({

moduleId: module.id,

templateUrl: ''home.component.html''

})

<br>

export class HomeComponent {

constructor(private messageService: MessageService) {}

sendMessage(): void { // 发送消息

this.messageService.sendMessage(''Message from Home Component to App Component!'');

}

<br>

clearMessage(): void { // 清除消息

this.messageService.clearMessage();

}

}

app.component.ts

<br>

import { Component, OnDestroy } from ''@angular/core'';

import { Subscription } from ''rxjs/Subscription'';

<br>

import { MessageService } from ''./\_services/index'';

<br>

@Component({

moduleId: module.id,

selector: ''app'',

templateUrl: ''app.component.html''

})

<br>

export class AppComponent implements OnDestroy {

message: any;

subscription: Subscription;

<br>

constructor(private messageService: MessageService) {

this.subscription = this.messageService.getMessage()

.subscribe(message => { this.message = message; });

}

<br>

ngOnDestroy() {

this.subscription.unsubscribe();

}

}

以上示例实现的功能是组件之间消息通信，即 HomeComponent 子组件，向 AppComponent 父组件发送消息。代码运行后，浏览器的显示结果如下：

<br>

图片描述

<br>

Plunker 示例

<br>

Subject 存在的问题

因为 Subject 在订阅时，是把 observer 存放到观察者列表中，并在接收到新值的时候，遍历观察者列表并调用观察者上的 next 方法，具体如下：

<br>

next(value) {

if (this.closed) {

throw new ObjectUnsubscribedError();

}

if (!this.isStopped) {

const { observers } = this;

const len = observers.length;

const copy = observers.slice();

for (let i = 0; i <span style="color: #ffffff;">&lt;</span>

 len; i++) { // 循环调用观察者next方法，通知观察者

copy[i].next(value);

}

}

}

这样会有一个大问题，如果某个 observer 在执行时出现异常，却没进行异常处理，就会影响到其它的订阅者，具体示例如下：

<br>

const source = Rx.Observable.interval(1000);

const subject = new Rx.Subject();

<br>

const example = subject.map(x => {

if (x === 1) {

throw new Error(''oops'');

}

return x;

});

subject.subscribe(x => console.log(''A'', x));

example.subscribe(x => console.log(''B'', x));

subject.subscribe(x => console.log(''C'', x));

<br>

source.subscribe(subject);

以上代码运行后，控制台的输出结果：

<br>

A 0

B 0

C 0

A 1

Rx.min.js:74 Uncaught Error: oops

JSBin - Subject Problem Demo

<br>

在代码运行前，大家会认为观察者B 会在接收到 1 值时抛出异常，观察者 A 和 C 仍会正常运行。但实际上，在当前的 RxJS 版本中若观察者 B 报错，观察者 A 和 C 也会停止运行。那么应该如何解决这个问题呢？目前最简单的方式就是为所有的观察者添加异常处理，更新后的代码如下：

<br>

const source = Rx.Observable.interval(1000);

const subject = new Rx.Subject();

<br>

const example = subject.map(x => {

if (x === 1) {

throw new Error(''oops'');

}

return x;

});

<br>

subject.subscribe(

x => console.log(''A'', x),

error => console.log(''A Error:'' + error)

);

example.subscribe(

x => console.log(''B'', x),

error => console.log(''B Error:'' + error)

);

<br>

subject.subscribe(

x => console.log(''C'', x),

error => console.log(''C Error:'' + error)

);

<br>

source.subscribe(subject);

JSBin - RxJS Subject Problem Solved Demo

<br>

RxJS Subject & Observable

Subject 其实是观察者模式的实现，所以当观察者订阅 Subject 对象时，Subject 对象会把订阅者添加到观察者列表中，每当有 subject 对象接收到新值时，它就会遍历观察者列表，依次调用观察者内部的 next() 方法，把值一一送出。

<br>

Subject 之所以具有 Observable 中的所有方法，是因为 Subject 类继承了 Observable 类，在 Subject 类中有五个重要的方法：

<br>

next - 每当 Subject 对象接收到新值的时候，next 方法会被调用

<br>

error - 运行中出现异常，error 方法会被调用

<br>

complete - Subject 订阅的 Observable 对象结束后，complete 方法会被调用

<br>

subscribe - 添加观察者

<br>

unsubscribe - 取消订阅 (设置终止标识符、清空观察者列表)

<br>

BehaviorSubject

BehaviorSubject 定义

BehaviorSubject 源码片段

<br>

export class BehaviorSubject extends Subject {

constructor(\_value) { // 设置初始值

super();

this.\_value = \_value;

}

get value() { // 获取当前值

return this.getValue();

}

\_subscribe(subscriber) {

const subscription = super.\_subscribe(subscriber);

if (subscription && !subscription.closed) {

subscriber.next(this.\_value); // 为新的订阅者发送当前最新的值

}

return subscription;

}

getValue() {

if (this.hasError) {

throw this.thrownError;

}

else if (this.closed) {

throw new ObjectUnsubscribedError();

}

else {

return this.\_value;

}

}

next(value) { // 调用父类Subject的next方法，同时更新当前值

super.next(this.\_value = value);

}

}

BehaviorSubject 应用

有些时候我们会希望 Subject 能保存当前的最新状态，而不是单纯的进行事件发送，也就是说每当新增一个观察者的时候，我们希望 Subject 能够立即发出当前最新的值，而不是没有任何响应。具体我们先看一下示例：

<br>

var subject = new Rx.Subject();

<br>

var observerA = {

next: value => console.log(''Observer A get value: '' + value),

error: error => console.log(''Observer A error: '' + error),

complete: () => console.log(''Observer A complete!'')

};

<br>

var observerB = {

next: value => console.log(''Observer B get value: '' + value),

error: error => console.log(''Observer B error: '' + error),

complete: () => console.log(''Observer B complete!'')

};

<br>

subject.subscribe(observerA);

<br>

subject.next(1);

subject.next(2);

subject.next(3);

<br>

setTimeout(() => {

subject.subscribe(observerB); // 1秒后订阅

}, 1000);

以上代码运行后，控制台的输出结果：

<br>

Observer A get value: 1

Observer A get value: 2

Observer A get value: 3

通过输出结果，我们发现在 observerB 订阅 Subject 对象后，它再也没有收到任何值了。因为 Subject 对象没有再调用 next() 方法。但很多时候我们会希望 Subject 对象能够保存当前的状态，当新增订阅者的时候，自动把当前最新的值发送给订阅者。要实现这个功能，我们就需要使用 BehaviorSubject。

<br>

BehaviorSubject 跟 Subject 最大的不同就是 BehaviorSubject 是用来保存当前最新的值，而不是单纯的发送事件。BehaviorSubject 会记住最近一次发送的值，并把该值作为当前值保存在内部的属性中。接下来我们来使用 BehaviorSubject 重新一下上面的示例：

<br>

var subject = new Rx.BehaviorSubject(0); // 设定初始值

<br>

var observerA = {

next: value => console.log(''Observer A get value: '' + value),

error: error => console.log(''Observer A error: '' + error),

complete: () => console.log(''Observer A complete!'')

};

<br>

var observerB = {

next: value => console.log(''Observer B get value: '' + value),

error: error => console.log(''Observer B error: '' + error),

complete: () => console.log(''Observer B complete!'')

};

<br>

subject.subscribe(observerA);

<br>

subject.next(1);

subject.next(2);

subject.next(3);

<br>

setTimeout(() => {

subject.subscribe(observerB); // 1秒后订阅

}, 1000);

以上代码运行后，控制台的输出结果：

<br>

Observer A get value: 0

Observer A get value: 1

Observer A get value: 2

Observer A get value: 3

Observer B get value: 3

JSBin - BehaviorSubject

<br>

ReplaySubject

ReplaySubject 定义

ReplaySubject 源码片段

<br>

export class ReplaySubject extends Subject {

constructor(bufferSize = Number.POSITIVE\_INFINITY,

windowTime = Number.POSITIVE\_INFINITY,

scheduler) {

super();

this.scheduler = scheduler;

this.\_events = []; // ReplayEvent对象列表

this.\_bufferSize = bufferSize <span style="color: #ffffff;">&lt;</span>

 1 ? 1 : bufferSize; // 设置缓冲区大小

this.\_windowTime = windowTime <span style="color: #ffffff;">&lt;</span>

 1 ? 1 : windowTime;

}

next(value) {

const now = this.\_getNow();

this.\_events.push(new ReplayEvent(now, value));

this.\_trimBufferThenGetEvents();

super.next(value);

}

\_subscribe(subscriber) {

const \_events = this.\_trimBufferThenGetEvents(); // 过滤ReplayEvent对象列表

let subscription;

if (this.closed) {

throw new ObjectUnsubscribedError();

}

...

else {

this.observers.push(subscriber);

subscription = new SubjectSubscription(this, subscriber);

}

...

const len = \_events.length;

// 重新发送设定的最后bufferSize个值

for (let i = 0; i <span style="color: #ffffff;">&lt;</span>

 len && !subscriber.closed; i++) {

subscriber.next(\_events[i].value);

}

...

return subscription;

}

}

<br>

class ReplayEvent {

constructor(time, value) {

this.time = time;

this.value = value;

}

}

ReplaySubject 应用

有些时候我们希望在 Subject 新增订阅者后，能向新增的订阅者重新发送最后几个值，这时我们就可以使用 ReplaySubject ，具体示例如下：

<br>

var subject = new Rx.ReplaySubject(2); // 重新发送最后2个值

<br>

var observerA = {

next: value => console.log(''Observer A get value: '' + value),

error: error => console.log(''Observer A error: '' + error),

complete: () => console.log(''Observer A complete!'')

};

<br>

var observerB = {

next: value => console.log(''Observer B get value: '' + value),

error: error => console.log(''Observer B error: '' + error),

complete: () => console.log(''Observer B complete!'')

};

<br>

subject.subscribe(observerA);

<br>

subject.next(1);

subject.next(2);

subject.next(3);

<br>

setTimeout(() => {

subject.subscribe(observerB); // 1秒后订阅

}, 1000);

以上代码运行后，控制台的输出结果：

<br>

Observer A get value: 1

Observer A get value: 2

Observer A get value: 3

Observer B get value: 2

Observer B get value: 3

可能会有人认为 ReplaySubject(1) 是不是等同于 BehaviorSubject，其实它们是不一样的。在创建BehaviorSubject 对象时，是设置初始值，它用于表示 Subject 对象当前的状态，而 ReplaySubject 只是事件的重放。

<br>

JSBin - ReplaySubject

<br>

AsyncSubject

AsyncSubject 定义

AsyncSubject 源码片段

<br>

export class AsyncSubject extends Subject {

constructor() {

super(...arguments);

this.value = null;

this.hasNext = false;

this.hasCompleted = false; // 标识是否已完成

}

\_subscribe(subscriber) {

if (this.hasError) {

subscriber.error(this.thrownError);

return Subscription.EMPTY;

}

else if (this.hasCompleted && this.hasNext) { // 等到完成后，才发出最后的值

subscriber.next(this.value);

subscriber.complete();

return Subscription.EMPTY;

}

return super.\_subscribe(subscriber);

}

next(value) {

if (!this.hasCompleted) { // 若未完成，保存当前的值

this.value = value;

this.hasNext = true;

}

}

}

AsyncSubject 应用

AsyncSubject 类似于 last 操作符，它会在 Subject 结束后发出最后一个值，具体示例如下：

<br>

var subject = new Rx.AsyncSubject();

<br>

var observerA = {

next: value => console.log(''Observer A get value: '' + value),

error: error => console.log(''Observer A error: '' + error),

complete: () => console.log(''Observer A complete!'')

};

<br>

var observerB = {

next: value => console.log(''Observer B get value: '' + value),

error: error => console.log(''Observer B error: '' + error),

complete: () => console.log(''Observer B complete!'')

};

<br>

subject.subscribe(observerA);

<br>

subject.next(1);

subject.next(2);

subject.next(3);

<br>

subject.complete();

<br>

setTimeout(() => {

subject.subscribe(observerB); // 1秒后订阅

}, 1000);

以上代码运行后，控制台的输出结果：

<br>

Observer A get value: 3

Observer A complete!

Observer B get value: 3

Observer B complete!

<br>

<br>

', '1401');
INSERT INTO "news" VALUES ('105982df-6913-43cf-b282-c797b305c071', 'Java中判断是否为空的方法', '<h2 id="1">1、判断字符串或者对象是否为空</h2>
<p>首先来看一下工具<code>StringUtils</code>的判断方法： </p>
<p>一种是<code>org.apache.commons.lang3</code>包下的； </p>
<p>另一种是<code>org.springframework.util</code>包下的。这两种StringUtils工具类判断对象是否为空是有差距的：</p>
<pre><code class="java language-java">StringUtils.isEmpty(CharSequence cs); //org.apache.commons.lang3包下的
</code></pre>
<p><code>StringUtils</code>类，判断是否为空的方法参数是字符序列类，也就是<code>String</code>类型</p>
<pre><code class="java language-java">StringUtils.isEmpty(Object str); //而org.springframework.util包下的参数是Object
</code></pre>
<p>类，也就是不仅仅能判断<code>String</code>类型，还能判断其他类型，比如<code>Long</code>等类型。</p>
<p>从上面的例子可以看出第二种的<code>StringUtils</code>类更实用。</p>
<p>下面来看一下<code>org.apache.commons.lang3的StringUtils.isEmpty(CharSequence cs)</code>源码：</p>
<pre><code class="java language-java">public static boolean isEmpty(final CharSequence cs) {
        return cs == null || cs.length() == 0;
}
</code></pre>
<p>接下来是<code>org.springframework.util的StringUtils.isEmpty(Object str)</code>源码：</p>
<pre><code class="java language-java">public static boolean isEmpty(Object str) {
        return (str == null || "".equals(str));
}
</code></pre>
<p>基本上判断对象是否为空，<code>StringUtils.isEmpty(Object str)</code>这个方法都能搞定。</p>
<h2 id="2">2、判断数组是否为空</h2>
<pre><code class="java language-java">list.isEmpty(); //返回boolean类型。
</code></pre>
<h2 id="3">3、判断集合是否为空</h2>
<h4 id="1-1">例1: 判断集合是否为空:</h4>
<pre><code class="java language-java">CollectionUtils.isEmpty(null): true
CollectionUtils.isEmpty(new ArrayList()): true
CollectionUtils.isEmpty({a,b}): false
</code></pre>
<h4 id="2-1">例2：判断集合是否不为空:</h4>
<pre><code class="java language-java">CollectionUtils.isNotEmpty(null): false
CollectionUtils.isNotEmpty(new ArrayList()): false
CollectionUtils.isNotEmpty({a,b}): true
</code></pre>
<h4 id="2-2">2个集合间的操作：</h4>
<p>集合<code>a: {1,2,3,3,4,5}</code>
集合<code>b: {3,4,4,5,6,7}</code></p>
<pre><code class="java language-java">CollectionUtils.union(a, b)(并集): {1,2,3,3,4,4,5,6,7}
CollectionUtils.intersection(a, b)(交集): {3,4,5}
CollectionUtils.disjunction(a, b)(交集的补集): {1,2,3,4,6,7}
CollectionUtils.disjunction(b, a)(交集的补集): {1,2,3,4,6,7}
CollectionUtils.subtract(a, b)(A与B的差): {1,2,3}
CollectionUtils.subtract(b, a)(B与A的差): {4,6,7}
</code></pre>', '2018-12-02 00:12:43.839873', 'zw', 'b987d2c9-cc22-435b-930b-a002ec11825d', '4', null, '', null, '0', '', '1105', 'StringUtils.isEmpty(str)', 'isEmpty,判断是否为空', 'java-isEmpty', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '转载', '##1、判断字符串或者对象是否为空

首先来看一下工具`StringUtils`的判断方法： 

一种是`org.apache.commons.lang3`包下的； 

另一种是`org.springframework.util`包下的。这两种StringUtils工具类判断对象是否为空是有差距的：

```java
StringUtils.isEmpty(CharSequence cs); //org.apache.commons.lang3包下的
```

`StringUtils`类，判断是否为空的方法参数是字符序列类，也就是`String`类型

```java
StringUtils.isEmpty(Object str); //而org.springframework.util包下的参数是Object
```

类，也就是不仅仅能判断`String`类型，还能判断其他类型，比如`Long`等类型。
 

从上面的例子可以看出第二种的`StringUtils`类更实用。

下面来看一下`org.apache.commons.lang3的StringUtils.isEmpty(CharSequence cs)`源码：

```java
public static boolean isEmpty(final CharSequence cs) {
        return cs == null || cs.length() == 0;
}
```

接下来是`org.springframework.util的StringUtils.isEmpty(Object str)`源码：

```java
public static boolean isEmpty(Object str) {
        return (str == null || "".equals(str));
}
```

基本上判断对象是否为空，`StringUtils.isEmpty(Object str)`这个方法都能搞定。

##2、判断数组是否为空

```java
list.isEmpty(); //返回boolean类型。
```

##3、判断集合是否为空
####例1: 判断集合是否为空:

```java
CollectionUtils.isEmpty(null): true
CollectionUtils.isEmpty(new ArrayList()): true
CollectionUtils.isEmpty({a,b}): false
```

####例2：判断集合是否不为空:

```java
CollectionUtils.isNotEmpty(null): false
CollectionUtils.isNotEmpty(new ArrayList()): false
CollectionUtils.isNotEmpty({a,b}): true
```

####2个集合间的操作： 
集合`a: {1,2,3,3,4,5}`
集合`b: {3,4,4,5,6,7}`

```java
CollectionUtils.union(a, b)(并集): {1,2,3,3,4,4,5,6,7}
CollectionUtils.intersection(a, b)(交集): {3,4,5}
CollectionUtils.disjunction(a, b)(交集的补集): {1,2,3,4,6,7}
CollectionUtils.disjunction(b, a)(交集的补集): {1,2,3,4,6,7}
CollectionUtils.subtract(a, b)(A与B的差): {1,2,3}
CollectionUtils.subtract(b, a)(B与A的差): {4,6,7}
```
', '1402');
INSERT INTO "news" VALUES ('5ef13a49-23cb-4676-8bc6-33348ab073da', 'Angular2 Directive', '<h2><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">自定义属性指令</span></span></span></span></span></span></span></span></h2><p><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">指令功能描述：该指令用于在用户点击宿主元素时，根据输入的背景颜色，更新宿主元素的背景颜色宿主元素的默认颜色是黄色。</span></span><br/></span></span></p><p><strong><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">1.指令实现</span></span></strong><br/></p><pre>import&nbsp;{Directive,&nbsp;Input,&nbsp;ElementRef,&nbsp;Renderer,&nbsp;HostListener}&nbsp;from&nbsp;&quot;@angular/core&quot;;@Directive({
&nbsp;&nbsp;selector:&nbsp;&#39;[exeBackground]&#39;})export&nbsp;class&nbsp;ExeBackgroundDirective&nbsp;{
&nbsp;&nbsp;private&nbsp;_defaultColor&nbsp;=&nbsp;&#39;yellow&#39;;
&nbsp;&nbsp;@Input(&#39;exeBackground&#39;)
&nbsp;&nbsp;backgroundColor:&nbsp;string;&nbsp;//&nbsp;输入属性，用于设置元素的背景颜色
&nbsp;&nbsp;constructor(private&nbsp;elementRef:&nbsp;ElementRef,&nbsp;private&nbsp;renderer:&nbsp;Renderer)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;this.setStyle(this._defaultColor);
&nbsp;&nbsp;}
&nbsp;&nbsp;@HostListener(&#39;click&#39;)
&nbsp;&nbsp;onClick()&nbsp;{&nbsp;//&nbsp;监听宿主元素的点击事件，设置元素背景色
&nbsp;&nbsp;&nbsp;&nbsp;this.setStyle(this.backgroundColor&nbsp;||&nbsp;this._defaultColor);
&nbsp;&nbsp;}
&nbsp;&nbsp;private&nbsp;setStyle(color:&nbsp;string)&nbsp;{&nbsp;//&nbsp;调用renderer对象提供的API设置元素的背景颜色
&nbsp;&nbsp;&nbsp;&nbsp;this.renderer.setElementStyle(this.elementRef.nativeElement,&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#39;backgroundColor&#39;,&nbsp;color);
&nbsp;&nbsp;}}</pre><p><strong><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">2.指令应用：</span></span></strong><br/></p><pre>import&nbsp;{&nbsp;Component&nbsp;}&nbsp;from&nbsp;&#39;@angular/core&#39;;@Component({
&nbsp;&nbsp;selector:&nbsp;&#39;my-app&#39;,&nbsp;
&nbsp;&nbsp;template:&nbsp;`&lt;h1&nbsp;[exeBackground]=&quot;&#39;red&#39;&quot;&gt;Hello&nbsp;{{name}}&lt;/h1&gt;`,})export&nbsp;class&nbsp;AppComponent&nbsp;&nbsp;{
&nbsp;&nbsp;name&nbsp;=&nbsp;&#39;Angular&#39;;&nbsp;}</pre><p><br/></p><h3><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">自定义结构指令</span></span></h3><p>指令功能描述：该指令实现&nbsp;<code>ngIf</code>&nbsp;指令相反的效果，当指令的输入条件为&nbsp;<code>Falsy</code>&nbsp;值时，显示DOM元素。<br/></p><p><strong><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">1.指令实现</span></span></strong></p><pre>@Directive({
&nbsp;&nbsp;selector:&nbsp;&#39;[exeUnless]&#39;})export&nbsp;class&nbsp;UnlessDirective&nbsp;{
&nbsp;&nbsp;
&nbsp;&nbsp;@Input(&#39;exeUnless&#39;)
&nbsp;&nbsp;set&nbsp;condition(newCondition:&nbsp;boolean)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!newCondition)&nbsp;{&nbsp;//&nbsp;创建模板对应的内嵌视图
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.viewContainer.createEmbeddedView(this.templateRef);
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.viewContainer.clear();
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;}
&nbsp;&nbsp;constructor(private&nbsp;templateRef:&nbsp;TemplateRef&lt;any&gt;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;viewContainer:&nbsp;ViewContainerRef)&nbsp;{
&nbsp;&nbsp;}}</pre><p><strong><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">2.指令应用</span></span></strong><br/></p><pre>import&nbsp;{&nbsp;Component&nbsp;}&nbsp;from&nbsp;&#39;@angular/core&#39;;@Component({
&nbsp;&nbsp;selector:&nbsp;&#39;my-app&#39;,
&nbsp;&nbsp;template:&nbsp;`&lt;h1&nbsp;[exeBackground]=&quot;&#39;red&#39;&quot;&nbsp;*exeUnless=&quot;condition&quot;&gt;Hello&nbsp;{{name}}&lt;/h1&gt;`,&nbsp;})export&nbsp;class&nbsp;AppComponent&nbsp;&nbsp;{
&nbsp;&nbsp;name&nbsp;=&nbsp;&#39;Angular&#39;;&nbsp;
&nbsp;&nbsp;condition:&nbsp;boolean&nbsp;=&nbsp;false;}</pre><p><br/></p><h3>我有话说</h3><h3><p>1.自定义属性指令中的&nbsp;<code>ElementRef</code>&nbsp;与&nbsp;<code>Renderer</code>&nbsp;的作用</p><p>为了能够支持跨平台，Angular 2 通过抽象层封装了不同平台的差异，统一了 API 接口。如定义了抽象类 Renderer 、抽象类 RootRenderer 等。此外还定义了以下引用类型：ElementRef、TemplateRef、ViewRef 、ComponentRef 和 ViewContainerRef 等。</p><p>详细内容请参考 -&nbsp;<a href="https://segmentfault.com/a/1190000008653690">Angular 2 ElementRef</a></p><p>2.自定义结构指令中的&nbsp;<code>TemplateRef</code>&nbsp;与&nbsp;<code>ViewContainerRef</code>&nbsp;的作用</p><p>TemplateRef：用于表示内嵌的 template 模板元素，通过 TemplateRef 实例，我们可以方便创建内嵌视图(Embedded Views)，且可以轻松地访问到通过 ElementRef 封装后的 nativeElement。需要注意的是组件视图中的 template 模板元素，经过渲染后会被替换成 comment 元素。</p><p>ViewContainerRef：用于表示一个视图容器，可添加一个或多个视图。通ViewContainerRef 实例，我们可以基于 TemplateRef 实例创建内嵌视图，并能指定内嵌视图的插入位置，也可以方便对视图容器中已有的视图进行管理。简而言之，ViewContainerRef 的主要作用是创建和管理内嵌视图或组件视图。</p><p>详细内容请参考 -&nbsp;<a href="https://segmentfault.com/a/1190000008672478" target="_blank">Angular 2 TemplateRef &amp; ViewContainerRef</a></p><p>3.Angular 2 中指令与组件的关系</p><p>组件继承于指令，并扩展了与 UI 视图相关的属性，如 template、styles、animations、encapsulation 等。</p><p><br/></p><p>详细内容请参考 -&nbsp;<a href="https://segmentfault.com/a/1190000008716308">Angular 2 Directive Lifecycle</a></p><p><img src="https://segmentfault.com/img/bVKJFs?w=300&h=280" alt="图片描述" title="图片描述"/></p></h3><h3>总结</h3><h3><p>本文主要介绍了 Angular 2 中的指令，通过具体示例介绍了 Angular 2 常见内建指令的使用方式和区别。最终，我们通过自定义属性指令和自定义结构指令两个示例，展示了如何开发自定义指令。</p></h3><p><br/></p><p><br/></p><p><br/></p><p><br/></p>', '2018-11-16 11:33:30.42234', 'zw', '910fb016-fa5e-4302-be8f-1f9016007d28', '4', null, '', null, '1', '', '1102', 'o', 'Angular2,Directive', 'Angular2-Directive', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '原创', '## <span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">自定义属性指令</span></span></span></span></span></span></span></span>



<span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">指令功能描述：该指令用于在用户点击宿主元素时，根据输入的背景颜色，更新宿主元素的背景颜色宿主元素的默认颜色是黄色。</span></span><br></span></span>

**<span style="vertical-align: inherit;"><span style="vertical-align: inherit;">1.指令实现</span></span>

**<br>

<pre>import&nbsp;{Directive,&nbsp;Input,&nbsp;ElementRef,&nbsp;Renderer,&nbsp;HostListener}&nbsp;from&nbsp;"@angular/core";@Directive({
&nbsp;&nbsp;selector:&nbsp;''[exeBackground]''})export&nbsp;class&nbsp;ExeBackgroundDirective&nbsp;{
&nbsp;&nbsp;private&nbsp;_defaultColor&nbsp;=&nbsp;''yellow'';
&nbsp;&nbsp;@Input(''exeBackground'')
&nbsp;&nbsp;backgroundColor:&nbsp;string;&nbsp;//&nbsp;输入属性，用于设置元素的背景颜色
&nbsp;&nbsp;constructor(private&nbsp;elementRef:&nbsp;ElementRef,&nbsp;private&nbsp;renderer:&nbsp;Renderer)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;this.setStyle(this._defaultColor);
&nbsp;&nbsp;}
&nbsp;&nbsp;@HostListener(''click'')
&nbsp;&nbsp;onClick()&nbsp;{&nbsp;//&nbsp;监听宿主元素的点击事件，设置元素背景色
&nbsp;&nbsp;&nbsp;&nbsp;this.setStyle(this.backgroundColor&nbsp;||&nbsp;this._defaultColor);
&nbsp;&nbsp;}
&nbsp;&nbsp;private&nbsp;setStyle(color:&nbsp;string)&nbsp;{&nbsp;//&nbsp;调用renderer对象提供的API设置元素的背景颜色
&nbsp;&nbsp;&nbsp;&nbsp;this.renderer.setElementStyle(this.elementRef.nativeElement,&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;''backgroundColor'',&nbsp;color);
&nbsp;&nbsp;}}</pre>

**<span style="vertical-align: inherit;"><span style="vertical-align: inherit;">2.指令应用：</span></span>

**<br>

<pre>import&nbsp;{&nbsp;Component&nbsp;}&nbsp;from&nbsp;''@angular/core'';@Component({
&nbsp;&nbsp;selector:&nbsp;''my-app'',&nbsp;
&nbsp;&nbsp;template:&nbsp;`&lt;h1&nbsp;[exeBackground]="''red''"&gt;Hello&nbsp;{{name}}&lt;/h1&gt;`,})export&nbsp;class&nbsp;AppComponent&nbsp;&nbsp;{
&nbsp;&nbsp;name&nbsp;=&nbsp;''Angular'';&nbsp;}</pre>

<br>

### <span style="vertical-align: inherit;"><span style="vertical-align: inherit;">自定义结构指令</span></span>



指令功能描述：该指令实现 `ngIf` 指令相反的效果，当指令的输入条件为 `Falsy` 值时，显示DOM元素。<br>

**<span style="vertical-align: inherit;"><span style="vertical-align: inherit;">1.指令实现</span></span>

**

<pre>@Directive({
&nbsp;&nbsp;selector:&nbsp;''[exeUnless]''})export&nbsp;class&nbsp;UnlessDirective&nbsp;{
&nbsp;&nbsp;
&nbsp;&nbsp;@Input(''exeUnless'')
&nbsp;&nbsp;set&nbsp;condition(newCondition:&nbsp;boolean)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!newCondition)&nbsp;{&nbsp;//&nbsp;创建模板对应的内嵌视图
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.viewContainer.createEmbeddedView(this.templateRef);
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.viewContainer.clear();
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;}
&nbsp;&nbsp;constructor(private&nbsp;templateRef:&nbsp;TemplateRef&lt;any&gt;,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;viewContainer:&nbsp;ViewContainerRef)&nbsp;{
&nbsp;&nbsp;}}</pre>

**<span style="vertical-align: inherit;"><span style="vertical-align: inherit;">2.指令应用</span></span>

**<br>

<pre>import&nbsp;{&nbsp;Component&nbsp;}&nbsp;from&nbsp;''@angular/core'';@Component({
&nbsp;&nbsp;selector:&nbsp;''my-app'',
&nbsp;&nbsp;template:&nbsp;`&lt;h1&nbsp;[exeBackground]="''red''"&nbsp;*exeUnless="condition"&gt;Hello&nbsp;{{name}}&lt;/h1&gt;`,&nbsp;})export&nbsp;class&nbsp;AppComponent&nbsp;&nbsp;{
&nbsp;&nbsp;name&nbsp;=&nbsp;''Angular'';&nbsp;
&nbsp;&nbsp;condition:&nbsp;boolean&nbsp;=&nbsp;false;}</pre>

<br>

### 我有话说

### 1\.自定义属性指令中的 `ElementRef` 与 `Renderer` 的作用

为了能够支持跨平台，Angular 2 通过抽象层封装了不同平台的差异，统一了 API 接口。如定义了抽象类 Renderer 、抽象类 RootRenderer 等。此外还定义了以下引用类型：ElementRef、TemplateRef、ViewRef 、ComponentRef 和 ViewContainerRef 等。

详细内容请参考 - [Angular 2 ElementRef](<https://segmentfault.com/a/1190000008653690>)

2\.自定义结构指令中的 `TemplateRef` 与 `ViewContainerRef` 的作用

TemplateRef：用于表示内嵌的 template 模板元素，通过 TemplateRef 实例，我们可以方便创建内嵌视图(Embedded Views)，且可以轻松地访问到通过 ElementRef 封装后的 nativeElement。需要注意的是组件视图中的 template 模板元素，经过渲染后会被替换成 comment 元素。

ViewContainerRef：用于表示一个视图容器，可添加一个或多个视图。通ViewContainerRef 实例，我们可以基于 TemplateRef 实例创建内嵌视图，并能指定内嵌视图的插入位置，也可以方便对视图容器中已有的视图进行管理。简而言之，ViewContainerRef 的主要作用是创建和管理内嵌视图或组件视图。

详细内容请参考 - [Angular 2 TemplateRef & ViewContainerRef](<https://segmentfault.com/a/1190000008672478>)

3\.Angular 2 中指令与组件的关系

组件继承于指令，并扩展了与 UI 视图相关的属性，如 template、styles、animations、encapsulation 等。

<br>

详细内容请参考 - [Angular 2 Directive Lifecycle](<https://segmentfault.com/a/1190000008716308>)

![图片描述](<https://segmentfault.com/img/bVKJFs?w=300&h=280> "图片描述")



### 总结

### 本文主要介绍了 Angular 2 中的指令，通过具体示例介绍了 Angular 2 常见内建指令的使用方式和区别。最终，我们通过自定义属性指令和自定义结构指令两个示例，展示了如何开发自定义指令。



<br>

<br>

<br>

<br>

', '1401');
INSERT INTO "news" VALUES ('8602dde7-393d-4953-bb93-89c49d4dcef3', 'angular4 以Ref 结尾的一般具体什么共同特性？', '<p><br/></p><p>angular中以<code>Ref</code>比较常用的有<code>ApplicationRef</code>,&nbsp;<code>ComponentRef</code>,&nbsp;<code>ElementRef</code>,&nbsp;<code>TemplateRef</code>,&nbsp;<code>ViewContainerRef</code>等。<br/>你要问共同特性，大体上说，就是angular系统级别的工具类，都以<code>Ref</code>结尾。<br/>当component被初始化后，angular帮你封装好了一些类比如<code>ComponentRef</code>,&nbsp;<code>ElementRef</code>,&nbsp;<code>TemplateRef</code>, 然后希望你通过这些类来操作Component, 操作DOM等。<br/>具体点说的话，这几个类没有什么共同特性，每个类处理具体的feature不同。</p><p>sd</p><p><br/>像<code>ComponentRef</code>,&nbsp;<code>ElementRef</code>这两个类的定义，就完全不同。<br/></p><pre>class&nbsp;ElementRef&nbsp;{
&nbsp;&nbsp;constructor(nativeElement:&nbsp;any)
&nbsp;&nbsp;nativeElement:&nbsp;any
}

class&nbsp;ComponentRef&lt;C&gt;&nbsp;{
&nbsp;&nbsp;get&nbsp;location:&nbsp;ElementRef
&nbsp;&nbsp;get&nbsp;injector:&nbsp;Injector
&nbsp;&nbsp;get&nbsp;instance:&nbsp;C
&nbsp;&nbsp;get&nbsp;hostView:&nbsp;ViewRef
&nbsp;&nbsp;get&nbsp;changeDetectorRef:&nbsp;ChangeDetectorRef
&nbsp;&nbsp;get&nbsp;componentType:&nbsp;Type&lt;any&gt;
&nbsp;&nbsp;destroy():&nbsp;void
&nbsp;&nbsp;onDestroy(callback:&nbsp;Function):&nbsp;void
}</pre><p><br/></p>', '2018-11-16 17:31:26.304103', 'zw', '910fb016-fa5e-4302-be8f-1f9016007d28', '0', null, '', null, '0', '', '1102', 'angular中以Ref比较常用的有ApplicationRef, ComponentRef, ElementRef, TemplateRef, ViewContainerRef等', 'angular2,ref', 'angular2-Ref', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '原创', 'ew', '1401');
INSERT INTO "news" VALUES ('712b6bfd-190f-4f8f-8005-19a309a0ba35', 'angular2 Provider', '<p>依赖注入(DI) 是 Angular 2 的核心，在深入了解DI的工作原理之前，我们必须先搞清楚 Provider 的概念。</p><p>在 Angular 2 中我们使用 Provider 来描述与 Token 关联的依赖对象的创建方式。Angular 2 中依赖对象的创建方式有四种，它们分别是：</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>useClass</p></li><li><p>useValue</p></li><li><p>useExisting</p></li><li><p>useFactory</p></li></ul><p>useClass</p><pre class="brush:js;toolbar:false">@Injectable()
export&nbsp;class&nbsp;ApiService&nbsp;{
&nbsp;&nbsp;&nbsp;constructor(
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;http:&nbsp;Http,&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;loadingCtrl:&nbsp;LoadingController)&nbsp;{
&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;...
}

@NgModule({
&nbsp;&nbsp;...
&nbsp;&nbsp;providers:&nbsp;[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{&nbsp;provide:&nbsp;ApiService,&nbsp;useClass:&nbsp;ApiService&nbsp;}&nbsp;//&nbsp;可使用简洁的语法，即直接使用ApiService
&nbsp;&nbsp;]
})
export&nbsp;class&nbsp;CoreModule&nbsp;{&nbsp;}</pre><p>useValue</p><pre class="brush:js;toolbar:false">{&nbsp;provide:&nbsp;&#39;API_URL&#39;,&nbsp;useValue:&nbsp;&#39;http://my.api.com/v1&#39;&nbsp;}</pre><p>useExisting</p><pre class="brush:js;toolbar:false">{&nbsp;provide:&nbsp;&#39;ApiServiceAlias&#39;,&nbsp;useExisting:&nbsp;ApiService&nbsp;}</pre><p>useFactory</p><pre class="brush:js;toolbar:false">export&nbsp;function&nbsp;configFactory(config:&nbsp;AppConfig)&nbsp;{
return&nbsp;()&nbsp;=&gt;&nbsp;config.load();
}
@NgModule({
...
providers:&nbsp;[
{&nbsp;provide:&nbsp;APP_INITIALIZER,&nbsp;useFactory:&nbsp;configFactory,
deps:&nbsp;[AppConfig],&nbsp;multi:&nbsp;true&nbsp;}
]
})
export&nbsp;class&nbsp;CoreModule&nbsp;{&nbsp;}</pre><p>使用 Provider 的正确姿势</p><p>1.创建 Token</p><p><br/></p><p>Token 的作用是用来标识依赖对象，Token值可能是 Type、InjectionToken、OpaqueToken 类的实例或字符串。通常不推荐使用字符串，因为如果使用字符串存在命名冲突的可能性比较高。在 Angular 4.x 以前的版本我们一般使用 OpaqueToken 来创建 Token，而在 Angular 4.x 以上的版本版本，推荐使用 InjectionToken 来创建 Token 。详细的内容可以参考， 如何解决 Angular 2 中 Provider 命名冲突。</p><p><br/></p><p>2.根据实际需求选择依赖对象的创建方式，如 useClass 、useValue、useExisting、useFactory</p><p><br/></p><p>3.在 NgModule 或 Component 中注册 providers</p><p><br/></p><p>4.使用构造注入的方式，注入与 Token 关联的依赖对象</p><p><br/></p><p>/**</p><p>* 封装Http服务，如在每个Http的请求头中添加token，类似于Ng1.x中的拦截器</p><p>*/</p><p>@Injectable()</p><p>export class ApiService {</p><p>constructor(</p><p>// 注入Angular 2 中的Http服务，与Ng1.x的区别：</p><p>// 在Ng1.x中调用Http服务后，返回Promise对象</p><p>// 在Ng2.x中调用Http服务后，返回Observable对象</p><p>public http: Http) {</p><p>}</p><p>...</p><p>}</p><p><br/></p><p>/**</p><p>* AppModule</p><p>*/</p><p>@NgModule({</p><p>...</p><p>providers: [</p><p>{ provide: ApiService, useClass: ApiService } // 可使用简洁的语法，即直接使用ApiService</p><p>]</p><p>})</p><p>export class AppModule { }</p><p><br/></p><p>/**</p><p>* 系统首页</p><p>*/</p><p>@Component({</p><p>selector: &#39;page-home&#39;,</p><p>templateUrl: &#39;home.html&#39;</p><p>})</p><p>export class HomePage {</p><p>constructor(</p><p>public apiService: ApiService // 使用构造注入的方式，注入ApiService的实例对象</p><p>) { }</p><p>ngOnInit(): void {</p><p>this.apiService.get(HOME_URL) // 获取首页相关的数据</p><p>.map(res =&gt; res.json()) // 返回的res对象是Response类型的实例</p><p>.subscribe(result =&gt; {</p><p>...</p><p>})</p><p>}</p><p>}</p><p>我有话说</p><p>1.当DI解析 Providers 时，都会对提供的每个 provider 进行规范化处理，即转换成标准的形式。</p><p><br/></p><p>function _normalizeProviders(providers: Provider[], res: Provider[]): Provider[] {</p><p>providers.forEach(b =&gt; {</p><p>if (b instanceof Type) { // 支持简洁的语法，转换为标准格式</p><p>res.push({provide: b, useClass: b});</p><p>} else if (b &amp;&amp; typeof b == &#39;object&#39; &amp;&amp; (b as any).provide !== undefined) {</p><p>res.push(b as NormalizedProvider);</p><p>} else if (b instanceof Array) {</p><p>_normalizeProviders(b, res); // 如果是数组，进行递归处理</p><p>} else {</p><p>throw invalidProviderError(b);</p><p>}</p><p>});</p><p>return res;</p><p>}</p><p>2.创建 Token 时为了避免命名冲突，尽量避免使用字符串作为Token。</p><p><br/></p><p>3.若要创建模块内通用的依赖对象，需要在 NgModule 中注册相关的 provider，若在每个组件中，都有唯一的依赖对象，就需要在 Component 中注册相关的 provider。</p><p><br/></p><p>4.multi providers 的具体作用，具体请参考 - Angular2 Multi Providers</p><p><br/></p><p>5.Provider 是用来描述与 Token 关联的依赖对象的创建方式。当我们使用 Token 向 DI 系统获取与之相关连的依赖对象时，DI 会根据已设置的创建方式，自动的创建依赖对象并返回给使用者。</p><p><br/></p><p>Provider接口</p><p><br/></p><p>export interface ClassProvider {</p><p>// 用于设置与依赖对象关联的Token值，Token值可能是Type、InjectionToken、OpaqueToken的实例或字符串</p><p>provide: any;</p><p>useClass: Type&lt;<span style="color: #e06c75;">any</span>&gt;;</p><p>// 用于标识是否multiple providers，若是multiple类型，则返回与Token关联的依赖对象列表</p><p>multi?: boolean;</p><p>}</p><p>export interface ValueProvider {</p><p>provide: any;</p><p>useValue: any;</p><p>multi?: boolean;</p><p>}</p><p>export interface ExistingProvider {</p><p>provide: any;</p><p>useExisting: any;</p><p>multi?: boolean;</p><p>}</p><p>export interface FactoryProvider {</p><p>provide: any;</p><p>useFactory: Function;</p><p>deps?: any[]; // 用于设置工厂函数的依赖对象</p><p>multi?: boolean;</p><p>}</p><p>总结</p><p>在文章的最后，想举一个现实生活中的例子，帮助初学者更好地理解 Angular 2 DI 和 Provider。</p><p><br/></p><p>Provider 中的 token 可以理解为菜名，useClass、useValue可以理解为菜的烹饪方式，而依赖对象就是我们所点的菜，而 DI 系统就是我们的厨师了。如果没有厨师，我们就得关心煮这道菜需要哪些原材料，怎么煮菜，重要的是还得自己煮，可想而知多麻烦。而有了厨师(DI)，我们只要在菜谱上点菜，必要时备注一下烹饪方式，不过多久香喷喷的菜就上桌鸟~~~。</p><p><br/><br/></p><p><br/></p>', '2018-11-21 20:00:18.699179', 'zw', '910fb016-fa5e-4302-be8f-1f9016007d28', '2', null, '', null, '1', '', '1102', '依赖注入(DI) 是 Angular 2 的核心，在深入了解DI的工作原理之前，我们必须先搞清楚 Provider 的概念。', 'angular2,provider', 'angular2-provider', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '转载', 'we', '1401');
INSERT INTO "news" VALUES ('b3a865b0-e209-4d17-8edb-77d25ac79a97', 'TypeScript类、接口、继承', '<p>TS引入了 Class（类）这个概念，作为对象的模板。通过<span style="color: rgb(192, 0, 0); background-color: rgb(253, 234, 218);"> class </span>关键字，可以定义类。&nbsp;</p><p>基本上，TS的 <span style="color: rgb(192, 0, 0); background-color: rgb(253, 234, 218);">class </span>可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的<span style="color: rgb(192, 0, 0); background-color: rgb(253, 234, 218);"> class </span>写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。</p><h2>类<br/></h2><p style="text-align: left; text-indent: 0em;">定义一个类</p><pre class="brush:js;toolbar:false">class&nbsp;Point&nbsp;{
&nbsp;&nbsp;constructor(x,&nbsp;y)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;this.x&nbsp;=&nbsp;x;
&nbsp;&nbsp;&nbsp;&nbsp;this.y&nbsp;=&nbsp;y;
&nbsp;&nbsp;}
&nbsp;&nbsp;toString()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;&#39;(&#39;&nbsp;+&nbsp;this.x&nbsp;+&nbsp;&#39;,&nbsp;&#39;&nbsp;+&nbsp;this.y&nbsp;+&nbsp;&#39;)&#39;;
&nbsp;&nbsp;}
}</pre><p>使用这个类</p><pre class="brush:js;toolbar:false">let&nbsp;p=new&nbsp;Point(1,2);</pre><h6>需要注意的地方有以下几点：</h6><p>&nbsp; &nbsp; &nbsp; &nbsp;①类和模块内部默认采用严格模式，不需要使用 use strict 指定运行模式。</p><p>&nbsp; &nbsp; &nbsp; &nbsp;② constructor 方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加，这一点与Java的类一致。</p><p>&nbsp; &nbsp; &nbsp; &nbsp;③必须使用 new 命令来调用 class ，否则将会报错。</p><p>&nbsp; &nbsp; &nbsp; &nbsp;④类不存在变量提升，只有先声明类，才能使用类。</p><p>&nbsp; &nbsp; &nbsp; &nbsp;⑤类的方法内部如果含有 this ，它默认指向类的实例。但是如果我们单独将其方法提取出来， this 值可能会指向当前运行的环境。为了防止这种事情的发生，我们可以使用箭头函数（箭头函数的 this 值指向初始化的函数）。</p><h5>public、private、protected和readonly</h5><p>public、private、protected和readonly都是类的成员（属性）修饰符&nbsp;</p><h5>public</h5><p>在TS里，成员都默认为public。被public修饰的属性，我们在类的内外都可以自由访问到这些被定义的属性。</p><pre class="brush:js;toolbar:false">class&nbsp;Animal&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;constructor(theName:&nbsp;string)&nbsp;{&nbsp;this.name&nbsp;=&nbsp;theName;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;new&nbsp;Animal(&quot;Cat&quot;).name;//Cat</pre><h5>private</h5><p>当成员被标记成private时，它就不能在声明它的类的外部访问。</p><pre class="brush:js;toolbar:false">class&nbsp;Animal&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;constructor(theName:&nbsp;string)&nbsp;{&nbsp;this.name&nbsp;=&nbsp;theName;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;new&nbsp;Animal(&quot;Cat&quot;).name;//Error!:&nbsp;Property&nbsp;&#39;name&#39;&nbsp;is&nbsp;private&nbsp;and&nbsp;only&nbsp;accessible&nbsp;within&nbsp;class&nbsp;&#39;Animal&#39;.</pre><p>TS使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。</p><p>这里的比较并非我们说得 == 或者 === 的比较，而是对期望值（结构）的比较。</p><pre class="brush:js;toolbar:false">class&nbsp;Animal1&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;&nbsp;constructor(theName:&nbsp;string)&nbsp;{&nbsp;this.name&nbsp;=&nbsp;theName;&nbsp;}
}
class&nbsp;Animal2&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;constructor(theName:&nbsp;string)&nbsp;{&nbsp;this.name&nbsp;=&nbsp;theName;&nbsp;}
}
//这样的写法是不会出错的
let&nbsp;a:Animal1=new&nbsp;Animal2(&quot;cat&quot;);</pre><p>但是被 private 或 protected 修饰的成员类型不一样。如果其中一个类型里包含一个private (或protected)成员，那么当另外一个类型中也存在这样一个private (或protected)成员， 并且它们都是来自同一处声明时，那么这两个类型是兼容的，否则是不兼容的。</p><pre class="brush:js;toolbar:false">class&nbsp;Animal1&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;&nbsp;constructor(theName:&nbsp;string)&nbsp;{&nbsp;this.name&nbsp;=&nbsp;theName;&nbsp;}
}
class&nbsp;Animal2&nbsp;&nbsp;extends&nbsp;Animal1{
&nbsp;&nbsp;&nbsp;&nbsp;constructor(theName:&nbsp;string)&nbsp;{super(name);&nbsp;}
}
class&nbsp;Animal3&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;&nbsp;constructor(theName:&nbsp;string)&nbsp;{&nbsp;this.name&nbsp;=&nbsp;theName;&nbsp;}
}
let&nbsp;animal1:&nbsp;Animal1&nbsp;=&nbsp;new&nbsp;Animal2(&quot;cat&quot;);//没问题。Animal1和Animal2的private修饰的成员变量name都来自于Animal1（都是来自同一处声明）。
let&nbsp;animal3:&nbsp;Animal1&nbsp;=&nbsp;new&nbsp;Animal3(&quot;cat&quot;);//ERROR:Type&nbsp;&#39;Animal3&#39;&nbsp;is&nbsp;not&nbsp;assignable&nbsp;to&nbsp;type&nbsp;&#39;Animal3&#39;.</pre><h5><span style="font-size: 18px;"><strong>protected&nbsp;</strong></span></h5><p>protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected 成员在派生类中仍然可以访问。&nbsp;</p><p>使用 private 修饰的父类成员，派生类无法访问。</p><pre class="brush:js;toolbar:false">class&nbsp;Person&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;&nbsp;constructor(name:&nbsp;string)&nbsp;{&nbsp;this.name&nbsp;=&nbsp;name;&nbsp;}
}
class&nbsp;Employee&nbsp;extends&nbsp;Person&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;constructor(name:&nbsp;string)&nbsp;{&nbsp;super(name)}
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;sayName()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;this.name;//ERROR!:&nbsp;Property&nbsp;&#39;name&#39;&nbsp;is&nbsp;private&nbsp;and&nbsp;only&nbsp;accessible&nbsp;within&nbsp;class&nbsp;&#39;Person&#39;.
&nbsp;&nbsp;&nbsp;&nbsp;}
}
let&nbsp;xiaoming&nbsp;=&nbsp;new&nbsp;Employee(&quot;xiaoming&quot;);
console.log(xiaoming.sayName());</pre><p>使用protected 修饰的父类成员，在派生类中仍然可以访问</p><pre class="brush:js;toolbar:false">class&nbsp;Person&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;protected&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;&nbsp;constructor(name:&nbsp;string)&nbsp;{&nbsp;this.name&nbsp;=&nbsp;name;&nbsp;}
}
class&nbsp;Employee&nbsp;extends&nbsp;Person&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;constructor(name:&nbsp;string)&nbsp;{&nbsp;super(name)}
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;sayName()&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;this.name;
&nbsp;&nbsp;&nbsp;&nbsp;}
}
//派生类中仍能继续使用
let&nbsp;xiaoming&nbsp;=&nbsp;new&nbsp;Employee(&quot;xiaoming&quot;);
console.log(xiaoming.sayName());</pre><h5>readonly修饰符</h5><p>readonly 关键字与 public 、 private 和 protected 不一样，它修饰的不是成员的访问权限，而是成员的再赋值权限。&nbsp;</p><p>使用readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。</p><pre class="brush:js;toolbar:false">class&nbsp;Octopus&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;readonly&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;&nbsp;readonly&nbsp;numberOfLegs:&nbsp;number&nbsp;=&nbsp;8;
&nbsp;&nbsp;&nbsp;&nbsp;constructor&nbsp;(theName:&nbsp;string)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name&nbsp;=&nbsp;theName;
&nbsp;&nbsp;&nbsp;&nbsp;}
}
let&nbsp;dad&nbsp;=&nbsp;new&nbsp;Octopus(&quot;Man&nbsp;with&nbsp;the&nbsp;8&nbsp;strong&nbsp;legs&quot;);
dad.name&nbsp;=&nbsp;&quot;Man&nbsp;with&nbsp;the&nbsp;3-piece&nbsp;suit&quot;;&nbsp;//&nbsp;错误!&nbsp;name&nbsp;是只读的.</pre><h5>抽象类</h5><p>抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp;abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。</p><pre class="brush:js;toolbar:false">abstract&nbsp;class&nbsp;Animal&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;abstract&nbsp;makeSound():&nbsp;void;//&nbsp;必须在派生类中实现
&nbsp;&nbsp;&nbsp;&nbsp;move():&nbsp;void&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(&#39;roaming&nbsp;the&nbsp;earch...&#39;);
&nbsp;&nbsp;&nbsp;&nbsp;}
}</pre><h6>注意：&nbsp;</h6><p>&nbsp; &nbsp; &nbsp; &nbsp;①抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp;②抽象方法必须包含abstract关键字并且可以包含访问修饰符。</p><h2>接口</h2><p>在传统的面向对象概念中，一个类可以扩展另一个类，也可以实现一个或多个接口。一个接口可以实现一个或多个接口但是不能扩展另一个类或接口。wiki百科中对 OOP 中接口的定义是：</p><p>在面向对象的语言中，术语 interface 经常被用来定义一个不包含数据和逻辑代码但是用函数签名定义了行为的抽象类型。</p><p>但是对于TS来说，接口更重要的意义是对值所具有的 结构 进行类型检查。&nbsp;</p><p>接口根据属性划分，可以划分成三类，一种是必选属性，另一种是可选属性，还有一种就是只读属性。</p><h5><span style="font-size: 18px;">必选属性</span></h5><p>必选属性就是函数必须要有的属性。</p><pre class="brush:js;toolbar:false">interface&nbsp;PersonVaule{
&nbsp;&nbsp;&nbsp;&nbsp;name:string;
&nbsp;&nbsp;&nbsp;&nbsp;age:number;
}
function&nbsp;Person(person:PersonVaule){
&nbsp;&nbsp;&nbsp;&nbsp;this.name=person.name;
&nbsp;&nbsp;&nbsp;&nbsp;this.age=person.age;
}
//创建实例
var&nbsp;xiaoming=new&nbsp;Person({name:&quot;xiaoming&quot;,age:18})
//类型检查器并不会检查属性的顺序，但是必须要必选属性。
var&nbsp;xiaoming2=new&nbsp;Person({age:18,name:&quot;xiaoming&quot;})//没有问题
var&nbsp;xiaoming3=new&nbsp;Person({name:&quot;xiaoming&quot;})//提示属性缺失:Property&nbsp;&#39;age&#39;&nbsp;is&nbsp;missing&nbsp;in&nbsp;type&nbsp;&#39;{&nbsp;name:&nbsp;string;&nbsp;}&#39;.</pre><h5><span style="font-size: 18px;">可选属性</span></h5><p>接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。</p><p>带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。</p><pre class="brush:js;toolbar:false">interface&nbsp;AnimalVaule{
&nbsp;&nbsp;&nbsp;&nbsp;name?:string;
&nbsp;&nbsp;&nbsp;&nbsp;eat:string;
&nbsp;&nbsp;&nbsp;&nbsp;lifestyle?:string;
}
function&nbsp;Animal(animal:AnimalVaule){
&nbsp;&nbsp;&nbsp;&nbsp;this.name=animal.name;
&nbsp;&nbsp;&nbsp;&nbsp;this.eat=animal.eat;
&nbsp;&nbsp;&nbsp;&nbsp;this.lifestyle=animal.lifestyle;
}
let&nbsp;cat=new&nbsp;Animal({eat:&quot;食肉动物&quot;,lifestyle:&quot;昼伏夜出&quot;});</pre><h6><span style="font-size: 16px;">可选属性好处有二：</span></h6><p>&nbsp; &nbsp; &nbsp; &nbsp;1. 可以对可能存在的属性进行预定义&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp;2. 可以捕获引用了不存在的属性时的错误。</p><p>下面这个例子就出现了错误提示：</p><pre class="brush:js;toolbar:false">let&nbsp;dog=new&nbsp;Animal({eat:&quot;适应性的肉食类动物&quot;,lifestle:&quot;昼行夜伏&quot;})//&#39;lifestle&#39;&nbsp;does&nbsp;not&nbsp;exist&nbsp;in&nbsp;type&nbsp;&#39;AnimalVaule&#39;.</pre><h5><span style="font-size: 18px;">只读属性</span></h5><p>&nbsp;一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用readonly来指定只读属性:</p><pre class="brush:js;toolbar:false">interface&nbsp;Point&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;readonly&nbsp;x:&nbsp;number;
&nbsp;&nbsp;&nbsp;&nbsp;readonly&nbsp;y:&nbsp;number;
}</pre><p>你可以通过赋值一个对象字面量来构造一个Point。 赋值后，x和y再也不能被改变了。</p><pre class="brush:js;toolbar:false">let&nbsp;p1:&nbsp;Point&nbsp;=&nbsp;{&nbsp;x:&nbsp;10,&nbsp;y:&nbsp;20&nbsp;};
p1.x&nbsp;=&nbsp;5;&nbsp;//&nbsp;error!</pre><h5><span style="font-size: 18px;">readonly 和 const&nbsp;</span></h5><p>readonly 和 const 声明的变量或属性都不允许二次修改。这两个属性的使用区别在于是作为变量还是属性：&nbsp;</p><p>做为变量使用的话用const，&nbsp;</p><p>做为属性则使用readonly。</p><p>接口不仅仅能描述对象的属性，还能描述函数类型，可索引类型和类类型。</p><h5><span style="font-size: 18px;">函数类型</span></h5><p>为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。</p><pre class="brush:js;toolbar:false">interface&nbsp;SearchFunc&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;(source:&nbsp;string,&nbsp;subString:&nbsp;string):&nbsp;boolean;
}
let&nbsp;mySearch:SearchFunc=function(src,sub){
&nbsp;&nbsp;&nbsp;&nbsp;let&nbsp;result&nbsp;=&nbsp;src.search(sub);
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;result&nbsp;&gt;&nbsp;-1;
}</pre><h6><span style="font-size: 16px;">注意：&nbsp;</span></h6><p>函数的参数会逐个进行检查，要求对应接口的位置上的参数类型是兼容的，无需名称一致。</p><h5><span style="font-size: 18px;">可索引类型</span></h5><p>与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap[&quot;daniel&quot;]。可索引类型具有一个 索引签名 ，它描述了对象索引的类型，还有相应的索引返回值类型。</p><p>索引签名共有两种形式：字符串和数字。</p><h6><span style="font-size: 16px;">数字索引签名：</span></h6><pre class="brush:js;toolbar:false">interface&nbsp;NN&nbsp;{[index:&nbsp;number]:&nbsp;number;}
let&nbsp;nn:&nbsp;NN&nbsp;=&nbsp;[1,&nbsp;2];
interface&nbsp;NS&nbsp;{[index:&nbsp;number]:&nbsp;string;}
let&nbsp;ns:&nbsp;NS&nbsp;=&nbsp;[&quot;1&quot;,&nbsp;&quot;2&quot;];</pre><p>上面例子里，我们定义了 NN 接口和 NS 接口，它们具有索引签名。 这个索引签名表示了当用 number 去索引 NN 或NS 接口 时会得到 number 类型或 string 的返回值。</p><h6><span style="font-size: 16px;">字符串索引签名：&nbsp;</span></h6><p>字符串索引签名能够很好的描述 dictionary 模式，并且它们也会确保所有属性与其返回值类型相匹配。</p><pre class="brush:js;toolbar:false">interface&nbsp;SS&nbsp;{[index:string]:string}
let&nbsp;ss:&nbsp;SS&nbsp;=&nbsp;{&quot;A&quot;:&quot;a&quot;,&nbsp;&quot;B&quot;:&quot;b&quot;};
interface&nbsp;SN&nbsp;{[index:&nbsp;string]:&nbsp;number;}
let&nbsp;sn:&nbsp;SN&nbsp;=&nbsp;{&quot;A&quot;:1,&nbsp;&quot;B&quot;:2};</pre><h6><span style="font-size: 16px;">你可以将索引签名设置为只读，这样就防止了给索引赋值：</span></h6><pre class="brush:js;toolbar:false">interface&nbsp;ReadonlyStringArray&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;readonly&nbsp;[index:&nbsp;number]:&nbsp;string;
}
let&nbsp;myArray:&nbsp;ReadonlyStringArray&nbsp;=&nbsp;[&quot;Alice&quot;,&nbsp;&quot;Bob&quot;];
myArray[2]&nbsp;=&nbsp;&quot;Mallory&quot;;&nbsp;//&nbsp;error!</pre><p>索引的返回值可以不只一个，但是必须是同一个类型。</p><pre class="brush:js;toolbar:false">interface&nbsp;NN&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;[index:&nbsp;number]:&nbsp;number;
&nbsp;&nbsp;&nbsp;&nbsp;length:number;
&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;错误，`name`的类型与索引类型返回值的类型不匹配
}
let&nbsp;nn:&nbsp;NN&nbsp;=&nbsp;[1,&nbsp;2];</pre><p>注意： 如果有多个返回值，那么数字索引的返回值必须是字符串索引返回值类型的子类型。&nbsp;</p><h6><span style="font-size: 16px;">对于上述的解释，TS原话是这样的：</span></h6><p>这是因为当使用number来索引时，JavaScript会将它转换成 string 然后再去索引对象。 也就是说用100（一个 number）去索引等同于使用”100”（一个 string）去索引，因此两者需要保持一致。</p><p>虽然字面上的解释不明所以，但是我们通过例子可以去理解其含义。</p><pre class="brush:js;toolbar:false">class&nbsp;Animal&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string;
}
class&nbsp;Dog&nbsp;extends&nbsp;Animal&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;breed:&nbsp;string;
}
//ERROR!:&nbsp;Numeric&nbsp;index&nbsp;type&nbsp;&#39;Animal&#39;&nbsp;is&nbsp;not&nbsp;assignable&nbsp;to&nbsp;string&nbsp;index&nbsp;type&nbsp;&#39;Dog&#39;.
interface&nbsp;NotOkay&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;[x:&nbsp;number]:&nbsp;Animal;
&nbsp;&nbsp;&nbsp;&nbsp;[x:&nbsp;string]:&nbsp;Dog;
}</pre><p>对于上述例子， number 索引的返回值是父类Animal，而 string 索引的返回是子类 Dog。所以TS报错。</p><p>如果修改成 number 索引的返回值是子类Dog，string 索引的返回值是父类 Animal，则毫无问题。</p><pre class="brush:js;toolbar:false">class&nbsp;Animal&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string;
}
class&nbsp;Dog&nbsp;extends&nbsp;Animal&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;breed:&nbsp;string;
}
interface&nbsp;Okay&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;[x:&nbsp;number]:&nbsp;Dog;
&nbsp;&nbsp;&nbsp;&nbsp;[x:&nbsp;string]:&nbsp;Animal;</pre><h5><span style="font-size: 18px;">类类型</span></h5><p>与C#或Java里接口的基本作用一样，TS也能够用它来明确的强制一个类去符合某种契约。</p><pre class="brush:js;toolbar:false">interface&nbsp;ClockInterface&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;currentTime:&nbsp;Date;
}
class&nbsp;Clock&nbsp;implements&nbsp;ClockInterface&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;currentTime:&nbsp;Date;
&nbsp;&nbsp;&nbsp;&nbsp;constructor(h:&nbsp;number,&nbsp;m:&nbsp;number)&nbsp;{&nbsp;}
}</pre><h6>注意：接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。</h6><h2>继承</h2><p>TS允许我们通过extends关键字来 创建子类（实现继承）。&nbsp;</p><p>下面这个例子，Dog 类继承自 Animal 类，在Dog 类中我们可以访问父类 Animal 的属性和方法。</p><pre class="brush:js;toolbar:false">class&nbsp;Animal&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string;
&nbsp;&nbsp;&nbsp;&nbsp;constructor(theName:&nbsp;string)&nbsp;{&nbsp;this.name&nbsp;=&nbsp;theName;&nbsp;}
}
class&nbsp;Dog&nbsp;extends&nbsp;Animal&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;breed:&nbsp;string;
}
new&nbsp;Dog(&quot;mydog&quot;).name;//mydog</pre><p><br/></p>', '2018-11-19 20:02:25.39856', 'zw', '8888', '9', null, '', null, '0', '', '1102', 'TS引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。 基本上，TS的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。', 'typeScript,class,interface', 'typeScript-class-interface', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '原创', 'we', '1401');
INSERT INTO "news" VALUES ('9ba71cbf-f3c2-4faf-95a0-56d33910323c', 'markdown简单使用', '<p><img src="/v1/file/img/15306981-000d-4afe-99dc-17a1f118c9fb.jpg" alt="魏翼超然" width="200" height="200" /></p>
<p><a href="http://jianshu.com">简书</a></p>
<p><a href="http://baidu.com">百度</a></p>
<h1 id="">这是一级标题</h1>
<h2 id="-1">这是二级标题</h2>
<h3 id="-2">这是三级标题</h3>
<h4 id="-3">这是四级标题</h4>
<h5 id="-4">这是五级标题</h5>
<h6 id="-5">这是六级标题</h6>
<p><strong>这是加粗的文字</strong></p>
<p><em>这是倾斜的文字</em>`</p>
<p><strong><em>这是斜体加粗的文字</em></strong></p>
<p><del>strikethrough</del></p>
<ul>
<li>列表内容</li>
<li>列表内容</li>
<li>列表内容</li>
</ul>
<p>注意：- + * 跟内容之间都要有一个空格</p>
<ol>
<li>列表内容</li>
<li>列表内容</li>
<li>列表内容</li>
</ol>
<p>注意：序号跟内容之间要有空格</p>
<table>
<thead>
<tr>
<th style="text-align:left;">左对齐标题</th>
<th style="text-align:right;">右对齐标题</th>
<th style="text-align:center;">居中对齐标题</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">短文本</td>
<td style="text-align:right;">中等文本</td>
<td style="text-align:center;">稍微长一点的文本</td>
</tr>
<tr>
<td style="text-align:left;">稍微长一点的文本</td>
<td style="text-align:right;">短文本</td>
<td style="text-align:center;">中等文本</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:left;">h1</th>
<th style="text-align:center;">h2</th>
<th style="text-align:right;">h3</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">100</td>
<td style="text-align:center;">[a][1]</td>
<td style="text-align:right;">![b][2]</td>
</tr>
<tr>
<td style="text-align:left;"><em>foo</em></td>
<td style="text-align:center;"><strong>bar</strong></td>
<td style="text-align:right;"><del>baz</del></td>
</tr>
</tbody>
</table>
<p>第二行分割表头和内容。</p>
<ul>
<li>有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略</li>
</ul>
<blockquote>
  <p>这是引用的内容</p>
  <blockquote>
    <p>这是引用的内容</p>
    <blockquote>
      <blockquote>
        <blockquote>
          <blockquote>
            <blockquote>
              <blockquote>
                <blockquote>
                  <blockquote>
                    <p>这是引用的内容</p>
                  </blockquote>
                </blockquote>
              </blockquote>
            </blockquote>
          </blockquote>
        </blockquote>
      </blockquote>
    </blockquote>
  </blockquote>
</blockquote>
<h2 id="-6">分割线</h2>
<hr />
<hr />
<hr />
<h2 id="mahua">MaHua有哪些功能？</h2>
<ul>
<li>方便的<code>导入导出</code>功能<ul>
<li>直接把一个markdown的文本文件拖放到当前这个页面就可以了</li>
<li>导出为一个html格式的文件，样式一点也不会丢失</li></ul></li>
<li>编辑和预览<code>同步滚动</code>，所见即所得（右上角设置）</li>
<li><code>VIM快捷键</code>支持，方便vim党们快速的操作 （右上角设置）</li>
<li>强大的<code>自定义CSS</code>功能，方便定制自己的展示</li>
<li>有数量也有质量的<code>主题</code>,编辑器和预览区域</li>
<li>完美兼容<code>Github</code>的markdown语法</li>
<li>预览区域<code>代码高亮</code></li>
<li>所有选项自动记忆</li>
</ul>
<h2 id="-7">有问题反馈</h2>
<p>在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流</p>
<ul>
<li>邮件(dev.hubo#gmail.com, 把#换成@)</li>
<li>QQ: 287759234</li>
<li>weibo: <a href="http://weibo.com/ihubo">@草依山</a></li>
<li>twitter: <a href="http://twitter.com/ihubo">@ihubo</a></li>
</ul>
<h2 id="-8">捐助开发者</h2>
<p>在兴趣的驱动下,写一个<code>免费</code>的东西，有欣喜，也还有汗水，希望你喜欢我的作品，同时也能支持一下。
当然，有钱捧个钱场（右上角的爱心标志，支持支付宝和PayPal捐助），没钱捧个人场，谢谢各位。</p>
<h2 id="-9">感激</h2>
<p>感谢以下的项目,排名不分先后</p>
<ul>
<li><a href="http://mouapp.com/">mou</a> </li>
<li><a href="http://ace.ajax.org/">ace</a></li>
<li><a href="http://jquery.com">jquery</a></li>
</ul>
<h2 id="-10">关于作者</h2>
<pre><code class="javascript language-javascript">  var ihubo = {
    nickName  : "草依山",
    site : "http://jser.me"
  }
var Prism = require(''prismjs'');
var loadLanguages = require(''prismjs/components/'');
loadLanguages([''haml'']);

// The code snippet you want to highlight, as a string
var code = "= [''hi'', ''there'', ''reader!''].join \" \"";

// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, ''haml'');
</code></pre>
<pre><code class="css language-css">.example-angle {
    transform: rotate(10deg);
}
.example-color {
    color: rgba(255, 0, 0, 0.2);
    background: purple;
    border: 1px solid hsl(100,70%,40%);
}
.example-easing {
    transition-timing-function: linear;
}
.example-time {
    transition-duration: 3s;
}
</code></pre>
<pre><code class="html language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;

&lt;script&gt;
    // Just a lil’ script to show off that inline JS gets highlighted
    window.console &amp;&amp; console.log(''foo'');
&lt;/script&gt;
&lt;meta charset="utf-8" /&gt;
&lt;link rel="icon" href="favicon.png" /&gt;
&lt;title&gt;Prism&lt;/title&gt;
&lt;link rel="stylesheet" href="style.css" /&gt;
&lt;link rel="stylesheet" href="themes/prism.css" data-noprefix /&gt;
&lt;script src="prefixfree.min.js"&gt;&lt;/script&gt;

&lt;script&gt;var _gaq = [[''_setAccount'', ''UA-33746269-1''], [''_trackPageview'']];&lt;/script&gt;
&lt;script src="https://www.google-analytics.com/ga.js" async&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;header&gt;
    &lt;div class="intro" data-src="templates/header-main.html" data-type="text/html"&gt;&lt;/div&gt;

    &lt;ul id="features"&gt;
        &lt;li&gt;
            &lt;strong&gt;Dead simple&lt;/strong&gt;
            Include prism.css and prism.js, use proper HTML5 code tags (&lt;code&gt;code.language-xxxx&lt;/code&gt;), done!
        &lt;/li&gt;
        &lt;li&gt;
            &lt;strong&gt;Intuitive&lt;/strong&gt;
            Language classes are inherited so you can only define the language once for multiple code snippets.
        &lt;/li&gt;
        &lt;li&gt;
            &lt;strong&gt;Light as a feather&lt;/strong&gt;
            The core is 2KB minified &amp;amp; gzipped. Languages add 0.3-0.5KB each, themes are around 1KB.
        &lt;/li&gt;
        &lt;li&gt;
            &lt;strong&gt;Blazing fast&lt;/strong&gt;
            Supports parallelism with Web Workers, if available.
        &lt;/li&gt;
        &lt;li&gt;
            &lt;strong&gt;Extensible&lt;/strong&gt;
            Define new languages or extend existing ones.
            Add new features thanks to Prism’s plugin architecture.
        &lt;/li&gt;
        &lt;li&gt;
            &lt;strong&gt;Easy styling&lt;/strong&gt;
            All styling is done through CSS, with sensible class names like &lt;code&gt;.comment&lt;/code&gt;, &lt;code&gt;.string&lt;/code&gt;, &lt;code&gt;.property&lt;/code&gt; etc
        &lt;/li&gt;
    &lt;/ul&gt;

&lt;/header&gt;

&lt;section id="used-by"&gt;
    &lt;h1&gt;Used By&lt;/h1&gt;

    &lt;p&gt;Prism is used on several websites, small and large. Some of them are:&lt;/p&gt;

    &lt;div class="used-by-logos"&gt;
        &lt;a href="https://www.smashingmagazine.com/" target="_blank"&gt;&lt;img src="img/logo-smashing.png" alt="Smashing Magazine" /&gt;&lt;/a&gt;
        &lt;a href="http://alistapart.com/" target="_blank"&gt;&lt;img src="img/logo-ala.png" alt="A List Apart" /&gt;&lt;/a&gt;
        &lt;a href="https://developer.mozilla.org/" target="_blank"&gt;&lt;img src="img/logo-mdn.png" alt="Mozilla Developer Network (MDN)" /&gt;&lt;/a&gt;
        &lt;a href="https://css-tricks.com/" target="_blank"&gt;&lt;img src="img/logo-css-tricks.png" alt="CSS-Tricks" /&gt;&lt;/a&gt;
        &lt;a href="https://www.sitepoint.com/" target="_blank"&gt;&lt;img src="img/logo-sitepoint.png" alt="SitePoint" /&gt;&lt;/a&gt;
        &lt;a href="https://www.drupal.org/" target="_blank"&gt;&lt;img src="img/logo-drupal.png" alt="Drupal" /&gt;&lt;/a&gt;
        &lt;a href="https://reactjs.org/" target="_blank"&gt;&lt;img src="img/logo-react.png" alt="React" /&gt;&lt;/a&gt;
        &lt;a href="https://stripe.com/" target="_blank"&gt;&lt;img src="img/logo-stripe.png" alt="Stripe" /&gt;&lt;/a&gt;
    &lt;/div&gt;
&lt;/section&gt;

&lt;section id="examples"&gt;
    &lt;h1&gt;Examples&lt;/h1&gt;

    &lt;p&gt;The Prism source, highlighted with Prism (don’t you just love how meta this is?):&lt;/p&gt;
    &lt;pre data-src="prism.js"&gt;&lt;/pre&gt;

    &lt;p&gt;This page’s CSS code, highlighted with Prism:&lt;/p&gt;
    &lt;pre data-src="style.css"&gt;&lt;/pre&gt;

    &lt;p&gt;This page’s HTML, highlighted with Prism:&lt;/p&gt;
    &lt;pre data-src="index.html"&gt;&lt;/pre&gt;

    &lt;p&gt;This page’s logo (SVG), highlighted with Prism:&lt;/p&gt;
    &lt;pre data-src="logo.svg"&gt;&lt;/pre&gt;

    &lt;p&gt;If you’re still not sold, you can &lt;a href="examples.html"&gt;view more examples&lt;/a&gt; or &lt;a href="test.html"&gt;try it out for yourself&lt;/a&gt;.&lt;/p&gt;
&lt;/section&gt;

&lt;section id="features-full" class="language-markup"&gt;
    &lt;h1&gt;Full list of features&lt;/h1&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;strong&gt;Only 2KB&lt;/strong&gt; minified &amp;amp; gzipped (core). Each language definition adds roughly 300-500 bytes.&lt;/li&gt;
        &lt;li&gt;Encourages good author practices. Other highlighters encourage or even force you to use elements that are semantically wrong,
            like &lt;code&gt;&amp;lt;pre&gt;&lt;/code&gt; (on its own) or &lt;code&gt;&amp;lt;script&gt;&lt;/code&gt;.
            Prism forces you to use the correct element for marking up code: &lt;code&gt;&amp;lt;code&gt;&lt;/code&gt;.
            On its own for inline code, or inside a &lt;code&gt;&amp;lt;pre&gt;&lt;/code&gt; for blocks of code.
            In addition, the language is defined through the way recommended in the HTML5 draft: through a &lt;code&gt;language-xxxx&lt;/code&gt; class.&lt;/li&gt;
        &lt;li&gt;The language definition is inherited. This means that if multiple code snippets have the same language, you can just define it once, in one of their common ancestors.&lt;/li&gt;
        &lt;li&gt;Supports &lt;strong&gt;parallelism with Web Workers&lt;/strong&gt;, if available. Disabled by default (&lt;a href="faq.html#why-is-asynchronous-highlighting-disabled-by-default"&gt;why?&lt;/a&gt;).&lt;/li&gt;
        &lt;li&gt;Very easy to extend without modifying the code, due to Prism’s &lt;a href="#plugins"&gt;plugin architecture&lt;/a&gt;. Multiple hooks are scattered throughout the source.&lt;/li&gt;
        &lt;li&gt;Very easy to &lt;a href="extending.html#language-definitions"&gt;define new languages&lt;/a&gt;. Only thing you need is a good understanding of regular expressions&lt;/li&gt;
        &lt;li&gt;All styling is done through CSS, with &lt;a href="faq.html#how-do-i-know-which-tokens-i-can-style-for"&gt;sensible class names&lt;/a&gt; rather than ugly namespaced abbreviated nonsense.&lt;/li&gt;
        &lt;li&gt;Wide browser support: IE9+, Firefox, Chrome, Safari, &lt;a href="faq.html#this-page-doesnt-work-in-opera"&gt;Opera&lt;/a&gt;, most Mobile browsers&lt;/li&gt;
        &lt;li&gt;Highlights embedded languages (e.g. CSS inside HTML, JavaScript inside HTML)&lt;/li&gt;
        &lt;li&gt;Highlights inline code as well, not just code blocks&lt;/li&gt;
        &lt;li&gt;Highlights nested languages (CSS in HTML, JavaScript in HTML)&lt;/li&gt;
        &lt;li&gt;It doesn’t force you to use any Prism-specific markup, not even a Prism-specific class name, only standard markup you should be using anyway. So, you can just try it for a while, remove it if you don’t like it and leave no traces behind.&lt;/li&gt;
        &lt;li&gt;Highlight specific lines and/or line ranges (requires &lt;a href="plugins/line-highlight/"&gt;plugin&lt;/a&gt;)&lt;/li&gt;
        &lt;li&gt;Show invisible characters like tabs, line breaks etc (requires &lt;a href="plugins/show-invisibles/"&gt;plugin&lt;/a&gt;)&lt;/li&gt;
        &lt;li&gt;Autolink URLs and emails, use Markdown links in comments (requires &lt;a href="plugins/autolinker/"&gt;plugin&lt;/a&gt;)&lt;/li&gt;
    &lt;/ul&gt;
&lt;/section&gt;

&lt;section id="limitations"&gt;
    &lt;h1&gt;Limitations&lt;/h1&gt;
    &lt;ul&gt;
        &lt;li&gt;Any pre-existing HTML in the code will be stripped off. &lt;a href="faq.html#if-pre-existing-html-is-stripped-off-how-can-i-highlight"&gt;There are ways around it though&lt;/a&gt;.&lt;/li&gt;
        &lt;li&gt;Regex-based so it *will* fail on certain edge cases, which are documented in the &lt;a href="examples.html"&gt;Examples section&lt;/a&gt;.&lt;/li&gt;
        &lt;li&gt;No IE 6-8 support. If someone can read code, they are probably in the 85% of the population with a modern browser.&lt;/li&gt;
    &lt;/ul&gt;
&lt;/section&gt;

&lt;section id="basic-usage" class="language-markup"&gt;
    &lt;h1&gt;Basic usage&lt;/h1&gt;

    &lt;p&gt;You will need to include the &lt;code&gt;prism.css&lt;/code&gt; and &lt;code&gt;prism.js&lt;/code&gt; files you downloaded in your page. Example:
    &lt;pre&gt;&lt;code&gt;&amp;lt;!DOCTYPE html&gt;
&amp;lt;html&gt;
&amp;lt;head&gt;
    ...&lt;/code&gt;
    &lt;code class="highlight"&gt;&amp;lt;link href="themes/prism.css" rel="stylesheet" /&gt;&lt;/code&gt;
&lt;code&gt;&amp;lt;/head&gt;
&amp;lt;body&gt;
    ...&lt;/code&gt;
    &lt;code class="highlight"&gt;&amp;lt;script src="prism.js"&gt;&amp;lt;/script&gt;&lt;/code&gt;
&lt;code&gt;&amp;lt;/body&gt;
&amp;lt;/html&gt;&lt;/code&gt;&lt;/pre&gt;

    &lt;p&gt;Prism does its best to encourage good authoring practices. Therefore, it only works with &lt;code&gt;&amp;lt;code&gt;&lt;/code&gt; elements, since marking up code without a &lt;code&gt;&amp;lt;code&gt;&lt;/code&gt; element is semantically invalid.
    &lt;a href="https://www.w3.org/TR/html52/textlevel-semantics.html#the-code-element"&gt;According to the HTML5 spec&lt;/a&gt;, the recommended way to define a code language is a &lt;code&gt;language-xxxx&lt;/code&gt; class, which is what Prism uses.
    Alternatively, Prism also supports a shorter version: &lt;code&gt;lang-xxxx&lt;/code&gt;.&lt;/p&gt;
    &lt;p&gt;To make things easier however, Prism assumes that this language definition is inherited. Therefore, if multiple &lt;code&gt;&amp;lt;code&gt;&lt;/code&gt; elements have the same language, you can add the &lt;code&gt;language-xxxx&lt;/code&gt; class on one of their common ancestors.
        This way, you can also define a document-wide default language, by adding a &lt;code&gt;language-xxxx&lt;/code&gt; class on the &lt;code&gt;&amp;lt;body&gt;&lt;/code&gt; or &lt;code&gt;&amp;lt;html&gt;&lt;/code&gt; element.&lt;/p&gt;

    &lt;p&gt;If you want to opt-out of highlighting for a &lt;code&gt;&amp;lt;code&gt;&lt;/code&gt; element that is a descendant of an element with a declared code language, you can add the class &lt;code&gt;language-none&lt;/code&gt; to it (or any non-existing language, really).&lt;/p&gt;

    &lt;p&gt;The &lt;a href="https://www.w3.org/TR/html5/grouping-content.html#the-pre-element"&gt;recommended way to mark up a code block&lt;/a&gt;
    (both for semantics and for Prism) is a &lt;code&gt;&amp;lt;pre&gt;&lt;/code&gt; element with a &lt;code&gt;&amp;lt;code&gt;&lt;/code&gt; element inside, like so:&lt;/p&gt;
    &lt;pre&gt;&lt;code&gt;&amp;lt;pre&gt;&amp;lt;code class="language-css"&gt;p { color: red }&amp;lt;/code&gt;&amp;lt;/pre&gt;&lt;/code&gt;&lt;/pre&gt;
    &lt;p&gt;If you use that pattern, the &lt;code&gt;&amp;lt;pre&gt;&lt;/code&gt; will automatically get the &lt;code&gt;language-xxxx&lt;/code&gt; class (if it doesn’t already have it) and will be styled as a code block.&lt;/p&gt;

    &lt;p&gt;If you want to prevent any elements from being automatically highlighted, you can use the attribute &lt;code&gt;data-manual&lt;/code&gt; on the &lt;code&gt;&amp;lt;script&gt;&lt;/code&gt; element you used for prism and use the &lt;a href="extending.html#api"&gt;API&lt;/a&gt;.
    Example:&lt;/p&gt;
    &lt;pre&gt;&lt;code&gt;&amp;lt;script src="prism.js" data-manual&gt;&amp;lt;/script&gt;&lt;/code&gt;&lt;/pre&gt;

    &lt;h2&gt;Usage with Webpack, Browserify, &amp; Other Bundlers&lt;/h2&gt;

    &lt;p&gt;If you want to use Prism with a bundler, install Prism with &lt;code&gt;npm&lt;/code&gt;:&lt;/p&gt;

    &lt;pre&gt;&lt;code&gt;$ npm install prismjs&lt;/code&gt;&lt;/pre&gt;

    &lt;p&gt;You can then &lt;code class="language-js"&gt;import&lt;/code&gt; into your bundle:&lt;/p&gt;

    &lt;pre&gt;&lt;code class="language-js"&gt;import Prism from ''prismjs'';&lt;/code&gt;&lt;/pre&gt;

    &lt;p&gt;To make it easy to configure your Prism instance with only the languages and plugins you need, use the babel plugin,
        &lt;a href="https://github.com/mAAdhaTTah/babel-plugin-prismjs"&gt;babel-plugin-prismjs&lt;/a&gt;. This will allow you to load
        the minimum number of languages and plugins to satisfy your needs.
        See that plugin''s documentation for configuration details.&lt;/p&gt;

    &lt;h2&gt;Usage with Node&lt;/h2&gt;

    &lt;p&gt;If you want to use Prism on the server or through the command line, Prism can be used with Node.js as well.
    This might be useful if you''re trying to generate static HTML pages with highlighted code for environments that don''t support browser-side JS, like &lt;a href="https://www.ampproject.org/"&gt;AMP pages&lt;/a&gt;.&lt;/p&gt;

    &lt;p&gt;Example:&lt;/p&gt;
    &lt;pre&gt;&lt;code class="language-js"&gt;var Prism = require(''prismjs'');

// The code snippet you want to highlight, as a string
var code = "var data = 1;";

// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.javascript, ''javascript'');&lt;/code&gt;&lt;/pre&gt;

    &lt;p&gt;Requiring &lt;code&gt;prismjs&lt;/code&gt; will load the default languages: &lt;code&gt;markup&lt;/code&gt;, &lt;code&gt;css&lt;/code&gt;,
        &lt;code&gt;clike&lt;/code&gt; and &lt;code&gt;javascript&lt;/code&gt;. You can load more languages with the
        &lt;code class="language-javascript"&gt;loadLanguages()&lt;/code&gt; utility, which will automatically handle any required dependencies.&lt;/p&gt;
    &lt;p&gt;Example:&lt;/p&gt;

    &lt;pre&gt;&lt;code class="language-js"&gt;var Prism = require(''prismjs'');
var loadLanguages = require(''prismjs/components/'');
loadLanguages([''haml'']);

// The code snippet you want to highlight, as a string
var code = "= [''hi'', ''there'', ''reader!''].join \" \"";

// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, ''haml'');&lt;/code&gt;&lt;/pre&gt;

    &lt;p&gt;&lt;strong&gt;Note&lt;/strong&gt;: Do &lt;em&gt;not&lt;/em&gt; use &lt;code class="language-javascript"&gt;loadLanguages()&lt;/code&gt; with Webpack or another bundler, as this will cause Webpack to include all languages and plugins. Use the babel plugin described above.&lt;/p&gt;

&lt;/section&gt;

&lt;section id="languages-list" class="language-markup"&gt;
    &lt;h1&gt;Supported languages&lt;/h1&gt;
    &lt;p&gt;This is the list of all &lt;span id="languages-list-count"&gt;&lt;/span&gt; languages currently supported by Prism, with
        their corresponding alias, to use in place of &lt;code&gt;xxxx&lt;/code&gt; in the &lt;code&gt;language-xxxx&lt;/code&gt; (or &lt;code&gt;lang-xxxx&lt;/code&gt;) class:&lt;/p&gt;
&lt;/section&gt;

&lt;section id="plugins"&gt;
    &lt;h1&gt;Plugins&lt;/h1&gt;
    &lt;p&gt;Plugins are additional scripts (and CSS code) that extend Prism’s functionality. Many of the following plugins are official, but are released as plugins to keep the Prism Core small for those who don’t need the extra functionality.&lt;/p&gt;
    &lt;ul class="plugin-list"&gt;&lt;/ul&gt;

    &lt;p&gt;No assembly required to use them. Just select them in the &lt;a href="download.html"&gt;download&lt;/a&gt; page.&lt;/p&gt;
    &lt;p&gt;It’s very easy to &lt;a href="extending.html#writing-plugins"&gt;write your own Prism plugins&lt;/a&gt;. Did you write a plugin for Prism that you want added to this list? &lt;a href="https://github.com/LeaVerou/prism" target="_blank"&gt;Send a pull request&lt;/a&gt;!&lt;/p&gt;
&lt;/section&gt;

&lt;section id="languages"&gt;
    &lt;h1&gt;Third-party language definitions&lt;/h1&gt;

    &lt;ul&gt;
        &lt;li&gt;&lt;a href="https://github.com/SassDoc/prism-scss-sassdoc"&gt;SassDoc Sass/Scss comments&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/section&gt;

&lt;section id="tutorials"&gt;
    &lt;h1&gt;Third-party tutorials&lt;/h1&gt;

    &lt;p&gt;Several tutorials have been written by members of the community to help you integrate Prism into multiple different website types and configurations:&lt;/p&gt;

    &lt;ul&gt;
        &lt;li&gt;&lt;a href="https://websitebeaver.com/escape-html-inside-code-or-pre-tag-to-entities-to-display-raw-code-with-prismjs"&gt;Escape HTML Inside &amp;lt;code&amp;gt; or &amp;lt;pre&amp;gt; Tag to Entities to Display Raw Code with PrismJS&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="http://crambler.com/how-to-implement-prism-js-syntax-highlighting-into-your-wordpress-site/"&gt;How To Implement Prism.js Syntax Highlighting Into Your WordPress Site&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="http://wp.tutsplus.com/tutorials/plugins/adding-a-syntax-highlighter-shortcode-using-prism-js/"&gt;Adding a Syntax Highlighter Shortcode Using Prism.js | WPTuts+&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="https://www.stramaxon.com/2012/07/prism-syntax-highlighter-for-blogger.html"&gt;Implement PrismJs Syntax Highlighting to your Blogger/BlogSpot&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="http://www.allblogtools.com/tricks-and-hacks/beautify-source-codes-in-your-posts-with-prism-syntax-highlighter-for-blogger/"&gt;Beautify Source Codes In Your Posts With Prism Syntax Highlighter For Blogger&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="https://schier.co/blog/2013/01/07/how-to-re-run-prismjs-on-ajax-content.html"&gt;How To Re-Run Prism.js On AJAX Content&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="https://www.semisedlak.com/highlight-your-code-syntax-with-prismjs"&gt;Highlight your code syntax with Prism.js&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="https://usetypo3.com/fs-code-snippet.html"&gt;A code snippet content element powered by Prism.js for TYPO3 CMS&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="https://auralinna.blog/post/2017/code-syntax-highlighting-with-angular-and-prismjs"&gt;Code syntax highlighting with Angular and Prism.js&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;

    &lt;p&gt;Please note that the tutorials listed here are not verified to contain correct information. Read at your risk and always check the official documentation here if something doesn’t work :)&lt;/p&gt;

    &lt;p&gt;Have you written a tutorial about Prism that’s not already included here? Send a pull request!&lt;/p&gt;
&lt;/section&gt;

&lt;section id="credits"&gt;
    &lt;h1&gt;Credits&lt;/h1&gt;
    &lt;ul&gt;
        &lt;li&gt;Special thanks to &lt;a href="https://github.com/Golmote"&gt;Golmote&lt;/a&gt; and &lt;a href="https://github.com/apfelbox"&gt;Jannik Zschiesche&lt;/a&gt; for their contributions and for being &lt;strong&gt;amazing maintainers&lt;/strong&gt;. Prism would not have been able to keep up without their help.&lt;/li&gt;
        &lt;li&gt;To &lt;a href="https://twitter.com/kizmarh"&gt;Roman Komarov&lt;/a&gt; for his contributions, feedback and testing.&lt;/li&gt;
        &lt;li&gt;To &lt;a href="https://twitter.com/zdfs"&gt;Zachary Forrest&lt;/a&gt; for &lt;a href="https://twitter.com/zdfs/statuses/217834980871639041"&gt;coming up with the name “Prism”&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;To &lt;a href="https://stellarr.deviantart.com/"&gt;stellarr&lt;/a&gt; for the &lt;a href="https://stellarr.deviantart.com/art/Spectra-Wallpaper-Pack-97785901"&gt;spectrum background&lt;/a&gt; used on this page&lt;/li&gt;
        &lt;li&gt;To &lt;a href="https://twitter.com/thecodezombie"&gt;Jason Hobbs&lt;/a&gt; for &lt;a href="https://twitter.com/thecodezombie/status/217663703825399809"&gt;encouraging me&lt;/a&gt; to release this script as standalone&lt;/li&gt;
    &lt;/ul&gt;
&lt;/section&gt;

&lt;footer data-src="templates/footer.html" data-type="text/html"&gt;&lt;/footer&gt;

&lt;script src="prism.js"&gt;&lt;/script&gt;
&lt;script src="utopia.js"&gt;&lt;/script&gt;
&lt;script src="components.js"&gt;&lt;/script&gt;
&lt;script src="code.js"&gt;&lt;/script&gt;
&lt;script&gt;
(function() {
    var languageItems = [];
    var languages = components.languages;
    var count = 0;
    for (var id in languages) {
        if (id == ''meta'') {
            continue;
        }
        count++;
        var name = languages[id].title || languages[id];

        languageItems.push({
            tag: ''li'',
            attributes: {
                ''data-id'': id
            },
            contents: [
                name,
                '' - '',
                {
                    tag: ''code'',
                    contents: id
                }
            ]
        });
    }
    $u.element.create(''ul'', {
        contents: languageItems,
        inside: ''#languages-list''
    });
    $u.element.contents($(''#languages-list-count''), count);
}());
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre>', '2018-11-22 11:37:50.361291', 'zw', '8888', '11', null, '', null, '0', '', '1105', 'markDown简单使用', 'markdown', 'markdown', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '原创', '![魏翼超然](/v1/file/img/15306981-000d-4afe-99dc-17a1f118c9fb.jpg =200x200)

[简书](http://jianshu.com)

[百度](http://baidu.com)

# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题

**这是加粗的文字**

*这是倾斜的文字*`

***这是斜体加粗的文字***

~~strikethrough~~


- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格

1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格

| 左对齐标题 | 右对齐标题 | 居中对齐标题 |
| :------| ------: | :------: |
| 短文本 | 中等文本 | 稍微长一点的文本 |
| 稍微长一点的文本 | 短文本 | 中等文本 |


| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   | [a][1]  | ![b][2] |
| *foo* | **bar** | ~~baz~~ |



第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略

>这是引用的内容
>>这是引用的内容
>>>>>>>>>>这是引用的内容

## 分割线

---
***
*****

##MaHua有哪些功能？

* 方便的`导入导出`功能
    *  直接把一个markdown的文本文件拖放到当前这个页面就可以了
    *  导出为一个html格式的文件，样式一点也不会丢失
* 编辑和预览`同步滚动`，所见即所得（右上角设置）
* `VIM快捷键`支持，方便vim党们快速的操作 （右上角设置）
* 强大的`自定义CSS`功能，方便定制自己的展示
* 有数量也有质量的`主题`,编辑器和预览区域
* 完美兼容`Github`的markdown语法
* 预览区域`代码高亮`
* 所有选项自动记忆

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(dev.hubo#gmail.com, 把#换成@)
* QQ: 287759234
* weibo: [@草依山](http://weibo.com/ihubo)
* twitter: [@ihubo](http://twitter.com/ihubo)

##捐助开发者
在兴趣的驱动下,写一个`免费`的东西，有欣喜，也还有汗水，希望你喜欢我的作品，同时也能支持一下。
当然，有钱捧个钱场（右上角的爱心标志，支持支付宝和PayPal捐助），没钱捧个人场，谢谢各位。

##感激
感谢以下的项目,排名不分先后

* [mou](http://mouapp.com/) 
* [ace](http://ace.ajax.org/)
* [jquery](http://jquery.com)

##关于作者

```javascript
  var ihubo = {
    nickName  : "草依山",
    site : "http://jser.me"
  }
var Prism = require(''prismjs'');
var loadLanguages = require(''prismjs/components/'');
loadLanguages([''haml'']);

// The code snippet you want to highlight, as a string
var code = "= [''hi'', ''there'', ''reader!''].join \" \"";

// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, ''haml'');
```
```css
.example-angle {
	transform: rotate(10deg);
}
.example-color {
	color: rgba(255, 0, 0, 0.2);
	background: purple;
	border: 1px solid hsl(100,70%,40%);
}
.example-easing {
	transition-timing-function: linear;
}
.example-time {
	transition-duration: 3s;
}
```
```html
<!DOCTYPE html>
<html lang="en">
<head>

<script>
	// Just a lil’ script to show off that inline JS gets highlighted
	window.console && console.log(''foo'');
</script>
<meta charset="utf-8" />
<link rel="icon" href="favicon.png" />
<title>Prism</title>
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="themes/prism.css" data-noprefix />
<script src="prefixfree.min.js"></script>

<script>var _gaq = [[''_setAccount'', ''UA-33746269-1''], [''_trackPageview'']];</script>
<script src="https://www.google-analytics.com/ga.js" async></script>
</head>
<body>

<header>
	<div class="intro" data-src="templates/header-main.html" data-type="text/html"></div>

	<ul id="features">
		<li>
			<strong>Dead simple</strong>
			Include prism.css and prism.js, use proper HTML5 code tags (<code>code.language-xxxx</code>), done!
		</li>
		<li>
			<strong>Intuitive</strong>
			Language classes are inherited so you can only define the language once for multiple code snippets.
		</li>
		<li>
			<strong>Light as a feather</strong>
			The core is 2KB minified &amp; gzipped. Languages add 0.3-0.5KB each, themes are around 1KB.
		</li>
		<li>
			<strong>Blazing fast</strong>
			Supports parallelism with Web Workers, if available.
		</li>
		<li>
			<strong>Extensible</strong>
			Define new languages or extend existing ones.
			Add new features thanks to Prism’s plugin architecture.
		</li>
		<li>
			<strong>Easy styling</strong>
			All styling is done through CSS, with sensible class names like <code>.comment</code>, <code>.string</code>, <code>.property</code> etc
		</li>
	</ul>

</header>

<section id="used-by">
	<h1>Used By</h1>

	<p>Prism is used on several websites, small and large. Some of them are:</p>

	<div class="used-by-logos">
		<a href="https://www.smashingmagazine.com/" target="_blank"><img src="img/logo-smashing.png" alt="Smashing Magazine" /></a>
		<a href="http://alistapart.com/" target="_blank"><img src="img/logo-ala.png" alt="A List Apart" /></a>
		<a href="https://developer.mozilla.org/" target="_blank"><img src="img/logo-mdn.png" alt="Mozilla Developer Network (MDN)" /></a>
		<a href="https://css-tricks.com/" target="_blank"><img src="img/logo-css-tricks.png" alt="CSS-Tricks" /></a>
		<a href="https://www.sitepoint.com/" target="_blank"><img src="img/logo-sitepoint.png" alt="SitePoint" /></a>
		<a href="https://www.drupal.org/" target="_blank"><img src="img/logo-drupal.png" alt="Drupal" /></a>
		<a href="https://reactjs.org/" target="_blank"><img src="img/logo-react.png" alt="React" /></a>
		<a href="https://stripe.com/" target="_blank"><img src="img/logo-stripe.png" alt="Stripe" /></a>
	</div>
</section>

<section id="examples">
	<h1>Examples</h1>

	<p>The Prism source, highlighted with Prism (don’t you just love how meta this is?):</p>
	<pre data-src="prism.js"></pre>

	<p>This page’s CSS code, highlighted with Prism:</p>
	<pre data-src="style.css"></pre>

	<p>This page’s HTML, highlighted with Prism:</p>
	<pre data-src="index.html"></pre>

	<p>This page’s logo (SVG), highlighted with Prism:</p>
	<pre data-src="logo.svg"></pre>

	<p>If you’re still not sold, you can <a href="examples.html">view more examples</a> or <a href="test.html">try it out for yourself</a>.</p>
</section>

<section id="features-full" class="language-markup">
	<h1>Full list of features</h1>
	<ul>
		<li><strong>Only 2KB</strong> minified &amp; gzipped (core). Each language definition adds roughly 300-500 bytes.</li>
		<li>Encourages good author practices. Other highlighters encourage or even force you to use elements that are semantically wrong,
			like <code>&lt;pre></code> (on its own) or <code>&lt;script></code>.
			Prism forces you to use the correct element for marking up code: <code>&lt;code></code>.
			On its own for inline code, or inside a <code>&lt;pre></code> for blocks of code.
			In addition, the language is defined through the way recommended in the HTML5 draft: through a <code>language-xxxx</code> class.</li>
		<li>The language definition is inherited. This means that if multiple code snippets have the same language, you can just define it once, in one of their common ancestors.</li>
		<li>Supports <strong>parallelism with Web Workers</strong>, if available. Disabled by default (<a href="faq.html#why-is-asynchronous-highlighting-disabled-by-default">why?</a>).</li>
		<li>Very easy to extend without modifying the code, due to Prism’s <a href="#plugins">plugin architecture</a>. Multiple hooks are scattered throughout the source.</li>
		<li>Very easy to <a href="extending.html#language-definitions">define new languages</a>. Only thing you need is a good understanding of regular expressions</li>
		<li>All styling is done through CSS, with <a href="faq.html#how-do-i-know-which-tokens-i-can-style-for">sensible class names</a> rather than ugly namespaced abbreviated nonsense.</li>
		<li>Wide browser support: IE9+, Firefox, Chrome, Safari, <a href="faq.html#this-page-doesnt-work-in-opera">Opera</a>, most Mobile browsers</li>
		<li>Highlights embedded languages (e.g. CSS inside HTML, JavaScript inside HTML)</li>
		<li>Highlights inline code as well, not just code blocks</li>
		<li>Highlights nested languages (CSS in HTML, JavaScript in HTML)</li>
		<li>It doesn’t force you to use any Prism-specific markup, not even a Prism-specific class name, only standard markup you should be using anyway. So, you can just try it for a while, remove it if you don’t like it and leave no traces behind.</li>
		<li>Highlight specific lines and/or line ranges (requires <a href="plugins/line-highlight/">plugin</a>)</li>
		<li>Show invisible characters like tabs, line breaks etc (requires <a href="plugins/show-invisibles/">plugin</a>)</li>
		<li>Autolink URLs and emails, use Markdown links in comments (requires <a href="plugins/autolinker/">plugin</a>)</li>
	</ul>
</section>

<section id="limitations">
	<h1>Limitations</h1>
	<ul>
		<li>Any pre-existing HTML in the code will be stripped off. <a href="faq.html#if-pre-existing-html-is-stripped-off-how-can-i-highlight">There are ways around it though</a>.</li>
		<li>Regex-based so it *will* fail on certain edge cases, which are documented in the <a href="examples.html">Examples section</a>.</li>
		<li>No IE 6-8 support. If someone can read code, they are probably in the 85% of the population with a modern browser.</li>
	</ul>
</section>

<section id="basic-usage" class="language-markup">
	<h1>Basic usage</h1>

	<p>You will need to include the <code>prism.css</code> and <code>prism.js</code> files you downloaded in your page. Example:
	<pre><code>&lt;!DOCTYPE html>
&lt;html>
&lt;head>
	...</code>
	<code class="highlight">&lt;link href="themes/prism.css" rel="stylesheet" /></code>
<code>&lt;/head>
&lt;body>
	...</code>
	<code class="highlight">&lt;script src="prism.js">&lt;/script></code>
<code>&lt;/body>
&lt;/html></code></pre>

	<p>Prism does its best to encourage good authoring practices. Therefore, it only works with <code>&lt;code></code> elements, since marking up code without a <code>&lt;code></code> element is semantically invalid.
	<a href="https://www.w3.org/TR/html52/textlevel-semantics.html#the-code-element">According to the HTML5 spec</a>, the recommended way to define a code language is a <code>language-xxxx</code> class, which is what Prism uses.
	Alternatively, Prism also supports a shorter version: <code>lang-xxxx</code>.</p>
	<p>To make things easier however, Prism assumes that this language definition is inherited. Therefore, if multiple <code>&lt;code></code> elements have the same language, you can add the <code>language-xxxx</code> class on one of their common ancestors.
		This way, you can also define a document-wide default language, by adding a <code>language-xxxx</code> class on the <code>&lt;body></code> or <code>&lt;html></code> element.</p>

	<p>If you want to opt-out of highlighting for a <code>&lt;code></code> element that is a descendant of an element with a declared code language, you can add the class <code>language-none</code> to it (or any non-existing language, really).</p>

	<p>The <a href="https://www.w3.org/TR/html5/grouping-content.html#the-pre-element">recommended way to mark up a code block</a>
	(both for semantics and for Prism) is a <code>&lt;pre></code> element with a <code>&lt;code></code> element inside, like so:</p>
	<pre><code>&lt;pre>&lt;code class="language-css">p { color: red }&lt;/code>&lt;/pre></code></pre>
	<p>If you use that pattern, the <code>&lt;pre></code> will automatically get the <code>language-xxxx</code> class (if it doesn’t already have it) and will be styled as a code block.</p>

	<p>If you want to prevent any elements from being automatically highlighted, you can use the attribute <code>data-manual</code> on the <code>&lt;script></code> element you used for prism and use the <a href="extending.html#api">API</a>.
	Example:</p>
	<pre><code>&lt;script src="prism.js" data-manual>&lt;/script></code></pre>

	<h2>Usage with Webpack, Browserify, & Other Bundlers</h2>

	<p>If you want to use Prism with a bundler, install Prism with <code>npm</code>:</p>

	<pre><code>$ npm install prismjs</code></pre>

	<p>You can then <code class="language-js">import</code> into your bundle:</p>

	<pre><code class="language-js">import Prism from ''prismjs'';</code></pre>

	<p>To make it easy to configure your Prism instance with only the languages and plugins you need, use the babel plugin,
		<a href="https://github.com/mAAdhaTTah/babel-plugin-prismjs">babel-plugin-prismjs</a>. This will allow you to load
		the minimum number of languages and plugins to satisfy your needs.
		See that plugin''s documentation for configuration details.</p>

	<h2>Usage with Node</h2>

	<p>If you want to use Prism on the server or through the command line, Prism can be used with Node.js as well.
	This might be useful if you''re trying to generate static HTML pages with highlighted code for environments that don''t support browser-side JS, like <a href="https://www.ampproject.org/">AMP pages</a>.</p>

	<p>Example:</p>
	<pre><code class="language-js">var Prism = require(''prismjs'');

// The code snippet you want to highlight, as a string
var code = "var data = 1;";

// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.javascript, ''javascript'');</code></pre>

	<p>Requiring <code>prismjs</code> will load the default languages: <code>markup</code>, <code>css</code>,
		<code>clike</code> and <code>javascript</code>. You can load more languages with the
		<code class="language-javascript">loadLanguages()</code> utility, which will automatically handle any required dependencies.</p>
	<p>Example:</p>

	<pre><code class="language-js">var Prism = require(''prismjs'');
var loadLanguages = require(''prismjs/components/'');
loadLanguages([''haml'']);

// The code snippet you want to highlight, as a string
var code = "= [''hi'', ''there'', ''reader!''].join \" \"";

// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, ''haml'');</code></pre>

	<p><strong>Note</strong>: Do <em>not</em> use <code class="language-javascript">loadLanguages()</code> with Webpack or another bundler, as this will cause Webpack to include all languages and plugins. Use the babel plugin described above.</p>

</section>

<section id="languages-list" class="language-markup">
	<h1>Supported languages</h1>
	<p>This is the list of all <span id="languages-list-count"></span> languages currently supported by Prism, with
		their corresponding alias, to use in place of <code>xxxx</code> in the <code>language-xxxx</code> (or <code>lang-xxxx</code>) class:</p>
</section>

<section id="plugins">
	<h1>Plugins</h1>
	<p>Plugins are additional scripts (and CSS code) that extend Prism’s functionality. Many of the following plugins are official, but are released as plugins to keep the Prism Core small for those who don’t need the extra functionality.</p>
	<ul class="plugin-list"></ul>

	<p>No assembly required to use them. Just select them in the <a href="download.html">download</a> page.</p>
	<p>It’s very easy to <a href="extending.html#writing-plugins">write your own Prism plugins</a>. Did you write a plugin for Prism that you want added to this list? <a href="https://github.com/LeaVerou/prism" target="_blank">Send a pull request</a>!</p>
</section>

<section id="languages">
	<h1>Third-party language definitions</h1>

	<ul>
		<li><a href="https://github.com/SassDoc/prism-scss-sassdoc">SassDoc Sass/Scss comments</a></li>
	</ul>
</section>

<section id="tutorials">
	<h1>Third-party tutorials</h1>

	<p>Several tutorials have been written by members of the community to help you integrate Prism into multiple different website types and configurations:</p>

	<ul>
		<li><a href="https://websitebeaver.com/escape-html-inside-code-or-pre-tag-to-entities-to-display-raw-code-with-prismjs">Escape HTML Inside &lt;code&gt; or &lt;pre&gt; Tag to Entities to Display Raw Code with PrismJS</a></li>
		<li><a href="http://crambler.com/how-to-implement-prism-js-syntax-highlighting-into-your-wordpress-site/">How To Implement Prism.js Syntax Highlighting Into Your WordPress Site</a></li>
		<li><a href="http://wp.tutsplus.com/tutorials/plugins/adding-a-syntax-highlighter-shortcode-using-prism-js/">Adding a Syntax Highlighter Shortcode Using Prism.js | WPTuts+</a></li>
		<li><a href="https://www.stramaxon.com/2012/07/prism-syntax-highlighter-for-blogger.html">Implement PrismJs Syntax Highlighting to your Blogger/BlogSpot</a></li>
		<li><a href="http://www.allblogtools.com/tricks-and-hacks/beautify-source-codes-in-your-posts-with-prism-syntax-highlighter-for-blogger/">Beautify Source Codes In Your Posts With Prism Syntax Highlighter For Blogger</a></li>
		<li><a href="https://schier.co/blog/2013/01/07/how-to-re-run-prismjs-on-ajax-content.html">How To Re-Run Prism.js On AJAX Content</a></li>
		<li><a href="https://www.semisedlak.com/highlight-your-code-syntax-with-prismjs">Highlight your code syntax with Prism.js</a></li>
		<li><a href="https://usetypo3.com/fs-code-snippet.html">A code snippet content element powered by Prism.js for TYPO3 CMS</a></li>
		<li><a href="https://auralinna.blog/post/2017/code-syntax-highlighting-with-angular-and-prismjs">Code syntax highlighting with Angular and Prism.js</a></li>
	</ul>

	<p>Please note that the tutorials listed here are not verified to contain correct information. Read at your risk and always check the official documentation here if something doesn’t work :)</p>

	<p>Have you written a tutorial about Prism that’s not already included here? Send a pull request!</p>
</section>

<section id="credits">
	<h1>Credits</h1>
	<ul>
		<li>Special thanks to <a href="https://github.com/Golmote">Golmote</a> and <a href="https://github.com/apfelbox">Jannik Zschiesche</a> for their contributions and for being <strong>amazing maintainers</strong>. Prism would not have been able to keep up without their help.</li>
		<li>To <a href="https://twitter.com/kizmarh">Roman Komarov</a> for his contributions, feedback and testing.</li>
		<li>To <a href="https://twitter.com/zdfs">Zachary Forrest</a> for <a href="https://twitter.com/zdfs/statuses/217834980871639041">coming up with the name “Prism”</a></li>
		<li>To <a href="https://stellarr.deviantart.com/">stellarr</a> for the <a href="https://stellarr.deviantart.com/art/Spectra-Wallpaper-Pack-97785901">spectrum background</a> used on this page</li>
		<li>To <a href="https://twitter.com/thecodezombie">Jason Hobbs</a> for <a href="https://twitter.com/thecodezombie/status/217663703825399809">encouraging me</a> to release this script as standalone</li>
	</ul>
</section>

<footer data-src="templates/footer.html" data-type="text/html"></footer>

<script src="prism.js"></script>
<script src="utopia.js"></script>
<script src="components.js"></script>
<script src="code.js"></script>
<script>
(function() {
	var languageItems = [];
	var languages = components.languages;
	var count = 0;
	for (var id in languages) {
		if (id == ''meta'') {
			continue;
		}
		count++;
		var name = languages[id].title || languages[id];

		languageItems.push({
			tag: ''li'',
			attributes: {
				''data-id'': id
			},
			contents: [
				name,
				'' - '',
				{
					tag: ''code'',
					contents: id
				}
			]
		});
	}
	$u.element.create(''ul'', {
		contents: languageItems,
		inside: ''#languages-list''
	});
	$u.element.contents($(''#languages-list-count''), count);
}());
</script>

</body>
</html>
```', '1402');
INSERT INTO "news" VALUES ('0b8828bc-d597-4686-8bbf-97d23475a743', 'http两次请求之预请求options', '<p>在有很多情况下,当我们在js里面调用一次<code>ajax</code>请求时,在浏览器那边却会查询到两次请求,第一次的<code>Request Method</code>参数是<code>OPTIONS</code>,还有一次就是我们真正的请求,比如<code>get</code>或是<code>post</code>请求方式</p>
<p>查阅相关的资料之后发现,这是浏览器对复杂跨域请求的一种处理方式,在真正发送请求之前,会先进行一次预请求,就是我们刚刚说到的参数为<code>OPTIONS</code>的第一次请求,他的作用是用于试探性的服务器响应是否正确,即是否能接受真正的请求,如果在options请求之后获取到的响应是拒绝性质的,例如500等http状态,那么它就会停止第二次的真正请求的访问</p>
<h5 id="">大致说明一下,有三种方式会导致这种现象:</h5>
<ol>
<li>请求的方法不是<code>GET/HEAD/POST</code></li>
<li>POST请求的<code>Content-Type</code>并非<code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code>, 或<code>text/plain</code></li>
<li>请求设置了自定义的<code>header</code>字段</li>
</ol>
<p>比如我的我的<code>Content-Type</code>设置为`application/json;charset=utf-8并且自定义了header选项导致了这种情况。</p>', '2018-12-01 14:49:59.205875', 'zw', '8888', '1', null, '', null, '0', '', '1105', '这是浏览器对复杂跨域请求的一种处理方式,在真正发送请求之前,会先进行一次预请求,就是我们刚刚说到的参数为OPTIONS的第一次请求,他的作用是用于试探性的服务器响应是否正确', 'http,前端跨越', 'http-options', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '转载', '在有很多情况下,当我们在js里面调用一次`ajax`请求时,在浏览器那边却会查询到两次请求,第一次的`Request Method`参数是`OPTIONS`,还有一次就是我们真正的请求,比如`get`或是`post`请求方式

查阅相关的资料之后发现,这是浏览器对复杂跨域请求的一种处理方式,在真正发送请求之前,会先进行一次预请求,就是我们刚刚说到的参数为`OPTIONS`的第一次请求,他的作用是用于试探性的服务器响应是否正确,即是否能接受真正的请求,如果在options请求之后获取到的响应是拒绝性质的,例如500等http状态,那么它就会停止第二次的真正请求的访问

#####大致说明一下,有三种方式会导致这种现象:

1. 请求的方法不是`GET/HEAD/POST`
2. POST请求的`Content-Type`并非`application/x-www-form-urlencoded`, `multipart/form-data`, 或`text/plain`
3. 请求设置了自定义的`header`字段

比如我的我的`Content-Type`设置为`application/json;charset=utf-8`并且自定义了header选项导致了这种情况。', '1402');
INSERT INTO "news" VALUES ('e748120b-bf56-49c4-816e-d17b73e8c3bf', '学习java笔记', '<h2 id="map">map</h2>
<pre><code class="java language-java">HashMap&lt;Object,Object&gt; map = new HashMap&lt;Object,Object&gt;();
map.put(1,"三国");//值是字符串
map.put("数组",new int[]{1,2,3});//值是数组
map.put(null, null);//值是null
map.put(map,map);//值是map自己
map.put(''A'',2.8 );//值是浮点数
</code></pre>
<h2 id="usertokenvo">user对象属性赋值给tokenVo对象</h2>
<pre><code class="java language-java">BeanUtils.copyProperties(user, tokenVo);
</code></pre>
<h2 id="">判断空</h2>
<ol>
<li>判断字符串或者对象是否为空</li>
</ol>
<pre><code class="java language-java">//而org.springframework.util包下的参数是Object类，也就是不仅仅能判断String类型，还能判断其他类型，比如Long等类型。
StringUtils.isEmpty(Object str); 
</code></pre>
<ol start="2">
<li>判断数组是否为空</li>
</ol>
<pre><code class="java language-java">list.isEmpty(); //返回boolean类型。
</code></pre>
<ol start="3">
<li>判断集合是否为空</li>
</ol>
<pre><code class="java language-java">CollectionUtils.isEmpty(null): true
CollectionUtils.isEmpty(new ArrayList()): true
CollectionUtils.isEmpty({a,b}): false
</code></pre>
<pre><code class="java language-java">CollectionUtils.isNotEmpty(null): false
CollectionUtils.isNotEmpty(new ArrayList()): false
CollectionUtils.isNotEmpty({a,b}): true
</code></pre>
<p>2个集合间的操作： </p>
<p>集合a: {1,2,3,3,4,5}，集合b: {3,4,4,5,6,7}</p>
<pre><code class="java language-java">CollectionUtils.union(a, b)(并集): {1,2,3,3,4,4,5,6,7}
CollectionUtils.intersection(a, b)(交集): {3,4,5}
CollectionUtils.disjunction(a, b)(交集的补集): {1,2,3,4,6,7}
CollectionUtils.disjunction(b, a)(交集的补集): {1,2,3,4,6,7}
CollectionUtils.subtract(a, b)(A与B的差): {1,2,3}
CollectionUtils.subtract(b, a)(B与A的差): {4,6,7}
</code></pre>', '2018-12-04 21:56:24.51944', 'zw', '8888', '5', null, '', null, '0', '', '1105', '学习java的笔记', 'java', 'java-note', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '原创', '## map
```java
HashMap<Object,Object> map = new HashMap<Object,Object>();
map.put(1,"三国");//值是字符串
map.put("数组",new int[]{1,2,3});//值是数组
map.put(null, null);//值是null
map.put(map,map);//值是map自己
map.put(''A'',2.8 );//值是浮点数
```
## user对象属性赋值给tokenVo对象
```java
BeanUtils.copyProperties(user, tokenVo);
```


', '1402');
INSERT INTO "news" VALUES ('dc2ae38f-237a-487b-95bf-b4b6f841ff43', 'Navicat11.2连接MySQL中文乱码问题', '<h2 id="">问题</h2>
<ol>
<li>Navicat11连接MySQL，使用Navicat创建的数据库和表，插入中文数据，Navicat里显示正常，在浏览器上获取接口数据乱码。</li>
<li>然后使用命令创建的数据库和表，插入中文数据，在Navicat里显示乱码，在浏览器获取接口数据正常</li>
</ol>
<h2 id="-1">原因</h2>
<p>navicat和MySQL字符集编码不同导致的</p>
<h2 id="-2">解决方法</h2>
<h4 id="1utf8mysql">1.建立连接时编码选择<code>UTF-8</code>，勾上<code>使用MYSQL字符集</code>。数据库的属性设置为</h4>
<h6 id="navicat11mysql">注意：Navicat11以上版本没有<code>使用MYSQL字符集</code>选项，跳过这一步骤</h6>
<p><img src="/v1/file/img/9f71df59-1665-4579-82e8-95d0a71346e7.png" alt="Navicat MySql中文乱码1" />
<img src="/v1/file/img/584bd1d2-9020-4d4a-96a0-11c2e762e650.png" alt="Navicat MySql中文乱码2" /></p>
<h4 id="2showvariableslikecharshowvariableslikecollation_">2.用 <code>show variables like''char%'';</code>和 <code>showvariables like ''collation_%'';</code>来查看一下，手动修改编码配置</h4>
<h6 id="mysqlnavicat">注意：分别在MYSQL、Navicat中运行命令</h6>
<p><img src="/v1/file/img/540062ac-5f09-4fda-8b83-2e971d0642fc.png" alt="Navicat MySql中文乱码3" />
<img src="/v1/file/img/742a3c0b-566f-4c1d-8c7a-82aceb68ff8a.png" alt="Navicat MySql中文乱码4" /></p>
<p>两边有些字符集和校对的系统变量是不同的，至此，我找到了问题的关键，以MySQL配置为准。</p>
<h6 id="navicat">在Navicat 中运行以下命令：</h6>
<pre><code class="mySql language-mySql">set collation_connection= utf8_general_ci;
set collation_database= utf8_general_ci;

set character_set_client= utf8;
set character_set_connection =utf8 ;
set character_set_results=utf8 ;
</code></pre>
<h2 id="3macnavicatencodingauto">3.如果使用的是Mac，Navicat创建连接的时候，Encoding必须选Auto</h2>
<p>删除Navicat与MySQL连接，重新创建连接
<img src="/v1/file/img/fcb8c099-96ab-45ef-92c0-65f5199ac300.png" alt="Navicat创建连接的时候，Encoding必须选Auto" /></p>', '2018-12-04 16:15:20.912499', 'zw', '8888', '3', null, '', null, '0', '', '1105', 'Navicat11.2连接MySql中文乱码问题,Navicat11版本连接配置“高级”没有“使用MySQL字符集”，必须手动修改字符集编码，如果使用的是Mac，Navicat创建连接的时候，Encoding必须选Auto', 'mysql中文乱码,navicat中文乱码', 'navicat-mysql-messy-code', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '原创', '## 问题
1. Navicat11连接MySQL，使用Navicat创建的数据库和表，插入中文数据，Navicat里显示正常，在浏览器上获取接口数据乱码。
2. 然后使用命令创建的数据库和表，插入中文数据，在Navicat里显示乱码，在浏览器获取接口数据正常

## 原因
navicat和MySQL字符集编码不同导致的

## 解决方法
#### 1.建立连接时编码选择`UTF-8`，勾上`使用MYSQL字符集`。数据库的属性设置为
###### 注意：Navicat11以上版本没有`使用MYSQL字符集`选项，跳过这一步骤

![Navicat MySql中文乱码1](/v1/file/img/9f71df59-1665-4579-82e8-95d0a71346e7.png)
![Navicat MySql中文乱码2](/v1/file/img/584bd1d2-9020-4d4a-96a0-11c2e762e650.png)

#### 2.用 `show variables like''char%'';`和 `showvariables like ''collation_%'';`来查看一下，手动修改编码配置
###### 注意：分别在MYSQL、Navicat中运行命令
![Navicat MySql中文乱码3](/v1/file/img/540062ac-5f09-4fda-8b83-2e971d0642fc.png)
![Navicat MySql中文乱码4](/v1/file/img/742a3c0b-566f-4c1d-8c7a-82aceb68ff8a.png)

两边有些字符集和校对的系统变量是不同的，至此，我找到了问题的关键，以MySQL配置为准。
######在Navicat 中运行以下命令：


```mySql
set collation_connection= utf8_general_ci;
set collation_database= utf8_general_ci;

set character_set_client= utf8;
set character_set_connection =utf8 ;
set character_set_results=utf8 ;
```
## 3.如果使用的是Mac，Navicat创建连接的时候，Encoding必须选Auto
删除Navicat与MySQL的连接，重新创建连接
![Navicat创建连接的时候，Encoding必须选Auto](/v1/file/img/fcb8c099-96ab-45ef-92c0-65f5199ac300.png)

', '1402');
INSERT INTO "news" VALUES ('838c08c6-ade0-4b8d-b392-2646b84b8c66', 'import引入模块路径中@符号怎么设置', '<p>import引入模块路径中@符号，是为了简化引入模块路径，尽量少写<code>../../../</code>这样的路径代码</p>
<p>如下，代码第二句就非常简洁引入了模块</p>
<pre><code class="js language-js">import {model} from "./../../../../common/model";
import {model} from "@/common/model";
</code></pre>
<p>要使用@符号简化引入模块，需要做对应配置，下面写<code>vue</code>和<code>angualr</code>的配置方法</p>
<h2 id="angualrimport">angualr配置import  @符号</h2>
<p>在<code>tsconfig.json</code>文件里配置<code>paths</code>:</p>
<pre><code class="js language-js"> {"paths": {
      "@restFullServer": [
        "app/shared/restFullServer"
      ],
      "@restFullServer/*": [
        "app/shared/restFullServer/*"
      ],
      "@class2": [
        "app/class"
      ],
      "@class2/*": [
        "app/class/*"
      ],
      "@vo": [
        "app/vo"
      ],
      "@vo/*": [
        "app/vo/*"
      ],
      "@shared": [
        "app/shared"
      ],
      "@shared/*": [
        "app/shared/*"
      ],
      "@core": [
        "app/core"
      ],
      "@core/*": [
        "app/core/*"
      ],
      "@testing": [
        "testing"
      ],
      "@testing/*": [
        "testing/*"
      ],
      "@env": [
        "environments"
      ],
      "@env/*": [
        "environments/*"
      ]
    }
}
</code></pre>
<h2 id="vueimport">vue配置import  @符号</h2>
<p>在<code>build/webpack.base.conf.js</code>配置</p>
<pre><code class="js language-js">{
  resolve: {
    // 自动补全的扩展名
    extensions: [''.js'', ''.vue'', ''.json''],
    // 默认路径代理
    // 例如 import Vue from ''vue''，会自动到 ''vue/dist/vue.common.js''中寻找
    alias: {
      ''vue$'': ''vue/dist/vue.esm.js'',
      ''@'': resolve(''src''),
      ''img'': resolve(''src/img''),
      ''rs'': resolve(''src/restServer''),
      ''cmpts'': resolve(''src/components'')
    }
  }
}
</code></pre>', '2018-12-06 09:55:29.479697', 'zw', '8888', '3', null, '', null, '0', '', '1105', 'angular2中import引入模块路径中@符号设置，vue中import引入模块路径中@符号设置', 'anguarl @符号,import @符号', 'import-@', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '原创', 'import引入模块路径中@符号，是为了简化引入模块路径，尽量少写`../../../`这样的路径代码

如下，代码第二句就非常简洁引入了模块
```js
import {model} from "./../../../../common/model";
import {model} from "@/common/model";
```
要使用@符号简化引入模块，需要做对应配置，下面写`vue`和`angualr`的配置方法
## angualr配置import  @符号
在`tsconfig.json`文件里配置`paths`:
```js
 {"paths": {
      "@restFullServer": [
        "app/shared/restFullServer"
      ],
      "@restFullServer/*": [
        "app/shared/restFullServer/*"
      ],
      "@class2": [
        "app/class"
      ],
      "@class2/*": [
        "app/class/*"
      ],
      "@vo": [
        "app/vo"
      ],
      "@vo/*": [
        "app/vo/*"
      ],
      "@shared": [
        "app/shared"
      ],
      "@shared/*": [
        "app/shared/*"
      ],
      "@core": [
        "app/core"
      ],
      "@core/*": [
        "app/core/*"
      ],
      "@testing": [
        "testing"
      ],
      "@testing/*": [
        "testing/*"
      ],
      "@env": [
        "environments"
      ],
      "@env/*": [
        "environments/*"
      ]
    }
}
```
## vue配置import  @符号
在`build/webpack.base.conf.js`配置

```js
{
  resolve: {
    // 自动补全的扩展名
    extensions: [''.js'', ''.vue'', ''.json''],
    // 默认路径代理
    // 例如 import Vue from ''vue''，会自动到 ''vue/dist/vue.common.js''中寻找
    alias: {
      ''vue$'': ''vue/dist/vue.esm.js'',
      ''@'': resolve(''src''),
      ''img'': resolve(''src/img''),
      ''rs'': resolve(''src/restServer''),
      ''cmpts'': resolve(''src/components'')
    }
  }
}
```


', '1402');
INSERT INTO "news" VALUES ('cc9d881f-42bb-487d-8868-4e697a60483e', '数据库设计建表规范', '<p><a href="https://www.cnblogs.com/xphdbky/p/7154434.html">转载地址：https://www.cnblogs.com/xphdbky/p/7154434.html</a></p>
<h2 id="">基本建表规范：</h2>
<ol>
<li>自增主键一般都需要设置(id  int  unsigned  NOT  NULL  AUTO_INCREMENT);</li>
<li>不定长字符串长度使用varchar类型,需要考虑实际业务最长长度的基础上扩容20%到40%为宜,且长度取2的指数长为宜(64,128,256等);</li>
<li>定长长度使用char类型，长度直接取实际长度即可，类似于手机号字段;</li>
<li>所有字段除了软删除字段(delete_time),都需要设置为not  null,<strong>并且设置默认值(字符串默认值为'''',整型默认值为0)</strong>; </li>
<li>基本所有的字段，表名都加上备注，除了自增主键，创建时间，更新时间之类的通用字段。</li>
<li>表结构需指定存储引擎，默认字符集。</li>
<li><strong>关于索引的创建，建议只创建其它表在这个的表的外键和查询频繁的字段</strong>。其它字段在业务扩展时我会及时跟进并设定。</li>
<li>表名和字段名以英文加下划线隔分，字段中英文单词以不超过三个单词为宜。</li>
<li><strong>状态字段设置为tinyint</strong>,同时备注写清楚不同数字代表的类型。</li>
</ol>
<h2 id="-1">范式标准：</h2>
<p>基本表及其字段之间的关系, 应尽量满足第三范式。但是，满足第三范式的数据库设计，往往不是最好的设计。
为了提高数据库的运行效率，<strong>常常需要降低范式标准：适当增加冗余，达到以空间换时间的目的</strong>。</p>
<h2 id="-2">冗余：</h2>
<p><strong>主键与外键在多表中的重复出现,不属于数据冗余</strong>，这个概念必须清楚，事实上有许多人还不清楚。</p>
<p><strong>非键字段的重复出现, 才是数据冗余</strong>！而且是一种低级冗余，即重复性的冗余。高级冗余不是字段的重复出现，而是字段的派生出现。</p>
<h2 id="-3">视图：</h2>
<p>对于某些与国家政治、经济、技术、军事和安全利益有关的信息系统，视图的作用更加重要。这些系统的基本表完成物理设计之后。</p>
<p>立即在基本表上建立第一层视图，这层视图的个数和结构，与基本表的个数和结构是完全相同。并且规定，<strong>所有的程序员，一律只准在视图上操作</strong>。</p>
<p>（问题：可以直接对视图进行update，delete操作吗？ 答：某些情况可以，有些情况不可以，例如join</p>
<p>建视图：create view a as select * from b）</p>
<p><strong>只有数据库管理员，带着多个人员共同掌握的“安全钥匙”，才能直接在基本表上操作</strong>。</p>
<h6 id="-4">防止数据库设计打补丁的方法是“三少原则”</h6>
<p>(1) <strong>一个数据库中表的个数越少越好</strong>。只有表的个数少了，才能说明系统的E--R图少而精，去掉了重复的多余的实体，形成了对客观世界的高度抽象，进行了系统的数据集成，防止了打补丁式的设计；</p>
<p>(2) <strong>一个表中组合主键的字段个数越少越好</strong>。因为主键的作用，一是建主键索引，二是做为子表的外键，所以组合主键的字段个数少了，不仅节省了运行时间，而且节省了索引存储空间；</p>
<p>(3) <strong>一个表中的字段个数越少越好</strong>。只有字段的个数少了，才能说明在系统中不存在数据重复，且很少有数据冗余，更重要的是督促读者<strong>学会“列变行”</strong>，这样就防止了将子表中的字段拉入到主表中去，</p>
<p>在主表中留下许多空余的字段。所谓“列变行”，就是将主表中的一部分内容拉出去，另外单独建一个子表。这个方法很简单，有的人就是不习惯、不采纳、不执行。</p>
<p>数据库设计的实用原则是：在数据冗余和处理速度之间找到合适的平衡点。“三少”是一个整体概念，综合观点，不能孤立某一个原则。该原则是相对的，不是绝对的。“三多”原则肯定是错误的。</p>
<p>试想：若覆盖系统同样的功能，一百个实体(共一千个属性) 的E--R图，肯定比二百个实体(共二千个属性) 的E--R图，要好得多。</p>
<p>提倡“三少”原则，是叫读者学会利用数据库设计技术进行系统的数据集成。数据集成的步骤是将文件系统集成为应用数据库，将应用数据库集成为主题数据库，将主题数据库集成为全局综合数据库。</p>
<p>集成的程度越高，数据共享性就越强，信息孤岛现象就越少，整个企业信息系统的全局E—R图中实体的个数、主键的个数、属性的个数就会越少。</p>
<p>提倡“三少”原则的目的，是防止读者利用打补丁技术，不断地对数据库进行增删改，使企业数据库变成了随意设计数据库表的“垃圾堆”，或数据库表的“大杂院”，</p>
<p>最后造成数据库中的基本表、代码表、中间表、临时表杂乱无章，不计其数，导致企事业单位的信息系统无法维护而瘫痪。</p>
<p>“三多”原则任何人都可以做到，该原则是“打补丁方法”设计数据库的歪理学说。“三少”原则是少而精的原则，它要求有较高的数据库设计技巧与艺术，不是任何人都能做到的，因为该原则是杜绝用“打补丁方法”设计数据库的理论依据</p>
<h2 id="-5">提高数据库运行效率的办法</h2>
<p>在给定的系统硬件和系统软件条件下，提高数据库系统的运行效率的办法是：</p>
<p>(1) 在数据库物理设计时，<strong>降低范式，增加冗余, 少用触发器, 多用存储过程</strong>。</p>
<p>(2) 当计算非常复杂、而且记录条数非常巨大时(例如一千万条)，复杂计算要先在数据库外面，以文件系统方式用C++语言计算处理完成之后，最后才入库追加到表中去。这是电信计费系统设计的经验。</p>
<p>(3) 发现某个表的记录太多，<strong>例如超过一千万条，则要对该表进行水平分割</strong>。水平分割的做法是，以该表主键PK的某个值为界线，将该表的记录水平分割为两个表。</p>
<p>若发现某个<strong>表的字段太多，例如超过八十个，则垂直分割该表</strong>，将原来的一个表分解为两个表。</p>
<p>(4) 对数据库管理系统DBMS进行系统优化，即<strong>优化各种系统参数</strong>，如缓冲区个数。</p>
<p>(5) 在使用面向数据的SQL语言进行程序设计时，尽量采取优化<strong>算法</strong>。</p>
<h6 id="-6">总之，要提高数据库的运行效率，必须从数据库系统级优化、数据库设计级优化、程序实现级优化，这三个层次上同时下功夫。</h6>', '2018-12-11 10:23:49.569084', 'zw', '8888', '2', null, '', null, '0', '', '1105', '基本建表规范', 'database,standard', 'database-table-standard', '7960ea0a-3c8e-4bd1-9e01-0d18335905f0', '转载', '[转载地址：https://www.cnblogs.com/xphdbky/p/7154434.html](https://www.cnblogs.com/xphdbky/p/7154434.html)
##基本建表规范：
1. 自增主键一般都需要设置(id  int  unsigned  NOT  NULL  AUTO_INCREMENT);
2. 不定长字符串长度使用varchar类型,需要考虑实际业务最长长度的基础上扩容20%到40%为宜,且长度取2的指数长为宜(64,128,256等);
3. 定长长度使用char类型，长度直接取实际长度即可，类似于手机号字段;
4. 所有字段除了软删除字段(delete_time),都需要设置为not  null,**并且设置默认值(字符串默认值为'''',整型默认值为0)**;
5. 基本所有的字段，表名都加上备注，除了自增主键，创建时间，更新时间之类的通用字段。
6. 表结构需指定存储引擎，默认字符集。
7. **关于索引的创建，建议只创建其它表在这个的表的外键和查询频繁的字段**。其它字段在业务扩展时我会及时跟进并设定。
8. 表名和字段名以英文加下划线隔分，字段中英文单词以不超过三个单词为宜。
9. **状态字段设置为tinyint**,同时备注写清楚不同数字代表的类型。

##范式标准：
基本表及其字段之间的关系, 应尽量满足第三范式。但是，满足第三范式的数据库设计，往往不是最好的设计。
为了提高数据库的运行效率，**常常需要降低范式标准：适当增加冗余，达到以空间换时间的目的**。


##冗余：
**主键与外键在多表中的重复出现,不属于数据冗余**，这个概念必须清楚，事实上有许多人还不清楚。

**非键字段的重复出现, 才是数据冗余**！而且是一种低级冗余，即重复性的冗余。高级冗余不是字段的重复出现，而是字段的派生出现。

##视图：
对于某些与国家政治、经济、技术、军事和安全利益有关的信息系统，视图的作用更加重要。这些系统的基本表完成物理设计之后。

立即在基本表上建立第一层视图，这层视图的个数和结构，与基本表的个数和结构是完全相同。并且规定，**所有的程序员，一律只准在视图上操作**。

（问题：可以直接对视图进行update，delete操作吗？ 答：某些情况可以，有些情况不可以，例如join

建视图：create view a as select * from b）

**只有数据库管理员，带着多个人员共同掌握的“安全钥匙”，才能直接在基本表上操作**。

######防止数据库设计打补丁的方法是“三少原则”
(1) **一个数据库中表的个数越少越好**。只有表的个数少了，才能说明系统的E--R图少而精，去掉了重复的多余的实体，形成了对客观世界的高度抽象，进行了系统的数据集成，防止了打补丁式的设计；

(2) **一个表中组合主键的字段个数越少越好**。因为主键的作用，一是建主键索引，二是做为子表的外键，所以组合主键的字段个数少了，不仅节省了运行时间，而且节省了索引存储空间；

(3) **一个表中的字段个数越少越好**。只有字段的个数少了，才能说明在系统中不存在数据重复，且很少有数据冗余，更重要的是督促读者**学会“列变行”**，这样就防止了将子表中的字段拉入到主表中去，

在主表中留下许多空余的字段。所谓“列变行”，就是将主表中的一部分内容拉出去，另外单独建一个子表。这个方法很简单，有的人就是不习惯、不采纳、不执行。

数据库设计的实用原则是：在数据冗余和处理速度之间找到合适的平衡点。“三少”是一个整体概念，综合观点，不能孤立某一个原则。该原则是相对的，不是绝对的。“三多”原则肯定是错误的。

试想：若覆盖系统同样的功能，一百个实体(共一千个属性) 的E--R图，肯定比二百个实体(共二千个属性) 的E--R图，要好得多。

提倡“三少”原则，是叫读者学会利用数据库设计技术进行系统的数据集成。数据集成的步骤是将文件系统集成为应用数据库，将应用数据库集成为主题数据库，将主题数据库集成为全局综合数据库。

集成的程度越高，数据共享性就越强，信息孤岛现象就越少，整个企业信息系统的全局E—R图中实体的个数、主键的个数、属性的个数就会越少。

提倡“三少”原则的目的，是防止读者利用打补丁技术，不断地对数据库进行增删改，使企业数据库变成了随意设计数据库表的“垃圾堆”，或数据库表的“大杂院”，

最后造成数据库中的基本表、代码表、中间表、临时表杂乱无章，不计其数，导致企事业单位的信息系统无法维护而瘫痪。

“三多”原则任何人都可以做到，该原则是“打补丁方法”设计数据库的歪理学说。“三少”原则是少而精的原则，它要求有较高的数据库设计技巧与艺术，不是任何人都能做到的，因为该原则是杜绝用“打补丁方法”设计数据库的理论依据

 

##提高数据库运行效率的办法

在给定的系统硬件和系统软件条件下，提高数据库系统的运行效率的办法是：

(1) 在数据库物理设计时，**降低范式，增加冗余, 少用触发器, 多用存储过程**。

(2) 当计算非常复杂、而且记录条数非常巨大时(例如一千万条)，复杂计算要先在数据库外面，以文件系统方式用C++语言计算处理完成之后，最后才入库追加到表中去。这是电信计费系统设计的经验。

(3) 发现某个表的记录太多，**例如超过一千万条，则要对该表进行水平分割**。水平分割的做法是，以该表主键PK的某个值为界线，将该表的记录水平分割为两个表。

若发现某个**表的字段太多，例如超过八十个，则垂直分割该表**，将原来的一个表分解为两个表。

(4) 对数据库管理系统DBMS进行系统优化，即**优化各种系统参数**，如缓冲区个数。

(5) 在使用面向数据的SQL语言进行程序设计时，尽量采取优化**算法**。


###### 总之，要提高数据库的运行效率，必须从数据库系统级优化、数据库设计级优化、程序实现级优化，这三个层次上同时下功夫。', '1402');
COMMIT;

-- ----------------------------
--  Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS "files";
CREATE TABLE "files" (
	"id" varchar COLLATE "default",
	"type" int2,
	"user_id" varchar COLLATE "default",
	"create_time" timestamp(6) NULL
)
WITH (OIDS=FALSE);

-- ----------------------------
--  Records of files
-- ----------------------------
BEGIN;
INSERT INTO "files" VALUES ('eb4711a1-0f98-4271-82bb-3e72f453518b.jpg', '1301', '', '2018-11-20 21:11:02');
INSERT INTO "files" VALUES ('15306981-000d-4afe-99dc-17a1f118c9fb.jpg', '1302', '', '2018-11-23 16:30:23.952405');
INSERT INTO "files" VALUES ('9f71df59-1665-4579-82e8-95d0a71346e7.png', '1302', '', '2018-12-04 16:48:15.742867');
INSERT INTO "files" VALUES ('540062ac-5f09-4fda-8b83-2e971d0642fc.png', '1302', '', '2018-12-04 16:48:20.948315');
INSERT INTO "files" VALUES ('742a3c0b-566f-4c1d-8c7a-82aceb68ff8a.png', '1302', '', '2018-12-04 16:48:25.399106');
INSERT INTO "files" VALUES ('584bd1d2-9020-4d4a-96a0-11c2e762e650.png', '1302', '', '2018-12-04 16:48:30.706975');
INSERT INTO "files" VALUES ('fcb8c099-96ab-45ef-92c0-65f5199ac300.png', '1302', '', '2018-12-04 17:08:41.02105');
COMMIT;

-- ----------------------------
--  Primary key structure for table news_type
-- ----------------------------
ALTER TABLE "news_type" ADD PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;

-- ----------------------------
--  Primary key structure for table news_review
-- ----------------------------
ALTER TABLE "news_review" ADD PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;

-- ----------------------------
--  Primary key structure for table users
-- ----------------------------
ALTER TABLE "users" ADD PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;

-- ----------------------------
--  Primary key structure for table news
-- ----------------------------
ALTER TABLE "news" ADD PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;

