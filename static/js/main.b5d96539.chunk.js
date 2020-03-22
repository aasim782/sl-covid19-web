(this["webpackJsonpsl-covid19-web"]=this["webpackJsonpsl-covid19-web"]||[]).push([[0],{32:function(t,n,e){t.exports=e(64)},37:function(t,n,e){},64:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(24),l=e.n(i),c=(e(37),e(2)),o=e(25),s=e(6),u=e.n(s),d=e(30),f=e(3);function p(){var t=Object(c.a)(["\n\tfont-size: 50px;\n\tfont-weight: 400;\n\tletter-spacing: 0;\n\tline-height: 24px;\n"]);return p=function(){return t},t}function m(){var t=Object(c.a)(["\n\tfont-size: 26px;\n\tletter-spacing: 0;\n\tline-height: 19px;\n\tfont-weight: 800;\n\tpadding: 0 1rem;\n"]);return m=function(){return t},t}function g(){var t=Object(c.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tborder-bottom: 1px solid;\n\twidth: 100%;\n\th1 {\n\t\tfont-size: 26px;\n\t\tletter-spacing: 0;\n\t\tline-height: 19px;\n\t\tfont-weight: 320;\n\t\tmargin-right: auto;\n\t}\n\n\timg {\n\t\tpadding: 0 1rem;\n\t\theight: 32px;\n\t}\n"]);return g=function(){return t},t}function h(){var t=Object(c.a)(["\n\twidth: 300px;\n\tborder-radius: 8px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin: 1rem;\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);\n\t","\n"]);return h=function(){return t},t}var b=function(t){var n=t.title,e=t.total,a=t.newCases,i=t.icon,l=t.bg;return r.a.createElement(v,{bg:l},r.a.createElement(x,null,r.a.createElement("img",{src:i,alt:"COIVD-19 status Sri Lanka"}),r.a.createElement("h1",null,n),0!==a&&a&&r.a.createElement(w,null,"+",r.a.createElement(u.a,{start:0,end:a||0,delay:0},(function(t){var n=t.countUpRef;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{ref:n}))})))),r.a.createElement(E,null,r.a.createElement(u.a,{start:0,end:e||0,delay:0},(function(t){var n=t.countUpRef;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{ref:n}))}))))},v=f.a.div(h(),(function(t){switch(t.bg){case"warning":return{background:"linear-gradient(to right, #f7971e, #ffd200); "};case"danger":return{background:"linear-gradient(to right, #ed213a, #93291e);  "};case"success":return{background:"linear-gradient(to right, #11998e, #38ef7d); "}}})),x=f.a.div(g()),w=f.a.p(m()),E=f.a.p(p());function y(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\n\tdiv {\n\t\twidth: 150px;\n\t\ttext-align: center;\n\t}\n"]);return y=function(){return t},t}function j(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\n\tmargin: 1rem;\n\tborder-radius: 6px;\n\tpadding: 1rem;\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);\n\n\tbackground: #4b6cb7; /* fallback for old browsers */\n\tbackground: -webkit-linear-gradient(\n\t\tto top,\n\t\t#182848,\n\t\t#4b6cb7\n\t); /* Chrome 10-25, Safari 5.1-6 */\n\tbackground: linear-gradient(\n\t\tto top,\n\t\t#182848,\n\t\t#4b6cb7\n\t); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n\th3 {\n\t\tpadding: 0 0.5rem;\n\t\ttext-align: center;\n\t\tmax-width: 300px;\n\t\tfont-weight: 300;\n\t}\n"]);return j=function(){return t},t}var k=function(t){var n=t.hospitalData,e=n.cumulative_local,a=n.cumulative_foreign,i=n.cumulative_total,l=n.treatment_local,c=n.treatment_foreign,o=n.treatment_total,s=n.hospital;return r.a.createElement(O,null,r.a.createElement("h3",null," ",s.name," "),r.a.createElement(_,null,r.a.createElement("div",null,r.a.createElement("h4",null,"Tested"),r.a.createElement("p",null," Local : ",e," "),r.a.createElement("p",null," Foreign : ",a," "),r.a.createElement("p",null,"Total : ",i," ")),r.a.createElement("div",null,r.a.createElement("h4",null,"Treatment"),r.a.createElement("p",null," local : ",l," "),r.a.createElement("p",null," Foreign : ",c," "),r.a.createElement("p",null,"Total : ",o," "))))},O=f.a.div(j()),_=f.a.div(y());function C(){var t=Object(c.a)(['\n\tmargin: 100px 0;\n\t.lds-hourglass {\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t\twidth: 80px;\n\t\theight: 80px;\n\t}\n\t.lds-hourglass:after {\n\t\tcontent: " ";\n\t\tdisplay: block;\n\t\tborder-radius: 50%;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin: 8px;\n\t\tbox-sizing: border-box;\n\t\tborder: 32px solid #fff;\n\t\tborder-color: #fff transparent #fff transparent;\n\t\tanimation: lds-hourglass 1.2s infinite;\n\t}\n\t@keyframes lds-hourglass {\n\t\t0% {\n\t\t\ttransform: rotate(0);\n\t\t\tanimation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n\t\t}\n\t\t50% {\n\t\t\ttransform: rotate(900deg);\n\t\t\tanimation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: rotate(1800deg);\n\t\t}\n\t}\n']);return C=function(){return t},t}var z,S,D,L=function(){return r.a.createElement(R,null,r.a.createElement("div",{className:"lds-hourglass"}))},R=f.a.div(C()),F=e(5),I=e(7),T=e.n(I),U=e(12),H=e(13),W=e(8),B=e(14),J=(e(47),e(29)),V=e.n(J),G=e(1),N=(z=function(){function t(){Object(F.a)(this,t),Object(H.a)(this,"_dataRegistry",S,this),Object(H.a)(this,"isLoading",D,this)}return Object(W.a)(t,[{key:"fetchData",value:function(){var t=Object(U.a)(T.a.mark((function t(){var n,e=this;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,V.a.get("https://hpb.health.gov.lk/api/get-current-statistical");case 4:n=t.sent,Object(G.h)((function(){e._dataRegistry=n.data.data})),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:this.isLoading=!1;case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"initData",value:function(){var t=Object(U.a)(T.a.mark((function t(){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==Object.keys(this._dataRegistry).length){t.next=3;break}return t.next=3,this.fetchData();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),S=Object(B.a)(z.prototype,"_dataRegistry",[G.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),D=Object(B.a)(z.prototype,"isLoading",[G.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),z),$=new function t(){Object(F.a)(this,t),this.stores={dataStore:new N}},q=Object(a.createContext)($);function A(){var t=Object(c.a)(["\n\tfont-size: 20px;\n\tborder: 1px solid;\n\tpadding: 1rem;\n\ttext-align: center;\n\tborder-radius: 6px;\n\tmargin: 1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t@media screen and (min-width: 600px) {\n\t\tflex-direction: row;\n\t}\n\n\tspan {\n\t\tcolor: #e74c3c;\n\t\tfont-weight: 600;\n\t\tfont-size: 30px;\n\t\tpadding: 0 0.5rem;\n\t}\n"]);return A=function(){return t},t}function K(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-evenly;\n"]);return K=function(){return t},t}function M(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n"]);return M=function(){return t},t}function P(){var t=Object(c.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding-bottom: 2rem;\n\n\th1 {\n\t\tpadding: 0 1rem;\n\t\ttext-align: center;\n\t}\n\n\th1,\n\th2,\n\th3 {\n\t\tfont-weight: 300;\n\t\ttext-align: center;\n\t}\n"]);return P=function(){return t},t}var Q=Object(o.a)((function(){var t=Object(a.useContext)(q).stores.dataStore;Object(a.useEffect)((function(){t.initData()}),[]);var n=t._dataRegistry,e=n.update_date_time,i=n.local_new_cases,l=n.local_total_cases,c=n.local_deaths,o=n.local_new_deaths,s=n.local_recovered,f=n.hospital_data,p=n.local_total_number_of_individuals_in_hospitals;return r.a.createElement(X,null,r.a.createElement("h1",null,"Sri Lanka COVID-19 Status"),t.isLoading?r.a.createElement(L,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null,r.a.createElement(b,{bg:"warning",icon:"icons/cases.svg",title:"Cases",total:l,newCases:i}),r.a.createElement(b,{bg:"danger",icon:"icons/deaths.svg",title:"Deaths",total:o,newCases:c}),r.a.createElement(b,{bg:"success",icon:"icons/recovered.svg",title:"Recovered",total:s,newCases:null})),r.a.createElement("h2",null,"Hospital Status"),r.a.createElement(tt,null,"Total Individuals in Hospitals :",r.a.createElement("span",null,r.a.createElement(u.a,{start:0,end:p||0,delay:0},(function(t){var n=t.countUpRef;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{ref:n}))})))),r.a.createElement(Z,null,f&&f.map((function(t,n){return r.a.createElement(k,{hospitalData:t,key:n})})))),r.a.createElement("p",null,"Last Updated : ",e),r.a.createElement("p",null,"Data Source : www.hpb.health.gov.lk "),r.a.createElement(d.a,{href:"https://github.com/dhanukaperera/sl-covid19-web","data-size":"large","aria-label":"Star dhanukaperera/sl-covid19-web on GitHub"},"Star"))})),X=f.a.div(P()),Y=f.a.div(M()),Z=f.a.div(K()),tt=f.a.div(A());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b5d96539.chunk.js.map