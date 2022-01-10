"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const yup = __importStar(require("yup"));
yup.setLocale({
    string: {
        max: ({ path, max }) => `${path} length must be lesser than ${max}`,
        min: ({ path, min }) => `${path} length must be greater than ${min}`
    }
});
const email = yup.string().required().trim().lowercase().email("please enter a valid email");
exports.createUserSchema = yup.object().shape({
    email,
    password: yup.string().required().max(30).min(6)
});
exports.updateUserSchema = yup.object().shape({
    email
});
