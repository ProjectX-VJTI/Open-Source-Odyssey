import _pt from "prop-types";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useRef } from 'react';
import ReactFauxDom from 'react-faux-dom';
import cloud from 'd3-cloud';
import isDeepEqual from 'react-fast-compare';
import { select } from 'd3-selection';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
var defaultScaleOrdinal = scaleOrdinal(schemeCategory10);

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
  var elementRef = useRef();

  if (!elementRef.current) {
    elementRef.current = ReactFauxDom.createElement('div');
  }

  var el = elementRef.current; // clear old words

  select(el).selectAll('*').remove(); // render based on new data

  var layout = cloud().words(data).size([width, height]).font(font).fontStyle(fontStyle).fontWeight(fontWeight).fontSize(fontSize).rotate(rotate).spiral(spiral).padding(padding).random(random).on('end', function (words) {
    var _layout$size = layout.size(),
        _layout$size2 = _slicedToArray(_layout$size, 2),
        w = _layout$size2[0],
        h = _layout$size2[1];

    var texts = select(el).append('svg').attr('viewBox', "0 0 ".concat(w, " ").concat(h)).attr('preserveAspectRatio', 'xMinYMin meet').append('g').attr('transform', "translate(".concat(w / 2, ",").concat(h / 2, ")")).selectAll('text').data(words).enter().append('text').style('font-family', function (d) {
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
  data: _pt.arrayOf(_pt.shape({
    text: _pt.string.isRequired,
    value: _pt.number.isRequired
  })).isRequired,
  width: _pt.number,
  height: _pt.number,
  font: _pt.oneOfType([_pt.string, _pt.func]),
  fontStyle: _pt.oneOfType([_pt.string, _pt.func]),
  fontWeight: _pt.oneOfType([_pt.string, _pt.number, _pt.func]),
  fontSize: _pt.oneOfType([_pt.number, _pt.func]),
  rotate: _pt.oneOfType([_pt.number, _pt.func]),
  spiral: _pt.oneOfType([_pt.oneOf(['archimedean']), _pt.oneOf(['rectangular']), _pt.func]),
  padding: _pt.oneOfType([_pt.number, _pt.func]),
  random: _pt.func,
  onWordClick: _pt.func,
  onWordMouseOver: _pt.func,
  onWordMouseOut: _pt.func
};
export default /*#__PURE__*/React.memo(WordCloud, isDeepEqual);