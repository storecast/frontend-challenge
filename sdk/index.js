"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = (user) => new Promise(resolve => {
    setTimeout(() => {
        resolve({ user, token: 'test.token' });
    }, 1000);
});
//# sourceMappingURL=index.js.map