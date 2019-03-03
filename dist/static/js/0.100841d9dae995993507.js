webpackJsonp([0],{"0jH9":function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=a("IHPB"),s=a.n(e),i=(a("ssT3"),{name:"Register",data:function(){return{captchaTpl:"",username:"",password:"",cpassword:"",captcha:"",msg:"",msgType:"",msgShow:!1}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",a="",e=[];try{e=[].concat(s()(Array(t))).map(function(){return r[Math.floor(Math.random()*r.length)]})}catch(t){}return e.forEach(function(t){a+='<span class="flex1 hcenter">'+t+"</span>"}),e=e.join(""),{tpl:a,captcha:e}}(),r=t.tpl,a=t.captcha;this.captchaTpl=r,this.localCaptcha=a},register:function(t){var r=this;this.$nextTick(function(){("submit"===t.target.type?t.target:t.target.parentElement).canSubmit&&r.submit()})},submit:function(){if(this.captcha.toUpperCase()!==this.localCaptcha)this.showMsg("验证码不正确"),this.getCaptcha();else{var t={name:this.username,password:this.password,avatar:"https://api.adorable.io/avatars/200/"+this.username+".png"},r=this.$store.state.user;r&&r.name==t.name?this.showMsg("用户名已存在"):this.login(t)}},login:function(t){this.$store.dispatch("login",t),this.showMsg("注册成功","success")},showMsg:function(t){var r=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=a,this.msgShow=!1,this.$nextTick(function(){r.msgShow=!0})}}}),o={render:function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[a("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(r){t.msgShow=r}}}),t._v(" "),a("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),a("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("用户名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[a-zA-Z]+\w*\s?\w*$/,error:"用户名要求以字母开头的单词字符"},expression:"{ regex: /^[a-zA-Z]+\\w*\\s?\\w*$/, error: '用户名要求以字母开头的单词字符' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"},domProps:{value:t.username},on:{input:function(r){r.target.composing||(t.username=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("确认密码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cpassword,expression:"cpassword",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{ target: '#password' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请填写确认密码"},domProps:{value:t.cpassword},on:{input:function(r){r.target.composing||(t.cpassword=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("图片验证码")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:t.captcha},on:{input:function(r){r.target.composing||(t.captcha=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[a("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),t._v(" "),a("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.register}},[a("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 注册\n        ")])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"panel-heading"},[r("h3",{staticClass:"panel-title"},[this._v("请注册")])])}]};var n=a("C7Lr")(i,o,!1,function(t){a("J/dc")},"data-v-ab61f92e",null);r.default=n.exports},"1Hpz":function(t,r,a){var e=a("HmiX"),s=a("aThA")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[s]===t)}},FCbr:function(t,r,a){a("rYUz"),a("kUHi"),t.exports=a("/KQr").Array.from},Hgu4:function(t,r,a){var e=a("y4M0");t.exports=function(t,r,a,s){try{return s?r(e(a)[0],a[1]):r(a)}catch(r){var i=t.return;throw void 0!==i&&e(i.call(t)),r}}},IHPB:function(t,r,a){"use strict";r.__esModule=!0;var e,s=a("kfHR"),i=(e=s)&&e.__esModule?e:{default:e};r.default=function(t){if(Array.isArray(t)){for(var r=0,a=Array(t.length);r<t.length;r++)a[r]=t[r];return a}return(0,i.default)(t)}},"J/dc":function(t,r){},UJ2L:function(t,r,a){"use strict";var e=a("0hE2"),s=a("0ZA2");t.exports=function(t,r,a){r in t?e.f(t,r,s(0,a)):t[r]=a}},Utzn:function(t,r,a){var e=a("aThA")("iterator"),s=!1;try{var i=[7][e]();i.return=function(){s=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,r){if(!r&&!s)return!1;var a=!1;try{var i=[7],o=i[e]();o.next=function(){return{done:a=!0}},i[e]=function(){return o},t(i)}catch(t){}return a}},kUHi:function(t,r,a){"use strict";var e=a("I1yF"),s=a("2AZ7"),i=a("A2+p"),o=a("Hgu4"),n=a("1Hpz"),c=a("6f6n"),l=a("UJ2L"),u=a("jdnV");s(s.S+s.F*!a("Utzn")(function(t){Array.from(t)}),"Array",{from:function(t){var r,a,s,p,d=i(t),m="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,h=void 0!==v,g=0,w=u(d);if(h&&(v=e(v,f>2?arguments[2]:void 0,2)),void 0==w||m==Array&&n(w))for(a=new m(r=c(d.length));r>g;g++)l(a,g,h?v(d[g],g):d[g]);else for(p=w.call(d),a=new m;!(s=p.next()).done;g++)l(a,g,h?o(p,v,[s.value,g],!0):s.value);return a.length=g,a}})},kfHR:function(t,r,a){t.exports={default:a("FCbr"),__esModule:!0}}});
//# sourceMappingURL=0.100841d9dae995993507.js.map