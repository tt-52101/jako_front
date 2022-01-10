var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { M as Module, u as useStorage, c as createI18n$1, d as defineComponent, a as useRouter, r as ref, o as openBlock, b as createElementBlock, e as createBaseVNode, n as normalizeClass, p as pushScopeId, f as popScopeId, g as useCssVars, h as computed, i as h, R as RouterLink, j as useMediaQuery, k as usePreferredDark, w as watchEffect, V as VueScrollTo, l as useWindowScroll, m as resolveComponent, q as withModifiers, s as unref, t as createVNode, v as withCtx, x as withDirectives, y as vModelCheckbox, z as isRef, A as createTextVNode, B as createStaticVNode, C as renderSlot, D as createCommentVNode, E as toDisplayString, F as onMounted, P as Plyr, G as onBeforeUnmount, H as Fragment, I as renderList, J as useHead, K as createBlock, L as createRouter$1, N as createWebHistory, O as nprogress$1, Q as defineStore, S as axios, T as provide, U as Notyf, W as v, X as n, Y as useI18n, Z as Transition, _ as createHead, $ as createPinia, a0 as createApp$1, a1 as RouterView, a2 as resolveDynamicComponent } from "./vendor.cb7a739a.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const Iconify = Module.default || Module;
const collections = JSON.parse('[{"prefix":"feather","width":24,"height":24,"icons":{"activity":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 12h-4l-3 9L9 3l-3 9H2\\"/></g>"},"bell":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\\"/><path d=\\"M13.73 21a2 2 0 0 1-3.46 0\\"/></g>"},"calendar":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"4\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M16 2v4\\"/><path d=\\"M8 2v4\\"/><path d=\\"M3 10h18\\"/></g>"},"check":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 6L9 17l-5-5\\"/></g>"},"chevron-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 9l6 6l6-6\\"/></g>"},"chevron-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 18l-6-6l6-6\\"/></g>"},"chevron-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 18l6-6l-6-6\\"/></g>"},"github":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\\"/></g>"},"home":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\\"/><path d=\\"M9 22V12h6v10\\"/></g>"},"link":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\\"/><path d=\\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\\"/></g>"},"lock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"11\\" width=\\"18\\" height=\\"11\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 11V7a5 5 0 0 1 10 0v4\\"/></g>"},"log-out":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\\"/><path d=\\"M16 17l5-5l-5-5\\"/><path d=\\"M21 12H9\\"/></g>"},"mail":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\\"/><path d=\\"M22 6l-10 7L2 6\\"/></g>"},"moon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z\\"/></g>"},"more-vertical":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"12\\" cy=\\"5\\" r=\\"1\\"/><circle cx=\\"12\\" cy=\\"19\\" r=\\"1\\"/></g>"},"plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 5v14\\"/><path d=\\"M5 12h14\\"/></g>"},"search":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"M21 21l-4.35-4.35\\"/></g>"},"settings":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/><path d=\\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\\"/></g>"},"sun":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"5\\"/><path d=\\"M12 1v2\\"/><path d=\\"M12 21v2\\"/><path d=\\"M4.22 4.22l1.42 1.42\\"/><path d=\\"M18.36 18.36l1.42 1.42\\"/><path d=\\"M1 12h2\\"/><path d=\\"M21 12h2\\"/><path d=\\"M4.22 19.78l1.42-1.42\\"/><path d=\\"M18.36 5.64l1.42-1.42\\"/></g>"},"user":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\"/><circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\"/></g>"},"x":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 6L6 18\\"/><path d=\\"M6 6l12 12\\"/></g>"}}},{"prefix":"fa-brands","width":448,"height":512,"icons":{"amazon":{"body":"<path d=\\"M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5c0 109.5 138.3 114 183.5 43.2c6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32C140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5c40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2c0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31c-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2c-10.8 1-13 2-14-.3c-2.3-5.7 21.7-15.5 37.5-17.5c15.7-1.8 41-.8 46 5.7c3.7 5.1 0 27.1-6.5 43.1z\\" fill=\\"currentColor\\"/>"},"dribbble":{"body":"<path d=\\"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978z\\" fill=\\"currentColor\\"/>","width":512},"facebook-f":{"body":"<path d=\\"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\\" fill=\\"currentColor\\"/>","width":320},"github-alt":{"body":"<path d=\\"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1s10.9-55.1 36.7-55.1s36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95c-37.9 76.6-142.1 74.8-216.7 74.8c-75.8 0-186.2 2.7-225.6-74.8c-14.6-29-20.2-63.1-20.2-95c0-41.9 13.9-81.5 41.5-113.6c-5.2-15.8-7.7-32.4-7.7-48.8c0-21.5 4.9-32.3 14.6-51.8c45.3 0 74.3 9 108.8 36c29-6.9 58.8-10 88.7-10c27 0 54.2 2.9 80.4 9.2c34-26.7 63-35.2 107.8-35.2c9.8 19.5 14.6 30.3 14.6 51.8c0 16.4-2.6 32.7-7.7 48.2c27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6c-18.9 0-37 3.4-56 6c-14.9 2.3-29.8 3.2-45.1 3.2c-15.2 0-30.1-.9-45.1-3.2c-18.7-2.6-37-6-56-6c-46.8 0-73.5 38.7-73.5 82.6c0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1s36.7-34.2 36.7-55.1s-10.9-55.1-36.7-55.1z\\" fill=\\"currentColor\\"/>","width":480},"google-plus-g":{"body":"<path d=\\"M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599c-65.484 0-118.92 54.221-118.92 121.277c0 67.056 53.436 121.277 118.92 121.277c75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z\\" fill=\\"currentColor\\"/>","width":640},"instagram":{"body":"<path d=\\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\\" fill=\\"currentColor\\"/>"},"invision":{"body":"<path d=\\"M407.4 32H40.6C18.2 32 0 50.2 0 72.6v366.8C0 461.8 18.2 480 40.6 480h366.8c22.4 0 40.6-18.2 40.6-40.6V72.6c0-22.4-18.2-40.6-40.6-40.6zM176.1 145.6c.4 23.4-22.4 27.3-26.6 27.4c-14.9 0-27.1-12-27.1-27c.1-35.2 53.1-35.5 53.7-.4zM332.8 377c-65.6 0-34.1-74-25-106.6c14.1-46.4-45.2-59-59.9.7l-25.8 103.3H177l8.1-32.5c-31.5 51.8-94.6 44.4-94.6-4.3c.1-14.3.9-14 23-104.1H81.7l9.7-35.6h76.4c-33.6 133.7-32.6 126.9-32.9 138.2c0 20.9 40.9 13.5 57.4-23.2l19.8-79.4h-32.3l9.7-35.6h68.8l-8.9 40.5c40.5-75.5 127.9-47.8 101.8 38c-14.2 51.1-14.6 50.7-14.9 58.8c0 15.5 17.5 22.6 31.8-16.9L386 325c-10.5 36.7-29.4 52-53.2 52z\\" fill=\\"currentColor\\"/>"},"linkedin-in":{"body":"<path d=\\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z\\" fill=\\"currentColor\\"/>"},"reddit-alien":{"body":"<path d=\\"M440.3 203.5c-15 0-28.2 6.2-37.9 15.9c-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2c22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8c-9.7-10.1-23.4-16.3-38.4-16.3c-55.6 0-73.8 74.6-22.9 100.1c-1.8 7.9-2.6 16.3-2.6 24.7c0 83.8 94.4 151.7 210.3 151.7c116.4 0 210.8-67.9 210.8-151.7c0-8.4-.9-17.2-3.1-25.1c49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7c21.6 0 39.2 17.6 39.2 39.7c0 21.6-17.6 39.2-39.2 39.2c-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0c-4-3.5-4-9.7 0-13.7c3.5-3.5 9.7-3.5 13.2 0c27.8 28.5 120 29 149 0c3.5-3.5 9.7-3.5 13.2 0c4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2c0-22 17.6-39.7 39.2-39.7c22 0 39.7 17.6 39.7 39.7c-.1 21.5-17.7 39.2-39.7 39.2z\\" fill=\\"currentColor\\"/>","width":512},"tumblr":{"body":"<path d=\\"M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7c-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16c62-21.8 81.5-76 84.3-117.1c.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8c4.8-1.9 9-3.2 12.7-2.2c3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z\\" fill=\\"currentColor\\"/>","width":320},"twitter":{"body":"<path d=\\"M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z\\" fill=\\"currentColor\\"/>","width":512},"youtube":{"body":"<path d=\\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z\\" fill=\\"currentColor\\"/>","width":576}}},{"prefix":"fa","width":1536,"height":1536,"icons":{"angle-down":{"body":"<path d=\\"M1011 480q0 13-10 23L535 969q-10 10-23 10t-23-10L23 503q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393l393-393q10-10 23-10t23 10l50 50q10 10 10 23z\\" fill=\\"currentColor\\"/>","width":1024,"height":1280,"inlineTop":-256},"angle-up":{"body":"<path d=\\"M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z\\" fill=\\"currentColor\\"/>","width":1024,"height":1280,"inlineTop":-256}}},{"prefix":"ion","width":512,"height":512,"icons":{"reload-outline":{"body":"<path d=\\"M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><path d=\\"M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z\\" fill=\\"currentColor\\"/>"}}}]');
collections.forEach((c) => Iconify.addCollection(c));
var nprogress = "";
var _default$1 = "";
var _default = "";
var simplebar = "";
var tinySlider = "";
var notyf_min = "";
var tippy = "";
var svgArrow = "";
var border = "";
var backdrop = "";
var light = "";
var main = "";
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
var messages = {
  "de": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sprache ausw\xE4hlen"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Jetzt mitmachen"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Beginnen Sie mit der Erstellung Ihres Kontos"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Erhalten Sie Werbeangebote"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ich habe bereits ein Konto"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registrieren"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mailadresse"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Passwort"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Passwort\xFCberpr\xFCfung"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ihr Name, Vorname ist erforderlich"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Geben Sie Ihre E-Mail ein, sie wird f\xFCr die Anmeldung ben\xF6tigt"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bitte geben Sie eine g\xFCltige E-Mail ein"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Geben Sie Ihr Passwort mit mindestens 8 Zeichen ein, es wird f\xFCr die Anmeldung ben\xF6tigt"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Das Passwort sollte mindestens 8 Zeichen enthalten"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bitte best\xE4tigen Sie Ihr Passwort"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Das Passwort stimmt nicht \xFCberein"]);
          }
        }
      }
    }
  },
  "en": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select Language"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Join Us Now."]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Start by creating your account"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Receive promotional offers"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["I already have an account"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sign Up"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Email Address"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Password"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Password Verification"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Your name first name is required"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Enter your email, it will be required to login"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Please, enter a valid email"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Enter your password with at least 8 characters, it will be required to login"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["The password should contains at leat 8 characters"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Please, confirm your password"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["The password does not match"]);
          }
        }
      }
    }
  },
  "es-MX": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seleccione el idioma"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\xDAnete a nosotros ahora"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Empieza creando tu cuenta"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recibe ofertas promocionales"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ya tengo una cuenta"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registrarse"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Direcci\xF3n de correo electr\xF3nico"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contrase\xF1a"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Verificaci\xF3n de contrase\xF1a"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Su nombre es obligatorio"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su correo electr\xF3nico, ser\xE1 necesario para iniciar la sesi\xF3n"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, introduzca un correo electr\xF3nico v\xE1lido"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su contrase\xF1a con al menos 8 caracteres, ser\xE1 necesaria para iniciar la sesi\xF3n"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a debe contener al menos 8 caracteres"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, confirme su contrase\xF1a"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a no coincide"]);
          }
        }
      }
    }
  },
  "es": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seleccione el idioma"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\xDAnete a nosotros ahora"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Empieza creando tu cuenta"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recibe ofertas promocionales"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ya tengo una cuenta"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registrarse"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Direcci\xF3n de correo electr\xF3nico"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contrase\xF1a"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Verificaci\xF3n de contrase\xF1a"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Su nombre es obligatorio"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su correo electr\xF3nico, ser\xE1 necesario para iniciar la sesi\xF3n"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, introduzca un correo electr\xF3nico v\xE1lido"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su contrase\xF1a con al menos 8 caracteres, ser\xE1 necesaria para iniciar la sesi\xF3n"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a debe contener al menos 8 caracteres"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, confirme su contrase\xF1a"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a no coincide"]);
          }
        }
      }
    }
  },
  "fr": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\xE9lectionnez une langue"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Rejoignez-nous maintenant"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Commencez par cr\xE9er votre compte"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recevez des offres promotionnelles"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["J'ai d\xE9j\xE0 un compte"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cr\xE9er un compte"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nom"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Adresse \xE9lectronique"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mot de passe"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["V\xE9rification du mot de passe"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Votre nom, pr\xE9nom est obligatoire"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Entrez votre email, il sera n\xE9cessaire pour vous connecter"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Veuillez entrer une adresse \xE9lectronique valide"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Entrez votre mot de passe avec au moins 8 caract\xE8res, il vous sera demand\xE9 pour vous connecter"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Le mot de passe doit contenir au moins 8 caract\xE8res"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Veuillez confirmer votre mot de passe"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Le mot de passe ne correspond pas"]);
          }
        }
      }
    }
  },
  "zh-CN": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9009\u62E9\u8BED\u8A00"]);
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u73B0\u5728\u5C31\u52A0\u5165\u6211\u4EEC"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4ECE\u521B\u5EFA\u4F60\u7684\u8D26\u6237\u5F00\u59CB"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u63A5\u6536\u4FC3\u9500\u4F18\u60E0"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6211\u5DF2\u7ECF\u6709\u4E00\u4E2A\u8D26\u6237"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6CE8\u518C"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u59D3\u540D"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7535\u5B50\u90AE\u4EF6\u5730\u5740"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5BC6\u7801"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5BC6\u7801\u9A8C\u8BC1"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u60A8\u7684\u59D3\u540D\u662F\u5FC5\u586B\u7684"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8F93\u5165\u4F60\u7684\u7535\u5B50\u90AE\u4EF6\uFF0C\u5B83\u5C06\u662F\u767B\u5F55\u7684\u5FC5\u8981\u6761\u4EF6"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BF7\u8F93\u5165\u4E00\u4E2A\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BF7\u8F93\u5165\u4F60\u7684\u5BC6\u7801\uFF0C\u81F3\u5C11\u67098\u4E2A\u5B57\u7B26\uFF0C\u767B\u5F55\u65F6\u5FC5\u987B\u8F93\u5165"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5BC6\u7801\u5E94\u81F3\u5C11\u5305\u542B8\u4E2A\u5B57\u7B26"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BF7\u786E\u8BA4\u60A8\u7684\u5BC6\u7801"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BE5\u5BC6\u7801\u4E0D\u5339\u914D"]);
          }
        }
      }
    }
  }
};
function createI18n() {
  const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "en");
  const i18n = createI18n$1({
    locale: defaultLocale.value,
    messages
  });
  return i18n;
}
var AnimatedLogo_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _withScopeId = (n2) => (pushScopeId("data-v-47361cec"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$b = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("g", null, [
  /* @__PURE__ */ createBaseVNode("path", {
    class: "right",
    d: "M67.3,55.7L75.6,70l3.7,6.4l22.1,38.3l35.9-0.1L78.2,14.1L61.2,45L67.3,55.7z M130.1,114.5l-21.3,0.1"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    class: "left",
    d: "M39.1,145.9l11.7-20.3l2.7-4.7l3.7-6.4l22.1-38.3L61.2,45L3.6,145.9H39.1z M64.8,51.5l2.5,4.2l8.3,14.2V70\n			L64.8,51.5z"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    class: "bottom",
    d: "M39,145.9h117.4l-19.1-31.4l-80.1,0.1L39,145.9z M53.4,121l-10.6,18.5l7.9-13.9L53.4,121z"
  })
], -1));
const _hoisted_2$b = [
  _hoisted_1$b
];
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  props: {
    light: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const isLoading = ref(false);
    router.beforeEach(() => {
      isLoading.value = true;
    });
    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 200);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        id: "OBJECTS",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 160 160",
        style: { "enable-background": "new 0 0 160 160" },
        "xml:space": "preserve",
        class: normalizeClass([props.light && "is-light"])
      }, [
        createBaseVNode("g", {
          class: normalizeClass([isLoading.value && "is-roll"])
        }, _hoisted_2$b, 2)
      ], 2);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-47361cec"]]);
const CssUnitRe = /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;
var VPlaceload_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  props: {
    width: { type: String, required: false, default: "100%" },
    height: { type: String, required: false, default: "10px" },
    disabled: { type: Boolean, required: false },
    centered: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    useCssVars((_ctx) => ({
      "5f472bef": props.width,
      "0e8f8ec0": __props.height
    }));
    if (props.width.match(CssUnitRe) === null) {
      console.warn(`VPlaceload: invalid "${props.width}" width. Should be a valid css unit value.`);
    }
    if (props.height.match(CssUnitRe) === null) {
      console.warn(`VPlaceload: invalid "${props.height}" height. Should be a valid css unit value.`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["content-shape", [props.centered && "is-centered", !props.disabled && "loads"]])
      }, null, 2);
    };
  }
});
var VPlaceload = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-18376a5b"]]);
const _sfc_main$f = defineComponent({
  props: {
    to: {
      type: [Object, String],
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    },
    icon: {
      type: String,
      default: void 0
    },
    iconCaret: {
      type: String,
      default: void 0
    },
    placeload: {
      type: String,
      default: void 0,
      validator: (value) => {
        if (value.match(CssUnitRe) === null) {
          console.warn(`VButton: invalid "${value}" placeload. Should be a valid css unit value.`);
        }
        return true;
      }
    },
    color: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([
          void 0,
          "primary",
          "info",
          "success",
          "warning",
          "danger",
          "white",
          "dark",
          "light"
        ].indexOf(value) === -1) {
          console.warn(`VButton: invalid "${value}" color. Should be primary, info, success, warning, danger, dark, light, white or undefined`);
          return false;
        }
        return true;
      }
    },
    size: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "big", "huge"].indexOf(value) === -1) {
          console.warn(`VButton: invalid "${value}" size. Should be big, huge or undefined`);
          return false;
        }
        return true;
      }
    },
    dark: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "1", "2", "3", "4", "5", "6"].indexOf(value) === -1) {
          console.warn(`VButton: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`);
          return false;
        }
        return true;
      }
    },
    rounded: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    elevated: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    darkOutlined: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    lower: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots, attrs }) {
    const classes = computed(() => {
      var _a;
      const defaultClasses = (_a = attrs == null ? void 0 : attrs.class) != null ? _a : [];
      return [
        ...defaultClasses,
        "button",
        "v-button",
        props.disabled && "is-disabled",
        props.rounded && "is-rounded",
        props.bold && "is-bold",
        props.size && `is-${props.size}`,
        props.lower && "is-lower",
        props.fullwidth && "is-fullwidth",
        props.outlined && "is-outlined",
        props.dark && `is-dark-bg-${props.dark}`,
        props.darkOutlined && "is-dark-outlined",
        props.raised && "is-raised",
        props.elevated && "is-elevated",
        props.loading && !props.placeload && "is-loading",
        props.color && `is-${props.color}`,
        props.light && "is-light"
      ];
    });
    const isIconify = computed(() => props.icon && props.icon.indexOf(":") !== -1);
    const isCaretIconify = computed(() => props.iconCaret && props.iconCaret.indexOf(":") !== -1);
    const getChildrens = () => {
      var _a;
      const childrens = [];
      let iconWrapper;
      if (isIconify.value) {
        const icon = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.icon
        });
        iconWrapper = h("span", { class: "icon" }, icon);
      } else if (props.icon) {
        const icon = h("i", { "aria-hidden": true, class: props.icon });
        iconWrapper = h("span", { class: "icon" }, icon);
      }
      let caretWrapper;
      if (isCaretIconify.value) {
        const caret = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.iconCaret
        });
        caretWrapper = h("span", { class: "caret" }, caret);
      } else if (props.iconCaret) {
        const caret = h("i", { "aria-hidden": true, class: props.iconCaret });
        caretWrapper = h("span", { class: "caret" }, caret);
      }
      if (iconWrapper) {
        childrens.push(iconWrapper);
      }
      if (props.placeload) {
        childrens.push(h(VPlaceload, {
          width: props.placeload
        }));
      } else {
        childrens.push(h("span", (_a = slots.default) == null ? void 0 : _a.call(slots)));
      }
      if (caretWrapper) {
        childrens.push(caretWrapper);
      }
      return childrens;
    };
    return () => {
      if (props.to) {
        return h(RouterLink, __spreadProps(__spreadValues({}, attrs), {
          "aria-hidden": !!props.placeload && true,
          to: props.to,
          class: ["button", ...classes.value]
        }), {
          default: getChildrens
        });
      } else if (props.href) {
        return h("a", __spreadProps(__spreadValues({}, attrs), {
          "aria-hidden": !!props.placeload && true,
          href: props.href,
          class: classes.value
        }), {
          default: getChildrens
        });
      }
      return h("button", __spreadProps(__spreadValues({
        type: "button"
      }, attrs), {
        "aria-hidden": !!props.placeload && true,
        disabled: props.disabled,
        class: ["button", ...classes.value]
      }), {
        default: getChildrens
      });
    };
  }
});
const isLargeScreen = useMediaQuery("(min-width: 1023px)");
useMediaQuery("(min-width: 767px)");
const DARK_MODE_BODY_CLASS = "is-dark";
const preferredDark = usePreferredDark();
const colorSchema = useStorage("color-schema", "auto");
const isDark = computed({
  get() {
    return colorSchema.value === "auto" ? preferredDark.value : colorSchema.value === "dark";
  },
  set(v2) {
    if (v2 === preferredDark.value)
      colorSchema.value = "auto";
    else
      colorSchema.value = v2 ? "dark" : "light";
  }
});
const toggleDarkModeHandler = (event) => {
  const target = event.target;
  isDark.value = !target.checked;
};
watchEffect(() => {
  const body = document.documentElement;
  if (isDark.value) {
    body.classList.add(DARK_MODE_BODY_CLASS);
  } else {
    body.classList.remove(DARK_MODE_BODY_CLASS);
  }
});
const _hoisted_1$a = { class: "navbar-brand" };
const _hoisted_2$a = { class: "brand-icon" };
const _hoisted_3$a = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, null, -1);
const _hoisted_4$9 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, null, -1);
const _hoisted_5$8 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, null, -1);
const _hoisted_6$8 = [
  _hoisted_3$a,
  _hoisted_4$9,
  _hoisted_5$8
];
const _hoisted_7$8 = { class: "navbar-start" };
const _hoisted_8$7 = { class: "navbar-item" };
const _hoisted_9$7 = /* @__PURE__ */ createTextVNode(" Awesome Features ");
const _hoisted_10$7 = { class: "navbar-end" };
const _hoisted_11$4 = { class: "navbar-item is-theme-toggle" };
const _hoisted_12$4 = { class: "theme-toggle" };
const _hoisted_13$3 = /* @__PURE__ */ createStaticVNode('<span class="toggler"><span class="dark"><i aria-hidden="true" class="iconify" data-icon="feather:moon"></i></span><span class="light"><i aria-hidden="true" class="iconify" data-icon="feather:sun"></i></span></span>', 1);
const _hoisted_14$3 = { class: "navbar-item" };
const _hoisted_15$3 = /* @__PURE__ */ createTextVNode(" Login ");
const _hoisted_16$3 = { class: "navbar-item" };
const _hoisted_17$3 = /* @__PURE__ */ createBaseVNode("strong", null, "Sign up", -1);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const isMobileNavOpen = ref(false);
    useRouter();
    const scrollTo = VueScrollTo.scrollTo;
    const { y } = useWindowScroll();
    const isScrolling = computed(() => {
      return y.value > 30;
    });
    watchEffect(() => {
      if (isLargeScreen.value) {
        isMobileNavOpen.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButton = _sfc_main$f;
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(["navbar is-fixed-top is-transparent", [!unref(isScrolling) && "is-docked", isMobileNavOpen.value && "is-solid"]]),
        "aria-label": "main navigation"
      }, [
        createBaseVNode("div", _hoisted_1$a, [
          createBaseVNode("a", {
            href: "/",
            class: "navbar-item",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => unref(scrollTo)("#app", 800), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_2$a, [
              createVNode(_component_AnimatedLogo, {
                width: "34px",
                height: "34px"
              })
            ])
          ]),
          createBaseVNode("a", {
            role: "button",
            class: normalizeClass([[isMobileNavOpen.value && "is-active"], "navbar-burger burger"]),
            "aria-label": "menu",
            tabindex: "0",
            "aria-expanded": "false",
            onClick: _cache[1] || (_cache[1] = ($event) => isMobileNavOpen.value = !isMobileNavOpen.value)
          }, _hoisted_6$8, 2)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["navbar-menu", [isMobileNavOpen.value && "is-active"]])
        }, [
          createBaseVNode("div", _hoisted_7$8, [
            createBaseVNode("div", _hoisted_8$7, [
              createVNode(_component_RouterLink, {
                to: {
                  name: "index"
                },
                class: "nav-link",
                onClickPassive: _cache[2] || (_cache[2] = () => {
                  unref(scrollTo)("#features", 800, { offset: -50 });
                  isMobileNavOpen.value = false;
                })
              }, {
                default: withCtx(() => [
                  _hoisted_9$7
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_10$7, [
            createBaseVNode("div", _hoisted_11$4, [
              createBaseVNode("label", _hoisted_12$4, [
                withDirectives(createBaseVNode("input", {
                  id: "navbar-night-toggle--daynight",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(isDark) ? isDark.value = $event : null),
                  type: "checkbox"
                }, null, 512), [
                  [vModelCheckbox, unref(isDark)]
                ]),
                _hoisted_13$3
              ])
            ]),
            createBaseVNode("div", _hoisted_14$3, [
              createVNode(_component_RouterLink, {
                to: { name: "auth-login" },
                class: "nav-link"
              }, {
                default: withCtx(() => [
                  _hoisted_15$3
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_16$3, [
              createVNode(_component_VButton, {
                to: { name: "auth-signup" },
                color: "primary",
                rounded: "",
                raised: ""
              }, {
                default: withCtx(() => [
                  _hoisted_17$3
                ]),
                _: 1
              })
            ])
          ])
        ], 2)
      ], 2);
    };
  }
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  props: {
    size: { type: String, required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    rounded: { type: Boolean, required: false },
    bordered: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["v-icon", [
          props.size && "is-" + props.size,
          props.color && "is-" + props.color,
          props.rounded && "is-rounded",
          props.bordered && "is-bordered"
        ]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main$c = {};
const _hoisted_1$9 = { class: "section has-bg-dots" };
const _hoisted_2$9 = { class: "container" };
const _hoisted_3$9 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered py-6" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "Awesome Features"),
  /* @__PURE__ */ createBaseVNode("h4", null, "Vuero has been carefully handcrafted.")
], -1);
const _hoisted_4$8 = { class: "py-12" };
const _hoisted_5$7 = { class: "columns is-vcentered is-multiline card-icon-boxes" };
const _hoisted_6$7 = { class: "column is-3" };
const _hoisted_7$7 = { class: "card card-icon-box" };
const _hoisted_8$6 = { class: "card-content" };
const _hoisted_9$6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layout-alt-2"
}, null, -1);
const _hoisted_10$6 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Nice Vectors", -1);
const _hoisted_11$3 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_12$3 = { class: "column is-3" };
const _hoisted_13$2 = { class: "card card-icon-box" };
const _hoisted_14$2 = { class: "card-content" };
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-layers"
}, null, -1);
const _hoisted_16$2 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_17$2 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_18$1 = { class: "column is-3" };
const _hoisted_19$1 = { class: "card card-icon-box" };
const _hoisted_20$1 = { class: "card-content" };
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grid-alt"
}, null, -1);
const _hoisted_22$1 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_24 = { class: "column is-3" };
const _hoisted_25 = { class: "card card-icon-box" };
const _hoisted_26 = { class: "card-content" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bulb"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_30 = { class: "column is-3" };
const _hoisted_31 = { class: "card card-icon-box" };
const _hoisted_32 = { class: "card-content" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-cog"
}, null, -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_36 = { class: "column is-3" };
const _hoisted_37 = { class: "card card-icon-box" };
const _hoisted_38 = { class: "card-content" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-plug"
}, null, -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_42 = { class: "column is-3" };
const _hoisted_43 = { class: "card card-icon-box" };
const _hoisted_44 = { class: "card-content" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-folder-alt"
}, null, -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_48 = { class: "column is-3" };
const _hoisted_49 = { class: "card card-icon-box" };
const _hoisted_50 = { class: "card-content" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-timer"
}, null, -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_54 = { class: "column is-3" };
const _hoisted_55 = { class: "card card-icon-box" };
const _hoisted_56 = { class: "card-content" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-pie-chart-alt"
}, null, -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_60 = { class: "column is-3" };
const _hoisted_61 = { class: "card card-icon-box" };
const _hoisted_62 = { class: "card-content" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-licencse"
}, null, -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_66 = { class: "column is-3" };
const _hoisted_67 = { class: "card card-icon-box" };
const _hoisted_68 = { class: "card-content" };
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-grow"
}, null, -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_72 = { class: "column is-3" };
const _hoisted_73 = { class: "card card-icon-box" };
const _hoisted_74 = { class: "card-content" };
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-bank"
}, null, -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("h4", { class: "title is-5" }, "Icon title", -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", -1);
const _hoisted_78 = { class: "cta-block no-border" };
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("div", { class: "head-text" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Want to learn more?"),
  /* @__PURE__ */ createBaseVNode("p", null, "Check out the Vuero documentation")
], -1);
const _hoisted_80 = { class: "head-action" };
const _hoisted_81 = { class: "buttons" };
const _hoisted_82 = /* @__PURE__ */ createTextVNode(" Read the Docs ");
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://cssninja.io",
  target: "_blank",
  rel: "noopener",
  class: "button chat-button is-secondary"
}, " Chat with us ", -1);
function _sfc_render$5(_ctx, _cache) {
  const _component_VIconBox = _sfc_main$d;
  const _component_VButton = _sfc_main$f;
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    createBaseVNode("div", _hoisted_2$9, [
      _hoisted_3$9,
      createBaseVNode("div", _hoisted_4$8, [
        createBaseVNode("div", _hoisted_5$7, [
          createBaseVNode("div", _hoisted_6$7, [
            createBaseVNode("div", _hoisted_7$7, [
              createBaseVNode("div", _hoisted_8$6, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "blue"
                }, {
                  default: withCtx(() => [
                    _hoisted_9$6
                  ]),
                  _: 1
                }),
                _hoisted_10$6,
                _hoisted_11$3
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_12$3, [
            createBaseVNode("div", _hoisted_13$2, [
              createBaseVNode("div", _hoisted_14$2, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "warning"
                }, {
                  default: withCtx(() => [
                    _hoisted_15$2
                  ]),
                  _: 1
                }),
                _hoisted_16$2,
                _hoisted_17$2
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_18$1, [
            createBaseVNode("div", _hoisted_19$1, [
              createBaseVNode("div", _hoisted_20$1, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "success"
                }, {
                  default: withCtx(() => [
                    _hoisted_21$1
                  ]),
                  _: 1
                }),
                _hoisted_22$1,
                _hoisted_23
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "purple"
                }, {
                  default: withCtx(() => [
                    _hoisted_27
                  ]),
                  _: 1
                }),
                _hoisted_28,
                _hoisted_29
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_30, [
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("div", _hoisted_32, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "green"
                }, {
                  default: withCtx(() => [
                    _hoisted_33
                  ]),
                  _: 1
                }),
                _hoisted_34,
                _hoisted_35
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_36, [
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("div", _hoisted_38, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "yellow"
                }, {
                  default: withCtx(() => [
                    _hoisted_39
                  ]),
                  _: 1
                }),
                _hoisted_40,
                _hoisted_41
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_42, [
            createBaseVNode("div", _hoisted_43, [
              createBaseVNode("div", _hoisted_44, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "orange"
                }, {
                  default: withCtx(() => [
                    _hoisted_45
                  ]),
                  _: 1
                }),
                _hoisted_46,
                _hoisted_47
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_48, [
            createBaseVNode("div", _hoisted_49, [
              createBaseVNode("div", _hoisted_50, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "info"
                }, {
                  default: withCtx(() => [
                    _hoisted_51
                  ]),
                  _: 1
                }),
                _hoisted_52,
                _hoisted_53
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_54, [
            createBaseVNode("div", _hoisted_55, [
              createBaseVNode("div", _hoisted_56, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "blue"
                }, {
                  default: withCtx(() => [
                    _hoisted_57
                  ]),
                  _: 1
                }),
                _hoisted_58,
                _hoisted_59
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_60, [
            createBaseVNode("div", _hoisted_61, [
              createBaseVNode("div", _hoisted_62, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "purple"
                }, {
                  default: withCtx(() => [
                    _hoisted_63
                  ]),
                  _: 1
                }),
                _hoisted_64,
                _hoisted_65
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_66, [
            createBaseVNode("div", _hoisted_67, [
              createBaseVNode("div", _hoisted_68, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "green"
                }, {
                  default: withCtx(() => [
                    _hoisted_69
                  ]),
                  _: 1
                }),
                _hoisted_70,
                _hoisted_71
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_72, [
            createBaseVNode("div", _hoisted_73, [
              createBaseVNode("div", _hoisted_74, [
                createVNode(_component_VIconBox, {
                  size: "medium",
                  color: "yellow"
                }, {
                  default: withCtx(() => [
                    _hoisted_75
                  ]),
                  _: 1
                }),
                _hoisted_76,
                _hoisted_77
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_78, [
          _hoisted_79,
          createBaseVNode("div", _hoisted_80, [
            createBaseVNode("div", _hoisted_81, [
              createVNode(_component_VButton, {
                class: "action-button",
                color: "primary",
                rounded: "",
                elevated: "",
                href: "https://docs.cssninja.io/vuero"
              }, {
                default: withCtx(() => [
                  _hoisted_82
                ]),
                _: 1
              }),
              _hoisted_83
            ])
          ])
        ])
      ])
    ])
  ]);
}
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$5]]);
var _imports_0$2 = "/images/logos/logo/logo-platinum.svg";
var _imports_1$2 = "/images/logos/logo/logo-accent.svg";
var _imports_2$3 = "/images/logos/logo/logo.svg";
const _sfc_main$b = {};
const _hoisted_1$8 = { class: "section has-bg-dots" };
const _hoisted_2$8 = { class: "container" };
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "Comprehensive Pricing"),
  /* @__PURE__ */ createBaseVNode("h4", null, "There's a right plan for everyone out there.")
], -1);
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("div", { class: "pricing-wrapper" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "pricing-plan" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "name" }, "Free"),
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0$2,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "price" }, "$0"),
    /* @__PURE__ */ createBaseVNode("div", { class: "trial" }, "Forever free"),
    /* @__PURE__ */ createBaseVNode("hr"),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "2"),
        /* @__PURE__ */ createTextVNode(" team members ")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "3"),
        /* @__PURE__ */ createTextVNode(" team projects ")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "50GB"),
        /* @__PURE__ */ createTextVNode(" of disk storage ")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "pricing-plan" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "name" }, "Business"),
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1$2,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "price" }, "$49"),
    /* @__PURE__ */ createBaseVNode("div", { class: "trial" }, "Free 14 day trial"),
    /* @__PURE__ */ createBaseVNode("hr"),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "10"),
        /* @__PURE__ */ createTextVNode(" team members ")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "150"),
        /* @__PURE__ */ createTextVNode(" team projects ")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "500GB"),
        /* @__PURE__ */ createTextVNode(" of disk storage ")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "pricing-plan is-featured" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "name" }, "Pro"),
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_2$3,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "price" }, "$119"),
    /* @__PURE__ */ createBaseVNode("div", { class: "trial" }, "Free 14 day trial"),
    /* @__PURE__ */ createBaseVNode("hr"),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "Unlimited"),
        /* @__PURE__ */ createTextVNode(" team members ")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "Unlimited"),
        /* @__PURE__ */ createTextVNode(" team projects ")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "Unlimited"),
        /* @__PURE__ */ createTextVNode(" disk storage ")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, "Team analytics"),
      /* @__PURE__ */ createBaseVNode("li", null, "Custom reports")
    ])
  ])
], -1);
const _hoisted_5$6 = { class: "cta-block no-border" };
const _hoisted_6$6 = /* @__PURE__ */ createBaseVNode("div", { class: "head-text" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Want to learn more?"),
  /* @__PURE__ */ createBaseVNode("p", null, "Check out the Vuero documentation")
], -1);
const _hoisted_7$6 = { class: "head-action" };
const _hoisted_8$5 = { class: "buttons" };
const _hoisted_9$5 = /* @__PURE__ */ createTextVNode(" Read the Docs ");
const _hoisted_10$5 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://cssninja.io",
  target: "_blank",
  rel: "noopener",
  class: "button chat-button is-secondary"
}, " Chat with us ", -1);
function _sfc_render$4(_ctx, _cache) {
  const _component_VButton = _sfc_main$f;
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createBaseVNode("div", _hoisted_2$8, [
      _hoisted_3$8,
      _hoisted_4$7,
      createBaseVNode("div", _hoisted_5$6, [
        _hoisted_6$6,
        createBaseVNode("div", _hoisted_7$6, [
          createBaseVNode("div", _hoisted_8$5, [
            createVNode(_component_VButton, {
              class: "action-button",
              color: "primary",
              rounded: "",
              elevated: "",
              href: "https://docs.cssninja.io/vuero"
            }, {
              default: withCtx(() => [
                _hoisted_9$5
              ]),
              _: 1
            }),
            _hoisted_10$5
          ])
        ])
      ])
    ])
  ]);
}
var __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$4]]);
const _hoisted_1$7 = { class: "v-popover-profile has-loader" };
const _hoisted_2$7 = { class: "profile-popover-block" };
const _hoisted_3$7 = { class: "profile-popover-wrapper" };
const _hoisted_4$6 = {
  key: 0,
  class: "popover-avatar"
};
const _hoisted_5$5 = ["src"];
const _hoisted_6$5 = { class: "popover-meta" };
const _hoisted_7$5 = { class: "stack-meta" };
const _hoisted_8$4 = { class: "stackname dark-inverted" };
const _hoisted_9$4 = {
  key: 0,
  class: "job-title mb-1"
};
const _hoisted_10$4 = { class: "bio" };
const _hoisted_11$2 = { class: "popover-actions" };
const _hoisted_12$2 = ["href"];
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:link"
}, null, -1);
const _hoisted_14$1 = [
  _hoisted_13$1
];
const _hoisted_15$1 = ["href"];
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:github"
}, null, -1);
const _hoisted_17$1 = [
  _hoisted_16$1
];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    stack: { type: Object, required: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("div", _hoisted_3$7, [
            __props.stack.logo ? (openBlock(), createElementBlock("div", _hoisted_4$6, [
              createBaseVNode("img", {
                class: "avatar",
                src: __props.stack.logo,
                alt: ""
              }, null, 8, _hoisted_5$5)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_6$5, [
              createBaseVNode("span", _hoisted_7$5, [
                createBaseVNode("span", _hoisted_8$4, toDisplayString(__props.stack.name), 1)
              ]),
              __props.stack.subtitle ? (openBlock(), createElementBlock("span", _hoisted_9$4, toDisplayString(__props.stack.subtitle), 1)) : createCommentVNode("", true),
              createBaseVNode("span", _hoisted_10$4, toDisplayString(__props.stack.description), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_11$2, [
            __props.stack.homepage ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "popover-icon",
              href: __props.stack.homepage
            }, _hoisted_14$1, 8, _hoisted_12$2)) : createCommentVNode("", true),
            __props.stack.github ? (openBlock(), createElementBlock("a", {
              key: 1,
              class: "popover-icon",
              href: __props.stack.github
            }, _hoisted_17$1, 8, _hoisted_15$1)) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
var _imports_2$2 = "/images/icons/hexagons/green.svg";
var _imports_3$2 = "/images/icons/hexagons/green-heavy.svg";
var _imports_2$1 = "/images/icons/hexagons/orange.svg";
var _imports_3$1 = "/images/icons/hexagons/orange-heavy.svg";
var _imports_0$1 = "/images/icons/hexagons/accent.svg";
var _imports_1$1 = "/images/icons/hexagons/accent-heavy.svg";
var _imports_6$1 = "/assets/app-1.7946e3ec.png";
var _imports_7$1 = "/assets/app-1-dark.58cdfa45.png";
var _imports_8 = "/images/icons/stacks/vuejs.svg";
var _imports_9 = "/images/icons/stacks/vite.svg";
var _imports_10 = "/images/icons/stacks/bulma.svg";
var _imports_11 = "/images/icons/stacks/sass.svg";
var _imports_12 = "/images/icons/stacks/typescript.svg";
const _sfc_main$9 = {};
const _hoisted_1$6 = { class: "section has-bg-dots" };
const _hoisted_2$6 = { class: "container" };
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "Impecable UI/UX"),
  /* @__PURE__ */ createBaseVNode("h4", null, "Vuero has been carefully handcrafted.")
], -1);
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("div", { class: "centered-mockup-wrapper" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "mockup-container mb-6" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "hexagon hexagon-1 light-image-l",
      src: _imports_2$2,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "hexagon hexagon-1 dark-image-l",
      src: _imports_3$2,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "hexagon hexagon-2 light-image-l",
      src: _imports_2$1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "hexagon hexagon-2 dark-image-l",
      src: _imports_3$1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "hexagon hexagon-3 light-image-l",
      src: _imports_0$1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "hexagon hexagon-3 dark-image-l",
      src: _imports_1$1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "light-image-l centered-mockup",
      src: _imports_6$1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "dark-image-l centered-mockup",
      src: _imports_7$1,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "columns" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" }, [
      /* @__PURE__ */ createBaseVNode("h3", { class: "title is-4" }, "Bulma 0.9.1"),
      /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum en\xEDm bonum exposuit vacuitatem. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" }, [
      /* @__PURE__ */ createBaseVNode("h3", { class: "title is-4" }, "Clean Code"),
      /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum en\xEDm bonum exposuit vacuitatem. ")
    ]),
    /* @__PURE__ */ createBaseVNode("div", { class: "column is-4" }, [
      /* @__PURE__ */ createBaseVNode("h3", { class: "title is-4" }, "Modern UI"),
      /* @__PURE__ */ createBaseVNode("p", { class: "subtitle is-6 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summum en\xEDm bonum exposuit vacuitatem. ")
    ])
  ])
], -1);
const _hoisted_5$4 = { class: "stacks" };
const _hoisted_6$4 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_8,
    alt: ""
  })
], -1);
const _hoisted_7$4 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_9,
    alt: ""
  })
], -1);
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_10,
    alt: ""
  })
], -1);
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_11,
    alt: ""
  })
], -1);
const _hoisted_10$3 = /* @__PURE__ */ createBaseVNode("div", { class: "stack" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_12,
    alt: ""
  })
], -1);
function _sfc_render$3(_ctx, _cache) {
  const _component_StackPopoverContent = _sfc_main$a;
  const _component_tippy = resolveComponent("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createBaseVNode("div", _hoisted_2$6, [
      _hoisted_3$6,
      _hoisted_4$5,
      createBaseVNode("div", _hoisted_5$4, [
        createVNode(_component_tippy, {
          class: "has-help-cursor",
          interactive: "",
          placement: "top"
        }, {
          content: withCtx(() => [
            createVNode(_component_StackPopoverContent, { stack: {
              name: "Vue 3",
              subtitle: "Composition API",
              logo: "/images/icons/stacks/vuejs.svg",
              description: "The Progressive JavaScript Framework for building user interfaces.",
              homepage: "https://v3.vuejs.org/",
              github: "https://github.com/vuejs/vue-next"
            } }, null, 8, ["stack"])
          ]),
          default: withCtx(() => [
            _hoisted_6$4
          ]),
          _: 1
        }),
        createVNode(_component_tippy, {
          class: "has-help-cursor",
          interactive: "",
          placement: "top"
        }, {
          content: withCtx(() => [
            createVNode(_component_StackPopoverContent, { stack: {
              name: "Vite",
              subtitle: "Next Generation Frontend Tooling",
              logo: "/images/icons/stacks/vite.svg",
              description: "Vite is a new breed of frontend build tool that significantly improves the frontend development experience.",
              homepage: "https://vitejs.dev/",
              github: "https://github.com/vitejs/vite"
            } }, null, 8, ["stack"])
          ]),
          default: withCtx(() => [
            _hoisted_7$4
          ]),
          _: 1
        }),
        createVNode(_component_tippy, {
          class: "has-help-cursor",
          interactive: "",
          placement: "top"
        }, {
          content: withCtx(() => [
            createVNode(_component_StackPopoverContent, { stack: {
              name: "Bulma",
              subtitle: "The modern CSS framework",
              logo: "/images/icons/stacks/bulma.svg",
              description: "Bulma is a free, open source framework that provides ready-to-use frontend components.",
              homepage: "https://bulma.io/",
              github: "https://github.com/jgthms/bulma"
            } }, null, 8, ["stack"])
          ]),
          default: withCtx(() => [
            _hoisted_8$3
          ]),
          _: 1
        }),
        createVNode(_component_tippy, {
          class: "has-help-cursor",
          interactive: "",
          placement: "top"
        }, {
          content: withCtx(() => [
            createVNode(_component_StackPopoverContent, { stack: {
              name: "Sass",
              subtitle: "Makes CSS fun again",
              logo: "/images/icons/stacks/sass.svg",
              description: "Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.",
              homepage: "https://sass-lang.com/",
              github: "https://github.com/sass/sass"
            } }, null, 8, ["stack"])
          ]),
          default: withCtx(() => [
            _hoisted_9$3
          ]),
          _: 1
        }),
        createVNode(_component_tippy, {
          class: "has-help-cursor",
          interactive: "",
          placement: "top"
        }, {
          content: withCtx(() => [
            createVNode(_component_StackPopoverContent, { stack: {
              name: "Typescript",
              subtitle: "Javascript enhanced",
              logo: "/images/icons/stacks/typescript.svg",
              description: "TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications.",
              homepage: "https://www.typescriptlang.org/",
              github: "https://github.com/microsoft/TypeScript"
            } }, null, 8, ["stack"])
          ]),
          default: withCtx(() => [
            _hoisted_10$3
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
var __unplugin_components_4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$3]]);
var _imports_0 = "/assets/feature-1.24cff14a.png";
var _imports_1 = "/assets/feature-1-dark.85758b75.png";
var _imports_2 = "/assets/feature-2.ba58c977.svg";
var _imports_3 = "/assets/feature-2-dark.1316c4d7.svg";
var _imports_4$1 = "/assets/feature-3.8af0f59b.svg";
var _imports_5$1 = "/assets/feature-3-dark.4f56d90d.svg";
const _sfc_main$8 = {};
const _hoisted_1$5 = { class: "section" };
const _hoisted_2$5 = { class: "container" };
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "Top Tier Product"),
  /* @__PURE__ */ createBaseVNode("h4", null, "Vuero has been carefully handcrafted.")
], -1);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered side-feature" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 has-text-centered" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "light-image-l featured-image",
      src: _imports_0,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "dark-image-l featured-image",
      src: _imports_1,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-5" }, [
    /* @__PURE__ */ createBaseVNode("h2", { class: "title m-b-10 is-centered-tablet-portrait" }, " Incredible UI "),
    /* @__PURE__ */ createBaseVNode("p", { class: "section-feature-description is-centered-tablet-portrait" }, " Vuero's UI has been carefully thought and designed, and is simply one of the best you'll find on the market. It's visual power and its modularity will let you build great apps seamlessly. ")
  ])
], -1);
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered side-feature" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 has-text-centered h-hidden-desktop h-hidden-tablet-p h-hidden-tablet-l" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "light-image-l featured-image",
      src: _imports_2,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "dark-image-l featured-image",
      src: _imports_3,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-5 is-offset-1" }, [
    /* @__PURE__ */ createBaseVNode("h2", { class: "title m-b-10 is-centered-tablet-portrait" }, " Playful Vectors "),
    /* @__PURE__ */ createBaseVNode("p", { class: "section-feature-description is-centered-tablet-portrait" }, " Vuero ships with a lot of svg illustrations representing various elements that can be used in a website, following very high quality standards. ")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 has-text-centered h-hidden-mobile" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "light-image-l featured-image",
      src: _imports_2,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "dark-image-l featured-image",
      src: _imports_3,
      alt: ""
    })
  ])
], -1);
const _hoisted_6$3 = /* @__PURE__ */ createBaseVNode("div", { class: "columns is-vcentered side-feature" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-6 has-text-centered" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      class: "light-image-l featured-image",
      src: _imports_4$1,
      alt: ""
    }),
    /* @__PURE__ */ createBaseVNode("img", {
      class: "dark-image-l featured-image",
      src: _imports_5$1,
      alt: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "column is-5" }, [
    /* @__PURE__ */ createBaseVNode("h2", { class: "title m-b-10 is-centered-tablet-portrait" }, " Handcrafted UI "),
    /* @__PURE__ */ createBaseVNode("p", { class: "section-feature-description is-centered-tablet-portrait" }, " Vuero ships with it's own component library based on the Bulma.io CSS framework. Each component has been carefully handcrafted and natively supports dark mode. ")
  ])
], -1);
const _hoisted_7$3 = { class: "cta-block no-border" };
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("div", { class: "head-text" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Want to learn more?"),
  /* @__PURE__ */ createBaseVNode("p", null, "Check out the Vuero documentation")
], -1);
const _hoisted_9$2 = { class: "head-action" };
const _hoisted_10$2 = { class: "buttons" };
const _hoisted_11$1 = /* @__PURE__ */ createTextVNode(" Read the Docs ");
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://cssninja.io",
  target: "_blank",
  rel: "noopener",
  class: "button chat-button is-secondary"
}, " Chat with us ", -1);
function _sfc_render$2(_ctx, _cache) {
  const _component_VButton = _sfc_main$f;
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("div", _hoisted_2$5, [
      _hoisted_3$5,
      _hoisted_4$4,
      _hoisted_5$3,
      _hoisted_6$3,
      createBaseVNode("div", _hoisted_7$3, [
        _hoisted_8$2,
        createBaseVNode("div", _hoisted_9$2, [
          createBaseVNode("div", _hoisted_10$2, [
            createVNode(_component_VButton, {
              class: "action-button",
              color: "primary",
              rounded: "",
              elevated: "",
              href: "https://docs.cssninja.io/vuero"
            }, {
              default: withCtx(() => [
                _hoisted_11$1
              ]),
              _: 1
            }),
            _hoisted_12$1
          ])
        ])
      ])
    ])
  ]);
}
var __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2]]);
var plyr = "";
const _hoisted_1$4 = ["src", "title"];
const _hoisted_2$4 = ["data-poster"];
const _hoisted_3$4 = ["src"];
const _hoisted_4$3 = ["default", "srclang", "src"];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    source: { type: String, required: true },
    title: { type: String, required: true },
    poster: { type: String, required: true },
    captions: { type: Array, required: false, default: () => [] },
    reversed: { type: Boolean, required: false },
    embed: { type: Boolean, required: false },
    ratio: { type: String, required: false, default: "16by9" },
    options: { type: null, required: false, default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const player = ref();
    const videoElement = ref();
    onMounted(() => {
      if (videoElement.value) {
        player.value = new Plyr(videoElement.value, props.options);
      }
    });
    onBeforeUnmount(() => {
      if (player.value) {
        player.value.destroy();
        player.value = void 0;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["video-player-container", [__props.ratio && "is-" + __props.ratio, __props.reversed && "reversed-play"]])
      }, [
        __props.embed ? (openBlock(), createElementBlock("iframe", {
          key: 0,
          src: `${__props.source}`,
          title: props.title,
          allowfullscreen: "",
          allowtransparency: "",
          allow: "autoplay"
        }, null, 8, _hoisted_1$4)) : (openBlock(), createElementBlock("video", {
          key: 1,
          ref: (_value, _refs) => {
            _refs["videoElement"] = _value;
            videoElement.value = _value;
          },
          controls: "",
          crossorigin: "anonymous",
          playsinline: "",
          "data-poster": __props.poster
        }, [
          createBaseVNode("source", {
            src: __props.source,
            type: "video/mp4"
          }, null, 8, _hoisted_3$4),
          (openBlock(true), createElementBlock(Fragment, null, renderList(props.captions, (caption, key) => {
            return openBlock(), createElementBlock("track", {
              key,
              default: caption.default,
              kind: "captions",
              srclang: caption.srclang,
              src: caption.src
            }, null, 8, _hoisted_4$3);
          }), 128))
        ], 8, _hoisted_2$4))
      ], 2);
    };
  }
});
const _sfc_main$6 = {};
const _hoisted_1$3 = { class: "section has-bg-dots" };
const _hoisted_2$3 = { class: "container" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "section-title has-text-centered py-6" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "title is-2" }, "About Us"),
  /* @__PURE__ */ createBaseVNode("h4", null, "Let us tell you the hole story.")
], -1);
const _hoisted_4$2 = { class: "video-section py-12" };
const _hoisted_5$2 = { class: "columns is-vcentered" };
const _hoisted_6$2 = { class: "column is-6 is-relative is-centered-portrait" };
const _hoisted_7$2 = /* @__PURE__ */ createStaticVNode('<div class="column is-6"><div class="columns is-multiline b-columns-half-tablet-p"><div class="column is-6"><div class="py-2 medium:py-4"><h4 class="title is-5 is-narrow">How we started</h4><p class="pt-2 max-w-3 text-medium"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. </p></div></div><div class="column is-6"><div class="py-2 medium:py-4"><h4 class="title is-5 is-narrow">Who we are</h4><p class="pt-2 max-w-3 text-medium"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. </p></div></div><div class="column is-6"><div class="py-2 medium:py-4"><h4 class="title is-5 is-narrow">What we do</h4><p class="pt-2 max-w-3 text-medium"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. </p></div></div><div class="column is-6"><div class="py-2 medium:py-4"><h4 class="title is-5 is-narrow">Our values</h4><p class="pt-2 max-w-3 text-medium"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. </p></div></div></div></div>', 1);
function _sfc_render$1(_ctx, _cache) {
  const _component_VPlyr = _sfc_main$7;
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$3, [
      _hoisted_3$3,
      createBaseVNode("div", _hoisted_4$2, [
        createBaseVNode("div", _hoisted_5$2, [
          createBaseVNode("div", _hoisted_6$2, [
            createVNode(_component_VPlyr, {
              ratio: "square",
              title: "Lorem ipsum dolor sit amet",
              source: "/video/hands.mp4",
              poster: "/video/poster-1c.jpg",
              reversed: ""
            })
          ]),
          _hoisted_7$2
        ])
      ])
    ])
  ]);
}
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$1]]);
const _sfc_main$5 = {};
const _hoisted_1$2 = { class: "vuero-footer" };
const _hoisted_2$2 = { class: "container" };
const _hoisted_3$2 = /* @__PURE__ */ createStaticVNode('<div class="footer-head"><div class="head-text"><h3>Ready to get started?</h3><p>Get your Vuero copy now</p></div><div class="head-action"><div class="buttons"><a href="https://themeforest.net/item/vuero-vuejs-3-admin-and-webapp-ui-kit/31053035" class="button v-button is-primary is-rounded raised action-button"> Buy Vuero </a><a href="https://cssninja.io" class="button chat-button"> Chat with us </a></div></div></div>', 1);
const _hoisted_4$1 = { class: "columns footer-body" };
const _hoisted_5$1 = { class: "column is-4" };
const _hoisted_6$1 = { class: "p-t-10 p-b-10" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("div", { class: "footer-description p-t-10 p-b-10" }, " Vuero is built for developers and designers. It's modular approach lets you create awesome navbars with incredible layouts and elements. ", -1);
const _hoisted_8$1 = /* @__PURE__ */ createStaticVNode('<div><span class="moto"> Designed and coded with <i aria-hidden="true" class="fas fa-heart text-danger"></i> by CSS Ninja.</span><div class="social-links p-t-10 p-b-10"><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-facebook"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-twitter"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-linkedin"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-dribbble"></i></span></a><a href="#"><span class="icon"><i aria-hidden="true" class="fab fa-github"></i></span></a></div></div>', 1);
const _hoisted_9$1 = /* @__PURE__ */ createStaticVNode('<div class="column is-6 is-offset-2"><div class="columns is-flex-tablet-p"><div class="column"><ul class="footer-column"><li class="column-header">Vuero</li><li class="column-item"><a href="#">Home</a></li><li class="column-item"><a href="#">Pricing</a></li><li class="column-item"><a href="#">Get started</a></li><li class="column-item"><a href="#">Help</a></li></ul></div><div class="column"><ul class="footer-column"><li class="column-header">Resources</li><li class="column-item"><a href="#">Learning</a></li><li class="column-item"><a href="#">Support center</a></li><li class="column-item"><a href="#">Frequent questions</a></li><li class="column-item"><a href="#">Schedule a demo</a></li></ul></div><div class="column"><ul class="footer-column"><li class="column-header">Terms</li><li class="column-item"><a href="#">Terms of Service</a></li><li class="column-item"><a href="#">Privacy policy</a></li><li class="column-item"><a href="#">SaaS services</a></li></ul></div></div></div>', 1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("div", { class: "footer-copyright has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" \xA9 2020-2021 | "),
    /* @__PURE__ */ createBaseVNode("a", { href: "https://cssninja.io" }, "Css Ninja"),
    /* @__PURE__ */ createTextVNode(" | All Rights Reserved. ")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_AnimatedLogo = __unplugin_components_0;
  return openBlock(), createElementBlock("footer", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, [
      _hoisted_3$2,
      createBaseVNode("div", _hoisted_4$1, [
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6$1, [
            createVNode(_component_AnimatedLogo, {
              width: "36px",
              height: "36px"
            }),
            _hoisted_7$1
          ]),
          _hoisted_8$1
        ]),
        _hoisted_9$1
      ]),
      _hoisted_10$1
    ])
  ]);
}
var __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    theme: { type: String, required: false, default: "darker" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["minimal-wrapper", [props.theme]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var _imports_4 = "/images/icons/hexagons/purple.svg";
var _imports_5 = "/images/icons/hexagons/purple-heavy.svg";
var _imports_6 = "/assets/app-2.e0bbbcb4.png";
var _imports_7 = "/assets/app-2-dark.8d461e24.png";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "landing-page-wrapper" };
const _hoisted_2$1 = {
  id: "Vuero-marketing",
  class: "hero marketing-hero is-left is-fullheight"
};
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-1 light-image-l",
  src: _imports_0$1,
  alt: ""
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-1 dark-image-l",
  src: _imports_1$1,
  alt: ""
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-2 light-image-l",
  src: _imports_0$1,
  alt: ""
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-2 dark-image-l",
  src: _imports_1$1,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-3 light-image-l",
  src: _imports_2$2,
  alt: ""
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-3 dark-image-l",
  src: _imports_3$2,
  alt: ""
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-4 light-image-l",
  src: _imports_4,
  alt: ""
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "hexagon hexagon-4 dark-image-l",
  src: _imports_5,
  alt: ""
}, null, -1);
const _hoisted_11 = { class: "hero-body" };
const _hoisted_12 = { class: "container" };
const _hoisted_13 = { class: "columns is-vcentered" };
const _hoisted_14 = { class: "column is-5" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h1", { class: "title is-1 is-bold" }, " Easier development. Beautiful projects ", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h3", { class: "subtitle is-4 pt-2 light-text" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Isto modo ne improbos quidem. ", -1);
const _hoisted_17 = { class: "buttons" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Get Started ");
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" 14-day Trial ");
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "column is-7" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image-l hero-mockup",
    src: _imports_6,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image-l hero-mockup",
    src: _imports_7,
    alt: ""
  })
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("a", {
  id: "features",
  name: "features",
  "aria-label": "Features"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { id: "backtotop" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "#",
    "aria-label": "back to top"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-angle-up"
    })
  ])
], -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useHead({
      title: "Vuero - A complete Vue 3 design system"
    });
    return (_ctx, _cache) => {
      const _component_LandingEmptyNavigation = _sfc_main$e;
      const _component_VButton = _sfc_main$f;
      const _component_MarketingFeaturesIcons = __unplugin_components_2;
      const _component_MarketingPricings = __unplugin_components_3;
      const _component_MarketingMockup = __unplugin_components_4;
      const _component_MarketingSideFeatures = __unplugin_components_5;
      const _component_MarketingAbout = __unplugin_components_6;
      const _component_LandingFooter = __unplugin_components_7;
      const _component_LandingLayout = _sfc_main$4;
      return openBlock(), createBlock(_component_LandingLayout, { theme: "light" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(_component_LandingEmptyNavigation),
              _hoisted_3$1,
              _hoisted_4,
              _hoisted_5,
              _hoisted_6,
              _hoisted_7,
              _hoisted_8,
              _hoisted_9,
              _hoisted_10,
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("div", _hoisted_14, [
                      _hoisted_15,
                      _hoisted_16,
                      createBaseVNode("div", _hoisted_17, [
                        createVNode(_component_VButton, {
                          color: "primary",
                          bold: "",
                          rounded: "",
                          raised: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_18
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VButton, {
                          color: "primary",
                          outlined: "",
                          bold: "",
                          rounded: "",
                          raised: ""
                        }, {
                          default: withCtx(() => [
                            _hoisted_19
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _hoisted_20
                  ])
                ])
              ])
            ]),
            _hoisted_21,
            createVNode(_component_MarketingFeaturesIcons),
            createVNode(_component_MarketingPricings),
            createVNode(_component_MarketingMockup),
            createVNode(_component_MarketingSideFeatures),
            createVNode(_component_MarketingAbout),
            createVNode(_component_LandingFooter),
            _hoisted_22
          ])
        ]),
        _: 1
      });
    };
  }
});
const routes = [{ "path": "/auth", "component": () => __vitePreload(() => import("./auth.b98a1a50.js"), true ? ["assets/auth.b98a1a50.js","assets/auth.3beb8099.css","assets/vendor.cb7a739a.js"] : void 0), "children": [{ "name": "auth", "path": "", "component": () => __vitePreload(() => import("./index.34e397f1.js"), true ? [] : void 0), "props": true, "redirect": { "name": "auth-login" } }, { "name": "auth-login", "path": "login", "component": () => __vitePreload(() => import("./login.7e7ed86b.js"), true ? ["assets/login.7e7ed86b.js","assets/VControl.f29cfe4f.js","assets/VControl.243637c8.css","assets/vendor.cb7a739a.js","assets/sleep.a90ca5e4.js"] : void 0), "props": true }, { "name": "auth-signup", "path": "signup", "component": () => __vitePreload(() => import("./signup.8cc3bdd7.js"), true ? ["assets/signup.8cc3bdd7.js","assets/VControl.f29cfe4f.js","assets/VControl.243637c8.css","assets/vendor.cb7a739a.js","assets/sleep.a90ca5e4.js"] : void 0), "props": true }], "props": true }, { "path": "/app", "component": () => __vitePreload(() => import("./app.362234aa.js"), true ? ["assets/app.362234aa.js","assets/app.533c2686.css","assets/sidebarLayoutState.d3aa6f85.js","assets/sidebarLayoutState.5e75b7fa.css","assets/vendor.cb7a739a.js"] : void 0), "children": [{ "name": "app", "path": "", "component": () => __vitePreload(() => import("./index.75e936d7.js"), true ? ["assets/index.75e936d7.js","assets/index.2a38b33c.css","assets/VControl.f29cfe4f.js","assets/VControl.243637c8.css","assets/vendor.cb7a739a.js","assets/sidebarLayoutState.d3aa6f85.js","assets/sidebarLayoutState.5e75b7fa.css"] : void 0), "props": true }], "props": true, "meta": { "requiresAuth": true } }, { "name": "index", "path": "/", "component": _sfc_main$3, "props": true }, { "name": "all", "path": "/:all(.*)*", "component": () => __vitePreload(() => import("./[...all].e7d8e365.js"), true ? ["assets/[...all].e7d8e365.js","assets/[...all].cd05e41e.css","assets/vendor.cb7a739a.js"] : void 0), "props": true }];
function createRouter() {
  const router = createRouter$1({
    history: createWebHistory(),
    routes
  });
  router.beforeEach(() => {
    nprogress$1.exports.start();
  });
  router.afterEach(() => {
    nprogress$1.exports.done();
  });
  return router;
}
const useUserSession = defineStore("userSession", () => {
  const token = useStorage("token", "");
  const user = ref();
  const loading = ref(true);
  const isLoggedIn = computed(() => token.value !== void 0 && token.value !== "");
  function setUser(newUser) {
    user.value = newUser;
  }
  function setToken(newToken) {
    token.value = newToken;
  }
  function setLoading(newLoading) {
    loading.value = newLoading;
  }
  async function logoutUser() {
    token.value = void 0;
    user.value = void 0;
  }
  return {
    user,
    token,
    isLoggedIn,
    loading,
    logoutUser,
    setUser,
    setToken,
    setLoading
  };
});
const apiSymbol = Symbol();
function provideApi() {
  const api = axios.create({
    baseURL: "http://localhost:1337"
  });
  api.interceptors.request.use((config) => {
    const userSession = useUserSession();
    if (userSession.isLoggedIn) {
      config.headers = __spreadProps(__spreadValues({}, config.headers), {
        Authorization: `Bearer ${userSession.token}`
      });
    }
    return config;
  });
  provide(apiSymbol, api);
  return api;
}
const hslRe = /hsl\(\s*(\d+)((?:deg)|(?:turn)|(?:rad))?\s*,?\s*(\d+(?:\.\d+)?%)\s*,?\s*(\d+(?:\.\d+)?%)\s*\)/;
function HSLToHex(hslCss) {
  if (!hslCss) {
    return "#fff";
  }
  const res = hslRe.exec(hslCss);
  if (res === null) {
    return "#fff";
  }
  const [hueString, hueUnit, saturationString, luminanceString] = res.slice(1);
  if (!hueString || !saturationString || !luminanceString) {
    return "#fff";
  }
  let h2 = 0;
  let s = parseFloat(saturationString != null ? saturationString : "0");
  let l = parseFloat(luminanceString != null ? luminanceString : "0");
  switch (hueUnit) {
    case "deg":
      h2 = parseFloat(hueString.substr(0, hueString.length - 3));
      break;
    case "turn":
      h2 = Math.round(parseFloat(hueString.substr(0, hueString.length - 4)) * 360);
      break;
    case "rad":
      h2 = Math.round(parseFloat(hueString.substr(0, hueString.length - 3)) * (180 / Math.PI));
      break;
    default:
      h2 = parseFloat(hueString);
      break;
  }
  if (h2 >= 360)
    h2 %= 360;
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(h2 / 60 % 2 - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (0 <= h2 && h2 < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h2 && h2 < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h2 && h2 < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h2 && h2 < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h2 && h2 < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h2 && h2 < 360) {
    r = c;
    g = 0;
    b = x;
  }
  let rString = Math.round((r + m) * 255).toString(16);
  let gString = Math.round((g + m) * 255).toString(16);
  let bString = Math.round((b + m) * 255).toString(16);
  if (rString.length == 1)
    rString = "0" + rString;
  if (gString.length == 1)
    gString = "0" + gString;
  if (bString.length == 1)
    bString = "0" + bString;
  return "#" + rString + gString + bString;
}
const style = getComputedStyle(document.documentElement);
const themeColors = {
  primary: HSLToHex(style.getPropertyValue("--primary")),
  primaryMedium: "#b4e4ce",
  primaryLight: "#f7fcfa",
  secondary: "#ff227d",
  accent: "#797bf2",
  accentMedium: "#d4b3ff",
  accentLight: "#b8ccff",
  success: HSLToHex(style.getPropertyValue("--success")),
  info: HSLToHex(style.getPropertyValue("--info")),
  warning: HSLToHex(style.getPropertyValue("--warning")),
  danger: HSLToHex(style.getPropertyValue("--danger")),
  purple: HSLToHex(style.getPropertyValue("--purple")),
  blue: HSLToHex(style.getPropertyValue("--blue")),
  green: HSLToHex(style.getPropertyValue("--green")),
  yellow: HSLToHex(style.getPropertyValue("--yellow")),
  orange: HSLToHex(style.getPropertyValue("--orange")),
  lightText: "#a2a5b9",
  fadeGrey: "#ededed"
};
const notyf = new Notyf({
  duration: 2e3,
  position: {
    x: "right",
    y: "bottom"
  },
  types: [
    {
      type: "warning",
      background: themeColors.warning,
      icon: {
        className: "fas fa-hand-paper",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "info",
      background: themeColors.info,
      icon: {
        className: "fas fa-info-circle",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "primary",
      background: themeColors.primary,
      icon: {
        className: "fas fa-car-crash",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "accent",
      background: themeColors.accent,
      icon: {
        className: "fas fa-car-crash",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "purple",
      background: themeColors.purple,
      icon: {
        className: "fas fa-check",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "blue",
      background: themeColors.blue,
      icon: {
        className: "fas fa-check",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "green",
      background: themeColors.green,
      icon: {
        className: "fas fa-check",
        tagName: "i",
        text: ""
      }
    },
    {
      type: "orange",
      background: themeColors.orange,
      icon: {
        className: "fas fa-check",
        tagName: "i",
        text: ""
      }
    }
  ]
});
function useNotyf() {
  return {
    dismiss: (notification) => {
      notyf.dismiss(notification);
    },
    dismissAll: () => {
      notyf.dismissAll();
    },
    success: (payload) => {
      return notyf.success(payload);
    },
    error: (payload) => {
      return notyf.error(payload);
    },
    info: (payload) => {
      const options = {
        type: "info"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    warning: (payload) => {
      const options = {
        type: "warning"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    primary: (payload) => {
      const options = {
        type: "primary"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    purple: (payload) => {
      const options = {
        type: "purple"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    blue: (payload) => {
      const options = {
        type: "blue"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    green: (payload) => {
      const options = {
        type: "green"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    },
    orange: (payload) => {
      const options = {
        type: "orange"
      };
      if (typeof payload === "string") {
        options.message = payload;
      } else {
        Object.assign(options, payload);
      }
      return notyf.open(options);
    }
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    align: { type: String, required: false, default: void 0 },
    addons: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["buttons", [props.addons && "has-addons", props.align && `is-${props.align}`]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    radius: { type: String, required: false, default: void 0 },
    color: { type: String, required: false, default: void 0 },
    elevated: { type: Boolean, required: false, default: false }
  },
  setup(__props) {
    const props = __props;
    const cardRadius = computed(() => {
      if (props.radius === "smooth") {
        return "s-card";
      } else if (props.radius === "rounded") {
        return "l-card";
      }
      return "r-card";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(cardRadius),
          __props.elevated && "is-raised",
          props.color && `is-${props.color}`
        ])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  let registration;
  const updateServiceWorker = async (reloadPage = true) => {
    {
      if (reloadPage) {
        wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
          if (event.isUpdate)
            window.location.reload();
        });
      }
      if (registration && registration.waiting) {
        await n(registration.waiting, { type: "SKIP_WAITING" });
      }
    }
  };
  if ("serviceWorker" in navigator) {
    wb = new v("/sw.js", { scope: "/" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        ;
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    {
      const showSkipWaitingPrompt = () => {
        onNeedRefresh == null ? void 0 : onNeedRefresh();
      };
      wb.addEventListener("waiting", showSkipWaitingPrompt);
      wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
    }
    wb.register({ immediate }).then((r) => {
      registration = r;
      onRegistered == null ? void 0 : onRegistered(r);
    }).catch((e) => {
      onRegisterError == null ? void 0 : onRegisterError(e);
    });
  }
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  const needRefresh = ref(false);
  const offlineReady = ref(false);
  const updateServiceWorker = registerSW({
    immediate,
    onNeedRefresh() {
      needRefresh.value = true;
      onNeedRefresh == null ? void 0 : onNeedRefresh();
    },
    onOfflineReady() {
      offlineReady.value = true;
      onOfflineReady == null ? void 0 : onOfflineReady();
    },
    onRegistered,
    onRegisterError
  });
  return {
    updateServiceWorker,
    offlineReady,
    needRefresh
  };
}
var VReloadPrompt_vue_vue_type_style_index_0_lang = "";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " ist bereit, offline zu arbeiten"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Eine neue Version von ", _interpolate(_named("appName")), " ist verf\xFCgbar, klicken Sie auf die Schaltfl\xE4che Neu laden, um sie zu aktualisieren."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Neu laden"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Schlie\xDFen"]);
        }
      },
      "en": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " is ready to work offline"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["A new version of ", _interpolate(_named("appName")), " is available, click on reload button to update."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reload"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Close"]);
        }
      },
      "es-MX": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est\xE1 listo para trabajar sin conexi\xF3n"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Una nueva versi\xF3n de ", _interpolate(_named("appName")), " est\xE1 disponible, haga clic en el bot\xF3n Recarga para actualizar."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recarga"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cerrar"]);
        }
      },
      "es": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est\xE1 listo para trabajar sin conexi\xF3n"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Una nueva versi\xF3n de ", _interpolate(_named("appName")), " est\xE1 disponible, haga clic en el bot\xF3n Recarga para actualizar."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recarga"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cerrar"]);
        }
      },
      "fr": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est pr\xEAt \xE0 \xEAtre utilis\xE9 hors ligne"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Une nouvelle version de ", _interpolate(_named("appName")), " est disponible, cliquez sur le bouton Recharger pour la mettre \xE0 jour."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recharger"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fermer"]);
        }
      },
      "zh-CN": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), "\u5DF2\u51C6\u5907\u597D\u8131\u673A\u5DE5\u4F5C"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u65B0\u7248\u672C\u7684", _interpolate(_named("appName")), "\u5DF2\u7ECF\u53EF\u7528\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D\u6309\u94AE\u6765\u66F4\u65B0\u3002"]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u91CD\u65B0\u52A0\u8F7D"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5173\u95ED"]);
        }
      }
    }
  });
}
const _hoisted_1 = { class: "pwa-message" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    appName: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const { t } = useI18n();
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
    const close = async () => {
      loading.value = false;
      offlineReady.value = false;
      needRefresh.value = false;
    };
    const update = async () => {
      loading.value = true;
      await updateServiceWorker();
      loading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$f;
      const _component_VButtons = _sfc_main$2;
      const _component_VCard = _sfc_main$1;
      return openBlock(), createBlock(Transition, { name: "from-bottom" }, {
        default: withCtx(() => [
          unref(offlineReady) || unref(needRefresh) ? (openBlock(), createBlock(_component_VCard, {
            key: 0,
            class: "pwa-toast",
            role: "alert",
            radius: "smooth"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                unref(offlineReady) ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(t)("offline-ready", { appName: props.appName })), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(t)("need-refresh", { appName: props.appName })), 1))
              ]),
              createVNode(_component_VButtons, { align: "right" }, {
                default: withCtx(() => [
                  unref(needRefresh) ? (openBlock(), createBlock(_component_VButton, {
                    key: 0,
                    color: "primary",
                    icon: "ion:reload-outline",
                    loading: loading.value,
                    onClick: _cache[0] || (_cache[0] = () => update())
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("reload-button")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])) : createCommentVNode("", true),
                  createVNode(_component_VButton, {
                    icon: "feather:x",
                    onClick: close
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("close-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
async function createApp({ enhanceApp }) {
  const head = createHead();
  const i18n = createI18n();
  const router = createRouter();
  const pinia = createPinia();
  const app = createApp$1({
    setup() {
      provideApi();
      return () => {
        const defaultSlot = ({ Component: _Component }) => {
          const Component = resolveDynamicComponent(_Component);
          return [
            h(Transition, { name: "fade-slow", mode: "out-in" }, {
              default: () => [h(Component)]
            })
          ];
        };
        return [
          h(RouterView, null, {
            default: defaultSlot
          }),
          h(_sfc_main, { appName: "Vuero" })
        ];
      };
    }
  });
  router.beforeEach((to, from) => {
    const userSession = useUserSession();
    if (to.meta.requiresAuth && !userSession.isLoggedIn) {
      const notif = useNotyf();
      notif.error({
        message: "Sorry, you should loggin to access this section (anything will work)",
        duration: 7e3
      });
      return {
        name: "auth",
        query: { redirect: to.fullPath }
      };
    }
  });
  app.use(head);
  app.use(router);
  app.use(i18n);
  app.use(pinia);
  if (enhanceApp) {
    await enhanceApp(app);
  }
  return {
    app,
    router,
    head,
    i18n
  };
}
createApp({
  async enhanceApp(app) {
    const VCalendar = (await __vitePreload(() => import("./index.4d0a0e93.js"), true ? ["assets/index.4d0a0e93.js","assets/vendor.cb7a739a.js"] : void 0)).default;
    const VueMultiselect = (await __vitePreload(() => import("./multiselect.7f7a8948.js"), true ? ["assets/multiselect.7f7a8948.js","assets/vendor.cb7a739a.js"] : void 0)).default;
    const VueSlider = (await __vitePreload(() => import("./slider.ad5723d8.js"), true ? ["assets/slider.ad5723d8.js","assets/vendor.cb7a739a.js"] : void 0)).default;
    const VueTippy = (await __vitePreload(() => import("./vue-tippy.esm-bundler.c5b4fe7e.js"), true ? ["assets/vue-tippy.esm-bundler.c5b4fe7e.js","assets/vendor.cb7a739a.js"] : void 0)).default;
    const hasNestedRouterLink = (await __vitePreload(() => import("./has-nested-router-link.4fe8dab1.js"), true ? [] : void 0)).default;
    const background = (await __vitePreload(() => import("./background.5bd78b71.js"), true ? [] : void 0)).default;
    const tooltip = (await __vitePreload(() => import("./tooltip.24128ff9.js"), true ? [] : void 0)).default;
    app.use(VCalendar);
    app.use(VueTippy, {
      defaultProps: {
        theme: "light"
      }
    });
    app.component(VueMultiselect.name, VueMultiselect);
    app.component(VueSlider.name, VueSlider);
    app.directive("has-nested-router-link", hasNestedRouterLink);
    app.directive("background", background);
    app.directive("tooltip", tooltip);
  }
}).then(async ({ app, router }) => {
  await router.isReady();
  app.mount("#app");
});
export { _export_sfc as _, __unplugin_components_0 as a, _sfc_main$f as b, useNotyf as c, _sfc_main$4 as d, isDark as i, toggleDarkModeHandler as t, useUserSession as u };
