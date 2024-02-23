const data = require('../services/defineApiParameters');
const mod = require('../services/utils'); 

const axios = require('axios');

module.exports = async function (context, req) {
    try {
        //context.log('price: ', data);
        const apiUrl = data.defineApiParameters();
        
        const apiResponse = await axios.get(apiUrl);
        //console.log('apiResponse: ', apiResponse);
        const modifiedData = mod.jsonToArray(apiResponse.data.prices);
        //console.log('modifiedData: ', modifiedData);

          context.res.json({
            text: "Hello from the API on Friday evening"
        });  

       /*  context.res.json({
            text: JSON.stringify(modifiedData)
        }); */ 
    } catch (error) {
        //console.error('Error fetching data from the API:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};