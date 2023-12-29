"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error = /** @class */ (function () {
    function Error(message, code) {
        throw { message: message, code: code };
    }
    return Error;
}());
exports.default = Error;
module.exports = Error;
