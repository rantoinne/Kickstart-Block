'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ayanwork/Ravi/Development/kickstart/components/Layout.js';

exports.default = function (props) {
	return _react2.default.createElement(_semanticUiReact.Container, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement(_head2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css', __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	})), _react2.default.createElement('div', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, _react2.default.createElement(_Header2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}), props.children));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiSGVhZCIsIkNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFFVDs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxPQUFVLEFBQ3pCO3dCQUNDLEFBQUM7O2FBQUQ7ZUFBQSxBQUNBO0FBREE7QUFBQSxFQUFBLGtCQUNBLEFBQUM7O2FBQUQ7ZUFBQSxBQUNDO0FBREQ7QUFBQSw0Q0FDTyxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjthQUE1QjtlQUZELEFBQ0EsQUFDQyxBQUVEO0FBRkM7c0JBRUQsY0FBQTs7YUFBQTtlQUFBLEFBQ0M7QUFERDtBQUFBLG9CQUNDLEFBQUM7O2FBQUQ7ZUFERCxBQUNDLEFBQ0U7QUFERjtBQUFBLFdBTkYsQUFDQyxBQUlBLEFBRVMsQUFJVjtBQVpEIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9heWFud29yay9SYXZpL0RldmVsb3BtZW50L2tpY2tzdGFydCJ9