import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_ALL_TEAMS = gql` 
query GetTeams($season: Int!) {
	getTeams(season: $season) {
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
    }
		standing {
			goalsScored
			goalsAgainst
			divisionRank
		}
	}
}`;
