"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelChatMessages = void 0;
const mongoose_1 = require("mongoose");
const chatMessageSchema = new mongoose_1.Schema({
    chat: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
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
}, {
    timestamps: true
});
exports.ModelChatMessages = (0, mongoose_1.model)('ChatMessage', chatMessageSchema);
