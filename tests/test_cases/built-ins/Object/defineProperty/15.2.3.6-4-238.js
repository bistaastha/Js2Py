// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-238
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, TypeError is thrown if the [[Configurable]]
    attribute value of 'name' is false  and the [[Configurable]] field
    of 'desc' is true (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arrObj = [];

Object.defineProperty(arrObj, "1", {
    value: 3,
    writable: true,
    configurable: false
});

try {
    Object.defineProperty(arrObj, "1", {
        value: 13,
        writable: true,
        configurable: true
    });
    $ERROR("Expected an exception.");

} catch (e) {
    verifyEqualTo(arrObj, "1", 3);

    verifyWritable(arrObj, "1");

    verifyNotEnumerable(arrObj, "1");

    verifyNotConfigurable(arrObj, "1");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}