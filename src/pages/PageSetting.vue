<template>
  <q-page padding>
    <q-list bordered padding class="q-mb-md">
      <q-separator spaced />
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour Time Formate</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="show12HourTimeFormat" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show Task In One List </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="showTaskInOneList" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered padding>
      <q-item-label header>More</q-item-label>

      <q-item to="/settings/help" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

     
      <q-item
       @click="visitOurWebsite"
       tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Visit Our Website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>


      <q-item
       @click="emailUs"
       tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { openURL } from 'quasar'

export default {
  computed: {
    ...mapGetters("settings", ["settings"]),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat;
      },
      set(value) {
        this.setTimeFormat(value);
      }
    },
    showTaskInOneList: {
      get() {
        return this.settings.showTasksInOneList;
      },
      set(value) {
        this.setShowTasksInOneList(value);
      }
    }
  },
  methods: {
    ...mapActions("settings", ["setTimeFormat", "setShowTasksInOneList"]),
    visitOurWebsite() {
     openURL('http://www.google.com')
    },
    emailUs() {
     window.location.href = 'mailto:hello@awesometodo.com?subject=Awesome Todo FeedBack'
    }
  }
};
</script>

<style></style>
