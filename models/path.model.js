const { default: mongoose } = require("mongoose");

const pathSchemma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Path d escription is required']
    },
    createdBy: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    rating: {
        tupe: Number,
        default: 0
    },
    category: Number,
    visualizations: {
        type: Number, 
        default: 0
    }
});

const Path = mongoose.model('Path', pathSchemma);

module.exports = Path;
