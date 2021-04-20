<template>
     <q-list
    v-if="Object.keys(tasksTodo).length" 
    separator 
    bordered>
      <task
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
</template>

<script>
export default {
    props: ['tasksTodo'],
    components: {
    task: require("../Tasks/Task").default,
    }

}
</script>

<style>

</style>