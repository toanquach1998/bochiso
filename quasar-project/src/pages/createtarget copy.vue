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
    <div>
      <q-markup-table>
        <thead>
          <tr>
            <th>
              <span class="text-left">TT</span>
            </th>
            <th>
              <span class="text-left">Chỉ số</span>
            </th>
          </tr>
        </thead>
        
          <template v-for="topic in topics" :key="topic.id">
         
           
              <q-list bordered class="rounded-borders">
                <q-expansion-item
                  :options="topics"
                  option-label="name"
                  expand-separator
                  icon="perm_identity"
                  :caption= "topic.name"
                >
               <div v-for="(target1) in topic.targets" :key="target1.id">
                <q-card>
                 
                  <q-card-section>
                      {{target1.name}}
                  </q-card-section>
                 
                </q-card>
                 </div>
                </q-expansion-item>
                </q-list>
                <!--     <tr class="text-left">
                  <td>
                    <span> {{ ++index }}</span>
                  </td>
                  <td class="text-left">{{ topic.name }}</td>
                </tr> -->
            
           
          
          </template>
        
      </q-markup-table>
    </div>
  </div>
  
</template>

<script>
import { ref } from "vue";
import units from "src/boot/callApi/units";
import topics from "src/boot/callApi/topics";
import targets from "src/boot/callApi/targets";

import { useQuasar } from "quasar";

export default {
  name: "createtarget",

  async created() {
    /*    const cator = await detailsetindicator.detail(-1);
    this.tables = cator.topics; */

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

      topics: [],
      targets: [],
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
        let data = await targets.getwithtopic(newVal.id, 1);
        this.targets = data.topic[0].targets;
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
</style>
