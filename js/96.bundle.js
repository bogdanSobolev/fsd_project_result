(self["webpackChunk_1"] = self["webpackChunk_1"] || []).push([[96,661],{

/***/ 8486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(9755);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
;// CONCATENATED MODULE: ./src/components/btn-like/BtnLikeClass.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BtnLikeClass = /*#__PURE__*/function () {
  function BtnLikeClass($btnBlock) {
    _classCallCheck(this, BtnLikeClass);

    this.$btnBlock = $btnBlock;
    this.value = +$btnBlock.find('.btn-like__text').text();
  }

  _createClass(BtnLikeClass, [{
    key: "likeHandler",
    value: function likeHandler(operation) {
      var $btnValueBlock = this.$btnBlock.find('.btn-like__text');

      if (operation == '+') {
        $btnValueBlock.text(++this.value);
      } else if (operation == '-') {
        $btnValueBlock.text(--this.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var $btnInput = this.$btnBlock.find('.btn-like__input');

      if (this.$btnBlock.hasClass('btn-like_active')) {
        $btnInput.prop('checked', true);
      }

      this.$btnBlock.on('click', function (e) {
        if (jquery_default()(e.target).hasClass('btn-like__input')) {
          _this.$btnBlock.toggleClass('btn-like_active');

          if (_this.$btnBlock.hasClass('btn-like_active')) {
            _this.likeHandler('+');
          } else {
            _this.likeHandler('-');
          }
        }
      });
    }
  }]);

  return BtnLikeClass;
}();


;// CONCATENATED MODULE: ./src/components/btn-like/btn-like.js
/* provided dependency */ var $ = __webpack_require__(9755);

var $btnLikeList = $(".btn-like");
$btnLikeList.each(function () {
  var btnLike = new BtnLikeClass($(this));
  btnLike.render();
});

/***/ }),

/***/ 4889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(9755);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./src/components/dropdown/dropdown.js
var dropdown = __webpack_require__(7661);
;// CONCATENATED MODULE: ./src/components/card-order/CardOrderClass.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CardOrderClass = /*#__PURE__*/function () {
  function CardOrderClass($cardOrder) {
    _classCallCheck(this, CardOrderClass);

    this.$cardOrder = $cardOrder;
    this.price = $cardOrder.find('.card-order__room-price-price').text();
    this.arrivalInput = $cardOrder.find('.card-order__date-dropdown-arrival .calendar-field__input');
    this.departureInput = $cardOrder.find('.card-order__date-dropdown-departure .calendar-field__input');
    this.sumGuests = null;
    this.discount = $cardOrder.find('.card-order__list-item-service-charge-discount');
    this.additionalServiceFee = $cardOrder.find('.card-order__list-item-additional-service-fee');
    this.sumDay = null;
    this.sumDayOutput = $cardOrder.find('.card-order__list-item-sum-day');
    this.priceForAllDaysOutput = $cardOrder.find('.card-order__list-item-price-for-all-days');
    this.totalPriceOutput = $cardOrder.find('.card-order__total-price');
  }

  _createClass(CardOrderClass, [{
    key: "setSumGuests",
    value: function setSumGuests() {
      var dropdownTextValue = this.$cardOrder.find('.dropdown__values-input-text').text();
      var regular = /\d+/g;
      this.sumGuests = dropdownTextValue.match(regular)[0];
    }
  }, {
    key: "setSumDay",
    value: function setSumDay() {
      var startDate = this.arrivalInput.val();
      var endtDate = this.departureInput.val();

      function transformDate(date) {
        var dateArr = date.split('.');

        for (var i = 0; i < dateArr.length; i++) {
          dateArr[i] = +dateArr[i];
        }

        dateArr.reverse();
        var dateString = dateArr.join(', ');
        return dateString;
      }

      function treatAsUTC(date) {
        var result = new Date(transformDate(date));
        result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
        return result;
      }

      function daysBetween(startDate, endDate) {
        var millisecondsPerDay = 24 * 60 * 60 * 1000;
        return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
      }

      this.sumDay = daysBetween(startDate, endtDate);
    }
  }, {
    key: "printSumDay",
    value: function printSumDay() {
      this.sumDayOutput.text(this.sumDay);
    }
  }, {
    key: "printPriceForAllDays",
    value: function printPriceForAllDays() {
      var priceForAllDays = this.sumDay * parseInt(this.price.replace(/\s+/g, ''), 10);
      this.priceForAllDaysOutput.text(priceForAllDays.toLocaleString());
    }
  }, {
    key: "printTotalPrice",
    value: function printTotalPrice() {
      var totalPrice = this.sumDay * parseInt(this.price.replace(/\s+/g, ''), 10);

      if (this.discount.text()) {
        totalPrice -= parseInt(this.discount.text().replace(/\s+/g, ''), 10);
      }

      if (this.additionalServiceFee.text()) {
        totalPrice += parseInt(this.additionalServiceFee.text().replace(/\s+/g, ''), 10);
      }

      this.totalPriceOutput.text(totalPrice.toLocaleString());
    }
  }, {
    key: "setHandlers",
    value: function setHandlers() {
      var _this = this;

      this.arrivalInput.change(function () {
        _this.setSumDay();

        _this.printSumDay();

        _this.printPriceForAllDays();

        _this.printTotalPrice();
      });
      this.departureInput.change(function (e) {
        _this.setSumDay();

        _this.printSumDay();

        _this.printPriceForAllDays();

        _this.printTotalPrice();
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.setSumGuests();
      this.setSumDay();
      this.printSumDay();
      this.printPriceForAllDays();
      this.printTotalPrice();
      this.setHandlers();
    }
  }]);

  return CardOrderClass;
}();


;// CONCATENATED MODULE: ./src/components/card-order/card-order.js
/* provided dependency */ var jQuery = __webpack_require__(9755);


var $cardOrderList = jquery_default()('.card-order');

function setWrap($card) {
  var fieldsBlock = $card.find('.card-order__date-dropdown-fields-block');
  var withFieldsBlock = fieldsBlock.width();

  if (withFieldsBlock < 280) {
    if (fieldsBlock.css('flex-wrap') == 'nowrap') {
      fieldsBlock.css('flex-wrap', 'wrap');
      fieldsBlock.find('.card-order__date-dropdown-wrp').css('margin-right', 0);
    }

    ;
  } else {
    if (fieldsBlock.css('flex-wrap') == 'wrap') {
      fieldsBlock.css('flex-wrap', 'nowrap');
      fieldsBlock.find('.card-order__date-dropdown-wrp:first').css('margin-right', '20px');
    }
  }
}

;
$cardOrderList.each(function () {
  var $cardOrder = new CardOrderClass(jquery_default()(this));
  $cardOrder.render();
  setWrap(jquery_default()(this));
});
jQuery(window).resize(function () {
  $cardOrderList.each(function () {
    setWrap(jquery_default()(this));
  });
});

/***/ }),

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

/***/ }),

/***/ 6606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 1913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 8157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 8438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);