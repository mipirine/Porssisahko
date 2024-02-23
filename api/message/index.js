const data = require('../services/defineApiParameters');
const mod = require('../services/utils'); 

const axios = require('axios');

module.exports = async function (context, req) {

    //context.log('price: ', data);
    const apiUrl = data.defineApiParameters();
    
    const apiResponse = await axios.get(apiUrl);
    //console.log('apiResponse: ', apiResponse);
    const modifiedData = mod.jsonToArray(apiResponse.data.prices);
    //console.log('modifiedData: ', modifiedData);

    /* context.res.json({
        text: "Hello from the API", 
        prices: apiUrl
    }); */

    context.res.json(modifiedData);
};