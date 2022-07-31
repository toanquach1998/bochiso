import axios, { api } from "../axios";

const target = 'targets';

async function  targets(){
    const res = await api.post(target, {} );
    console.log(res.data);

    return res.data

}
async function getwitharraytopic( arrayTopic){
    //url: ' ' , data{ topics: [ 1,2,... ]}
    const res = await api.post(target + '/getwitharrtopic' , {
        topics: arrayTopic,  // ' 1,2' []
    });

    return res.data;
}
export default{
    targets,
    getwitharraytopic,
}
