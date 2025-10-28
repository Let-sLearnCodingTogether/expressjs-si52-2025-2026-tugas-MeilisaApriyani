import mongoose from "mongoose";

const InvenSchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true  
        },
        purchaseDate: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const invenModel = mongoose.model("Inven", InvenSchema);

export default invenModel;