var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function d(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let h;function g(t){h=t}const p=[],m=[],$=[],y=[],b=Promise.resolve();let _=!1;function x(t){$.push(t)}const k=new Set;let v=0;function w(){const t=h;do{for(;v<p.length;){const t=p[v];v++,g(t),N(t.$$)}for(g(null),p.length=0,v=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];k.has(n)||(k.add(n),n())}$.length=0}while(p.length);for(;y.length;)y.pop()();_=!1,k.clear(),g(t)}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const O=new Set;function T(t,n){-1===t.$$.dirty[0]&&(p.push(t),_||(_=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(c,u,i,a,l,f,d,p=[-1]){const m=h;g(c);const $=c.$$={fragment:null,ctx:[],props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(m?m.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:u.target||m.$$.root};d&&d($.root);let y=!1;if($.ctx=i?i(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),y&&T(c,t)),n})):[],$.update(),y=!0,o($.before_update),$.fragment=!!a&&a($.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(O.delete(b),b.i(_))),function(t,e,c,u){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,c),u||x((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(x)}(c,u.target,u.anchor,u.customElement),w()}var b,_;g(m)}class I{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function C(t,n,e){const o=t.slice();return o[10]=n[e],o}function P(t){let n,e,o,r,c=t[4](t[10].status)+"",d=K(t[10].date)+"";return{c(){n=a("p"),e=l(c),o=l(": "),r=l(d)},m(t,c){i(t,n,c),u(n,e),u(n,o),u(n,r)},p(t,n){2&n&&c!==(c=t[4](t[10].status)+"")&&f(e,c),2&n&&d!==(d=K(t[10].date)+"")&&f(r,d)},d(t){t&&s(n)}}}function S(n){let e,o,r,c,h=n[3](n[0])+"",g=n[1],p=[];for(let t=0;t<g.length;t+=1)p[t]=P(C(n,g,t));return{c(){e=a("body"),o=a("h2"),r=l(h),c=l(" ");for(let t=0;t<p.length;t+=1)p[t].c();d(e,"background-color",n[2](n[0]))},m(t,n){i(t,e,n),u(e,o),u(o,r),u(e,c);for(let t=0;t<p.length;t+=1)p[t].m(e,null)},p(t,[n]){if(1&n&&h!==(h=t[3](t[0])+"")&&f(r,h),18&n){let o;for(g=t[1],o=0;o<g.length;o+=1){const r=C(t,g,o);p[o]?p[o].p(r,n):(p[o]=P(r),p[o].c(),p[o].m(e,null))}for(;o<p.length;o+=1)p[o].d(1);p.length=g.length}1&n&&d(e,"background-color",t[2](t[0]))},i:t,o:t,d(t){t&&s(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(p,t)}}}const j="UNKNOWN",D="WORKING",G="NOTWORKING";function K(t){return t.toLocaleString("sv",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).replace(",",".").replace(" ","T")}function R(t,n,e){let o=j,r=[],c=function(){r.length>0&&e(0,o=r[r.length-1].status)},u=function(t,n){r.push({status:t,date:n}),r.length>5&&r.shift(),e(1,r),c()};return setInterval((function(){!function(){const t=new AbortController,n=setTimeout((()=>t.abort()),2e3);fetch("https://connectivitycheck.gstatic.com/generate_204",{mode:"no-cors",signal:t.signal}).then((function(t){u(D,new Date),clearTimeout(n)})).catch((function(){u(G,new Date),clearTimeout(n)}))}()}),1e3),[o,r,function(t){return t===j?"white":t===D?"PaleGreen":t===G?"IndianRed":void 0},function(t){return t===j?"Checking internet status...":t===D?"Internet works":t===G?"Can't connect to the Internet":void 0},function(t){return t===j?"Unknown":t===D?"Pass":t===G?"Fail":void 0}]}return new class extends I{constructor(t){super(),E(this,t,R,S,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map