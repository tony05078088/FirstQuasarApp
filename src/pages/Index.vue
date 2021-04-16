<template>
  <q-page>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <div>
          {{ task.name }}
        </div>
        <small>
          {{ task.dueData }} @ {{task.dueTime}}
        </small>
      </li>
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to Shop",
          dueData: "2021/3/15",
          dueTime: "18:30"
        },
        {
          id: 2,
          name: "Get banana",
          dueData: "2021/4/15",
          dueTime: "19:30"
        },
        {
          id: 3,
          name: "Get Apples",
          dueData: "2021/5/15",
          dueTime: "20:30"
        }
      ]
    };
  }
};
</script>
