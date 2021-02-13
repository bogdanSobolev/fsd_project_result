(self["webpackChunk_1"] = self["webpackChunk_1"] || []).push([[394],{

/***/ 8228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var jQuery = __webpack_require__(9755);

var $cardSearchList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.card-search');

function setWrap($card) {
  var fieldsBlock = $card.find('.card-search__date-dropdown-fields-block');
  var withFieldsBlock = fieldsBlock.width();

  if (withFieldsBlock < 280) {
    if (fieldsBlock.css('flex-wrap') == 'nowrap') {
      fieldsBlock.css('flex-wrap', 'wrap');
      fieldsBlock.find('.card-search__date-dropdown-wrp').css('margin-right', 0);
    }

    ;
  } else {
    if (fieldsBlock.css('flex-wrap') == 'wrap') {
      fieldsBlock.css('flex-wrap', 'nowrap');
      fieldsBlock.find('.card-search__date-dropdown-wrp:first').css('margin-right', '20px');
    }
  }
}

;
$cardSearchList.each(function () {
  setWrap(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
});
jQuery(window).resize(function () {
  $cardSearchList.each(function () {
    setWrap(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
});

/***/ }),

/***/ 4685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);