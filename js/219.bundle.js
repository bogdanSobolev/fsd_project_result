(self["webpackChunk_1"] = self["webpackChunk_1"] || []).push([[219],{

/***/ 5656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cleave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3450);

var dateMasks = document.querySelectorAll('.text-field_date-of-birth');

function getNowDate() {
  var now = new Date();

  function getDay() {
    var numberDay = now.getDate();

    if (numberDay.toString().length == 1) {
      return '0' + numberDay.toString();
    }

    return numberDay;
  }

  function getMonth() {
    var numberMounth = now.getMonth();
    numberMounth++;

    if (numberMounth.toString().length == 1) {
      return '0' + numberMounth.toString();
    }

    return numberMounth;
  }

  return "".concat(now.getFullYear(), "-").concat(getMonth(), "-").concat(getDay());
}

getNowDate();
dateMasks.forEach(function (item) {
  item.setAttribute('placeholder', 'ДД.ММ.ГГГГ');
  new cleave_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z(item, {
    date: true,
    delimiter: '.',
    dateMax: getNowDate(),
    datePattern: ['d', 'm', 'Y']
  });
});

/***/ }),

/***/ 9267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 8364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);