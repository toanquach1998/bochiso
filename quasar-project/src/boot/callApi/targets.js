import axios, { api } from "../axios";

const target = 'targets';

async function targets() {
  const res = await api.post(target, {});
 // console.log(res.data);

  return res.data

}
async function getwitharraytopic(arrayTopic) {
  //url: ' ' , data{ topics: [ 1,2,... ]}
  const res = await api.post(target + '/getwitharrtopic', {
    topics: arrayTopic,  // ' 1,2' []
  });

  return res.data;
}

async function create(name, parentId, topicId, comment , order) {
  let parent_id = parentId == null ? -1 : parentId;
  const res = await api.post(target + '/create', {
    name: name,
    parent_id: parent_id,
    topic_id: topicId,
    comment: comment,
    order: order,
  });

  return res.data;
}

async function getwithtopic(topicId, type = 1) {
  const res = await api.post(target + '/getwithtopic', {
    type: type,
    topic_id: topicId,
  });

  return res.data;
}

async function getwithtarget(targetID, type = 1) {
  const res = await api.post(target + '/getwithtarget', {
    type: type,
    target_id: targetID,
  });

  return res.data;
}

export default {
  targets,
  getwitharraytopic,
  create,
  getwithtopic,
  getwithtarget,
}
