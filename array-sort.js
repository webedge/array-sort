(function () {
	'use strict';

	angular
		.module('arraySort', [])
		.filter('arraySort', arraySort);

	arraySort.$inject = ['$filter'];
	function arraySort($filter) {

		return function (input, options) {
			let numeric = options.numeric || false,
				sensitivity = options.sensitivity || 'base',
				locale = options.locale || undefined,
				ignorePunctuation = options.ignorePunctuation || false,
				caseFirst = options.caseFirst || false,
				sortValue = options.sortProperty || undefined;

			var collator = new Intl.Collator(locale, { numeric: numeric, sensitivity: sensitivity, ignorePunctuation: ignorePunctuation, caseFirst: caseFirst });

			input.sort(function (a, b) {
				return collator.compare(a[sortValue], b[sortValue]);
			});

			return input;
		};
	}
})();