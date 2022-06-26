<template>
  <q-layout view="lHh Lpr lFf" class="darkMode">
    <q-header reveal>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://vpdtnd.vnptioffice.vn/qlvbdh_ndh/login/img/logo-header.png"
            />
          </q-avatar>
          Bộ Chỉ Số
        </q-toolbar-title>
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <dark-mode-t />

          <q-btn round dense flat color="white" icon="filter_list">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Tỉnh</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Khu vực 1</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Khu vực 2</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                  <q-item-section>Khu vực 3</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Khu vực 4</q-item-section>
                </q-item>
                <q-separator />
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="35px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Xin chào, Admin</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup to="/login">
                    <q-item-section>Đăng xuất</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="darkMode">
      <q-list>
        <q-item-label header>Danh mục</q-item-label>
        <q-item to="/dashboard" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item icon="pages" label="Pages">
          <q-list class="q-pl-lg">
            <q-item to="/login" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="lock" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="login-button">Đăng nhập</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              to="src/pages/register"
              active-class="q-item-no-link-highlighting"
            >
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Tạo tài khoản</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <!--  <q-item to="src/pages/table" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Table</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item to="/createdemuc" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tạo Đề Mục</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/createbcs" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tạo BCS</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/inputdata" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Nhập dữ liệu</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import DarkModeT from "src/components/DarkModeT.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    DarkModeT,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    return {
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
});
</script>

<style></style>
