"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelChat = void 0;
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    participant_one: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    participant_two: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
});
exports.ModelChat = (0, mongoose_1.model)('Chat', chatSchema);
