import gql from "graphql-tag";

// eslint-disable-next-line import/prefer-default-export
export const GET_TEAMS = gql`
  query GetTeams($season: Int!) {
    getTeams(season: $season) {
      id
      name
      teamName
      abbreviation
      locationName
      officialSiteUrl
      logoUrl
    }
  }
`;

export const GET_TEAM = gql`
  query GetTeam($id: Int!, $season: Int!) {
    getTeam(id: $id, season: $season) {
      id
      name
      division {
        id
        name
      }

      players {
        id
        fullName
        height
        weight
        positionCode
				playerPhotoUrl
				primaryNumber
        stats {
          hits
          assists
          shots
          timeOnIce
          goals
          games
          powerPlayGoals
          powerPlayPoints
          powerPlayTimeOnIce
          shotPct
          shifts
          points
          timeOnIcePerGame
          plusMinus
        }
      }
      teamName
      abbreviation
      locationName
      officialSiteUrl
      logoUrl
    }
  }
`;

export const GET_ALL_TEAMS_STATS = gql`
  query GetTeams($season: Int!) {
    getTeams(season: $season) {
      id
      name
      teamName
      logoUrl
      division {
        id
        name
      }
      stats {
        gamesPlayed
        wins
        losses
        pts
        goalsPerGame
        goalsAgainstPerGame
        shotsPerGame
        shotsAllowed
        powerPlayOpportunities
      }
      standing {
        goalsScored
        goalsAgainst
        goalDiff
      }
    }
  }
`;
