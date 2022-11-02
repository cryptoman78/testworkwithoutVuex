(function(){"use strict";var t={8181:function(t,e,n){var o=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("TestWork")],1)},a=[],i=function(){var t=this,e=t._self._c;return e("div",[e("form",{staticClass:"form",on:{submit:t.onSubmitForm}},[e("div",{staticClass:"form-row"},[e("input",{attrs:{type:"number",name:"price",step:"any"},domProps:{value:t.price},on:{input:t.debounceInput}}),e("input",{attrs:{type:"number",name:"qty",step:"any"},domProps:{value:t.qty},on:{input:t.debounceInput}}),e("input",{attrs:{type:"number",name:"amount",step:"any"},domProps:{value:t.amount},on:{input:t.debounceInput}}),e("button",{attrs:{type:"submit"}},[t._v("Отправить")])]),e("div",{staticClass:"form-row"},[e("label",{attrs:{for:"price"}},[t._v("price: "+t._s(t.price))]),e("label",{attrs:{for:"qty"}},[t._v("qty: "+t._s(t.qty))]),e("label",{attrs:{for:"amount"}},[t._v("amount: "+t._s(t.amount))]),e("label",{attrs:{for:"localstorage"}},[t._v("localstorage: "+t._s(t.saveInLocalStorage))])])]),e("div",{staticClass:"list"},t._l(t.history,(function(n,o){return e("div",{key:o,staticClass:"list-item"},[t._v(" Тип события: "+t._s(n.type)+" Имя события: "+t._s(n.name)+" Значение события: "+t._s(n.value)+" ")])})),0)])},s=[],u=(n(7658),n(354)),c=n.n(u),l={name:"TestWork",data:()=>({price:0,qty:0,amount:0,nonce:0,history:[],saveInLocalStorage:localStorage.getItem("data")}),methods:{isNumber(t){const e=["0","1","2","3","4","5","6","7","8","9","."];return!!e.includes(t)},onInputChange(t){const{name:e,value:n}=t.target,o=Number(n);if("number"!==typeof o||o<0)console.log(o);else{if("price"===e)this.amount=o*this.qty;else if("qty"===e)this.amount=o*this.price;else{const t=this.history.sort(((t,e)=>e.date-t.date)).find((t=>"input"===t.type&&("price"===t.name||"qty"===t.name)));t&&"price"===t.name&&this.qty>0?this.qty=o/this.price:t&&"qty"===t.name&&this.price>0&&(this.price=o/this.qty)}this[e]=o,this.addEventHistory({type:"input",name:e,value:o,date:new Date})}},debounceInput:c()((function(t){this.onInputChange(t)}),300),onSubmitForm(t){t.preventDefault(),this.nonce++,this.addEventHistory({type:"submit",name:"Отправка фориы",value:`localstorage:${this.saveInLocalStorage}`}),setTimeout((()=>{let t;this.amount%2===0?(localStorage.setItem("data",JSON.stringify({price:this.price,qty:this.qty,amount:this.amount,nonce:this.nonce})),t=!0,this.saveInLocalStorage=localStorage.getItem("data")):t=!1,this.addEventHistory({type:"submit",name:"Получение данных с бекенда",value:`success: ${t} , localstorage:${this.saveInLocalStorage}`})}),1e3)},addEventHistory(t){this.history.push(t)}},created(){localStorage.removeItem("data")}},p=l,f=n(3736),m=(0,f.Z)(p,i,s,!1,null,"f79e632c",null),v=m.exports,h={name:"App",components:{TestWork:v}},d=h,y=(0,f.Z)(d,r,a,!1,null,null,null),b=y.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(b)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunktest"]=self["webpackChunktest"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8181)}));o=n.O(o)})();
//# sourceMappingURL=app.4ff2df68.js.map