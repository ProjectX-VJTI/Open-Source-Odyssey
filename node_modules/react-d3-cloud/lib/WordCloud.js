"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactFauxDom = _interopRequireDefault(require("react-faux-dom"));

var _d3Cloud = _interopRequireDefault(require("d3-cloud"));

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _d3Selection = require("d3-selection");

var _d3Scale = require("d3-scale");

var _d3ScaleChromatic = require("d3-scale-chromatic");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultScaleOrdinal = (0, _d3Scale.scaleOrdinal)(_d3ScaleChromatic.schemeCategory10);

function WordCloud(_ref) {
  var data = _ref.data,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 700 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 600 : _ref$height,
      _ref$font = _ref.font,
      font = _ref$font === void 0 ? 'serif' : _ref$font,
      _ref$fontStyle = _ref.fontStyle,
      fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? 'normal' : _ref$fontWeight,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? function (d) {
    return Math.sqrt(d.value);
  } : _ref$fontSize,
      _ref$rotate = _ref.rotate,
      rotate = _ref$rotate === void 0 ? function () {
    return (~~(Math.random() * 6) - 3) * 30;
  } : _ref$rotate,
      _ref$spiral = _ref.spiral,
      spiral = _ref$spiral === void 0 ? 'archimedean' : _ref$spiral,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 1 : _ref$padding,
      _ref$random = _ref.random,
      random = _ref$random === void 0 ? Math.random : _ref$random,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? function (_, i) {
    return defaultScaleOrdinal(i);
  } : _ref$fill,
      onWordClick = _ref.onWordClick,
      onWordMouseOver = _ref.onWordMouseOver,
      onWordMouseOut = _ref.onWordMouseOut;
  var elementRef = (0, _react.useRef)();

  if (!elementRef.current) {
    elementRef.current = _reactFauxDom.default.createElement('div');
  }

  var el = elementRef.current; // clear old words

  (0, _d3Selection.select)(el).selectAll('*').remove(); // render based on new data

  var layout = (0, _d3Cloud.default)().words(data).size([width, height]).font(font).fontStyle(fontStyle).fontWeight(fontWeight).fontSize(fontSize).rotate(rotate).spiral(spiral).padding(padding).random(random).on('end', function (words) {
    var _layout$size = layout.size(),
        _layout$size2 = _slicedToArray(_layout$size, 2),
        w = _layout$size2[0],
        h = _layout$size2[1];

    var texts = (0, _d3Selection.select)(el).append('svg').attr('viewBox', "0 0 ".concat(w, " ").concat(h)).attr('preserveAspectRatio', 'xMinYMin meet').append('g').attr('transform', "translate(".concat(w / 2, ",").concat(h / 2, ")")).selectAll('text').data(words).enter().append('text').style('font-family', function (d) {
      return d.font;
    }).style('font-style', function (d) {
      return d.style;
    }).style('font-weight', function (d) {
      return d.weight;
    }).style('font-size', function (d) {
      return "".concat(d.size, "px");
    }).style('fill', fill).attr('text-anchor', 'middle').attr('transform', function (d) {
      return "translate(".concat([d.x, d.y], ")rotate(").concat(d.rotate, ")");
    }).text(function (d) {
      return d.text;
    });

    if (onWordClick) {
      texts.on('click', onWordClick);
    }

    if (onWordMouseOver) {
      texts.on('mouseover', onWordMouseOver);
    }

    if (onWordMouseOut) {
      texts.on('mouseout', onWordMouseOut);
    }
  });
  layout.start();
  return el.toReact();
}

WordCloud.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string.isRequired,
    value: _propTypes.default.number.isRequired
  })).isRequired,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  font: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  fontStyle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  fontWeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.func]),
  fontSize: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
  rotate: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
  spiral: _propTypes.default.oneOfType([_propTypes.default.oneOf(['archimedean']), _propTypes.default.oneOf(['rectangular']), _propTypes.default.func]),
  padding: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.func]),
  random: _propTypes.default.func,
  onWordClick: _propTypes.default.func,
  onWordMouseOver: _propTypes.default.func,
  onWordMouseOut: _propTypes.default.func
};

var _default = /*#__PURE__*/_react.default.memo(WordCloud, _reactFastCompare.default);

exports.default = _default;