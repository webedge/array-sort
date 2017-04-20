'use strict';

(function () {
	'use strict';

	angular.module('arraySort', []).filter('arraySort', arraySort);

	arraySort.$inject = ['$filter'];
	function arraySort($filter) {

		return function (input, options) {
			var numeric = options.numeric || false,
			    sensitivity = options.sensitivity || 'base',
			    locale = options.locale || undefined,
			    ignorePunctuation = options.ignorePunctuation || false,
			    caseFirst = options.caseFirst || false,
			    sortValue = options.sortProperty || undefined;

			input.sort(function (a, b) {
				return a[sortValue].localeCompare(b[sortValue], undefined, { numeric: true, sensitivity: 'base' });
			});

			return input;
		};
	}
})();
//# sourceMappingURL=array-sort.js.map
