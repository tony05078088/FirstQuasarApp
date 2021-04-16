<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
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
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to shop",
          completed: false,
          dueDate: "2021/04/16",
          dueTime: "10:30"
        },
        {
          id: 2,
          name: "Get Apples",
          completed: false,
          dueDate: "2021/04/17",
          dueTime: "11:30"
        },
        {
          id: 3,
          name: "Get bananas",
          completed: false,
          dueDate: "2021/04/18",
          dueTime: "12:30"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
