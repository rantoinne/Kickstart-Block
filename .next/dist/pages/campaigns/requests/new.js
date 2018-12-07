'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ayanwork/Ravi/Development/kickstart/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
	(0, _inherits3.default)(RequestNew, _Component);

	function RequestNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			description: '',
			recipient: '',
			loading: false,
			errorMessage: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								campaign = (0, _campaign2.default)(_this.props.address);

								_this.setState({ loading: true, errorMessage: '' });
								_context.prev = 3;
								_context.next = 6;
								return _web2.default.eth.getAccounts();

							case 6:
								accounts = _context.sent;
								_context.next = 9;
								return campaign.methods.createRequest(_this.state.description, _web2.default.utils.toWei(_this.state.value, 'ether'), _this.state.recipient).send({
									from: accounts[0]
								});

							case 9:

								_routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 15:

								_this.setState({ loading: false });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 12]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, 'Back')), _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'Create A Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.description,
				onChange: function onChange(event) {
					return _this3.setState({ description: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.recipient,
				onChange: function onChange(event) {
					return _this3.setState({ recipient: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Uhh!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, 'Create!')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
				var address;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								address = props.query.address;
								return _context2.abrupt('return', { address: address });

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUNoQyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7Ozs7OztrTkFFTCxBO1VBQU8sQUFDQyxBQUNQO2dCQUZNLEFBRU8sQUFDYjtjQUhNLEFBR0ssQUFDWDtZQUpNLEFBSUcsQUFDVDtpQkFMTSxBLEFBS1E7QUFMUixBQUNOLFcsQUFhRDt3RkFBVSxpQkFBQSxBQUFNLE9BQU47a0JBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNUO2NBQUEsQUFBTSxBQUVBOztBQUhHLG1CQUdRLHdCQUFTLE1BQUEsQUFBSyxNQUh0QixBQUdRLEFBQW9CLEFBRXJDOztjQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBTHRCLEFBS1QsQUFBYyxBQUErQjt3QkFMcEM7d0JBQUE7ZUFPZSxjQUFBLEFBQUssSUFQcEIsQUFPZSxBQUFTOztZQUExQjtBQVBFLDRCQUFBO3dCQUFBO3dCQVFGLEFBQVMsUUFBVCxBQUFpQixjQUN0QixNQUFBLEFBQUssTUFEQSxBQUNNLGFBQ1gsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQUZ2QixBQUVMLEFBQW1DLFVBQ25DLE1BQUEsQUFBSyxNQUhBLEFBR00sV0FITixBQUtMO2VBQ00sU0FkQyxBQVFGLEFBS0EsQUFDQyxBQUFTO0FBRFYsQUFDTCxTQU5LOztZQVNOOzt1QkFBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFqQmxDO3dCQUFBO0FBQUE7O1lBQUE7d0JBQUE7d0NBbUJSOztjQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFuQnRCLEFBbUJSLEFBQWMsQUFBb0I7O1lBR25DOztjQUFBLEFBQUssU0FBUyxFQUFFLFNBdEJQLEFBc0JULEFBQWMsQUFBVzs7WUF0QmhCO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkF5QkQ7Z0JBQ1I7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxBQUFDLDhCQUFLLHVCQUFzQixLQUFBLEFBQUssTUFBM0IsQUFBaUMsVUFBdkM7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFGRixBQUNDLEFBQ0MsQUFJRCwwQkFBQSxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQU5ELEFBTUMsQUFDQSxxQ0FBQSxBQUFDLHVDQUFLLFVBQVcsS0FBakIsQUFBc0IsVUFBVSxPQUFRLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBL0MsQUFBcUQ7ZUFBckQ7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxnQ0FBQSxBQUFDO1dBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbkI7Y0FBVyxrQkFBQSxBQUFDLE9BQUQ7WUFBVSxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BQTdDLEFBQVUsQUFBYyxBQUE0QjtBQUZoRTs7ZUFBQTtpQkFIRixBQUNDLEFBRUMsQUFNRDtBQU5DO0FBQ0Msd0JBS0QsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLG1DQUFBLEFBQUM7V0FDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNuQjtjQUFXLGtCQUFBLEFBQUMsT0FBRDtZQUFVLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdkMsQUFBVSxBQUFjLEFBQXNCO0FBRjFEOztlQUFBO2lCQVhGLEFBU0MsQUFFQyxBQU1EO0FBTkM7QUFDQyx3QkFLRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsOEJBQUEsQUFBQztXQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ25CO2NBQVcsa0JBQUEsQUFBQyxPQUFEO1lBQVUsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUEzQyxBQUFVLEFBQWMsQUFBMEI7QUFGOUQ7O2VBQUE7aUJBbkJGLEFBaUJDLEFBRUMsQUFNRDtBQU5DO0FBQ0Msd0JBS0YsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUF1QixRQUFPLFNBQVUsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO2VBQW5EO2lCQXpCRCxBQXlCQyxBQUNBO0FBREE7dUJBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVUsS0FBQSxBQUFLLE1BQS9CLEFBQXFDO2VBQXJDO2lCQUFBO0FBQUE7TUFsQ0gsQUFDQyxBQU9DLEFBMEJDLEFBTUg7Ozs7OzBHQXhFNEIsQTs7Ozs7WUFDcEI7QSxrQkFBWSxNQUFNLEEsTUFBbEIsQTswQ0FFRCxFQUFFLFMsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJnQixBLEFBcUZ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXlhbndvcmsvUmF2aS9EZXZlbG9wbWVudC9raWNrc3RhcnQifQ==