"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = function (user) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({ user: user, token: 'test.token' });
        }, 1000);
    });
};
//# sourceMappingURL=index.js.map