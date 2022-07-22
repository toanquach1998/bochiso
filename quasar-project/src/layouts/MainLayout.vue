<template>
  <q-layout view="lHh Lpr lFf" class="darkMode">
    <q-header reveal>
      <q-toolbar>
       <!--  <q-btn color="primary" icon="check" label="OK" @click="reloadpage()" /> -->
        <q-btn
          flat
          dense
          round

          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title class="col-xs-7">
          <q-avatar>
            <img
              src="https://vpdtnd.vnptioffice.vn/qlvbdh_ndh/login/img/logo-header.png"
            />
          </q-avatar>
          Bộ chỉ số điều hành
        </q-toolbar-title>
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <dark-mode-t />

          <!-- <q-btn round dense flat color="white" icon="filter_list">
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
          </q-btn> -->
          <q-btn round flat>
            <q-avatar size="35px" icon="account_circle">
              <!-- <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/6/65/VNPT_Logo.svg/1551px-VNPT_Logo.svg.png" /> -->

              <q-menu>
                                <q-list style="min-width: 140px">

                  <q-separator />
                  <q-item clickable v-close-popup to="/login">
                    <q-item-section>Xin chào, {{name(user.name)}}</q-item-section>
                  </q-item>
                </q-list>
                <q-list style="min-width: 100px">

                  <q-separator />
                  <q-item clickable v-close-popup @click="logout()">
                    <q-item-section>Đăng xuất</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list size="50px">
        <q-item-label> <span class="text-header">MENU</span> </q-item-label>
        <q-item to="/dashboard" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" size="30px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <span class="text-list">Dashboard</span>
            </q-item-label>
          </q-item-section>
        </q-item>

           <q-item to="/createbcs" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="add_circle" size="30px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <span class="text-list">Tạo bộ chỉ số</span>
            </q-item-label>
          </q-item-section>
        </q-item>

            <q-item to="/createtarget" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="add_circle" size="30px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Thiết lập tiêu chí</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/inputdata" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="edit_note" size="40px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cập nhật bộ chỉ số theo tháng</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/inputdata_year" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="edit_note" size="40px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cập nhật bộ chỉ số theo năm</q-item-label>
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
import users from "src/boot/callApi/user";
import { mapGetters } from "vuex";

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
  async created() {
    if( localStorage.getItem('key') == null && this.user.username.length == 0 ) this.$router.push('/login');
    try {
      const res = await users.index();
      this.$store.dispatch("User/user", res.user);
    } catch (e) {
      if (
        localStorage.getItem("key") !== null
        ||
        this.user.username.length > 1
      ) {
        this.$router.go();
      } else {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    ...mapGetters("User", ["user"]),
  },
  methods: {
    logout() {
      localStorage.removeItem('key');
      this.$store.dispatch("User/user", {
        username: '',
      });
      this.$router.go();
    },
    reloadpage() {
      this.$router.go();
    },
    name(name) {
      return name.split(' ').slice(-1).join(' ');
    },
  },
});
</script>

<style lang="sass" scope>

.text-header
  text-transform: uppercase
  font-size: 1rem
  display: block
  margin: 0.75rem 0
  margin-left: 10px
  color: #1976D2
  white-space: nowrap
  position: relative
  font-weight: blod
/* .text-list
  font-size: 18px */
.q-item__section--side > .q-icon
  font-size: 30px
.body--light
  background-color: #f8f8f8
</style>
