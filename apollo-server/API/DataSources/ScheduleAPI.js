const { RESTDataSource } = require("apollo-datasource-rest");

class ScheduleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://statsapi.web.nhl.com/api/v1/schedule";
  }

  async returnSchedule(startDate, endDate) {
    const fullSchedule = await this.get(
      `/?startDate=${startDate}&endDate=${endDate}`
    );
    return fullSchedule.dates.map((date) => date);
  }

  async returnScheduleByTeam(teamId, startDate, endDate) {
    const fullSchedule = await this.get(
      `/?startDate=${startDate}&endDate=${endDate}&teamId=${teamId}`
    );
    return fullSchedule.dates.map((date) => {
      date.teamId = teamId;
      return date;
    });
  }

  async returnGames(teamId, date) {
    const dayGames =
      typeof teamId === "undefined"
        ? await this.get(`/?date=${date}`)
        : await this.get(`/?date=${date}&teamId=${teamId}`);
    const games = dayGames.dates[0].games.map((game) => {
      game.awayTeamId = game.teams.away.team.id;
      game.awayTeamScore = game.teams.away.score;
      game.homeTeamId = game.teams.home.team.id;
      game.homeTeamScore = game.teams.home.score;
      return game;
    });
    return games;
  }
}

module.exports = ScheduleAPI;
