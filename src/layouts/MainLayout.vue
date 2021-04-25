<template>
  <q-layout view="hhr lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Williams' Quasar
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          icon-right="face"
          label="Login"
          class="absolute-right"
          flat
        />
        <q-btn
          @click="logoutUser"
          v-else
          icon-right="face"
          label="Logout"
          class="absolute-right"
          flat
        />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>
          Navigation
        </q-item-label>
        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
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
import { mapState, mapActions } from "vuex";
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: "Todo",
          icon: "list",
          to: "/todo"
        },
        {
          label: "Settings",
          icon: "segment",
          to: "/settings"
        },
        {
          label: "Abouts",
          icon: "info",
          to: "/about"
        }
      ]
    };
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),
  },
  computed: {
    ...mapState("auth", ["loggedIn"])
  }
};
</script>

<style scoped lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
    color: red;
  }
}
</style>
