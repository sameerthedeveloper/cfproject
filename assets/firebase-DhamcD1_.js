const Gc=()=>{};var To={};/**
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
 */const Ca=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Kc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Va={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,l=u?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,p=o>>2,v=(o&3)<<4|l>>4;let A=(l&15)<<2|f>>6,C=f&63;h||(C=64,u||(A=64)),r.push(e[p],e[v],e[A],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ca(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Kc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const v=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||v==null)throw new Wc;const A=o<<2|l>>4;if(r.push(A),f!==64){const C=l<<4&240|f>>2;if(r.push(C),v!==64){const b=f<<6&192|v;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qc=function(n){const t=Ca(n);return Va.encodeByteArray(t,!0)},or=function(n){return Qc(n).replace(/\./g,"")},Xc=function(n){try{return Va.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Jc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yc=()=>Jc().__FIREBASE_DEFAULTS__,Zc=()=>{if(typeof process>"u"||typeof To>"u")return;const n=To.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},tl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Xc(n[1]);return t&&JSON.parse(t)},Us=()=>{try{return Gc()||Yc()||Zc()||tl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},el=n=>{var t,e;return(e=(t=Us())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},nl=n=>{const t=el(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ba=()=>{var n;return(n=Us())===null||n===void 0?void 0:n.config};/**
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
 */class rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Bs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function il(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[or(JSON.stringify(e)),or(JSON.stringify(u)),""].join(".")}const cn={};function ol(){const n={prod:[],emulator:[]};for(const t of Object.keys(cn))cn[t]?n.emulator.push(t):n.prod.push(t);return n}function al(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let vo=!1;function ul(n,t){if(typeof window>"u"||typeof document>"u"||!Bs(window.location.host)||cn[n]===t||cn[n]||vo)return;cn[n]=t;function e(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=ol().prod.length>0;function u(){const A=document.getElementById(r);A&&A.remove()}function l(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,C){A.setAttribute("width","24"),A.setAttribute("id",C),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function f(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{vo=!0,u()},A}function p(A,C){A.setAttribute("id",C),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function v(){const A=al(r),C=e("text"),b=document.getElementById(C)||document.createElement("span"),O=e("learnmore"),D=document.getElementById(O)||document.createElement("a"),G=e("preprendIcon"),B=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const z=A.element;l(z),p(D,O);const et=f();h(B,G),z.append(B,b,D,et),document.body.appendChild(z)}o?(b.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
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
 */function cl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ll(){var n;const t=(n=Us())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hl(){return!ll()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dl(){try{return typeof indexedDB=="object"}catch{return!1}}function fl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const ml="FirebaseError";class Le extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ml,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Da.prototype.create)}}class Da{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?pl(o,r):"Error",l=`${this.serviceName}: ${u} (${i}).`;return new Le(i,l,r)}}function pl(n,t){return n.replace(gl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const gl=/\{\$([^}]+)}/g;function ar(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(Io(o)&&Io(u)){if(!ar(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Io(n){return n!==null&&typeof n=="object"}/**
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
 */function Zt(n){return n&&n._delegate?n._delegate:n}class mn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const fe="[DEFAULT]";/**
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
 */class _l{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new rl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(El(t))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=fe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=fe){return this.instances.has(t)}getOptions(t=fe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&u.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&t(u,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=fe){return this.component?this.component.multipleInstances?t:fe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yl(n){return n===fe?void 0:n}function El(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new _l(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const vl={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Il=$.INFO,Al={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},wl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Al[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Na{constructor(t){this.name=t,this._logLevel=Il,this._logHandler=wl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Rl=(n,t)=>t.some(e=>n instanceof e);let Ao,wo;function Sl(){return Ao||(Ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pl(){return wo||(wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ka=new WeakMap,_s=new WeakMap,Oa=new WeakMap,cs=new WeakMap,js=new WeakMap;function Cl(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Wt(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&ka.set(e,n)}).catch(()=>{}),js.set(t,n),t}function Vl(n){if(_s.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});_s.set(n,t)}let ys={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return _s.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Oa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Wt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function bl(n){ys=n(ys)}function Dl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ls(this),t,...e);return Oa.set(r,t.sort?t.sort():[t]),Wt(r)}:Pl().includes(n)?function(...t){return n.apply(ls(this),t),Wt(ka.get(this))}:function(...t){return Wt(n.apply(ls(this),t))}}function Nl(n){return typeof n=="function"?Dl(n):(n instanceof IDBTransaction&&Vl(n),Rl(n,Sl())?new Proxy(n,ys):n)}function Wt(n){if(n instanceof IDBRequest)return Cl(n);if(cs.has(n))return cs.get(n);const t=Nl(n);return t!==n&&(cs.set(n,t),js.set(t,n)),t}const ls=n=>js.get(n);function kl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),l=Wt(u);return r&&u.addEventListener("upgradeneeded",h=>{r(Wt(u.result),h.oldVersion,h.newVersion,Wt(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Ol=["get","getKey","getAll","getAllKeys","count"],xl=["put","add","delete","clear"],hs=new Map;function Ro(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(hs.get(t))return hs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=xl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ol.includes(e)))return;const o=async function(u,...l){const h=this.transaction(u,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),i&&h.done]))[0]};return hs.set(t,o),o}bl(n=>({...n,get:(t,e,r)=>Ro(t,e)||n.get(t,e,r),has:(t,e)=>!!Ro(t,e)||n.has(t,e)}));/**
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
 */class Ml{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ll(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ll(n){const t=n.getComponent();return t?.type==="VERSION"}const Es="@firebase/app",So="0.13.2";/**
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
 */const Bt=new Na("@firebase/app"),Fl="@firebase/app-compat",Ul="@firebase/analytics-compat",Bl="@firebase/analytics",jl="@firebase/app-check-compat",ql="@firebase/app-check",$l="@firebase/auth",zl="@firebase/auth-compat",Hl="@firebase/database",Gl="@firebase/data-connect",Kl="@firebase/database-compat",Wl="@firebase/functions",Ql="@firebase/functions-compat",Xl="@firebase/installations",Jl="@firebase/installations-compat",Yl="@firebase/messaging",Zl="@firebase/messaging-compat",th="@firebase/performance",eh="@firebase/performance-compat",nh="@firebase/remote-config",rh="@firebase/remote-config-compat",sh="@firebase/storage",ih="@firebase/storage-compat",oh="@firebase/firestore",ah="@firebase/ai",uh="@firebase/firestore-compat",ch="firebase",lh="11.10.0";/**
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
 */const Ts="[DEFAULT]",hh={[Es]:"fire-core",[Fl]:"fire-core-compat",[Bl]:"fire-analytics",[Ul]:"fire-analytics-compat",[ql]:"fire-app-check",[jl]:"fire-app-check-compat",[$l]:"fire-auth",[zl]:"fire-auth-compat",[Hl]:"fire-rtdb",[Gl]:"fire-data-connect",[Kl]:"fire-rtdb-compat",[Wl]:"fire-fn",[Ql]:"fire-fn-compat",[Xl]:"fire-iid",[Jl]:"fire-iid-compat",[Yl]:"fire-fcm",[Zl]:"fire-fcm-compat",[th]:"fire-perf",[eh]:"fire-perf-compat",[nh]:"fire-rc",[rh]:"fire-rc-compat",[sh]:"fire-gcs",[ih]:"fire-gcs-compat",[oh]:"fire-fst",[uh]:"fire-fst-compat",[ah]:"fire-vertex","fire-js":"fire-js",[ch]:"fire-js-all"};/**
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
 */const ur=new Map,dh=new Map,vs=new Map;function Po(n,t){try{n.container.addComponent(t)}catch(e){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function cr(n){const t=n.name;if(vs.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;vs.set(t,n);for(const e of ur.values())Po(e,n);for(const e of dh.values())Po(e,n);return!0}function fh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function mh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new Da("app","Firebase",ph);/**
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
 */class gh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const _h=lh;function yh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ts,automaticDataCollectionEnabled:!0},t),i=r.name;if(typeof i!="string"||!i)throw Qt.create("bad-app-name",{appName:String(i)});if(e||(e=ba()),!e)throw Qt.create("no-options");const o=ur.get(i);if(o){if(ar(e,o.options)&&ar(r,o.config))return o;throw Qt.create("duplicate-app",{appName:i})}const u=new Tl(i);for(const h of vs.values())u.addComponent(h);const l=new gh(e,r,u);return ur.set(i,l),l}function Eh(n=Ts){const t=ur.get(n);if(!t&&n===Ts&&ba())return yh();if(!t)throw Qt.create("no-app",{appName:n});return t}function Ce(n,t,e){var r;let i=(r=hh[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&l.push("and"),u&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bt.warn(l.join(" "));return}cr(new mn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Th="firebase-heartbeat-database",vh=1,pn="firebase-heartbeat-store";let ds=null;function xa(){return ds||(ds=kl(Th,vh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(pn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),ds}async function Ih(n){try{const e=(await xa()).transaction(pn),r=await e.objectStore(pn).get(Ma(n));return await e.done,r}catch(t){if(t instanceof Le)Bt.warn(t.message);else{const e=Qt.create("idb-get",{originalErrorMessage:t?.message});Bt.warn(e.message)}}}async function Co(n,t){try{const r=(await xa()).transaction(pn,"readwrite");await r.objectStore(pn).put(t,Ma(n)),await r.done}catch(e){if(e instanceof Le)Bt.warn(e.message);else{const r=Qt.create("idb-set",{originalErrorMessage:e?.message});Bt.warn(r.message)}}}function Ma(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ah=1024,wh=30;class Rh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ph(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Vo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>wh){const u=Ch(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vo(),{heartbeatsToSend:r,unsentEntries:i}=Sh(this._heartbeatsCache.heartbeats),o=or(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Bt.warn(e),""}}}function Vo(){return new Date().toISOString().substring(0,10)}function Sh(n,t=Ah){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),bo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),bo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ph{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dl()?fl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ih(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Co(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Co(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bo(n){return or(JSON.stringify({version:2,heartbeats:n})).length}function Ch(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Vh(n){cr(new mn("platform-logger",t=>new Ml(t),"PRIVATE")),cr(new mn("heartbeat",t=>new Rh(t),"PRIVATE")),Ce(Es,So,n),Ce(Es,So,"esm2017"),Ce("fire-js","")}Vh("");var bh="firebase",Dh="11.10.0";/**
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
 */Ce(bh,Dh,"app");var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,La;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,w){for(var g=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)g[Lt-2]=arguments[Lt];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var w=T.g[3],g=m+(w^_&(E^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^w&(_^E))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=_;)i(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(y[E++]=T.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<m;)if(y[E++]=T[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;y&&w==m||(_[E]=w,y=!1)}this.g=_}var l={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return D(f(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=v,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+w),m);8>w?(w=f(Math.pow(m,w)),y=y.j(w).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var v=h(0),A=h(1),C=h(16777216);n=u.prototype,n.m=function(){if(O(this))return-D(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(O(this))return"-"+D(this).toString(T);for(var m=f(Math.pow(T,6)),_=this,y="";;){var E=et(_,m).g;_=G(_,E.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,b(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=G(this,T),O(T)?-1:b(T)?0:1};function D(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(A)}n.abs=function(){return O(this)?D(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(T.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,w&=65535,g&=65535,_[E]=g<<16|w}return new u(_,_[_.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(D(m))}n.j=function(T){if(b(this)||b(T))return v;if(O(this))return O(T)?D(this).j(D(T)):D(D(this).j(T));if(O(T))return D(this.j(D(T)));if(0>this.l(C)&&0>T.l(C))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var w=this.i(y)>>>16,g=this.i(y)&65535,Lt=T.i(E)>>>16,qe=T.i(E)&65535;_[2*y+2*E]+=g*qe,B(_,2*y+2*E),_[2*y+2*E+1]+=w*qe,B(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Lt,B(_,2*y+2*E+1),_[2*y+2*E+2]+=w*Lt,B(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function B(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function z(T,m){this.g=T,this.h=m}function et(T,m){if(b(m))throw Error("division by zero");if(b(T))return new z(v,v);if(O(T))return m=et(D(T),m),new z(D(m.g),D(m.h));if(O(m))return m=et(T,D(m)),new z(D(m.g),m.h);if(30<T.g.length){if(O(T)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=m;0>=y.l(T);)_=Mt(_),y=Mt(y);var E=ut(_,1),w=ut(y,1);for(y=ut(y,2),_=ut(_,2);!b(y);){var g=w.add(y);0>=g.l(T)&&(E=E.add(_),w=g),y=ut(y,1),_=ut(_,1)}return m=G(T,E.j(m)),new z(E,m)}for(E=v;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(_),g=w.j(m);O(g)||0<g.l(T);)_-=y,w=f(_),g=w.j(m);b(w)&&(w=A),E=E.add(w),T=G(T,g)}return new z(E,T)}n.A=function(T){return et(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function Mt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function ut(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],w=0;w<y;w++)E[w]=0<m?T.i(w+_)>>>m|T.i(w+_+1)<<32-m:T.i(w+_);return new u(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,La=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=p,Xt=u}).apply(typeof Do<"u"?Do:typeof self<"u"?self:typeof window<"u"?window:{});var Wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,on,Ua,tr,Is,Ba,ja,qa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wn=="object"&&Wn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in c))break t;c=c[I]}s=s[s.length-1],d=c[s],a=a(d),a!=d&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,d=!1,I={next:function(){if(!d&&c<s.length){var R=c++;return{value:a(R,s[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function p(s,a,c){return s.call.apply(s.bind,arguments)}function v(s,a,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function A(s,a,c){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,A.apply(null,arguments)}function C(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function b(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,I,R){for(var V=Array(arguments.length-2),W=2;W<arguments.length;W++)V[W-2]=arguments[W];return a.prototype[I].apply(d,V)}}function O(s){const a=s.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=s[d];return c}return[]}function D(s,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const I=s.length||0,R=d.length||0;s.length=I+R;for(let V=0;V<R;V++)s[I+V]=d[V]}else s.push(d)}}class G{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function B(s){return/^[\s\xa0]*$/.test(s)}function z(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function et(s){return et[" "](s),s}et[" "]=function(){};var Mt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ut(s,a,c){for(const d in s)a.call(c,s[d],d,s)}function T(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function m(s){const a={};for(const c in s)a[c]=s[c];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(c in d)s[c]=d[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function E(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function w(s){l.setTimeout(()=>{throw s},0)}function g(){var s=Ur;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Lt{constructor(){this.h=this.g=null}add(a,c){const d=qe.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var qe=new G(()=>new hc,s=>s.reset());class hc{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,ze=!1,Ur=new Lt,Ei=()=>{const s=l.Promise.resolve(void 0);$e=()=>{s.then(dc)}};var dc=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){w(c)}var a=qe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}ze=!1};function $t(){this.s=this.s,this.C=this.C}$t.prototype.s=!1,$t.prototype.ma=function(){this.s||(this.s=!0,this.N())},$t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var fc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s}();function He(s,a){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Mt){t:{try{et(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:mc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&He.aa.h.call(this)}}b(He,ft);var mc={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),pc=0;function gc(s,a,c,d,I){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=I,this.key=++pc,this.da=this.fa=!1}function bn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Dn(s){this.src=s,this.g={},this.h=0}Dn.prototype.add=function(s,a,c,d,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var V=jr(s,a,d,I);return-1<V?(a=s[V],c||(a.fa=!1)):(a=new gc(a,this.src,R,!!d,I),a.fa=c,s.push(a)),a};function Br(s,a){var c=a.type;if(c in s.g){var d=s.g[c],I=Array.prototype.indexOf.call(d,a,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(bn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function jr(s,a,c,d){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==a&&R.capture==!!c&&R.ha==d)return I}return-1}var qr="closure_lm_"+(1e6*Math.random()|0),$r={};function Ti(s,a,c,d,I){if(Array.isArray(a)){for(var R=0;R<a.length;R++)Ti(s,a[R],c,d,I);return null}return c=Ai(c),s&&s[Vn]?s.K(a,c,f(d)?!!d.capture:!1,I):_c(s,a,c,!1,d,I)}function _c(s,a,c,d,I,R){if(!a)throw Error("Invalid event type");var V=f(I)?!!I.capture:!!I,W=Hr(s);if(W||(s[qr]=W=new Dn(s)),c=W.add(a,c,d,V,R),c.proxy)return c;if(d=yc(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)fc||(I=V),I===void 0&&(I=!1),s.addEventListener(a.toString(),d,I);else if(s.attachEvent)s.attachEvent(Ii(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function yc(){function s(c){return a.call(s.src,s.listener,c)}const a=Ec;return s}function vi(s,a,c,d,I){if(Array.isArray(a))for(var R=0;R<a.length;R++)vi(s,a[R],c,d,I);else d=f(d)?!!d.capture:!!d,c=Ai(c),s&&s[Vn]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],c=jr(R,c,d,I),-1<c&&(bn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=Hr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=jr(a,c,d,I)),(c=-1<s?a[s]:null)&&zr(c))}function zr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Vn])Br(a.i,s);else{var c=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(c,d,s.capture):a.detachEvent?a.detachEvent(Ii(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=Hr(a))?(Br(c,s),c.h==0&&(c.src=null,a[qr]=null)):bn(s)}}}function Ii(s){return s in $r?$r[s]:$r[s]="on"+s}function Ec(s,a){if(s.da)s=!0;else{a=new He(a,this);var c=s.listener,d=s.ha||s.src;s.fa&&zr(s),s=c.call(d,a)}return s}function Hr(s){return s=s[qr],s instanceof Dn?s:null}var Gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ai(s){return typeof s=="function"?s:(s[Gr]||(s[Gr]=function(a){return s.handleEvent(a)}),s[Gr])}function mt(){$t.call(this),this.i=new Dn(this),this.M=this,this.F=null}b(mt,$t),mt.prototype[Vn]=!0,mt.prototype.removeEventListener=function(s,a,c,d){vi(this,s,a,c,d)};function Tt(s,a){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ft(a,s);else if(a instanceof ft)a.target=a.target||s;else{var I=a;a=new ft(d,s),y(a,I)}if(I=!0,c)for(var R=c.length-1;0<=R;R--){var V=a.g=c[R];I=Nn(V,d,!0,a)&&I}if(V=a.g=s,I=Nn(V,d,!0,a)&&I,I=Nn(V,d,!1,a)&&I,c)for(R=0;R<c.length;R++)V=a.g=c[R],I=Nn(V,d,!1,a)&&I}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],d=0;d<c.length;d++)bn(c[d]);delete s.g[a],s.h--}}this.F=null},mt.prototype.K=function(s,a,c,d){return this.i.add(String(s),a,!1,c,d)},mt.prototype.L=function(s,a,c,d){return this.i.add(String(s),a,!0,c,d)};function Nn(s,a,c,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,R=0;R<a.length;++R){var V=a[R];if(V&&!V.da&&V.capture==c){var W=V.listener,ct=V.ha||V.src;V.fa&&Br(s.i,V),I=W.call(ct,d)!==!1&&I}}return I&&!d.defaultPrevented}function wi(s,a,c){if(typeof s=="function")c&&(s=A(s,c));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(s,a||0)}function Ri(s){s.g=wi(()=>{s.g=null,s.i&&(s.i=!1,Ri(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Tc extends $t{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ri(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(s){$t.call(this),this.h=s,this.g={}}b(Ge,$t);var Si=[];function Pi(s){ut(s.g,function(a,c){this.g.hasOwnProperty(c)&&zr(a)},s),s.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),Pi(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kr=l.JSON.stringify,vc=l.JSON.parse,Ic=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Wr(){}Wr.prototype.h=null;function Ci(s){return s.h||(s.h=s.i())}function Vi(){}var Ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qr(){ft.call(this,"d")}b(Qr,ft);function Xr(){ft.call(this,"c")}b(Xr,ft);var ce={},bi=null;function kn(){return bi=bi||new mt}ce.La="serverreachability";function Di(s){ft.call(this,ce.La,s)}b(Di,ft);function We(s){const a=kn();Tt(a,new Di(a))}ce.STAT_EVENT="statevent";function Ni(s,a){ft.call(this,ce.STAT_EVENT,s),this.stat=a}b(Ni,ft);function vt(s){const a=kn();Tt(a,new Ni(a,s))}ce.Ma="timingevent";function ki(s,a){ft.call(this,ce.Ma,s),this.size=a}b(ki,ft);function Qe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Xe(){this.g=!0}Xe.prototype.xa=function(){this.g=!1};function Ac(s,a,c,d,I,R){s.info(function(){if(s.g)if(R)for(var V="",W=R.split("&"),ct=0;ct<W.length;ct++){var H=W[ct].split("=");if(1<H.length){var pt=H[0];H=H[1];var gt=pt.split("_");V=2<=gt.length&&gt[1]=="type"?V+(pt+"="+H+"&"):V+(pt+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+c+`
`+V})}function wc(s,a,c,d,I,R,V){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+c+`
`+R+" "+V})}function Te(s,a,c,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Sc(s,c)+(d?" "+d:"")})}function Rc(s,a){s.info(function(){return"TIMEOUT: "+a})}Xe.prototype.info=function(){};function Sc(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<I.length;V++)I[V]=""}}}}return Kr(c)}catch{return a}}var On={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jr;function xn(){}b(xn,Wr),xn.prototype.g=function(){return new XMLHttpRequest},xn.prototype.i=function(){return{}},Jr=new xn;function zt(s,a,c,d){this.j=s,this.i=a,this.l=c,this.R=d||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xi}function xi(){this.i=null,this.g="",this.h=!1}var Mi={},Yr={};function Zr(s,a,c){s.L=1,s.v=Un(Ft(a)),s.m=c,s.P=!0,Li(s,null)}function Li(s,a){s.F=Date.now(),Mn(s),s.A=Ft(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Ji(c.i,"t",d),s.C=0,c=s.j.J,s.h=new xi,s.g=go(s.j,c?a:null,!s.m),0<s.O&&(s.M=new Tc(A(s.Y,s,s.g),s.O)),a=s.U,c=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Si[0]=I.toString()),I=Si);for(var R=0;R<I.length;R++){var V=Ti(c,I[R],d||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),We(),Ac(s.i,s.u,s.A,s.l,s.R,s.m)}zt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ut(s)==3?a.j():this.Y(s)},zt.prototype.Y=function(s){try{if(s==this.g)t:{const gt=Ut(this.g);var a=this.g.Ba();const Ae=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||so(this.g)))){this.J||gt!=4||a==7||(a==8||0>=Ae?We(3):We(2)),ts(this);var c=this.g.Z();this.X=c;e:if(Fi(this)){var d=so(this.g);s="";var I=d.length,R=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){le(this),Je(this);var V="";break e}this.h.i=new l.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(R&&a==I-1)});d.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,wc(this.i,this.u,this.A,this.l,this.R,gt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ct=this.g;if((W=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(W)){var H=W;break e}}H=null}if(c=H)Te(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,es(this,c);else{this.o=!1,this.s=3,vt(12),le(this),Je(this);break t}}if(this.P){c=!0;let Pt;for(;!this.J&&this.C<V.length;)if(Pt=Pc(this,V),Pt==Yr){gt==4&&(this.s=4,vt(14),c=!1),Te(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Mi){this.s=4,vt(15),Te(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else Te(this.i,this.l,Pt,null),es(this,Pt);if(Fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||V.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)Te(this.i,this.l,V,"[Invalid Chunked Response]"),le(this),Je(this);else if(0<V.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),as(pt),pt.M=!0,vt(11))}}else Te(this.i,this.l,V,null),es(this,V);gt==4&&le(this),this.o&&!this.J&&(gt==4?ho(this.j,this):(this.o=!1,Mn(this)))}else zc(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),le(this),Je(this)}}}catch{}finally{}};function Fi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Pc(s,a){var c=s.C,d=a.indexOf(`
`,c);return d==-1?Yr:(c=Number(a.substring(c,d)),isNaN(c)?Mi:(d+=1,d+c>a.length?Yr:(a=a.slice(d,d+c),s.C=d+c,a)))}zt.prototype.cancel=function(){this.J=!0,le(this)};function Mn(s){s.S=Date.now()+s.I,Ui(s,s.I)}function Ui(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Qe(A(s.ba,s),a)}function ts(s){s.B&&(l.clearTimeout(s.B),s.B=null)}zt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Rc(this.i,this.A),this.L!=2&&(We(),vt(17)),le(this),this.s=2,Je(this)):Ui(this,this.S-s)};function Je(s){s.j.G==0||s.J||ho(s.j,s)}function le(s){ts(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Pi(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function es(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||ns(c.h,s))){if(!s.K&&ns(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Hn(c),$n(c);else break t;os(c),vt(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=Qe(A(c.Za,c),6e3));if(1>=qi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else de(c,11)}else if((s.K||c.g==s)&&Hn(c),!B(a))for(I=c.Da.g.parse(a),a=0;a<I.length;a++){let H=I[a];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const pt=H[3];pt!=null&&(c.la=pt,c.j.info("VER="+c.la));const gt=H[4];gt!=null&&(c.Aa=gt,c.j.info("SVER="+c.Aa));const Ae=H[5];Ae!=null&&typeof Ae=="number"&&0<Ae&&(d=1.5*Ae,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Pt=s.g;if(Pt){const Kn=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kn){var R=d.h;R.g||Kn.indexOf("spdy")==-1&&Kn.indexOf("quic")==-1&&Kn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(rs(R,R.h),R.h=null))}if(d.D){const us=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;us&&(d.ya=us,Q(d.I,d.D,us))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var V=s;if(d.qa=po(d,d.J?d.ia:null,d.W),V.K){$i(d.h,V);var W=V,ct=d.L;ct&&(W.I=ct),W.B&&(ts(W),Mn(W)),d.g=V}else co(d);0<c.i.length&&zn(c)}else H[0]!="stop"&&H[0]!="close"||de(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?de(c,7):is(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}We(4)}catch{}}var Cc=class{constructor(s,a){this.g=s,this.map=a}};function Bi(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ji(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function qi(s){return s.h?1:s.g?s.g.size:0}function ns(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function rs(s,a){s.g?s.g.add(a):s.h=a}function $i(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Bi.prototype.cancel=function(){if(this.i=zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function zi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return O(s.i)}function Vc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,d=0;d<c;d++)a.push(s[d]);return a}a=[],c=0;for(d in s)a[c++]=s[d];return a}function bc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const d in s)a[c++]=d;return a}}}function Hi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=bc(s),d=Vc(s),I=d.length,R=0;R<I;R++)a.call(void 0,d[R],c&&c[R],s)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dc(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),I=null;if(0<=d){var R=s[c].substring(0,d);I=s[c].substring(d+1)}else R=s[c];a(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function he(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof he){this.h=s.h,Ln(this,s.j),this.o=s.o,this.g=s.g,Fn(this,s.s),this.l=s.l;var a=s.i,c=new tn;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),Ki(this,c),this.m=s.m}else s&&(a=String(s).match(Gi))?(this.h=!1,Ln(this,a[1]||"",!0),this.o=Ye(a[2]||""),this.g=Ye(a[3]||"",!0),Fn(this,a[4]),this.l=Ye(a[5]||"",!0),Ki(this,a[6]||"",!0),this.m=Ye(a[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}he.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ze(a,Wi,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ze(a,Wi,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Ze(c,c.charAt(0)=="/"?Oc:kc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Ze(c,Mc)),s.join("")};function Ft(s){return new he(s)}function Ln(s,a,c){s.j=c?Ye(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Fn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ki(s,a,c){a instanceof tn?(s.i=a,Lc(s.i,s.h)):(c||(a=Ze(a,xc)),s.i=new tn(a,s.h))}function Q(s,a,c){s.i.set(a,c)}function Un(s){return Q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ye(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ze(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Nc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Nc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Wi=/[#\/\?@]/g,kc=/[#\?:]/g,Oc=/[#\?]/g,xc=/[#\?@]/g,Mc=/#/g;function tn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Ht(s){s.g||(s.g=new Map,s.h=0,s.i&&Dc(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=tn.prototype,n.add=function(s,a){Ht(this),this.i=null,s=ve(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function Qi(s,a){Ht(s),a=ve(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Xi(s,a){return Ht(s),a=ve(s,a),s.g.has(a)}n.forEach=function(s,a){Ht(this),this.g.forEach(function(c,d){c.forEach(function(I){s.call(a,I,d,this)},this)},this)},n.na=function(){Ht(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const I=s[d];for(let R=0;R<I.length;R++)c.push(a[d])}return c},n.V=function(s){Ht(this);let a=[];if(typeof s=="string")Xi(this,s)&&(a=a.concat(this.g.get(ve(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return Ht(this),this.i=null,s=ve(this,s),Xi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Ji(s,a,c){Qi(s,a),0<c.length&&(s.i=null,s.g.set(ve(s,a),O(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const R=encodeURIComponent(String(d)),V=this.V(d);for(d=0;d<V.length;d++){var I=R;V[d]!==""&&(I+="="+encodeURIComponent(String(V[d]))),s.push(I)}}return this.i=s.join("&")};function ve(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Lc(s,a){a&&!s.j&&(Ht(s),s.i=null,s.g.forEach(function(c,d){var I=d.toLowerCase();d!=I&&(Qi(this,d),Ji(this,I,c))},s)),s.j=a}function Fc(s,a){const c=new Xe;if(l.Image){const d=new Image;d.onload=C(Gt,c,"TestLoadImage: loaded",!0,a,d),d.onerror=C(Gt,c,"TestLoadImage: error",!1,a,d),d.onabort=C(Gt,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(Gt,c,"TestLoadImage: timeout",!1,a,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Uc(s,a){const c=new Xe,d=new AbortController,I=setTimeout(()=>{d.abort(),Gt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?Gt(c,"TestPingServer: ok",!0,a):Gt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Gt(c,"TestPingServer: error",!1,a)})}function Gt(s,a,c,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(c)}catch{}}function Bc(){this.g=new Ic}function jc(s,a,c){const d=c||"";try{Hi(s,function(I,R){let V=I;f(I)&&(V=Kr(I)),a.push(d+R+"="+encodeURIComponent(V))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function Bn(s){this.l=s.Ub||null,this.j=s.eb||!1}b(Bn,Wr),Bn.prototype.g=function(){return new jn(this.l,this.j)},Bn.prototype.i=function(s){return function(){return s}}({});function jn(s,a){mt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(jn,mt),n=jn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,nn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?en(this):nn(this),this.readyState==3&&Yi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,en(this))},n.Qa=function(s){this.g&&(this.response=s,en(this))},n.ga=function(){this.g&&en(this)};function en(s){s.readyState=4,s.l=null,s.j=null,s.v=null,nn(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function nn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Zi(s){let a="";return ut(s,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function ss(s,a,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Zi(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Q(s,a,c))}function Z(s){mt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Z,mt);var qc=/^https?$/i,$c=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?Ci(this.o):Ci(Jr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){to(this,R);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)c.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call($c,a,void 0))||d||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of c)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ro(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){to(this,R)}};function to(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,eo(s),qn(s)}function eo(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?no(this):this.bb())},n.bb=function(){no(this)};function no(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Ut(s)!=4||s.Z()!=2)){if(s.u&&Ut(s)==4)wi(s.Ea,0,s);else if(Tt(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const V=s.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var d;if(d=V===0){var I=String(s.D).match(Gi)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),d=!qc.test(I?I.toLowerCase():"")}c=d}if(c)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var R=2<Ut(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",eo(s)}}finally{qn(s)}}}}function qn(s,a){if(s.g){ro(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Tt(s,"ready");try{c.onreadystatechange=d}catch{}}}function ro(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),vc(a)}};function so(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function zc(s){const a={};s=(s.g&&2<=Ut(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(B(s[d]))continue;var c=E(s[d]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=a[I]||[];a[I]=R,R.push(c)}T(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rn(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function io(s){this.Aa=0,this.i=[],this.j=new Xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rn("baseRetryDelayMs",5e3,s),this.cb=rn("retryDelaySeedMs",1e4,s),this.Wa=rn("forwardChannelMaxRetries",2,s),this.wa=rn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(s&&s.concurrentRequestLimit),this.Da=new Bc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=io.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,d){vt(0),this.W=s,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=po(this,null,this.W),zn(this)};function is(s){if(oo(s),s.G==3){var a=s.U++,c=Ft(s.I);if(Q(c,"SID",s.K),Q(c,"RID",a),Q(c,"TYPE","terminate"),sn(s,c),a=new zt(s,s.j,a),a.L=2,a.v=Un(Ft(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.v,c=!0),c||(a.g=go(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Mn(a)}mo(s)}function $n(s){s.g&&(as(s),s.g.cancel(),s.g=null)}function oo(s){$n(s),s.u&&(l.clearTimeout(s.u),s.u=null),Hn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function zn(s){if(!ji(s.h)&&!s.s){s.s=!0;var a=s.Ga;$e||Ei(),ze||($e(),ze=!0),Ur.add(a,s),s.B=0}}function Hc(s,a){return qi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Qe(A(s.Ga,s,a),fo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new zt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=uo(this,I,a),c=Ft(this.I),Q(c,"RID",s),Q(c,"CVER",22),this.D&&Q(c,"X-HTTP-Session-Id",this.D),sn(this,c),R&&(this.O?a="headers="+encodeURIComponent(String(Zi(R)))+"&"+a:this.m&&ss(c,this.m,R)),rs(this.h,I),this.Ua&&Q(c,"TYPE","init"),this.P?(Q(c,"$req",a),Q(c,"SID","null"),I.T=!0,Zr(I,c,null)):Zr(I,c,a),this.G=2}}else this.G==3&&(s?ao(this,s):this.i.length==0||ji(this.h)||ao(this))};function ao(s,a){var c;a?c=a.l:c=s.U++;const d=Ft(s.I);Q(d,"SID",s.K),Q(d,"RID",c),Q(d,"AID",s.T),sn(s,d),s.m&&s.o&&ss(d,s.m,s.o),c=new zt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=uo(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),rs(s.h,c),Zr(c,d,a)}function sn(s,a){s.H&&ut(s.H,function(c,d){Q(a,d,c)}),s.l&&Hi({},function(c,d){Q(a,d,c)})}function uo(s,a,c){c=Math.min(s.i.length,c);var d=s.l?A(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const V=["count="+c];R==-1?0<c?(R=I[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let W=!0;for(let ct=0;ct<c;ct++){let H=I[ct].g;const pt=I[ct].map;if(H-=R,0>H)R=Math.max(0,I[ct].g-100),W=!1;else try{jc(pt,V,"req"+H+"_")}catch{d&&d(pt)}}if(W){d=V.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,d}function co(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;$e||Ei(),ze||($e(),ze=!0),Ur.add(a,s),s.v=0}}function os(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Qe(A(s.Fa,s),fo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,lo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Qe(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),$n(this),lo(this))};function as(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function lo(s){s.g=new zt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Ft(s.qa);Q(a,"RID","rpc"),Q(a,"SID",s.K),Q(a,"AID",s.T),Q(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Q(a,"TO",s.ja),Q(a,"TYPE","xmlhttp"),sn(s,a),s.m&&s.o&&ss(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Un(Ft(a)),c.m=null,c.P=!0,Li(c,s)}n.Za=function(){this.C!=null&&(this.C=null,$n(this),os(this),vt(19))};function Hn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function ho(s,a){var c=null;if(s.g==a){Hn(s),as(s),s.g=null;var d=2}else if(ns(s.h,a))c=a.D,$i(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;d=kn(),Tt(d,new ki(d,c)),zn(s)}else co(s);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&Hc(s,a)||d==2&&os(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),I){case 1:de(s,5);break;case 4:de(s,10);break;case 3:de(s,6);break;default:de(s,2)}}}function fo(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function de(s,a){if(s.j.info("Error code "+a),a==2){var c=A(s.fb,s),d=s.Xa;const I=!d;d=new he(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ln(d,"https"),Un(d),I?Fc(d.toString(),c):Uc(d.toString(),c)}else vt(2);s.G=0,s.l&&s.l.sa(a),mo(s),oo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function mo(s){if(s.G=0,s.ka=[],s.l){const a=zi(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function po(s,a,c){var d=c instanceof he?Ft(c):new he(c);if(d.g!="")a&&(d.g=a+"."+d.g),Fn(d,d.s);else{var I=l.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var R=new he(null);d&&Ln(R,d),a&&(R.g=a),I&&Fn(R,I),c&&(R.l=c),d=R}return c=s.D,a=s.ya,c&&a&&Q(d,c,a),Q(d,"VER",s.la),sn(s,d),d}function go(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Z(new Bn({eb:c})):new Z(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _o(){}n=_o.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gn(){}Gn.prototype.g=function(s,a){return new wt(s,a)};function wt(s,a){mt.call(this),this.g=new io(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!B(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!B(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Ie(this)}b(wt,mt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){is(this.g)},wt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Kr(s),s=c);a.i.push(new Cc(a.Ya++,s)),a.G==3&&zn(a)},wt.prototype.N=function(){this.g.l=null,delete this.j,is(this.g),delete this.g,wt.aa.N.call(this)};function yo(s){Qr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}b(yo,Qr);function Eo(){Xr.call(this),this.status=1}b(Eo,Xr);function Ie(s){this.g=s}b(Ie,_o),Ie.prototype.ua=function(){Tt(this.g,"a")},Ie.prototype.ta=function(s){Tt(this.g,new yo(s))},Ie.prototype.sa=function(s){Tt(this.g,new Eo)},Ie.prototype.ra=function(){Tt(this.g,"b")},Gn.prototype.createWebChannel=Gn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,qa=function(){return new Gn},ja=function(){return kn()},Ba=ce,Is={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,tr=On,Oi.COMPLETE="complete",Ua=Oi,Vi.EventType=Ke,Ke.OPEN="a",Ke.CLOSE="b",Ke.ERROR="c",Ke.MESSAGE="d",mt.prototype.listen=mt.prototype.K,on=Vi,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Fa=Z}).apply(typeof Wn<"u"?Wn:typeof self<"u"?self:typeof window<"u"?window:{});const No="@firebase/firestore",ko="4.8.0";/**
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
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Fe="11.10.0";/**
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
 */const pe=new Na("@firebase/firestore");function we(){return pe.logLevel}function N(n,...t){if(pe.logLevel<=$.DEBUG){const e=t.map(qs);pe.debug(`Firestore (${Fe}): ${n}`,...e)}}function jt(n,...t){if(pe.logLevel<=$.ERROR){const e=t.map(qs);pe.error(`Firestore (${Fe}): ${n}`,...e)}}function te(n,...t){if(pe.logLevel<=$.WARN){const e=t.map(qs);pe.warn(`Firestore (${Fe}): ${n}`,...e)}}function qs(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,$a(n,r,e)}function $a(n,t,e){let r=`FIRESTORE (${Fe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw jt(r),new Error(r)}function K(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||$a(t,i,r)}function F(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Le{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class za{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class kh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Oh{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Jt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Jt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new za(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class xh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Mh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new xh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Oo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Oo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Fh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function Ha(){return new TextEncoder}/**
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
 */class $s{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Fh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function As(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return U(r,i);{const o=Ha(),u=Uh(o.encode(xo(n,e)),o.encode(xo(t,e)));return u!==0?u:U(r,i)}}e+=r>65535?2:1}return U(n.length,t.length)}function xo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Uh(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Ne(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */const Mo="__name__";class Vt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Vt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Vt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=Vt.isNumericId(t),i=Vt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Vt.extractNumericId(t).compare(Vt.extractNumericId(e)):As(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xt.fromString(t.substring(4,t.length-2))}}class X extends Vt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Bh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Vt{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return Bh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mo}static keyField(){return new ht([Mo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(u=!u,i++):l!=="."||u?(r+=l,i++):(o(),i++)}if(o(),u)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}/**
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
 */function Ga(n,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function jh(n,t,e,r){if(t===!0&&r===!0)throw new k(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Lo(n){if(!x.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Fo(n){if(x.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ka(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function ge(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=zs(n);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function rt(n,t){const e={typeString:n};return t&&(e.value=t),e}function An(n,t){if(!Ka(n))throw new k(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const u=n[r];if(i&&typeof u!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new k(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const Uo=-62135596800,Bo=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Bo);return new J(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Uo)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(An(t,J._jsonSchema))return new J(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Uo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:rt("string",J._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new J(0,0))}static max(){return new L(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const gn=-1;function qh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new J(e+1,0):new J(e,r));return new ee(i,x.empty(),t)}function $h(n){return new ee(n.readTime,n.key,gn)}class ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ee(L.min(),x.empty(),gn)}static max(){return new ee(L.max(),x.empty(),gn)}}function zh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
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
 */const Hh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ue(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Hh)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let i=0,o=0,u=!1;t.forEach(l=>{++i,l.next(()=>{++o,u&&o===i&&e()},h=>r(h))}),u=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(i=>i?S.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,i)=>{const o=t.length,u=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{u[f]=p,++l,l===o&&r(u)},p=>i(p))}})}static doWhile(t,e){return new S((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Kh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Be(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class vr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}vr.ue=-1;/**
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
 */const Hs=-1;function Ir(n){return n==null}function lr(n){return n===0&&1/n==-1/0}function Wh(n){return typeof n=="number"&&Number.isInteger(n)&&!lr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Wa="";function Qh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=jo(t)),t=Xh(n.get(e),t);return jo(t)}function Xh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Wa:e+="";break;default:e+=o}}return e}function jo(n){return n+Wa+""}/**
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
 */function qo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ae(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Qa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Y{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new lt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $o(this.data.getIterator())}getIteratorFrom(t){return new $o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class $o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new it(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Xa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Xa("Invalid base64 string: "+o):o}}(t);return new dt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Jh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Jh.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
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
 */const Ja="server_timestamp",Ya="__type__",Za="__previous_value__",tu="__local_write_time__";function Gs(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ya])===null||e===void 0?void 0:e.stringValue)===Ja}function Ar(n){const t=n.mapValue.fields[Za];return Gs(t)?Ar(t):t}function _n(n){const t=ne(n.mapValue.fields[tu].timestampValue);return new J(t.seconds,t.nanos)}/**
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
 */class Yh{constructor(t,e,r,i,o,u,l,h,f,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=p}}const hr="(default)";class yn{constructor(t,e){this.projectId=t,this.database=e||hr}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database===hr}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const eu="__type__",Zh="__max__",Xn={mapValue:{}},nu="__vector__",dr="value";function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gs(n)?4:ed(n)?9007199254740991:td(n)?10:11:M(28295,{value:n})}function Ot(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _n(n).isEqual(_n(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=ne(i.timestampValue),l=ne(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return re(i.bytesValue).isEqual(re(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=tt(i.doubleValue),l=tt(o.doubleValue);return u===l?lr(u)===lr(l):isNaN(u)&&isNaN(l)}return!1}(n,t);case 9:return Ne(n.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(qo(u)!==qo(l))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(l[h]===void 0||!Ot(u[h],l[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function En(n,t){return(n.values||[]).find(e=>Ot(e,t))!==void 0}function ke(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,u){const l=tt(o.integerValue||o.doubleValue),h=tt(u.integerValue||u.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return zo(n.timestampValue,t.timestampValue);case 4:return zo(_n(n),_n(t));case 5:return As(n.stringValue,t.stringValue);case 6:return function(o,u){const l=re(o),h=re(u);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const l=o.split("/"),h=u.split("/");for(let f=0;f<l.length&&f<h.length;f++){const p=U(l[f],h[f]);if(p!==0)return p}return U(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const l=U(tt(o.latitude),tt(u.latitude));return l!==0?l:U(tt(o.longitude),tt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ho(n.arrayValue,t.arrayValue);case 10:return function(o,u){var l,h,f,p;const v=o.fields||{},A=u.fields||{},C=(l=v[dr])===null||l===void 0?void 0:l.arrayValue,b=(h=A[dr])===null||h===void 0?void 0:h.arrayValue,O=U(((f=C?.values)===null||f===void 0?void 0:f.length)||0,((p=b?.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:Ho(C,b)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Xn.mapValue&&u===Xn.mapValue)return 0;if(o===Xn.mapValue)return 1;if(u===Xn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=u.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const A=As(h[v],p[v]);if(A!==0)return A;const C=ke(l[h[v]],f[p[v]]);if(C!==0)return C}return U(h.length,p.length)}(n.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function zo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=ne(n),r=ne(t),i=U(e.seconds,r.seconds);return i!==0?i:U(e.nanos,r.nanos)}function Ho(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=ke(e[i],r[i]);if(o)return o}return U(e.length,r.length)}function Oe(n){return ws(n)}function ws(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ne(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return re(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=ws(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${ws(e.fields[u])}`;return i+"}"}(n.mapValue):M(61005,{value:n})}function er(n){switch(se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ar(n);return t?16+er(t):16;case 5:return 2*n.stringValue.length;case 6:return re(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+er(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ae(r.fields,(o,u)=>{i+=o.length+er(u)}),i}(n.mapValue);default:throw M(13486,{value:n})}}function Rs(n){return!!n&&"integerValue"in n}function Ks(n){return!!n&&"arrayValue"in n}function Go(n){return!!n&&"nullValue"in n}function Ko(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nr(n){return!!n&&"mapValue"in n}function td(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[eu])===null||e===void 0?void 0:e.stringValue)===nu}function ln(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ae(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ln(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ln(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ed(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Zh}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!nr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ln(e)}setAll(t){let e=ht.emptyPath(),r={},i=[];t.forEach((u,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}u?r[l.lastSegment()]=ln(u):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());nr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];nr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ae(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new At(ln(this.value))}}function ru(n){const t=[];return ae(n.fields,(e,r)=>{const i=new ht([e]);if(nr(r)){const o=ru(r.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new Rt(t)}/**
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
 */class Et{constructor(t,e,r,i,o,u,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new Et(t,0,L.min(),L.min(),L.min(),At.empty(),0)}static newFoundDocument(t,e,r,i){return new Et(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new Et(t,2,e,L.min(),L.min(),At.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,L.min(),L.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fr{constructor(t,e){this.position=t,this.inclusive=e}}function Wo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(u.referenceValue),e.key):r=ke(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ot(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function nd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class su{}class st extends su{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new sd(t,e,r):e==="array-contains"?new ad(t,r):e==="in"?new ud(t,r):e==="not-in"?new cd(t,r):e==="array-contains-any"?new ld(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new id(t,r):new od(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ke(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends su{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new xt(t,e)}matches(t){return iu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function iu(n){return n.op==="and"}function ou(n){return rd(n)&&iu(n)}function rd(n){for(const t of n.filters)if(t instanceof xt)return!1;return!0}function Ss(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+Oe(n.value);if(ou(n))return n.filters.map(t=>Ss(t)).join(",");{const t=n.filters.map(e=>Ss(e)).join(",");return`${n.op}(${t})`}}function au(n,t){return n instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Ot(r.value,i.value)}(n,t):n instanceof xt?function(r,i){return i instanceof xt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,u,l)=>o&&au(u,i.filters[l]),!0):!1}(n,t):void M(19439)}function uu(n){return n instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${Oe(e.value)}`}(n):n instanceof xt?function(e){return e.op.toString()+" {"+e.getFilters().map(uu).join(" ,")+"}"}(n):"Filter"}class sd extends st{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class id extends st{constructor(t,e){super(t,"in",e),this.keys=cu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class od extends st{constructor(t,e){super(t,"not-in",e),this.keys=cu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function cu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class ad extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ks(e)&&En(e.arrayValue,this.value)}}class ud extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&En(this.value.arrayValue,e)}}class cd extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!En(this.value.arrayValue,e)}}class ld extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ks(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>En(this.value.arrayValue,r))}}/**
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
 */class hd{constructor(t,e=null,r=[],i=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=l,this.Pe=null}}function Xo(n,t=null,e=[],r=[],i=null,o=null,u=null){return new hd(n,t,e,r,i,o,u)}function Ws(n){const t=F(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ss(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ir(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Oe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Oe(r)).join(",")),t.Pe=e}return t.Pe}function Qs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!nd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!au(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Qo(n.startAt,t.startAt)&&Qo(n.endAt,t.endAt)}function Ps(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class wr{constructor(t,e=null,r=[],i=[],o=null,u="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function dd(n,t,e,r,i,o,u,l){return new wr(n,t,e,r,i,o,u,l)}function lu(n){return new wr(n)}function Jo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fd(n){return n.collectionGroup!==null}function hn(n){const t=F(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new it(ht.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new mr(o,r))}),e.has(ht.keyField().canonicalString())||t.Te.push(new mr(ht.keyField(),r))}return t.Te}function bt(n){const t=F(n);return t.Ie||(t.Ie=md(t,hn(n))),t.Ie}function md(n,t){if(n.limitType==="F")return Xo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new mr(i.field,o)});const e=n.endAt?new fr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fr(n.startAt.position,n.startAt.inclusive):null;return Xo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Cs(n,t,e){return new wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Rr(n,t){return Qs(bt(n),bt(t))&&n.limitType===t.limitType}function hu(n){return`${Ws(bt(n))}|lt:${n.limitType}`}function Re(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>uu(i)).join(", ")}]`),Ir(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Oe(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Oe(i)).join(",")),`Target(${r})`}(bt(n))}; limitType=${n.limitType})`}function Sr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of hn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(u,l,h){const f=Wo(u,l,h);return u.inclusive?f<=0:f<0}(r.startAt,hn(r),i)||r.endAt&&!function(u,l,h){const f=Wo(u,l,h);return u.inclusive?f>=0:f>0}(r.endAt,hn(r),i))}(n,t)}function pd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function du(n){return(t,e)=>{let r=!1;for(const i of hn(n)){const o=gd(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function gd(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,l){const h=u.data.field(o),f=l.data.field(o);return h!==null&&f!==null?ke(h,f):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
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
 */class ye{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ae(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Qa(this.inner)}size(){return this.innerSize}}/**
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
 */const _d=new Y(x.comparator);function qt(){return _d}const fu=new Y(x.comparator);function an(...n){let t=fu;for(const e of n)t=t.insert(e.key,e);return t}function mu(n){let t=fu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function me(){return dn()}function pu(){return dn()}function dn(){return new ye(n=>n.toString(),(n,t)=>n.isEqual(t))}const yd=new Y(x.comparator),Ed=new it(x.comparator);function j(...n){let t=Ed;for(const e of n)t=t.add(e);return t}const Td=new it(U);function vd(){return Td}/**
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
 */function Xs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lr(t)?"-0":t}}function gu(n){return{integerValue:""+n}}function Id(n,t){return Wh(t)?gu(t):Xs(n,t)}/**
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
 */class Pr{constructor(){this._=void 0}}function Ad(n,t,e){return n instanceof Tn?function(i,o){const u={fields:{[Ya]:{stringValue:Ja},[tu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Gs(o)&&(o=Ar(o)),o&&(u.fields[Za]=o),{mapValue:u}}(e,t):n instanceof vn?yu(n,t):n instanceof In?Eu(n,t):function(i,o){const u=_u(i,o),l=Yo(u)+Yo(i.Ee);return Rs(u)&&Rs(i.Ee)?gu(l):Xs(i.serializer,l)}(n,t)}function wd(n,t,e){return n instanceof vn?yu(n,t):n instanceof In?Eu(n,t):e}function _u(n,t){return n instanceof pr?function(r){return Rs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Tn extends Pr{}class vn extends Pr{constructor(t){super(),this.elements=t}}function yu(n,t){const e=Tu(t);for(const r of n.elements)e.some(i=>Ot(i,r))||e.push(r);return{arrayValue:{values:e}}}class In extends Pr{constructor(t){super(),this.elements=t}}function Eu(n,t){let e=Tu(t);for(const r of n.elements)e=e.filter(i=>!Ot(i,r));return{arrayValue:{values:e}}}class pr extends Pr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Yo(n){return tt(n.integerValue||n.doubleValue)}function Tu(n){return Ks(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Rd{constructor(t,e){this.field=t,this.transform=e}}function Sd(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof vn&&i instanceof vn||r instanceof In&&i instanceof In?Ne(r.elements,i.elements,Ot):r instanceof pr&&i instanceof pr?Ot(r.Ee,i.Ee):r instanceof Tn&&i instanceof Tn}(n.transform,t.transform)}class Pd{constructor(t,e){this.version=t,this.transformResults=e}}class Ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Cr{}function vu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Js(n.key,Ct.none()):new wn(n.key,n.data,Ct.none());{const e=n.data,r=At.empty();let i=new it(ht.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new ue(n.key,r,new Rt(i.toArray()),Ct.none())}}function Cd(n,t,e){n instanceof wn?function(i,o,u){const l=i.value.clone(),h=ta(i.fieldTransforms,o,u.transformResults);l.setAll(h),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ue?function(i,o,u){if(!rr(i.precondition,o))return void o.convertToUnknownDocument(u.version);const l=ta(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Iu(i)),h.setAll(l),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function fn(n,t,e,r){return n instanceof wn?function(o,u,l,h){if(!rr(o.precondition,u))return l;const f=o.value.clone(),p=ea(o.fieldTransforms,h,u);return f.setAll(p),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ue?function(o,u,l,h){if(!rr(o.precondition,u))return l;const f=ea(o.fieldTransforms,h,u),p=u.data;return p.setAll(Iu(o)),p.setAll(f),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,u,l){return rr(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l}(n,t,e)}function Vd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=_u(r.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function Zo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ne(r,i,(o,u)=>Sd(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wn extends Cr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ue extends Cr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Iu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ta(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,l=t.data.field(o.field);r.set(o.field,wd(u,l,e[i]))}return r}function ea(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,Ad(o,u,t))}return r}class Js extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bd extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Dd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Cd(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=pu();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(i.key)?null:l;const h=vu(u,l);h!==null&&r.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,(e,r)=>Zo(e,r))&&Ne(this.baseMutations,t.baseMutations,(e,r)=>Zo(e,r))}}class Ys{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){K(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let i=function(){return yd}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,r[u].version);return new Ys(t,e,r,i)}}/**
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
 */class Nd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class kd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var nt,q;function Od(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Au(n){if(n===void 0)return jt("GRPC error has no .code"),P.UNKNOWN;switch(n){case nt.OK:return P.OK;case nt.CANCELLED:return P.CANCELLED;case nt.UNKNOWN:return P.UNKNOWN;case nt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case nt.INTERNAL:return P.INTERNAL;case nt.UNAVAILABLE:return P.UNAVAILABLE;case nt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case nt.NOT_FOUND:return P.NOT_FOUND;case nt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case nt.ABORTED:return P.ABORTED;case nt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case nt.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}(q=nt||(nt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const xd=new Xt([4294967295,4294967295],0);function na(n){const t=Ha().encode(n),e=new La;return e.update(t),new Uint8Array(e.digest())}function ra(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Xt([e,r],0),new Xt([i,o],0)]}class Zs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new un(`Invalid padding: ${e}`);if(r<0)throw new un(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new un(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Xt.fromNumber(this.fe)}pe(t,e,r){let i=t.add(e.multiply(Xt.fromNumber(r)));return i.compare(xd)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=na(t),[r,i]=ra(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(r,i,o);if(!this.ye(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Zs(o,i,e);return r.forEach(l=>u.insert(l)),u}insert(t){if(this.fe===0)return;const e=na(t),[r,i]=ra(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(r,i,o);this.we(u)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Rn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Vr(L.min(),i,new Y(U),qt(),j())}}class Rn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Rn(r,e,j(),j(),j())}}/**
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
 */class sr{constructor(t,e,r,i){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=i}}class wu{constructor(t,e){this.targetId=t,this.De=e}}class Ru{constructor(t,e,r=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class sa{constructor(){this.ve=0,this.Ce=ia(),this.Fe=dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=j(),e=j(),r=j();return this.Ce.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M(38017,{changeType:o})}}),new Rn(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=ia()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Md{constructor(t){this.We=t,this.Ge=new Map,this.ze=qt(),this.je=Jn(),this.Je=Jn(),this.He=new Y(U)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach((r,i)=>{this.nt(i)&&e(i)})}it(t){const e=t.targetId,r=t.De.count,i=this.st(e);if(i){const o=i.target;if(Ps(o))if(r===0){const u=new x(o.path);this.Xe(e,u,Et.newNoDocument(u,L.min()))}else K(r===1,20013,{expectedCount:r});else{const u=this.ot(e);if(u!==r){const l=this._t(t),h=l?this.ut(l,t,u):1;if(h!==0){this.rt(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,f)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,l;try{u=re(r).toUint8Array()}catch(h){if(h instanceof Xa)return te("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Zs(u,i,o)}catch(h){return te(h instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.fe===0?null:l}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const u=this.We.lt(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Xe(e,o,null),i++)}),i}Pt(t){const e=new Map;this.Ge.forEach((o,u)=>{const l=this.st(u);if(l){if(o.current&&Ps(l.target)){const h=new x(l.target.path);this.Tt(h).has(u)||this.It(u,h)||this.Xe(u,h,Et.newNoDocument(h,t))}o.Ne&&(e.set(u,o.Le()),o.ke())}});let r=j();this.Je.forEach((o,u)=>{let l=!0;u.forEachWhile(h=>{const f=this.st(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ze.forEach((o,u)=>u.setReadTime(t));const i=new Vr(t,e,this.He,this.ze,r);return this.ze=qt(),this.je=Jn(),this.Je=Jn(),this.He=new Y(U),i}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const i=this.tt(t);this.It(t,e)?i.qe(e,1):i.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new sa,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new it(U),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new it(U),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new sa),this.We.getRemoteKeysForTarget(t).forEach(e=>{this.Xe(t,e,null)})}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Jn(){return new Y(x.comparator)}function ia(){return new Y(x.comparator)}const Ld={asc:"ASCENDING",desc:"DESCENDING"},Fd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ud={and:"AND",or:"OR"};class Bd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Vs(n,t){return n.useProto3Json||Ir(t)?t:{value:t}}function gr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Su(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function jd(n,t){return gr(n,t.toTimestamp())}function Dt(n){return K(!!n,49232),L.fromTimestamp(function(e){const r=ne(e);return new J(r.seconds,r.nanos)}(n))}function ti(n,t){return bs(n,t).canonicalString()}function bs(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Pu(n){const t=X.fromString(n);return K(Nu(t),10190,{key:t.toString()}),t}function Ds(n,t){return ti(n.databaseId,t.path)}function fs(n,t){const e=Pu(t);if(e.get(1)!==n.databaseId.projectId)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Vu(e))}function Cu(n,t){return ti(n.databaseId,t)}function qd(n){const t=Pu(n);return t.length===4?X.emptyPath():Vu(t)}function Ns(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vu(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function oa(n,t,e){return{name:Ds(n,t),fields:e.value.mapValue.fields}}function $d(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(K(p===void 0||typeof p=="string",58123),dt.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),dt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&function(f){const p=f.code===void 0?P.UNKNOWN:Au(f.code);return new k(p,f.message||"")}(u);e=new Ru(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=fs(n,r.document.name),o=Dt(r.document.updateTime),u=r.document.createTime?Dt(r.document.createTime):L.min(),l=new At({mapValue:{fields:r.document.fields}}),h=Et.newFoundDocument(i,o,u,l),f=r.targetIds||[],p=r.removedTargetIds||[];e=new sr(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=fs(n,r.document),o=r.readTime?Dt(r.readTime):L.min(),u=Et.newNoDocument(i,o),l=r.removedTargetIds||[];e=new sr([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=fs(n,r.document),o=r.removedTargetIds||[];e=new sr([],o,i,null)}else{if(!("filter"in t))return M(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new kd(i,o),l=r.targetId;e=new wu(l,u)}}return e}function zd(n,t){let e;if(t instanceof wn)e={update:oa(n,t.key,t.value)};else if(t instanceof Js)e={delete:Ds(n,t.key)};else if(t instanceof ue)e={update:oa(n,t.key,t.data),updateMask:Zd(t.fieldMask)};else{if(!(t instanceof bd))return M(16599,{Rt:t.type});e={verify:Ds(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,u){const l=u.transform;if(l instanceof Tn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof In)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pr)return{fieldPath:u.field.canonicalString(),increment:l.Ee};throw M(20930,{transform:u.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:jd(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function Hd(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map(e=>function(i,o){let u=i.updateTime?Dt(i.updateTime):Dt(o);return u.isEqual(L.min())&&(u=Dt(o)),new Pd(u,i.transformResults||[])}(e,t))):[]}function Gd(n,t){return{documents:[Cu(n,t.path)]}}function Kd(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Cu(n,i);const o=function(f){if(f.length!==0)return Du(xt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(p=>function(A){return{field:Se(A.field),direction:Xd(A.dir)}}(p))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=Vs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{Vt:e,parent:i}}function Wd(n){let t=qd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){K(r===1,65062);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(v){const A=bu(v);return A instanceof xt&&ou(A)?A.getFilters():[A]}(e.where));let u=[];e.orderBy&&(u=function(v){return v.map(A=>function(b){return new mr(Pe(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(A))}(e.orderBy));let l=null;e.limit&&(l=function(v){let A;return A=typeof v=="object"?v.value:v,Ir(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(v){const A=!!v.before,C=v.values||[];return new fr(C,A)}(e.startAt));let f=null;return e.endAt&&(f=function(v){const A=!v.before,C=v.values||[];return new fr(C,A)}(e.endAt)),dd(t,i,u,o,l,"F",h,f)}function Qd(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function bu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Pe(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pe(e.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Pe(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Pe(e.unaryFilter.field);return st.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return st.create(Pe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return xt.create(e.compositeFilter.filters.map(r=>bu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function Xd(n){return Ld[n]}function Jd(n){return Fd[n]}function Yd(n){return Ud[n]}function Se(n){return{fieldPath:n.canonicalString()}}function Pe(n){return ht.fromServerFormat(n.fieldPath)}function Du(n){return n instanceof st?function(e){if(e.op==="=="){if(Ko(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NAN"}};if(Go(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ko(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NAN"}};if(Go(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(e.field),op:Jd(e.op),value:e.value}}}(n):n instanceof xt?function(e){const r=e.getFilters().map(i=>Du(i));return r.length===1?r[0]:{compositeFilter:{op:Yd(e.op),filters:r}}}(n):M(54877,{filter:n})}function Zd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Nu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Kt{constructor(t,e,r,i,o=L.min(),u=L.min(),l=dt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class tf{constructor(t){this.gt=t}}function ef(n){const t=Wd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Cs(t,t.limit,"L"):t}/**
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
 */class nf{constructor(){this.Dn=new rf}addToCollectionParentIndex(t,e){return this.Dn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(ee.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class rf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new it(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new it(X.comparator)).toArray()}}/**
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
 */const aa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ku=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(ku,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class xe{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new xe(0)}static ur(){return new xe(-1)}}/**
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
 */const ua="LruGarbageCollector",sf=1048576;function ca([n,t],[e,r]){const i=U(n,e);return i===0?U(t,r):i}class of{constructor(t){this.Tr=t,this.buffer=new it(ca),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ca(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class af{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(ua,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Be(e)?N(ua,"Ignoring IndexedDB error during garbage collection: ",e):await Ue(e)}await this.Rr(3e5)})}}class uf{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(vr.ue);const r=new of(e);return this.Vr.forEachTarget(t,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(t,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(aa)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),aa):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,i,o,u,l,h,f;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,u=Date.now(),this.nthSequenceNumber(t,i))).next(v=>(r=v,l=Date.now(),this.removeTargets(t,r,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(v=>(f=Date.now(),we()<=$.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-p}ms
	Determined least recently used ${i} in `+(l-u)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${v} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v})))}}function cf(n,t){return new uf(n,t)}/**
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
 */class lf{constructor(){this.changes=new ye(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class hf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class df{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&fn(r.mutation,i,Rt.empty(),J.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const i=me();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let u=an();return o.forEach((l,h)=>{u=u.insert(l,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=me();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,l)=>{e.set(u,l)})})}computeViews(t,e,r,i){let o=qt();const u=dn(),l=function(){return dn()}();return e.forEach((h,f)=>{const p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof ue)?o=o.insert(f.key,f):p!==void 0?(u.set(f.key,p.mutation.getFieldMask()),fn(p.mutation,f,p.mutation.getFieldMask(),J.now())):u.set(f.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>u.set(f,p)),e.forEach((f,p)=>{var v;return l.set(f,new hf(p,(v=u.get(f))!==null&&v!==void 0?v:null))}),l))}recalculateAndSaveOverlays(t,e){const r=dn();let i=new Y((u,l)=>u-l),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const l of u)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=r.get(h)||Rt.empty();p=l.applyToLocalView(f,p),r.set(h,p);const v=(i.get(l.batchId)||j()).add(h);i=i.insert(l.batchId,v)})}).next(()=>{const u=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,p=h.value,v=pu();p.forEach(A=>{if(!o.has(A)){const C=vu(e.get(A),r.get(A));C!==null&&v.set(A,C),o=o.add(A)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,v))}return S.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(me());let l=gn,h=o;return u.next(f=>S.forEach(f,(p,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(p=>({batchId:l,changes:mu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let i=an();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=an();return this.indexManager.getCollectionParents(t,o).next(l=>S.forEach(l,h=>{const f=function(v,A){return new wr(A,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(p=>{p.forEach((v,A)=>{u=u.insert(v,A)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(u=>{o.forEach((h,f)=>{const p=f.getKey();u.get(p)===null&&(u=u.insert(p,Et.newInvalidDocument(p)))});let l=an();return u.forEach((h,f)=>{const p=o.get(h);p!==void 0&&fn(p.mutation,f,Rt.empty(),J.now()),Sr(e,f)&&(l=l.insert(h,f))}),l})}}/**
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
 */class ff{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return S.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,function(i){return{name:i.name,query:ef(i.bundledQuery),readTime:Dt(i.readTime)}}(e)),S.resolve()}}/**
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
 */class mf{constructor(){this.overlays=new Y(x.comparator),this.kr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=me();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.wt(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=me(),o=e.length+1,u=new x(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Y((f,p)=>f-p);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=me(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=me(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=i)););return S.resolve(l)}wt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Nd(e,r));let o=this.kr.get(e);o===void 0&&(o=j(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
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
 */class pf{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class ei{constructor(){this.qr=new it(ot.Qr),this.$r=new it(ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new ot(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new ot(t,e))}Gr(t,e){t.forEach(r=>this.removeReference(r,e))}zr(t){const e=new x(new X([])),r=new ot(e,t),i=new ot(e,t+1),o=[];return this.$r.forEachInRange([r,i],u=>{this.Wr(u),o.push(u.key)}),o}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new x(new X([])),r=new ot(e,t),i=new ot(e,t+1);let o=j();return this.$r.forEachInRange([r,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new ot(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return x.comparator(t.key,e.key)||U(t.Hr,e.Hr)}static Ur(t,e){return U(t.Hr,e.Hr)||x.comparator(t.key,e.key)}}/**
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
 */class gf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new it(ot.Qr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Dd(o,e,r,i);this.mutationQueue.push(u);for(const l of i)this.Yr=this.Yr.add(new ot(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,e){return S.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Xr(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Hs:this.er-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,i],u=>{const l=this.Zr(u.Hr);o.push(l)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(U);return e.forEach(i=>{const o=new ot(i,0),u=new ot(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,u],l=>{r=r.add(l.Hr)})}),S.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const u=new ot(new x(o),0);let l=new it(U);return this.Yr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.Hr)),!0)},u),S.resolve(this.ei(l))}ei(t){const e=[];return t.forEach(r=>{const i=this.Zr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){K(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return S.forEach(e.mutations,i=>{const o=new ot(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Yr=r})}rr(t){}containsKey(t,e){const r=new ot(e,0),i=this.Yr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class _f{constructor(t){this.ni=t,this.docs=function(){return new Y(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=qt();const u=e.path,l=new x(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||zh($h(p),r)<=0||(i.has(p.key)||Sr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M(9500)}ri(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new yf(this)}getSize(t){return S.resolve(this.size)}}class yf extends lf{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Or.addEntry(t,i)):this.Or.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class Ef{constructor(t){this.persistence=t,this.ii=new ye(e=>Ws(e),Qs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.si=0,this.oi=new ei,this.targetCount=0,this._i=xe.ar()}forEachTarget(t,e){return this.ii.forEach((r,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),S.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new xe(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.hr(e),S.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ii.forEach((u,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.ii.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.oi.containsKey(e))}}/**
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
 */class Ou{constructor(t,e){this.ai={},this.overlays={},this.ui=new vr(0),this.ci=!1,this.ci=!0,this.li=new pf,this.referenceDelegate=t(this),this.hi=new Ef(this),this.indexManager=new nf,this.remoteDocumentCache=function(i){return new _f(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new tf(e),this.Ti=new ff(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new mf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new gf(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new Tf(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ei(t,e){return S.or(Object.values(this.ai).map(r=>()=>r.containsKey(t,e)))}}class Tf extends Gh{constructor(t){super(),this.currentSequenceNumber=t}}class ni{constructor(t){this.persistence=t,this.Ai=new ei,this.Ri=null}static Vi(t){return new ni(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.mi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.mi,r=>{const i=x.fromPath(r);return this.fi(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return S.or([()=>S.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class _r{constructor(t,e){this.persistence=t,this.gi=new ye(r=>Qh(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=cf(this,e)}static Vi(t,e){return new _r(t,e)}Ii(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}yr(t){let e=0;return this.gr(t,r=>{e++}).next(()=>e)}gr(t,e){return S.forEach(this.gi,(r,i)=>this.Sr(t,r,i).next(o=>o?S.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(t,u=>this.Sr(t,u,e).next(l=>{l||(r++,o.removeEntry(u,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=er(t.data.value)),e}Sr(t,e,r){return S.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.gi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ri{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=i}static Es(t,e){let r=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ri(t,e.fromCache,r,i)}}/**
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
 */class vf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class If{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return hl()?8:Kh(cl())>0?6:4}()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ps(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ys(t,e,i,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new vf;return this.ws(t,e,u).next(l=>{if(o.result=l,this.Rs)return this.Ss(t,e,u,l.size)})}).next(()=>o.result)}Ss(t,e,r,i){return r.documentReadCount<this.Vs?(we()<=$.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Re(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(we()<=$.DEBUG&&N("QueryEngine","Query:",Re(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(we()<=$.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Re(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):S.resolve())}ps(t,e){if(Jo(e))return S.resolve(null);let r=bt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Cs(e,null,"F"),r=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=j(...o);return this.gs.getDocuments(t,u).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.bs(e,l);return this.Ds(e,f,u,h.readTime)?this.ps(t,Cs(e,null,"F")):this.vs(t,f,e,h)}))})))}ys(t,e,r,i){return Jo(e)||i.isEqual(L.min())?S.resolve(null):this.gs.getDocuments(t,r).next(o=>{const u=this.bs(e,o);return this.Ds(e,u,r,i)?S.resolve(null):(we()<=$.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Re(e)),this.vs(t,u,e,qh(i,gn)).next(l=>l))})}bs(t,e){let r=new it(du(t));return e.forEach((i,o)=>{Sr(t,o)&&(r=r.add(o))}),r}Ds(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(t,e,r){return we()<=$.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Re(e)),this.gs.getDocumentsMatchingQuery(t,e,ee.min(),r)}vs(t,e,r,i){return this.gs.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const si="LocalStore",Af=3e8;class wf{constructor(t,e,r,i){this.persistence=t,this.Cs=e,this.serializer=i,this.Fs=new Y(U),this.Ms=new ye(o=>Ws(o),Qs),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new df(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}}function Rf(n,t,e,r){return new wf(n,t,e,r)}async function xu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],l=[];let h=j();for(const f of i){u.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Bs:f,removedBatchIds:u,addedBatchIds:l}))})})}function Sf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return function(l,h,f,p){const v=f.batch,A=v.keys();let C=S.resolve();return A.forEach(b=>{C=C.next(()=>p.getEntry(h,b)).next(O=>{const D=f.docVersions.get(b);K(D!==null,48541),O.version.compareTo(D)<0&&(v.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),p.addEntry(O)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Mu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function Pf(n,t){const e=F(n),r=t.snapshotVersion;let i=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.Os.newChangeBuffer({trackRemovals:!0});i=e.Fs;const l=[];t.targetChanges.forEach((p,v)=>{const A=i.get(v);if(!A)return;l.push(e.hi.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.hi.addMatchingKeys(o,p.addedDocuments,v)));let C=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?C=C.withResumeToken(dt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),i=i.insert(v,C),function(O,D,G){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Af?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(A,C,p)&&l.push(e.hi.updateTargetData(o,C))});let h=qt(),f=j();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(Cf(o,u,t.documentUpdates).next(p=>{h=p.Ls,f=p.ks})),!r.isEqual(L.min())){const p=e.hi.getLastRemoteSnapshotVersion(o).next(v=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return S.waitFor(l).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Fs=i,o))}function Cf(n,t,e){let r=j(),i=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=qt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),u=u.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(l,h)):N(si,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{Ls:u,ks:i}})}function Vf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Hs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function bf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.hi.getTargetData(r,t).next(o=>o?(i=o,S.resolve(i)):e.hi.allocateTargetId(r).next(u=>(i=new Kt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r})}async function ks(n,t,e){const r=F(n),i=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Be(u))throw u;N(si,`Failed to update sequence numbers for target ${t}: ${u}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(i.target)}function la(n,t,e){const r=F(n);let i=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,p){const v=F(h),A=v.Ms.get(p);return A!==void 0?S.resolve(v.Fs.get(A)):v.hi.getTargetData(f,p)}(r,u,bt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,l.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:j())).next(l=>(Df(r,pd(t),l),{documents:l,qs:o})))}function Df(n,t,e){let r=n.xs.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.xs.set(t,r)}class ha{constructor(){this.activeTargetIds=vd()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nf{constructor(){this.Fo=new ha,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new ha,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class kf{xo(t){}shutdown(){}}/**
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
 */const da="ConnectivityMonitor";class fa{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(da,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(da,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yn=null;function Os(){return Yn===null?Yn=function(){return 268435456+Math.round(2147483648*Math.random())}():Yn++,"0x"+Yn.toString(16)}/**
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
 */const ms="RestConnection",Of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xf{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===hr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(t,e,r,i,o){const u=Os(),l=this.Go(t,e.toUriEncodedString());N(ms,`Sending RPC '${t}' ${u}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,i,o);const{host:f}=new URL(l),p=Bs(f);return this.jo(t,l,h,r,p).then(v=>(N(ms,`Received RPC '${t}' ${u}: `,v),v),v=>{throw te(ms,`RPC '${t}' ${u} failed with error: `,v,"url: ",l,"request:",r),v})}Jo(t,e,r,i,o,u){return this.Wo(t,e,r,i,o)}zo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}Go(t,e){const r=Of[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Mf{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const _t="WebChannelConnection";class Lf extends xf{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,i,o){const u=Os();return new Promise((l,h)=>{const f=new Fa;f.setWithCredentials(!0),f.listenOnce(Ua.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case tr.NO_ERROR:const v=f.getResponseJson();N(_t,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(v)),l(v);break;case tr.TIMEOUT:N(_t,`RPC '${t}' ${u} timed out`),h(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const A=f.getStatus();if(N(_t,`RPC '${t}' ${u} failed with status:`,A,"response text:",f.getResponseText()),A>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const b=C?.error;if(b&&b.status&&b.message){const O=function(G){const B=G.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(b.status);h(new k(O,b.message))}else h(new k(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new k(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:u,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{N(_t,`RPC '${t}' ${u} completed.`)}});const p=JSON.stringify(i);N(_t,`RPC '${t}' ${u} sending request:`,i),f.send(e,"POST",p,r,15)})}P_(t,e,r){const i=Os(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=qa(),l=ja(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");N(_t,`Creating RPC '${t}' stream ${i}: ${p}`,h);const v=u.createWebChannel(p,h);this.T_(v);let A=!1,C=!1;const b=new Mf({Ho:D=>{C?N(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(A||(N(_t,`Opening RPC '${t}' stream ${i} transport.`),v.open(),A=!0),N(_t,`RPC '${t}' stream ${i} sending:`,D),v.send(D))},Yo:()=>v.close()}),O=(D,G,B)=>{D.listen(G,z=>{try{B(z)}catch(et){setTimeout(()=>{throw et},0)}})};return O(v,on.EventType.OPEN,()=>{C||(N(_t,`RPC '${t}' stream ${i} transport opened.`),b.s_())}),O(v,on.EventType.CLOSE,()=>{C||(C=!0,N(_t,`RPC '${t}' stream ${i} transport closed`),b.__(),this.I_(v))}),O(v,on.EventType.ERROR,D=>{C||(C=!0,te(_t,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),b.__(new k(P.UNAVAILABLE,"The operation could not be completed")))}),O(v,on.EventType.MESSAGE,D=>{var G;if(!C){const B=D.data[0];K(!!B,16349);const z=B,et=z?.error||((G=z[0])===null||G===void 0?void 0:G.error);if(et){N(_t,`RPC '${t}' stream ${i} received error:`,et);const Mt=et.status;let ut=function(_){const y=nt[_];if(y!==void 0)return Au(y)}(Mt),T=et.message;ut===void 0&&(ut=P.INTERNAL,T="Unknown error status: "+Mt+" with message "+et.message),C=!0,b.__(new k(ut,T)),v.close()}else N(_t,`RPC '${t}' stream ${i} received:`,B),b.a_(B)}}),O(l,Ba.STAT_EVENT,D=>{D.stat===Is.PROXY?N(_t,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===Is.NOPROXY&&N(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.o_()},0),b}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}}function ps(){return typeof document<"u"?document:null}/**
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
 */function br(n){return new Bd(n,!0)}/**
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
 */class Lu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const ma="PersistentStream";class Fu{constructor(t,e,r,i,o,u,l,h){this.Fi=t,this.w_=r,this.S_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Lu(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===e&&this.W_(r,i)},r=>{t(()=>{const i=new k(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return N(ma,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(N(ma,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ff extends Fu{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=$d(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Dt(u.readTime):L.min()}(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=Ns(this.serializer),e.addTarget=function(o,u){let l;const h=u.target;if(l=Ps(h)?{documents:Gd(o,h)}:{query:Kd(o,h).Vt},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=Su(o,u.resumeToken);const f=Vs(o,u.expectedCount);f!==null&&(l.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){l.readTime=gr(o,u.snapshotVersion.toTimestamp());const f=Vs(o,u.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=Qd(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=Ns(this.serializer),e.removeTarget=t,this.k_(e)}}class Uf extends Fu{constructor(t,e,r,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Hd(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=Ns(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>zd(this.serializer,r))};this.k_(e)}}/**
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
 */class Bf{}class jf extends Bf{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Wo(t,bs(e,r),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())})}Jo(t,e,r,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.Jo(t,bs(e,r),i,u,l,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(P.UNKNOWN,u.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class qf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(jt(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const _e="RemoteStore";class $f{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(u=>{r.enqueueAndForget(async()=>{Ee(this)&&(N(_e,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.Ia.add(4),await Sn(f),f.Aa.set("Unknown"),f.Ia.delete(4),await Dr(f)}(this))})}),this.Aa=new qf(r,i)}}async function Dr(n){if(Ee(n))for(const t of n.da)await t(!0)}async function Sn(n){for(const t of n.da)await t(!1)}function Uu(n,t){const e=F(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),ui(e)?ai(e):je(e).x_()&&oi(e,t))}function ii(n,t){const e=F(n),r=je(e);e.Ta.delete(t),r.x_()&&Bu(e,t),e.Ta.size===0&&(r.x_()?r.B_():Ee(e)&&e.Aa.set("Unknown"))}function oi(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}je(n).H_(t)}function Bu(n,t){n.Ra.$e(t),je(n).Y_(t)}function ai(n){n.Ra=new Md({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),je(n).start(),n.Aa.aa()}function ui(n){return Ee(n)&&!je(n).M_()&&n.Ta.size>0}function Ee(n){return F(n).Ia.size===0}function ju(n){n.Ra=void 0}async function zf(n){n.Aa.set("Online")}async function Hf(n){n.Ta.forEach((t,e)=>{oi(n,t)})}async function Gf(n,t){ju(n),ui(n)?(n.Aa.la(t),ai(n)):n.Aa.set("Unknown")}async function Kf(n,t,e){if(n.Aa.set("Online"),t instanceof Ru&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const l of o.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,u),i.Ta.delete(l),i.Ra.removeTarget(l))}(n,t)}catch(r){N(_e,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yr(n,r)}else if(t instanceof sr?n.Ra.Ye(t):t instanceof wu?n.Ra.it(t):n.Ra.et(t),!e.isEqual(L.min()))try{const r=await Mu(n.localStore);e.compareTo(r)>=0&&await function(o,u){const l=o.Ra.Pt(u);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ta.get(f);p&&o.Ta.set(f,p.withResumeToken(h.resumeToken,u))}}),l.targetMismatches.forEach((h,f)=>{const p=o.Ta.get(h);if(!p)return;o.Ta.set(h,p.withResumeToken(dt.EMPTY_BYTE_STRING,p.snapshotVersion)),Bu(o,h);const v=new Kt(p.target,h,f,p.sequenceNumber);oi(o,v)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){N(_e,"Failed to raise snapshot:",r),await yr(n,r)}}async function yr(n,t,e){if(!Be(t))throw t;n.Ia.add(1),await Sn(n),n.Aa.set("Offline"),e||(e=()=>Mu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(_e,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Dr(n)})}function qu(n,t){return t().catch(e=>yr(n,e,t))}async function Nr(n){const t=F(n),e=ie(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Hs;for(;Wf(t);)try{const i=await Vf(t.localStore,r);if(i===null){t.Pa.length===0&&e.B_();break}r=i.batchId,Qf(t,i)}catch(i){await yr(t,i)}$u(t)&&zu(t)}function Wf(n){return Ee(n)&&n.Pa.length<10}function Qf(n,t){n.Pa.push(t);const e=ie(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function $u(n){return Ee(n)&&!ie(n).M_()&&n.Pa.length>0}function zu(n){ie(n).start()}async function Xf(n){ie(n).na()}async function Jf(n){const t=ie(n);for(const e of n.Pa)t.X_(e.mutations)}async function Yf(n,t,e){const r=n.Pa.shift(),i=Ys.from(r,t,e);await qu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Nr(n)}async function Zf(n,t){t&&ie(n).Z_&&await async function(r,i){if(function(u){return Od(u)&&u!==P.ABORTED}(i.code)){const o=r.Pa.shift();ie(r).N_(),await qu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Nr(r)}}(n,t),$u(n)&&zu(n)}async function pa(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),N(_e,"RemoteStore received new credentials");const r=Ee(e);e.Ia.add(3),await Sn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Dr(e)}async function tm(n,t){const e=F(n);t?(e.Ia.delete(2),await Dr(e)):t||(e.Ia.add(2),await Sn(e),e.Aa.set("Unknown"))}function je(n){return n.Va||(n.Va=function(e,r,i){const o=F(e);return o.ia(),new Ff(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:zf.bind(null,n),e_:Hf.bind(null,n),n_:Gf.bind(null,n),J_:Kf.bind(null,n)}),n.da.push(async t=>{t?(n.Va.N_(),ui(n)?ai(n):n.Aa.set("Unknown")):(await n.Va.stop(),ju(n))})),n.Va}function ie(n){return n.ma||(n.ma=function(e,r,i){const o=F(e);return o.ia(),new Uf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Xf.bind(null,n),n_:Zf.bind(null,n),ea:Jf.bind(null,n),ta:Yf.bind(null,n)}),n.da.push(async t=>{t?(n.ma.N_(),await Nr(n)):(await n.ma.stop(),n.Pa.length>0&&(N(_e,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class ci{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,l=new ci(t,e,u,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function li(n,t){if(jt("AsyncQueue",`${t}: ${n}`),Be(n))return new k(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ve{static emptySet(t){return new Ve(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=an(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ve;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ga{constructor(){this.fa=new Y(x.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):M(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal((e,r)=>{t.push(r)}),t}}class Me{constructor(t,e,r,i,o,u,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach(l=>{u.push({type:0,doc:l})}),new Me(t,e,Ve.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class em{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class nm{constructor(){this.queries=_a(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=_a(),o.forEach((u,l)=>{for(const h of l.wa)h.onError(r)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function _a(){return new ye(n=>hu(n),Rr)}async function rm(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Sa()&&t.ba()&&(r=2):(o=new em,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(i,!0);break;case 1:o.ya=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const l=li(u,`Initialization of query '${Re(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&hi(e)}async function sm(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.wa.indexOf(t);u>=0&&(o.wa.splice(u,1),o.wa.length===0?i=t.ba()?0:1:!o.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function im(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const l of u.wa)l.Ca(i)&&(r=!0);u.ya=i}}r&&hi(e)}function om(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.wa)o.onError(e);r.queries.delete(t)}function hi(n){n.Da.forEach(t=>{t.next()})}var xs,ya;(ya=xs||(xs={})).Fa="default",ya.Cache="cache";class am{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Me(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Me.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==xs.Cache}}/**
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
 */class Hu{constructor(t){this.key=t}}class Gu{constructor(t){this.key=t}}class um{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=j(),this.mutatedKeys=j(),this.Xa=du(t),this.eu=new Ve(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new ga,i=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,v)=>{const A=i.get(p),C=Sr(this.query,v)?v:null,b=!!A&&this.mutatedKeys.has(A.key),O=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;A&&C?A.data.isEqual(C.data)?b!==O&&(r.track({type:3,doc:C}),D=!0):this.iu(A,C)||(r.track({type:2,doc:C}),D=!0,(h&&this.Xa(C,h)>0||f&&this.Xa(C,f)<0)&&(l=!0)):!A&&C?(r.track({type:0,doc:C}),D=!0):A&&!C&&(r.track({type:1,doc:A}),D=!0,(h||f)&&(l=!0)),D&&(C?(u=u.add(C),o=O?o.add(p):o.delete(p)):(u=u.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const p=this.query.limitType==="F"?u.last():u.first();u=u.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{eu:u,ru:r,Ds:l,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const u=t.ru.pa();u.sort((p,v)=>function(C,b){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:D})}};return O(C)-O(b)}(p.type,v.type)||this.Xa(p.doc,v.doc)),this.su(r),i=i!=null&&i;const l=e&&!i?this.ou():[],h=this.Za.size===0&&this.current&&!i?1:0,f=h!==this.Ya;return this.Ya=h,u.length!==0||f?{snapshot:new Me(this.query,t.eu,o,u,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ga,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=j(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const e=[];return t.forEach(r=>{this.Za.has(r)||e.push(new Gu(r))}),this.Za.forEach(r=>{t.has(r)||e.push(new Hu(r))}),e}uu(t){this.Ha=t.qs,this.Za=j();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Me.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const di="SyncEngine";class cm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class lm{constructor(t){this.key=t,this.lu=!1}}class hm{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ye(l=>hu(l),Rr),this.Tu=new Map,this.Iu=new Set,this.du=new Y(x.comparator),this.Eu=new Map,this.Au=new ei,this.Ru={},this.Vu=new Map,this.mu=xe.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function dm(n,t,e=!0){const r=Yu(n);let i;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await Ku(r,t,e,!0),i}async function fm(n,t){const e=Yu(n);await Ku(e,t,!0,!1)}async function Ku(n,t,e,r){const i=await bf(n.localStore,bt(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await mm(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&Uu(n.remoteStore,i),l}async function mm(n,t,e,r,i){n.gu=(v,A,C)=>async function(O,D,G,B){let z=D.view.nu(G);z.Ds&&(z=await la(O.localStore,D.query,!1).then(({documents:T})=>D.view.nu(T,z)));const et=B&&B.targetChanges.get(D.targetId),Mt=B&&B.targetMismatches.get(D.targetId)!=null,ut=D.view.applyChanges(z,O.isPrimaryClient,et,Mt);return Ta(O,D.targetId,ut._u),ut.snapshot}(n,v,A,C);const o=await la(n.localStore,t,!0),u=new um(t,o.qs),l=u.nu(o.documents),h=Rn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=u.applyChanges(l,n.isPrimaryClient,h);Ta(n,e,f._u);const p=new cm(t,e,u);return n.Pu.set(t,p),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),f.snapshot}async function pm(n,t,e){const r=F(n),i=r.Pu.get(t),o=r.Tu.get(i.targetId);if(o.length>1)return r.Tu.set(i.targetId,o.filter(u=>!Rr(u,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ks(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ii(r.remoteStore,i.targetId),Ms(r,i.targetId)}).catch(Ue)):(Ms(r,i.targetId),await ks(r.localStore,i.targetId,!0))}async function gm(n,t){const e=F(n),r=e.Pu.get(t),i=e.Tu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ii(e.remoteStore,r.targetId))}async function _m(n,t,e){const r=wm(n);try{const i=await function(u,l){const h=F(u),f=J.now(),p=l.reduce((C,b)=>C.add(b.key),j());let v,A;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let b=qt(),O=j();return h.Os.getEntries(C,p).next(D=>{b=D,b.forEach((G,B)=>{B.isValidDocument()||(O=O.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,b)).next(D=>{v=D;const G=[];for(const B of l){const z=Vd(B,v.get(B.key).overlayedDocument);z!=null&&G.push(new ue(B.key,z,ru(z.value.mapValue),Ct.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,G,l)}).next(D=>{A=D;const G=D.applyToLocalDocumentSet(v,O);return h.documentOverlayCache.saveOverlays(C,D.batchId,G)})}).then(()=>({batchId:A.batchId,changes:mu(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(u,l,h){let f=u.Ru[u.currentUser.toKey()];f||(f=new Y(U)),f=f.insert(l,h),u.Ru[u.currentUser.toKey()]=f}(r,i.batchId,e),await Pn(r,i.changes),await Nr(r.remoteStore)}catch(i){const o=li(i,"Failed to persist write");e.reject(o)}}async function Wu(n,t){const e=F(n);try{const r=await Pf(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Eu.get(o);u&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.lu=!0:i.modifiedDocuments.size>0?K(u.lu,14607):i.removedDocuments.size>0&&(K(u.lu,42227),u.lu=!1))}),await Pn(e,r,t)}catch(r){await Ue(r)}}function Ea(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Pu.forEach((o,u)=>{const l=u.view.va(t);l.snapshot&&i.push(l.snapshot)}),function(u,l){const h=F(u);h.onlineState=l;let f=!1;h.queries.forEach((p,v)=>{for(const A of v.wa)A.va(l)&&(f=!0)}),f&&hi(h)}(r.eventManager,t),i.length&&r.hu.J_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ym(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Eu.get(t),o=i&&i.key;if(o){let u=new Y(x.comparator);u=u.insert(o,Et.newNoDocument(o,L.min()));const l=j().add(o),h=new Vr(L.min(),new Map,new Y(U),u,l);await Wu(r,h),r.du=r.du.remove(o),r.Eu.delete(t),fi(r)}else await ks(r.localStore,t,!1).then(()=>Ms(r,t,e)).catch(Ue)}async function Em(n,t){const e=F(n),r=t.batch.batchId;try{const i=await Sf(e.localStore,t);Xu(e,r,null),Qu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Pn(e,i)}catch(i){await Ue(i)}}async function Tm(n,t,e){const r=F(n);try{const i=await function(u,l){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,l).next(v=>(K(v!==null,37113),p=v.keys(),h.mutationQueue.removeMutationBatch(f,v))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(r.localStore,t);Xu(r,t,e),Qu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Pn(r,i)}catch(i){await Ue(i)}}function Qu(n,t){(n.Vu.get(t)||[]).forEach(e=>{e.resolve()}),n.Vu.delete(t)}function Xu(n,t,e){const r=F(n);let i=r.Ru[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Ru[r.currentUser.toKey()]=i}}function Ms(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach(r=>{n.Au.containsKey(r)||Ju(n,r)})}function Ju(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(ii(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),fi(n))}function Ta(n,t,e){for(const r of e)r instanceof Hu?(n.Au.addReference(r.key,t),vm(n,r)):r instanceof Gu?(N(di,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||Ju(n,r.key)):M(19791,{yu:r})}function vm(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(N(di,"New document in limbo: "+e),n.Iu.add(r),fi(n))}function fi(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new x(X.fromString(t)),r=n.mu.next();n.Eu.set(r,new lm(e)),n.du=n.du.insert(e,r),Uu(n.remoteStore,new Kt(bt(lu(e.path)),r,"TargetPurposeLimboResolution",vr.ue))}}async function Pn(n,t,e){const r=F(n),i=[],o=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach((l,h)=>{u.push(r.gu(h,t,e).then(f=>{var p;if((f||e)&&r.isPrimaryClient){const v=f?!f.fromCache:(p=e?.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(f){i.push(f);const v=ri.Es(h.targetId,f);o.push(v)}}))}),await Promise.all(u),r.hu.J_(i),await async function(h,f){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>S.forEach(f,A=>S.forEach(A.Is,C=>p.persistence.referenceDelegate.addReference(v,A.targetId,C)).next(()=>S.forEach(A.ds,C=>p.persistence.referenceDelegate.removeReference(v,A.targetId,C)))))}catch(v){if(!Be(v))throw v;N(si,"Failed to update sequence numbers: "+v)}for(const v of f){const A=v.targetId;if(!v.fromCache){const C=p.Fs.get(A),b=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(b);p.Fs=p.Fs.insert(A,O)}}}(r.localStore,o))}async function Im(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){N(di,"User change. New user:",t.toKey());const r=await xu(e.localStore,t);e.currentUser=t,function(o,u){o.Vu.forEach(l=>{l.forEach(h=>{h.reject(new k(P.CANCELLED,u))})}),o.Vu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Pn(e,r.Bs)}}function Am(n,t){const e=F(n),r=e.Eu.get(t);if(r&&r.lu)return j().add(r.key);{let i=j();const o=e.Tu.get(t);if(!o)return i;for(const u of o){const l=e.Pu.get(u);i=i.unionWith(l.view.tu)}return i}}function Yu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Am.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ym.bind(null,t),t.hu.J_=im.bind(null,t.eventManager),t.hu.pu=om.bind(null,t.eventManager),t}function wm(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Em.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Tm.bind(null,t),t}class Er{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=br(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Rf(this.persistence,new If,t.initialUser,this.serializer)}Du(t){return new Ou(ni.Vi,this.serializer)}bu(t){return new Nf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Er.provider={build:()=>new Er};class Rm extends Er{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){K(this.persistence.referenceDelegate instanceof _r,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new af(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Ou(r=>_r.Vi(r,e),this.serializer)}}class Ls{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ea(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Im.bind(null,this.syncEngine),await tm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new nm}()}createDatastore(t){const e=br(t.databaseInfo.databaseId),r=function(o){return new Lf(o)}(t.databaseInfo);return function(o,u,l,h){return new jf(o,u,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,u,l){return new $f(r,i,o,u,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Ea(this.syncEngine,e,0),function(){return fa.C()?new fa:new kf}())}createSyncEngine(t,e){return function(i,o,u,l,h,f,p){const v=new hm(i,o,u,l,h,f);return p&&(v.fu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);N(_e,"RemoteStore shutting down."),o.Ia.add(5),await Sn(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ls.provider={build:()=>new Ls};/**
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
 */class Sm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const oe="FirestoreClient";class Pm{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=$s.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{N(oe,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(N(oe,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=li(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function gs(n,t){n.asyncQueue.verifyOperationInProgress(),N(oe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>{te("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{te("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=t}async function va(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Cm(n);N(oe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>pa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>pa(t.remoteStore,i)),n._onlineComponents=t}async function Cm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(oe,"Using user provided OfflineComponentProvider");try{await gs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;te("Error using user provided cache. Falling back to memory cache: "+e),await gs(n,new Er)}}else N(oe,"Using default OfflineComponentProvider"),await gs(n,new Rm(void 0));return n._offlineComponents}async function Zu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(oe,"Using user provided OnlineComponentProvider"),await va(n,n._uninitializedComponentsProvider._online)):(N(oe,"Using default OnlineComponentProvider"),await va(n,new Ls))),n._onlineComponents}function Vm(n){return Zu(n).then(t=>t.syncEngine)}async function bm(n){const t=await Zu(n),e=t.eventManager;return e.onListen=dm.bind(null,t.syncEngine),e.onUnlisten=pm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=fm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=gm.bind(null,t.syncEngine),e}function Dm(n,t,e={}){const r=new Jt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,l,h,f){const p=new Sm({next:A=>{p.Ou(),u.enqueueAndForget(()=>sm(o,v)),A.fromCache&&h.source==="server"?f.reject(new k(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(A)},error:A=>f.reject(A)}),v=new am(l,p,{includeMetadataChanges:!0,ka:!0});return rm(o,v)}(await bm(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function tc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ia=new Map;/**
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
 */const ec="firestore.googleapis.com",Aa=!0;class wa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ec,this.ssl=Aa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Aa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ku;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<sf)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}jh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nh;switch(r.type){case"firstParty":return new Mh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ia.get(e);r&&(N("ComponentProvider","Removing Datastore"),Ia.delete(e),r.terminate())}(this),Promise.resolve()}}function Nm(n,t,e,r={}){var i;n=ge(n,kr);const o=Bs(t),u=n._getSettings(),l=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(sl(`https://${h}`),ul("Firestore",!0)),u.host!==ec&&u.host!==h&&te("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},u),{host:h,ssl:o,emulatorOptions:r});if(!ar(f,l)&&(n._setSettings(f),r.mockUserToken)){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=yt.MOCK_USER;else{p=il(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new yt(A)}n._authCredentials=new kh(new za(p,v))}}/**
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
 */class Or{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Or(this.firestore,t,this._query)}}class at{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new at(this.firestore,t,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(An(e,at._jsonSchema))return new at(t,r||null,new x(X.fromString(e.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:rt("string",at._jsonSchemaVersion),referencePath:rt("string")};class Yt extends Or{constructor(t,e,r){super(t,e,lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new at(this.firestore,null,new x(t))}withConverter(t){return new Yt(this.firestore,t,this._path)}}function Qm(n,t,...e){if(n=Zt(n),Ga("collection","path",t),n instanceof kr){const r=X.fromString(t,...e);return Fo(r),new Yt(n,null,r)}{if(!(n instanceof at||n instanceof Yt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Fo(r),new Yt(n.firestore,null,r)}}function km(n,t,...e){if(n=Zt(n),arguments.length===1&&(t=$s.newId()),Ga("doc","path",t),n instanceof kr){const r=X.fromString(t,...e);return Lo(r),new at(n,null,new x(r))}{if(!(n instanceof at||n instanceof Yt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Lo(r),new at(n.firestore,n instanceof Yt?n.converter:null,new x(r))}}/**
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
 */const Ra="AsyncQueue";class Sa{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Lu(this,"async_queue_retry"),this.oc=()=>{const r=ps();r&&N(Ra,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=ps();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const e=new Jt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Be(t))throw t;N(Ra,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const e=this._c.then(()=>(this.nc=!0,t().catch(r=>{throw this.tc=r,this.nc=!1,jt("INTERNAL UNHANDLED ERROR: ",Pa(r)),r}).then(r=>(this.nc=!1,r))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const i=ci.createAndSchedule(this,t,e,r,o=>this.lc(o));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:Pa(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Pa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Cn extends kr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Sa,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Sa(t),this._firestoreClient=void 0,await t}}}function Xm(n,t){const e=typeof n=="object"?n:Eh(),r=typeof n=="string"?n:hr,i=fh(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=nl("firestore");o&&Nm(i,...o)}return i}function nc(n){if(n._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Om(n),n._firestoreClient}function Om(n){var t,e,r;const i=n._freezeSettings(),o=function(l,h,f,p){return new Yh(l,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,tc(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Pm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l?._online.build();return{_offline:l?._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class St{constructor(t){this._byteString=t}static fromBase64String(t){try{return new St(dt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new St(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(An(t,St._jsonSchema))return St.fromBase64String(t.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:rt("string",St._jsonSchemaVersion),bytes:rt("string")};/**
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
 */class xr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Mr{constructor(t){this._methodName=t}}/**
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
 */class Nt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nt._jsonSchemaVersion}}static fromJSON(t){if(An(t,Nt._jsonSchema))return new Nt(t.latitude,t.longitude)}}Nt._jsonSchemaVersion="firestore/geoPoint/1.0",Nt._jsonSchema={type:rt("string",Nt._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
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
 */class kt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(An(t,kt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new kt(t.vectorValues);throw new k(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kt._jsonSchemaVersion="firestore/vectorValue/1.0",kt._jsonSchema={type:rt("string",kt._jsonSchemaVersion),vectorValues:rt("object")};/**
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
 */const xm=/^__.*__$/;class Mm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new wn(t,this.data,e,this.fieldTransforms)}}class rc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ue(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function sc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:n})}}class mi{constructor(t,e,r,i,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new mi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:r,mc:!1});return i.fc(t),i}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Tr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(sc(this.Ec)&&xm.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Lm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||br(t)}Dc(t,e,r,i=!1){return new mi({Ec:t,methodName:e,bc:r,path:ht.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ic(n){const t=n._freezeSettings(),e=br(n._databaseId);return new Lm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Fm(n,t,e,r,i,o={}){const u=n.Dc(o.merge||o.mergeFields?2:0,t,e,i);gi("Data must be an object, but it was:",u,r);const l=oc(r,u);let h,f;if(o.merge)h=new Rt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const A=Fs(t,v,e);if(!u.contains(A))throw new k(P.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);uc(p,A)||p.push(A)}h=new Rt(p),f=u.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,f=u.fieldTransforms;return new Mm(new At(l),h,f)}class Lr extends Mr{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Lr}}class pi extends Mr{_toFieldTransform(t){return new Rd(t.path,new Tn)}isEqual(t){return t instanceof pi}}function Um(n,t,e,r){const i=n.Dc(1,t,e);gi("Data must be an object, but it was:",i,r);const o=[],u=At.empty();ae(r,(h,f)=>{const p=_i(t,h,e);f=Zt(f);const v=i.gc(p);if(f instanceof Lr)o.push(p);else{const A=Fr(f,v);A!=null&&(o.push(p),u.set(p,A))}});const l=new Rt(o);return new rc(u,l,i.fieldTransforms)}function Bm(n,t,e,r,i,o){const u=n.Dc(1,t,e),l=[Fs(t,r,e)],h=[i];if(o.length%2!=0)throw new k(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)l.push(Fs(t,o[A])),h.push(o[A+1]);const f=[],p=At.empty();for(let A=l.length-1;A>=0;--A)if(!uc(f,l[A])){const C=l[A];let b=h[A];b=Zt(b);const O=u.gc(C);if(b instanceof Lr)f.push(C);else{const D=Fr(b,O);D!=null&&(f.push(C),p.set(C,D))}}const v=new Rt(f);return new rc(p,v,u.fieldTransforms)}function Fr(n,t){if(ac(n=Zt(n)))return gi("Unsupported field value:",t,n),oc(n,t);if(n instanceof Mr)return function(r,i){if(!sc(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(r,i){const o=[];let u=0;for(const l of r){let h=Fr(l,i.yc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Id(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=J.fromDate(r);return{timestampValue:gr(i.serializer,o)}}if(r instanceof J){const o=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gr(i.serializer,o)}}if(r instanceof Nt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:Su(i.serializer,r._byteString)};if(r instanceof at){const o=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw i.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ti(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof kt)return function(u,l){return{mapValue:{fields:{[eu]:{stringValue:nu},[dr]:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw l.wc("VectorValues must only contain numeric values.");return Xs(l.serializer,f)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${zs(r)}`)}(n,t)}function oc(n,t){const e={};return Qa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ae(n,(r,i)=>{const o=Fr(i,t.Vc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ac(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof Nt||n instanceof St||n instanceof at||n instanceof Mr||n instanceof kt)}function gi(n,t,e){if(!ac(e)||!Ka(e)){const r=zs(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function Fs(n,t,e){if((t=Zt(t))instanceof xr)return t._internalPath;if(typeof t=="string")return _i(n,t);throw Tr("Field path arguments must be of type string or ",n,!1,void 0,e)}const jm=new RegExp("[~\\*/\\[\\]]");function _i(n,t,e){if(t.search(jm)>=0)throw Tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new xr(...t.split("."))._internalPath}catch{throw Tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Tr(n,t,e,r,i){const o=r&&!r.isEmpty(),u=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${i}`),h+=")"),new k(P.INVALID_ARGUMENT,l+n+h)}function uc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class cc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(lc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class qm extends cc{data(){return super.data()}}function lc(n,t){return typeof t=="string"?_i(n,t):t instanceof xr?t._internalPath:t._delegate._internalPath}/**
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
 */function $m(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zm{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ae(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[dr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(u=>tt(u.doubleValue));return new kt(o)}convertGeoPoint(t){return new Nt(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ar(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=ne(t);return new J(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);K(Nu(r),9688,{name:t});const i=new yn(r.get(1),r.get(3)),o=new x(r.popFirst(5));return i.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Hm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Zn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class be extends cc{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(lc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=be._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}be._jsonSchemaVersion="firestore/documentSnapshot/1.0",be._jsonSchema={type:rt("string",be._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class ir extends be{data(t={}){return super.data(t)}}class De{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Zn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ir(this._firestore,this._userDataWriter,r.key,r,new Zn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(l=>{const h=new ir(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new ir(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return l.type!==0&&(f=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),p=u.indexOf(l.doc.key)),{type:Gm(l.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=De._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=$s.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Gm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}De._jsonSchemaVersion="firestore/querySnapshot/1.0",De._jsonSchema={type:rt("string",De._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class Km extends zm{constructor(t){super(),this.firestore=t}convertBytes(t){return new St(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new at(this.firestore,null,e)}}function Jm(n){n=ge(n,Or);const t=ge(n.firestore,Cn),e=nc(t),r=new Km(t);return $m(n._query),Dm(e,n._query).then(i=>new De(t,r,n,i))}function Ym(n,t,e,...r){n=ge(n,at);const i=ge(n.firestore,Cn),o=ic(i);let u;return u=typeof(t=Zt(t))=="string"||t instanceof xr?Bm(o,"updateDoc",n._key,t,e,r):Um(o,"updateDoc",n._key,t),yi(i,[u.toMutation(n._key,Ct.exists(!0))])}function Zm(n){return yi(ge(n.firestore,Cn),[new Js(n._key,Ct.none())])}function tp(n,t){const e=ge(n.firestore,Cn),r=km(n),i=Hm(n.converter,t);return yi(e,[Fm(ic(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function yi(n,t){return function(r,i){const o=new Jt;return r.asyncQueue.enqueueAndForget(async()=>_m(await Vm(r),i,o)),o.promise}(nc(n),t)}function ep(){return new pi("serverTimestamp")}(function(t,e=!0){(function(i){Fe=i})(_h),cr(new mn("firestore",(r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),l=new Cn(new Oh(r.getProvider("auth-internal")),new Lh(u,r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(f.options.projectId,p)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Ce(No,ko,t),Ce(No,ko,"esm2017")})();export{Jm as a,tp as b,Qm as c,Zm as d,km as e,Xm as g,yh as i,ep as s,Ym as u};
