'use strict';

(function () {
	'use strict';

	angular.module('bi-arraySort', []).filter('biArraySort', sortArray);

	sortArray.$inject = ['$filter'];
	function sortArray($filter) {

		return function (input, options) {
			var numeric = options.numeric || false,
			    sensitivity = options.sensitivity || 'base',
			    locale = options.locale || undefined,
			    ignorePunctuation = options.ignorePunctuation || true,
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
//# sourceMappingURL=bi-sortArray.js.map
