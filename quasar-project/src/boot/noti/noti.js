import { Notify } from "quasar";


function showNoti(mess, col) {
  Notify.create({
    message: mess,
    color: col,
    timeout: 3000,
    position: "top"
  });
}

export default {
  showNoti,
}
