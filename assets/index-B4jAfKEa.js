(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function du(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ms=[],vn=()=>{},zE=()=>!1,qa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),pu=t=>t.startsWith("onUpdate:"),St=Object.assign,mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},WE=Object.prototype.hasOwnProperty,Oe=(t,e)=>WE.call(t,e),le=Array.isArray,gs=t=>no(t)==="[object Map]",Ha=t=>no(t)==="[object Set]",wf=t=>no(t)==="[object Date]",ge=t=>typeof t=="function",nt=t=>typeof t=="string",Sn=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",um=t=>(je(t)||ge(t))&&ge(t.then)&&ge(t.catch),hm=Object.prototype.toString,no=t=>hm.call(t),KE=t=>no(t).slice(8,-1),fm=t=>no(t)==="[object Object]",gu=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ti=du(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),za=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},GE=/-(\w)/g,rn=za(t=>t.replace(GE,(e,n)=>n?n.toUpperCase():"")),QE=/\B([A-Z])/g,Xr=za(t=>t.replace(QE,"-$1").toLowerCase()),Wa=za(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wc=za(t=>t?`on${Wa(t)}`:""),fr=(t,e)=>!Object.is(t,e),Qo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},da=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Tf;const Ka=()=>Tf||(Tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _u(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=nt(r)?ZE(r):_u(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(nt(t)||je(t))return t}const JE=/;(?![^(]*\))/g,YE=/:([^]+)/,XE=/\/\*[^]*?\*\//g;function ZE(t){const e={};return t.replace(XE,"").split(JE).forEach(n=>{if(n){const r=n.split(YE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yt(t){let e="";if(nt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Yt(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ev="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tv=du(ev);function dm(t){return!!t||t===""}function nv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ss(t[r],e[r]);return n}function Ss(t,e){if(t===e)return!0;let n=wf(t),r=wf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Sn(t),r=Sn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?nv(t,e):!1;if(n=je(t),r=je(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ss(t[o],e[o]))return!1}}return String(t)===String(e)}function rv(t,e){return t.findIndex(n=>Ss(n,e))}const pm=t=>!!(t&&t.__v_isRef===!0),Be=t=>nt(t)?t:t==null?"":le(t)||je(t)&&(t.toString===hm||!ge(t.toString))?pm(t)?Be(t.value):JSON.stringify(t,mm,2):String(t),mm=(t,e)=>pm(e)?mm(t,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Kc(r,i)+" =>"]=s,n),{})}:Ha(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Kc(n))}:Sn(e)?Kc(e):je(e)&&!le(e)&&!fm(e)?String(e):e,Kc=(t,e="")=>{var n;return Sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class sv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){++this._on===1&&(this.prevScope=Vt,Vt=this)}off(){this._on>0&&--this._on===0&&(Vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function iv(){return Vt}let Ue;const Gc=new WeakSet;class gm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gc.has(this)&&(Gc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ym(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,If(this),Em(this);const e=Ue,n=cn;Ue=this,cn=!0;try{return this.fn()}finally{vm(this),Ue=e,cn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vu(e);this.deps=this.depsTail=void 0,If(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wl(this)&&this.run()}get dirty(){return wl(this)}}let _m=0,Ii,bi;function ym(t,e=!1){if(t.flags|=8,e){t.next=bi,bi=t;return}t.next=Ii,Ii=t}function yu(){_m++}function Eu(){if(--_m>0)return;if(bi){let e=bi;for(bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ii;){let e=Ii;for(Ii=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Em(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),vu(r),ov(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function wl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mi)||(t.globalVersion=Mi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!wl(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=cn;Ue=t,cn=!0;try{Em(t);const s=t.fn(t._value);(e.version===0||fr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,cn=r,vm(t),t.flags&=-3}}function vu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)vu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ov(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let cn=!0;const Tm=[];function $n(){Tm.push(cn),cn=!1}function jn(){const t=Tm.pop();cn=t===void 0?!0:t}function If(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Mi=0;class av{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ue||!cn||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new av(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,Im(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Mi++,this.notify(e)}notify(e){yu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Eu()}}}function Im(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Im(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tl=new WeakMap,qr=Symbol(""),Il=Symbol(""),Fi=Symbol("");function wt(t,e,n){if(cn&&Ue){let r=Tl.get(t);r||Tl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new wu),s.map=r,s.key=n),s.track()}}function xn(t,e,n,r,s,i){const o=Tl.get(t);if(!o){Mi++;return}const c=l=>{l&&l.trigger()};if(yu(),e==="clear")o.forEach(c);else{const l=le(t),u=l&&gu(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Fi||!Sn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Fi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(qr)),gs(t)&&c(o.get(Il)));break;case"delete":l||(c(o.get(qr)),gs(t)&&c(o.get(Il)));break;case"set":gs(t)&&c(o.get(qr));break}}Eu()}function as(t){const e=Ne(t);return e===t?e:(wt(e,"iterate",Fi),tn(t)?e:e.map(ft))}function Ga(t){return wt(t=Ne(t),"iterate",Fi),t}const cv={__proto__:null,[Symbol.iterator](){return Qc(this,Symbol.iterator,ft)},concat(...t){return as(this).concat(...t.map(e=>le(e)?as(e):e))},entries(){return Qc(this,"entries",t=>(t[1]=ft(t[1]),t))},every(t,e){return On(this,"every",t,e,void 0,arguments)},filter(t,e){return On(this,"filter",t,e,n=>n.map(ft),arguments)},find(t,e){return On(this,"find",t,e,ft,arguments)},findIndex(t,e){return On(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return On(this,"findLast",t,e,ft,arguments)},findLastIndex(t,e){return On(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return On(this,"forEach",t,e,void 0,arguments)},includes(...t){return Jc(this,"includes",t)},indexOf(...t){return Jc(this,"indexOf",t)},join(t){return as(this).join(t)},lastIndexOf(...t){return Jc(this,"lastIndexOf",t)},map(t,e){return On(this,"map",t,e,void 0,arguments)},pop(){return fi(this,"pop")},push(...t){return fi(this,"push",t)},reduce(t,...e){return bf(this,"reduce",t,e)},reduceRight(t,...e){return bf(this,"reduceRight",t,e)},shift(){return fi(this,"shift")},some(t,e){return On(this,"some",t,e,void 0,arguments)},splice(...t){return fi(this,"splice",t)},toReversed(){return as(this).toReversed()},toSorted(t){return as(this).toSorted(t)},toSpliced(...t){return as(this).toSpliced(...t)},unshift(...t){return fi(this,"unshift",t)},values(){return Qc(this,"values",ft)}};function Qc(t,e,n){const r=Ga(t),s=r[e]();return r!==t&&!tn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const lv=Array.prototype;function On(t,e,n,r,s,i){const o=Ga(t),c=o!==t&&!tn(t),l=o[e];if(l!==lv[e]){const p=l.apply(t,i);return c?ft(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,ft(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function bf(t,e,n,r){const s=Ga(t);let i=n;return s!==t&&(tn(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ft(c),l,t)}),s[e](i,...r)}function Jc(t,e,n){const r=Ne(t);wt(r,"iterate",Fi);const s=r[e](...n);return(s===-1||s===!1)&&bu(n[0])?(n[0]=Ne(n[0]),r[e](...n)):s}function fi(t,e,n=[]){$n(),yu();const r=Ne(t)[e].apply(t,n);return Eu(),jn(),r}const uv=du("__proto__,__v_isRef,__isVue"),bm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sn));function hv(t){Sn(t)||(t=String(t));const e=Ne(this);return wt(e,"has",t),e.hasOwnProperty(t)}class Am{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?wv:Cm:i?Pm:Sm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let l;if(o&&(l=cv[n]))return l;if(n==="hasOwnProperty")return hv}const c=Reflect.get(e,n,Rt(e)?e:r);return(Sn(n)?bm.has(n):uv(n))||(s||wt(e,"get",n),i)?c:Rt(c)?o&&gu(n)?c:c.value:je(c)?s?Nm(c):Qa(c):c}}class Rm extends Am{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Er(i);if(!tn(r)&&!Er(r)&&(i=Ne(i),r=Ne(r)),!le(e)&&Rt(i)&&!Rt(r))return l?!1:(i.value=r,!0)}const o=le(e)&&gu(n)?Number(n)<e.length:Oe(e,n),c=Reflect.set(e,n,r,Rt(e)?e:s);return e===Ne(s)&&(o?fr(r,i)&&xn(e,"set",n,r):xn(e,"add",n,r)),c}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&xn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Sn(n)||!bm.has(n))&&wt(e,"has",n),r}ownKeys(e){return wt(e,"iterate",le(e)?"length":qr),Reflect.ownKeys(e)}}class fv extends Am{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dv=new Rm,pv=new fv,mv=new Rm(!0);const bl=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function gv(t,e,n){return function(...r){const s=this.__v_raw,i=Ne(s),o=gs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?bl:e?pa:ft;return!e&&wt(i,"iterate",l?Il:qr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Uo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _v(t,e){const n={get(s){const i=this.__v_raw,o=Ne(i),c=Ne(s);t||(fr(s,c)&&wt(o,"get",s),wt(o,"get",c));const{has:l}=Fo(o),u=e?bl:t?pa:ft;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&wt(Ne(s),"iterate",qr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ne(i),c=Ne(s);return t||(fr(s,c)&&wt(o,"has",s),wt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ne(c),u=e?bl:t?pa:ft;return!t&&wt(l,"iterate",qr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return St(n,t?{add:Uo("add"),set:Uo("set"),delete:Uo("delete"),clear:Uo("clear")}:{add(s){!e&&!tn(s)&&!Er(s)&&(s=Ne(s));const i=Ne(this);return Fo(i).has.call(i,s)||(i.add(s),xn(i,"add",s,s)),this},set(s,i){!e&&!tn(i)&&!Er(i)&&(i=Ne(i));const o=Ne(this),{has:c,get:l}=Fo(o);let u=c.call(o,s);u||(s=Ne(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?fr(i,f)&&xn(o,"set",s,i):xn(o,"add",s,i),this},delete(s){const i=Ne(this),{has:o,get:c}=Fo(i);let l=o.call(i,s);l||(s=Ne(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&xn(i,"delete",s,void 0),u},clear(){const s=Ne(this),i=s.size!==0,o=s.clear();return i&&xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=gv(s,t,e)}),n}function Tu(t,e){const n=_v(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const yv={get:Tu(!1,!1)},Ev={get:Tu(!1,!0)},vv={get:Tu(!0,!1)};const Sm=new WeakMap,Pm=new WeakMap,Cm=new WeakMap,wv=new WeakMap;function Tv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iv(t){return t.__v_skip||!Object.isExtensible(t)?0:Tv(KE(t))}function Qa(t){return Er(t)?t:Iu(t,!1,dv,yv,Sm)}function km(t){return Iu(t,!1,mv,Ev,Pm)}function Nm(t){return Iu(t,!0,pv,vv,Cm)}function Iu(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Iv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function _s(t){return Er(t)?_s(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function tn(t){return!!(t&&t.__v_isShallow)}function bu(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function bv(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&vl(t,"__v_skip",!0),t}const ft=t=>je(t)?Qa(t):t,pa=t=>je(t)?Nm(t):t;function Rt(t){return t?t.__v_isRef===!0:!1}function xe(t){return Om(t,!1)}function Av(t){return Om(t,!0)}function Om(t,e){return Rt(t)?t:new Rv(t,e)}class Rv{constructor(e,n){this.dep=new wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ne(e),this._value=n?e:ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||tn(e)||Er(e);e=r?e:Ne(e),fr(e,n)&&(this._rawValue=e,this._value=r?e:ft(e),this.dep.trigger())}}function ys(t){return Rt(t)?t.value:t}const Sv={get:(t,e,n)=>e==="__v_raw"?t:ys(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Rt(s)&&!Rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Dm(t){return _s(t)?t:new Proxy(t,Sv)}class Pv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return ym(this,!0),!0}get value(){const e=this.dep.track();return wm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cv(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new Pv(r,s,n)}const Bo={},ma=new WeakMap;let Ur;function kv(t,e=!1,n=Ur){if(n){let r=ma.get(n);r||ma.set(n,r=[]),r.push(t)}}function Nv(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=z=>s?z:tn(z)||s===!1||s===0?Ln(z,1):Ln(z);let f,p,m,y,_=!1,S=!1;if(Rt(t)?(p=()=>t.value,_=tn(t)):_s(t)?(p=()=>u(t),_=!0):le(t)?(S=!0,_=t.some(z=>_s(z)||tn(z)),p=()=>t.map(z=>{if(Rt(z))return z.value;if(_s(z))return u(z);if(ge(z))return l?l(z,2):z()})):ge(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){$n();try{m()}finally{jn()}}const z=Ur;Ur=f;try{return l?l(t,3,[y]):t(y)}finally{Ur=z}}:p=vn,e&&s){const z=p,oe=s===!0?1/0:s;p=()=>Ln(z(),oe)}const P=iv(),x=()=>{f.stop(),P&&P.active&&mu(P.effects,f)};if(i&&e){const z=e;e=(...oe)=>{z(...oe),x()}}let $=S?new Array(t.length).fill(Bo):Bo;const q=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const oe=f.run();if(s||_||(S?oe.some((_e,b)=>fr(_e,$[b])):fr(oe,$))){m&&m();const _e=Ur;Ur=f;try{const b=[oe,$===Bo?void 0:S&&$[0]===Bo?[]:$,y];$=oe,l?l(e,3,b):e(...b)}finally{Ur=_e}}}else f.run()};return c&&c(q),f=new gm(p),f.scheduler=o?()=>o(q,!1):q,y=z=>kv(z,!1,f),m=f.onStop=()=>{const z=ma.get(f);if(z){if(l)l(z,4);else for(const oe of z)oe();ma.delete(f)}},e?r?q(!0):$=f.run():o?o(q.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function Ln(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Rt(t))Ln(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Ln(t[r],e,n);else if(Ha(t)||gs(t))t.forEach(r=>{Ln(r,e,n)});else if(fm(t)){for(const r in t)Ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ln(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ro(t,e,n,r){try{return r?t(...r):t()}catch(s){Ja(s,e,n)}}function Pn(t,e,n,r){if(ge(t)){const s=ro(t,e,n,r);return s&&um(s)&&s.catch(i=>{Ja(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Pn(t[i],e,n,r));return s}}function Ja(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){$n(),ro(i,null,10,[t,l,u]),jn();return}}Ov(t,n,s,r,o)}function Ov(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ot=[];let gn=-1;const Es=[];let nr=null,cs=0;const Vm=Promise.resolve();let ga=null;function Au(t){const e=ga||Vm;return t?e.then(this?t.bind(this):t):e}function Dv(t){let e=gn+1,n=Ot.length;for(;e<n;){const r=e+n>>>1,s=Ot[r],i=Ui(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ru(t){if(!(t.flags&1)){const e=Ui(t),n=Ot[Ot.length-1];!n||!(t.flags&2)&&e>=Ui(n)?Ot.push(t):Ot.splice(Dv(e),0,t),t.flags|=1,xm()}}function xm(){ga||(ga=Vm.then(Mm))}function Vv(t){le(t)?Es.push(...t):nr&&t.id===-1?nr.splice(cs+1,0,t):t.flags&1||(Es.push(t),t.flags|=1),xm()}function Af(t,e,n=gn+1){for(;n<Ot.length;n++){const r=Ot[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ot.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Lm(t){if(Es.length){const e=[...new Set(Es)].sort((n,r)=>Ui(n)-Ui(r));if(Es.length=0,nr){nr.push(...e);return}for(nr=e,cs=0;cs<nr.length;cs++){const n=nr[cs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,cs=0}}const Ui=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mm(t){try{for(gn=0;gn<Ot.length;gn++){const e=Ot[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ro(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Ot.length;gn++){const e=Ot[gn];e&&(e.flags&=-2)}gn=-1,Ot.length=0,Lm(),ga=null,(Ot.length||Es.length)&&Mm()}}let zt=null,Fm=null;function _a(t){const e=zt;return zt=t,Fm=t&&t.type.__scopeId||null,e}function on(t,e=zt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xf(-1);const i=_a(e);let o;try{o=t(...s)}finally{_a(i),r._d&&xf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function rt(t,e){if(zt===null)return t;const n=ec(zt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Fe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&($n(),Pn(l,n,8,[t.el,c,t,e]),jn())}}const xv=Symbol("_vte"),Lv=t=>t.__isTeleport;function Su(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Su(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Um(t,e){return ge(t)?St({name:t.name},e,{setup:t}):t}function Bm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ai(t,e,n,r,s=!1){if(le(t)){t.forEach((_,S)=>Ai(_,e&&(le(e)?e[S]:e),n,r,s));return}if(Ri(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ai(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ec(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Fe?c.refs={}:c.refs,p=c.setupState,m=Ne(p),y=p===Fe?()=>!1:_=>Oe(m,_);if(u!=null&&u!==l&&(nt(u)?(f[u]=null,y(u)&&(p[u]=null)):Rt(u)&&(u.value=null)),ge(l))ro(l,c,12,[o,f]);else{const _=nt(l),S=Rt(l);if(_||S){const P=()=>{if(t.f){const x=_?y(l)?p[l]:f[l]:l.value;s?le(x)&&mu(x,i):le(x)?x.includes(i)||x.push(i):_?(f[l]=[i],y(l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else _?(f[l]=o,y(l)&&(p[l]=o)):S&&(l.value=o,t.k&&(f[t.k]=o))};o?(P.id=-1,Ht(P,n)):P()}}}Ka().requestIdleCallback;Ka().cancelIdleCallback;const Ri=t=>!!t.type.__asyncLoader,$m=t=>t.type.__isKeepAlive;function Mv(t,e){jm(t,"a",e)}function Fv(t,e){jm(t,"da",e)}function jm(t,e,n=It){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ya(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$m(s.parent.vnode)&&Uv(r,e,n,s),s=s.parent}}function Uv(t,e,n,r){const s=Ya(e,t,r,!0);qm(()=>{mu(r[e],s)},n)}function Ya(t,e,n=It,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{$n();const c=so(n),l=Pn(e,n,t,o);return c(),jn(),l});return r?s.unshift(i):s.push(i),i}}const Gn=t=>(e,n=It)=>{(!$i||t==="sp")&&Ya(t,(...r)=>e(...r),n)},Bv=Gn("bm"),$s=Gn("m"),$v=Gn("bu"),jv=Gn("u"),qv=Gn("bum"),qm=Gn("um"),Hv=Gn("sp"),zv=Gn("rtg"),Wv=Gn("rtc");function Kv(t,e=It){Ya("ec",t,e)}const Gv="components";function Ps(t,e){return Jv(Gv,t,!0,e)||t}const Qv=Symbol.for("v-ndc");function Jv(t,e,n=!0,r=!1){const s=zt||It;if(s){const i=s.type;{const c=Fw(i,!1);if(c&&(c===e||c===rn(e)||c===Wa(rn(e))))return i}const o=Rf(s[t]||i[t],e)||Rf(s.appContext[t],e);return!o&&r?i:o}}function Rf(t,e){return t&&(t[e]||t[rn(e)]||t[Wa(rn(e))])}function Yv(t,e,n,r){let s;const i=n,o=le(t);if(o||nt(t)){const c=o&&_s(t);let l=!1,u=!1;c&&(l=!tn(t),u=Er(t),t=Ga(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?pa(ft(t[f])):ft(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Al=t=>t?ug(t)?ec(t):Al(t.parent):null,Si=St(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Al(t.parent),$root:t=>Al(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zm(t),$forceUpdate:t=>t.f||(t.f=()=>{Ru(t.update)}),$nextTick:t=>t.n||(t.n=Au.bind(t.proxy)),$watch:t=>yw.bind(t)}),Yc=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),Xv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Yc(r,e))return o[e]=1,r[e];if(s!==Fe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];Rl&&(o[e]=0)}}const f=Si[e];let p,m;if(f)return e==="$attrs"&&wt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Yc(s,e)?(s[e]=n,!0):r!==Fe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Fe&&Oe(t,o)||Yc(e,o)||(c=i[0])&&Oe(c,o)||Oe(r,o)||Oe(Si,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rl=!0;function Zv(t){const e=zm(t),n=t.proxy,r=t.ctx;Rl=!1,e.beforeCreate&&Pf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:_,activated:S,deactivated:P,beforeDestroy:x,beforeUnmount:$,destroyed:q,unmounted:z,render:oe,renderTracked:_e,renderTriggered:b,errorCaptured:v,serverPrefetch:I,expose:A,inheritAttrs:R,components:C,directives:w,filters:ze}=e;if(u&&ew(u,r,null),o)for(const ve in o){const fe=o[ve];ge(fe)&&(r[ve]=fe.bind(n))}if(s){const ve=s.call(n,n);je(ve)&&(t.data=Qa(ve))}if(Rl=!0,i)for(const ve in i){const fe=i[ve],mt=ge(fe)?fe.bind(n,n):ge(fe.get)?fe.get.bind(n,n):vn,Bt=!ge(fe)&&ge(fe.set)?fe.set.bind(n):vn,Je=Xt({get:mt,set:Bt});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Ce=>Je.value=Ce})}if(c)for(const ve in c)Hm(c[ve],r,n,ve);if(l){const ve=ge(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(fe=>{Jo(fe,ve[fe])})}f&&Pf(f,t,"c");function Pe(ve,fe){le(fe)?fe.forEach(mt=>ve(mt.bind(n))):fe&&ve(fe.bind(n))}if(Pe(Bv,p),Pe($s,m),Pe($v,y),Pe(jv,_),Pe(Mv,S),Pe(Fv,P),Pe(Kv,v),Pe(Wv,_e),Pe(zv,b),Pe(qv,$),Pe(qm,z),Pe(Hv,I),le(A))if(A.length){const ve=t.exposed||(t.exposed={});A.forEach(fe=>{Object.defineProperty(ve,fe,{get:()=>n[fe],set:mt=>n[fe]=mt,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===vn&&(t.render=oe),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),w&&(t.directives=w),I&&Bm(t)}function ew(t,e,n=vn){le(t)&&(t=Sl(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),Rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Pf(t,e,n){Pn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hm(t,e,n,r){let s=r.includes(".")?sg(n,r):()=>n[r];if(nt(t)){const i=e[t];ge(i)&&Yo(s,i)}else if(ge(t))Yo(s,t.bind(n));else if(je(t))if(le(t))t.forEach(i=>Hm(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&Yo(s,i,t)}}function zm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ya(l,u,o,!0)),ya(l,e,o)),je(e)&&i.set(e,l),l}function ya(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ya(t,i,n,!0),s&&s.forEach(o=>ya(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=tw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const tw={data:Cf,props:kf,emits:kf,methods:gi,computed:gi,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:gi,directives:gi,watch:rw,provide:Cf,inject:nw};function Cf(t,e){return e?t?function(){return St(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function nw(t,e){return gi(Sl(t),Sl(e))}function Sl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function gi(t,e){return t?St(Object.create(null),t,e):e}function kf(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:St(Object.create(null),Sf(t),Sf(e??{})):e}function rw(t,e){if(!t)return e;if(!e)return t;const n=St(Object.create(null),t);for(const r in e)n[r]=Nt(t[r],e[r]);return n}function Wm(){return{app:null,config:{isNativeTag:zE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sw=0;function iw(t,e){return function(r,s=null){ge(r)||(r=St({},r)),s!=null&&!je(s)&&(s=null);const i=Wm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:sw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Bw,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ge(f.install)?(o.add(f),f.install(u,...p)):ge(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const y=u._ceVNode||De(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),l=!0,u._container=f,f.__vue_app__=u,ec(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Pn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=vs;vs=u;try{return f()}finally{vs=p}}};return u}}let vs=null;function Jo(t,e){if(It){let n=It.provides;const r=It.parent&&It.parent.provides;r===n&&(n=It.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=Dw();if(r||vs){let s=vs?vs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const Km={},Gm=()=>Object.create(Km),Qm=t=>Object.getPrototypeOf(t)===Km;function ow(t,e,n,r=!1){const s={},i=Gm();t.propsDefaults=Object.create(null),Jm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:km(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function aw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ne(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Xa(t.emitsOptions,m))continue;const y=e[m];if(l)if(Oe(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const _=rn(m);s[_]=Pl(l,c,_,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{Jm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Oe(e,p)&&((f=Xr(p))===p||!Oe(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Pl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&xn(t.attrs,"set","")}function Jm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ti(l))continue;const u=e[l];let f;s&&Oe(s,f=rn(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Xa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ne(n),u=c||Fe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Pl(s,l,p,u[p],t,!Oe(u,p))}}return o}function Pl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Oe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ge(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=so(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Xr(n))&&(r=!0))}return r}const cw=new WeakMap;function Ym(t,e,n=!1){const r=n?cw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ge(t)){const f=p=>{l=!0;const[m,y]=Ym(p,e,!0);St(o,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return je(t)&&r.set(t,ms),ms;if(le(i))for(let f=0;f<i.length;f++){const p=rn(i[f]);Nf(p)&&(o[p]=Fe)}else if(i)for(const f in i){const p=rn(f);if(Nf(p)){const m=i[f],y=o[p]=le(m)||ge(m)?{type:m}:St({},m),_=y.type;let S=!1,P=!0;if(le(_))for(let x=0;x<_.length;++x){const $=_[x],q=ge($)&&$.name;if(q==="Boolean"){S=!0;break}else q==="String"&&(P=!1)}else S=ge(_)&&_.name==="Boolean";y[0]=S,y[1]=P,(S||Oe(y,"default"))&&c.push(p)}}const u=[o,c];return je(t)&&r.set(t,u),u}function Nf(t){return t[0]!=="$"&&!Ti(t)}const Pu=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Cu=t=>le(t)?t.map(En):[En(t)],lw=(t,e,n)=>{if(e._n)return e;const r=on((...s)=>Cu(e(...s)),n);return r._c=!1,r},Xm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Pu(s))continue;const i=t[s];if(ge(i))e[s]=lw(s,i,r);else if(i!=null){const o=Cu(i);e[s]=()=>o}}},Zm=(t,e)=>{const n=Cu(e);t.slots.default=()=>n},eg=(t,e,n)=>{for(const r in e)(n||!Pu(r))&&(t[r]=e[r])},uw=(t,e,n)=>{const r=t.slots=Gm();if(t.vnode.shapeFlag&32){const s=e.__;s&&vl(r,"__",s,!0);const i=e._;i?(eg(r,e,n),n&&vl(r,"_",i,!0)):Xm(e,r)}else e&&Zm(t,e)},hw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:eg(s,e,n):(i=!e.$stable,Xm(e,s)),o=e}else e&&(Zm(t,e),o={default:1});if(i)for(const c in s)!Pu(c)&&o[c]==null&&delete s[c]},Ht=Aw;function fw(t){return dw(t)}function dw(t,e){const n=Ka();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=vn,insertStaticContent:_}=t,S=(E,T,k,M=null,j=null,U=null,J=void 0,K=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!di(E,T)&&(M=L(E),Ce(E,j,U,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:H,ref:re,shapeFlag:Q}=T;switch(H){case Za:P(E,T,k,M);break;case vr:x(E,T,k,M);break;case Zc:E==null&&$(T,k,M,J);break;case yn:C(E,T,k,M,j,U,J,K,W);break;default:Q&1?oe(E,T,k,M,j,U,J,K,W):Q&6?w(E,T,k,M,j,U,J,K,W):(Q&64||Q&128)&&H.process(E,T,k,M,j,U,J,K,W,te)}re!=null&&j?Ai(re,E&&E.ref,U,T||E,!T):re==null&&E&&E.ref!=null&&Ai(E.ref,null,U,E,!0)},P=(E,T,k,M)=>{if(E==null)r(T.el=c(T.children),k,M);else{const j=T.el=E.el;T.children!==E.children&&u(j,T.children)}},x=(E,T,k,M)=>{E==null?r(T.el=l(T.children||""),k,M):T.el=E.el},$=(E,T,k,M)=>{[E.el,E.anchor]=_(E.children,T,k,M,E.el,E.anchor)},q=({el:E,anchor:T},k,M)=>{let j;for(;E&&E!==T;)j=m(E),r(E,k,M),E=j;r(T,k,M)},z=({el:E,anchor:T})=>{let k;for(;E&&E!==T;)k=m(E),s(E),E=k;s(T)},oe=(E,T,k,M,j,U,J,K,W)=>{T.type==="svg"?J="svg":T.type==="math"&&(J="mathml"),E==null?_e(T,k,M,j,U,J,K,W):I(E,T,j,U,J,K,W)},_e=(E,T,k,M,j,U,J,K)=>{let W,H;const{props:re,shapeFlag:Q,transition:ne,dirs:ue}=E;if(W=E.el=o(E.type,U,re&&re.is,re),Q&8?f(W,E.children):Q&16&&v(E.children,W,null,M,j,Xc(E,U),J,K),ue&&Mr(E,null,M,"created"),b(W,E,E.scopeId,J,M),re){for(const ye in re)ye!=="value"&&!Ti(ye)&&i(W,ye,null,re[ye],U,M);"value"in re&&i(W,"value",null,re.value,U),(H=re.onVnodeBeforeMount)&&pn(H,M,E)}ue&&Mr(E,null,M,"beforeMount");const ie=pw(j,ne);ie&&ne.beforeEnter(W),r(W,T,k),((H=re&&re.onVnodeMounted)||ie||ue)&&Ht(()=>{H&&pn(H,M,E),ie&&ne.enter(W),ue&&Mr(E,null,M,"mounted")},j)},b=(E,T,k,M,j)=>{if(k&&y(E,k),M)for(let U=0;U<M.length;U++)y(E,M[U]);if(j){let U=j.subTree;if(T===U||og(U.type)&&(U.ssContent===T||U.ssFallback===T)){const J=j.vnode;b(E,J,J.scopeId,J.slotScopeIds,j.parent)}}},v=(E,T,k,M,j,U,J,K,W=0)=>{for(let H=W;H<E.length;H++){const re=E[H]=K?rr(E[H]):En(E[H]);S(null,re,T,k,M,j,U,J,K)}},I=(E,T,k,M,j,U,J)=>{const K=T.el=E.el;let{patchFlag:W,dynamicChildren:H,dirs:re}=T;W|=E.patchFlag&16;const Q=E.props||Fe,ne=T.props||Fe;let ue;if(k&&Fr(k,!1),(ue=ne.onVnodeBeforeUpdate)&&pn(ue,k,T,E),re&&Mr(T,E,k,"beforeUpdate"),k&&Fr(k,!0),(Q.innerHTML&&ne.innerHTML==null||Q.textContent&&ne.textContent==null)&&f(K,""),H?A(E.dynamicChildren,H,K,k,M,Xc(T,j),U):J||fe(E,T,K,null,k,M,Xc(T,j),U,!1),W>0){if(W&16)R(K,Q,ne,k,j);else if(W&2&&Q.class!==ne.class&&i(K,"class",null,ne.class,j),W&4&&i(K,"style",Q.style,ne.style,j),W&8){const ie=T.dynamicProps;for(let ye=0;ye<ie.length;ye++){const be=ie[ye],at=Q[be],ct=ne[be];(ct!==at||be==="value")&&i(K,be,at,ct,j,k)}}W&1&&E.children!==T.children&&f(K,T.children)}else!J&&H==null&&R(K,Q,ne,k,j);((ue=ne.onVnodeUpdated)||re)&&Ht(()=>{ue&&pn(ue,k,T,E),re&&Mr(T,E,k,"updated")},M)},A=(E,T,k,M,j,U,J)=>{for(let K=0;K<T.length;K++){const W=E[K],H=T[K],re=W.el&&(W.type===yn||!di(W,H)||W.shapeFlag&198)?p(W.el):k;S(W,H,re,null,M,j,U,J,!0)}},R=(E,T,k,M,j)=>{if(T!==k){if(T!==Fe)for(const U in T)!Ti(U)&&!(U in k)&&i(E,U,T[U],null,j,M);for(const U in k){if(Ti(U))continue;const J=k[U],K=T[U];J!==K&&U!=="value"&&i(E,U,K,J,j,M)}"value"in k&&i(E,"value",T.value,k.value,j)}},C=(E,T,k,M,j,U,J,K,W)=>{const H=T.el=E?E.el:c(""),re=T.anchor=E?E.anchor:c("");let{patchFlag:Q,dynamicChildren:ne,slotScopeIds:ue}=T;ue&&(K=K?K.concat(ue):ue),E==null?(r(H,k,M),r(re,k,M),v(T.children||[],k,re,j,U,J,K,W)):Q>0&&Q&64&&ne&&E.dynamicChildren?(A(E.dynamicChildren,ne,k,j,U,J,K),(T.key!=null||j&&T===j.subTree)&&tg(E,T,!0)):fe(E,T,k,re,j,U,J,K,W)},w=(E,T,k,M,j,U,J,K,W)=>{T.slotScopeIds=K,E==null?T.shapeFlag&512?j.ctx.activate(T,k,M,J,W):ze(T,k,M,j,U,J,W):Ct(E,T,W)},ze=(E,T,k,M,j,U,J)=>{const K=E.component=Ow(E,M,j);if($m(E)&&(K.ctx.renderer=te),Vw(K,!1,J),K.asyncDep){if(j&&j.registerDep(K,Pe,J),!E.el){const W=K.subTree=De(vr);x(null,W,T,k),E.placeholder=W.el}}else Pe(K,E,T,k,j,U,J)},Ct=(E,T,k)=>{const M=T.component=E.component;if(Iw(E,T,k))if(M.asyncDep&&!M.asyncResolved){ve(M,T,k);return}else M.next=T,M.update();else T.el=E.el,M.vnode=T},Pe=(E,T,k,M,j,U,J)=>{const K=()=>{if(E.isMounted){let{next:Q,bu:ne,u:ue,parent:ie,vnode:ye}=E;{const gt=ng(E);if(gt){Q&&(Q.el=ye.el,ve(E,Q,J)),gt.asyncDep.then(()=>{E.isUnmounted||K()});return}}let be=Q,at;Fr(E,!1),Q?(Q.el=ye.el,ve(E,Q,J)):Q=ye,ne&&Qo(ne),(at=Q.props&&Q.props.onVnodeBeforeUpdate)&&pn(at,ie,Q,ye),Fr(E,!0);const ct=Df(E),Gt=E.subTree;E.subTree=ct,S(Gt,ct,p(Gt.el),L(Gt),E,j,U),Q.el=ct.el,be===null&&bw(E,ct.el),ue&&Ht(ue,j),(at=Q.props&&Q.props.onVnodeUpdated)&&Ht(()=>pn(at,ie,Q,ye),j)}else{let Q;const{el:ne,props:ue}=T,{bm:ie,m:ye,parent:be,root:at,type:ct}=E,Gt=Ri(T);Fr(E,!1),ie&&Qo(ie),!Gt&&(Q=ue&&ue.onVnodeBeforeMount)&&pn(Q,be,T),Fr(E,!0);{at.ce&&at.ce._def.shadowRoot!==!1&&at.ce._injectChildStyle(ct);const gt=E.subTree=Df(E);S(null,gt,k,M,E,j,U),T.el=gt.el}if(ye&&Ht(ye,j),!Gt&&(Q=ue&&ue.onVnodeMounted)){const gt=T;Ht(()=>pn(Q,be,gt),j)}(T.shapeFlag&256||be&&Ri(be.vnode)&&be.vnode.shapeFlag&256)&&E.a&&Ht(E.a,j),E.isMounted=!0,T=k=M=null}};E.scope.on();const W=E.effect=new gm(K);E.scope.off();const H=E.update=W.run.bind(W),re=E.job=W.runIfDirty.bind(W);re.i=E,re.id=E.uid,W.scheduler=()=>Ru(re),Fr(E,!0),H()},ve=(E,T,k)=>{T.component=E;const M=E.vnode.props;E.vnode=T,E.next=null,aw(E,T.props,M,k),hw(E,T.children,k),$n(),Af(E),jn()},fe=(E,T,k,M,j,U,J,K,W=!1)=>{const H=E&&E.children,re=E?E.shapeFlag:0,Q=T.children,{patchFlag:ne,shapeFlag:ue}=T;if(ne>0){if(ne&128){Bt(H,Q,k,M,j,U,J,K,W);return}else if(ne&256){mt(H,Q,k,M,j,U,J,K,W);return}}ue&8?(re&16&&Dt(H,j,U),Q!==H&&f(k,Q)):re&16?ue&16?Bt(H,Q,k,M,j,U,J,K,W):Dt(H,j,U,!0):(re&8&&f(k,""),ue&16&&v(Q,k,M,j,U,J,K,W))},mt=(E,T,k,M,j,U,J,K,W)=>{E=E||ms,T=T||ms;const H=E.length,re=T.length,Q=Math.min(H,re);let ne;for(ne=0;ne<Q;ne++){const ue=T[ne]=W?rr(T[ne]):En(T[ne]);S(E[ne],ue,k,null,j,U,J,K,W)}H>re?Dt(E,j,U,!0,!1,Q):v(T,k,M,j,U,J,K,W,Q)},Bt=(E,T,k,M,j,U,J,K,W)=>{let H=0;const re=T.length;let Q=E.length-1,ne=re-1;for(;H<=Q&&H<=ne;){const ue=E[H],ie=T[H]=W?rr(T[H]):En(T[H]);if(di(ue,ie))S(ue,ie,k,null,j,U,J,K,W);else break;H++}for(;H<=Q&&H<=ne;){const ue=E[Q],ie=T[ne]=W?rr(T[ne]):En(T[ne]);if(di(ue,ie))S(ue,ie,k,null,j,U,J,K,W);else break;Q--,ne--}if(H>Q){if(H<=ne){const ue=ne+1,ie=ue<re?T[ue].el:M;for(;H<=ne;)S(null,T[H]=W?rr(T[H]):En(T[H]),k,ie,j,U,J,K,W),H++}}else if(H>ne)for(;H<=Q;)Ce(E[H],j,U,!0),H++;else{const ue=H,ie=H,ye=new Map;for(H=ie;H<=ne;H++){const lt=T[H]=W?rr(T[H]):En(T[H]);lt.key!=null&&ye.set(lt.key,H)}let be,at=0;const ct=ne-ie+1;let Gt=!1,gt=0;const Jn=new Array(ct);for(H=0;H<ct;H++)Jn[H]=0;for(H=ue;H<=Q;H++){const lt=E[H];if(at>=ct){Ce(lt,j,U,!0);continue}let Qt;if(lt.key!=null)Qt=ye.get(lt.key);else for(be=ie;be<=ne;be++)if(Jn[be-ie]===0&&di(lt,T[be])){Qt=be;break}Qt===void 0?Ce(lt,j,U,!0):(Jn[Qt-ie]=H+1,Qt>=gt?gt=Qt:Gt=!0,S(lt,T[Qt],k,null,j,U,J,K,W),at++)}const Zs=Gt?mw(Jn):ms;for(be=Zs.length-1,H=ct-1;H>=0;H--){const lt=ie+H,Qt=T[lt],To=T[lt+1],ns=lt+1<re?To.el||To.placeholder:M;Jn[H]===0?S(null,Qt,k,ns,j,U,J,K,W):Gt&&(be<0||H!==Zs[be]?Je(Qt,k,ns,2):be--)}}},Je=(E,T,k,M,j=null)=>{const{el:U,type:J,transition:K,children:W,shapeFlag:H}=E;if(H&6){Je(E.component.subTree,T,k,M);return}if(H&128){E.suspense.move(T,k,M);return}if(H&64){J.move(E,T,k,te);return}if(J===yn){r(U,T,k);for(let Q=0;Q<W.length;Q++)Je(W[Q],T,k,M);r(E.anchor,T,k);return}if(J===Zc){q(E,T,k);return}if(M!==2&&H&1&&K)if(M===0)K.beforeEnter(U),r(U,T,k),Ht(()=>K.enter(U),j);else{const{leave:Q,delayLeave:ne,afterLeave:ue}=K,ie=()=>{E.ctx.isUnmounted?s(U):r(U,T,k)},ye=()=>{Q(U,()=>{ie(),ue&&ue()})};ne?ne(U,ie,ye):ye()}else r(U,T,k)},Ce=(E,T,k,M=!1,j=!1)=>{const{type:U,props:J,ref:K,children:W,dynamicChildren:H,shapeFlag:re,patchFlag:Q,dirs:ne,cacheIndex:ue}=E;if(Q===-2&&(j=!1),K!=null&&($n(),Ai(K,null,k,E,!0),jn()),ue!=null&&(T.renderCache[ue]=void 0),re&256){T.ctx.deactivate(E);return}const ie=re&1&&ne,ye=!Ri(E);let be;if(ye&&(be=J&&J.onVnodeBeforeUnmount)&&pn(be,T,E),re&6)jt(E.component,k,M);else{if(re&128){E.suspense.unmount(k,M);return}ie&&Mr(E,null,T,"beforeUnmount"),re&64?E.type.remove(E,T,k,te,M):H&&!H.hasOnce&&(U!==yn||Q>0&&Q&64)?Dt(H,T,k,!1,!0):(U===yn&&Q&384||!j&&re&16)&&Dt(W,T,k),M&&Le(E)}(ye&&(be=J&&J.onVnodeUnmounted)||ie)&&Ht(()=>{be&&pn(be,T,E),ie&&Mr(E,null,T,"unmounted")},k)},Le=E=>{const{type:T,el:k,anchor:M,transition:j}=E;if(T===yn){$t(k,M);return}if(T===Zc){z(E);return}const U=()=>{s(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:J,delayLeave:K}=j,W=()=>J(k,U);K?K(E.el,U,W):W()}else U()},$t=(E,T)=>{let k;for(;E!==T;)k=m(E),s(E),E=k;s(T)},jt=(E,T,k)=>{const{bum:M,scope:j,job:U,subTree:J,um:K,m:W,a:H,parent:re,slots:{__:Q}}=E;Of(W),Of(H),M&&Qo(M),re&&le(Q)&&Q.forEach(ne=>{re.renderCache[ne]=void 0}),j.stop(),U&&(U.flags|=8,Ce(J,E,T,k)),K&&Ht(K,T),Ht(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Dt=(E,T,k,M=!1,j=!1,U=0)=>{for(let J=U;J<E.length;J++)Ce(E[J],T,k,M,j)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=m(E.anchor||E.el),k=T&&T[xv];return k?m(k):T};let Z=!1;const Y=(E,T,k)=>{E==null?T._vnode&&Ce(T._vnode,null,null,!0):S(T._vnode||null,E,T,null,null,null,k),T._vnode=E,Z||(Z=!0,Af(),Lm(),Z=!1)},te={p:S,um:Ce,m:Je,r:Le,mt:ze,mc:v,pc:fe,pbc:A,n:L,o:t};return{render:Y,hydrate:void 0,createApp:iw(Y)}}function Xc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function pw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function tg(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=rr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&tg(o,c)),c.type===Za&&(c.el=o.el),c.type===vr&&!c.el&&(c.el=o.el)}}function mw(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ng(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ng(e)}function Of(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const gw=Symbol.for("v-scx"),_w=()=>ln(gw);function Yo(t,e,n){return rg(t,e,n)}function rg(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,c=St({},n),l=e&&r||!e&&i!=="post";let u;if($i){if(i==="sync"){const y=_w();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=vn,y.resume=vn,y.pause=vn,y}}const f=It;c.call=(y,_,S)=>Pn(y,f,_,S);let p=!1;i==="post"?c.scheduler=y=>{Ht(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,_)=>{_?y():Ru(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=Nv(t,e,c);return $i&&(u?u.push(m):l&&m()),m}function yw(t,e,n){const r=this.proxy,s=nt(t)?t.includes(".")?sg(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=so(this),c=rg(s,i.bind(r),n);return o(),c}function sg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ew=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${rn(e)}Modifiers`]||t[`${Xr(e)}Modifiers`];function vw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&Ew(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>nt(f)?f.trim():f)),o.number&&(s=n.map(da)));let c,l=r[c=Wc(e)]||r[c=Wc(rn(e))];!l&&i&&(l=r[c=Wc(Xr(e))]),l&&Pn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Pn(u,t,6,s)}}function ig(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ge(t)){const l=u=>{const f=ig(u,e,!0);f&&(c=!0,St(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(je(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):St(o,i),je(t)&&r.set(t,o),o)}function Xa(t,e){return!t||!qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Xr(e))||Oe(t,e))}function Df(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:_,inheritAttrs:S}=t,P=_a(t);let x,$;try{if(n.shapeFlag&4){const z=s||r,oe=z;x=En(u.call(oe,z,f,p,y,m,_)),$=c}else{const z=e;x=En(z.length>1?z(p,{attrs:c,slots:o,emit:l}):z(p,null)),$=e.props?c:ww(c)}}catch(z){Pi.length=0,Ja(z,t,1),x=De(vr)}let q=x;if($&&S!==!1){const z=Object.keys($),{shapeFlag:oe}=q;z.length&&oe&7&&(i&&z.some(pu)&&($=Tw($,i)),q=Cs(q,$,!1,!0))}return n.dirs&&(q=Cs(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Su(q,n.transition),x=q,_a(P),x}const ww=t=>{let e;for(const n in t)(n==="class"||n==="style"||qa(n))&&((e||(e={}))[n]=t[n]);return e},Tw=(t,e)=>{const n={};for(const r in t)(!pu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Vf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Xa(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Vf(r,o,u):!0:!!o;return!1}function Vf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Xa(n,i))return!0}return!1}function bw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const og=t=>t.__isSuspense;function Aw(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Vv(t)}const yn=Symbol.for("v-fgt"),Za=Symbol.for("v-txt"),vr=Symbol.for("v-cmt"),Zc=Symbol.for("v-stc"),Pi=[];let Wt=null;function he(t=!1){Pi.push(Wt=t?null:[])}function Rw(){Pi.pop(),Wt=Pi[Pi.length-1]||null}let Bi=1;function xf(t,e=!1){Bi+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function ag(t){return t.dynamicChildren=Bi>0?Wt||ms:null,Rw(),Bi>0&&Wt&&Wt.push(t),t}function pe(t,e,n,r,s,i){return ag(O(t,e,n,r,s,i,!0))}function cg(t,e,n,r,s){return ag(De(t,e,n,r,s,!0))}function Ea(t){return t?t.__v_isVNode===!0:!1}function di(t,e){return t.type===e.type&&t.key===e.key}const lg=({key:t})=>t??null,Xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Rt(t)||ge(t)?{i:zt,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,r=0,s=null,i=t===yn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lg(e),ref:e&&Xo(e),scopeId:Fm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:zt};return c?(ku(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Bi>0&&!o&&Wt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Wt.push(l),l}const De=Sw;function Sw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Qv)&&(t=vr),Ea(t)){const c=Cs(t,e,!0);return n&&ku(c,n),Bi>0&&!i&&Wt&&(c.shapeFlag&6?Wt[Wt.indexOf(t)]=c:Wt.push(c)),c.patchFlag=-2,c}if(Uw(t)&&(t=t.__vccOpts),e){e=Pw(e);let{class:c,style:l}=e;c&&!nt(c)&&(e.class=Yt(c)),je(l)&&(bu(l)&&!le(l)&&(l=St({},l)),e.style=_u(l))}const o=nt(t)?1:og(t)?128:Lv(t)?64:je(t)?4:ge(t)?2:0;return O(t,e,n,r,s,o,i,!0)}function Pw(t){return t?bu(t)||Qm(t)?St({},t):t:null}function Cs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?Cw(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&lg(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Xo(e)):[i,Xo(e)]:Xo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cs(t.ssContent),ssFallback:t.ssFallback&&Cs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Su(f,l.clone(f)),f}function Jt(t=" ",e=0){return De(Za,null,t,e)}function We(t="",e=!1){return e?(he(),cg(vr,null,t)):De(vr,null,t)}function En(t){return t==null||typeof t=="boolean"?De(vr):le(t)?De(yn,null,t.slice()):Ea(t)?rr(t):De(Za,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cs(t)}function ku(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ku(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qm(e)?e._ctx=zt:s===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),r&64?(n=16,e=[Jt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yt([e.class,r.class]));else if(s==="style")e.style=_u([e.style,r.style]);else if(qa(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function pn(t,e,n,r=null){Pn(t,e,7,[n,r])}const kw=Wm();let Nw=0;function Ow(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||kw,i={uid:Nw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ym(r,s),emitsOptions:ig(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vw.bind(null,i),t.ce&&t.ce(i),i}let It=null;const Dw=()=>It||zt;let va,Cl;{const t=Ka(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};va=e("__VUE_INSTANCE_SETTERS__",n=>It=n),Cl=e("__VUE_SSR_SETTERS__",n=>$i=n)}const so=t=>{const e=It;return va(t),t.scope.on(),()=>{t.scope.off(),va(e)}},Lf=()=>{It&&It.scope.off(),va(null)};function ug(t){return t.vnode.shapeFlag&4}let $i=!1;function Vw(t,e=!1,n=!1){e&&Cl(e);const{props:r,children:s}=t.vnode,i=ug(t);ow(t,r,i,e),uw(t,s,n||e);const o=i?xw(t,e):void 0;return e&&Cl(!1),o}function xw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Xv);const{setup:r}=n;if(r){$n();const s=t.setupContext=r.length>1?Mw(t):null,i=so(t),o=ro(r,t,0,[t.props,s]),c=um(o);if(jn(),i(),(c||t.sp)&&!Ri(t)&&Bm(t),c){if(o.then(Lf,Lf),e)return o.then(l=>{Mf(t,l)}).catch(l=>{Ja(l,t,0)});t.asyncDep=o}else Mf(t,o)}else hg(t)}function Mf(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=Dm(e)),hg(t)}function hg(t,e,n){const r=t.type;t.render||(t.render=r.render||vn);{const s=so(t);$n();try{Zv(t)}finally{jn(),s()}}}const Lw={get(t,e){return wt(t,"get",""),t[e]}};function Mw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Lw),slots:t.slots,emit:t.emit,expose:e}}function ec(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dm(bv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Si)return Si[n](t)},has(e,n){return n in e||n in Si}})):t.proxy}function Fw(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function Uw(t){return ge(t)&&"__vccOpts"in t}const Xt=(t,e)=>Cv(t,e,$i);function fg(t,e,n){const r=arguments.length;return r===2?je(e)&&!le(e)?Ea(e)?De(t,null,[e]):De(t,e):De(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ea(n)&&(n=[n]),De(t,e,n))}const Bw="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kl;const Ff=typeof window<"u"&&window.trustedTypes;if(Ff)try{kl=Ff.createPolicy("vue",{createHTML:t=>t})}catch{}const dg=kl?t=>kl.createHTML(t):t=>t,$w="http://www.w3.org/2000/svg",jw="http://www.w3.org/1998/Math/MathML",Vn=typeof document<"u"?document:null,Uf=Vn&&Vn.createElement("template"),qw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Vn.createElementNS($w,t):e==="mathml"?Vn.createElementNS(jw,t):n?Vn.createElement(t,{is:n}):Vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Vn.createTextNode(t),createComment:t=>Vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Uf.innerHTML=dg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Uf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hw=Symbol("_vtc");function zw(t,e,n){const r=t[Hw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bf=Symbol("_vod"),Ww=Symbol("_vsh"),Kw=Symbol(""),Gw=/(^|;)\s*display\s*:/;function Qw(t,e,n){const r=t.style,s=nt(n);let i=!1;if(n&&!s){if(e)if(nt(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Zo(r,c,"")}else for(const o in e)n[o]==null&&Zo(r,o,"");for(const o in n)o==="display"&&(i=!0),Zo(r,o,n[o])}else if(s){if(e!==n){const o=r[Kw];o&&(n+=";"+o),r.cssText=n,i=Gw.test(n)}}else e&&t.removeAttribute("style");Bf in t&&(t[Bf]=i?r.display:"",t[Ww]&&(r.display="none"))}const $f=/\s*!important$/;function Zo(t,e,n){if(le(n))n.forEach(r=>Zo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Jw(t,e);$f.test(n)?t.setProperty(Xr(r),n.replace($f,""),"important"):t[r]=n}}const jf=["Webkit","Moz","ms"],el={};function Jw(t,e){const n=el[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return el[e]=r;r=Wa(r);for(let s=0;s<jf.length;s++){const i=jf[s]+r;if(i in t)return el[e]=i}return e}const qf="http://www.w3.org/1999/xlink";function Hf(t,e,n,r,s,i=tv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qf,e.slice(6,e.length)):t.setAttributeNS(qf,e,n):n==null||i&&!dm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Sn(n)?String(n):n)}function zf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=dm(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ir(t,e,n,r){t.addEventListener(e,n,r)}function Yw(t,e,n,r){t.removeEventListener(e,n,r)}const Wf=Symbol("_vei");function Xw(t,e,n,r,s=null){const i=t[Wf]||(t[Wf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Zw(e);if(r){const u=i[e]=nT(r,s);ir(t,c,u,l)}else o&&(Yw(t,c,o,l),i[e]=void 0)}}const Kf=/(?:Once|Passive|Capture)$/;function Zw(t){let e;if(Kf.test(t)){e={};let r;for(;r=t.match(Kf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let tl=0;const eT=Promise.resolve(),tT=()=>tl||(eT.then(()=>tl=0),tl=Date.now());function nT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pn(rT(r,n.value),e,5,[r])};return n.value=t,n.attached=tT(),n}function rT(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,sT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?zw(t,r,o):e==="style"?Qw(t,n,r):qa(e)?pu(e)||Xw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iT(t,e,r,o))?(zf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!nt(r))?zf(t,rn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hf(t,e,r,o))};function iT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gf(e)&&nt(n)?!1:e in t}const ks=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Qo(e,n):e};function oT(t){t.target.composing=!0}function Qf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Un=Symbol("_assign"),bt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Un]=ks(s);const i=r||s.props&&s.props.type==="number";ir(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=da(c)),t[Un](c)}),n&&ir(t,"change",()=>{t.value=t.value.trim()}),e||(ir(t,"compositionstart",oT),ir(t,"compositionend",Qf),ir(t,"change",Qf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Un]=ks(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?da(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Jf={created(t,{value:e},n){t.checked=Ss(e,n.props.value),t[Un]=ks(n),ir(t,"change",()=>{t[Un](ji(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Un]=ks(r),e!==n&&(t.checked=Ss(e,r.props.value))}},aT={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ha(e);ir(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?da(ji(o)):ji(o));t[Un](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Au(()=>{t._assigning=!1})}),t[Un]=ks(r)},mounted(t,{value:e}){Yf(t,e)},beforeUpdate(t,e,n){t[Un]=ks(n)},updated(t,{value:e}){t._assigning||Yf(t,e)}};function Yf(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Ha(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ji(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=rv(e,c)>-1}else o.selected=e.has(c);else if(Ss(ji(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ji(t){return"_value"in t?t._value:t.value}const cT=["ctrl","shift","alt","meta"],lT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cT.some(n=>t[`${n}Key`]&&!e.includes(n))},Nu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=lT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},uT=St({patchProp:sT},qw);let Xf;function hT(){return Xf||(Xf=fw(uT))}const fT=(...t)=>{const e=hT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=pT(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,dT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function dT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function pT(t){return nt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ls=typeof document<"u";function pg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&pg(t.default)}const ke=Object.assign;function nl(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const Ci=()=>{},un=Array.isArray,mg=/#/g,gT=/&/g,_T=/\//g,yT=/=/g,ET=/\?/g,gg=/\+/g,vT=/%5B/g,wT=/%5D/g,_g=/%5E/g,TT=/%60/g,yg=/%7B/g,IT=/%7C/g,Eg=/%7D/g,bT=/%20/g;function Ou(t){return encodeURI(""+t).replace(IT,"|").replace(vT,"[").replace(wT,"]")}function AT(t){return Ou(t).replace(yg,"{").replace(Eg,"}").replace(_g,"^")}function Nl(t){return Ou(t).replace(gg,"%2B").replace(bT,"+").replace(mg,"%23").replace(gT,"%26").replace(TT,"`").replace(yg,"{").replace(Eg,"}").replace(_g,"^")}function RT(t){return Nl(t).replace(yT,"%3D")}function ST(t){return Ou(t).replace(mg,"%23").replace(ET,"%3F")}function PT(t){return t==null?"":ST(t).replace(_T,"%2F")}function qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const CT=/\/$/,kT=t=>t.replace(CT,"");function rl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=VT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:qi(o)}}function NT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function OT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ns(e.matched[r],n.matched[s])&&vg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!DT(t[n],e[n]))return!1;return!0}function DT(t,e){return un(t)?ed(t,e):un(e)?ed(e,t):t===e}function ed(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function VT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Hi;(function(t){t.pop="pop",t.push="push"})(Hi||(Hi={}));var ki;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ki||(ki={}));function xT(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kT(t)}const LT=/^[^#]+#/;function MT(t,e){return t.replace(LT,"#")+e}function FT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tc=()=>({left:window.scrollX,top:window.scrollY});function UT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=FT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function td(t,e){return(history.state?history.state.position-e:-1)+t}const Ol=new Map;function BT(t,e){Ol.set(t,e)}function $T(t){const e=Ol.get(t);return Ol.delete(t),e}let jT=()=>location.protocol+"//"+location.host;function wg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Zf(l,"")}return Zf(n,t)+r+s}function qT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const y=wg(t,location),_=n.value,S=e.value;let P=0;if(m){if(n.value=y,e.value=m,o&&o===_){o=null;return}P=S?m.position-S.position:0}else r(y);s.forEach(x=>{x(n.value,_,{delta:P,type:Hi.pop,direction:P?P>0?ki.forward:ki.back:ki.unknown})})};function l(){o=n.value}function u(m){s.push(m);const y=()=>{const _=s.indexOf(m);_>-1&&s.splice(_,1)};return i.push(y),y}function f(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:tc()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function nd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?tc():null}}function HT(t){const{history:e,location:n}=window,r={value:wg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:jT()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(l,u){const f=ke({},e.state,nd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=ke({},s.value,e.state,{forward:l,scroll:tc()});i(f.current,f,!0);const p=ke({},nd(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function zT(t){t=xT(t);const e=HT(t),n=qT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:MT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function WT(t){return typeof t=="string"||t&&typeof t=="object"}function Tg(t){return typeof t=="string"||typeof t=="symbol"}const Ig=Symbol("");var rd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rd||(rd={}));function Os(t,e){return ke(new Error,{type:t,[Ig]:!0},e)}function Dn(t,e){return t instanceof Error&&Ig in t&&(e==null||!!(t.type&e))}const sd="[^/]+?",KT={sensitive:!1,strict:!1,start:!0,end:!0},GT=/[.+*?^${}()[\]/\\]/g;function QT(t,e){const n=ke({},KT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(GT,"\\$&"),y+=40;else if(m.type===1){const{value:_,repeatable:S,optional:P,regexp:x}=m;i.push({name:_,repeatable:S,optional:P});const $=x||sd;if($!==sd){y+=10;try{new RegExp(`(${$})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${_}" (${$}): `+z.message)}}let q=S?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(q=P&&u.length<2?`(?:/${q})`:"/"+q),P&&(q+="?"),s+=q,y+=20,P&&(y+=-8),S&&(y+=-20),$===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",_=i[m-1];p[_.name]=y&&_.repeatable?y.split("/"):y}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===0)f+=y.value;else if(y.type===1){const{value:_,repeatable:S,optional:P}=y,x=_ in u?u[_]:"";if(un(x)&&!S)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const $=un(x)?x.join("/"):x;if(!$)if(P)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${_}"`);f+=$}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function JT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function bg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=JT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(id(r))return 1;if(id(s))return-1}return s.length-r.length}function id(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const YT={type:0,value:""},XT=/[a-zA-Z0-9_]/;function ZT(t){if(!t)return[[]];if(t==="/")return[[YT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:XT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function eI(t,e,n){const r=QT(ZT(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function tI(t,e){const n=[],r=new Map;e=ld({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const _=!y,S=ad(p);S.aliasOf=y&&y.record;const P=ld(e,p),x=[S];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of z)x.push(ad(ke({},S,{components:y?y.record.components:S.components,path:oe,aliasOf:y?y.record:S})))}let $,q;for(const z of x){const{path:oe}=z;if(m&&oe[0]!=="/"){const _e=m.record.path,b=_e[_e.length-1]==="/"?"":"/";z.path=m.record.path+(oe&&b+oe)}if($=eI(z,m,P),y?y.alias.push($):(q=q||$,q!==$&&q.alias.push($),_&&p.name&&!cd($)&&o(p.name)),Ag($)&&l($),S.children){const _e=S.children;for(let b=0;b<_e.length;b++)i(_e[b],$,y&&y.children[b])}y=y||$}return q?()=>{o(q)}:Ci}function o(p){if(Tg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=sI(p,n);n.splice(m,0,p),p.record.name&&!cd(p)&&r.set(p.record.name,p)}function u(p,m){let y,_={},S,P;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Os(1,{location:p});P=y.record.name,_=ke(od(m.params,y.keys.filter(q=>!q.optional).concat(y.parent?y.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&od(p.params,y.keys.map(q=>q.name))),S=y.stringify(_)}else if(p.path!=null)S=p.path,y=n.find(q=>q.re.test(S)),y&&(_=y.parse(S),P=y.record.name);else{if(y=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!y)throw Os(1,{location:p,currentLocation:m});P=y.record.name,_=ke({},m.params,p.params),S=y.stringify(_)}const x=[];let $=y;for(;$;)x.unshift($.record),$=$.parent;return{name:P,path:S,params:_,matched:x,meta:rI(x)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function od(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ad(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:nI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function nI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function cd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rI(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function ld(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function sI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;bg(t,e[i])<0?r=i:n=i+1}const s=iI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function iI(t){let e=t;for(;e=e.parent;)if(Ag(e)&&bg(t,e)===0)return e}function Ag({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function oI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(gg," "),o=i.indexOf("="),c=qi(o<0?i:i.slice(0,o)),l=o<0?null:qi(i.slice(o+1));if(c in e){let u=e[c];un(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function ud(t){let e="";for(let n in t){const r=t[n];if(n=RT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(i=>i&&Nl(i)):[r&&Nl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function aI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const cI=Symbol(""),hd=Symbol(""),nc=Symbol(""),Du=Symbol(""),Dl=Symbol("");function pi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Os(4,{from:n,to:e})):m instanceof Error?l(m):WT(m)?l(Os(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function sl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(pg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(sr(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=mT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const y=(p.__vccOpts||p)[e];return y&&sr(y,n,r,o,c,s)()}))}}return i}function fd(t){const e=ln(nc),n=ln(Du),r=Xt(()=>{const l=ys(t.to);return e.resolve(l)}),s=Xt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Ns.bind(null,f));if(m>-1)return m;const y=dd(l[u-2]);return u>1&&dd(f)===y&&p[p.length-1].path!==y?p.findIndex(Ns.bind(null,l[u-2])):m}),i=Xt(()=>s.value>-1&&dI(n.params,r.value.params)),o=Xt(()=>s.value>-1&&s.value===n.matched.length-1&&vg(n.params,r.value.params));function c(l={}){if(fI(l)){const u=e[ys(t.replace)?"replace":"push"](ys(t.to)).catch(Ci);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Xt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function lI(t){return t.length===1?t[0]:t}const uI=Um({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:fd,setup(t,{slots:e}){const n=Qa(fd(t)),{options:r}=ln(nc),s=Xt(()=>({[pd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&lI(e.default(n));return t.custom?i:fg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),hI=uI;function fI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pd=(t,e,n)=>t??e??n,pI=Um({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ln(Dl),s=Xt(()=>t.route||r.value),i=ln(hd,0),o=Xt(()=>{let u=ys(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Xt(()=>s.value.matched[o.value]);Jo(hd,Xt(()=>o.value+1)),Jo(cI,c),Jo(Dl,s);const l=xe();return Yo(()=>[l.value,c.value,t.name],([u,f,p],[m,y,_])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!Ns(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return md(n.default,{Component:m,route:u});const y=p.props[f],_=y?y===!0?u.params:typeof y=="function"?y(u):y:null,P=fg(m,ke({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return md(n.default,{Component:P,route:u})||P}}});function md(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const mI=pI;function gI(t){const e=tI(t.routes,t),n=t.parseQuery||oI,r=t.stringifyQuery||ud,s=t.history,i=pi(),o=pi(),c=pi(),l=Av(er);let u=er;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=nl.bind(null,L=>""+L),p=nl.bind(null,PT),m=nl.bind(null,qi);function y(L,Z){let Y,te;return Tg(L)?(Y=e.getRecordMatcher(L),te=Z):te=L,e.addRoute(te,Y)}function _(L){const Z=e.getRecordMatcher(L);Z&&e.removeRoute(Z)}function S(){return e.getRoutes().map(L=>L.record)}function P(L){return!!e.getRecordMatcher(L)}function x(L,Z){if(Z=ke({},Z||l.value),typeof L=="string"){const k=rl(n,L,Z.path),M=e.resolve({path:k.path},Z),j=s.createHref(k.fullPath);return ke(k,M,{params:m(M.params),hash:qi(k.hash),redirectedFrom:void 0,href:j})}let Y;if(L.path!=null)Y=ke({},L,{path:rl(n,L.path,Z.path).path});else{const k=ke({},L.params);for(const M in k)k[M]==null&&delete k[M];Y=ke({},L,{params:p(k)}),Z.params=p(Z.params)}const te=e.resolve(Y,Z),Re=L.hash||"";te.params=f(m(te.params));const E=NT(r,ke({},L,{hash:AT(Re),path:te.path})),T=s.createHref(E);return ke({fullPath:E,hash:Re,query:r===ud?aI(L.query):L.query||{}},te,{redirectedFrom:void 0,href:T})}function $(L){return typeof L=="string"?rl(n,L,l.value.path):ke({},L)}function q(L,Z){if(u!==L)return Os(8,{from:Z,to:L})}function z(L){return b(L)}function oe(L){return z(ke($(L),{replace:!0}))}function _e(L){const Z=L.matched[L.matched.length-1];if(Z&&Z.redirect){const{redirect:Y}=Z;let te=typeof Y=="function"?Y(L):Y;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=$(te):{path:te},te.params={}),ke({query:L.query,hash:L.hash,params:te.path!=null?{}:L.params},te)}}function b(L,Z){const Y=u=x(L),te=l.value,Re=L.state,E=L.force,T=L.replace===!0,k=_e(Y);if(k)return b(ke($(k),{state:typeof k=="object"?ke({},Re,k.state):Re,force:E,replace:T}),Z||Y);const M=Y;M.redirectedFrom=Z;let j;return!E&&OT(r,te,Y)&&(j=Os(16,{to:M,from:te}),Je(te,te,!0,!1)),(j?Promise.resolve(j):A(M,te)).catch(U=>Dn(U)?Dn(U,2)?U:Bt(U):fe(U,M,te)).then(U=>{if(U){if(Dn(U,2))return b(ke({replace:T},$(U.to),{state:typeof U.to=="object"?ke({},Re,U.to.state):Re,force:E}),Z||M)}else U=C(M,te,!0,T,Re);return R(M,te,U),U})}function v(L,Z){const Y=q(L,Z);return Y?Promise.reject(Y):Promise.resolve()}function I(L){const Z=$t.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(L):L()}function A(L,Z){let Y;const[te,Re,E]=_I(L,Z);Y=sl(te.reverse(),"beforeRouteLeave",L,Z);for(const k of te)k.leaveGuards.forEach(M=>{Y.push(sr(M,L,Z))});const T=v.bind(null,L,Z);return Y.push(T),Dt(Y).then(()=>{Y=[];for(const k of i.list())Y.push(sr(k,L,Z));return Y.push(T),Dt(Y)}).then(()=>{Y=sl(Re,"beforeRouteUpdate",L,Z);for(const k of Re)k.updateGuards.forEach(M=>{Y.push(sr(M,L,Z))});return Y.push(T),Dt(Y)}).then(()=>{Y=[];for(const k of E)if(k.beforeEnter)if(un(k.beforeEnter))for(const M of k.beforeEnter)Y.push(sr(M,L,Z));else Y.push(sr(k.beforeEnter,L,Z));return Y.push(T),Dt(Y)}).then(()=>(L.matched.forEach(k=>k.enterCallbacks={}),Y=sl(E,"beforeRouteEnter",L,Z,I),Y.push(T),Dt(Y))).then(()=>{Y=[];for(const k of o.list())Y.push(sr(k,L,Z));return Y.push(T),Dt(Y)}).catch(k=>Dn(k,8)?k:Promise.reject(k))}function R(L,Z,Y){c.list().forEach(te=>I(()=>te(L,Z,Y)))}function C(L,Z,Y,te,Re){const E=q(L,Z);if(E)return E;const T=Z===er,k=ls?history.state:{};Y&&(te||T?s.replace(L.fullPath,ke({scroll:T&&k&&k.scroll},Re)):s.push(L.fullPath,Re)),l.value=L,Je(L,Z,Y,T),Bt()}let w;function ze(){w||(w=s.listen((L,Z,Y)=>{if(!jt.listening)return;const te=x(L),Re=_e(te);if(Re){b(ke(Re,{replace:!0,force:!0}),te).catch(Ci);return}u=te;const E=l.value;ls&&BT(td(E.fullPath,Y.delta),tc()),A(te,E).catch(T=>Dn(T,12)?T:Dn(T,2)?(b(ke($(T.to),{force:!0}),te).then(k=>{Dn(k,20)&&!Y.delta&&Y.type===Hi.pop&&s.go(-1,!1)}).catch(Ci),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),fe(T,te,E))).then(T=>{T=T||C(te,E,!1),T&&(Y.delta&&!Dn(T,8)?s.go(-Y.delta,!1):Y.type===Hi.pop&&Dn(T,20)&&s.go(-1,!1)),R(te,E,T)}).catch(Ci)}))}let Ct=pi(),Pe=pi(),ve;function fe(L,Z,Y){Bt(L);const te=Pe.list();return te.length?te.forEach(Re=>Re(L,Z,Y)):console.error(L),Promise.reject(L)}function mt(){return ve&&l.value!==er?Promise.resolve():new Promise((L,Z)=>{Ct.add([L,Z])})}function Bt(L){return ve||(ve=!L,ze(),Ct.list().forEach(([Z,Y])=>L?Y(L):Z()),Ct.reset()),L}function Je(L,Z,Y,te){const{scrollBehavior:Re}=t;if(!ls||!Re)return Promise.resolve();const E=!Y&&$T(td(L.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return Au().then(()=>Re(L,Z,E)).then(T=>T&&UT(T)).catch(T=>fe(T,L,Z))}const Ce=L=>s.go(L);let Le;const $t=new Set,jt={currentRoute:l,listening:!0,addRoute:y,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:S,resolve:x,options:t,push:z,replace:oe,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Pe.add,isReady:mt,install(L){const Z=this;L.component("RouterLink",hI),L.component("RouterView",mI),L.config.globalProperties.$router=Z,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(l)}),ls&&!Le&&l.value===er&&(Le=!0,z(s.location).catch(Re=>{}));const Y={};for(const Re in er)Object.defineProperty(Y,Re,{get:()=>l.value[Re],enumerable:!0});L.provide(nc,Z),L.provide(Du,km(Y)),L.provide(Dl,l);const te=L.unmount;$t.add(L),L.unmount=function(){$t.delete(L),$t.size<1&&(u=er,w&&w(),w=null,l.value=er,Le=!1,ve=!1),te()}}};function Dt(L){return L.reduce((Z,Y)=>Z.then(()=>I(Y)),Promise.resolve())}return jt}function _I(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ns(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ns(u,l))||s.push(l))}return[n,r,s]}function rc(){return ln(nc)}function yI(t){return ln(Du)}const EI=()=>{};var gd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new wI;const m=i<<2|c>>4;if(r.push(m),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const _=u<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TI=function(t){const e=Rg(t);return Sg.encodeByteArray(e,!0)},wa=function(t){return TI(t).replace(/\./g,"")},Pg=function(t){try{return Sg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=()=>II().__FIREBASE_DEFAULTS__,AI=()=>{if(typeof process>"u"||typeof gd>"u")return;const t=gd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pg(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return EI()||bI()||AI()||RI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cg=t=>sc()?.emulatorHosts?.[t],SI=t=>{const e=Cg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kg=()=>sc()?.config,Ng=t=>sc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Og(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[wa(JSON.stringify(n)),wa(JSON.stringify(o)),""].join(".")}const Ni={};function kI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ni))Ni[e]?t.emulator.push(e):t.prod.push(e);return t}function NI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _d=!1;function Dg(t,e){if(typeof window>"u"||typeof document>"u"||!js(window.location.host)||Ni[t]===e||Ni[t]||_d)return;Ni[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=kI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{_d=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=NI(r),y=n("text"),_=document.getElementById(y)||document.createElement("span"),S=n("learnmore"),P=document.getElementById(S)||document.createElement("a"),x=n("preprendIcon"),$=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const q=m.element;c(q),f(P,S);const z=u();l($,x),q.append($,_,P,z),document.body.appendChild(q)}i?(_.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function DI(){const t=sc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function LI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MI(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FI(){return!DI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UI(){try{return typeof indexedDB=="object"}catch{return!1}}function BI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$I,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Qn(s,c,r)}}function jI(t,e){return t.replace(qI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qI=/\{\$([^}]+)}/g;function HI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(yd(i)&&yd(o)){if(!zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function yi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zI(t,e){const n=new WI(t,e);return n.subscribe.bind(n)}class WI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=il),s.error===void 0&&(s.error=il),s.complete===void 0&&(s.complete=il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function il(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JI(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QI(t){return t===Br?void 0:t}function JI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const XI={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},ZI=we.INFO,eb={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},tb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=ZI,this._logHandler=tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const nb=(t,e)=>e.some(n=>t instanceof n);let Ed,vd;function rb(){return Ed||(Ed=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sb(){return vd||(vd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vg=new WeakMap,Vl=new WeakMap,xg=new WeakMap,ol=new WeakMap,xu=new WeakMap;function ib(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vg.set(n,t)}).catch(()=>{}),xu.set(e,t),e}function ob(t){if(Vl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vl.set(t,e)}let xl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ab(t){xl=t(xl)}function cb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(al(this),e,...n);return xg.set(r,e.sort?e.sort():[e]),dr(r)}:sb().includes(t)?function(...e){return t.apply(al(this),e),dr(Vg.get(this))}:function(...e){return dr(t.apply(al(this),e))}}function lb(t){return typeof t=="function"?cb(t):(t instanceof IDBTransaction&&ob(t),nb(t,rb())?new Proxy(t,xl):t)}function dr(t){if(t instanceof IDBRequest)return ib(t);if(ol.has(t))return ol.get(t);const e=lb(t);return e!==t&&(ol.set(t,e),xu.set(e,t)),e}const al=t=>xu.get(t);function ub(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const hb=["get","getKey","getAll","getAllKeys","count"],fb=["put","add","delete","clear"],cl=new Map;function wd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cl.get(e))return cl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hb.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return cl.set(e,i),i}ab(t=>({...t,get:(e,n,r)=>wd(e,n)||t.get(e,n,r),has:(e,n)=>!!wd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pb(t){return t.getComponent()?.type==="VERSION"}const Ll="@firebase/app",Td="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Vu("@firebase/app"),mb="@firebase/app-compat",gb="@firebase/analytics-compat",_b="@firebase/analytics",yb="@firebase/app-check-compat",Eb="@firebase/app-check",vb="@firebase/auth",wb="@firebase/auth-compat",Tb="@firebase/database",Ib="@firebase/data-connect",bb="@firebase/database-compat",Ab="@firebase/functions",Rb="@firebase/functions-compat",Sb="@firebase/installations",Pb="@firebase/installations-compat",Cb="@firebase/messaging",kb="@firebase/messaging-compat",Nb="@firebase/performance",Ob="@firebase/performance-compat",Db="@firebase/remote-config",Vb="@firebase/remote-config-compat",xb="@firebase/storage",Lb="@firebase/storage-compat",Mb="@firebase/firestore",Fb="@firebase/ai",Ub="@firebase/firestore-compat",Bb="firebase",$b="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="[DEFAULT]",jb={[Ll]:"fire-core",[mb]:"fire-core-compat",[_b]:"fire-analytics",[gb]:"fire-analytics-compat",[Eb]:"fire-app-check",[yb]:"fire-app-check-compat",[vb]:"fire-auth",[wb]:"fire-auth-compat",[Tb]:"fire-rtdb",[Ib]:"fire-data-connect",[bb]:"fire-rtdb-compat",[Ab]:"fire-fn",[Rb]:"fire-fn-compat",[Sb]:"fire-iid",[Pb]:"fire-iid-compat",[Cb]:"fire-fcm",[kb]:"fire-fcm-compat",[Nb]:"fire-perf",[Ob]:"fire-perf-compat",[Db]:"fire-rc",[Vb]:"fire-rc-compat",[xb]:"fire-gcs",[Lb]:"fire-gcs-compat",[Mb]:"fire-fst",[Ub]:"fire-fst-compat",[Fb]:"fire-vertex","fire-js":"fire-js",[Bb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Map,qb=new Map,Fl=new Map;function Id(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(Fl.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Fl.set(e,t);for(const n of Ta.values())Id(n,t);for(const n of qb.values())Id(n,t);return!0}function Lu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new io("app","Firebase",Hb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=$b;function Mu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ml,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=kg()),!n)throw pr.create("no-options");const i=Ta.get(s);if(i){if(zr(n,i.options)&&zr(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new YI(s);for(const l of Fl.values())o.addComponent(l);const c=new zb(n,r,o);return Ta.set(s,c),c}function Lg(t=Ml){const e=Ta.get(t);if(!e&&t===Ml&&kg())return Mu();if(!e)throw pr.create("no-app",{appName:t});return e}function mr(t,e,n){let r=jb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(o.join(" "));return}Ds(new Wr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="firebase-heartbeat-database",Kb=1,zi="firebase-heartbeat-store";let ll=null;function Mg(){return ll||(ll=ub(Wb,Kb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),ll}async function Gb(t){try{const n=(await Mg()).transaction(zi),r=await n.objectStore(zi).get(Fg(t));return await n.done,r}catch(e){if(e instanceof Qn)qn.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e?.message});qn.warn(n.message)}}}async function bd(t,e){try{const r=(await Mg()).transaction(zi,"readwrite");await r.objectStore(zi).put(e,Fg(t)),await r.done}catch(n){if(n instanceof Qn)qn.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n?.message});qn.warn(r.message)}}}function Fg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=1024,Jb=30;class Yb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ad();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Jb){const s=eA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){qn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ad(),{heartbeatsToSend:n,unsentEntries:r}=Xb(this._heartbeatsCache.heartbeats),s=wa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return qn.warn(e),""}}}function Ad(){return new Date().toISOString().substring(0,10)}function Xb(t,e=Qb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Rd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Rd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UI()?BI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rd(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}function eA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t){Ds(new Wr("platform-logger",e=>new db(e),"PRIVATE")),Ds(new Wr("heartbeat",e=>new Yb(e),"PRIVATE")),mr(Ll,Td,t),mr(Ll,Td,"esm2020"),mr("fire-js","")}tA("");function Ug(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nA=Ug,Bg=new io("auth","Firebase",Ug());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Vu("@firebase/auth");function rA(t,...e){Ia.logLevel<=we.WARN&&Ia.warn(`Auth (${qs}): ${t}`,...e)}function ea(t,...e){Ia.logLevel<=we.ERROR&&Ia.error(`Auth (${qs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw Fu(t,...e)}function wn(t,...e){return Fu(t,...e)}function $g(t,e,n){const r={...nA(),[e]:n};return new io("auth","Firebase",r).create(e,{appName:t.name})}function Bn(t){return $g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bg.create(t,...e)}function ae(t,e,...n){if(!t)throw Fu(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function Hn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return typeof self<"u"&&self.location?.href||""}function sA(){return Sd()==="http:"||Sd()==="https:"}function Sd(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||xI()||"connection"in navigator)?navigator.onLine:!0}function oA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=OI()||LI()}get(){return iA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lA=new ao(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Pr(t,e,n,r,s={}){return qg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=oo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return VI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&js(t.emulatorConfig.host)&&(u.credentials="include"),jg.fetch()(await Hg(t,t.config.apiHost,n,c),u)})}async function qg(t,e,n){t._canInitEmulator=!1;const r={...aA,...e};try{const s=new hA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $o(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $o(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $g(t,f,u);hn(t,f)}}catch(s){if(s instanceof Qn)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function co(t,e,n,r,s={}){const i=await Pr(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Hg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Uu(t.config,s):`${t.config.apiScheme}://${s}`;return cA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function uA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),lA.get())})}}function $o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=wn(t,e,r);return s.customData._tokenResponse=n,s}function Pd(t){return t!==void 0&&t.enterprise!==void 0}class fA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dA(t,e){return Pr(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function ba(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mA(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=Bu(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Oi(ul(s.auth_time)),issuedAtTime:Oi(ul(s.iat)),expirationTime:Oi(ul(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ul(t){return Number(t)*1e3}function Bu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pg(n);return s?JSON.parse(s):(ea("Failed to decode base64 JWT payload"),null)}catch(s){return ea("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Cd(t){const e=Bu(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&gA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){const e=t.auth,n=await t.getIdToken(),r=await Wi(t,ba(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?zg(s.providerUserInfo):[],o=EA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Bl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function yA(t){const e=ot(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e){const n=await qg(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Hg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&js(t.emulatorConfig.host)&&(l.credentials="include"),jg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wA(t,e){return Pr(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Cd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ws;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new _A(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mA(this,e)}reload(){return yA(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(Bn(this.auth));const e=await this.getIdToken();return await Wi(this,pA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:_,stsTokenManager:S}=n;ae(p&&S,e,"internal-error");const P=ws.fromJSON(this.name,S);ae(typeof p=="string",e,"internal-error"),tr(r,e.name),tr(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof y=="boolean",e,"internal-error"),tr(i,e.name),tr(o,e.name),tr(c,e.name),tr(l,e.name),tr(u,e.name),tr(f,e.name);const x=new an({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:P,createdAt:u,lastLoginAt:f});return _&&Array.isArray(_)&&(x.providerData=_.map($=>({...$}))),l&&(x._redirectEventId=l),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new ws;s.updateFromServerResponse(n);const i=new an({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ws;c.updateFromIdToken(r);const l=new an({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Bl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new Map;function Fn(t){Hn(t instanceof Function,"Expected a class definition");let e=kd.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wg.type="NONE";const Nd=Wg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ba(this.auth,{idToken:e}).catch(()=>{});return n?an._fromGetAccountInfoResponse(this.auth,n,e):null}return an._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(Fn(Nd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fn(Nd);const o=ta(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ba(e,{idToken:f}).catch(()=>{});if(!m)break;p=await an._fromGetAccountInfoResponse(e,m,f)}else p=an._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ts(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ts(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xg(e))return"Blackberry";if(Zg(e))return"Webos";if(Gg(e))return"Safari";if((e.includes("chrome/")||Qg(e))&&!e.includes("edge/"))return"Chrome";if(Yg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Kg(t=Pt()){return/firefox\//i.test(t)}function Gg(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qg(t=Pt()){return/crios\//i.test(t)}function Jg(t=Pt()){return/iemobile/i.test(t)}function Yg(t=Pt()){return/android/i.test(t)}function Xg(t=Pt()){return/blackberry/i.test(t)}function Zg(t=Pt()){return/webos/i.test(t)}function $u(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TA(t=Pt()){return $u(t)&&!!window.navigator?.standalone}function IA(){return MI()&&document.documentMode===10}function e_(t=Pt()){return $u(t)||Yg(t)||Zg(t)||Xg(t)||/windows phone/i.test(t)||Jg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t,e=[]){let n;switch(t){case"Browser":n=Od(Pt());break;case"Worker":n=`${Od(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e={}){return Pr(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=6;class SA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??RA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dd(this),this.idTokenSubscription=new Dd(this),this.beforeStateQueue=new bA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ba(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Zt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(Bn(this));const n=e?ot(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AA(this),n=new SA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wA(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&rA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Zr(t){return ot(t)}class Dd{constructor(e){this.auth=e,this.observer=null,this.addObserver=zI(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CA(t){ic=t}function n_(t){return ic.loadJS(t)}function kA(){return ic.recaptchaEnterpriseScript}function NA(){return ic.gapiScript}function OA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class DA{constructor(){this.enterprise=new VA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class VA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const xA="recaptcha-enterprise",r_="NO_RECAPTCHA";class LA{constructor(e){this.type=xA,this.auth=Zr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{dA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new fA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Pd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(r_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new DA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Pd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kA();l.length!==0&&(l+=c),n_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Vd(t,e,n,r=!1,s=!1){const i=new LA(t);let o;if(s)o=r_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $l(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Vd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t,e){const n=Lu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zr(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function FA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Fn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function UA(t,e,n){const r=Zr(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=s_(e),{host:o,port:c}=BA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(zr(u,r.config.emulator)&&zr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,js(o)?(Og(`${i}//${o}${l}`),Dg("Auth",!0)):$A()}function s_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BA(t){const e=s_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xd(o)}}}function xd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $A(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function jA(t,e){return Pr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e){return co(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e){return co(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function zA(t,e){return co(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends ju{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ki(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ki(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,n,"signInWithPassword",qA);case"emailLink":return HA(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,r,"signUpPassword",jA);case"emailLink":return zA(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e){return co(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="http://localhost";class Kr extends ju{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:WA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GA(t){const e=_i(yi(t)).link,n=e?_i(yi(e)).deep_link_id:null,r=_i(yi(t)).deep_link_id;return(r?_i(yi(r)).link:null)||r||n||e||t}class qu{constructor(e){const n=_i(yi(e)),r=n.apiKey??null,s=n.oobCode??null,i=KA(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=GA(e);try{return new qu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return Ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qu.parseLink(n);return ae(r,"argument-error"),Ki._fromEmailAndCode(e,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends i_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends lo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends lo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends lo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e){return co(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await an._fromIdTokenResponse(e,r,s),o=Ld(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ld(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ld(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends Qn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ra(e,n,r,s)}}function o_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(t,i,e,r):i})}async function JA(t,e,n=!1){const r=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(Bn(r));const s="reauthenticate";try{const i=await Wi(t,o_(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Bu(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(t,e,n=!1){if(Zt(t.app))return Promise.reject(Bn(t));const r="signIn",s=await o_(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function XA(t,e){return a_(Zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(t){const e=Zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZA(t,e,n){if(Zt(t.app))return Promise.reject(Bn(t));const r=Zr(t),o=await $l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&c_(t),l}),c=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function eR(t,e,n){return Zt(t.app)?Promise.reject(Bn(t)):XA(ot(t),Hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&c_(t),r})}function tR(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function nR(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function rR(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function sR(t){return ot(t).signOut()}const Sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=1e3,oR=10;class u_ extends l_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);IA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u_.type="LOCAL";const aR=u_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends l_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h_.type="SESSION";const f_=h_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await cR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Hu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function uR(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function hR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){return navigator?.serviceWorker?.controller||null}function dR(){return d_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="firebaseLocalStorageDb",pR=1,Pa="firebaseLocalStorage",m_="fbase_key";class uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ac(t,e){return t.transaction([Pa],e?"readwrite":"readonly").objectStore(Pa)}function mR(){const t=indexedDB.deleteDatabase(p_);return new uo(t).toPromise()}function jl(){const t=indexedDB.open(p_,pR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pa,{keyPath:m_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pa)?e(r):(r.close(),await mR(),e(await jl()))})})}async function Md(t,e,n){const r=ac(t,!0).put({[m_]:e,value:n});return new uo(r).toPromise()}async function gR(t,e){const n=ac(t,!1).get(e),r=await new uo(n).toPromise();return r===void 0?null:r.value}function Fd(t,e){const n=ac(t,!0).delete(e);return new uo(n).toPromise()}const _R=800,yR=3;class g_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(dR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await hR(),!this.activeServiceWorker)return;this.sender=new lR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jl();return await Md(e,Sa,"1"),await Fd(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Md(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ac(s,!1).getAll();return new uo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g_.type="LOCAL";const ER=g_;new ao(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t,e){return e?Fn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends ju{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wR(t){return a_(t.auth,new zu(t),t.bypassAuthState)}function TR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),YA(n,new zu(t),t.bypassAuthState)}async function IR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),JA(n,new zu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wR;case"linkViaPopup":case"linkViaRedirect":return IR;case"reauthViaPopup":case"reauthViaRedirect":return TR;default:hn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=new ao(2e3,1e4);class ps extends __{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bR.get())};e()}}ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="pendingRedirect",na=new Map;class RR extends __{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await SR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SR(t,e){const n=kR(e),r=CR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function PR(t,e){na.set(t._key(),e)}function CR(t){return Fn(t._redirectPersistence)}function kR(t){return ta(AR,t.config.apiKey,t.name)}async function NR(t,e,n=!1){if(Zt(t.app))return Promise.reject(Bn(t));const r=Zr(t),s=vR(r,e),o=await new RR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=600*1e3;class DR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!y_(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(wn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ud(e))}saveEventToCache(e){this.cachedEventUids.add(Ud(e)),this.lastProcessedEventTime=Date.now()}}function Ud(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function VR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MR=/^https?/;async function FR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xR(t);for(const n of e)try{if(UR(n))return}catch{}hn(t,"unauthorized-domain")}function UR(t){const e=Ul(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MR.test(n))return!1;if(LR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=new ao(3e4,6e4);function Bd(){const t=Tn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $R(t){return new Promise((e,n)=>{function r(){Bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bd(),n(wn(t,"network-request-failed"))},timeout:BR.get()})}if(Tn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Tn().gapi?.load)r();else{const s=OA("iframefcb");return Tn()[s]=()=>{gapi.load?r():n(wn(t,"network-request-failed"))},n_(`${NA()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw ra=null,e})}let ra=null;function jR(t){return ra=ra||$R(t),ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new ao(5e3,15e3),HR="__/auth/iframe",zR="emulator/auth/iframe",WR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uu(e,zR):`https://${t.config.authDomain}/${HR}`,r={apiKey:e.apiKey,appName:t.name,v:qs},s=KR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oo(r).slice(1)}`}async function QR(t){const e=await jR(t),n=Tn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:GR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),c=Tn().setTimeout(()=>{i(o)},qR.get());function l(){Tn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,XR=600,ZR="_blank",eS="http://localhost";class $d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tS(t,e,n,r=YR,s=XR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...JR,width:r.toString(),height:s.toString(),top:i,left:o},u=Pt().toLowerCase();n&&(c=Qg(u)?ZR:n),Kg(u)&&(e=e||eS,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[y,_])=>`${m}${y}=${_},`,"");if(TA(u)&&c!=="_self")return nS(e||"",c),new $d(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new $d(p)}function nS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="__/auth/handler",sS="emulator/auth/handler",iS=encodeURIComponent("fac");async function jd(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:s};if(e instanceof i_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof lo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${iS}=${encodeURIComponent(l)}`:"";return`${oS(t)}?${oo(c).slice(1)}${u}`}function oS({config:t}){return t.emulator?Uu(t,sS):`https://${t.authDomain}/${rS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="webStorageSupport";class aS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f_,this._completeRedirectFn=NR,this._overrideRedirectResult=PR}async _openPopup(e,n,r,s){Hn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await jd(e,n,r,Ul(),s);return tS(e,i,Hu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jd(e,n,r,Ul(),s);return uR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QR(e),r=new DR(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hl,{type:hl},s=>{const i=s?.[0]?.[hl];i!==void 0&&n(!!i),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e_()||Gg()||$u()}}const cS=aS;var qd="@firebase/auth",Hd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hS(t){Ds(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(t)},u=new PA(r,s,i,l);return FA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new Wr("auth-internal",e=>{const n=Zr(e.getProvider("auth").getImmediate());return(r=>new lS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mr(qd,Hd,uS(t)),mr(qd,Hd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=300,dS=Ng("authIdTokenMaxAge")||fS;let zd=null;const pS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dS)return;const s=n?.token;zd!==s&&(zd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cr(t=Lg()){const e=Lu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MA(t,{popupRedirectResolver:cS,persistence:[ER,aR,f_]}),r=Ng("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pS(i.toString());nR(n,o,()=>o(n.currentUser)),tR(n,c=>o(c))}}const s=Cg("auth");return s&&UA(n,`http://${s}`),n}function mS(){return document.getElementsByTagName("head")?.[0]??document}CA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=wn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hS("Browser");const Ut=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},gS={class:"container"},_S={class:"d-flex justify-content-center py-3"},yS={class:"nav nav-pills"},ES={class:"nav-item"},vS={class:"nav-item"},wS={key:0,class:"nav-item"},TS={key:1,class:"nav-item"},IS={class:"nav-item"},bS={key:2,class:"nav-item"},AS={class:"nav-link"},RS={key:3,class:"nav-item"},SS={class:"nav-item"},PS={class:"nav-item"},CS={class:"nav-item"},kS={__name:"BHeader",setup(t){const e=rc(),n=Cr(),r=xe(!1),s=xe("");$s(()=>{n.currentUser&&(r.value=!0,s.value=n.currentUser.email),n.onAuthStateChanged(o=>{o?(r.value=!0,s.value=o.email):(r.value=!1,s.value="")})});const i=async()=>{try{await sR(n),e.push("/")}catch(o){console.error("Logout failed:",o)}};return(o,c)=>{const l=Ps("router-link");return he(),pe("div",gS,[O("header",_S,[O("ul",yS,[O("li",ES,[De(l,{to:"/",class:"nav-link","active-class":"active"},{default:on(()=>c[0]||(c[0]=[Jt("Home",-1)])),_:1,__:[0]})]),O("li",vS,[De(l,{to:"/about",class:"nav-link","active-class":"active"},{default:on(()=>c[1]||(c[1]=[Jt("About",-1)])),_:1,__:[1]})]),r.value?We("",!0):(he(),pe("li",wS,[De(l,{to:"/firelogin",class:"nav-link","active-class":"active"},{default:on(()=>c[2]||(c[2]=[Jt("Firebase Login",-1)])),_:1,__:[2]})])),r.value?We("",!0):(he(),pe("li",TS,[De(l,{to:"/fireregister",class:"nav-link","active-class":"active"},{default:on(()=>c[3]||(c[3]=[Jt("Firebase Register",-1)])),_:1,__:[3]})])),O("li",IS,[De(l,{to:"/addbook",class:"nav-link","active-class":"active"},{default:on(()=>c[4]||(c[4]=[Jt("Add Book",-1)])),_:1,__:[4]})]),r.value?(he(),pe("li",bS,[O("span",AS,"Welcome, "+Be(s.value),1)])):We("",!0),r.value?(he(),pe("li",RS,[O("button",{class:"btn nav-link",onClick:i},"Logout")])):We("",!0),O("li",SS,[De(l,{to:"/GetBookCount",class:"nav-link","active-class":"active"},{default:on(()=>c[5]||(c[5]=[Jt("Get Book Count",-1)])),_:1,__:[5]})]),O("li",PS,[De(l,{to:"/WeatherCheck",class:"nav-link","active-class":"active"},{default:on(()=>c[6]||(c[6]=[Jt("Get Weather",-1)])),_:1,__:[6]})]),O("li",CS,[De(l,{to:"/CountBookAPI",class:"nav-link","active-class":"active"},{default:on(()=>c[7]||(c[7]=[Jt(" Count Book API",-1)])),_:1,__:[7]})])])])])}}},NS=Ut(kS,[["__scopeId","data-v-2233f9ea"]]);var OS="firebase",DS="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mr(OS,DS,"app");var Wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gr,E_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function I(){}I.prototype=v.prototype,b.D=v.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(A,R,C){for(var w=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)w[ze-2]=arguments[ze];return v.prototype[R].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(R=0;16>R;++R)A[R]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=b.g[0],I=b.g[1],R=b.g[2];var C=b.g[3],w=v+(C^I&(R^C))+A[0]+3614090360&4294967295;v=I+(w<<7&4294967295|w>>>25),w=C+(R^v&(I^R))+A[1]+3905402710&4294967295,C=v+(w<<12&4294967295|w>>>20),w=R+(I^C&(v^I))+A[2]+606105819&4294967295,R=C+(w<<17&4294967295|w>>>15),w=I+(v^R&(C^v))+A[3]+3250441966&4294967295,I=R+(w<<22&4294967295|w>>>10),w=v+(C^I&(R^C))+A[4]+4118548399&4294967295,v=I+(w<<7&4294967295|w>>>25),w=C+(R^v&(I^R))+A[5]+1200080426&4294967295,C=v+(w<<12&4294967295|w>>>20),w=R+(I^C&(v^I))+A[6]+2821735955&4294967295,R=C+(w<<17&4294967295|w>>>15),w=I+(v^R&(C^v))+A[7]+4249261313&4294967295,I=R+(w<<22&4294967295|w>>>10),w=v+(C^I&(R^C))+A[8]+1770035416&4294967295,v=I+(w<<7&4294967295|w>>>25),w=C+(R^v&(I^R))+A[9]+2336552879&4294967295,C=v+(w<<12&4294967295|w>>>20),w=R+(I^C&(v^I))+A[10]+4294925233&4294967295,R=C+(w<<17&4294967295|w>>>15),w=I+(v^R&(C^v))+A[11]+2304563134&4294967295,I=R+(w<<22&4294967295|w>>>10),w=v+(C^I&(R^C))+A[12]+1804603682&4294967295,v=I+(w<<7&4294967295|w>>>25),w=C+(R^v&(I^R))+A[13]+4254626195&4294967295,C=v+(w<<12&4294967295|w>>>20),w=R+(I^C&(v^I))+A[14]+2792965006&4294967295,R=C+(w<<17&4294967295|w>>>15),w=I+(v^R&(C^v))+A[15]+1236535329&4294967295,I=R+(w<<22&4294967295|w>>>10),w=v+(R^C&(I^R))+A[1]+4129170786&4294967295,v=I+(w<<5&4294967295|w>>>27),w=C+(I^R&(v^I))+A[6]+3225465664&4294967295,C=v+(w<<9&4294967295|w>>>23),w=R+(v^I&(C^v))+A[11]+643717713&4294967295,R=C+(w<<14&4294967295|w>>>18),w=I+(C^v&(R^C))+A[0]+3921069994&4294967295,I=R+(w<<20&4294967295|w>>>12),w=v+(R^C&(I^R))+A[5]+3593408605&4294967295,v=I+(w<<5&4294967295|w>>>27),w=C+(I^R&(v^I))+A[10]+38016083&4294967295,C=v+(w<<9&4294967295|w>>>23),w=R+(v^I&(C^v))+A[15]+3634488961&4294967295,R=C+(w<<14&4294967295|w>>>18),w=I+(C^v&(R^C))+A[4]+3889429448&4294967295,I=R+(w<<20&4294967295|w>>>12),w=v+(R^C&(I^R))+A[9]+568446438&4294967295,v=I+(w<<5&4294967295|w>>>27),w=C+(I^R&(v^I))+A[14]+3275163606&4294967295,C=v+(w<<9&4294967295|w>>>23),w=R+(v^I&(C^v))+A[3]+4107603335&4294967295,R=C+(w<<14&4294967295|w>>>18),w=I+(C^v&(R^C))+A[8]+1163531501&4294967295,I=R+(w<<20&4294967295|w>>>12),w=v+(R^C&(I^R))+A[13]+2850285829&4294967295,v=I+(w<<5&4294967295|w>>>27),w=C+(I^R&(v^I))+A[2]+4243563512&4294967295,C=v+(w<<9&4294967295|w>>>23),w=R+(v^I&(C^v))+A[7]+1735328473&4294967295,R=C+(w<<14&4294967295|w>>>18),w=I+(C^v&(R^C))+A[12]+2368359562&4294967295,I=R+(w<<20&4294967295|w>>>12),w=v+(I^R^C)+A[5]+4294588738&4294967295,v=I+(w<<4&4294967295|w>>>28),w=C+(v^I^R)+A[8]+2272392833&4294967295,C=v+(w<<11&4294967295|w>>>21),w=R+(C^v^I)+A[11]+1839030562&4294967295,R=C+(w<<16&4294967295|w>>>16),w=I+(R^C^v)+A[14]+4259657740&4294967295,I=R+(w<<23&4294967295|w>>>9),w=v+(I^R^C)+A[1]+2763975236&4294967295,v=I+(w<<4&4294967295|w>>>28),w=C+(v^I^R)+A[4]+1272893353&4294967295,C=v+(w<<11&4294967295|w>>>21),w=R+(C^v^I)+A[7]+4139469664&4294967295,R=C+(w<<16&4294967295|w>>>16),w=I+(R^C^v)+A[10]+3200236656&4294967295,I=R+(w<<23&4294967295|w>>>9),w=v+(I^R^C)+A[13]+681279174&4294967295,v=I+(w<<4&4294967295|w>>>28),w=C+(v^I^R)+A[0]+3936430074&4294967295,C=v+(w<<11&4294967295|w>>>21),w=R+(C^v^I)+A[3]+3572445317&4294967295,R=C+(w<<16&4294967295|w>>>16),w=I+(R^C^v)+A[6]+76029189&4294967295,I=R+(w<<23&4294967295|w>>>9),w=v+(I^R^C)+A[9]+3654602809&4294967295,v=I+(w<<4&4294967295|w>>>28),w=C+(v^I^R)+A[12]+3873151461&4294967295,C=v+(w<<11&4294967295|w>>>21),w=R+(C^v^I)+A[15]+530742520&4294967295,R=C+(w<<16&4294967295|w>>>16),w=I+(R^C^v)+A[2]+3299628645&4294967295,I=R+(w<<23&4294967295|w>>>9),w=v+(R^(I|~C))+A[0]+4096336452&4294967295,v=I+(w<<6&4294967295|w>>>26),w=C+(I^(v|~R))+A[7]+1126891415&4294967295,C=v+(w<<10&4294967295|w>>>22),w=R+(v^(C|~I))+A[14]+2878612391&4294967295,R=C+(w<<15&4294967295|w>>>17),w=I+(C^(R|~v))+A[5]+4237533241&4294967295,I=R+(w<<21&4294967295|w>>>11),w=v+(R^(I|~C))+A[12]+1700485571&4294967295,v=I+(w<<6&4294967295|w>>>26),w=C+(I^(v|~R))+A[3]+2399980690&4294967295,C=v+(w<<10&4294967295|w>>>22),w=R+(v^(C|~I))+A[10]+4293915773&4294967295,R=C+(w<<15&4294967295|w>>>17),w=I+(C^(R|~v))+A[1]+2240044497&4294967295,I=R+(w<<21&4294967295|w>>>11),w=v+(R^(I|~C))+A[8]+1873313359&4294967295,v=I+(w<<6&4294967295|w>>>26),w=C+(I^(v|~R))+A[15]+4264355552&4294967295,C=v+(w<<10&4294967295|w>>>22),w=R+(v^(C|~I))+A[6]+2734768916&4294967295,R=C+(w<<15&4294967295|w>>>17),w=I+(C^(R|~v))+A[13]+1309151649&4294967295,I=R+(w<<21&4294967295|w>>>11),w=v+(R^(I|~C))+A[4]+4149444226&4294967295,v=I+(w<<6&4294967295|w>>>26),w=C+(I^(v|~R))+A[11]+3174756917&4294967295,C=v+(w<<10&4294967295|w>>>22),w=R+(v^(C|~I))+A[2]+718787259&4294967295,R=C+(w<<15&4294967295|w>>>17),w=I+(C^(R|~v))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var I=v-this.blockSize,A=this.B,R=this.h,C=0;C<v;){if(R==0)for(;C<=I;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<v;)if(A[R++]=b.charCodeAt(C++),R==this.blockSize){s(this,A),R=0;break}}else for(;C<v;)if(A[R++]=b[C++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var I=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=I&255,I/=256;for(this.u(b),b=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)b[I++]=this.g[v]>>>A&255;return b};function i(b,v){var I=c;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=v(b)}function o(b,v){this.h=v;for(var I=[],A=!0,R=b.length-1;0<=R;R--){var C=b[R]|0;A&&C==v||(I[R]=C,A=!1)}this.g=I}var c={};function l(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return P(u(-b));for(var v=[],I=1,A=0;b>=I;A++)v[A]=b/I|0,I*=4294967296;return new o(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return P(f(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(v,8)),A=p,R=0;R<b.length;R+=8){var C=Math.min(8,b.length-R),w=parseInt(b.substring(R,R+C),v);8>C?(C=u(Math.pow(v,C)),A=A.j(C).add(u(w))):(A=A.j(I),A=A.add(u(w)))}return A}var p=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(S(this))return-P(this).m();for(var b=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);b+=(0<=A?A:4294967296+A)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(_(this))return"0";if(S(this))return"-"+P(this).toString(b);for(var v=u(Math.pow(b,6)),I=this,A="";;){var R=z(I,v).g;I=x(I,R.j(v));var C=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=R,_(I))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function _(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function S(b){return b.h==-1}t.l=function(b){return b=x(this,b),S(b)?-1:_(b)?0:1};function P(b){for(var v=b.g.length,I=[],A=0;A<v;A++)I[A]=~b.g[A];return new o(I,~b.h).add(m)}t.abs=function(){return S(this)?P(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],A=0,R=0;R<=v;R++){var C=A+(this.i(R)&65535)+(b.i(R)&65535),w=(C>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);A=w>>>16,C&=65535,w&=65535,I[R]=w<<16|C}return new o(I,I[I.length-1]&-2147483648?-1:0)};function x(b,v){return b.add(P(v))}t.j=function(b){if(_(this)||_(b))return p;if(S(this))return S(b)?P(this).j(P(b)):P(P(this).j(b));if(S(b))return P(this.j(P(b)));if(0>this.l(y)&&0>b.l(y))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<b.g.length;R++){var C=this.i(A)>>>16,w=this.i(A)&65535,ze=b.i(R)>>>16,Ct=b.i(R)&65535;I[2*A+2*R]+=w*Ct,$(I,2*A+2*R),I[2*A+2*R+1]+=C*Ct,$(I,2*A+2*R+1),I[2*A+2*R+1]+=w*ze,$(I,2*A+2*R+1),I[2*A+2*R+2]+=C*ze,$(I,2*A+2*R+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function $(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function q(b,v){this.g=b,this.h=v}function z(b,v){if(_(v))throw Error("division by zero");if(_(b))return new q(p,p);if(S(b))return v=z(P(b),v),new q(P(v.g),P(v.h));if(S(v))return v=z(b,P(v)),new q(P(v.g),v.h);if(30<b.g.length){if(S(b)||S(v))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=v;0>=A.l(b);)I=oe(I),A=oe(A);var R=_e(I,1),C=_e(A,1);for(A=_e(A,2),I=_e(I,2);!_(A);){var w=C.add(A);0>=w.l(b)&&(R=R.add(I),C=w),A=_e(A,1),I=_e(I,1)}return v=x(b,R.j(v)),new q(R,v)}for(R=p;0<=b.l(v);){for(I=Math.max(1,Math.floor(b.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=u(I),w=C.j(v);S(w)||0<w.l(b);)I-=A,C=u(I),w=C.j(v);_(C)&&(C=m),R=R.add(C),b=x(b,w)}return new q(R,b)}t.A=function(b){return z(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&b.i(A);return new o(I,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|b.i(A);return new o(I,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^b.i(A);return new o(I,this.h^b.h)};function oe(b){for(var v=b.g.length+1,I=[],A=0;A<v;A++)I[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(I,b.h)}function _e(b,v){var I=v>>5;v%=32;for(var A=b.g.length-I,R=[],C=0;C<A;C++)R[C]=0<v?b.i(C+I)>>>v|b.i(C+I+1)<<32-v:b.i(C+I);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,E_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,gr=o}).apply(typeof Wd<"u"?Wd:typeof self<"u"?self:typeof window<"u"?window:{});var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v_,Ei,w_,sa,ql,T_,I_,b_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof jo=="object"&&jo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,N={next:function(){if(!g&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function y(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function _(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,N,V){for(var G=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)G[Me-2]=arguments[Me];return h.prototype[N].apply(g,G)}}function S(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function P(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const N=a.length||0,V=g.length||0;a.length=N+V;for(let G=0;G<V;G++)a[N+G]=g[G]}else a.push(g)}}class x{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function $(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var oe=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function _e(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function b(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let V=0;V<I.length;V++)d=I[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function C(a){c.setTimeout(()=>{throw a},0)}function w(){var a=mt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ze{constructor(){this.h=this.g=null}add(h,d){const g=Ct.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ct=new x(()=>new Pe,a=>a.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,fe=!1,mt=new ze,Bt=()=>{const a=c.Promise.resolve(void 0);ve=()=>{a.then(Je)}};var Je=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){C(d)}var h=Ct;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}fe=!1};function Ce(){this.s=this.s,this.C=this.C}Ce.prototype.s=!1,Ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var $t=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function jt(a,h){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(oe){e:{try{z(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Dt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&jt.aa.h.call(this)}}_(jt,Le);var Dt={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Y(a,h,d,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=N,this.key=++Z,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,d,g,N){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var G=T(a,h,g,N);return-1<G?(h=a[G],d||(h.fa=!1)):(h=new Y(h,this.src,V,!!g,N),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=N)&&Array.prototype.splice.call(g,N,1),V&&(te(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,h,d,g){for(var N=0;N<a.length;++N){var V=a[N];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),M={};function j(a,h,d,g,N){if(Array.isArray(h)){for(var V=0;V<h.length;V++)j(a,h[V],d,g,N);return null}return d=ue(d),a&&a[L]?a.K(h,d,u(g)?!!g.capture:!1,N):U(a,h,d,!1,g,N)}function U(a,h,d,g,N,V){if(!h)throw Error("Invalid event type");var G=u(N)?!!N.capture:!!N,Me=Q(a);if(Me||(a[k]=Me=new Re(a)),d=Me.add(h,d,g,G,V),d.proxy)return d;if(g=J(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)$t||(N=G),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(H(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function J(){function a(d){return h.call(a.src,a.listener,d)}const h=re;return a}function K(a,h,d,g,N){if(Array.isArray(h))for(var V=0;V<h.length;V++)K(a,h[V],d,g,N);else g=u(g)?!!g.capture:!!g,d=ue(d),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=T(V,d,g,N),-1<d&&(te(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,d,g,N)),(d=-1<a?h[a]:null)&&W(d))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(H(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Q(h))?(E(d,a),d.h==0&&(d.src=null,h[k]=null)):te(a)}}}function H(a){return a in M?M[a]:M[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new jt(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&W(a),a=d.call(g,h)}return a}function Q(a){return a=a[k],a instanceof Re?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function ie(){Ce.call(this),this.i=new Re(this),this.M=this,this.F=null}_(ie,Ce),ie.prototype[L]=!0,ie.prototype.removeEventListener=function(a,h,d,g){K(this,a,h,d,g)};function ye(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Le(h,a);else if(h instanceof Le)h.target=h.target||a;else{var N=h;h=new Le(g,a),A(h,N)}if(N=!0,d)for(var V=d.length-1;0<=V;V--){var G=h.g=d[V];N=be(G,g,!0,h)&&N}if(G=h.g=a,N=be(G,g,!0,h)&&N,N=be(G,g,!1,h)&&N,d)for(V=0;V<d.length;V++)G=h.g=d[V],N=be(G,g,!1,h)&&N}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)te(d[g]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ie.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function be(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,V=0;V<h.length;++V){var G=h[V];if(G&&!G.da&&G.capture==d){var Me=G.listener,ut=G.ha||G.src;G.fa&&E(a.i,G),N=Me.call(ut,g)!==!1&&N}}return N&&!g.defaultPrevented}function at(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function ct(a){a.g=at(()=>{a.g=null,a.i&&(a.i=!1,ct(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Gt extends Ce{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ct(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(a){Ce.call(this),this.h=a,this.g={}}_(gt,Ce);var Jn=[];function Zs(a){_e(a.g,function(h,d){this.g.hasOwnProperty(d)&&W(h)},a),a.g={}}gt.prototype.N=function(){gt.aa.N.call(this),Zs(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lt=c.JSON.stringify,Qt=c.JSON.parse,To=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ns(){}ns.prototype.h=null;function Ch(a){return a.h||(a.h=a.i())}function kh(){}var ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oc(){Le.call(this,"d")}_(Oc,Le);function Dc(){Le.call(this,"c")}_(Dc,Le);var Dr={},Nh=null;function Io(){return Nh=Nh||new ie}Dr.La="serverreachability";function Oh(a){Le.call(this,Dr.La,a)}_(Oh,Le);function ti(a){const h=Io();ye(h,new Oh(h))}Dr.STAT_EVENT="statevent";function Dh(a,h){Le.call(this,Dr.STAT_EVENT,a),this.stat=h}_(Dh,Le);function kt(a){const h=Io();ye(h,new Dh(h,a))}Dr.Ma="timingevent";function Vh(a,h){Le.call(this,Dr.Ma,a),this.size=h}_(Vh,Le);function ni(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function ri(){this.g=!0}ri.prototype.xa=function(){this.g=!1};function TE(a,h,d,g,N,V){a.info(function(){if(a.g)if(V)for(var G="",Me=V.split("&"),ut=0;ut<Me.length;ut++){var Se=Me[ut].split("=");if(1<Se.length){var _t=Se[0];Se=Se[1];var yt=_t.split("_");G=2<=yt.length&&yt[1]=="type"?G+(_t+"="+Se+"&"):G+(_t+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+d+`
`+G})}function IE(a,h,d,g,N,V,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+d+`
`+V+" "+G})}function rs(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+AE(a,d)+(g?" "+g:"")})}function bE(a,h){a.info(function(){return"TIMEOUT: "+h})}ri.prototype.info=function(){};function AE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return lt(d)}catch{return h}}var bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vc;function Ao(){}_(Ao,ns),Ao.prototype.g=function(){return new XMLHttpRequest},Ao.prototype.i=function(){return{}},Vc=new Ao;function Yn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lh}function Lh(){this.i=null,this.g="",this.h=!1}var Mh={},xc={};function Lc(a,h,d){a.L=1,a.v=Co(kn(h)),a.m=d,a.P=!0,Fh(a,null)}function Fh(a,h){a.F=Date.now(),Ro(a),a.A=kn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Xh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Lh,a.g=_f(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Gt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Jn[0]=N.toString()),N=Jn);for(var V=0;V<N.length;V++){var G=j(d,N[V],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ti(),TE(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Nn(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const yt=Nn(this.g);var h=this.g.Ba();const os=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||of(this.g)))){this.J||yt!=4||h==7||(h==8||0>=os?ti(3):ti(2)),Mc(this);var d=this.g.Z();this.X=d;t:if(Uh(this)){var g=of(this.g);a="";var N=g.length,V=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),si(this);var G="";break t}this.h.i=new c.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==N-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,IE(this.i,this.u,this.A,this.l,this.R,yt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ut=this.g;if((Me=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Me)){var Se=Me;break t}}Se=null}if(d=Se)rs(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fc(this,d);else{this.o=!1,this.s=3,kt(12),Vr(this),si(this);break e}}if(this.P){d=!0;let sn;for(;!this.J&&this.C<G.length;)if(sn=RE(this,G),sn==xc){yt==4&&(this.s=4,kt(14),d=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Mh){this.s=4,kt(15),rs(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else rs(this.i,this.l,sn,null),Fc(this,sn);if(Uh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||G.length!=0||this.h.h||(this.s=1,kt(16),d=!1),this.o=this.o&&d,!d)rs(this.i,this.l,G,"[Invalid Chunked Response]"),Vr(this),si(this);else if(0<G.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Hc(_t),_t.M=!0,kt(11))}}else rs(this.i,this.l,G,null),Fc(this,G);yt==4&&Vr(this),this.o&&!this.J&&(yt==4?df(this.j,this):(this.o=!1,Ro(this)))}else qE(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Vr(this),si(this)}}}catch{}finally{}};function Uh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function RE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?xc:(d=Number(h.substring(d,g)),isNaN(d)?Mh:(g+=1,g+d>h.length?xc:(h=h.slice(g,g+d),a.C=g+d,h)))}Yn.prototype.cancel=function(){this.J=!0,Vr(this)};function Ro(a){a.S=Date.now()+a.I,Bh(a,a.I)}function Bh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ni(m(a.ba,a),h)}function Mc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(bE(this.i,this.A),this.L!=2&&(ti(),kt(17)),Vr(this),this.s=2,si(this)):Bh(this,this.S-a)};function si(a){a.j.G==0||a.J||df(a.j,a)}function Vr(a){Mc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Zs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Fc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Uc(d.h,a))){if(!a.K&&Uc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)xo(d),Do(d);else break e;qc(d),kt(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=ni(m(d.Za,d),6e3));if(1>=qh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Lr(d,11)}else if((a.K||d.g==a)&&xo(d),!$(h))for(N=d.Da.g.parse(h),h=0;h<N.length;h++){let Se=N[h];if(d.T=Se[0],Se=Se[1],d.G==2)if(Se[0]=="c"){d.K=Se[1],d.ia=Se[2];const _t=Se[3];_t!=null&&(d.la=_t,d.j.info("VER="+d.la));const yt=Se[4];yt!=null&&(d.Aa=yt,d.j.info("SVER="+d.Aa));const os=Se[5];os!=null&&typeof os=="number"&&0<os&&(g=1.5*os,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const sn=a.g;if(sn){const Mo=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mo){var V=g.h;V.g||Mo.indexOf("spdy")==-1&&Mo.indexOf("quic")==-1&&Mo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Bc(V,V.h),V.h=null))}if(g.D){const zc=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;zc&&(g.ya=zc,qe(g.I,g.D,zc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var G=a;if(g.qa=gf(g,g.J?g.ia:null,g.W),G.K){Hh(g.h,G);var Me=G,ut=g.L;ut&&(Me.I=ut),Me.B&&(Mc(Me),Ro(Me)),g.g=G}else hf(g);0<d.i.length&&Vo(d)}else Se[0]!="stop"&&Se[0]!="close"||Lr(d,7);else d.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Lr(d,7):jc(d):Se[0]!="noop"&&d.l&&d.l.ta(Se),d.v=0)}}ti(4)}catch{}}var SE=class{constructor(a,h){this.g=a,this.map=h}};function $h(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qh(a){return a.h?1:a.g?a.g.size:0}function Uc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Bc(a,h){a.g?a.g.add(h):a.h=h}function Hh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}$h.prototype.cancel=function(){if(this.i=zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return S(a.i)}function PE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function CE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Wh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=CE(a),g=PE(a),N=g.length,V=0;V<N;V++)h.call(void 0,g[V],d&&d[V],a)}var Kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),N=null;if(0<=g){var V=a[d].substring(0,g);N=a[d].substring(g+1)}else V=a[d];h(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,So(this,a.j),this.o=a.o,this.g=a.g,Po(this,a.s),this.l=a.l;var h=a.i,d=new ai;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Gh(this,d),this.m=a.m}else a&&(h=String(a).match(Kh))?(this.h=!1,So(this,h[1]||"",!0),this.o=ii(h[2]||""),this.g=ii(h[3]||"",!0),Po(this,h[4]),this.l=ii(h[5]||"",!0),Gh(this,h[6]||"",!0),this.m=ii(h[7]||"")):(this.h=!1,this.i=new ai(null,this.h))}xr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(oi(h,Qh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(oi(h,Qh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(oi(d,d.charAt(0)=="/"?DE:OE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",oi(d,xE)),a.join("")};function kn(a){return new xr(a)}function So(a,h,d){a.j=d?ii(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Po(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Gh(a,h,d){h instanceof ai?(a.i=h,LE(a.i,a.h)):(d||(h=oi(h,VE)),a.i=new ai(h,a.h))}function qe(a,h,d){a.i.set(h,d)}function Co(a){return qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ii(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function oi(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,NE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Qh=/[#\/\?@]/g,OE=/[#\?:]/g,DE=/[#\?]/g,VE=/[#\?@]/g,xE=/#/g;function ai(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&kE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ai.prototype,t.add=function(a,h){Xn(this),this.i=null,a=ss(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Jh(a,h){Xn(a),h=ss(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Yh(a,h){return Xn(a),h=ss(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(h,N,g,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const N=a[g];for(let V=0;V<N.length;V++)d.push(h[g])}return d},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")Yh(this,a)&&(h=h.concat(this.g.get(ss(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=ss(this,a),Yh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Xh(a,h,d){Jh(a,h),0<d.length&&(a.i=null,a.g.set(ss(a,h),S(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const V=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var N=V;G[g]!==""&&(N+="="+encodeURIComponent(String(G[g]))),a.push(N)}}return this.i=a.join("&")};function ss(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function LE(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(d,g){var N=g.toLowerCase();g!=N&&(Jh(this,g),Xh(this,N,d))},a)),a.j=h}function ME(a,h){const d=new ri;if(c.Image){const g=new Image;g.onload=y(Zn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=y(Zn,d,"TestLoadImage: error",!1,h,g),g.onabort=y(Zn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(Zn,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function FE(a,h){const d=new ri,g=new AbortController,N=setTimeout(()=>{g.abort(),Zn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(N),V.ok?Zn(d,"TestPingServer: ok",!0,h):Zn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Zn(d,"TestPingServer: error",!1,h)})}function Zn(a,h,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function UE(){this.g=new To}function BE(a,h,d){const g=d||"";try{Wh(a,function(N,V){let G=N;u(N)&&(G=lt(N)),h.push(g+V+"="+encodeURIComponent(G))})}catch(N){throw h.push(g+"type="+encodeURIComponent("_badmap")),N}}function ko(a){this.l=a.Ub||null,this.j=a.eb||!1}_(ko,ns),ko.prototype.g=function(){return new No(this.l,this.j)},ko.prototype.i=function(a){return function(){return a}}({});function No(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(No,ie),t=No.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,li(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ci(this):li(this),this.readyState==3&&Zh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ci(this))},t.Qa=function(a){this.g&&(this.response=a,ci(this))},t.ga=function(){this.g&&ci(this)};function ci(a){a.readyState=4,a.l=null,a.j=null,a.v=null,li(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(No.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ef(a){let h="";return _e(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function $c(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=ef(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):qe(a,h,d))}function Ge(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Ge,ie);var $E=/^https?$/i,jE=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vc.g(),this.v=this.o?Ch(this.o):Ch(Vc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){tf(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),N=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(jE,h,void 0))||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of d)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sf(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){tf(this,V)}};function tf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,nf(a),Oo(a)}function nf(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),Oo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oo(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?rf(this):this.bb())},t.bb=function(){rf(this)};function rf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)at(a.Ea,0,a);else if(ye(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=G===0){var N=String(a.D).match(Kh)[1]||null;!N&&c.self&&c.self.location&&(N=c.self.location.protocol.slice(0,-1)),g=!$E.test(N?N.toLowerCase():"")}d=g}if(d)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var V=2<Nn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",nf(a)}}finally{Oo(a)}}}}function Oo(a,h){if(a.g){sf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ye(a,"ready");try{d.onreadystatechange=g}catch{}}}function sf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Qt(h)}};function of(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qE(a){const h={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if($(a[g]))continue;var d=R(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[N]||[];h[N]=V,V.push(d)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ui(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function af(a){this.Aa=0,this.i=[],this.j=new ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ui("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ui("baseRetryDelayMs",5e3,a),this.cb=ui("retryDelaySeedMs",1e4,a),this.Wa=ui("forwardChannelMaxRetries",2,a),this.wa=ui("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $h(a&&a.concurrentRequestLimit),this.Da=new UE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=af.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){kt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=gf(this,null,this.W),Vo(this)};function jc(a){if(cf(a),a.G==3){var h=a.U++,d=kn(a.I);if(qe(d,"SID",a.K),qe(d,"RID",h),qe(d,"TYPE","terminate"),hi(a,d),h=new Yn(a,a.j,h),h.L=2,h.v=Co(kn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=_f(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ro(h)}mf(a)}function Do(a){a.g&&(Hc(a),a.g.cancel(),a.g=null)}function cf(a){Do(a),a.u&&(c.clearTimeout(a.u),a.u=null),xo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Vo(a){if(!jh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ve||Bt(),fe||(ve(),fe=!0),mt.add(h,a),a.B=0}}function HE(a,h){return qh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ni(m(a.Ga,a,h),pf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Yn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=uf(this,N,h),d=kn(this.I),qe(d,"RID",a),qe(d,"CVER",22),this.D&&qe(d,"X-HTTP-Session-Id",this.D),hi(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(ef(V)))+"&"+h:this.m&&$c(d,this.m,V)),Bc(this.h,N),this.Ua&&qe(d,"TYPE","init"),this.P?(qe(d,"$req",h),qe(d,"SID","null"),N.T=!0,Lc(N,d,null)):Lc(N,d,h),this.G=2}}else this.G==3&&(a?lf(this,a):this.i.length==0||jh(this.h)||lf(this))};function lf(a,h){var d;h?d=h.l:d=a.U++;const g=kn(a.I);qe(g,"SID",a.K),qe(g,"RID",d),qe(g,"AID",a.T),hi(a,g),a.m&&a.o&&$c(g,a.m,a.o),d=new Yn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=uf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Bc(a.h,d),Lc(d,g,h)}function hi(a,h){a.H&&_e(a.H,function(d,g){qe(h,g,d)}),a.l&&Wh({},function(d,g){qe(h,g,d)})}function uf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let V=-1;for(;;){const G=["count="+d];V==-1?0<d?(V=N[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Me=!0;for(let ut=0;ut<d;ut++){let Se=N[ut].g;const _t=N[ut].map;if(Se-=V,0>Se)V=Math.max(0,N[ut].g-100),Me=!1;else try{BE(_t,G,"req"+Se+"_")}catch{g&&g(_t)}}if(Me){g=G.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function hf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ve||Bt(),fe||(ve(),fe=!0),mt.add(h,a),a.v=0}}function qc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ni(m(a.Fa,a),pf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ff(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ni(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Do(this),ff(this))};function Hc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function ff(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=kn(a.qa);qe(h,"RID","rpc"),qe(h,"SID",a.K),qe(h,"AID",a.T),qe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&qe(h,"TO",a.ja),qe(h,"TYPE","xmlhttp"),hi(a,h),a.m&&a.o&&$c(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Co(kn(h)),d.m=null,d.P=!0,Fh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Do(this),qc(this),kt(19))};function xo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function df(a,h){var d=null;if(a.g==h){xo(a),Hc(a),a.g=null;var g=2}else if(Uc(a.h,h))d=h.D,Hh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;g=Io(),ye(g,new Vh(g,d)),Vo(a)}else hf(a);else if(N=h.s,N==3||N==0&&0<h.X||!(g==1&&HE(a,h)||g==2&&qc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),N){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function pf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Lr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const N=!g;g=new xr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||So(g,"https"),Co(g),N?ME(g.toString(),d):FE(g.toString(),d)}else kt(2);a.G=0,a.l&&a.l.sa(h),mf(a),cf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function mf(a){if(a.G=0,a.ka=[],a.l){const h=zh(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function gf(a,h,d){var g=d instanceof xr?kn(d):new xr(d);if(g.g!="")h&&(g.g=h+"."+g.g),Po(g,g.s);else{var N=c.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var V=new xr(null);g&&So(V,g),h&&(V.g=h),N&&Po(V,N),d&&(V.l=d),g=V}return d=a.D,h=a.ya,d&&h&&qe(g,d,h),qe(g,"VER",a.la),hi(a,g),g}function _f(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ge(new ko({eb:d})):new Ge(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yf(){}t=yf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Lo(){}Lo.prototype.g=function(a,h){return new qt(a,h)};function qt(a,h){ie.call(this),this.g=new af(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!$(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!$(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new is(this)}_(qt,ie),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){jc(this.g)},qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=lt(a),a=d);h.i.push(new SE(h.Ya++,a)),h.G==3&&Vo(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,jc(this.g),delete this.g,qt.aa.N.call(this)};function Ef(a){Oc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}_(Ef,Oc);function vf(){Dc.call(this),this.status=1}_(vf,Dc);function is(a){this.g=a}_(is,yf),is.prototype.ua=function(){ye(this.g,"a")},is.prototype.ta=function(a){ye(this.g,new Ef(a))},is.prototype.sa=function(a){ye(this.g,new vf)},is.prototype.ra=function(){ye(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,b_=function(){return new Lo},I_=function(){return Io()},T_=Dr,ql={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,sa=bo,xh.COMPLETE="complete",w_=xh,kh.EventType=ei,ei.OPEN="a",ei.CLOSE="b",ei.ERROR="c",ei.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Ei=kh,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,v_=Ge}).apply(typeof jo<"u"?jo:typeof self<"u"?self:typeof window<"u"?window:{});const Kd="@firebase/firestore",Gd="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Vu("@firebase/firestore");function us(){return Qr.logLevel}function ee(t,...e){if(Qr.logLevel<=we.DEBUG){const n=e.map(Wu);Qr.debug(`Firestore (${zs}): ${t}`,...n)}}function zn(t,...e){if(Qr.logLevel<=we.ERROR){const n=e.map(Wu);Qr.error(`Firestore (${zs}): ${t}`,...n)}}function Vs(t,...e){if(Qr.logLevel<=we.WARN){const n=e.map(Wu);Qr.warn(`Firestore (${zs}): ${t}`,...n)}}function Wu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,A_(t,r,n)}function A_(t,e,n){let r=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw zn(r),new Error(r)}function Ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||A_(e,s,r)}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class xS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LS{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _r,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string",31837,{l:r}),new R_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class MS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class FS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new MS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class US{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Qd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=BS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Hl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return fl(s)===fl(i)?Te(s,i):fl(s)?1:-1}return Te(t.length,e.length)}const $S=55296,jS=57343;function fl(t){const e=t.charCodeAt(0);return e>=$S&&e<=jS}function xs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=_n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),s=_n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?_n.extractNumericId(e).compare(_n.extractNumericId(n)):Hl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gr.fromString(e.substring(4,e.length-2))}}class $e extends _n{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const qS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends _n{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return qS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jd}static keyField(){return new dt([Jd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se($e.fromString(e))}static fromName(e){return new se($e.fromString(e).popFirst(5))}static empty(){return new se($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new $e(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t,e,n){if(!n)throw new X(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HS(t,e,n,r){if(e===!0&&r===!0)throw new X(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yd(t){if(!se.isDocumentKey(t))throw new X(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xd(t){if(se.isDocumentKey(t))throw new X(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function P_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cc(t);throw new X(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){const n={typeString:t};return e&&(n.value=e),n}function ho(t,e){if(!P_(t))throw new X(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=-62135596800,ep=1e6;class He{static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ep);return new He(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zd)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ep}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:He._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ho(e,He._jsonSchema))return new He(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}He._jsonSchemaVersion="firestore/timestamp/1.0",He._jsonSchema={type:et("string",He._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new He(0,0))}static max(){return new de(new He(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=-1;function zS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new wr(s,se.empty(),e)}function WS(t){return new wr(t.readTime,t.key,Gi)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(de.min(),se.empty(),Gi)}static max(){return new wr(de.max(),se.empty(),Gi)}}function KS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==GS)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function JS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=-1;function uc(t){return t==null}function Ca(t){return t===0&&1/t==-1/0}function YS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="";function XS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tp(e)),e=ZS(t.get(n),e);return tp(e)}function ZS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case C_:n+="";break;default:n+=i}}return n}function tp(t){return t+C_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function k_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qo(this.root,e,this.comparator,!0)}}class qo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rp(this.data.getIterator())}getIteratorFrom(e){return new rp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class rp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new st(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new N_("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const eP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(Ve(!!t,39018),typeof t=="string"){let e=0;const n=eP.exec(t);if(Ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="server_timestamp",D_="__type__",V_="__previous_value__",x_="__local_write_time__";function Qu(t){return(t?.mapValue?.fields||{})[D_]?.stringValue===O_}function hc(t){const e=t.mapValue.fields[V_];return Qu(e)?hc(e):e}function Qi(t){const e=Tr(t.mapValue.fields[x_].timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const ka="(default)";class Ji{constructor(e,n){this.projectId=e,this.database=n||ka}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database===ka}isEqual(e){return e instanceof Ji&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="__type__",nP="__max__",Ho={mapValue:{}},M_="__vector__",Na="value";function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qu(t)?4:sP(t)?9007199254740991:rP(t)?10:11:ce(28295,{value:t})}function Cn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qi(t).isEqual(Qi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),c=Tr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),c=Ye(i.doubleValue);return o===c?Ca(o)===Ca(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(np(o)!==np(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Cn(o[l],c[l])))return!1;return!0}(t,e);default:return ce(52216,{left:t})}}function Yi(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ye(i.integerValue||i.doubleValue),l=Ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return sp(t.timestampValue,e.timestampValue);case 4:return sp(Qi(t),Qi(e));case 5:return Hl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Ir(i),l=Ir(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Te(c[u],l[u]);if(f!==0)return f}return Te(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Te(Ye(i.latitude),Ye(o.latitude));return c!==0?c:Te(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ip(t.arrayValue,e.arrayValue);case 10:return function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Na]?.arrayValue,f=l[Na]?.arrayValue,p=Te(u?.values?.length||0,f?.values?.length||0);return p!==0?p:ip(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ho.mapValue&&o===Ho.mapValue)return 0;if(i===Ho.mapValue)return 1;if(o===Ho.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Hl(l[p],f[p]);if(m!==0)return m;const y=Ls(c[l[p]],u[f[p]]);if(y!==0)return y}return Te(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function sp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=Tr(t),r=Tr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function ip(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ls(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function Ms(t){return zl(t)}function zl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${zl(n.fields[o])}`;return s+"}"}(t.mapValue):ce(61005,{value:t})}function ia(t){switch(br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hc(t);return e?16+ia(e):16;case 5:return 2*t.stringValue.length;case 6:return Ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ia(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return kr(r.fields,(i,o)=>{s+=i.length+ia(o)}),s}(t.mapValue);default:throw ce(13486,{value:t})}}function op(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wl(t){return!!t&&"integerValue"in t}function Ju(t){return!!t&&"arrayValue"in t}function ap(t){return!!t&&"nullValue"in t}function cp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function rP(t){return(t?.mapValue?.fields||{})[L_]?.stringValue===M_}function Di(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Di(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Di(t.arrayValue.values[n]);return e}return{...t}}function sP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===nP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Di(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Di(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(Di(this.value))}}function F_(t){const e=[];return kr(t.fields,(n,r)=>{const s=new dt([n]);if(oa(r)){const i=F_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Tt(e,0,de.min(),de.min(),de.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,de.min(),de.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,de.min(),de.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.position=e,this.inclusive=n}}function lp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function up(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function iP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{}class Ze extends U_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aP(e,n,r):n==="array-contains"?new uP(e,r):n==="in"?new hP(e,r):n==="not-in"?new fP(e,r):n==="array-contains-any"?new dP(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cP(e,r):new lP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ls(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends U_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new fn(e,n)}matches(e){return B_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function B_(t){return t.op==="and"}function $_(t){return oP(t)&&B_(t)}function oP(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function Kl(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if($_(t))return t.filters.map(e=>Kl(e)).join(",");{const e=t.filters.map(n=>Kl(n)).join(",");return`${t.op}(${e})`}}function j_(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&j_(o,s.filters[c]),!0):!1}(t,e):void ce(19439)}function q_(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(q_).join(" ,")+"}"}(t):"Filter"}class aP extends Ze{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class cP extends Ze{constructor(e,n){super(e,"in",n),this.keys=H_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lP extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=H_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function H_(t,e){return(e.arrayValue?.values||[]).map(n=>se.fromName(n.referenceValue))}class uP extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ju(n)&&Yi(n.arrayValue,this.value)}}class hP extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yi(this.value.arrayValue,n)}}class fP extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Yi(this.value.arrayValue,n)}}class dP extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ju(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function hp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new pP(t,e,n,r,s,i,o)}function Yu(t){const e=me(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.Te=n}return e.Te}function Xu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!j_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!up(t.startAt,e.startAt)&&up(t.endAt,e.endAt)}function Gl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mP(t,e,n,r,s,i,o,c){return new Gs(t,e,n,r,s,i,o,c)}function z_(t){return new Gs(t)}function fp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function W_(t){return t.collectionGroup!==null}function Vi(t){const e=me(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new st(dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Xi(i,r))}),n.has(dt.keyField().canonicalString())||e.Ie.push(new Xi(dt.keyField(),r))}return e.Ie}function In(t){const e=me(t);return e.Ee||(e.Ee=gP(e,Vi(t))),e.Ee}function gP(t,e){if(t.limitType==="F")return hp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xi(s.field,i)});const n=t.endAt?new Oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Oa(t.startAt.position,t.startAt.inclusive):null;return hp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ql(t,e){const n=t.filters.concat([e]);return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Da(t,e,n){return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fc(t,e){return Xu(In(t),In(e))&&t.limitType===e.limitType}function K_(t){return`${Yu(In(t))}|lt:${t.limitType}`}function hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>q_(s)).join(", ")}]`),uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=lp(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Vi(r),s)||r.endAt&&!function(o,c,l){const u=lp(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Vi(r),s))}(t,e)}function _P(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function G_(t){return(e,n)=>{let r=!1;for(const s of Vi(t)){const i=yP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yP(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ls(l,u):ce(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return k_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=new Ke(se.comparator);function Kn(){return EP}const Q_=new Ke(se.comparator);function vi(...t){let e=Q_;for(const n of t)e=e.insert(n.key,n);return e}function J_(t){let e=Q_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return xi()}function Y_(){return xi()}function xi(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const vP=new Ke(se.comparator),wP=new st(se.comparator);function Ie(...t){let e=wP;for(const n of t)e=e.add(n);return e}const TP=new st(Te);function IP(){return TP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ca(e)?"-0":e}}function X_(t){return{integerValue:""+t}}function bP(t,e){return YS(e)?X_(e):Zu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this._=void 0}}function AP(t,e,n){return t instanceof Va?function(s,i){const o={fields:{[D_]:{stringValue:O_},[x_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Qu(i)&&(i=hc(i)),i&&(o.fields[V_]=i),{mapValue:o}}(n,e):t instanceof Zi?ey(t,e):t instanceof eo?ty(t,e):function(s,i){const o=Z_(s,i),c=dp(o)+dp(s.Ae);return Wl(o)&&Wl(s.Ae)?X_(c):Zu(s.serializer,c)}(t,e)}function RP(t,e,n){return t instanceof Zi?ey(t,e):t instanceof eo?ty(t,e):n}function Z_(t,e){return t instanceof xa?function(r){return Wl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Va extends pc{}class Zi extends pc{constructor(e){super(),this.elements=e}}function ey(t,e){const n=ny(e);for(const r of t.elements)n.some(s=>Cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends pc{constructor(e){super(),this.elements=e}}function ty(t,e){let n=ny(e);for(const r of t.elements)n=n.filter(s=>!Cn(s,r));return{arrayValue:{values:n}}}class xa extends pc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function dp(t){return Ye(t.integerValue||t.doubleValue)}function ny(t){return Ju(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function SP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?xs(r.elements,s.elements,Cn):r instanceof xa&&s instanceof xa?Cn(r.Ae,s.Ae):r instanceof Va&&s instanceof Va}(t.transform,e.transform)}class PP{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function ry(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eh(t.key,nn.none()):new fo(t.key,t.data,nn.none());{const n=t.data,r=Lt.empty();let s=new st(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Nr(t.key,r,new Kt(s.toArray()),nn.none())}}function CP(t,e,n){t instanceof fo?function(s,i,o){const c=s.value.clone(),l=mp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(s,i,o){if(!aa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=mp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(sy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Li(t,e,n,r){return t instanceof fo?function(i,o,c,l){if(!aa(i.precondition,o))return c;const u=i.value.clone(),f=gp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(i,o,c,l){if(!aa(i.precondition,o))return c;const u=gp(i.fieldTransforms,l,o),f=o.data;return f.setAll(sy(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return aa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function kP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Z_(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function pp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&xs(r,s,(i,o)=>SP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends mc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nr extends mc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mp(t,e,n){const r=new Map;Ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,RP(o,c,n[s]))}return r}function gp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,AP(i,o,e))}return r}class eh extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NP extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&CP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Li(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Li(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Y_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=ry(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>pp(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>pp(n,r))}}class th{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return vP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new th(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,Ae;function xP(t){switch(t){case F.OK:return ce(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function iy(t){if(t===void 0)return zn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Xe.OK:return F.OK;case Xe.CANCELLED:return F.CANCELLED;case Xe.UNKNOWN:return F.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return F.INTERNAL;case Xe.UNAVAILABLE:return F.UNAVAILABLE;case Xe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Xe.NOT_FOUND:return F.NOT_FOUND;case Xe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Xe.ABORTED:return F.ABORTED;case Xe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Xe.DATA_LOSS:return F.DATA_LOSS;default:return ce(39323,{code:t})}}(Ae=Xe||(Xe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=new gr([4294967295,4294967295],0);function _p(t){const e=LP().encode(t),n=new E_;return n.update(e),new Uint8Array(n.digest())}function yp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gr([n,r],0),new gr([s,i],0)]}class nh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wi(`Invalid padding: ${n}`);if(r<0)throw new wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new wi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=gr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(gr.fromNumber(r)));return s.compare(MP)===1&&(s=new gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=_p(e),[r,s]=yp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=_p(e),[r,s]=yp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gc(de.min(),s,new Ke(Te),Kn(),Ie())}}class po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new po(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class oy{constructor(e,n){this.targetId=e,this.Ce=n}}class ay{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ep{constructor(){this.ve=0,this.Fe=vp(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),n=Ie(),r=Ie();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}}),new po(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=vp()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class FP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kn(),this.Je=zo(),this.He=zo(),this.Ye=new Ke(Te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Gl(i))if(r===0){const o=new se(i.path);this.et(n,o,Tt.newNoDocument(o,de.min()))}else Ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Ir(r).toUint8Array()}catch(l){if(l instanceof N_)return Vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new nh(o,s,i)}catch(l){return Vs(l instanceof wi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Gl(c.target)){const l=new se(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Tt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ie();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new gc(e,n,this.Ye,this.je,r);return this.je=Kn(),this.Je=zo(),this.He=zo(),this.Ye=new Ke(Te),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ep,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new st(Te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new st(Te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ep),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function zo(){return new Ke(se.comparator)}function vp(){return new Ke(se.comparator)}const UP={asc:"ASCENDING",desc:"DESCENDING"},BP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$P={and:"AND",or:"OR"};class jP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jl(t,e){return t.useProto3Json||uc(e)?e:{value:e}}function La(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qP(t,e){return La(t,e.toTimestamp())}function bn(t){return Ve(!!t,49232),de.fromTimestamp(function(n){const r=Tr(n);return new He(r.seconds,r.nanos)}(t))}function rh(t,e){return Yl(t,e).canonicalString()}function Yl(t,e){const n=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ly(t){const e=$e.fromString(t);return Ve(py(e),10190,{key:e.toString()}),e}function Xl(t,e){return rh(t.databaseId,e.path)}function dl(t,e){const n=ly(e);if(n.get(1)!==t.databaseId.projectId)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(hy(n))}function uy(t,e){return rh(t.databaseId,e)}function HP(t){const e=ly(t);return e.length===4?$e.emptyPath():hy(e)}function Zl(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hy(t){return Ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function wp(t,e,n){return{name:Xl(t,e),fields:n.value.mapValue.fields}}function zP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ve(f===void 0||typeof f=="string",58123),pt.fromBase64String(f||"")):(Ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),pt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?F.UNKNOWN:iy(u.code);return new X(f,u.message||"")}(o);n=new ay(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dl(t,r.document.name),i=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):de.min(),c=new Lt({mapValue:{fields:r.document.fields}}),l=Tt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ca(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dl(t,r.document),i=r.readTime?bn(r.readTime):de.min(),o=Tt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ca([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dl(t,r.document),i=r.removedTargetIds||[];n=new ca([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new VP(s,i),c=r.targetId;n=new oy(c,o)}}return n}function WP(t,e){let n;if(e instanceof fo)n={update:wp(t,e.key,e.value)};else if(e instanceof eh)n={delete:Xl(t,e.key)};else if(e instanceof Nr)n={update:wp(t,e.key,e.data),updateMask:tC(e.fieldMask)};else{if(!(e instanceof NP))return ce(16599,{Vt:e.type});n={verify:Xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Va)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof xa)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)}(t,e.precondition)),n}function KP(t,e){return t&&t.length>0?(Ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?bn(s.updateTime):bn(i);return o.isEqual(de.min())&&(o=bn(i)),new PP(o,s.transformResults||[])}(n,e))):[]}function GP(t,e){return{documents:[uy(t,e.path)]}}function QP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=uy(t,s);const i=function(u){if(u.length!==0)return dy(fn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:fs(m.field),direction:XP(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Jl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function JP(t){let e=HP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=fy(p);return m instanceof fn&&$_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(_){return new Xi(ds(_.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,uc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,y=p.values||[];return new Oa(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new Oa(y,m)}(n.endAt)),mP(e,s,o,i,c,"F",l,u)}function YP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ds(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ds(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>fy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}}(n.compositeFilter.op))}(t):ce(30097,{filter:t})}function XP(t){return UP[t]}function ZP(t){return BP[t]}function eC(t){return $P[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ds(t){return dt.fromServerFormat(t.fieldPath)}function dy(t){return t instanceof Ze?function(n){if(n.op==="=="){if(cp(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(ap(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cp(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(ap(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:ZP(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>dy(s));return r.length===1?r[0]:{compositeFilter:{op:eC(n.op),filters:r}}}(t):ce(54877,{filter:t})}function tC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function py(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,s,i=de.min(),o=de.min(),c=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.yt=e}}function rC(t){const e=JP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Da(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.Cn=new iC}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(wr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class iC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},my=41943040;class xt{static withCacheSize(e){return new xt(e,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(my,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Fs(0)}static cr(){return new Fs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="LruGarbageCollector",oC=1048576;function bp([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class aC{constructor(e){this.Ir=e,this.buffer=new st(bp),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();bp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(Ip,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ks(n)?ee(Ip,"Ignoring IndexedDB error during garbage collection: ",n):await Ws(n)}await this.Vr(3e5)})}}class lC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(lc.ce);const r=new aC(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Tp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tp):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),us()<=we.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function uC(t,e){return new lC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Li(r.mutation,s,Kt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=$r();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=vi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Kn();const o=xi(),c=function(){return xi()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Nr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Li(f.mutation,u,f.mutation.getFieldMask(),He.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>c.set(u,new fC(f,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,n){const r=xi();let s=new Ke((o,c)=>o-c),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Kt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=Y_();f.forEach(m=>{if(!i.has(m)){const y=ry(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):W_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve($r());let c=Gi,l=i;return o.next(u=>B.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ie())).next(f=>({batchId:c,changes:J_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=vi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=vi();return this.indexManager.getCollectionParents(e,i).next(c=>B.forEach(c,l=>{const u=function(p,m){return new Gs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let c=vi();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Li(f.mutation,u,Kt.empty(),He.now()),dc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:bn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:rC(s.bundledQuery),readTime:bn(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.overlays=new Ke(se.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=$r(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=$r(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=$r(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return B.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DP(n,r));let i=this.qr.get(n);i===void 0&&(i=Ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.Qr=new st(it.$r),this.Ur=new st(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new it(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new se(new $e([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new se(new $e([])),r=new it(n,e),s=new it(n,e+1);let i=Ie();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return se.comparator(e.key,n.key)||Te(e.Yr,n.Yr)}static Kr(e,n){return Te(e.Yr,n.Yr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new st(it.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OP(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new it(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Gu:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(Te);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new it(new se(i),0);let c=new st(Te);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)},o),B.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new it(n,0),s=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.ri=e,this.docs=function(){return new Ke(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,c=new se(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||KS(WS(f),r)<=0||(s.has(f.key)||dc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EC(this)}getSize(e){return B.resolve(this.size)}}class EC extends hC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.persistence=e,this.si=new es(n=>Yu(n),Xu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.oi=0,this._i=new sh,this.targetCount=0,this.ai=Fs.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n){this.ui={},this.overlays={},this.ci=new lc(0),this.li=!1,this.li=!0,this.hi=new gC,this.referenceDelegate=e(this),this.Pi=new vC(this),this.indexManager=new sC,this.remoteDocumentCache=function(s){return new yC(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new nC(n),this.Ii=new pC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new _C(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new wC(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class wC extends QS{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.Ri=new sh,this.Vi=null}static mi(e){return new ih(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const s=se.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ma{constructor(e,n){this.persistence=e,this.pi=new es(r=>XS(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uC(this,n)}static mi(e,n){return new Ma(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ia(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new oh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return FI()?8:JS(Pt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TC;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(us()<=we.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(us()<=we.DEBUG&&ee("QueryEngine","Query:",hs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(us()<=we.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):B.resolve())}ys(e,n){if(fp(n))return B.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Da(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Da(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,s){return fp(n)||s.isEqual(de.min())?B.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(us()<=we.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hs(n)),this.vs(e,o,n,zS(s,Gi)).next(c=>c))})}Ds(e,n){let r=new st(G_(e));return n.forEach((s,i)=>{dc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return us()<=we.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",hs(n)),this.ps.getDocumentsMatchingQuery(e,n,wr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="LocalStore",bC=3e8;class AC{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ke(Te),this.xs=new es(i=>Yu(i),Xu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function RC(t,e,n,r){return new AC(t,e,n,r)}async function _y(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ie();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function SC(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let y=B.resolve();return m.forEach(_=>{y=y.next(()=>f.getEntry(l,_)).next(S=>{const P=u.docVersions.get(_);Ve(P!==null,48541),S.version.compareTo(P)<0&&(p.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),f.addEntry(S)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function yy(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function PC(t,e){const n=me(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(pt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(S,P,x){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=bC?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,y,f)&&c.push(n.Pi.updateTargetData(i,y))});let l=Kn(),u=Ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(CC(i,o,e.documentUpdates).next(f=>{l=f.ks,u=f.qs})),!r.isEqual(de.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return B.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ms=s,i))}function CC(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ee(ah,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function kC(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Gu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NC(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function eu(t,e,n){const r=me(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ks(o))throw o;ee(ah,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ap(t,e,n){const r=me(t);let s=de.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=me(l),m=p.xs.get(f);return m!==void 0?B.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)}(r,o,In(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ie())).next(c=>(OC(r,_P(e),c),{documents:c,Qs:i})))}function OC(t,e,n){let r=t.Os.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Rp{constructor(){this.activeTargetIds=IP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DC{constructor(){this.Mo=new Rp,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Rp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="ConnectivityMonitor";class Pp{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(Sp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(Sp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo=null;function tu(){return Wo===null?Wo=function(){return 268435456+Math.round(2147483648*Math.random())}():Wo++,"0x"+Wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="RestConnection",xC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ka?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=tu(),c=this.zo(e,n.toUriEncodedString());ee(pl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=js(u);return this.Jo(e,c,l,r,f).then(p=>(ee(pl,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Vs(pl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=xC[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class FC extends LC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=tu();return new Promise((c,l)=>{const u=new v_;u.setWithCredentials(!0),u.listenOnce(w_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case sa.NO_ERROR:const p=u.getResponseJson();ee(Et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case sa.TIMEOUT:ee(Et,`RPC '${e}' ${o} timed out`),l(new X(F.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const m=u.getStatus();if(ee(Et,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const _=y?.error;if(_&&_.status&&_.message){const S=function(x){const $=x.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf($)>=0?$:F.UNKNOWN}(_.status);l(new X(S,_.message))}else l(new X(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(F.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ee(Et,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);ee(Et,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=tu(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=b_(),c=I_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");ee(Et,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,y=!1;const _=new MC({Yo:P=>{y?ee(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(ee(Et,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(Et,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Zo:()=>p.close()}),S=(P,x,$)=>{P.listen(x,q=>{try{$(q)}catch(z){setTimeout(()=>{throw z},0)}})};return S(p,Ei.EventType.OPEN,()=>{y||(ee(Et,`RPC '${e}' stream ${s} transport opened.`),_.o_())}),S(p,Ei.EventType.CLOSE,()=>{y||(y=!0,ee(Et,`RPC '${e}' stream ${s} transport closed`),_.a_(),this.E_(p))}),S(p,Ei.EventType.ERROR,P=>{y||(y=!0,Vs(Et,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),_.a_(new X(F.UNAVAILABLE,"The operation could not be completed")))}),S(p,Ei.EventType.MESSAGE,P=>{if(!y){const x=P.data[0];Ve(!!x,16349);const $=x,q=$?.error||$[0]?.error;if(q){ee(Et,`RPC '${e}' stream ${s} received error:`,q);const z=q.status;let oe=function(v){const I=Xe[v];if(I!==void 0)return iy(I)}(z),_e=q.message;oe===void 0&&(oe=F.INTERNAL,_e="Unknown error status: "+z+" with message "+q.message),y=!0,_.a_(new X(oe,_e)),p.close()}else ee(Et,`RPC '${e}' stream ${s} received:`,x),_.u_(x)}}),S(c,T_.STAT_EVENT,P=>{P.stat===ql.PROXY?ee(Et,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===ql.NOPROXY&&ee(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.__()},0),_}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function ml(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t){return new jP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="PersistentStream";class vy{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ey(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new X(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ee(Cp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ee(Cp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UC extends vy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=zP(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?bn(o.readTime):de.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Zl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Gl(l)?{documents:GP(i,l)}:{query:QP(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=cy(i,o.resumeToken);const u=Jl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){c.readTime=La(i,o.snapshotVersion.toTimestamp());const u=Jl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=YP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Zl(this.serializer),n.removeTarget=e,this.q_(n)}}class BC extends vy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=KP(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Zl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>WP(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{}class jC extends $C{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Yl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(F.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Yl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class qC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zn(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="RemoteStore";class HC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ts(this)&&(ee(Jr,"Restarting streams for network reachability change."),await async function(l){const u=me(l);u.Ea.add(4),await mo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await yc(u)}(this))})}),this.Ra=new qC(r,s)}}async function yc(t){if(ts(t))for(const e of t.da)await e(!0)}async function mo(t){for(const e of t.da)await e(!1)}function wy(t,e){const n=me(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),hh(n)?uh(n):Qs(n).O_()&&lh(n,e))}function ch(t,e){const n=me(t),r=Qs(n);n.Ia.delete(e),r.O_()&&Ty(n,e),n.Ia.size===0&&(r.O_()?r.L_():ts(n)&&n.Ra.set("Unknown"))}function lh(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).Y_(e)}function Ty(t,e){t.Va.Ue(e),Qs(t).Z_(e)}function uh(t){t.Va=new FP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.Ra.ua()}function hh(t){return ts(t)&&!Qs(t).x_()&&t.Ia.size>0}function ts(t){return me(t).Ea.size===0}function Iy(t){t.Va=void 0}async function zC(t){t.Ra.set("Online")}async function WC(t){t.Ia.forEach((e,n)=>{lh(t,e)})}async function KC(t,e){Iy(t),hh(t)?(t.Ra.ha(e),uh(t)):t.Ra.set("Unknown")}async function GC(t,e,n){if(t.Ra.set("Online"),e instanceof ay&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){ee(Jr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fa(t,r)}else if(e instanceof ca?t.Va.Ze(e):e instanceof oy?t.Va.st(e):t.Va.tt(e),!n.isEqual(de.min()))try{const r=await yy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(pt.EMPTY_BYTE_STRING,f.snapshotVersion)),Ty(i,l);const p=new ur(f.target,l,u,f.sequenceNumber);lh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ee(Jr,"Failed to raise snapshot:",r),await Fa(t,r)}}async function Fa(t,e,n){if(!Ks(e))throw e;t.Ea.add(1),await mo(t),t.Ra.set("Offline"),n||(n=()=>yy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Jr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await yc(t)})}function by(t,e){return e().catch(n=>Fa(t,n,e))}async function Ec(t){const e=me(t),n=Ar(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gu;for(;QC(e);)try{const s=await kC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,JC(e,s)}catch(s){await Fa(e,s)}Ay(e)&&Ry(e)}function QC(t){return ts(t)&&t.Ta.length<10}function JC(t,e){t.Ta.push(e);const n=Ar(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Ay(t){return ts(t)&&!Ar(t).x_()&&t.Ta.length>0}function Ry(t){Ar(t).start()}async function YC(t){Ar(t).ra()}async function XC(t){const e=Ar(t);for(const n of t.Ta)e.ea(n.mutations)}async function ZC(t,e,n){const r=t.Ta.shift(),s=th.from(r,e,n);await by(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ec(t)}async function e0(t,e){e&&Ar(t).X_&&await async function(r,s){if(function(o){return xP(o)&&o!==F.ABORTED}(s.code)){const i=r.Ta.shift();Ar(r).B_(),await by(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ec(r)}}(t,e),Ay(t)&&Ry(t)}async function kp(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ee(Jr,"RemoteStore received new credentials");const r=ts(n);n.Ea.add(3),await mo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await yc(n)}async function t0(t,e){const n=me(t);e?(n.Ea.delete(2),await yc(n)):e||(n.Ea.add(2),await mo(n),n.Ra.set("Unknown"))}function Qs(t){return t.ma||(t.ma=function(n,r,s){const i=me(n);return i.sa(),new UC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:zC.bind(null,t),t_:WC.bind(null,t),r_:KC.bind(null,t),H_:GC.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),hh(t)?uh(t):t.Ra.set("Unknown")):(await t.ma.stop(),Iy(t))})),t.ma}function Ar(t){return t.fa||(t.fa=function(n,r,s){const i=me(n);return i.sa(),new BC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:YC.bind(null,t),r_:e0.bind(null,t),ta:XC.bind(null,t),na:ZC.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ec(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(Jr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new fh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dh(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Ks(t))return new X(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static emptySet(e){return new bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=vi(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.ga=new Ke(se.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Us{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Us(e,n,bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class r0{constructor(){this.queries=Op(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=Op(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new X(F.ABORTED,"Firestore shutting down"))}}function Op(){return new es(t=>K_(t),fc)}async function s0(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new n0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=dh(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ph(n)}async function i0(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function o0(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&ph(n)}function a0(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ph(t){t.Ca.forEach(e=>{e.next()})}var nu,Dp;(Dp=nu||(nu={})).Ma="default",Dp.Cache="cache";class c0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==nu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.key=e}}class Py{constructor(e){this.key=e}}class l0{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=G_(e),this.tu=new bs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Np,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),y=dc(this.query,p)?p:null,_=!!m&&this.mutatedKeys.has(m.key),S=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let P=!1;m&&y?m.data.isEqual(y.data)?_!==S&&(r.track({type:3,doc:y}),P=!0):this.su(m,y)||(r.track({type:2,doc:y}),P=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),P=!0):m&&!y&&(r.track({type:1,doc:m}),P=!0,(l||u)&&(c=!0)),P&&(y?(o=o.add(y),i=S?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(y,_){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:P})}};return S(y)-S(_)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Us(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Np,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Py(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Sy(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Us.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const mh="SyncEngine";class u0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class h0{constructor(e){this.key=e,this.hu=!1}}class f0{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new es(c=>K_(c),fc),this.Iu=new Map,this.Eu=new Set,this.du=new Ke(se.comparator),this.Au=new Map,this.Ru=new sh,this.Vu={},this.mu=new Map,this.fu=Fs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function d0(t,e,n=!0){const r=Vy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Cy(r,e,n,!0),s}async function p0(t,e){const n=Vy(t);await Cy(n,e,!0,!1)}async function Cy(t,e,n,r){const s=await NC(t.localStore,In(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await m0(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&wy(t.remoteStore,s),c}async function m0(t,e,n,r,s){t.pu=(p,m,y)=>async function(S,P,x,$){let q=P.view.ru(x);q.Cs&&(q=await Ap(S.localStore,P.query,!1).then(({documents:b})=>P.view.ru(b,q)));const z=$&&$.targetChanges.get(P.targetId),oe=$&&$.targetMismatches.get(P.targetId)!=null,_e=P.view.applyChanges(q,S.isPrimaryClient,z,oe);return xp(S,P.targetId,_e.au),_e.snapshot}(t,p,m,y);const i=await Ap(t.localStore,e,!0),o=new l0(e,i.Qs),c=o.ru(i.documents),l=po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);xp(t,n,u.au);const f=new u0(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function g0(t,e,n){const r=me(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!fc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await eu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ch(r.remoteStore,s.targetId),ru(r,s.targetId)}).catch(Ws)):(ru(r,s.targetId),await eu(r.localStore,s.targetId,!0))}async function _0(t,e){const n=me(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ch(n.remoteStore,r.targetId))}async function y0(t,e,n){const r=A0(t);try{const s=await function(o,c){const l=me(o),u=He.now(),f=c.reduce((y,_)=>y.add(_.key),Ie());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let _=Kn(),S=Ie();return l.Ns.getEntries(y,f).next(P=>{_=P,_.forEach((x,$)=>{$.isValidDocument()||(S=S.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,_)).next(P=>{p=P;const x=[];for(const $ of c){const q=kP($,p.get($.key).overlayedDocument);q!=null&&x.push(new Nr($.key,q,F_(q.value.mapValue),nn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,x,c)}).next(P=>{m=P;const x=P.applyToLocalDocumentSet(p,S);return l.documentOverlayCache.saveOverlays(y,P.batchId,x)})}).then(()=>({batchId:m.batchId,changes:J_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ke(Te)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await go(r,s.changes),await Ec(r.remoteStore)}catch(s){const i=dh(s,"Failed to persist write");n.reject(i)}}async function ky(t,e){const n=me(t);try{const r=await PC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ve(o.hu,14607):s.removedDocuments.size>0&&(Ve(o.hu,42227),o.hu=!1))}),await go(n,r,e)}catch(r){await Ws(r)}}function Vp(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=me(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)}),u&&ph(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function E0(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ke(se.comparator);o=o.insert(i,Tt.newNoDocument(i,de.min()));const c=Ie().add(i),l=new gc(de.min(),new Map,new Ke(Te),o,c);await ky(r,l),r.du=r.du.remove(i),r.Au.delete(e),gh(r)}else await eu(r.localStore,e,!1).then(()=>ru(r,e,n)).catch(Ws)}async function v0(t,e){const n=me(t),r=e.batch.batchId;try{const s=await SC(n.localStore,e);Oy(n,r,null),Ny(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await go(n,s)}catch(s){await Ws(s)}}async function w0(t,e,n){const r=me(t);try{const s=await function(o,c){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Ve(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);Oy(r,e,n),Ny(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await go(r,s)}catch(s){await Ws(s)}}function Ny(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Oy(t,e,n){const r=me(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ru(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Dy(t,r)})}function Dy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ch(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),gh(t))}function xp(t,e,n){for(const r of n)r instanceof Sy?(t.Ru.addReference(r.key,e),T0(t,r)):r instanceof Py?(ee(mh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Dy(t,r.key)):ce(19791,{wu:r})}function T0(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(mh,"New document in limbo: "+n),t.Eu.add(r),gh(t))}function gh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new se($e.fromString(e)),r=t.fu.next();t.Au.set(r,new h0(n)),t.du=t.du.insert(n,r),wy(t.remoteStore,new ur(In(z_(n.path)),r,"TargetPurposeLimboResolution",lc.ce))}}async function go(t,e,n){const r=me(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=oh.As(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const f=me(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(u,m=>B.forEach(m.Es,y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>B.forEach(m.ds,y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Ks(p))throw p;ee(ah,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.Ms.get(m),_=y.snapshotVersion,S=y.withLastLimboFreeSnapshotVersion(_);f.Ms=f.Ms.insert(m,S)}}}(r.localStore,i))}async function I0(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ee(mh,"User change. New user:",e.toKey());const r=await _y(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new X(F.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await go(n,r.Ls)}}function b0(t,e){const n=me(t),r=n.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let s=Ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Vy(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ky.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E0.bind(null,e),e.Pu.H_=o0.bind(null,e.eventManager),e.Pu.yu=a0.bind(null,e.eventManager),e}function A0(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=v0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=w0.bind(null,e),e}class Ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_c(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return RC(this.persistence,new IC,e.initialUser,this.serializer)}Cu(e){return new gy(ih.mi,this.serializer)}Du(e){return new DC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ua.provider={build:()=>new Ua};class R0 extends Ua{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ve(this.persistence.referenceDelegate instanceof Ma,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new gy(r=>Ma.mi(r,n),this.serializer)}}class su{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=I0.bind(null,this.syncEngine),await t0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new r0}()}createDatastore(e){const n=_c(e.databaseInfo.databaseId),r=function(i){return new FC(i)}(e.databaseInfo);return function(i,o,c,l){return new jC(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new HC(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Vp(this.syncEngine,n,0),function(){return Pp.v()?new Pp:new VC}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new f0(s,i,o,c,l,u);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=me(n);ee(Jr,"RemoteStore shutting down."),r.Ea.add(5),await mo(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}su.provider={build:()=>new su};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="FirestoreClient";class P0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Ku.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Rr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Rr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gl(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Rr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _y(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Lp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await C0(t);ee(Rr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>kp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>kp(e.remoteStore,s)),t._onlineComponents=e}async function C0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Rr,"Using user provided OfflineComponentProvider");try{await gl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await gl(t,new Ua)}}else ee(Rr,"Using default OfflineComponentProvider"),await gl(t,new R0(void 0));return t._offlineComponents}async function xy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Rr,"Using user provided OnlineComponentProvider"),await Lp(t,t._uninitializedComponentsProvider._online)):(ee(Rr,"Using default OnlineComponentProvider"),await Lp(t,new su))),t._onlineComponents}function k0(t){return xy(t).then(e=>e.syncEngine)}async function N0(t){const e=await xy(t),n=e.eventManager;return n.onListen=d0.bind(null,e.syncEngine),n.onUnlisten=g0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=p0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_0.bind(null,e.syncEngine),n}function O0(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new S0({next:m=>{f.Nu(),o.enqueueAndForget(()=>i0(i,p)),m.fromCache&&l.source==="server"?u.reject(new X(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new c0(c,f,{includeMetadataChanges:!0,qa:!0});return s0(i,p)}(await N0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firestore.googleapis.com",Fp=!0;class Up{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=My,this.ssl=Fp}else this.host=e.host,this.ssl=e.ssl??Fp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=my;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oC)throw new X(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ly(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Up({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Up(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new VS;switch(r.type){case"firstParty":return new FS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mp.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Mp.delete(n),r.terminate())}(this),Promise.resolve()}}function D0(t,e,n,r={}){t=Wn(t,vc);const s=js(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Og(`https://${c}`),Dg("Firestore",!0)),i.host!==My&&i.host!==c&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!zr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=vt.MOCK_USER;else{u=CI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new X(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new vt(p)}t._authCredentials=new xS(new R_(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Or(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ho(n,tt._jsonSchema))return new tt(e,r||null,new se($e.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:et("string",tt._jsonSchemaVersion),referencePath:et("string")};class yr extends Or{constructor(e,n,r){super(e,n,z_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new se(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function Ba(t,e,...n){if(t=ot(t),S_("collection","path",e),t instanceof vc){const r=$e.fromString(e,...n);return Xd(r),new yr(t,null,r)}{if(!(t instanceof tt||t instanceof yr))throw new X(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Xd(r),new yr(t.firestore,null,r)}}function to(t,e,...n){if(t=ot(t),arguments.length===1&&(e=Ku.newId()),S_("doc","path",e),t instanceof vc){const r=$e.fromString(e,...n);return Yd(r),new tt(t,null,new se(r))}{if(!(t instanceof tt||t instanceof yr))throw new X(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Yd(r),new tt(t.firestore,t instanceof yr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="AsyncQueue";class $p{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ey(this,"async_queue_retry"),this._c=()=>{const r=ml();r&&ee(Bp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ml();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new _r;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ks(e))throw e;ee(Bp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,zn("INTERNAL UNHANDLED ERROR: ",jp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=fh.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:jp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function jp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Js extends vc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new $p,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $p(e),this._firestoreClient=void 0,await e}}}function V0(t,e){const n=Lg(),r=ka,s=Lu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=SI("firestore");i&&D0(s,...i)}return s}function Fy(t){if(t._terminated)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||x0(t),t._firestoreClient}function x0(t){const e=t._freezeSettings(),n=function(s,i,o,c){return new tP(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ly(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new P0(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(pt.fromBase64String(e))}catch(n){throw new X(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new en(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:en._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ho(e,en._jsonSchema))return en.fromBase64String(e.bytes)}}en._jsonSchemaVersion="firestore/bytes/1.0",en._jsonSchema={type:et("string",en._jsonSchemaVersion),bytes:et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:An._jsonSchemaVersion}}static fromJSON(e){if(ho(e,An._jsonSchema))return new An(e.latitude,e.longitude)}}An._jsonSchemaVersion="firestore/geoPoint/1.0",An._jsonSchema={type:et("string",An._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ho(e,Rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Rn(e.vectorValues);throw new X(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Rn._jsonSchemaVersion="firestore/vectorValue/1.0",Rn._jsonSchema={type:et("string",Rn._jsonSchemaVersion),vectorValues:et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=/^__.*__$/;class M0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fo(e,this.data,n,this.fieldTransforms)}}class Uy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function By(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class yh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new yh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return $a(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(By(this.Ac)&&L0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class F0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_c(e)}Cc(e,n,r,s=!1){return new yh({Ac:e,methodName:n,Dc:r,path:dt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tc(t){const e=t._freezeSettings(),n=_c(t._databaseId);return new F0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $y(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Eh("Data must be an object, but it was:",o,r);const c=jy(r,o);let l,u;if(i.merge)l=new Kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=iu(e,p,n);if(!o.contains(m))throw new X(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Hy(f,m)||f.push(m)}l=new Kt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new M0(new Lt(c),l,u)}class Ic extends _h{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}function U0(t,e,n,r){const s=t.Cc(1,e,n);Eh("Data must be an object, but it was:",s,r);const i=[],o=Lt.empty();kr(r,(l,u)=>{const f=vh(e,l,n);u=ot(u);const p=s.yc(f);if(u instanceof Ic)i.push(f);else{const m=_o(u,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new Kt(i);return new Uy(o,c,s.fieldTransforms)}function B0(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[iu(e,r,n)],l=[s];if(i.length%2!=0)throw new X(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(iu(e,i[m])),l.push(i[m+1]);const u=[],f=Lt.empty();for(let m=c.length-1;m>=0;--m)if(!Hy(u,c[m])){const y=c[m];let _=l[m];_=ot(_);const S=o.yc(y);if(_ instanceof Ic)u.push(y);else{const P=_o(_,S);P!=null&&(u.push(y),f.set(y,P))}}const p=new Kt(u);return new Uy(f,p,o.fieldTransforms)}function $0(t,e,n,r=!1){return _o(n,t.Cc(r?4:3,e))}function _o(t,e){if(qy(t=ot(t)))return Eh("Unsupported field value:",e,t),jy(t,e);if(t instanceof _h)return function(r,s){if(!By(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=_o(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:La(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:La(s.serializer,i)}}if(r instanceof An)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof en)return{bytesValue:cy(s.serializer,r._byteString)};if(r instanceof tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Rn)return function(o,c){return{mapValue:{fields:{[L_]:{stringValue:M_},[Na]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return Zu(c.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${cc(r)}`)}(t,e)}function jy(t,e){const n={};return k_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(r,s)=>{const i=_o(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function qy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof An||t instanceof en||t instanceof tt||t instanceof _h||t instanceof Rn)}function Eh(t,e,n){if(!qy(n)||!P_(n)){const r=cc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function iu(t,e,n){if((e=ot(e))instanceof wc)return e._internalPath;if(typeof e=="string")return vh(t,e);throw $a("Field path arguments must be of type string or ",t,!1,void 0,n)}const j0=new RegExp("[~\\*/\\[\\]]");function vh(t,e,n){if(e.search(j0)>=0)throw $a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wc(...e.split("."))._internalPath}catch{throw $a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(F.INVALID_ARGUMENT,c+t+l)}function Hy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new q0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class q0 extends zy{data(){return super.data()}}function bc(t,e){return typeof e=="string"?vh(t,e):e instanceof wc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wh{}class Th extends wh{}function qp(t,e,...n){let r=[];e instanceof wh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Ih).length,c=i.filter(l=>l instanceof Ac).length;if(o>1||o>0&&c>0)throw new X(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ac extends Th{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ac(e,n,r)}_apply(e){const n=this._parse(e);return Wy(e._query,n),new Or(e.firestore,e.converter,Ql(e._query,n))}_parse(e){const n=Tc(e.firestore);return function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new X(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){zp(p,f);const _=[];for(const S of p)_.push(Hp(l,i,S));m={arrayValue:{values:_}}}else m=Hp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||zp(p,f),m=$0(c,o,p,f==="in"||f==="not-in");return Ze.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function z0(t,e,n){const r=e,s=bc("where",t);return Ac._create(s,r,n)}class Ih extends wh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ih(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Wy(o,l),o=Ql(o,l)}(e._query,n),new Or(e.firestore,e.converter,Ql(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bh extends Th{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new bh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new X(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new X(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xi(i,o)}(e._query,this._field,this._direction);return new Or(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Gs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function W0(t,e="asc"){const n=e,r=bc("orderBy",t);return bh._create(r,n)}class Ah extends Th{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ah(e,n,r)}_apply(e){return new Or(e.firestore,e.converter,Da(e._query,this._limit,this._limitType))}}function K0(t){return Ah._create("limit",t,"F")}function Hp(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new X(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!W_(e)&&n.indexOf("/")!==-1)throw new X(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!se.isDocumentKey(r))throw new X(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return op(t,new se(r))}if(n instanceof tt)return op(t,n._key);throw new X(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cc(n)}.`)}function zp(t,e){if(!Array.isArray(t)||t.length===0)throw new X(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class G0{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[Na].arrayValue?.values?.map(r=>Ye(r.doubleValue));return new Rn(n)}convertGeoPoint(e){return new An(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Ve(py(r),9688,{name:e});const s=new Ji(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class As extends zy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new la(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=As._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}As._jsonSchemaVersion="firestore/documentSnapshot/1.0",As._jsonSchema={type:et("string",As._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class la extends As{data(e={}){return super.data(e)}}class Rs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ko(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new la(this._firestore,this._userDataWriter,r.key,r,new Ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new la(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ko(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new la(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ko(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Q0(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ku.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Q0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}Rs._jsonSchemaVersion="firestore/querySnapshot/1.0",Rs._jsonSchema={type:et("string",Rs._jsonSchemaVersion),bundleSource:et("string","QuerySnapshot"),bundleName:et("string"),bundle:et("string")};class J0 extends G0{constructor(e){super(),this.firestore=e}convertBytes(e){return new en(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function ou(t){t=Wn(t,Or);const e=Wn(t.firestore,Js),n=Fy(e),r=new J0(e);return H0(t._query),O0(n,t._query).then(s=>new Rs(e,r,t,s))}function Gy(t,e,n){t=Wn(t,tt);const r=Wn(t.firestore,Js),s=Ky(t.converter,e,n);return Rc(r,[$y(Tc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,nn.none())])}function Y0(t,e,n,...r){t=Wn(t,tt);const s=Wn(t.firestore,Js),i=Tc(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof wc?B0(i,"updateDoc",t._key,e,n,r):U0(i,"updateDoc",t._key,e),Rc(s,[o.toMutation(t._key,nn.exists(!0))])}function X0(t){return Rc(Wn(t.firestore,Js),[new eh(t._key,nn.none())])}function Z0(t,e){const n=Wn(t.firestore,Js),r=to(t),s=Ky(t.converter,e);return Rc(n,[$y(Tc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function Rc(t,e){return function(r,s){const i=new _r;return r.asyncQueue.enqueueAndForget(async()=>y0(await k0(r),s,i)),i.promise}(Fy(t),e)}(function(e,n=!0){(function(s){zs=s})(qs),Ds(new Wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Js(new LS(r.getProvider("auth-internal")),new US(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),mr(Kd,Gd,e),mr(Kd,Gd,"esm2020")})();const e1={apiKey:"AIzaSyAzKHeZmP7E2Cgs0W5XLddcBcjJJxG1eXg",authDomain:"week7-yummy.firebaseapp.com",projectId:"week7-yummy",storageBucket:"week7-yummy.firebasestorage.app",messagingSenderId:"285861969452",appId:"1:285861969452:web:7e8aa5106a48cab5305b89"};Mu(e1);const hr=V0(),t1={setup(){const t=xe(null),e=xe(null),n=async()=>{try{const r=await ou(Ba(hr,"books")),s=[];r.forEach(i=>{s.push({id:i.id,...i.data()})}),t.value=s,e.value=null}catch(r){console.error("Error fetching books:",r),e.value=r.message,t.value=null}};return $s(()=>{n()}),{booksData:t,error:e,getAllBooks:n}}},n1={class:"all-books-api"},r1={class:"result-section"},s1={key:0,class:"count-display"},i1={key:1,class:"json-display"},o1={key:2,class:"error-message"};function a1(t,e,n,r,s,i){return he(),pe("div",n1,[e[1]||(e[1]=O("h1",null,"Get All Books API",-1)),O("button",{onClick:e[0]||(e[0]=(...o)=>r.getAllBooks&&r.getAllBooks(...o)),class:"get-books-button"},"Get All Books"),O("div",r1,[r.booksData!==null?(he(),pe("p",s1,"Total number of books: "+Be(r.booksData.length),1)):We("",!0),r.booksData!==null?(he(),pe("pre",i1,Be(JSON.stringify(r.booksData,null,2)),1)):We("",!0),r.error?(he(),pe("p",o1,Be(r.error),1)):We("",!0)])])}const Qy=Ut(t1,[["render",a1],["__scopeId","data-v-2f84f2e1"]]),c1={name:"App",components:{BHeader:NS,CountBookAPI:Qy},computed:{showHeader(){return this.$route.name!=="CountBookAPI"}}},l1={class:"main-container"},u1={key:0},h1={class:"main-box"};function f1(t,e,n,r,s,i){const o=Ps("BHeader"),c=Ps("router-view");return he(),pe("div",l1,[i.showHeader?(he(),pe("header",u1,[De(o)])):We("",!0),O("main",h1,[De(c)])])}const d1=Ut(c1,[["render",f1],["__scopeId","data-v-6694ab61"]]),au=xe(JSON.parse(localStorage.getItem("users")||"[]"));function p1(t){au.value.push(t),localStorage.setItem("users",JSON.stringify(au.value))}function m1(t,e){return au.value.find(n=>n.username===t&&n.password===e)}const g1={class:"container mt-5"},_1={class:"row"},y1={class:"col-md-8 offset-md-2"},E1={class:"row mb-3"},v1={class:"col-md-6"},w1={key:0,class:"invalid-feedback d-block"},T1={class:"col-md-6"},I1={key:0,class:"invalid-feedback d-block"},b1={class:"row mb-3"},A1={class:"col-md-6"},R1={key:0,class:"invalid-feedback d-block"},S1={class:"col-md-6 col-sm-6"},P1={key:0,class:"invalid-feedback d-block"},C1={class:"row mb-3"},k1={class:"col-md-6"},N1={class:"d-flex align-items-center"},O1={class:"d-flex align-items-center gap-4"},D1={class:"form-check m-0"},V1={class:"form-check m-0"},x1={key:0,class:"invalid-feedback d-block"},L1={class:"mb-3"},M1={key:0,class:"invalid-feedback d-block"},F1={key:1,class:"text-success mt-1"},U1={class:"mb-3"},B1={__name:"HomeView",setup(t){$s(()=>{const y=Cr();console.log("Home page loaded"),console.log("Current user:",y.currentUser),y.currentUser?console.log("User logged in:",y.currentUser.email):console.log("No user logged in")});const e=xe({username:"",password:"",confirmPassword:"",isAustralian:"",reason:"",gender:"",suburb:""}),n=xe([]),r=()=>{o(!0),c(!0),l(),u(!0),f(!0),p(!0),!i.value.username&&!i.value.password&&!i.value.gender&&!i.value.reason&&!i.value.resident&&(p1({username:e.value.username,password:e.value.password,isAustralian:e.value.isAustralian,gender:e.value.gender,reason:e.value.reason,suburb:e.value.suburb}),n.value.push({...e.value}),s())},s=()=>{e.value={username:"",password:"",isAustralian:"",reason:"",gender:"",confirmPassword:"",suburb:""}},i=xe({username:null,password:null,confirmPassword:null,resident:null,gender:null,reason:null}),o=y=>{e.value.username.length<3?y&&(i.value.username="Name must be at least 3 characters"):i.value.username=null},c=y=>{const _=e.value.password,S=8,P=/[A-Z]/.test(_),x=/[a-z]/.test(_),$=/\d/.test(_),q=/[!@#$%^&*(),.?":{}|<>]/.test(_);_.length<S?y&&(i.value.password=`Password must be at least ${S} characters long`):P?x?$?q?i.value.password=null:y&&(i.value.password="Password must contain at least one special character"):y&&(i.value.password="Password must contain at least one number"):y&&(i.value.password="Password must contain at least one lowercase letter"):y&&(i.value.password="Password must contain at least one uppercase letter")},l=y=>{e.value.password!==e.value.confirmPassword?i.value.confirmPassword="Passwords do not match":i.value.confirmPassword=null},u=y=>{e.value.isAustralian?i.value.resident=null:y&&(i.value.resident="Resident Type is required")},f=y=>{e.value.gender?i.value.gender=null:y&&(i.value.gender="Gender is required")},p=y=>{const _=e.value.reason;_?_.length>200?y&&(i.value.reason="Reason must be 50 characters or fewer"):i.value.reason=null:y&&(i.value.reason="Reason is required")},m=Xt(()=>e.value.reason.toLowerCase().includes("friend"));return(y,_)=>{const S=Ps("Column"),P=Ps("DataTable");return he(),pe("div",g1,[O("div",_1,[O("div",y1,[_[32]||(_[32]=O("h1",{class:"text-center"},"Library Registeration Form",-1)),O("form",{onSubmit:Nu(r,["prevent"])},[O("div",E1,[O("div",v1,[_[21]||(_[21]=O("label",{for:"username",class:"form-label"},"Username",-1)),rt(O("input",{type:"text",class:Yt(["form-control",["form-control",{"is-invalid":!!i.value.username}]]),id:"username",onBlur:_[0]||(_[0]=()=>o(!0)),onInput:_[1]||(_[1]=()=>o(!1)),"onUpdate:modelValue":_[2]||(_[2]=x=>e.value.username=x)},null,34),[[bt,e.value.username]]),i.value.username?(he(),pe("div",w1,Be(i.value.username),1)):We("",!0)]),O("div",T1,[_[23]||(_[23]=O("label",{for:"gender",class:"form-label"},"Gender",-1)),rt(O("select",{class:Yt(["form-select",{"is-invalid":i.value.gender}]),id:"gender","onUpdate:modelValue":_[3]||(_[3]=x=>e.value.gender=x),onBlur:_[4]||(_[4]=()=>f(!0)),onChange:_[5]||(_[5]=()=>f(!1))},_[22]||(_[22]=[O("option",{value:"male"},"Male",-1),O("option",{value:"female"},"Female",-1),O("option",{value:"other"},"Other",-1),O("option",{value:"Prefer not to say"},"Prefer not to say",-1)]),34),[[aT,e.value.gender]]),i.value.gender?(he(),pe("div",I1,Be(i.value.gender),1)):We("",!0)])]),O("div",b1,[O("div",A1,[_[24]||(_[24]=O("label",{for:"password",class:"form-label"},"Password",-1)),rt(O("input",{type:"password",class:Yt(["form-control",["form-control",{"is-invalid":!!i.value.password}]]),id:"password",onBlur:_[6]||(_[6]=()=>c(!0)),onInput:_[7]||(_[7]=()=>c(!1)),"onUpdate:modelValue":_[8]||(_[8]=x=>e.value.password=x)},null,34),[[bt,e.value.password]]),i.value.password?(he(),pe("div",R1,Be(i.value.password),1)):We("",!0)]),O("div",S1,[_[25]||(_[25]=O("label",{for:"confirm-password",class:"form-label"},"Confirm password",-1)),rt(O("input",{type:"password",class:Yt(["form-control",["form-control",{"is-invalid":!!i.value.confirmPassword}]]),id:"confirm-password","onUpdate:modelValue":_[9]||(_[9]=x=>e.value.confirmPassword=x),onBlur:_[10]||(_[10]=()=>l())},null,34),[[bt,e.value.confirmPassword]]),i.value.confirmPassword?(he(),pe("div",P1,Be(i.value.confirmPassword),1)):We("",!0)])]),O("div",C1,[O("div",k1,[O("div",N1,[_[28]||(_[28]=O("label",{class:"form-label mb-0 me-4"},"Australian Resident?",-1)),O("div",O1,[O("div",D1,[rt(O("input",{class:Yt(["form-check-input me-2",["form-check-input",{"is-invalid":!!i.value.resident}]]),type:"radio",id:"residentYes",value:"Yes","onUpdate:modelValue":_[11]||(_[11]=x=>e.value.isAustralian=x),onBlur:_[12]||(_[12]=()=>u(!0)),onInput:_[13]||(_[13]=()=>u(!1))},null,34),[[Jf,e.value.isAustralian]]),_[26]||(_[26]=O("label",{class:"form-check-label",for:"residentYes"},"Yes",-1))]),O("div",V1,[rt(O("input",{class:"form-check-input me-2",type:"radio",id:"residentNo",value:"No","onUpdate:modelValue":_[14]||(_[14]=x=>e.value.isAustralian=x),onBlur:_[15]||(_[15]=()=>u(!0)),onInput:_[16]||(_[16]=()=>u(!1))},null,544),[[Jf,e.value.isAustralian]]),_[27]||(_[27]=O("label",{class:"form-check-label",for:"residentNo"},"No",-1))])])]),i.value.resident?(he(),pe("div",x1,Be(i.value.resident),1)):We("",!0)])]),O("div",L1,[_[29]||(_[29]=O("label",{for:"reason",class:"form-label"},"Reason for joining",-1)),rt(O("textarea",{class:Yt(["form-control",["form-control",{"is-invalid":!!i.value.reason}]]),id:"reason",rows:"3",onBlur:_[17]||(_[17]=()=>p(!0)),onInput:_[18]||(_[18]=()=>p(!1)),"onUpdate:modelValue":_[19]||(_[19]=x=>e.value.reason=x)},null,34),[[bt,e.value.reason]]),i.value.reason?(he(),pe("div",M1,Be(i.value.reason),1)):We("",!0),m.value?(he(),pe("div",F1," Great to have a friend ")):We("",!0)]),O("div",U1,[_[30]||(_[30]=O("label",{for:"suburb",class:"form-label"},"Suburb",-1)),rt(O("input",{type:"text",class:"form-control",id:"suburb","onUpdate:modelValue":_[20]||(_[20]=x=>e.value.suburb=x)},null,512),[[bt,e.value.suburb]])]),O("div",{class:"text-center"},[_[31]||(_[31]=O("button",{type:"submit",class:"btn btn-primary me-2"},"Submit",-1)),O("button",{type:"button",class:"btn btn-secondary",onClick:s},"Clear")])],32)])]),n.value.length>0?(he(),cg(P,{key:0,value:n.value,class:"mt-4",tableStyle:"min-width: 56rem"},{default:on(()=>[De(S,{field:"username",header:"Username"}),De(S,{field:"password",header:"Password"}),De(S,{field:"isAustralian",header:"Australian Resident"},{body:on(({data:x})=>[Jt(Be(x.isAustralian),1)]),_:1}),De(S,{field:"gender",header:"Gender"}),De(S,{field:"reason",header:"Reason"}),De(S,{field:"suburb",header:"Suburb"})]),_:1},8,["value"])):We("",!0)])}}},$1=Ut(B1,[["__scopeId","data-v-7b0893bf"]]),j1=xe(!1),q1={class:"container mt-5"},H1={class:"row"},z1={class:"col-md-8 offset-md-2"},W1={class:"row mb-3"},K1={class:"col-md-6"},G1={key:0,class:"invalid-feedback d-block"},Q1={class:"col-md-6"},J1={key:0,class:"invalid-feedback d-block"},Y1={key:0,class:"text-danger mb-3"},X1={__name:"LoginForm",setup(t){const e=rc(),n=yI(),r=xe(""),s=xe(""),i=xe(""),o=xe({username:null,password:null}),c=(f=!1)=>{r.value.trim().length<3?f&&(o.value.username="Name must be at least 3 characters"):o.value.username=null},l=(f=!1)=>{s.value.length<6?f&&(o.value.password="Password must be at least 6 characters"):o.value.password=null},u=()=>{if(i.value="",!!m1(r.value,s.value)||r.value==="admin"&&s.value==="1234"){j1.value=!0;const p=n.query.redirect||"/about";e.push(p)}else i.value="Invalid username or password"};return(f,p)=>(he(),pe("div",q1,[O("div",H1,[O("div",z1,[p[9]||(p[9]=O("h1",{class:"text-center"},"Login",-1)),O("form",{onSubmit:Nu(u,["prevent"])},[O("div",W1,[O("div",K1,[p[6]||(p[6]=O("label",{for:"username",class:"form-label"},"Username",-1)),rt(O("input",{id:"username",type:"text",class:Yt(["form-control",["form-control",{"is-invalid":!!o.value.username}]]),"onUpdate:modelValue":p[0]||(p[0]=m=>r.value=m),onBlur:p[1]||(p[1]=()=>c(!0)),onInput:p[2]||(p[2]=()=>c(!1))},null,34),[[bt,r.value]]),o.value.username?(he(),pe("div",G1,Be(o.value.username),1)):We("",!0)]),O("div",Q1,[p[7]||(p[7]=O("label",{for:"password",class:"form-label"},"Password",-1)),rt(O("input",{id:"password",type:"password",class:Yt(["form-control",["form-control",{"is-invalid":!!o.value.password}]]),"onUpdate:modelValue":p[3]||(p[3]=m=>s.value=m),onBlur:p[4]||(p[4]=()=>{r.value==="admin"&&s.value==="1234"?o.value.password=null:l(!0)}),onInput:p[5]||(p[5]=()=>{r.value==="admin"&&s.value==="1234"?o.value.password=null:l(!1)})},null,34),[[bt,s.value]]),o.value.password?(he(),pe("div",J1,Be(o.value.password),1)):We("",!0)])]),i.value?(he(),pe("div",Y1,Be(i.value),1)):We("",!0),p[8]||(p[8]=O("div",{class:"text-center"},[O("button",{type:"submit",class:"btn btn-primary me-2"},"Login")],-1))],32)])])]))}},Z1={},ek={class:"about"};function tk(t,e){return he(),pe("div",ek,e[0]||(e[0]=[O("h1",null,"About Our Library",-1),O("p",null,"Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.",-1)]))}const nk=Ut(Z1,[["render",tk]]),rk={class:"signin"},sk={class:"form-group"},ik={class:"form-group"},ok={__name:"FirebaseSigninView",setup(t){const e=xe(""),n=xe(""),r=rc(),s=Cr(),i=async()=>{try{const o=await eR(s,e.value,n.value);e.value==="admin@admin.com"?r.push("/about"):r.push("/")}catch{alert("Login failed")}};return(o,c)=>(he(),pe("div",rk,[c[4]||(c[4]=O("h1",null,"Sign in",-1)),O("div",sk,[c[2]||(c[2]=O("label",null,"Email:",-1)),rt(O("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l)},null,512),[[bt,e.value]])]),O("div",ik,[c[3]||(c[3]=O("label",null,"Password:",-1)),rt(O("input",{type:"password","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l)},null,512),[[bt,n.value]])]),O("button",{onClick:i},"Sign in")]))}},ak=Ut(ok,[["__scopeId","data-v-f0615e6a"]]),ck={class:"register"},lk={class:"form-group"},uk={class:"form-group"},hk={__name:"FirebaseRegisterView",setup(t){const e=xe(""),n=xe(""),r=rc(),s=Cr(),i=async()=>{try{const o=await ZA(s,e.value,n.value);await Gy(to(hr,"users",o.user.uid),{email:e.value,role:"user",username:e.value.split("@")[0]}),alert("Registration successful! Please login"),r.push("/firelogin")}catch{alert("Registration failed")}};return(o,c)=>(he(),pe("div",ck,[c[4]||(c[4]=O("h1",null,"Create an Account",-1)),O("div",lk,[c[2]||(c[2]=O("label",null,"Email:",-1)),rt(O("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l)},null,512),[[bt,e.value]])]),O("div",uk,[c[3]||(c[3]=O("label",null,"Password:",-1)),rt(O("input",{type:"password","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l)},null,512),[[bt,n.value]])]),O("button",{onClick:i},"Create")]))}},fk=Ut(hk,[["__scopeId","data-v-69be870d"]]),dk={setup(){const t=xe([]),e=xe(null),n=xe(""),r=xe(0),s=async()=>{try{const u=qp(Ba(hr,"books")),f=await ou(u),p=[];f.forEach(y=>{p.push({id:y.id,...y.data()})});const m=p.filter(y=>parseInt(y.isbn)>1e3);m.sort((y,_)=>parseInt(y.isbn)-parseInt(_.isbn)),t.value=m,console.log("Query result:",m)}catch(u){console.error("Error fetching books: ",u),console.log("Trying without orderBy...");try{const f=qp(Ba(hr,"books"),z0("isbn",">",1e3),W0("isbn"),K0(10)),p=await ou(f),m=[];p.forEach(y=>{m.push({id:y.id,...y.data()})}),m.sort((y,_)=>parseInt(y.isbn)-parseInt(_.isbn)),t.value=m,console.log("Query result (without orderBy):",m)}catch(f){console.error("Error with second query: ",f)}}},i=async u=>{try{await X0(to(hr,"books",u)),s(),alert("Book deleted successfully!")}catch(f){console.error("Error deleting book: ",f),alert("Failed to delete book")}},o=u=>{e.value=u.id,n.value=u.name,r.value=Number(u.isbn)},c=()=>{e.value=null,n.value="",r.value=0},l=async u=>{try{const f=Number(r.value);if(isNaN(f)){alert("ISBN must be a valid number");return}await Y0(to(hr,"books",u),{name:n.value,isbn:f}),s(),e.value=null,n.value="",r.value=0,alert("Book updated successfully!")}catch(f){console.error("Error updating book: ",f),alert("Failed to update book")}};return $s(()=>{s()}),{books:t,deleteBook:i,editingBook:e,editName:n,editIsbn:r,startEdit:o,cancelEdit:c,updateBook:l}}},pk={class:"booklist"},mk={class:"books-table"},gk={key:1},_k={key:1},yk={class:"action-cell"},Ek={key:0,class:"edit-actions"},vk=["onClick"],wk={key:1,class:"normal-actions"},Tk=["onClick"],Ik=["onClick"];function bk(t,e,n,r,s,i){return he(),pe("div",pk,[e[8]||(e[8]=O("h1",null,"Books with ISBN > 1000 (Ordered by ISBN, Limited to 10)",-1)),O("table",mk,[e[7]||(e[7]=O("thead",null,[O("tr",null,[O("th",null,"Name"),O("th",null,"ISBN"),O("th",null,"Action")])],-1)),O("tbody",null,[(he(!0),pe(yn,null,Yv(r.books,o=>(he(),pe("tr",{key:o.id,class:"book-row"},[O("td",null,[r.editingBook===o.id?rt((he(),pe("input",{key:0,"onUpdate:modelValue":e[0]||(e[0]=c=>r.editName=c),class:"edit-input"},null,512)),[[bt,r.editName]]):(he(),pe("span",gk,Be(o.name),1))]),O("td",null,[r.editingBook===o.id?rt((he(),pe("input",{key:0,"onUpdate:modelValue":e[1]||(e[1]=c=>r.editIsbn=c),class:"edit-input",type:"number"},null,512)),[[bt,r.editIsbn,void 0,{number:!0}]]):(he(),pe("span",_k,Be(o.isbn),1))]),O("td",yk,[r.editingBook===o.id?(he(),pe("div",Ek,[O("button",{onClick:c=>r.updateBook(o.id),class:"save-btn",title:"Save changes"},e[3]||(e[3]=[O("i",{class:"bi bi-check"},null,-1)]),8,vk),O("button",{onClick:e[2]||(e[2]=(...c)=>r.cancelEdit&&r.cancelEdit(...c)),class:"cancel-btn",title:"Cancel"},e[4]||(e[4]=[O("i",{class:"bi bi-x"},null,-1)]))])):(he(),pe("div",wk,[O("button",{onClick:c=>r.startEdit(o),class:"edit-btn",title:"Edit book"},e[5]||(e[5]=[O("i",{class:"bi bi-pencil"},null,-1)]),8,Tk),O("button",{onClick:c=>r.deleteBook(o.id),class:"delete-btn",title:"Delete book"},e[6]||(e[6]=[O("i",{class:"bi bi-trash"},null,-1)]),8,Ik)]))])]))),128))])])])}const Wp=Ut(dk,[["render",bk],["__scopeId","data-v-bbeff70f"]]),Ak={components:{BookList:Wp},setup(){const t=xe(""),e=xe("");return{isbn:t,name:e,addBook:async()=>{try{const s=Number(t.value);if(isNaN(s)){alert("ISBN must be a valid number");return}try{const i=await fetch("https://us-central1-week7-yummy.cloudfunctions.net/capitalizeBook",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bookName:e.value})});if(i.ok){var r=(await i.json()).capitalizedName;console.log("Used Firebase Function for capitalization")}else throw new Error("Firebase Function not available")}catch{var r=e.value.toUpperCase();console.log("Used client-side processing for capitalization")}await Z0(Ba(hr,"books"),{isbn:s,name:r}),t.value="",e.value="",alert("Book added successfully!")}catch(s){console.error("Error adding book: ",s),alert("Failed to add book. Please try again.")}}}},components:{BookList:Wp}},Rk={class:"add-book"},Sk={class:"form-group"},Pk={class:"form-group"};function Ck(t,e,n,r,s,i){const o=Ps("BookList");return he(),pe("div",Rk,[e[6]||(e[6]=O("h1",null,"Add Book",-1)),O("form",{onSubmit:e[2]||(e[2]=Nu((...c)=>r.addBook&&r.addBook(...c),["prevent"]))},[O("div",Sk,[e[3]||(e[3]=O("label",{for:"isbn"},"ISBN:",-1)),rt(O("input",{type:"text",id:"isbn","onUpdate:modelValue":e[0]||(e[0]=c=>r.isbn=c),required:""},null,512),[[bt,r.isbn]])]),O("div",Pk,[e[4]||(e[4]=O("label",{for:"name"},"Name:",-1)),rt(O("input",{type:"text",id:"name","onUpdate:modelValue":e[1]||(e[1]=c=>r.name=c),required:""},null,512),[[bt,r.name]])]),e[5]||(e[5]=O("button",{type:"submit"},"Add Book",-1))],32),De(o)])}const kk=Ut(Ak,[["render",Ck],["__scopeId","data-v-51178ed5"]]),Nk={setup(){const t=xe("");return $s(()=>{const e=Cr();e.currentUser&&(t.value=e.currentUser.email.split("@")[0])}),{username:t}}},Ok={class:"welcome"};function Dk(t,e,n,r,s,i){return he(),pe("div",Ok,[O("h1",null,"Welcome "+Be(r.username)+" ~^_^~",1)])}const Vk=Ut(Nk,[["render",Dk],["__scopeId","data-v-f60cec3a"]]),xk={class:"setup-admin"},Lk=["disabled"],Mk={__name:"SetupAdminView",setup(t){const e=xe(!1),n=xe(""),r=xe(!1),s=async()=>{e.value=!0,n.value="";try{const o=Cr().currentUser;if(!o){n.value="Please login first with admin@admin.com",r.value=!1;return}if(o.email!=="admin@admin.com"){n.value="Please login with admin@admin.com account",r.value=!1;return}await Gy(to(hr,"users",o.uid),{email:"admin@admin.com",role:"admin",username:"admin",createdAt:new Date},{merge:!0}),n.value="Admin role set successfully! You can now login as admin.",r.value=!0}catch(i){n.value="Error setting admin role: "+i.message,r.value=!1}finally{e.value=!1}};return(i,o)=>(he(),pe("div",xk,[o[0]||(o[0]=O("h1",null,"Setup Admin User",-1)),o[1]||(o[1]=O("p",null,"This page helps you set up the admin user for role-based authentication.",-1)),o[2]||(o[2]=O("div",{class:"instructions"},[O("h3",null,"Instructions:"),O("ol",null,[O("li",null,[Jt("First, register a new user with email: "),O("strong",null,"admin@admin.com"),Jt(" and password: "),O("strong",null,"admin1234")]),O("li",null,"Then click the button below to set the admin role"),O("li",null,"Or manually add the role in Firestore console")])],-1)),O("button",{onClick:s,disabled:e.value},Be(e.value?"Setting up...":"Setup Admin Role"),9,Lk),n.value?(he(),pe("div",{key:0,class:Yt(["message",{success:r.value,error:!r.value}])},Be(n.value),3)):We("",!0)]))}},Fk=Ut(Mk,[["__scopeId","data-v-59520b41"]]),Uk={class:"logout-page"},Bk={__name:"LogoutPageView",setup(t){const e=Cr();return rR(e,n=>{console.log("Current user:",n),n?(console.log("User email:",n.email),console.log("User UID:",n.uid)):console.log("No user logged in")}),(n,r)=>(he(),pe("div",Uk,r[0]||(r[0]=[O("h1",null,"Log out page with developer console to show current user",-1)])))}},$k=Ut(Bk,[["__scopeId","data-v-ce979f76"]]);function Jy(t,e){return function(){return t.apply(e,arguments)}}const{toString:jk}=Object.prototype,{getPrototypeOf:Rh}=Object,{iterator:Sc,toStringTag:Yy}=Symbol,Pc=(t=>e=>{const n=jk.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),dn=t=>(t=t.toLowerCase(),e=>Pc(e)===t),Cc=t=>e=>typeof e===t,{isArray:Ys}=Array,Bs=Cc("undefined");function yo(t){return t!==null&&!Bs(t)&&t.constructor!==null&&!Bs(t.constructor)&&Mt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Xy=dn("ArrayBuffer");function qk(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Xy(t.buffer),e}const Hk=Cc("string"),Mt=Cc("function"),Zy=Cc("number"),Eo=t=>t!==null&&typeof t=="object",zk=t=>t===!0||t===!1,ua=t=>{if(Pc(t)!=="object")return!1;const e=Rh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Yy in t)&&!(Sc in t)},Wk=t=>{if(!Eo(t)||yo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Kk=dn("Date"),Gk=dn("File"),Qk=dn("Blob"),Jk=dn("FileList"),Yk=t=>Eo(t)&&Mt(t.pipe),Xk=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Mt(t.append)&&((e=Pc(t))==="formdata"||e==="object"&&Mt(t.toString)&&t.toString()==="[object FormData]"))},Zk=dn("URLSearchParams"),[eN,tN,nN,rN]=["ReadableStream","Request","Response","Headers"].map(dn),sN=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Ys(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{if(yo(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let c;for(r=0;r<o;r++)c=i[r],e.call(null,t[c],c,t)}}function eE(t,e){if(yo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,tE=t=>!Bs(t)&&t!==jr;function cu(){const{caseless:t,skipUndefined:e}=tE(this)&&this||{},n={},r=(s,i)=>{const o=t&&eE(n,i)||i;ua(n[o])&&ua(s)?n[o]=cu(n[o],s):ua(s)?n[o]=cu({},s):Ys(s)?n[o]=s.slice():(!e||!Bs(s))&&(n[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&vo(arguments[s],r);return n}const iN=(t,e,n,{allOwnKeys:r}={})=>(vo(e,(s,i)=>{n&&Mt(s)?t[i]=Jy(s,n):t[i]=s},{allOwnKeys:r}),t),oN=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),aN=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},cN=(t,e,n,r)=>{let s,i,o;const c={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!c[o]&&(e[o]=t[o],c[o]=!0);t=n!==!1&&Rh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},lN=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},uN=t=>{if(!t)return null;if(Ys(t))return t;let e=t.length;if(!Zy(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},hN=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Rh(Uint8Array)),fN=(t,e)=>{const r=(t&&t[Sc]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},dN=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},pN=dn("HTMLFormElement"),mN=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Kp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),gN=dn("RegExp"),nE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};vo(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},_N=t=>{nE(t,(e,n)=>{if(Mt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Mt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yN=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Ys(t)?r(t):r(String(t).split(e)),n},EN=()=>{},vN=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function wN(t){return!!(t&&Mt(t.append)&&t[Yy]==="FormData"&&t[Sc])}const TN=t=>{const e=new Array(10),n=(r,s)=>{if(Eo(r)){if(e.indexOf(r)>=0)return;if(yo(r))return r;if(!("toJSON"in r)){e[s]=r;const i=Ys(r)?[]:{};return vo(r,(o,c)=>{const l=n(o,s+1);!Bs(l)&&(i[c]=l)}),e[s]=void 0,i}}return r};return n(t,0)},IN=dn("AsyncFunction"),bN=t=>t&&(Eo(t)||Mt(t))&&Mt(t.then)&&Mt(t.catch),rE=((t,e)=>t?setImmediate:e?((n,r)=>(jr.addEventListener("message",({source:s,data:i})=>{s===jr&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),jr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Mt(jr.postMessage)),AN=typeof queueMicrotask<"u"?queueMicrotask.bind(jr):typeof process<"u"&&process.nextTick||rE,RN=t=>t!=null&&Mt(t[Sc]),D={isArray:Ys,isArrayBuffer:Xy,isBuffer:yo,isFormData:Xk,isArrayBufferView:qk,isString:Hk,isNumber:Zy,isBoolean:zk,isObject:Eo,isPlainObject:ua,isEmptyObject:Wk,isReadableStream:eN,isRequest:tN,isResponse:nN,isHeaders:rN,isUndefined:Bs,isDate:Kk,isFile:Gk,isBlob:Qk,isRegExp:gN,isFunction:Mt,isStream:Yk,isURLSearchParams:Zk,isTypedArray:hN,isFileList:Jk,forEach:vo,merge:cu,extend:iN,trim:sN,stripBOM:oN,inherits:aN,toFlatObject:cN,kindOf:Pc,kindOfTest:dn,endsWith:lN,toArray:uN,forEachEntry:fN,matchAll:dN,isHTMLForm:pN,hasOwnProperty:Kp,hasOwnProp:Kp,reduceDescriptors:nE,freezeMethods:_N,toObjectSet:yN,toCamelCase:mN,noop:EN,toFiniteNumber:vN,findKey:eE,global:jr,isContextDefined:tE,isSpecCompliantForm:wN,toJSONObject:TN,isAsyncFn:IN,isThenable:bN,setImmediate:rE,asap:AN,isIterable:RN};function Ee(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}D.inherits(Ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const sE=Ee.prototype,iE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{iE[t]={value:t}});Object.defineProperties(Ee,iE);Object.defineProperty(sE,"isAxiosError",{value:!0});Ee.from=(t,e,n,r,s,i)=>{const o=Object.create(sE);D.toFlatObject(t,o,function(f){return f!==Error.prototype},u=>u!=="isAxiosError");const c=t&&t.message?t.message:"Error",l=e==null&&t?t.code:e;return Ee.call(o,c,l,n,r,s),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",i&&Object.assign(o,i),o};const SN=null;function lu(t){return D.isPlainObject(t)||D.isArray(t)}function oE(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function Gp(t,e,n){return t?t.concat(e).map(function(s,i){return s=oE(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function PN(t){return D.isArray(t)&&!t.some(lu)}const CN=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function kc(t,e,n){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,P){return!D.isUndefined(P[S])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(e);if(!D.isFunction(s))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if(D.isDate(_))return _.toISOString();if(D.isBoolean(_))return _.toString();if(!l&&D.isBlob(_))throw new Ee("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(_)||D.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function f(_,S,P){let x=_;if(_&&!P&&typeof _=="object"){if(D.endsWith(S,"{}"))S=r?S:S.slice(0,-2),_=JSON.stringify(_);else if(D.isArray(_)&&PN(_)||(D.isFileList(_)||D.endsWith(S,"[]"))&&(x=D.toArray(_)))return S=oE(S),x.forEach(function(q,z){!(D.isUndefined(q)||q===null)&&e.append(o===!0?Gp([S],z,i):o===null?S:S+"[]",u(q))}),!1}return lu(_)?!0:(e.append(Gp(P,S,i),u(_)),!1)}const p=[],m=Object.assign(CN,{defaultVisitor:f,convertValue:u,isVisitable:lu});function y(_,S){if(!D.isUndefined(_)){if(p.indexOf(_)!==-1)throw Error("Circular reference detected in "+S.join("."));p.push(_),D.forEach(_,function(x,$){(!(D.isUndefined(x)||x===null)&&s.call(e,x,D.isString($)?$.trim():$,S,m))===!0&&y(x,S?S.concat($):[$])}),p.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return y(t),e}function Qp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Sh(t,e){this._pairs=[],t&&kc(t,this,e)}const aE=Sh.prototype;aE.append=function(e,n){this._pairs.push([e,n])};aE.toString=function(e){const n=e?function(r){return e.call(this,r,Qp)}:Qp;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function kN(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function cE(t,e,n){if(!e)return t;const r=n&&n.encode||kN;D.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=D.isURLSearchParams(e)?e.toString():new Sh(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Jp{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(r){r!==null&&e(r)})}}const lE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},NN=typeof URLSearchParams<"u"?URLSearchParams:Sh,ON=typeof FormData<"u"?FormData:null,DN=typeof Blob<"u"?Blob:null,VN={isBrowser:!0,classes:{URLSearchParams:NN,FormData:ON,Blob:DN},protocols:["http","https","file","blob","url","data"]},Ph=typeof window<"u"&&typeof document<"u",uu=typeof navigator=="object"&&navigator||void 0,xN=Ph&&(!uu||["ReactNative","NativeScript","NS"].indexOf(uu.product)<0),LN=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",MN=Ph&&window.location.href||"http://localhost",FN=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ph,hasStandardBrowserEnv:xN,hasStandardBrowserWebWorkerEnv:LN,navigator:uu,origin:MN},Symbol.toStringTag,{value:"Module"})),At={...FN,...VN};function UN(t,e){return kc(t,new At.classes.URLSearchParams,{visitor:function(n,r,s,i){return At.isNode&&D.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function BN(t){return D.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function $N(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function uE(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=i>=n.length;return o=!o&&D.isArray(s)?s.length:o,l?(D.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!D.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&D.isArray(s[o])&&(s[o]=$N(s[o])),!c)}if(D.isFormData(t)&&D.isFunction(t.entries)){const n={};return D.forEachEntry(t,(r,s)=>{e(BN(r),s,n,0)}),n}return null}function jN(t,e,n){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const wo={transitional:lE,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=D.isObject(e);if(i&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return s?JSON.stringify(uE(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return UN(e,this.formSerializer).toString();if((c=D.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return kc(c?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),jN(e)):e}],transformResponse:[function(e){const n=this.transitional||wo.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(c){if(o)throw c.name==="SyntaxError"?Ee.from(c,Ee.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:At.classes.FormData,Blob:At.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],t=>{wo.headers[t]={}});const qN=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),HN=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&qN[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Yp=Symbol("internals");function mi(t){return t&&String(t).trim().toLowerCase()}function ha(t){return t===!1||t==null?t:D.isArray(t)?t.map(ha):String(t)}function zN(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const WN=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function _l(t,e,n,r,s){if(D.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!D.isString(e)){if(D.isString(r))return e.indexOf(r)!==-1;if(D.isRegExp(r))return r.test(e)}}function KN(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function GN(t,e){const n=D.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Ft=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(c,l,u){const f=mi(l);if(!f)throw new Error("header name must be a non-empty string");const p=D.findKey(s,f);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||l]=ha(c))}const o=(c,l)=>D.forEach(c,(u,f)=>i(u,f,l));if(D.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(D.isString(e)&&(e=e.trim())&&!WN(e))o(HN(e),n);else if(D.isObject(e)&&D.isIterable(e)){let c={},l,u;for(const f of e){if(!D.isArray(f))throw TypeError("Object iterator must return a key-value pair");c[u=f[0]]=(l=c[u])?D.isArray(l)?[...l,f[1]]:[l,f[1]]:f[1]}o(c,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=mi(e),e){const r=D.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return zN(s);if(D.isFunction(n))return n.call(this,s,r);if(D.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=mi(e),e){const r=D.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||_l(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=mi(o),o){const c=D.findKey(r,o);c&&(!n||_l(r,r[c],c,n))&&(delete r[c],s=!0)}}return D.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||_l(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return D.forEach(this,(s,i)=>{const o=D.findKey(r,i);if(o){n[o]=ha(s),delete n[i];return}const c=e?KN(i):String(i).trim();c!==i&&delete n[i],n[c]=ha(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return D.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&D.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Yp]=this[Yp]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=mi(o);r[c]||(GN(s,o),r[c]=!0)}return D.isArray(e)?e.forEach(i):i(e),this}};Ft.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(Ft.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});D.freezeMethods(Ft);function yl(t,e){const n=this||wo,r=e||n,s=Ft.from(r.headers);let i=r.data;return D.forEach(t,function(c){i=c.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function hE(t){return!!(t&&t.__CANCEL__)}function Xs(t,e,n){Ee.call(this,t??"canceled",Ee.ERR_CANCELED,e,n),this.name="CanceledError"}D.inherits(Xs,Ee,{__CANCEL__:!0});function fE(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new Ee("Request failed with status code "+n.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function QN(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function JN(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),f=r[i];o||(o=u),n[s]=l,r[s]=u;let p=i,m=0;for(;p!==s;)m+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const y=f&&u-f;return y?Math.round(m*1e3/y):void 0}}function YN(t,e){let n=0,r=1e3/e,s,i;const o=(u,f=Date.now())=>{n=f,s=null,i&&(clearTimeout(i),i=null),t(...u)};return[(...u)=>{const f=Date.now(),p=f-n;p>=r?o(u,f):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-p)))},()=>s&&o(s)]}const ja=(t,e,n=3)=>{let r=0;const s=JN(50,250);return YN(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,l=o-r,u=s(l),f=o<=c;r=o;const p={loaded:o,total:c,progress:c?o/c:void 0,bytes:l,rate:u||void 0,estimated:u&&c&&f?(c-o)/u:void 0,event:i,lengthComputable:c!=null,[e?"download":"upload"]:!0};t(p)},n)},Xp=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Zp=t=>(...e)=>D.asap(()=>t(...e)),XN=At.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,At.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(At.origin),At.navigator&&/(msie|trident)/i.test(At.navigator.userAgent)):()=>!0,ZN=At.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];D.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),D.isString(r)&&o.push("path="+r),D.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function eO(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function tO(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function dE(t,e,n){let r=!eO(e);return t&&(r||n==!1)?tO(t,e):e}const em=t=>t instanceof Ft?{...t}:t;function Yr(t,e){e=e||{};const n={};function r(u,f,p,m){return D.isPlainObject(u)&&D.isPlainObject(f)?D.merge.call({caseless:m},u,f):D.isPlainObject(f)?D.merge({},f):D.isArray(f)?f.slice():f}function s(u,f,p,m){if(D.isUndefined(f)){if(!D.isUndefined(u))return r(void 0,u,p,m)}else return r(u,f,p,m)}function i(u,f){if(!D.isUndefined(f))return r(void 0,f)}function o(u,f){if(D.isUndefined(f)){if(!D.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function c(u,f,p){if(p in e)return r(u,f);if(p in t)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,f,p)=>s(em(u),em(f),p,!0)};return D.forEach(Object.keys({...t,...e}),function(f){const p=l[f]||s,m=p(t[f],e[f],f);D.isUndefined(m)&&p!==c||(n[f]=m)}),n}const pE=t=>{const e=Yr({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=e;if(e.headers=o=Ft.from(o),e.url=cE(dE(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),D.isFormData(n)){if(At.hasStandardBrowserEnv||At.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(D.isFunction(n.getHeaders)){const l=n.getHeaders(),u=["content-type","content-length"];Object.entries(l).forEach(([f,p])=>{u.includes(f.toLowerCase())&&o.set(f,p)})}}if(At.hasStandardBrowserEnv&&(r&&D.isFunction(r)&&(r=r(e)),r||r!==!1&&XN(e.url))){const l=s&&i&&ZN.read(i);l&&o.set(s,l)}return e},nO=typeof XMLHttpRequest<"u",rO=nO&&function(t){return new Promise(function(n,r){const s=pE(t);let i=s.data;const o=Ft.from(s.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:u}=s,f,p,m,y,_;function S(){y&&y(),_&&_(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let P=new XMLHttpRequest;P.open(s.method.toUpperCase(),s.url,!0),P.timeout=s.timeout;function x(){if(!P)return;const q=Ft.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),oe={data:!c||c==="text"||c==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:q,config:t,request:P};fE(function(b){n(b),S()},function(b){r(b),S()},oe),P=null}"onloadend"in P?P.onloadend=x:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(x)},P.onabort=function(){P&&(r(new Ee("Request aborted",Ee.ECONNABORTED,t,P)),P=null)},P.onerror=function(z){const oe=z&&z.message?z.message:"Network Error",_e=new Ee(oe,Ee.ERR_NETWORK,t,P);_e.event=z||null,r(_e),P=null},P.ontimeout=function(){let z=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const oe=s.transitional||lE;s.timeoutErrorMessage&&(z=s.timeoutErrorMessage),r(new Ee(z,oe.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,t,P)),P=null},i===void 0&&o.setContentType(null),"setRequestHeader"in P&&D.forEach(o.toJSON(),function(z,oe){P.setRequestHeader(oe,z)}),D.isUndefined(s.withCredentials)||(P.withCredentials=!!s.withCredentials),c&&c!=="json"&&(P.responseType=s.responseType),u&&([m,_]=ja(u,!0),P.addEventListener("progress",m)),l&&P.upload&&([p,y]=ja(l),P.upload.addEventListener("progress",p),P.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(f=q=>{P&&(r(!q||q.type?new Xs(null,t,P):q),P.abort(),P=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const $=QN(s.url);if($&&At.protocols.indexOf($)===-1){r(new Ee("Unsupported protocol "+$+":",Ee.ERR_BAD_REQUEST,t));return}P.send(i||null)})},sO=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,c();const f=u instanceof Error?u:this.reason;r.abort(f instanceof Ee?f:new Xs(f instanceof Error?f.message:f))}};let o=e&&setTimeout(()=>{o=null,i(new Ee(`timeout ${e} of ms exceeded`,Ee.ETIMEDOUT))},e);const c=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>D.asap(c),l}},iO=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},oO=async function*(t,e){for await(const n of aO(t))yield*iO(n,e)},aO=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},tm=(t,e,n,r)=>{const s=oO(t,e);let i=0,o,c=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:f}=await s.next();if(u){c(),l.close();return}let p=f.byteLength;if(n){let m=i+=p;n(m)}l.enqueue(new Uint8Array(f))}catch(u){throw c(u),u}},cancel(l){return c(l),s.return()}},{highWaterMark:2})},nm=64*1024,{isFunction:Go}=D,cO=(({Request:t,Response:e})=>({Request:t,Response:e}))(D.global),{ReadableStream:rm,TextEncoder:sm}=D.global,im=(t,...e)=>{try{return!!t(...e)}catch{return!1}},lO=t=>{t=D.merge.call({skipUndefined:!0},cO,t);const{fetch:e,Request:n,Response:r}=t,s=e?Go(e):typeof fetch=="function",i=Go(n),o=Go(r);if(!s)return!1;const c=s&&Go(rm),l=s&&(typeof sm=="function"?(_=>S=>_.encode(S))(new sm):async _=>new Uint8Array(await new n(_).arrayBuffer())),u=i&&c&&im(()=>{let _=!1;const S=new n(At.origin,{body:new rm,method:"POST",get duplex(){return _=!0,"half"}}).headers.has("Content-Type");return _&&!S}),f=o&&c&&im(()=>D.isReadableStream(new r("").body)),p={stream:f&&(_=>_.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!p[_]&&(p[_]=(S,P)=>{let x=S&&S[_];if(x)return x.call(S);throw new Ee(`Response type '${_}' is not supported`,Ee.ERR_NOT_SUPPORT,P)})});const m=async _=>{if(_==null)return 0;if(D.isBlob(_))return _.size;if(D.isSpecCompliantForm(_))return(await new n(At.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(D.isArrayBufferView(_)||D.isArrayBuffer(_))return _.byteLength;if(D.isURLSearchParams(_)&&(_=_+""),D.isString(_))return(await l(_)).byteLength},y=async(_,S)=>{const P=D.toFiniteNumber(_.getContentLength());return P??m(S)};return async _=>{let{url:S,method:P,data:x,signal:$,cancelToken:q,timeout:z,onDownloadProgress:oe,onUploadProgress:_e,responseType:b,headers:v,withCredentials:I="same-origin",fetchOptions:A}=pE(_),R=e||fetch;b=b?(b+"").toLowerCase():"text";let C=sO([$,q&&q.toAbortSignal()],z),w=null;const ze=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let Ct;try{if(_e&&u&&P!=="get"&&P!=="head"&&(Ct=await y(v,x))!==0){let Je=new n(S,{method:"POST",body:x,duplex:"half"}),Ce;if(D.isFormData(x)&&(Ce=Je.headers.get("content-type"))&&v.setContentType(Ce),Je.body){const[Le,$t]=Xp(Ct,ja(Zp(_e)));x=tm(Je.body,nm,Le,$t)}}D.isString(I)||(I=I?"include":"omit");const Pe=i&&"credentials"in n.prototype,ve={...A,signal:C,method:P.toUpperCase(),headers:v.normalize().toJSON(),body:x,duplex:"half",credentials:Pe?I:void 0};w=i&&new n(S,ve);let fe=await(i?R(w,A):R(S,ve));const mt=f&&(b==="stream"||b==="response");if(f&&(oe||mt&&ze)){const Je={};["status","statusText","headers"].forEach(jt=>{Je[jt]=fe[jt]});const Ce=D.toFiniteNumber(fe.headers.get("content-length")),[Le,$t]=oe&&Xp(Ce,ja(Zp(oe),!0))||[];fe=new r(tm(fe.body,nm,Le,()=>{$t&&$t(),ze&&ze()}),Je)}b=b||"text";let Bt=await p[D.findKey(p,b)||"text"](fe,_);return!mt&&ze&&ze(),await new Promise((Je,Ce)=>{fE(Je,Ce,{data:Bt,headers:Ft.from(fe.headers),status:fe.status,statusText:fe.statusText,config:_,request:w})})}catch(Pe){throw ze&&ze(),Pe&&Pe.name==="TypeError"&&/Load failed|fetch/i.test(Pe.message)?Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,_,w),{cause:Pe.cause||Pe}):Ee.from(Pe,Pe&&Pe.code,_,w)}}},uO=new Map,mE=t=>{let e=t?t.env:{};const{fetch:n,Request:r,Response:s}=e,i=[r,s,n];let o=i.length,c=o,l,u,f=uO;for(;c--;)l=i[c],u=f.get(l),u===void 0&&f.set(l,u=c?new Map:lO(e)),f=u;return u};mE();const hu={http:SN,xhr:rO,fetch:{get:mE}};D.forEach(hu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const om=t=>`- ${t}`,hO=t=>D.isFunction(t)||t===null||t===!1,gE={getAdapter:(t,e)=>{t=D.isArray(t)?t:[t];const{length:n}=t;let r,s;const i={};for(let o=0;o<n;o++){r=t[o];let c;if(s=r,!hO(r)&&(s=hu[(c=String(r)).toLowerCase()],s===void 0))throw new Ee(`Unknown adapter '${c}'`);if(s&&(D.isFunction(s)||(s=s.get(e))))break;i[c||"#"+o]=s}if(!s){const o=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let c=n?o.length>1?`since :
`+o.map(om).join(`
`):" "+om(o[0]):"as no adapter specified";throw new Ee("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s},adapters:hu};function El(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Xs(null,t)}function am(t){return El(t),t.headers=Ft.from(t.headers),t.data=yl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),gE.getAdapter(t.adapter||wo.adapter,t)(t).then(function(r){return El(t),r.data=yl.call(t,t.transformResponse,r),r.headers=Ft.from(r.headers),r},function(r){return hE(r)||(El(t),r&&r.response&&(r.response.data=yl.call(t,t.transformResponse,r.response),r.response.headers=Ft.from(r.response.headers))),Promise.reject(r)})}const _E="1.12.2",Nc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Nc[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const cm={};Nc.transitional=function(e,n,r){function s(i,o){return"[Axios v"+_E+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(e===!1)throw new Ee(s(o," has been removed"+(n?" in "+n:"")),Ee.ERR_DEPRECATED);return n&&!cm[o]&&(cm[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,c):!0}};Nc.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function fO(t,e,n){if(typeof t!="object")throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const c=t[i],l=c===void 0||o(c,i,t);if(l!==!0)throw new Ee("option "+i+" must be "+l,Ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ee("Unknown option "+i,Ee.ERR_BAD_OPTION)}}const fa={assertOptions:fO,validators:Nc},mn=fa.validators;let Hr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Jp,response:new Jp}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Yr(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&fa.assertOptions(r,{silentJSONParsing:mn.transitional(mn.boolean),forcedJSONParsing:mn.transitional(mn.boolean),clarifyTimeoutError:mn.transitional(mn.boolean)},!1),s!=null&&(D.isFunction(s)?n.paramsSerializer={serialize:s}:fa.assertOptions(s,{encode:mn.function,serialize:mn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),fa.assertOptions(n,{baseUrl:mn.spelling("baseURL"),withXsrfToken:mn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&D.merge(i.common,i[n.method]);i&&D.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=Ft.concat(o,i);const c=[];let l=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(l=l&&S.synchronous,c.unshift(S.fulfilled,S.rejected))});const u=[];this.interceptors.response.forEach(function(S){u.push(S.fulfilled,S.rejected)});let f,p=0,m;if(!l){const _=[am.bind(this),void 0];for(_.unshift(...c),_.push(...u),m=_.length,f=Promise.resolve(n);p<m;)f=f.then(_[p++],_[p++]);return f}m=c.length;let y=n;for(;p<m;){const _=c[p++],S=c[p++];try{y=_(y)}catch(P){S.call(this,P);break}}try{f=am.call(this,y)}catch(_){return Promise.reject(_)}for(p=0,m=u.length;p<m;)f=f.then(u[p++],u[p++]);return f}getUri(e){e=Yr(this.defaults,e);const n=dE(e.baseURL,e.url,e.allowAbsoluteUrls);return cE(n,e.params,e.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(e){Hr.prototype[e]=function(n,r){return this.request(Yr(r||{},{method:e,url:n,data:(r||{}).data}))}});D.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,c){return this.request(Yr(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Hr.prototype[e]=n(),Hr.prototype[e+"Form"]=n(!0)});let dO=class yE{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,c){r.reason||(r.reason=new Xs(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new yE(function(s){e=s}),cancel:e}}};function pO(t){return function(n){return t.apply(null,n)}}function mO(t){return D.isObject(t)&&t.isAxiosError===!0}const fu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fu).forEach(([t,e])=>{fu[e]=t});function EE(t){const e=new Hr(t),n=Jy(Hr.prototype.request,e);return D.extend(n,Hr.prototype,e,{allOwnKeys:!0}),D.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return EE(Yr(t,s))},n}const Qe=EE(wo);Qe.Axios=Hr;Qe.CanceledError=Xs;Qe.CancelToken=dO;Qe.isCancel=hE;Qe.VERSION=_E;Qe.toFormData=kc;Qe.AxiosError=Ee;Qe.Cancel=Qe.CanceledError;Qe.all=function(e){return Promise.all(e)};Qe.spread=pO;Qe.isAxiosError=mO;Qe.mergeConfig=Yr;Qe.AxiosHeaders=Ft;Qe.formToJSON=t=>uE(D.isHTMLForm(t)?new FormData(t):t);Qe.getAdapter=gE.getAdapter;Qe.HttpStatusCode=fu;Qe.default=Qe;const{Axios:xO,AxiosError:LO,CanceledError:MO,isCancel:FO,CancelToken:UO,VERSION:BO,all:$O,Cancel:jO,isAxiosError:qO,spread:HO,toFormData:zO,AxiosHeaders:WO,HttpStatusCode:KO,formToJSON:GO,getAdapter:QO,mergeConfig:JO}=Qe,gO={data(){return{count:null,error:null}},methods:{async getBookCount(){try{const t=await Qe.get("https://countbooks-dqvffu4xqq-uc.a.run.app");this.count=t.data.count,this.error=null}catch(t){console.error("Error fetching book count:",t),this.error=t,this.count=null}}}},_O={class:"book-counter"},yO={class:"result-section"},EO={key:0,class:"count-result"},vO={key:1,class:"error-message"};function wO(t,e,n,r,s,i){return he(),pe("div",_O,[e[1]||(e[1]=O("h1",null,"Book Counter",-1)),O("button",{onClick:e[0]||(e[0]=(...o)=>i.getBookCount&&i.getBookCount(...o)),class:"count-button"},"Get Book Count"),O("div",yO,[s.count!==null?(he(),pe("p",EO,"Total number of books: "+Be(s.count),1)):We("",!0),s.error?(he(),pe("p",vO,Be(s.error),1)):We("",!0)])])}const TO=Ut(gO,[["render",wO],["__scopeId","data-v-eef854e7"]]),lm="14fbcc6d4134378b6064919cbcb8aad9",IO={name:"App",data(){return{city:"",weatherData:null,hourlyForecast:[],dailyForecast:[]}},computed:{temperature(){return this.weatherData?Math.floor(this.weatherData.main.temp):null},iconUrl(){return this.weatherData?`https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`:null}},mounted(){this.fetchCurrentLocationWeather()},methods:{async fetchCurrentLocationWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(async t=>{const{latitude:e,longitude:n}=t.coords,r=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${n}&appid=${lm}&units=metric`;await this.fetchWeatherData(r)})},async fetchWeatherData(t){try{console.log("Fetching weather data from:",t);const e=await Qe.get(t);console.log("API Response:",e.data),this.weatherData=e.data,console.log("Weather data updated:",this.weatherData)}catch(e){console.error("Error fetching weather data:",e),e.response&&e.response.status===401?alert("Invalid API Key. Please get a valid API key from OpenWeatherMap."):e.response&&e.response.status===404?alert("City not found. Please check the city name and try again."):alert("Failed to fetch weather data. Please try again later."),this.weatherData=null}},async searchByCity(){if(!this.city.trim()){alert("Please enter a city name");return}console.log("Searching for city:",this.city);const t=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${lm}&units=metric`;console.log("API URL:",t),await this.fetchWeatherData(t)}}},bO={class:"container"},AO={class:"header"},RO={class:"search-bar"},SO={key:0},PO=["src"];function CO(t,e,n,r,s,i){return he(),pe("div",bO,[O("div",AO,[e[2]||(e[2]=O("h1",null,"WEATHER APP",-1)),O("div",RO,[rt(O("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.city=o),placeholder:"Enter city name",class:"search-input"},null,512),[[bt,s.city]]),O("button",{onClick:e[1]||(e[1]=(...o)=>i.searchByCity&&i.searchByCity(...o)),class:"search-button"},"Search")])]),O("main",null,[s.weatherData?(he(),pe("div",SO,[O("h2",null,Be(s.weatherData.name)+", "+Be(s.weatherData.sys.country),1),O("div",null,[O("img",{src:i.iconUrl,alt:"Weather Icon"},null,8,PO),O("p",null,Be(i.temperature)+" °C",1)]),O("span",null,Be(s.weatherData.weather[0].description),1)])):We("",!0)])])}const kO=Ut(IO,[["render",CO],["__scopeId","data-v-e5fb5586"]]),vE=gI({history:zT("/FIT5032_EFOLIO/"),routes:[{path:"/",name:"Home",component:$1},{path:"/login",name:"Login",component:X1},{path:"/about",name:"About",component:nk,meta:{requiresAuth:!0}},{path:"/firelogin",name:"FireLogin",component:ak},{path:"/fireregister",name:"FireRegister",component:fk},{path:"/addbook",name:"AddBook",component:kk},{path:"/welcome",name:"UserWelcome",component:Vk,meta:{requiresAuth:!0}},{path:"/setup-admin",name:"SetupAdmin",component:Fk},{path:"/logout-page",name:"LogoutPage",component:$k},{path:"/GetBookCount",name:"GetBookCount",component:TO},{path:"/WeatherCheck",name:"WeatherCheck",component:kO},{path:"/CountBookAPI",name:"CountBookAPI",component:Qy}]});vE.beforeEach((t,e,n)=>{const r=t.matched.some(o=>o.meta.requiresAuth),i=Cr().currentUser!==null;r&&!i?n({name:"FireLogin",query:{redirect:t.fullPath}}):n()});const NO={apiKey:"AIzaSyAzKHeZmP7E2Cgs0W5XLddcBcjJJxG1eXg",authDomain:"week7-yummy.firebaseapp.com",projectId:"week7-yummy",storageBucket:"week7-yummy.firebasestorage.app",messagingSenderId:"285861969452",appId:"1:285861969452:web:7e8aa5106a48cab5305b89"};Mu(NO);const wE=fT(d1);wE.use(vE);wE.mount("#app");
