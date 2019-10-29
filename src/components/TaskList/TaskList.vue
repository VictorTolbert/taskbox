<template>
  <div>
    <PureTaskList :tasks="tasks" />
  </div>
</template>

<script>
import PureTaskList from "../PureTaskList/PureTaskList.vue";
import { mapState } from "vuex";

export default {
  name: "TaskList",
  components: {
    PureTaskList
  },
  computed: {
    ...mapState(["tasks"])
  }
};
</script>
