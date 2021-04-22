<template>
  <q-page>
    <q-list bordered padding>
      <q-separator spaced />
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour Time Formate</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="notif1" val="battery" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      notif1: null
    };
  }
};
</script>

<style></style>
