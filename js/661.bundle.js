(self["webpackChunk_1"] = self["webpackChunk_1"] || []).push([[661],{

/***/ 7661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guests_DropdownGuestsClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6013);
/* harmony import */ var _location_DropdownLocationClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1733);
/* provided dependency */ var $ = __webpack_require__(9755);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var modificatorList = [{
  name: 'dropdown_guests',
  classDropdown: _guests_DropdownGuestsClass__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z,
  inputList: [{
    name: 'взрослые',
    value: 0,
    minValue: 1,
    maxValue: null
  }, {
    name: 'дети',
    value: 0,
    minValue: null,
    maxValue: null
  }, {
    name: 'младенцы',
    value: 0,
    minValue: null,
    maxValue: null
  }]
}, {
  name: 'dropdown_location',
  classDropdown: _location_DropdownLocationClass__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z,
  inputList: [{
    name: 'спальни',
    value: 1,
    minValue: 1,
    maxValue: null,
    cases: ["спальня", "спальни", "спален"]
  }, {
    name: 'кровати',
    value: 1,
    minValue: 1,
    maxValue: 10,
    cases: ["кровать", "кровати", "кроватей"]
  }, {
    name: 'ванные комнаты',
    value: 0,
    minValue: 0,
    maxValue: 10,
    cases: ["ванная комната", "ванные комнаты", "ванных комнат"]
  }]
}];

function searchModificator(item) {
  var modificator = null;
  modificatorList.forEach(function (el) {
    if (item.hasClass(el.name)) {
      modificator = el;
    }
  });
  return modificator;
}

var $dropdownList = $('.dropdown');
$dropdownList.each(function () {
  var modificator = searchModificator($(this));
  var inputList = modificator.inputList.map(function (a) {
    return _objectSpread({}, a);
  });

  if (modificator) {
    var dropdown = new modificator.classDropdown($(this), inputList);
    dropdown.renderInputList();
  }
});

/***/ })

}]);