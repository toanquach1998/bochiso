import { api } from "../axios";

const topic = 'topics/';

async function  topics(){
    const res = await api.post(topic, {} );
    console.log(res.data); 

    return res.data;
}
export default{ 
    topics,
}