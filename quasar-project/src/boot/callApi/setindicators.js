import { api } from "../axios";

const prefix = 'setindicators';

async function  index(unitid1 = null, year1 = null , month1 = null,type = 0 ){
    const res = await api.post(prefix, {
        unit_id: unitid1,
        year: year1,
        month: month1,
        type: type,
    } );
    return res.data;
}

async function createWithTopicArr(unitId, topicIdArr,  year ,month = null )  {
  const res = await api.post(prefix + '/createwitharr', {
    unitId : unitId,
    topic_id_arr: topicIdArr,
    year: year,
    month: month,
  });
  return res.data;
}
async function update(id, plan, type) {
  const res = await api.post(prefix + '/update', {
    id: id,
    plan: plan,
    type: type,
  });

  return res.data;
}
export default{
    index,
    createWithTopicArr,
    update,
}
