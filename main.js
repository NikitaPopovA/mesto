(()=>{"use strict";Array.from(document.querySelectorAll(".popup"));var t=document.querySelector(".popup_edit-profile"),e=document.querySelector(".popup_add-card"),r=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),o=document.querySelector(".elements"),i=document.querySelector(".popup_magnification"),u=(document.querySelector(".popup__magnification-title"),document.querySelector(".popup__magnification-imag"),document.querySelector(".profile__title")),a=document.querySelector(".profile__subtitle"),c=(document.querySelector(".popup__form-profile"),document.querySelector(".popup__form-card"),document.querySelector(".popup__profile-name")),l=document.querySelector(".popup__profile-job");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}document.querySelector(".popup__card-name"),document.querySelector(".popup__card-link");var p=function(){function t(e){var r=e.data,n=e.templateSelector,o=e.handleCardClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._name=r.name,this._link=r.link,this.handleCardClick=o,this._card=this._getTemplate(),this._image=this._card.querySelector(".grid-card__image"),this._title=this._card.querySelector(".grid-card__title"),this._like=this._card.querySelector(".grid-card__like"),this._trash=this._card.querySelector(".grid-card__btn-delete")}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".grid-card").cloneNode(!0)}},{key:"_toggleLike",value:function(t){t.target.classList.toggle("grid-card__like_active")}},{key:"_deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"generateCard",value:function(){return this._image.src=this._link,this._image.alt=this._name,this._title.textContent=this._name,this._setEventListeners(),this._card}},{key:"_setEventListeners",value:function(){var t=this;this._like.addEventListener("click",this._toggleLike),this._trash.addEventListener("click",(function(){t._deleteCard()})),this._image.addEventListener("click",(function(){t.handleCardClick()}))}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var d=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=n,this._renderer=o,this._container=r}var e,r;return e=t,(r=[{key:"renderer",value:function(){var t=this;this._renderedItems.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&m(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup__close-btn")&&t.close(),e.target.classList.contains("popup_opened")&&t.close()}))}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).magnificationTitle=e._popup.querySelector(".popup__magnification-title"),e.popupImage=e._popup.querySelector(".popup__magnification-imag"),e}return e=u,(r=[{key:"open",value:function(t){g(k(u.prototype),"open",this).call(this),this.magnificationTitle.textContent=t.name,this.popupImage.alt=t.name,this.popupImage.src=t.link}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},P.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(n);if(o){var r=C(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popup,n=t.handleSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._form=e._popup.querySelector(".popup__form"),e._inputList=e._form.querySelectorAll(".popup__input"),e._handleSubmitForm=n,e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;P(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t._getInputValues()),t.close()}))}},{key:"close",value:function(){P(C(u.prototype),"close",this).call(this),this._form.reset()}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}var I=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=e,this._userOccupation=r}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userOccupation.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.userName,this._userOccupation.textContent=t.userOccupation}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function V(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}var R=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setEventListenerInputs()}},{key:"_setEventListenerInputs",value:function(){var t=this;this._checkButtonValidity(),this._form.addEventListener("reset",(function(){t._disableButton()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkImputValidity(e),t._checkButtonValidity()}))}))}},{key:"_checkImputValidity",value:function(t){this._errorElement=this._form.querySelector(".".concat(t.id,"-error")),t.validity.valid?this._setInputValid(t):this._setInputInvalid(t)}},{key:"_checkButtonValidity",value:function(){this._form.checkValidity()?this._enableButton():this._disableButton()}},{key:"_setInputValid",value:function(t){this._errorElement.textContent="",t.classList.remove(this._inputErrorClass)}},{key:"_setInputInvalid",value:function(t){this._errorElement.textContent=t.validationMessage,t.classList.add(this._inputErrorClass)}},{key:"_enableButton",value:function(){this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_disableButton",value:function(){this._buttonElement.setAttribute("disabled",""),this._buttonElement.classList.add(this._inactiveButtonClass)}}])&&V(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),A=new E(i),M=new q({popup:t,handleSubmitForm:function(t){H.setUserInfo(t)}}),D=new q({popup:e,handleSubmitForm:function(t){N.addItem(G(t))}}),H=new I(u,a);function G(t){return new p({data:t,templateSelector:".card-template",handleCardClick:function(){A.open(t)}}).generateCard()}A.setEventListeners(),M.setEventListeners(),D.setEventListeners();var N=new d({items:[{name:"Moscow, Russia",link:"https://images.unsplash.com/photo-1580033813221-dbe4d224e1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80"},{name:"Tokyo, Japan",link:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"},{name:"Ghent, Belgium",link:"https://images.unsplash.com/photo-1585927207003-d7230e0834a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80"},{name:"New York, USA",link:"https://images.unsplash.com/photo-1558369178-6556d97855d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Alesund, Norway",link:"https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}],renderer:function(t){N.addItem(G(t))}},o);N.renderer(),r.addEventListener("click",(function(){var t=H.getUserInfo(),e=t.name,r=t.job;M.open(),c.value=e,l.value=r})),n.addEventListener("click",(function(){D.open()}));var Y,F={};Y={formSelector:".popup__form",inactiveButtonClass:"popup__save-btn_disabled",inputErrorClass:"popup__input_type_error",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(t){var e=new R(Y,t),r=t.getAttribute("name");F[r]=e,e.enableValidation()}))})();