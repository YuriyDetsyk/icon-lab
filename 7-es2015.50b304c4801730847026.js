(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{u4d5:function(e,t,n){"use strict";n.r(t),n.d(t,"LabModule",function(){return qe});var i=n("ofXK"),o=n("tyNb"),r=n("3Pt+"),s=n("XNiG"),c=n("eIep"),a=n("lJxs"),l=n("D0XW"),d=n("7o/Q"),b=n("WMd4");function h(e,t=l.a){var n;const i=(n=e)instanceof Date&&!isNaN(+n)?+e-t.now():Math.abs(e);return e=>e.lift(new g(i,t))}class g{constructor(e,t){this.delay=e,this.scheduler=t}call(e,t){return t.subscribe(new u(e,this.delay,this.scheduler))}}class u extends d.a{constructor(e,t,n){super(e),this.delay=t,this.scheduler=n,this.queue=[],this.active=!1,this.errored=!1}static dispatch(e){const t=e.source,n=t.queue,i=e.scheduler,o=e.destination;for(;n.length>0&&n[0].time-i.now()<=0;)n.shift().notification.observe(o);if(n.length>0){const t=Math.max(0,n[0].time-i.now());this.schedule(e,t)}else this.unsubscribe(),t.active=!1}_schedule(e){this.active=!0,this.destination.add(e.schedule(u.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}scheduleNotification(e){if(!0===this.errored)return;const t=this.scheduler,n=new p(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}_next(e){this.scheduleNotification(b.a.createNext(e))}_error(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}_complete(){this.scheduleNotification(b.a.createComplete()),this.unsubscribe()}}class p{constructor(e,t){this.time=e,this.notification=t}}var f=n("1G5W"),m=n("pLZG"),y=n("g2CB"),v=n("fXoL"),O=n("qjxN"),w=n("jkwp"),C=n("2Vo4");let P=(()=>{class e{constructor(){this.MEDIA_QUERIES={largeScreen:"(min-width: 1200px)"},this.hasOpenedRightSidebar$=new C.a(!1)}get hasOpenedRightSidebar(){return this.hasOpenedRightSidebar$.value}get openedRightSidebar(){return this.hasOpenedRightSidebar$.asObservable()}toggleRightSidebar(e){this.hasOpenedRightSidebar!==e&&this.hasOpenedRightSidebar$.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=v.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=n("gA0Q"),S=n("A2DH");function M(e,t){if(1&e){const e=v.Qb();v.Pb(0,"span",2),v.Wb("click",function(){v.mc(e);const n=t.$implicit;return v.Yb().setMode(n)})("keyup.enter",function(){v.mc(e);const n=t.$implicit;return v.Yb().setMode(n)}),v.Zb(1,"async"),v.Ob()}if(2&e){const e=t.$implicit,n=t.index,i=v.Yb();v.Bb("icon icon-layout-",e," layout mb-3"),v.Cb("active",v.ac(1,6,i.isActive(e))),v.fc("title","Layout "+(n+1))}}let _=(()=>{class e{constructor(e){this.labService=e,this.layoutModes=[S.a.Single,S.a.BottomRight,S.a.BottomLeft]}setMode(e){this.labService.setLayoutMode(e)}isActive(e){return this.labService.layoutModeChanged.pipe(Object(a.a)(({mode:t})=>t===e))}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(O.a))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-layout-selector"]],decls:2,vars:1,consts:[[1,"d-flex","flex-column"],["tabindex","0",3,"class","title","active","click","keyup.enter",4,"ngFor","ngForOf"],["tabindex","0",3,"title","click","keyup.enter"]],template:function(e,t){1&e&&(v.Pb(0,"div",0),v.sc(1,M,2,8,"span",1),v.Ob()),2&e&&(v.yb(1),v.ec("ngForOf",t.layoutModes))},directives:[i.l],pipes:[i.b],styles:[""]}),e})();var I=n("GNMR"),x=n("zolh"),$=n("LOHq");function F(e,t){if(1&e&&(v.Nb(0),v.Lb(1,"bd-playground-icon",3),v.Zb(2,"async"),v.Mb()),2&e){const e=t.$implicit,n=v.Yb();v.yb(1),v.ec("icon",v.ac(2,3,n.getIcon(e)))("position",e)("canRotate",e!==n.IconPosition.Background)}}let B=(()=>{class e{constructor(e,t){this.labService=e,this.backgroundService=t,this.IconPosition=I.a,this.availablePositions$=this.labService.availablePositionsChanged,this.backgroundColor$=this.backgroundService.backgroundColorChanged}get artboardSize(){return x.a.getArtboardSize(!!this.backgroundService.background)}getIcon(e){return this.labService.getIcon(e)}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(O.a),v.Kb(w.a))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-playground"]],decls:5,vars:11,consts:[[1,"playground-wrapper"],[1,"position-relative","playground-body"],[4,"ngFor","ngForOf"],[3,"icon","position","canRotate"]],template:function(e,t){1&e&&(v.Pb(0,"div",0),v.Zb(1,"async"),v.Pb(2,"div",1),v.sc(3,F,3,5,"ng-container",2),v.Zb(4,"async"),v.Ob(),v.Ob()),2&e&&(v.rc("background-color",v.ac(1,7,t.backgroundColor$)),v.yb(2),v.rc("width",t.artboardSize.width,"px")("height",t.artboardSize.height,"px"),v.yb(1),v.ec("ngForOf",v.ac(4,9,t.availablePositions$)))},directives:[i.l,$.a],pipes:[i.b],styles:[".playground-wrapper[_ngcontent-%COMP%]{border:1px solid #f3eefc;border-radius:.5rem;width:340px;height:340px}.playground-wrapper[_ngcontent-%COMP%], .playground-wrapper[_ngcontent-%COMP%]   .playground-body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),e})();const j=["exportDropdown"];let E=(()=>{class e{constructor(e,t){this.labService=e,this.renderer=t,this.exportDropdownOpened=!1,this.IconType=y.a}ngOnInit(){this.listenerFn=this.renderer.listen("window","click",e=>{e.composedPath().includes(this.exportDropdown.nativeElement)||(this.exportDropdownOpened=!1)})}ngOnDestroy(){this.listenerFn()}saveToGallery(){}export(e){this.labService.exportImage(e)}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(O.a),v.Kb(v.E))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-lab-actions"]],viewQuery:function(e,t){if(1&e&&v.yc(j,!0),2&e){let e;v.jc(e=v.Xb())&&(t.exportDropdown=e.first)}},decls:14,vars:2,consts:[[1,"d-flex","justify-content-between","p-3","lab-actions"],["disabled","",1,"btn",3,"click"],[1,"dropdown","dropdown-export"],["exportDropdown",""],["type","button",1,"btn","btn-secondary","dropdown-toggle",3,"click"],[1,"dropdown-menu"],[1,"dropdown-item",3,"click"]],template:function(e,t){1&e&&(v.Pb(0,"div",0),v.Pb(1,"button",1),v.Wb("click",function(){return t.saveToGallery()}),v.uc(2,"Save to Gallery"),v.Ob(),v.Pb(3,"div",2,3),v.Pb(5,"button",4),v.Wb("click",function(){return t.exportDropdownOpened=!t.exportDropdownOpened}),v.uc(6," Export "),v.Ob(),v.Pb(7,"ul",5),v.Pb(8,"li"),v.Pb(9,"a",6),v.Wb("click",function(){return t.export(t.IconType.Vector)}),v.uc(10,"Export SVG"),v.Ob(),v.Ob(),v.Pb(11,"li"),v.Pb(12,"a",6),v.Wb("click",function(){return t.export(t.IconType.Raster)}),v.uc(13,"Export PNG"),v.Ob(),v.Ob(),v.Ob(),v.Ob(),v.Ob()),2&e&&(v.yb(7),v.Cb("opened",t.exportDropdownOpened))},styles:[".lab-actions[_ngcontent-%COMP%]{background-color:#f8f5fe;border-radius:1rem}.btn[_ngcontent-%COMP%]{padding:.75rem 3rem}.dropdown.dropdown-export[_ngcontent-%COMP%]   .dropdown-menu.opened[_ngcontent-%COMP%]{top:auto;bottom:100%}"]}),e})();var T=n("aF9I"),L=n("2P7y");function D(e){return Array.isArray(e)?e:[e]}var N=n("itXk"),R=n("GyhO"),A=n("HDdC"),K=n("IzEk");class Y{constructor(e){this.total=e}call(e,t){return t.subscribe(new Z(e,this.total))}}class Z extends d.a{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){++this.count>this.total&&this.destination.next(e)}}var G=n("Kj3r"),W=n("JX91");let q;try{q="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(Qe){q=!1}let Q=(()=>{class e{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Object(i.q)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!q)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return e.\u0275fac=function(t){return new(t||e)(v.Tb(v.B))},e.\u0275prov=Object(v.Gb)({factory:function(){return new e(Object(v.Tb)(v.B))},token:e,providedIn:"root"}),e})();const H=new Set;let U,z=(()=>{class e{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):V}matchMedia(e){return this._platform.WEBKIT&&function(e){if(!H.has(e))try{U||(U=document.createElement("style"),U.setAttribute("type","text/css"),document.head.appendChild(U)),U.sheet&&(U.sheet.insertRule(`@media ${e} {.fx-query-test{ }}`,0),H.add(e))}catch(t){console.error(t)}}(e),this._matchMedia(e)}}return e.\u0275fac=function(t){return new(t||e)(v.Tb(Q))},e.\u0275prov=Object(v.Gb)({factory:function(){return new e(Object(v.Tb)(Q))},token:e,providedIn:"root"}),e})();function V(e){return{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{}}}let X=(()=>{class e{constructor(e,t){this._mediaMatcher=e,this._zone=t,this._queries=new Map,this._destroySubject=new s.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return J(D(e)).some(e=>this._registerQuery(e).mql.matches)}observe(e){const t=J(D(e)).map(e=>this._registerQuery(e).observable);let n=Object(N.b)(t);return n=Object(R.a)(n.pipe(Object(K.a)(1)),n.pipe(e=>e.lift(new Y(1)),Object(G.a)(0))),n.pipe(Object(a.a)(e=>{const t={matches:!1,breakpoints:{}};return e.forEach(({matches:e,query:n})=>{t.matches=t.matches||e,t.breakpoints[n]=e}),t}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const t=this._mediaMatcher.matchMedia(e),n={observable:new A.a(e=>{const n=t=>this._zone.run(()=>e.next(t));return t.addListener(n),()=>{t.removeListener(n)}}).pipe(Object(W.a)(t),Object(a.a)(({matches:t})=>({query:e,matches:t})),Object(f.a)(this._destroySubject)),mql:t};return this._queries.set(e,n),n}}return e.\u0275fac=function(t){return new(t||e)(v.Tb(z),v.Tb(v.z))},e.\u0275prov=Object(v.Gb)({factory:function(){return new e(Object(v.Tb)(z),Object(v.Tb)(v.z))},token:e,providedIn:"root"}),e})();function J(e){return e.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}var ee=n("VRyK"),te=n("/uUt"),ne=n("5+tZ"),ie=n("AytR"),oe=n("CX13"),re=n("rC29"),se=n("ux41"),ce=n("xv8/"),ae=n("WTUP"),le=n("4yaq"),de=n("OpGx"),be=n("0njA");function he(e,t){if(1&e){const e=v.Qb();v.Pb(0,"bd-icon",4),v.Wb("click",function(){v.mc(e);const n=t.$implicit;return v.Yb().setIcon(n)}),v.Ob()}if(2&e){const e=t.$implicit;v.ec("icon",e)("title",e.name)}}let ge=(()=>{class e{constructor(e){this.labService=e,this.recentIcons$=this.labService.recentIconsChanged}trackIconsFn(e,t){return t.id}setIcon(e){this.labService.setIcon(e)}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(O.a))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-recently-used"]],decls:6,vars:4,consts:[[1,"mb-2"],["id","recently-used",1,"d-flex","align-items-center"],[1,"d-flex","align-items-center","scroll"],["class","icon-wrapper",3,"icon","title","click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"icon-wrapper",3,"icon","title","click"]],template:function(e,t){1&e&&(v.Pb(0,"h3",0),v.uc(1,"Recently used icons"),v.Ob(),v.Pb(2,"section",1),v.Pb(3,"div",2),v.sc(4,he,1,2,"bd-icon",3),v.Zb(5,"async"),v.Ob(),v.Ob()),2&e&&(v.yb(4),v.ec("ngForOf",v.ac(5,2,t.recentIcons$))("ngForTrackBy",t.trackIconsFn))},directives:[i.l,be.a],pipes:[i.b],styles:["#recently-used[_ngcontent-%COMP%]{background-color:#f8f5fe;border-radius:.5rem;margin-bottom:2rem}#recently-used[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:hidden;max-width:100%}#recently-used[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{margin:0 .5rem;overflow:visible}#recently-used[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]:first-child{margin-left:0}#recently-used[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]:last-child{margin-right:0}#recently-used[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]     .icon:not(.icon-premium){background-color:initial}"]}),e})();function ue(e,t){1&e&&v.Lb(0,"span",6)}function pe(e,t){if(1&e&&(v.Pb(0,"h3",11),v.uc(1),v.Ob()),2&e){const e=v.Yb().ngIf,t=v.Yb();v.yb(1),v.xc("",e.length," ",t.DataHelper.hasUnit(e.length)?"icon":"icons"," available")}}function fe(e,t){if(1&e){const e=v.Qb();v.Pb(0,"div",12),v.Pb(1,"bd-icon",13),v.Wb("click",function(){v.mc(e);const n=t.$implicit;return v.Yb(2).setIcon(n)}),v.Ob(),v.Ob()}if(2&e){const e=t.$implicit;v.yb(1),v.ec("icon",e)("title",e.name)}}function me(e,t){if(1&e&&(v.Nb(0),v.sc(1,pe,2,2,"h3",7),v.Pb(2,"div",8),v.Pb(3,"div",9),v.sc(4,fe,2,2,"div",10),v.Ob(),v.Ob(),v.Mb()),2&e){const e=t.ngIf,n=v.Yb();v.yb(1),v.ec("ngIf",!n.loading),v.yb(3),v.ec("ngForOf",e)("ngForTrackBy",n.trackIconsFn)}}let ye=(()=>{class e{constructor(e,t,n,i,o){this.iconService=e,this.categoryService=t,this.loadingService=n,this.labService=i,this.fb=o,this.searchForm=this.fb.group({keyword:this.iconService.getIconFilters().keyword,categoryId:this.iconService.getIconFilters().categoryId}),this.destroyed$=new s.a,this.icons$=Object(ee.a)(this.iconService.getIcons(this.searchForm.value),Object(ee.a)(this.keyword.valueChanges.pipe(Object(f.a)(this.destroyed$),Object(m.a)(e=>!e||1!==e.length),Object(G.a)(re.a.DEFAULT_DEBOUNCE_TIME),Object(te.a)()),this.categoryId.valueChanges.pipe(Object(f.a)(this.destroyed$),Object(te.a)())).pipe(h(0),Object(ne.a)(()=>this.iconService.getIcons(this.searchForm.value)))),this.loading=!1,this.categories$=this.categoryService.getCategories(),this.DataHelper=oe.a}get keyword(){return this.searchForm.controls.keyword}get categoryId(){return this.searchForm.controls.categoryId}ngOnInit(){this.loadingService.loadingSub.pipe(Object(f.a)(this.destroyed$),h(0)).subscribe(e=>this.loading=e&&this.loadingService.loadingMap.has(ie.a.apiUrl+"/icons"))}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}trackIconsFn(e,t){return t.id}setIcon(e){this.labService.setIcon(e)}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(se.a),v.Kb(ce.a),v.Kb(ae.a),v.Kb(O.a),v.Kb(r.d))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-tab-icons"]],decls:10,vars:8,consts:[[1,"dashed","right"],[3,"formGroup"],["placeholder","All Categories","formControlName","categoryId","valueProp","id","labelProp","name",1,"w-100","mb-3",3,"items"],["placeholder","Search...","formControlName","keyword",1,"w-100","search-keyword"],["class","spinner",4,"ngIf"],[4,"ngIf"],[1,"spinner"],["class","mb-2",4,"ngIf"],[1,"icons-list-wrapper"],[1,"d-flex","flex-wrap","icons-list"],["class","icon-item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-2"],[1,"icon-item"],[3,"icon","title","click"]],template:function(e,t){1&e&&(v.Pb(0,"h2",0),v.uc(1,"Icon Library"),v.Ob(),v.Pb(2,"form",1),v.Lb(3,"bd-dropdown",2),v.Zb(4,"async"),v.Lb(5,"bd-search-input",3),v.Ob(),v.sc(6,ue,1,0,"span",4),v.Lb(7,"bd-recently-used"),v.sc(8,me,5,3,"ng-container",5),v.Zb(9,"async")),2&e&&(v.yb(2),v.ec("formGroup",t.searchForm),v.yb(1),v.ec("items",v.ac(4,4,t.categories$)),v.yb(3),v.ec("ngIf",t.loading),v.yb(2),v.ec("ngIf",v.ac(9,6,t.icons$)))},directives:[r.q,r.m,r.h,le.a,r.l,r.g,de.a,i.m,ge,i.l,be.a],pipes:[i.b],styles:[".search-keyword[_ngcontent-%COMP%]{margin-bottom:2rem}.icons-list-wrapper[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;max-height:calc(100% - 20rem)}.icons-list-wrapper[_ngcontent-%COMP%]   .icons-list[_ngcontent-%COMP%]{margin:0 -.5rem}.icons-list-wrapper[_ngcontent-%COMP%]   .icons-list[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]{width:33.33%;padding:0 .5rem .5rem}@media (min-width:1300px){.icons-list-wrapper[_ngcontent-%COMP%]   .icons-list[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]{width:25%}}"]}),e})();var ve=n("vB35");function Oe(e,t){1&e&&v.Lb(0,"span",3)}function we(e,t){if(1&e&&(v.Pb(0,"h3"),v.uc(1),v.Ob()),2&e){const e=v.Yb().ngIf,t=v.Yb();v.yb(1),v.xc("",e.length," ",t.DataHelper.hasUnit(e.length)?"background":"backgrounds"," available")}}function Ce(e,t){if(1&e){const e=v.Qb();v.Pb(0,"div",8),v.Pb(1,"bd-icon",9),v.Wb("click",function(){v.mc(e);const n=t.$implicit;return v.Yb(2).setBackground(n)}),v.Ob(),v.Ob()}if(2&e){const e=t.$implicit,n=v.Yb(2);v.yb(1),v.ec("icon",n.IconHelper.mapBackgroundToIcon(e))("large",!0)("title",e.name)}}function Pe(e,t){if(1&e){const e=v.Qb();v.Nb(0),v.sc(1,we,2,2,"h3",2),v.Pb(2,"div",4),v.Pb(3,"div",5),v.Pb(4,"button",6),v.Wb("click",function(){return v.mc(e),v.Yb().clearBackground()}),v.uc(5,"Clear"),v.Ob(),v.sc(6,Ce,2,3,"div",7),v.Ob(),v.Ob(),v.Mb()}if(2&e){const e=t.ngIf,n=v.Yb();v.yb(1),v.ec("ngIf",!n.loading),v.yb(5),v.ec("ngForOf",e)("ngForTrackBy",n.trackBackgroundsFn)}}let ke=(()=>{class e{constructor(e,t){this.loadingService=e,this.backgroundService=t,this.destroyed$=new s.a,this.backgrounds$=this.backgroundService.getBackgrounds(),this.loading=!1,this.IconHelper=ve.a,this.DataHelper=oe.a}ngOnInit(){this.loadingService.loadingSub.pipe(Object(f.a)(this.destroyed$),h(0)).subscribe(e=>this.loading=e&&this.loadingService.loadingMap.has(ie.a.apiUrl+"/backgrounds"))}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}trackBackgroundsFn(e,t){return t.id}setBackground(e){this.backgroundService.setBackground(e)}clearBackground(){this.backgroundService.setBackground(null)}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(ae.a),v.Kb(w.a))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-tab-backgrounds"]],decls:5,vars:4,consts:[[1,"dashed","right"],["class","spinner",4,"ngIf"],[4,"ngIf"],[1,"spinner"],[1,"backgrounds-list-wrapper"],[1,"d-flex","flex-wrap","backgrounds-list"],[1,"btn","background-item",3,"click"],["class","background-item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"background-item"],[3,"icon","large","title","click"]],template:function(e,t){1&e&&(v.Pb(0,"h2",0),v.uc(1,"Backgrounds"),v.Ob(),v.sc(2,Oe,1,0,"span",1),v.sc(3,Pe,7,3,"ng-container",2),v.Zb(4,"async")),2&e&&(v.yb(2),v.ec("ngIf",t.loading),v.yb(1),v.ec("ngIf",v.ac(4,2,t.backgrounds$)))},directives:[i.m,i.l,be.a],pipes:[i.b],styles:[".backgrounds-list-wrapper[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;max-height:calc(100% - 4.1rem)}.backgrounds-list-wrapper[_ngcontent-%COMP%]   .backgrounds-list[_ngcontent-%COMP%]{margin:0 -.5rem}.backgrounds-list-wrapper[_ngcontent-%COMP%]   .backgrounds-list[_ngcontent-%COMP%]   .background-item[_ngcontent-%COMP%]{width:100%;padding:0 .5rem .5rem}@media (min-width:1300px){.backgrounds-list-wrapper[_ngcontent-%COMP%]   .backgrounds-list[_ngcontent-%COMP%]   .background-item[_ngcontent-%COMP%]{width:50%}}.backgrounds-list-wrapper[_ngcontent-%COMP%]   .backgrounds-list[_ngcontent-%COMP%]   .background-item.btn[_ngcontent-%COMP%]{border:1px solid #dbcbf5;box-shadow:none;width:100%;height:176px;margin:0 .5rem .5rem}@media (min-width:1300px){.backgrounds-list-wrapper[_ngcontent-%COMP%]   .backgrounds-list[_ngcontent-%COMP%]   .background-item.btn[_ngcontent-%COMP%]{width:176px}}"]}),e})(),Se=(()=>{class e{constructor(){this.style$=new C.a(null)}get styleChanged(){return this.style$.asObservable()}setStyle(e){this.isActive(e)||this.style$.next(e)}isActive(e){var t;return(null===(t=this.style$.value)||void 0===t?void 0:t.id)===e.id}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=v.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Me(e,t){if(1&e&&(v.Pb(0,"div",1),v.Pb(1,"h1",2),v.uc(2),v.Ob(),v.Ob()),2&e){const e=v.Yb();v.rc("background-image",e.ImageHelper.getCssUrl(e.style.url)),v.Cb("active",e.isActive(e.style)),v.yb(2),v.vc(e.style.name)}}let _e=(()=>{class e{constructor(e){this.iconStyleService=e,this.active=!1,this.ImageHelper=x.a}isActive(e){return this.iconStyleService.isActive(e)}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(Se))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-icon-style"]],inputs:{style:"style",active:"active"},decls:1,vars:1,consts:[["class","d-flex align-items-end p-3 icon-style","tabindex","0",3,"active","background-image",4,"ngIf"],["tabindex","0",1,"d-flex","align-items-end","p-3","icon-style"],[1,"m-0"]],template:function(e,t){1&e&&v.sc(0,Me,3,5,"div",0),2&e&&v.ec("ngIf",t.style)},directives:[i.m],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]   .icon-style[_ngcontent-%COMP%]{border:2px solid transparent;border-radius:.5rem;cursor:pointer;width:100%;height:176px;transition:all .1s ease-in-out}[_nghost-%COMP%]   .icon-style[_ngcontent-%COMP%]:hover{border-color:#14aaff}[_nghost-%COMP%]   .icon-style.active[_ngcontent-%COMP%], [_nghost-%COMP%]   .icon-style[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .icon-style[_ngcontent-%COMP%]:focus{border-color:#dbcbf5}"]}),e})();function Ie(e,t){if(1&e){const e=v.Qb();v.Pb(0,"div",7),v.Pb(1,"bd-icon-style",8),v.Wb("click",function(){v.mc(e);const n=t.$implicit;return v.Yb(2).setStyle(n)}),v.Ob(),v.Ob()}if(2&e){const e=t.$implicit;v.yb(1),v.qc(e),v.ec("active",!0)}}function xe(e,t){if(1&e&&(v.Nb(0),v.Pb(1,"h3"),v.uc(2),v.Ob(),v.Pb(3,"div",2),v.Pb(4,"div",3),v.sc(5,Ie,2,3,"div",4),v.Pb(6,"div",5),v.Pb(7,"h3",6),v.uc(8,"More styles are coming Soon..."),v.Ob(),v.Ob(),v.Ob(),v.Ob(),v.Mb()),2&e){const e=v.Yb();v.yb(2),v.xc("",e.styles.length," ",e.DataHelper.hasUnit(e.styles.length)?"style":"styles"," available"),v.yb(3),v.ec("ngForOf",e.styles)("ngForTrackBy",e.trackStylesFn)}}let $e=(()=>{class e{constructor(e){this.iconStyleService=e,this.styles=[{id:"some-id",name:"Bubbly Icons",url:"https://img.icon-lab.co/styles/bubbly-icons.png"}],this.DataHelper=oe.a}ngOnInit(){this.setStyle(this.styles[0])}trackStylesFn(e,t){return t.id}setStyle(e){this.iconStyleService.setStyle(e)}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(Se))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-tab-styles"]],decls:3,vars:1,consts:[[1,"dashed","right"],[4,"ngIf"],[1,"styles-list-wrapper"],[1,"d-flex","flex-wrap","styles-list"],["class","mb-2 style-item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"d-flex","justify-content-center","align-items-center","style-item","style-item-more"],[1,"m-0"],[1,"mb-2","style-item"],[3,"active","click"]],template:function(e,t){1&e&&(v.Pb(0,"h2",0),v.uc(1,"Icon Styles"),v.Ob(),v.sc(2,xe,9,4,"ng-container",1)),2&e&&(v.yb(2),v.ec("ngIf",t.styles))},directives:[i.m,i.l,_e],styles:[".styles-list-wrapper[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden;max-height:calc(100% - 4.1rem)}.styles-list-wrapper[_ngcontent-%COMP%]   .styles-list[_ngcontent-%COMP%]{margin:0 -.5rem}.styles-list-wrapper[_ngcontent-%COMP%]   .styles-list[_ngcontent-%COMP%]   .style-item[_ngcontent-%COMP%]{width:100%;padding:0 .5rem .5rem}.styles-list-wrapper[_ngcontent-%COMP%]   .styles-list[_ngcontent-%COMP%]   .style-item.style-item-more[_ngcontent-%COMP%]{background-color:#f8f5fe;border-radius:.5rem;height:176px}"]}),e})();function Fe(e,t){1&e&&v.Lb(0,"bd-tab-icons")}function Be(e,t){1&e&&v.Lb(0,"bd-tab-backgrounds")}function je(e,t){if(1&e&&(v.Nb(0),v.sc(1,Fe,1,0,"bd-tab-icons",4),v.Zb(2,"async"),v.sc(3,Be,1,0,"bd-tab-backgrounds",4),v.Zb(4,"async"),v.Mb()),2&e){const e=v.Yb();v.yb(1),v.ec("ngIf",v.ac(2,2,e.hasIconPosition$)),v.yb(2),v.ec("ngIf",v.ac(4,4,e.hasBackgroundPosition$))}}function Ee(e,t){1&e&&v.Lb(0,"bd-tab-styles")}let Te=(()=>{class e{constructor(e,t,n,i){this.breakpointObserver=e,this.renderer=t,this.layoutSevice=n,this.labService=i,this.hostClass=!0,this.labTabs=[{id:L.a.Icons,title:"Icons",active:!0},{id:L.a.Avatars,title:"Avatars"}],this.TabId=L.a,this.hasIconPosition$=this.labService.hasIconPosition$,this.hasBackgroundPosition$=this.labService.hasBackgroundPosition$,this.isLargeScreen=this.breakpointObserver.isMatched(this.layoutSevice.MEDIA_QUERIES.largeScreen),this.destroyed$=new s.a}ngOnInit(){this.listenerFn=this.renderer.listen("window","click",e=>{this.isLargeScreen||e.composedPath().some(e=>{var t,n;return null===(n=null===(t=e)||void 0===t?void 0:t.classList)||void 0===n?void 0:n.contains("right-sidebar")})||this.layoutSevice.toggleRightSidebar(!1)}),this.breakpointObserver.observe(this.layoutSevice.MEDIA_QUERIES.largeScreen).pipe(Object(f.a)(this.destroyed$)).subscribe(e=>{this.isLargeScreen=e.matches,this.layoutSevice.toggleRightSidebar(this.isLargeScreen)})}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete(),this.listenerFn()}onTabChange(e){this.activeTabId=e}toggleRightSidebar(e){this.layoutSevice.toggleRightSidebar(e)}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(X),v.Kb(v.E),v.Kb(P),v.Kb(O.a))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-right-sidebar"]],hostVars:2,hostBindings:function(e,t){2&e&&v.Cb("right-sidebar",t.hostClass)},decls:7,vars:6,consts:[[1,"d-flex","flex-column","sidebar-wrapper",3,"click"],[1,"content-wrapper","flex-shrink-1"],[4,"ngIf","ngIfElse"],["selectStyles",""],[4,"ngIf"]],template:function(e,t){if(1&e&&(v.Pb(0,"aside",0),v.Wb("click",function(){return t.toggleRightSidebar(!0)}),v.Pb(1,"div",1),v.sc(2,je,5,6,"ng-container",2),v.Zb(3,"async"),v.Zb(4,"async"),v.sc(5,Ee,1,0,"ng-template",null,3,v.tc),v.Ob(),v.Ob()),2&e){const e=v.kc(6);v.yb(2),v.ec("ngIf",v.ac(3,2,t.hasIconPosition$)||v.ac(4,4,t.hasBackgroundPosition$))("ngIfElse",e)}},directives:[i.m,ye,ke,$e],pipes:[i.b],styles:['[_nghost-%COMP%]{background-color:#fcfaff;border-left:1px solid #f3eefc;padding:2rem;width:337px;height:100%;box-shadow:4px 4px 16px rgba(219,203,245,.6);position:absolute;transition:right .3s ease-in-out;right:0;top:0}@media (min-width:1300px){[_nghost-%COMP%]{width:433px}}@media (max-width:1199px){.sidebar-hidden[_nghost-%COMP%]{right:-257px}.sidebar-hidden[_nghost-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;height:100%;position:absolute;top:0;left:0}}[_nghost-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{max-height:100%;overflow:hidden}']}),e})();var Le=n("zVIQ");function De(e,t){if(1&e){const e=v.Qb();v.Nb(0),v.Pb(1,"h3",11),v.uc(2,"Background Color"),v.Ob(),v.Pb(3,"bd-color-picker",12),v.Wb("ngModelChange",function(t){return v.mc(e),v.Yb().setBackgroundColor(t)})("addToSaved",function(t){return v.mc(e),v.Yb().addToSaved(t)})("removeFromSaved",function(t){return v.mc(e),v.Yb().removeFromSaved(t)})("savedColorsChanged",function(t){return v.mc(e),v.Yb().replaceSaved(t)}),v.Zb(4,"async"),v.Zb(5,"async"),v.Ob(),v.Mb()}if(2&e){const e=v.Yb();v.yb(3),v.ec("ngModel",v.ac(4,2,e.backgroundColor$))("savedColors",v.ac(5,4,e.savedColors$))}}function Ne(e,t){if(1&e){const e=v.Qb();v.Pb(0,"bd-color-picker",15),v.Wb("addToSaved",function(){v.mc(e);const n=t.$implicit;return v.Yb(3).addToSaved(n.value)})("removeFromSaved",function(){v.mc(e);const n=t.$implicit;return v.Yb(3).removeFromSaved(n.value)})("savedColorsChanged",function(t){return v.mc(e),v.Yb(3).replaceSaved(t)}),v.Zb(1,"async"),v.Ob()}if(2&e){const e=t.$implicit,n=v.Yb(3);v.ec("formControl",e)("savedColors",v.ac(1,2,n.savedColors$))}}function Re(e,t){if(1&e&&(v.Nb(0),v.sc(1,Ne,2,4,"bd-color-picker",14),v.Mb()),2&e){const e=v.Yb(2);v.yb(1),v.ec("ngForOf",e.selectedColorControls)}}function Ae(e,t){if(1&e&&(v.Nb(0),v.Pb(1,"h3",11),v.uc(2,"Selection Colors"),v.Ob(),v.sc(3,Re,2,1,"ng-container",13),v.Zb(4,"async"),v.Mb()),2&e){const e=v.Yb(),t=v.kc(16);v.yb(3),v.ec("ngIf",v.ac(4,2,e.hasSelectedVectorIcon$))("ngIfElse",t)}}function Ke(e,t){1&e&&(v.Nb(0),v.Pb(1,"span",16),v.uc(2,"Select the icon you want to change."),v.Ob(),v.Mb())}function Ye(e,t){1&e&&(v.Pb(0,"span",17),v.uc(1,"Raster icons cannot be modified."),v.Ob())}const Ze=[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.labService=e,this.backgroundService=t,this.layoutService=n,this.renderer=i,this.selectedIcon$=this.labService.positionChanged.pipe(Object(c.a)(e=>this.labService.getIcon(e))),this.hasSelectedIcon$=this.selectedIcon$.pipe(Object(a.a)(e=>!!e)),this.hasSelectedVectorIcon$=this.selectedIcon$.pipe(Object(a.a)(e=>(null==e?void 0:e.type)===y.a.Vector)),this.hasBackgroundPosition$=this.labService.hasBackgroundPosition$,this.savedColors$=this.labService.savedColorsChanged,this.iconName=new r.e,this.backgroundColor$=this.backgroundService.backgroundColorChanged,this.hasOpenedRightSidebar$=this.layoutService.openedRightSidebar.pipe(h(0)),this.selectedColors=new r.c([]),this.destroyed$=new s.a}get selectedColorControls(){return this.selectedColors.controls}ngOnInit(){this.labService.filledElementsChanged.pipe(Object(f.a)(this.destroyed$),Object(m.a)(e=>!!e)).subscribe(e=>{this.selectedColors.clear(),e.forEach(({color:e,index:t})=>{const n=new r.e(e);this.selectedColors.push(n),this.initColorListener(n,t)})}),this.labService.iconChanged.pipe(Object(f.a)(this.destroyed$)).subscribe(()=>{this.labService.clearColors()}),this.initIconNameHandler(),this.unselectPositionListenerFn=this.renderer.listen("window","keydown.escape",()=>{this.labService.unsetPosition()})}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete(),this.unselectPositionListenerFn()}addToSaved(e){this.labService.addToSavedColors(e)}removeFromSaved(e){this.labService.removeFromSavedColors(e)}replaceSaved(e){this.labService.replaceSavedColors(e)}setBackgroundColor(e){this.backgroundService.setBackgroundColor(e)}initColorListener(e,t){e.valueChanges.pipe(Object(f.a)(this.destroyed$)).subscribe(e=>this.labService.setColor(e,t))}initIconNameHandler(){this.iconName.valueChanges.pipe(Object(f.a)(this.destroyed$)).subscribe(e=>this.labService.artboardName=e),this.iconName.setValue("icon-name")}}return e.\u0275fac=function(t){return new(t||e)(v.Kb(O.a),v.Kb(w.a),v.Kb(P),v.Kb(v.E))},e.\u0275cmp=v.Eb({type:e,selectors:[["bd-lab"]],decls:22,vars:21,consts:[[1,"d-flex","justify-content-between","align-items-stretch","position-relative","overflow-hidden","lab-viewport"],[1,"d-flex","flex-column","justify-content-between","flex-grow-1","lab-wrapper"],["placeholder","Please enter the icon name...","cssClass","w-100",3,"formControl"],[1,"d-flex","align-items-center"],[1,"layout-selector"],[1,"playground"],[1,"d-flex","flex-column","flex-grow-1"],[4,"ngIf"],["rasterIconInfo",""],[1,"position-absolute","d-inline-block","lab-wrapper-preview",2,"opacity","0.5"],[1,"d-flex","d-xl-none","mx-auto",3,"showLogo"],[1,"dashed","right","color-picker-heading"],[1,"mb-4",3,"ngModel","savedColors","ngModelChange","addToSaved","removeFromSaved","savedColorsChanged"],[4,"ngIf","ngIfElse"],["class","mb-2",3,"formControl","savedColors","addToSaved","removeFromSaved","savedColorsChanged",4,"ngFor","ngForOf"],[1,"mb-2",3,"formControl","savedColors","addToSaved","removeFromSaved","savedColorsChanged"],[1,"font-italic","icon-info-text"],[1,"font-weight-bold","icon-info-text"]],template:function(e,t){1&e&&(v.Pb(0,"div",0),v.Pb(1,"div",1),v.Zb(2,"async"),v.Lb(3,"bd-text-input",2),v.Pb(4,"div",3),v.Lb(5,"bd-layout-selector",4),v.Lb(6,"bd-playground",5),v.Pb(7,"div",6),v.sc(8,De,6,6,"ng-container",7),v.Zb(9,"async"),v.sc(10,Ae,5,4,"ng-container",7),v.Zb(11,"async"),v.sc(12,Ke,3,0,"ng-container",7),v.Zb(13,"async"),v.Zb(14,"async"),v.sc(15,Ye,2,0,"ng-template",null,8,v.tc),v.Ob(),v.Ob(),v.Lb(17,"bd-lab-actions"),v.Lb(18,"div",9),v.Lb(19,"bd-footer",10),v.Ob(),v.Lb(20,"bd-right-sidebar"),v.Zb(21,"async"),v.Ob()),2&e&&(v.yb(1),v.Cb("has-opened-sidebar",v.ac(2,9,t.hasOpenedRightSidebar$)),v.yb(2),v.ec("formControl",t.iconName),v.yb(5),v.ec("ngIf",v.ac(9,11,t.hasBackgroundPosition$)),v.yb(2),v.ec("ngIf",v.ac(11,13,t.hasSelectedIcon$)),v.yb(2),v.ec("ngIf",!1===v.ac(13,15,t.hasBackgroundPosition$)&&!1===v.ac(14,17,t.hasSelectedIcon$)),v.yb(7),v.ec("showLogo",!0),v.yb(1),v.Cb("sidebar-hidden",!1===v.ac(21,19,t.hasOpenedRightSidebar$)))},directives:[k.a,r.l,r.f,_,B,i.m,E,T.a,Te,Le.a,r.n,i.l],pipes:[i.b],styles:['[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]{min-height:calc(100vh - 137px)}@media (min-width:1200px){[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]{height:100vh}}[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]   .lab-wrapper[_ngcontent-%COMP%]{padding:2rem;max-width:calc(100% - 80px);width:0}@media (min-width:1200px){[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]   .lab-wrapper[_ngcontent-%COMP%]{padding:3rem}}[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]   .lab-wrapper[_ngcontent-%COMP%]   .layout-selector[_ngcontent-%COMP%], [_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]   .lab-wrapper[_ngcontent-%COMP%]   .playground[_ngcontent-%COMP%]{margin-right:2rem}[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]   .lab-wrapper[_ngcontent-%COMP%]   .color-picker-heading[_ngcontent-%COMP%]{margin-right:-4rem}[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]   .lab-wrapper[_ngcontent-%COMP%]   .icon-info-text[_ngcontent-%COMP%]{color:rgba(82,38,153,.6);font-size:.625rem}@media (min-width:1200px) and (max-width:1299px){[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]   .lab-wrapper[_ngcontent-%COMP%]{max-width:calc(100% - 337px)}}@media (min-width:1300px){[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]   .lab-wrapper[_ngcontent-%COMP%]{max-width:calc(100% - 433px)}}@media (max-width:1199px){[_nghost-%COMP%]   .lab-viewport[_ngcontent-%COMP%]   .lab-wrapper.has-opened-sidebar[_ngcontent-%COMP%]:after{background-color:hsla(0,0%,100%,.4);content:"";width:100%;height:100%;position:absolute;top:0;left:0}}']}),e})()}];let Ge=(()=>{class e{}return e.\u0275mod=v.Ib({type:e}),e.\u0275inj=v.Hb({factory:function(t){return new(t||e)},imports:[[o.f.forChild(Ze)],o.f]}),e})();var We=n("PCNd");let qe=(()=>{class e{}return e.\u0275mod=v.Ib({type:e}),e.\u0275inj=v.Hb({factory:function(t){return new(t||e)},imports:[[i.c,Ge,We.a]]}),e})()}}]);
//# sourceMappingURL=7-es2015.50b304c4801730847026.js.map