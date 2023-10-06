"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelGroupMessage = void 0;
const mongoose_1 = require("mongoose");
const groupMessageSchema = new mongoose_1.Schema({
    group: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Group'
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: String,
    type: {
        type: String,
        enum: ['TEXT', 'IMAGE']
    }
});
exports.ModelGroupMessage = (0, mongoose_1.model)('GroupMessage', groupMessageSchema);
