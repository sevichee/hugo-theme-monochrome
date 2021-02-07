(()=>{var d={default:"auto",zoomIn:"zoom-in",zoomOut:"zoom-out",grab:"grab",move:"move"};function a(t,e,n){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,o={passive:!1};i?t.addEventListener(e,n,o):t.removeEventListener(e,n,o)}function x(t,e){if(t){var n=new Image;n.onload=function(){e&&e(n)},n.src=t}}function E(t){return t.dataset.original?t.dataset.original:t.parentNode.tagName==="A"?t.parentNode.getAttribute("href"):null}function f(t,e,n){G(e);var i=t.style,o={};for(var r in e)n&&(o[r]=i[r]||""),i[r]=e[r];return o}function D(t,e){var n=Object.getOwnPropertyNames(Object.getPrototypeOf(t));n.forEach(function(o){t[o]=t[o].bind(e)})}var g={transitionProp:"transition",transEndEvent:"transitionend",transformProp:"transform",transformCssProp:"transform"},z=g.transformCssProp,u=g.transEndEvent;function G(t){var e=g.transitionProp,n=g.transformProp;if(t.transition){var i=t.transition;delete t.transition,t[e]=i}if(t.transform){var o=t.transform;delete t.transform,t[n]=o}}var c=function(){},_={enableGrab:!0,preloadImage:!1,closeOnWindowResize:!0,transitionDuration:.4,transitionTimingFunction:"cubic-bezier(0.4, 0, 0, 1)",bgColor:"rgb(255, 255, 255)",bgOpacity:1,scaleBase:1,scaleExtra:.5,scrollThreshold:40,zIndex:998,customSize:null,onOpen:c,onClose:c,onGrab:c,onMove:c,onRelease:c,onBeforeOpen:c,onBeforeClose:c,onBeforeGrab:c,onBeforeRelease:c,onImageLoading:c,onImageLoaded:c},k=200,F={init:function(e){D(this,e)},click:function(e){if(e.preventDefault(),p(e))return window.open(this.target.srcOriginal||e.currentTarget.src,"_blank");this.shown?this.released?this.close():this.release():this.open(e.currentTarget)},scroll:function(){var e=document.documentElement||document.body.parentNode||document.body,n=window.pageXOffset||e.scrollLeft,i=window.pageYOffset||e.scrollTop;this.lastScrollPosition===null&&(this.lastScrollPosition={x:n,y:i});var o=this.lastScrollPosition.x-n,r=this.lastScrollPosition.y-i,s=this.options.scrollThreshold;(Math.abs(r)>=s||Math.abs(o)>=s)&&(this.lastScrollPosition=null,this.close())},keydown:function(e){Y(e)&&(this.released?this.close():this.release(this.close))},mousedown:function(e){if(!C(e)||p(e))return;e.preventDefault();var n=e.clientX,i=e.clientY;this.pressTimer=setTimeout(function(){this.grab(n,i)}.bind(this),k)},mousemove:function(e){if(this.released)return;this.move(e.clientX,e.clientY)},mouseup:function(e){if(!C(e)||p(e))return;clearTimeout(this.pressTimer),this.released?this.close():this.release()},touchstart:function(e){e.preventDefault();var n=e.touches[0],i=n.clientX,o=n.clientY;this.pressTimer=setTimeout(function(){this.grab(i,o)}.bind(this),k)},touchmove:function(e){if(this.released)return;var n=e.touches[0],i=n.clientX,o=n.clientY;this.move(i,o)},touchend:function(e){if(R(e))return;clearTimeout(this.pressTimer),this.released?this.close():this.release()},clickOverlay:function(){this.close()},resizeWindow:function(){this.close()}};function C(t){return t.button===0}function p(t){return t.metaKey||t.ctrlKey}function R(t){t.targetTouches.length>0}function Y(t){var e=t.key||t.code;return e==="Escape"||t.keyCode===27}var X={init:function(e){this.el=document.createElement("div"),this.instance=e,this.parent=document.body,f(this.el,{position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0}),this.updateStyle(e.options),a(this.el,"click",e.handler.clickOverlay.bind(e))},updateStyle:function(e){f(this.el,{zIndex:e.zIndex,backgroundColor:e.bgColor,transition:`opacity
        `+e.transitionDuration+`s
        `+e.transitionTimingFunction})},insert:function(){this.parent.appendChild(this.el)},remove:function(){this.parent.removeChild(this.el)},fadeIn:function(){this.el.offsetWidth,this.el.style.opacity=this.instance.options.bgOpacity},fadeOut:function(){this.el.style.opacity=0}},q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function t(e,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},y=0,K={init:function(e,n){this.el=e,this.instance=n,this.srcThumbnail=this.el.getAttribute("src"),this.srcset=this.el.getAttribute("srcset"),this.srcOriginal=E(this.el),this.rect=this.el.getBoundingClientRect(),this.translate=null,this.scale=null,this.styleOpen=null,this.styleClose=null},zoomIn:function(){var e=this.instance.options,n=e.zIndex,i=e.enableGrab,o=e.transitionDuration,r=e.transitionTimingFunction;this.translate=this.calculateTranslate(),this.scale=this.calculateScale(),this.styleOpen={position:"relative",zIndex:n+1,cursor:i?d.grab:d.zoomOut,transition:z+`
        `+o+`s
        `+r,transform:"translate3d("+this.translate.x+"px, "+this.translate.y+"px, "+y+`px)
        scale(`+this.scale.x+","+this.scale.y+")",height:this.rect.height+"px",width:this.rect.width+"px"},this.el.offsetWidth,this.styleClose=f(this.el,this.styleOpen,!0)},zoomOut:function(){this.el.offsetWidth,f(this.el,{transform:"none"})},grab:function(e,n,i){var o=v(),r=o.x-e,s=o.y-n;f(this.el,{cursor:d.move,transform:`translate3d(
        `+(this.translate.x+r)+"px, "+(this.translate.y+s)+"px, "+y+`px)
        scale(`+(this.scale.x+i)+","+(this.scale.y+i)+")"})},move:function(e,n,i){var o=v(),r=o.x-e,s=o.y-n;f(this.el,{transition:z,transform:`translate3d(
        `+(this.translate.x+r)+"px, "+(this.translate.y+s)+"px, "+y+`px)
        scale(`+(this.scale.x+i)+","+(this.scale.y+i)+")"})},restoreCloseStyle:function(){f(this.el,this.styleClose)},restoreOpenStyle:function(){f(this.el,this.styleOpen)},upgradeSource:function(){if(this.srcOriginal){var e=this.el.parentNode;this.srcset&&this.el.removeAttribute("srcset");var n=this.el.cloneNode(!1);n.setAttribute("src",this.srcOriginal),n.style.position="fixed",n.style.visibility="hidden",e.appendChild(n),setTimeout(function(){this.el.setAttribute("src",this.srcOriginal),e.removeChild(n)}.bind(this),50)}},downgradeSource:function(){this.srcOriginal&&(this.srcset&&this.el.setAttribute("srcset",this.srcset),this.el.setAttribute("src",this.srcThumbnail))},calculateTranslate:function(){var e=v(),n={x:this.rect.left+this.rect.width/2,y:this.rect.top+this.rect.height/2};return{x:e.x-n.x,y:e.y-n.y}},calculateScale:function(){var e=this.el.dataset,n=e.zoomingHeight,i=e.zoomingWidth,o=this.instance.options,r=o.customSize,s=o.scaleBase;if(!r&&n&&i)return{x:i/this.rect.width,y:n/this.rect.height};if(r&&(typeof r=="undefined"?"undefined":q(r))==="object")return{x:r.width/this.rect.width,y:r.height/this.rect.height};var l=this.rect.width/2,h=this.rect.height/2,b=v(),w={x:b.x-l,y:b.y-h},W=w.x/l,$=w.y/h,m=s+Math.min(W,$);if(r&&typeof r=="string"){var N=i||this.el.naturalWidth,M=n||this.el.naturalHeight,O=parseFloat(r)*N/(100*this.rect.width),S=parseFloat(r)*M/(100*this.rect.height);if(m>O||m>S)return{x:O,y:S}}return{x:m,y:m}}};function v(){var t=document.documentElement,e=Math.min(t.clientWidth,window.innerWidth),n=Math.min(t.clientHeight,window.innerHeight);return{x:e/2,y:n/2}}var Z=function(){function t(e){j(this,t),this.target=Object.create(K),this.overlay=Object.create(X),this.handler=Object.create(F),this.body=document.body,this.shown=!1,this.lock=!1,this.released=!0,this.lastScrollPosition=null,this.pressTimer=null,this.options=T({},_,e),this.overlay.init(this),this.handler.init(this)}return H(t,[{key:"listen",value:function(n){if(typeof n=="string")for(var i=document.querySelectorAll(n),o=i.length;o--;)this.listen(i[o]);else n.tagName==="IMG"&&(n.style.cursor=d.zoomIn,a(n,"click",this.handler.click),this.options.preloadImage&&x(E(n)));return this}},{key:"config",value:function(n){return n?(T(this.options,n),this.overlay.updateStyle(this.options),this):this.options}},{key:"open",value:function(n){var i=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.onOpen;if(this.shown||this.lock)return;var r=typeof n=="string"?document.querySelector(n):n;if(r.tagName!=="IMG")return;if(this.options.onBeforeOpen(r),this.target.init(r,this),!this.options.preloadImage){var s=this.target.srcOriginal;s!=null&&(this.options.onImageLoading(r),x(s,this.options.onImageLoaded))}this.shown=!0,this.lock=!0,this.target.zoomIn(),this.overlay.insert(),this.overlay.fadeIn(),a(document,"scroll",this.handler.scroll),a(document,"keydown",this.handler.keydown),this.options.closeOnWindowResize&&a(window,"resize",this.handler.resizeWindow);var l=function h(){a(r,u,h,!1),i.lock=!1,i.target.upgradeSource(),i.options.enableGrab&&L(document,i.handler,!0),o(r)};return a(r,u,l),this}},{key:"close",value:function(){var n=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.onClose;if(!this.shown||this.lock)return;var o=this.target.el;this.options.onBeforeClose(o),this.lock=!0,this.body.style.cursor=d.default,this.overlay.fadeOut(),this.target.zoomOut(),a(document,"scroll",this.handler.scroll,!1),a(document,"keydown",this.handler.keydown,!1),this.options.closeOnWindowResize&&a(window,"resize",this.handler.resizeWindow,!1);var r=function s(){a(o,u,s,!1),n.shown=!1,n.lock=!1,n.target.downgradeSource(),n.options.enableGrab&&L(document,n.handler,!1),n.target.restoreCloseStyle(),n.overlay.remove(),i(o)};return a(o,u,r),this}},{key:"grab",value:function(n,i){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.options.scaleExtra,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:this.options.onGrab;if(!this.shown||this.lock)return;var s=this.target.el;this.options.onBeforeGrab(s),this.released=!1,this.target.grab(n,i,o);var l=function h(){a(s,u,h,!1),r(s)};return a(s,u,l),this}},{key:"move",value:function(n,i){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.options.scaleExtra,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:this.options.onMove;if(!this.shown||this.lock)return;this.released=!1,this.body.style.cursor=d.move,this.target.move(n,i,o);var s=this.target.el,l=function h(){a(s,u,h,!1),r(s)};return a(s,u,l),this}},{key:"release",value:function(){var n=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.onRelease;if(!this.shown||this.lock)return;var o=this.target.el;this.options.onBeforeRelease(o),this.lock=!0,this.body.style.cursor=d.default,this.target.restoreOpenStyle();var r=function s(){a(o,u,s,!1),n.lock=!1,n.released=!0,i(o)};return a(o,u,r),this}}]),t}();function L(t,e,n){var i=["mousedown","mousemove","mouseup","touchstart","touchmove","touchend"];i.forEach(function(r){a(t,r,e[r],n)})}var I=Z;function A(t){let e=t.scrollLeft,n=t.scrollWidth-e-t.clientWidth,i=t.parentNode,o=i.getElementsByClassName("overflow-indicator-btn-right")[0],r=i.getElementsByClassName("overflow-indicator-btn-left")[0];n>1?o.classList.add("show"):o.classList.remove("show"),e>1?r.classList.add("show"):r.classList.remove("show")}function B(){let t=document.querySelectorAll(".overflow-indicator-content");t.forEach(e=>A(e))}function Q(t){return t<.5?2*t*t:-1+(4-2*t)*t}function P(t,e){let n=null,i=t.scrollLeft,o=.2;o=o*1e3;let r=s=>{n||(n=s);let l=s-n,h=Math.min(l/o,1);t.scrollLeft=Q(h)*e+i,l<o&&window.requestAnimationFrame(r)};window.requestAnimationFrame(r)}function U(t){let e=t.parentNode,n=e.getElementsByClassName("overflow-indicator-content")[0];P(n,202)}function J(t){let e=t.parentNode,n=e.getElementsByClassName("overflow-indicator-content")[0];P(n,-202)}function V(){window.addEventListener("resize",B),document.querySelectorAll(".overflow-indicator-content").forEach(t=>{t.addEventListener("scroll",e=>A(e.target))}),document.querySelectorAll(".overflow-indicator-btn-right").forEach(t=>{t.addEventListener("click",e=>U(e.target))}),document.querySelectorAll(".overflow-indicator-btn-left").forEach(t=>{t.addEventListener("click",e=>J(e.target))})}V();B();document.addEventListener("DOMContentLoaded",function(){let t=new I;t.listen(".img-zoomable")});})();