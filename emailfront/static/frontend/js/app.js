(function(e){function a(a){for(var i,c,s=a[0],u=a[1],l=a[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);o&&o(a);while(p.length)p.shift()();return n.push.apply(n,l||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],i=!0,s=1;s<t.length;s++){var u=t[s];0!==r[u]&&(i=!1)}i&&(n.splice(a--,1),e=c(c.s=t[0]))}return e}var i={},r={app:0},n=[];function c(a){if(i[a])return i[a].exports;var t=i[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=i,c.d=function(e,a,t){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)c.d(t,i,function(a){return e[a]}.bind(null,i));return t},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="/static/emailfront/vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var o=u;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e623"),t("e379"),t("5dc8"),t("37e1");var i=t("7a23"),r=Object(i["e"])("img",{alt:"Vue logo",src:"/static/emailfront/img/logo.png"},null,-1);function n(e,a,t,n,c,s){var u=Object(i["j"])("MailApp");return Object(i["f"])(),Object(i["c"])(i["a"],null,[r,Object(i["e"])(u,{msg:"Welcome to Your Vue.js App"})],64)}var c=Object(i["n"])("data-v-478ce554");Object(i["h"])("data-v-478ce554");var s={id:"layout",class:"content pure-g"},u={id:"nav",class:"pure-u"},l=Object(i["e"])("a",{href:"#",class:"nav-menu-button"},"Menu",-1),o={class:"nav-inner"},d=Object(i["e"])("button",{class:"primary-button pure-button"},"Compose",-1),p=Object(i["d"])(' [[ query ]] <div class="pure-menu" data-v-478ce554><ul class="pure-menu-list" data-v-478ce554><li class="pure-menu-item" data-v-478ce554><a href="#" class="pure-menu-link" data-v-478ce554>Inbox <span class="email-count" data-v-478ce554>(2)</span></a></li><li class="pure-menu-item" data-v-478ce554><a href="#" class="pure-menu-link" data-v-478ce554>Important</a></li><li class="pure-menu-item" data-v-478ce554><a href="#" class="pure-menu-link" data-v-478ce554>Sent</a></li><li class="pure-menu-item" data-v-478ce554><a href="#" class="pure-menu-link" data-v-478ce554>Drafts</a></li><li class="pure-menu-item" data-v-478ce554><a href="#" class="pure-menu-link" data-v-478ce554>Trash</a></li><li class="pure-menu-heading" data-v-478ce554>Labels</li><li class="pure-menu-item" data-v-478ce554><a href="#" class="pure-menu-link" data-v-478ce554><span class="email-label-personal" data-v-478ce554></span>Personal</a></li><li class="pure-menu-item" data-v-478ce554><a href="#" class="pure-menu-link" data-v-478ce554><span class="email-label-work" data-v-478ce554></span>Work</a></li><li class="pure-menu-item" data-v-478ce554><a href="#" class="pure-menu-link" data-v-478ce554><span class="email-label-travel" data-v-478ce554></span>Travel</a></li></ul></div>',2),m={id:"list",class:"pure-u-1"},v=Object(i["e"])("div",{class:"pure-u"},[Object(i["e"])("img",{width:"64",height:"64",alt:"Tilo Mitra's avatar",class:"email-avatar",src:"https://ui-avatars.com/api/?background=random"})],-1),b={class:"pure-u-3-4"},f={class:"email-name"},h={class:"email-subject"},j={class:"email-desc"},g=Object(i["d"])('<div class="email-item email-item-unread email-item-selected pure-g" data-v-478ce554><div class="pure-u-3-4" data-v-478ce554><h5 class="email-name" data-v-478ce554>message.name </h5><h4 class="email-subject" data-v-478ce554>message.subject</h4><p class="email-desc" data-v-478ce554> message.desc </p></div><hr data-v-478ce554></div>',1),O=Object(i["d"])('<div id="main" class="pure-u-1" data-v-478ce554><div class="email-content" data-v-478ce554><div class="email-content-header pure-g" data-v-478ce554><div class="pure-u-1-2" data-v-478ce554><h1 class="email-content-title" data-v-478ce554>Hello from Toronto</h1><p class="email-content-subtitle" data-v-478ce554> From <a data-v-478ce554>Tilo Mitra</a> at <span data-v-478ce554>3:56pm, April 3, 2012</span></p></div><div class="email-content-controls pure-u-1-2" data-v-478ce554><button class="secondary-button pure-button" data-v-478ce554>Reply</button><button class="secondary-button pure-button" data-v-478ce554>Forward</button><button class="secondary-button pure-button" data-v-478ce554>Move to</button></div></div><div class="email-content-body" data-v-478ce554><p data-v-478ce554> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><p data-v-478ce554> Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p data-v-478ce554> Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris. Curabitur ornare arcu quis mi blandit laoreet. Vivamus imperdiet fermentum mauris, ac posuere urna tempor at. Duis pellentesque justo ac sapien aliquet egestas. Morbi enim mi, porta eget ullamcorper at, pharetra id lorem. </p><p data-v-478ce554> Donec sagittis dolor ut quam pharetra pretium varius in nibh. Suspendisse potenti. Donec imperdiet, velit vel adipiscing bibendum, leo eros tristique augue, eu rutrum lacus sapien vel quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut enim. Morbi semper erat quis orci aliquet condimentum. Nam interdum mauris sed massa dignissim rhoncus. </p><p data-v-478ce554> Regards,<br data-v-478ce554> Tilo </p></div></div></div>',1);Object(i["g"])();var y=c((function(e,a,t,r,n,c){return Object(i["f"])(),Object(i["c"])("div",s,[Object(i["e"])("div",u,[l,Object(i["e"])("div",o,[d,Object(i["m"])(Object(i["e"])("input",{type:"text",placeholder:"Filter Search","onUpdate:modelValue":a[1]||(a[1]=function(e){return n.query=e})},null,512),[[i["l"],n.query]]),p])]),Object(i["e"])("div",m,[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.messages,(function(e){return Object(i["f"])(),Object(i["c"])("div",{key:e},[v,Object(i["e"])("div",b,[Object(i["e"])("h5",f,Object(i["k"])(e.from_header),1),Object(i["e"])("h4",h,Object(i["k"])(e.subject),1),Object(i["e"])("p",j,Object(i["k"])(e.to_header),1)])])})),128)),g]),O])})),q=t("bc3a"),k=t.n(q),M={name:"MailApp",props:{msg:String},data:function(){return{query:"",messages:[]}},mounted:function(){var e=this;k.a.get("/emailfront/allmsgs/").then((function(a){console.log(a.data),e.messages=a.data})).catch((function(a){console.log(a),e.errored=!0}))},delimiters:["[[","]]"]};M.render=y,M.__scopeId="data-v-478ce554";var w=M,x={name:"App",components:{MailApp:w}};x.render=n;var _=x,P=Object(i["b"])(_);P.mount("#app")}});
//# sourceMappingURL=app.js.map