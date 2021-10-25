export default {

  computed: {
    filteredItems() {
      if (this.filter === 'teams') {
        return this.getTeams.filter((team) => team.name.match(this.search));
      } return null;
    },
  },
};
