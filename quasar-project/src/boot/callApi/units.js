import { api } from "../axios";

const unit = 'units/';

async function  units(){
    const res = await api.post(unit, {} );
    console.log(res.data); 

    return res.data;
}


export default{ 
    units,
}