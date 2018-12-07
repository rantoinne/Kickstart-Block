'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ayanwork/Ravi/Development/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
	(0, _inherits3.default)(RequestIndex, _Component);

	function RequestIndex() {
		(0, _classCallCheck3.default)(this, RequestIndex);

		return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(RequestIndex, [{
		key: 'renderRows',
		value: function renderRows() {
			var _this2 = this;

			return this.props.requests.map(function (request, index) {
				return _react2.default.createElement(_RequestRow2.default, {
					key: index,
					approversCount: _this2.props.approversCount,
					id: index,
					request: request,
					address: _this2.props.address,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 29
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var Header = _semanticUiReact.Table.Header,
			    Row = _semanticUiReact.Table.Row,
			    HeaderCell = _semanticUiReact.Table.HeaderCell,
			    Body = _semanticUiReact.Table.Body;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, 'Requests List!'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'ID'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, 'Description'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'Amount'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'Recipient'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'Approval Count'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Approve'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'Finalize'))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, this.renderRows())), _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, 'Found ', this.props.requestCount, ' requests'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, campaign, requestCount, approversCount, requests;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								address = props.query.address;
								campaign = (0, _campaign2.default)(address);
								_context.next = 4;
								return campaign.methods.getRequestsCount().call();

							case 4:
								requestCount = _context.sent;
								_context.next = 7;
								return campaign.methods.approversCount().call();

							case 7:
								approversCount = _context.sent;
								_context.next = 10;
								return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
									return campaign.methods.requests(index).call();
								}));

							case 10:
								requests = _context.sent;
								return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhcHByb3ZlcnNDb3VudCIsImFkZHJlc3MiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVk7O0FBQ3JCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7K0JBbUJRO2dCQUNaOztlQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVMsQUFDakQ7MkJBQVMsQUFBQztVQUFELEFBQ0EsQUFDTjtxQkFBaUIsT0FBQSxBQUFLLE1BRmhCLEFBRXNCLEFBQzVCO1NBSE0sQUFHRCxBQUNMO2NBSk0sQUFJSSxBQUNWO2NBQVUsT0FBQSxBQUFLLE1BTFQsQUFLZTs7Z0JBTGY7a0JBQVQsQUFBUyxBQVFUO0FBUlM7QUFDTixLQURNO0FBRFYsQUFBTyxBQVVQLElBVk87Ozs7MkJBWUM7T0FBQSxBQUNBLFNBREEsQUFDa0MsdUJBRGxDLEFBQ0E7T0FEQSxBQUNRLE1BRFIsQUFDa0MsdUJBRGxDLEFBQ1E7T0FEUixBQUNhLGFBRGIsQUFDa0MsdUJBRGxDLEFBQ2E7T0FEYixBQUN5QixPQUR6QixBQUNrQyx1QkFEbEMsQUFDeUIsQUFDakM7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxtQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBeUIsU0FBUSxPQUFRLEVBQUUsY0FBM0MsQUFBeUMsQUFBZ0I7ZUFBekQ7aUJBQUE7QUFBQTtNQUpILEFBRUMsQUFDQyxBQUNDLEFBSUYsa0NBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFEOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQ7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsdUJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFGRCxBQUVDLEFBQ0EsZ0NBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFIRCxBQUdDLEFBQ0EsMkJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFKRCxBQUlDLEFBQ0EsOEJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFMRCxBQUtDLEFBQ0EsbUNBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFORCxBQU1DLEFBQ0EsNEJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFUSCxBQUNDLEFBQ0MsQUFPQyxBQUdGLCtCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsV0FwQkYsQUFRQyxBQVlDLEFBQ0UsQUFBSyxBQUdSLGdDQUFBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BQVksZUFBQSxBQUFLLE1BQWpCLEFBQXVCLGNBekJ6QixBQUNDLEFBd0JDLEFBR0Y7Ozs7O3dHLEFBNUQ0Qjs7Ozs7WUFDcEI7QSxrQkFBWSxNQUFNLEEsTUFBbEIsQSxBQUNGO0EsbUJBQVcsd0JBQUEsQSxBQUFTOztlQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBQUFvQyxBOztZQUF6RDtBOztlQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQkFBakIsQUFBa0MsQTs7WUFBekQ7QTs7aUNBRWlCLEFBQVEsVUFDeEIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNFLE9BREYsQUFFRSxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBUyxBQUN2QjtnQkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3hDO0FBTG9CLEFBQ3RCLEEsU0FBQSxDQURzQjs7WUFBakI7QTt5Q0FRQyxFQUFFLFNBQUYsU0FBVyxVQUFYLFVBQXFCLGNBQXJCLGNBQW1DLGdCQUFuQyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaEJrQixBLEFBaUUzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9heWFud29yay9SYXZpL0RldmVsb3BtZW50L2tpY2tzdGFydCJ9