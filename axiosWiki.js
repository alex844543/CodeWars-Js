const axios = require('axios') 
// Please use these headers along with your request.
const headers = { 'Accept-Encoding': 'gzip,deflate', 'User-Agent': "Codewars-Kata/643869cb0e7a563b722d50ad (https://www.codewars.com/kata/wikidata-json-scraper, language: JavaScript)" }

const wikidataScraper = async (url) => {
  
  try {
    const res = await axios.get(url,{
      headers
    })
    let firstKey = Object.keys(res.data.entities)[0];
       return {
    id: res.data.entities[firstKey].id,
    label: (res.data.entities[firstKey].labels?.en?.value || "No Label"),
    description: (res.data.entities[firstKey].descriptions?.en?.value || "No Description")
  }
    
    } catch(err){
      return err
    }
  
  

}
