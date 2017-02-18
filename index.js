'use strict';

function methodExists(object, name) {
	return object.hasOwnProperty(name) && typeof object[name] === 'function'; // eslint-disable-line no-prototype-builtins
}

module.exports = function (object, name) {
	if (typeof name !== 'string' || (name.length === 0)) {
		throw new TypeError('Should `name` to be of type `string` and not empty `value`');
	}

	if (typeof object === 'function') {
		return methodExists(object.prototype, name);
	}

	if (typeof object === 'object') {
		return methodExists(object.constructor.prototype, name);
	}
};
