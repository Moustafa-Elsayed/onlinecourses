// controllers/dataController.js
const dummyData = require('../data/dummyData');

const getAllData = (req, res) => {
    res.json(dummyData);
};

const getDataById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const data = dummyData.find(item => item.id === id);

    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
};

module.exports = {
    getAllData,
    getDataById
};
