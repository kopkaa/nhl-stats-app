export default {

  computed: {
    filteredItems () {
      if (this.filter === 'teams' && this.getTeams) {
        return this.getTeams.filter((team) => team.name.match(this.search));
      } return null;
    },
  },
};
