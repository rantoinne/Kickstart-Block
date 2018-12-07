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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ayanwork/Ravi/Development/kickstart/components/RequestRow.js';


var RequestRow = function (_Component) {
	(0, _inherits3.default)(RequestRow, _Component);

	function RequestRow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context.sent;
							_context.next = 6;
							return campaign.methods.approveRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context2.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context2.sent;
							_context2.next = 6;
							return campaign.methods.finalizeRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 6:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestRow, [{
		key: 'render',
		value: function render() {
			var Row = _semanticUiReact.Table.Row,
			    Cell = _semanticUiReact.Table.Cell;

			var ready = this.props.request.approvalCount > this.props.approversCount / 2;
			return _react2.default.createElement(Row, { disabled: this.props.request.complete, positive: ready && !this.props.request.complete, __source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, this.props.id + 1), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, this.props.request.description), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _web2.default.utils.fromWei(this.props.request.value, 'ether')), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, this.props.request.recipient), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, this.props.request.approvalCount, '/', this.props.approversCount), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, 'Approve')), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Finalize')));
		}
	}]);

	return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlYWR5IiwicmVxdWVzdCIsImFwcHJvdmFsQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU87O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7OztrTixBQUVMLHFGQUFXLG1CQUFBO2lCQUFBO2lFQUFBO2NBQUE7c0NBQUE7V0FDSjtBQURJLGtCQUNPLHdCQUFTLE1BQUEsQUFBSyxNQURyQixBQUNPLEFBQW9CO3VCQUQzQjtjQUdhLGNBQUEsQUFBSyxJQUhsQixBQUdhLEFBQVM7O1dBQTFCO0FBSEksMkJBQUE7dUJBQUE7dUJBSUosQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO2NBQzlDLFNBTEcsQUFJSixBQUFvRCxBQUNuRCxBQUFTO0FBRDBDLEFBQ3pELFFBREs7O1dBSkk7V0FBQTt1QkFBQTs7QUFBQTtlQUFBO0EsYSxBQVNYLHNGQUFZLG9CQUFBO2lCQUFBO21FQUFBO2NBQUE7d0NBQUE7V0FDTDtBQURLLGtCQUNNLHdCQUFTLE1BQUEsQUFBSyxNQURwQixBQUNNLEFBQW9CO3dCQUQxQjtjQUdZLGNBQUEsQUFBSyxJQUhqQixBQUdZLEFBQVM7O1dBQTFCO0FBSEssNEJBQUE7d0JBQUE7dUJBSUwsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7Y0FDL0MsU0FMSSxBQUlMLEFBQXFELEFBQ3BELEFBQVM7QUFEMkMsQUFDMUQsUUFESzs7V0FKSztXQUFBO3dCQUFBOztBQUFBO2dCQUFBO0E7Ozs7OzJCQVNIO09BQUEsQUFDQSxNQURBLEFBQ2MsdUJBRGQsQUFDQTtPQURBLEFBQ0ssT0FETCxBQUNjLHVCQURkLEFBQ0ssQUFDYjs7T0FBTSxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQkFBZ0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBNUQsQUFBNkUsQUFDN0U7MEJBQ0UsY0FBRCxPQUFLLFVBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUEzQixBQUFtQyxVQUFVLFVBQVcsU0FBUyxDQUFDLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBN0UsQUFBcUY7ZUFBckY7aUJBQUEsQUFDQztBQUREO0lBQUEsa0JBQ0UsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxXQUFPLEFBQUssTUFBTCxBQUFXLEtBRG5CLEFBQ0MsQUFBdUIsQUFDdkIsb0JBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxXQUFPLEFBQUssTUFBTCxBQUFXLFFBRm5CLEFBRUMsQUFBMEIsQUFDMUIsOEJBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxvQkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBOUIsQUFBc0MsT0FIOUMsQUFHQyxBQUFPLEFBQTZDLEFBQ3BELDJCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsV0FBTyxBQUFLLE1BQUwsQUFBVyxRQUpuQixBQUlDLEFBQTBCLEFBQzFCLDRCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsV0FBTyxBQUFLLE1BQUwsQUFBVyxRQUFsQixBQUEwQixlQUFnQixVQUFBLEFBQUssTUFMaEQsQUFLQyxBQUFxRCxBQUNyRCxpQ0FBQyxjQUFEOztlQUFBO2lCQUFBLEFBQ0U7QUFERjtBQUFBLFdBQ0UsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFDOUIsQUFBQyx5Q0FBTyxPQUFSLEFBQWUsU0FBUSxPQUF2QixNQUE2QixTQUFVLEtBQXZDLEFBQTRDO2VBQTVDO2lCQUFBO0FBQUE7SUFBQSxFQVJILEFBTUMsQUFFRSxBQU1GLDZCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsV0FDRSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLHVCQUMvQixBQUFDLHlDQUFPLE9BQVIsQUFBZSxRQUFPLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7ZUFBMUM7aUJBQUE7QUFBQTtJQUFBLEVBakJILEFBQ0MsQUFjQyxBQUVDLEFBUUg7Ozs7O0FBaER1QixBLEFBbUR6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2F5YW53b3JrL1JhdmkvRGV2ZWxvcG1lbnQva2lja3N0YXJ0In0=