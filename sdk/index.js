(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.createUser = function (user) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve({ user: user, token: 'test.token' });
            }, 1000);
        });
    };
});
