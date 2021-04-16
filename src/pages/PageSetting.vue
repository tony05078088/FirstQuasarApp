<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item
        v-for="(task,key) in tasks"
        :key="key"
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-grey-4'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strike': task.completed }">{{
            task.name
          }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="today" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label class="row  justify-end" caption>{{
                task.dueDate
              }}</q-item-label>
              <q-item-label class="row  justify-end" caption>{{
                task.dueTime
              }}</q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('tasks',['tasks'])
  }
};
</script>

<style scoped></style>
