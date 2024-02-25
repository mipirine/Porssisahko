const data = require('../services/defineApiParameters');
const mod = require('../services/utils'); 
const axios = require('axios');

module.exports = async function (context, req) {
   
    const apiUrl = data.defineApiParameters();        
    const apiResponse = await axios.get(apiUrl);
    const modifiedData = mod.jsonToArray(apiResponse.data.prices);
    
    context.res.json({
        text: modifiedData
    });          
};
