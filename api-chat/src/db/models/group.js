"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelGroup = void 0;
const mongoose_1 = require("mongoose");
const groupSchema = new mongoose_1.Schema({
    name: String,
    image: String,
    creator: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    participants: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});
exports.ModelGroup = (0, mongoose_1.model)('Group', groupSchema);
