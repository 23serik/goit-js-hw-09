!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),l=document.querySelector(".form");l.addEventListener("submit",(function(n){var o=function(n){(function(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))})(n,t).then((function(o){console.log("result",o),e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o.delay,"ms"))})).catch((function(o){console.log("error",o),e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o.delay,"ms"))})),t+=r};n.preventDefault();for(var t=Number(l.elements.delay.value),r=Number(l.elements.step.value),u=Number(l.elements.amount.value),a=1;a<=u;a++)o(a);l.reset()}))}();
//# sourceMappingURL=03-promises.4e7b9f12.js.map