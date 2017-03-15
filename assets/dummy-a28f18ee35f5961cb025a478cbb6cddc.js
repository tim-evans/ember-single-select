"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i,l){var o=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,o=t.default.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:n.default}),(0,i.default)(o,l.default.modulePrefix),e.default=o}),define("dummy/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("dummy/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/pop-over",["exports","ember-pop-over/components/pop-over/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/single-select",["exports","ember-single-select/components/single-select/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/single-select/group",["exports","ember-single-select/components/single-select/group/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/single-select/label",["exports","ember-single-select/components/single-select/label/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/single-select/list",["exports","ember-single-select/components/single-select/list/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/single-select/option",["exports","ember-single-select/components/single-select/option/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/window-pane/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:""})}),define("dummy/components/window-pane/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"bfyI2nLL",block:'{"statements":[["open-element","div",[]],["dynamic-attr","class",["concat",["window-pane ",["helper",["if"],[["get",["title"]],"has-title"],null]]]],["flush-element"],["text","\\n  "],["open-element","header",[]],["flush-element"],["text","\\n    "],["open-element","span",[]],["static-attr","class","close button"],["flush-element"],["close-element"],["text","\\n    "],["open-element","span",[]],["static-attr","class","minimize button"],["flush-element"],["close-element"],["text","\\n    "],["open-element","span",[]],["static-attr","class","maximize button"],["flush-element"],["close-element"],["text","\\n    "],["append",["unknown",["title"]],false],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["flush-element"],["yield","default",[["get",[null]]]],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/components/window-pane/template.hbs"}})}),define("dummy/flows",["exports"],function(e){function t(){return this.orientBelow.andSnapTo(this.center,this.rightEdge,this.leftEdge).then(this.orientLeft.andSnapTo(this.topEdge,this.bottomEdge)).then(this.orientRight.andSnapTo(this.topEdge)).then(this.orientBelow.andSnapTo(this.center))}e.dropdown=t}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,n){function i(){return l}e.appVersion=i;var l=n.default.APP.version;e.default=t.default.Helper.helper(i)}),define("dummy/helpers/inline-svg",["exports","ember","dummy/svgs","ember-inline-svg/utils/general"],function(e,t,n,i){function l(e,l){var o=(0,i.dottify)(e),r=t.default.get(n.default,o);return void 0===r&&/\.svg$/.test(e)&&(r=t.default.get(n.default,o.slice(0,-4))),t.default.assert("No SVG found for "+e,r),r=(0,i.applyClass)(r,l.class),t.default.String.htmlSafe(r)}var o=function(){function e(e,t){var n=[],i=!0,l=!1,o=void 0;try{for(var r,u=e[Symbol.iterator]();!(i=(r=u.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{!i&&u.return&&u.return()}finally{if(l)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.inlineSvg=l;var r=void 0;r=t.default.Helper&&t.default.Helper.helper?t.default.Helper.helper(function(e,t){return l(o(e,1)[0],t)}):t.default.Handlebars.makeBoundHelper(function(e,t){return l(e,t.hash||{})}),e.default=r}),define("dummy/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})}),define("dummy/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})}),define("dummy/index/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return{role:"owner",roles:["collaborator","maintainer","owner"]}}})}),define("dummy/index/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"M85NdLcU",block:'{"statements":[["open-element","div",[]],["static-attr","id","index"],["flush-element"],["text","\\n  "],["open-element","header",[]],["flush-element"],["text","\\n    "],["open-element","h1",[]],["flush-element"],["append",["helper",["inline-svg"],["icon"],null],false],["text"," ember-single-select"],["close-element"],["open-element","nav",[]],["flush-element"],["text","\\n      "],["open-element","a",[]],["static-attr","href","#demo"],["flush-element"],["text","Demo"],["close-element"],["text","\\n      "],["open-element","a",[]],["static-attr","href","https://github.com/tim-evans/ember-single-select"],["static-attr","target","__blank"],["flush-element"],["text","GitHub"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","hero"],["flush-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["text","Single selects "],["open-element","br",[]],["flush-element"],["close-element"],["text","for "],["append",["helper",["inline-svg"],["ember-logo"],[["title"],["Ember"]]],false],["text"," apps"],["close-element"],["text","\\n    "],["open-element","a",[]],["static-attr","class","more"],["static-attr","href","#installation"],["flush-element"],["append",["helper",["inline-svg"],["arrow"],null],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","main",[]],["flush-element"],["text","\\n    "],["open-element","section",[]],["static-attr","id","installation"],["flush-element"],["text","\\n      "],["open-element","h2",[]],["flush-element"],["text","Installation"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","grid"],["flush-element"],["text","\\n"],["block",["window-pane"],null,null,1],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n\\n    "],["open-element","section",[]],["static-attr","id","demo"],["flush-element"],["text","\\n      "],["open-element","h2",[]],["flush-element"],["text","Demo"],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","grid"],["flush-element"],["text","\\n"],["block",["single-select"],null,[["gravity","value","onchange","options"],["n",["get",["model","role"]],["helper",["action"],[["get",[null]],["helper",["mut"],[["get",["model","role"]]],null]],null],["get",["model","roles"]]]],0],["text","      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","          "],["append",["get",["option"]],false],["text","\\n"]],"locals":["option"]},{"statements":[["text","          "],["open-element","span",[]],["static-attr","class","ps1"],["flush-element"],["text","> "],["close-element"],["text","ember install ember-single-select\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/index/template.hbs"}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var i=n.default.APP,l=i.name,o=i.version;e.default={name:"App Version",initialize:(0,t.default)(l,o)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/liquid-fire",["exports","liquid-fire/ember-internals"],function(e,t){(0,t.initialize)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("dummy/initializers/pop-over",["exports","ember-pop-over/system/flow","dummy/config/environment","dummy/flows","ember-metal/get","ember-array/utils"],function(e,t,n,i,l,o){var r=function(e){(0,o.A)(Object.keys(i)).forEach(function(n){if("default"!=n){var o=(0,l.default)(i[n].call(t.default.create()),"constraints");e.register("pop-over-constraint:"+n,o,{instantiate:!1})}})};e.initialize=r,e.default={name:"register-pop-over-flows",initialize:r}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var i=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});i.map(function(){}),e.default=i}),define("dummy/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return t.default.$.get("https://restcountries.eu/rest/v2/all")}})}),define("dummy/services/-mouse-hover",["exports","ember-pop-over/services/-mouse-hover"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){e.default=t.default}),define("dummy/svgs",["exports"],function(e){e.default={arrow:'<svg width="32" height="12" viewBox="0 0 32 12" xmlns="http://www.w3.org/2000/svg"><path d="M15.982 10.793L1 2.145l.542-.938L16 9.553l.287-.166 14.171-8.18.542.938-15.018 8.648z" fill="#FFF" fill-rule="evenodd"/></svg>',"ember-logo":'<svg width="101" height="40" viewBox="0 0 101 40" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M69.082 29.179s-.461-1.638 1.26-4.786c1.721-3.149 3.065-1.428 3.065-1.428s1.469 1.596-.21 3.989c-1.68 2.393-4.115 2.225-4.115 2.225zm-13.224 2.267C53.885 36.609 49.1 34.51 49.1 34.51s-.546-1.847 1.008-7.01c1.553-5.164 5.205-3.15 5.205-3.15s2.52 1.932.546 7.096zM52.29 9.825s2.98-7.767 3.694-3.988c.714 3.778-6.255 15.03-6.255 15.03.084-2.52 2.56-11.042 2.56-11.042zM9.678 29.179c.126-4.996 3.4-7.18 4.534-6.088 1.133 1.092.714 3.443-1.427 4.912-2.141 1.47-3.107 1.176-3.107 1.176zm90.303-.83c-.168-1.679-1.68-1.054-1.68-1.054s-2.434 1.887-4.575 1.677c-2.141-.21-1.47-4.998-1.47-4.998s.462-4.387-.797-4.754c-1.26-.368-2.813 1.143-2.813 1.143s-1.931 2.14-2.855 4.87l-.252.083s.294-4.786-.042-5.877c-.252-.546-2.56-.504-2.938.462-.378.965-2.225 7.682-2.351 10.495 0 0-3.61 3.065-6.76 3.569-3.148.503-3.904-1.47-3.904-1.47s8.565-2.393 8.27-9.236c-.293-6.843-6.905-4.313-7.654-3.75-.724.544-4.589 2.875-5.716 9.33-.039.22-.106 1.18-.106 1.18s-3.316 2.224-5.163 2.812c0 0 5.163-8.69-1.134-12.637-2.855-1.72-5.122 1.89-5.122 1.89s8.523-9.488 6.634-17.507C58.653.76 56.744.35 54.99.967c-2.66 1.05-3.667 2.603-3.667 2.603s-3.442 4.996-4.24 12.426c-.798 7.431-1.973 16.415-1.973 16.415s-1.637 1.596-3.149 1.68c-1.511.083-.84-4.493-.84-4.493s1.176-6.969 1.092-8.144c-.084-1.176-.168-1.805-1.553-2.225-1.386-.42-2.897 1.343-2.897 1.343s-3.988 6.046-4.324 6.97l-.21.377-.21-.252s2.813-8.228.126-8.354c-2.687-.126-4.45 2.939-4.45 2.939s-3.065 5.121-3.19 5.71l-.21-.253s1.259-5.961 1.007-7.43c-.252-1.47-1.637-1.176-1.637-1.176s-1.764-.21-2.225.924c-.462 1.133-2.141 8.648-2.351 11.04 0 0-4.409 3.15-7.305 3.191-2.897.042-2.603-1.836-2.603-1.836s10.621-3.637 7.725-10.816c-1.302-1.847-2.813-2.427-4.954-2.385-2.142.042-4.736 1.347-6.457 5.21-.822 1.843-1.058 3.59-1.226 4.914 0 0-1.923.38-2.93-.46-1.008-.84-1.558 0-1.558 0S-.962 31.057.76 31.729c1.721.672 4.392.954 4.392.954H5.15a8.098 8.098 0 0 0 3.06 4.796c3.15 2.393 9.194-.204 9.194-.204l2.477-1.382s.084 2.276 1.889 2.608c1.805.332 2.56-.003 5.71-7.644 1.847-3.904 1.973-3.694 1.973-3.694l.21-.042s-1.428 7.473-.882 9.488c.546 2.016 2.939 1.805 2.939 1.805s1.301.22 2.35-3.474c1.05-3.694 3.065-7.798 3.065-7.798h.252s-.881 7.672.462 10.107c1.343 2.435 4.828.835 4.828.835s2.435-1.22 2.813-1.598c0 0 2.89 2.463 6.966 2.018C61.568 36.71 64.81 34.29 64.81 34.29s1.566 3.967 6.415 4.335c5.541.42 8.564-3.065 8.564-3.065s-.042 2.267 1.889 3.065c1.931.797 3.233-3.716 3.233-3.716l3.232-8.943h.294s.168 5.826 3.359 6.75c3.19.923 7.346-2.147 7.346-2.147s1.008-.54.84-2.22z"/><text font-family="LucidaGrande, Lucida Grande" font-size="0">ember</text><text font-family="LucidaGrande, Lucida Grande" font-size="8"><tspan x="87" y="41">®</tspan></text></g></svg>',icon:'<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg"><title>Combined Shape</title><path d="M20 0v14H0V0h20zm-6.5 8.621l-2.828-2.828-.708.707 3.536 3.536L17.036 6.5l-.708-.707L13.5 8.62z" fill="#FFF" fill-rule="evenodd"/></svg>'}}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"3hM3Un8V",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/transitions",["exports","ember"],function(e,t){e.default=function(){var e=t.default.testing?0:150;this.transition(this.hasClass("liquid-pop-over"),this.toValue(!0),this.use("toolTip",{duration:e,easing:"ease-in-out"}),this.reverse("toolTip",{duration:e,easing:"ease-in-out"}))}}),define("dummy/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/tool-tip",["exports","rsvp","liquid-fire"],function(e,t,n){function i(e){var i=e.duration,l=e.easing;return t.default.all([(0,n.animate)(this.newElement,{translateY:[0,10],scale:[1,.95],opacity:1},{duration:i,easing:l}),(0,n.animate)(this.oldElement,{translateY:[10,0],scale:[.96,1],opacity:0},{duration:i,easing:l})])}e.default=i}),define("dummy/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),n=JSON.parse(unescape(t)),i={default:n};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({name:"ember-single-select",version:"0.2.0+fe3c34f7"});