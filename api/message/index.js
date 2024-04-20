const data = require('../services/defineApiParameters');
const mod = require('../services/utils'); 
const axios = require('axios');

module.exports = async function (context, req) {
    const days = req.query.inputValue;
    const apiUrl = data.defineApiParameters(days);       
    const apiResponse = await axios.get(apiUrl);
    const modifiedData = mod.jsonToArray(apiResponse.data.prices);
    
    context.res.json({
        text: modifiedData
    });          
};
