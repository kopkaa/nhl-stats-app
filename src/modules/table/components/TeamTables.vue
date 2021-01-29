<template>
  <main v-if="!loading">
    <div
      class="table table--main--wrapper"
    >
      <div class="table__options">
        <div class="table__options--item">
          <label class="label">Divize</label>
          <v-select
            v-model="selectedDivision"
            :items="divisions"
            item-text="name"
            item-value="title"
            label="Divize"
            background-color="secondary"
            rounded
            dense
            return-object
            single-line
          />
        </div>
      </div>
      <v-data-table
        :headers="headers"
        :items="selectedDivision.teams"
        :sort-by.sync="sortBy"
        :sort-desc.sync="descSort"
        :items-per-page="8"
        height="auto"
        class="table--main"
        no-data-text="No data to display"
        dense
        calculate-widths
        hide-default-footer
      >
        <template
          v-slot:item.name="{item}"
        >
          <div class="table__first-column">
            <img
              :src="item.logoUrl"
              width="35"
            >
            <span> {{ item.name }}</span>
          </div>
        </template>

        <template
          v-slot:[`item.score`]="{item}"
        >
          <span> {{ item.standing.goalsScored }}:{{ item.standing.goalsAgainst }}</span>
        </template>

        <template
          v-for="h in headers"
          v-slot:[`header.${h.value}`]="{ header }"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <span v-if="h.value == 'name'">{{ selectedDivision.name }}</span>
              <span
                v-else
                v-on="on"
              >{{ h.text }}</span>
            </template>
            <span>{{ h.tooltip }}</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </div>
  </main>
</template>

<script>
import { GET_ALL_TEAMS } from '../model/Team';

const _ = require('lodash');

export default {
  name: 'Tables',
  data () {
    return {
      season: this.$currentSeason,
      divisions: [
        {
          title: 'north',
          name: 'Severní',
          teams: [],
        },
        {
          title: 'atlantic',
          name: 'Atlantická',
          teams: [],
        },
        {
          title: 'west',
          name: 'Západní',
          teams: [],
        },
        {
          title: 'east',
          name: 'Východní',
          teams: [],
        },
      ],
      headers: [
        { text: 'Name', align: 'start', value: 'name' },
        {
          text: 'GP', align: 'start', value: 'stats.gamesPlayed', tooltip: 'Games played',
        },
        {
          text: 'W', align: 'start', value: 'stats.wins', tooltip: 'Wins',
        },
        {
          text: 'L', align: 'start', value: 'stats.losses', tooltip: 'Losses',
        },
        {
          text: 'PTS', align: 'start', value: 'stats.pts', tooltip: 'Points',
        },
        {
          text: 'SC', align: 'start', value: 'score', tooltip: 'Score', sortable: false,
        },
        {
          text: 'GS', align: 'start', value: 'stats.goalsPerGame', tooltip: 'Goals scored per game',
        },
        {
          text: 'GA', align: 'start', value: 'stats.goalsAgainstPerGame', tooltip: 'Goals against per game',
        },
      ],
      descSort: true,
      sortBy: 'stats.pts',
      selectedDivision: null,
      loading: false,
    };
  },

  apollo: {
    getTeams: {
      query: GET_ALL_TEAMS,
      loadingKey: 'loading',
      variables () {
        return {
          season: this.season,
        };
      },

      skip () {
        return true;
      },
    },
  },

  async created () {
    await this.fetchData();
    this.loading = false;
  },

  mounted () {

  },

  methods: {
    fetchData () {
      this.$apollo.queries.getTeams.skip = false;
      this.$apollo.queries.getTeams.refetch().then((results) => {
        this.divisionTeams();
        this.selectedDivision = this.divisions[0];
      });
    },
    divisionTeams () {
      this.divisions[0].teams = _.filter(this.getTeams, (team) => {
        if (team.division.id === 28) return team;
      });

      this.divisions[1].teams = _.filter(this.getTeams, (team) => {
        if (team.division.id === 26) return team;
      });

      this.divisions[2].teams = _.filter(this.getTeams, (team) => {
        if (team.division.id === 27) return team;
      });

      this.divisions[3].teams = _.filter(this.getTeams, (team) => {
        if (team.division.id === 25) return team;
      });
    },
  },

};
</script>
