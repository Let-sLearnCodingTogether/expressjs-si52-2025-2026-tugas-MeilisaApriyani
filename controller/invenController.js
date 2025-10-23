import invenModel from "../models/invenModel.js";

export const createInven = async (req, res) => {
    try {
        const request = req.body;

        const response = await invenModel.create({
            itemName: request.itemName,
            category: request.category,
            purchaseDate: request.purchaseDate
        });

        res.status(201).json({
            message: "Inventory berhasil ditambahkan",
            data: response
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}

    export const InvenList = async (req, res) => {
        try {
            const data = await invenModel.find();

            res.status(200).json({
                message: "Inventory items retrieved successfully",
                data: data
            })
        } catch (error) {
            res.status(500).json({
                message: error,
                data: null
            })
        }
    }
    
    export const updateInven = async (req, res) => {
        try {
            const Id = req.params?.id;
            const request = req.body;

            if(!Id) {
                return res.status(500).json({
                    message: "ID Wajib untuk diisi",
                    data: null
                })
            }
            const response = await invenModel.findByIdAndUpdate(Id, {
                itemName: request.itemName,
                category: request.category,
                purchaseDate: request.purchaseDate
            })

            if(!response) {
                return res.status(500).json({
                    message: "Inventory tidak ditemukan",
                    data: null
                })
            }
            return res.status(200).json({
                message: "Inventory berhasil diupdate",
                data: null
            })
        } catch (error) {
            res.status(500).json({
                message: error.message,
                data: null
            })
        }
    }

    export const deleteInven = async (req, res) => {
        try {
            const Id = req.params.id

            if(!Id) {
                return res.status(500).json({
                    message: "ID Wajib untuk diisi",
                    data: null
                })
            }
            const response = await invenModel.findByIdAndDelete(Id)

            if(response) {
                return res.status(200).json({
                    message: "Inventory berhasil dihapus",
                    data: null
                })
            }
            return res.status(404).json({
                message: "Inventory tidak ditemukan",
                data: null
            })
        } catch (error) {
            res.status(500).json({
                message: error,
                data: null
            })
        }
    }