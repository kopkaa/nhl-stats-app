/* eslint-disable no-undef */ /* eslint-disable no-undef */
<template>
  <div class="d-flex flex-row card__topTen flex-wrap">
    <div class="w-100">
      <v-tabs
        v-model="tab"
        class="mb-8"
        @change="changeTab($event)"
      >
        <v-tab
          v-for="(tab, index) in tabs"
          :key="index"
        >
          {{ tab.title }}
        </v-tab>
        <div
          class="mr-8 ml-auto"
          style="width:200px"
        >
          <v-select
            v-model="selectedPosition"
            :items="positions"
            item-text="title"
            item-value="code"
            label="Pozice"
            class="pt-2"
            solo
            dense
            @change="positionChanged($event)"
          />
        </div>
      </v-tabs>
    </div>

    <v-tabs-items
      v-model="tab"
      class="card__topTen__tabs"
    >
      <!-- -----------------------POINTS------------------------------- -->

      <v-tab-item>
        <div class="flex-grow-1 d-flex  align-center flex-column pt-4">
          <v-avatar
            size="100"
            color="blue-grey lighten-5"
            class="playerAvatar"
            @click="openPlayerDetail(showedPlayer.id)"
          >
            <v-img
              :lazy-src="showedPlayer.playerPhotoUrl"
              :src="showedPlayer.playerPhotoUrl"
            />
          </v-avatar>
          <div
            class="mt-3 text-center"
            @click="openPlayerDetail(showedPlayer.id)"
          >
            <div class="playerFullName">
              <span class="body-1">#{{ showedPlayer.primaryNumber }} | </span>
              <span class="body-1">{{ showedPlayer.fullName }}</span><br>
            </div>
            <span class="grey--text text--lighten-2">{{ showedPlayer.positionCode }}</span>
          </div>

          <div class="mt-7 text-center">
            <span
              class="text-uppercase  subtitle-2 blue--text text--lighten-3"
              color="#64B5F6"
            >
              Body
            </span>
            <br>
            <span class="display-1">{{ showedPlayer.stats.points }} </span>
            <br>
          </div>

          <div class="mt-7 d-flex w-100 pa-0 justify-center">
            <!-- TODO udelat tooltipy na všechno -->
            <span class="text-uppercase  subtitle-1 mr-5">
              <span class="blue--text text--lighten-3 mr-1">G: </span>
              {{ showedPlayer.stats.goals }}
            </span>
            <br>
            <span class="text-uppercase  subtitle-1 mr-5">
              <span class="blue--text text--lighten-3 mr-1">A: </span>
              {{ showedPlayer.stats.assists }}
            </span>
            <br>
            <span class="text-uppercase  subtitle-1 mr-5">
              <span class="blue--text text--lighten-3 mr-1">GP:</span>
              {{ showedPlayer.stats.games }}
            </span>
            <span class="text-uppercase  subtitle-1">
              <span class="blue--text text--lighten-3 mr-1">toi:</span>
              {{ showedPlayer.stats.timeOnIcePerGame }}
            </span>
            <br>
          </div>
        </div>
        <div class="flex-grow-2 pb-4">
          <ul
            v-for="(player, index) in topTen('stats.points')"
            :key="index"
            class="d-flex justify-space-between subtitle-2"
            @mouseover="showPlayer(player)"
          >
            <span class="mr-12 mt-4 ">{{ player.fullName }} </span>
            <span class="mr-8 mt-4"> {{ player.stats.points }}</span>
          </ul>
        </div>
      </v-tab-item>

      <!-- -----------------------GOALS------------------------------- -->
      <v-tab-item>
        <div class="flex-grow-1 d-flex  align-center flex-column pt-4">
          <v-avatar
            size="100"
            color="blue-grey lighten-5"
          >
            <v-img
              :lazy-src="showedPlayer.playerPhotoUrl"
              :src="showedPlayer.playerPhotoUrl"
            />
          </v-avatar>
          <div class="mt-3 text-center">
            <span class="body-1">#{{ showedPlayer.primaryNumber }} | </span>
            <span class="body-1">{{ showedPlayer.fullName }}</span><br>
            <span class="grey--text text--lighten-2">{{ showedPlayer.positionCode }}</span>
          </div>

          <div class="mt-7 text-center">
            <span
              class="text-uppercase  subtitle-2 blue--text text--lighten-3"
              color="#64B5F6"
            >
              Goly
            </span>
            <br>
            <span class="display-1">{{ showedPlayer.stats.goals }} </span>
            <br>
          </div>

          <div class="mt-7 d-flex w-100 pa-0 justify-center">
            <span class="text-uppercase  subtitle-1 mr-5">
              <span class="blue--text text--lighten-3 mr-1">P: </span>
              {{ showedPlayer.stats.points }}
            </span>
            <br>
            <span class="text-uppercase  subtitle-1 mr-5">
              <span class="blue--text text--lighten-3 mr-1">A: </span>
              {{ showedPlayer.stats.assists }}
            </span>
            <br>
            <span class="text-uppercase  subtitle-1 mr-5">
              <span class="blue--text text--lighten-3 mr-1">GP:</span>
              {{ showedPlayer.stats.games }}
            </span>
            <span class="text-uppercase  subtitle-1">
              <span class="blue--text text--lighten-3 mr-1">toi:</span>
              {{ showedPlayer.stats.timeOnIcePerGame }}
            </span>
            <br>
          </div>
        </div>
        <div class="flex-grow-2 pb-4">
          <ul
            v-for="(player, index) in topTen('stats.goals')"
            :key="index"
            class="d-flex justify-space-between subtitle-2"
            @mouseover="showPlayer(player)"
          >
            <span class="mr-12 mt-4 ">{{ player.fullName }} </span>
            <span class="mr-8 mt-4"> {{ player.stats.goals }}</span>
          </ul>
        </div>
      </v-tab-item>
      <!-- -----------------------ASSISTS------------------------------- -->
      <v-tab-item>
        <div class="flex-grow-1 d-flex  align-center flex-column pt-4">
          <v-avatar
            size="100"
            color="blue-grey lighten-5"
          >
            <v-img
              :lazy-src="showedPlayer.playerPhotoUrl"
              :src="showedPlayer.playerPhotoUrl"
            />
          </v-avatar>
          <div class="mt-3 text-center">
            <span class="body-1">#{{ showedPlayer.primaryNumber }} | </span>
            <span class="body-1">{{ showedPlayer.fullName }}</span><br>
            <span class="grey--text text--lighten-2">{{ showedPlayer.positionCode }}</span>
          </div>

          <div class="mt-7 text-center">
            <span
              class="text-uppercase  subtitle-2 blue--text text--lighten-3"
              color="#64B5F6"
            >
              Asistence
            </span>
            <br>
            <span class="display-1">{{ showedPlayer.stats.assists }} </span>
            <br>
          </div>

          <div class="mt-7 d-flex w-100 pa-0 justify-center">
            <span class="text-uppercase  subtitle-1 mr-5">
              <span class="blue--text text--lighten-3 mr-1">P: </span>
              {{ showedPlayer.stats.points }}
            </span>
            <br>
            <span class="text-uppercase  subtitle-1 mr-5">
              <span class="blue--text text--lighten-3 mr-1">G: </span>
              {{ showedPlayer.stats.goals }}
            </span>
            <br>
            <span class="text-uppercase  subtitle-1 mr-5">
              <span class="blue--text text--lighten-3 mr-1">GP:</span>
              {{ showedPlayer.stats.games }}
            </span>
            <span class="text-uppercase  subtitle-1">
              <span class="blue--text text--lighten-3 mr-1">toi:</span>
              {{ showedPlayer.stats.timeOnIcePerGame }}
            </span>
            <br>
          </div>
        </div>
        <div class="flex-grow-2 pb-4">
          <ul
            v-for="(player, index) in topTen('stats.assists')"
            :key="index"
            class="d-flex justify-space-between subtitle-2"
            @mouseover="showPlayer(player)"
          >
            <span class="mr-12 mt-4 ">{{ player.fullName }} </span>
            <span class="mr-8 mt-4"> {{ player.stats.assists }}</span>
          </ul>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
// TODO topten of all teams
// TODO gamesPlayed pridat

export default {
  name: 'TopTen',

  props: {
    players: {
      type: Array,
      required: true,
    },
  },

  data () {
    return {
      showedPlayer: null,
      imgLoaded: false,
      tab: null,
      positions: [
        {
          title: 'Všichni hráči',
          code: 'all',
        },
        {
          title: 'Útok',
          code: 'forwards',
        },
        {
          title: 'Obrana',
          code: 'defense',
        },
      ],
      selectedPosition: 'all',
      tabs: [
        {
          title: 'Body',
          filterBy: 'stats.points',
        },
        {
          title: 'Goly',
          filterBy: 'stats.goals',
        },
        {
          title: 'Asistence',
          filterBy: 'stats.assists',
        },
      ],
    };
  },

  computed: {
    topTen () {
      let { players } = this;

      if (this.selectedPosition === 'forwards') {
        players = _.reject(players, { positionCode: 'D' });
      }
      else if (this.selectedPosition === 'defense') {
        players = _.reject(
          players,
          (player) => player.positionCode === 'C'
            || player.positionCode === 'L'
            || player.positionCode === 'R',
        );
      }
      return (filterBy) => _.take(
        _.orderBy(
          _.filter(_.reject(players, { positionCode: 'G' }), (player) => player.stats),
          filterBy,
          'desc',
        ),
        10,
      );
    },
  },

  created () {
    const [showedPlayer] = this.topTen('stats.points');
    this.showPlayer(showedPlayer);
  },

  methods: {
    showPlayer (player) {
      this.showedPlayer = player;
    },
    changeTab (event) {
      this.showFirstPlayer(event);
    },
    positionChanged () {
      this.showFirstPlayer(this.tab);
    },

    showFirstPlayer (tabIndex) {
      const [showedPlayer] = this.topTen(this.tabs[tabIndex].filterBy);
      this.showPlayer(showedPlayer);
    },
    openPlayerDetail (playerId) {
      console.log('PlayerID', playerId);
    },
  },
};
</script>
