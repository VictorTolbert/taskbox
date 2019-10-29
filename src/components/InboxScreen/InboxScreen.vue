<template>
  <div>
    <PureInboxScreen :error="error" />
  </div>
</template>

<script>
import PureInboxScreen from "../PureInboxScreen/PureInboxScreen";
import { mapState } from "vuex";

export default {
  name: "InboxScreen",
  components: {
    PureInboxScreen
  },
  computed: {
    ...mapState(["error"])
  }
};
</script>
