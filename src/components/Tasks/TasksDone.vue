<template>
     <q-list
    v-if="Object.keys(tasksDone).length" 
    separator 
    bordered>
      <task
        v-for="(task, key) in tasksDone"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
</template>

<script>
export default {
    props: ['tasksDone'],
    components: {
    task: require("../Tasks/Task").default,
    }

}
</script>

<style>

</style>