"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathImage = void 0;
const getPathImage = (file) => {
    const filePath = file.path;
    const fileSplit = filePath.split('/');
    return `${fileSplit[2]}/${fileSplit[3]}`;
};
exports.getPathImage = getPathImage;
