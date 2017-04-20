(function () {
	'use strict';

	angular.module('arraySort', []).filter('arraySort', arraySort);

	arraySort.$inject = ['$filter'];
	function arraySort($filter) {

		return function (input, options) {
			let numeric = options.numeric || false,
				sensitivity = options.sensitivity || 'base',
				locale = options.locale || undefined,
				ignorePunctuation = options.ignorePunctuation || false,
				caseFirst = options.caseFirst || false,
				sortValue = options.sortProperty || undefined;

			input.sort(function (a, b) {
				return a[sortValue].localeCompare(b[sortValue], 'en-US', { numeric: numeric, sensitivity: sensitivity, ignorePunctuation: ignorePunctuation, caseFirst: caseFirst });
			});

			return input;
		};
	}
})();