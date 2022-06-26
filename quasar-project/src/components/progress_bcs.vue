<template>
  <q-card class="q-mt-sm" id="progress_bcs">
    <q-card-section class="text-h6 q-pb-none">
      <q-item>
        <q-item-section avatar class="">
          <q-icon color="blue" name="fas fa-chart-line" size="40px" />
        </q-item-section>

        <q-item-section>
          <div class="" style="font-size: 25px">Tiến trình - {{ thang }}</div>
        </q-item-section>
        <q-space />
        <!--  <q-btn round dense flat color="" icon="filter_list">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Tháng 1</q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>Tháng 2</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Tháng 3</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Tháng 4</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Tháng 5</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>...</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-menu>
        </q-btn> -->
      </q-item>
    </q-card-section>

    <div class="row">
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="red"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value1"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="light-blue"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value1"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="light-blue"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value1"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="light-blue"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value1"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="red"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value1"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="red"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="red"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="red"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value1"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="red"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value1"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="red"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>

      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value1"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="red"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
      <div class="col-md-3 text-center">
        <q-circular-progress
          show-value
          class="q-ma-md"
          :value="value1"
          size="150px"
          font-size="14px"
          :thickness="0.2"
          color="red"
          track-color="transparent"
        >
          <div class="q-pa-sm text-center" id="progess_value">
            <br />
            {{ text }} <br /><br />
            {{ value1 }}%
          </div>
        </q-circular-progress>
        <q-item-section>
          <q-item-label class="text-blod">Doanh thu</q-item-label>
        </q-item-section>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "progress_bcs",

  setup() {
    return {
      value: 81,
      value1: 120,
      text: "20,0000/30,000800464000",
      thang: "Tháng 1",
    };
  },
};
</script>

<style lang="sass" scoped>

#progress_bcs
  margin: $myMargin,

#progess_value
  width: 130px
  text-align: center
  word-wrap: break-word
</style>
