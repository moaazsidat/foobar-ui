"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sum = function sum(input) {
    return input.reduce(function (a, b) {
        return a + b;
    });
};

exports.default = sum;