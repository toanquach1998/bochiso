import { api } from "../axios";

const prefix = 'setindicators/';

async function  index(unitid1 = null, year1 = null , month1 = null){
    const res = await api.post(prefix, {
        unit_id: unitid1, 
        year: year1,
        month: month1
    } );
    console.log(res.data); 

    return res.data;
}
export default{ 
    index,
}