(self["webpackChunk_1"] = self["webpackChunk_1"] || []).push([[191],{

/***/ 6191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var calendar_range = {
  minDate: new Date(),
  range: true,
  toggleSelected: false,
  keyboardNav: false,
  navTitles: {
    days: "<h3 class='title title_middle datepicker__title'>MM yyyy<h3/>"
  },
  dateFormat: "d M",
  nextHtml: "<span class='material-icons calendar__calendar-arrow'>arrow_forward</span>",
  prevHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_prev'>arrow_forward</span>",
  offset: 5,
  onShow: function onShow(inst) {
    inst.$el.siblings(".calendar-field__arrow").addClass("calendar-field__arrow_active");
    var $positionElem = null;

    if (inst.$el.data('width-elem')) {
      inst.$el.data('width-elem');
      $positionElem = inst.$el.closest('.' + inst.$el.data('width-elem'));
    } else {
      $positionElem = inst.$el;
    }

    inst.$datepicker.css({
      'left': "".concat($positionElem.offset().left, "px")
    });
  },
  onHide: function onHide(inst) {
    inst.$el.siblings(".calendar-field__arrow").removeClass("calendar-field__arrow_active");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendar_range);

/***/ })

}]);