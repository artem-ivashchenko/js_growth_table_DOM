function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=document.querySelector("tbody"),r=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),i=document.querySelector(".remove-column");function c(){r.disabled=10===n.childElementCount,o.disabled=2===n.childElementCount,l.disabled=10===n.firstElementChild.childElementCount,i.disabled=2===n.firstElementChild.childElementCount}r.addEventListener("click",function(){n.append(n.firstElementChild.cloneNode(!0)),c()}),o.addEventListener("click",function(){n.lastElementChild.remove(),c()}),l.addEventListener("click",function(){t(n.rows).forEach(function(e){e.append(e.lastElementChild.cloneNode(!0))}),c()}),i.addEventListener("click",function(){t(n.rows).forEach(function(e){e.lastElementChild.remove()}),c()});//# sourceMappingURL=index.78af7f18.js.map

//# sourceMappingURL=index.78af7f18.js.map
