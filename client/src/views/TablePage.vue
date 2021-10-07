<template lang="">
	<div class="pa-10">
		<!-- //TODO: Fixed height a udelat scroll kdyz all -->
		<teams-table />
	</div>
</template>
<script>
// TODO Pridat Chart.js s nejakyma statistikama
import TeamsTable from "../components/TeamsTable.vue";

export default {
  components: {
    "teams-table": TeamsTable,
  },
};
</script>
