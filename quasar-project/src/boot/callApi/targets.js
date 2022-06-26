import { api } from "../axios";

const terget = 'targets.js/';

async function  targets(){
    const res = await api.post(target, {} );
    console.log(res.data); 

    return res.data;
}


export default{ 
    targets,
}