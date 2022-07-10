<template>
  <div class="q-pa-md">
    <div>
      <p class="text-center text-h5">
        <q-badge class="badge-text">Thiết lập tiêu chí</q-badge>
      </p>
    </div>
    <div class="row q-gutter-sm width-topic">
      <q-btn
        class="col-md col-xs-12"
        color="primary"
        icon-right="add"
        label="Thêm tiêu đề"
        @click="dialog1 = true"
      />
      <q-dialog v-model="dialog1">
        <q-card class="width-card">
          <q-card-section>
            <div class="text-h6"><q-badge class="badge-dialog">Thêm tiêu đề</q-badge></div>
          </q-card-section>
          <q-card-section class="">
            <q-input v-model="text" type="text" label="Tên tiêu đề" />
          </q-card-section>
          <q-card-section class="row items-center q-gutter-sm">
            <q-btn class="col" v-close-popup label="Tạo" color="primary" />
            <q-btn class="col" v-close-popup label="Hủy" color="red" />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-btn
        class="col-md col-xs-12"
        color="primary"
        icon-right="add"
        label="Thêm tiêu chí"
        @click="dialog2 = true"
      />
      <q-dialog v-model="dialog2">
        <q-card class="width-card2">
          <q-card-section>
            <div class="text-h6">Thêm tiêu chí</div>
          </q-card-section>
          <q-card-section class="row items-center q-gutter-sm">
            <q-input
         
              class="col-md col-xs-12"
              v-model="text"
              type="text"
              label="Tên tiêu chí"
            />
            <q-input
              class="col-md col-xs-12"
              v-model="text"
              type="text"
              label="Đơn vị tính"
            />
            <q-select
              class="col-md col-xs-12"
              name="accepted_genres"
              v-model="choseDicator"
              :options="topics"
              option-label="name"
              color="primary"
              filled
              clearable
              label="Đề mục"
            />
            <q-select
              v-on:click="seen = !seen"
              class="col-md col-xs-12"
              filled
              color="primary"
              label="Tiêu chí cha"
            />
            <div v-if="seen == false">
              hello word
            </div>
          </q-card-section>
          <q-card-section class="row items-center q-gutter-sm">
            <q-btn class="col" v-close-popup label="Tạo" color="primary" />
            <q-btn class="col" v-close-popup label="Hủy" color="red" />
          </q-card-section>
        </q-card>
      </q-dialog>
   
    
      <q-select
        class="col-md col-xs-12"
        v-model="model"
        :options="options"
        label="Chọn tiêu đề"
        filled
      />
      <q-btn class="col-md-2 col-xs-12" color="primary" label="Xác nhận" />
     </div>
  </div>
</template>

<script>
import { ref } from "vue";
import units from "src/boot/callApi/units";
import setindicators from "src/boot/callApi/setindicators";
import topics from "src/boot/callApi/topics";
import detailsetindicator from "../boot/callApi/detailsetindicators";

import { useQuasar } from "quasar";

export default {
  name: "createtarget",

  async created() {
    const cator = await detailsetindicator.detail(-1);
    this.tables = cator.topics;

    const [data1, data2] = await Promise.all([units.units(), topics.topics()]);
    this.units = data1.units;
    this.topics = data2.topics;
  },
  data() {
    const name = ref(null);
    return {
      dialog1: ref(false),
      dialog2: ref(false),
      tables: {},
      topics: [],
      choseDicator: null,
      name,
      seen: true,
      onReset() {
        name.value = null;
      },
      selected: ref(""),
    };
  },
};
</script>

<style lang="sass" scoped>

.badge-text
  font-size: 30px
  padding: 20px
  background-color: #F87474

.width-topic

  
  margin-top: 10px
  max-height: 50px
  

.q-btn
  height: 55px

.badge-dialog
  font-size: 25px
  padding:20px

.width-card
  min-width: 60%

.width-card2
  min-width: 70%
</style>
