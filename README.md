# array-sort
Angular 1.X Filter to sort arrays based on sub-properties using [String.localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
and [Array.Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). This allows the opportunity to use a javascript natural sort.

#### Install with Bower
```sh
$ bower install array-sort
```

### Adding dependency to your project

```js
angular.module('myModule', ['arraySort']);
```

### Options
#### sortProperty
Type: `String`
Required: `True`

This is the property name of the object that you would like to compare

#### numeric
Type: `Boolean`
Default: `false`
Required: `False`

Whether numeric collation should be used, such that "1" < "2" < "10". Possible values are true and false; the default is false. This option can be set through an options property or through a Unicode extension key; if both are provided, the options property takes precedence. Implementations are not required to support this property.

#### sensitivity
Type: `string`
Default: `base`
Required: `False`

Which differences in the strings should lead to non-zero result values. Possible values are:

- "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.
- "accent": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.
- "case": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.
- "variant": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.

#### locale
Type: `string` or `String Array`
Default: `undefined`
Required: `False`

Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page. The following Unicode extension keys are allowed:

#### ignorePunctuation
Type: `Boolean`
Default: false
Required: `False`

Whether punctuation should be ignored. Possible values are true and false;

#### caseFirst
Type: `Boolean`
Default: false
Required: `False`

Whether punctuation should be ignored. Possible values are true and false; the default is false.

## Example Usage
Array start:
```js 
[{id: 1, name: Item 1}, {id: 2, name: Item 2}, {id: 3, name: Item 22}, {id: 4, name: Item 3}]
````

```js
scope.sortOptions = {
    numeric: true,
    sortProperty: 'name'
};
```

```html
<tr ng-repeat="item in myArray | arraySort : sortOptions">
```

Results in 
```js 
[{id: 1, name: Item 1}, {id: 2, name: Item 2}, {id: 4, name: Item 3}, {id: 3, name: Item 22}]
````
