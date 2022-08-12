<template>
  <div class="q-pa-md">
    <div>
      <p class="text-center">
        <q-badge class="badge-text">Thiết lập tiêu chí</q-badge>
      </p>
    </div>
    <div class="row q-gutter-sm width-topic">
      <q-btn
        class="col-md col-xs-12 btn-click"
        color="primary"
        icon-right="add"
        label="Thêm đề mục"
        @click="dialog1 = true"
      />
      <q-dialog v-model="dialog1">
        <q-card class="width-card">
          <q-card-section>
            <div class="text-h6">Thêm đề mục</div>
          </q-card-section>
          <q-card-section>
            <q-input
              class="input-topic"
              v-model="text"
              type="text"
              label="Tên tiêu đề"
            />
          </q-card-section>
          <q-card-section class="row items-center q-gutter-sm justify-center">
            <q-btn
              class="col btn-target"
              v-close-popup
              label="Tạo"
              color="primary"
            />
            <q-btn
              class="col btn-target"
              v-close-popup
              label="Hủy"
              color="red"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-btn
        class="col-md col-xs-12 btn-click"
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
              v-model="name"
              type="text"
              label="Tên tiêu chí"
            />
            <q-input
              class="col-md col-xs-12"
              v-model="comment"
              type="text"
              label="Đơn vị tính"
            />
            <q-input
              class="col-md col-xs-12"
              v-model="order"
              type="text"
              label=" Số thứ tự"
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
              :disable="choseDicator == null"
              class="col-md col-xs-12"
              name="accepted_genres"
              filled
              v-model="choseTarget"
              :options="targets"
              option-label="name"
              color="primary"
              label="Tiêu chí cha"
            />
          </q-card-section>

          <div class="button-dialog">
            <q-card-section class="row items-center q-gutter-sm justify-center">
              <q-btn
                class="col-md-2 btn-target"
                v-close-popup
                label="Tạo"
                @click="create()"
                color="primary"
              />
              <q-btn
                class="col-md-2 btn-target"
                v-close-popup
                label="Hủy"
                color="red"
              />
            </q-card-section>
          </div>
        </q-card>
      </q-dialog>

      <!-- <q-btn class="col-md-2 col-xs-12 btn-click" color="primary" label="Xác nhận" /> -->
    </div>
  </div>
  <div class="text-center">tiêu đề ở đây</div>
  <div class="row">
    <div class="col-md-2">
      <div
        style="max-width: 350px"
        v-for="topic in topics"
        :key="topic.id"
        
      >
        <q-list bordered separator>
          <q-item  clickable v-ripple @click="seen = false"  >
            <q-item-section
              @click="choseDicator = topic.id"
              >{{ topic.name }}</q-item-section
            >
          </q-item>
        </q-list>
        <div class="text-right"></div>
      </div>
    </div>
    <div class="col-md-8" v-if="seen == false">
      <q-expansion-item
        switch-toggle-side
        expand-separator
        :disable="choseDicator == null"
        v-for="target1 in targets"
        :key="target1.id"
        dense
        @click="getTarget(target1.id)" 
      >
        <template v-slot:header>
          <q-item-section class="text-left col-md-6">
            <q-input v-model="target1.name" />
          </q-item-section>
          <q-item-section class="text-left col-md">
            <q-input v-model="target1.comment" />
          </q-item-section>
          <q-item-section class="text-left col-md">
            <q-input v-model="target1.order" />
          </q-item-section>
        </template>
        <q-card>
          <q-card-section> 
            <div>
                <q-card class="my-card">
                  <q-card-section>
                    
                  </q-card-section>
                </q-card>
            </div>  
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <!--   <div
        :disable="choseDicator == null"
        v-for="target1 in targets"
        :key="target1.id"
      >
        {{ target1.name }}
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import setindicator from "../boot/callApi/setindicators";
import units from "src/boot/callApi/units";
import topics from "src/boot/callApi/topics";
import targets from "src/boot/callApi/targets";

export default {
  name: "createtarget",

  async created() {
    /*    const cator = await detailsetindicator.detail(-1);
    this.tables = cator.topics; */
    const data4 = await setindicator.index();
    this.tables = data4.topics;

    const [data1, data2, data3] = await Promise.all([
      units.units(),
      topics.topics(),
      targets.targets(),
    ]);
    this.units = data1.units;
    this.topics = data2.topics;
    this.targets = data3.targets;
  },

  methods: {
    toLength(arr) {
      return sp.toLength(arr);
    },
  },

  data() {
    const name = ref(null);
    return {
      name: "",
      comment: "",
      dialog1: ref(false),
      dialog2: ref(false),
      table: [],
      topics: [],
      targets: [],
      targetChilds: [],
      choseDicator: null,
      order: "",
      choseTarget: null,
      seen: true,
      onReset() {
        name.value = null;
      },
      selected: ref(""),
    };
  },
  watch: {
    async choseDicator(newVal, oldVal) {
      if (newVal !== null) {
        /*    let data = await targets.getwithtopic(newVal.id, 1);
        this.targets = data.topic[0].targets; */
        this.getTopic(newVal);
      }
    },
    async choseTarget(newVal1, oldVal) {
      if (newVal1 !== null) {
        this.getTarget(newVal1);
      }
    },
  },
  methods: {
    async create() {
      let parentId = this.choseTarget == null ? null : this.choseTarget.id;
      const data = await targets.create(
        this.name,
        parentId,
        this.choseDicator.id,
        this.comment,
        this.order
      );
    },
    async getTopic(newVal) {
      let data = await targets.getwithtopic(newVal, 1);
      this.targets = data.topic[0].targets;
    },
    async getTarget(newVal) {
      let data = await targets.getwithparent(newVal);
      console.log(data);
      this.targetChilds = data.targets;
    },
  },
};
</script>

<style lang="sass" scoped>

.badge-text
  font-size: 30px
  padding: 20px


.width-topic
  margin-top: 10px
  margin-right: 50px

.q-btn
  min-height: 50px

.badge-dialog
  font-size: 25px
  padding: 20px

.width-card
  min-width: 50%

.text-h6
  font-size: 25px

.width-card2
  min-width: 70%

.button-dialog
  margin-left: auto
  margin-right: auto
  justify-content: center
.btn-click
  margin-left: 30px
.btn-target
  min-height: 40px
  min-width: 100px
  max-width: 100px
.test
  border: 1px solid


.items
  background-color: white
  color: black

.selitem
  background-color: #0809
  color: yellow
   
</style>
