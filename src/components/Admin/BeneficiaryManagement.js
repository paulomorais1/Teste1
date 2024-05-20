"use strict";
// components/Admin/BeneficiaryManagement.tsx
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var BeneficiaryManagement = function () {
    var name = (0, react_1.useState)('')[0];
    return (<react_native_1.View>
      <react_native_1.Text>Beneficiary Management Component</react_native_1.Text>
      <react_native_1.Text>{name} </react_native_1.Text>
    </react_native_1.View>);
};
exports.default = BeneficiaryManagement;
