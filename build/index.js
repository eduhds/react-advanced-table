module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactAdvancedTable = function (_Component) {
	_inherits(ReactAdvancedTable, _Component);

	function ReactAdvancedTable(props) {
		_classCallCheck(this, ReactAdvancedTable);

		var _this = _possibleConstructorReturn(this, (ReactAdvancedTable.__proto__ || Object.getPrototypeOf(ReactAdvancedTable)).call(this, props));

		_this.state = {
			searchAll: ''
		};
		return _this;
	}

	_createClass(ReactAdvancedTable, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    colunms = _props.colunms,
			    _props$rows = _props.rows,
			    rows = _props$rows === undefined ? [] : _props$rows;
			var searchAll = this.state.searchAll;


			var keys = Object.keys(rows[0]);
			colunms = colunms || keys;

			// Pesquisa todas
			if (searchAll) {
				rows = rows.filter(function (r) {
					var has = Object.keys(r).map(function (k) {
						return r[k];
					}).filter(function (c) {
						return (c + '').toLowerCase().indexOf(searchAll.toLowerCase()) !== -1;
					});

					return has.length > 0;
				});
			}

			// agrupar
			var grupo = ''; // ex.: idade
			var grupos = null;
			if (grupo) {
				grupos = {};
				var diferentes = [];
				rows.map(function (r) {
					return r[grupo];
				}).map(function (g) {
					if (!diferentes.includes(g)) {
						diferentes.push(g);
					}
				});

				diferentes.forEach(function (dif) {
					grupos[dif] = rows.filter(function (r) {
						return r[grupo] === dif;
					});
				});

				console.log('grupos', grupos);
			}

			// Ordenar
			var colOrder = ''; // 'idade';
			if (colOrder) {
				rows = rows.sort(sortAlphabeticallyByChild(colOrder));
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('input', { onChange: function onChange(e) {
						return _this2.setState({ searchAll: e.target.value });
					} }),
				_react2.default.createElement(
					'table',
					null,
					_react2.default.createElement(
						'thead',
						null,
						_react2.default.createElement(
							'tr',
							null,
							colunms.map(function (item, index) {
								return _react2.default.createElement(
									'th',
									{ key: index },
									item
								);
							})
						)
					),
					!grupos && _react2.default.createElement(
						'tbody',
						null,
						rows.map(function (item, index) {
							return _react2.default.createElement(
								'tr',
								{ key: index },
								keys.map(function (k) {
									return item[k];
								}).map(function (cel, id) {
									return _react2.default.createElement(
										'td',
										{ key: id },
										cel
									);
								})
							);
						})
					),
					grupos && _react2.default.createElement(
						'tbody',
						null,
						Object.keys(grupos).map(function (key, index) {
							return _react2.default.createElement(
								_react2.default.Fragment,
								{ key: index },
								_react2.default.createElement(
									'tr',
									null,
									_react2.default.createElement(
										'td',
										null,
										key
									)
								),
								grupos[key].map(function (item, index) {
									return _react2.default.createElement(
										'tr',
										{ key: index },
										keys.map(function (k) {
											return item[k];
										}).map(function (cel, id) {
											return _react2.default.createElement(
												'td',
												{ key: id },
												cel
											);
										})
									);
								})
							);
						})
					)
				)
			);
		}
	}]);

	return ReactAdvancedTable;
}(_react.Component);

exports.default = ReactAdvancedTable;


function sortAlphabeticallyByChild(k) {
	return function (a, b) {
		var textA = a[k];
		var textB = b[k];
		if (typeof textA === 'string') textA = textA.toUpperCase().trim();
		if (typeof textB === 'string') textB = textB.toUpperCase().trim();
		return textA < textB ? -1 : textA > textB ? 1 : 0;
	};
}

/***/ })
/******/ ]);