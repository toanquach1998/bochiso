import { api } from "../axios";

const cator = 'detailsetindicators/';

async function detail(){
    const res = await api.post(cator, {} );
    console.log(res.data);

    return res.data;

}

async function update(id , total_plan){ 
   const res = await api.post(cator + 'update', {
    id: id, 
    total_plan: total_plan,
   });

   return res.data;
}
export default{
    detail, 
    update
}

