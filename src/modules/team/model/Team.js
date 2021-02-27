import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_TEAMS = gql` query GetTeams($season: Int!) {
	getTeams(season: $season) {
		id
		name
		teamName
		abbreviation
		locationName
		officialSiteUrl
		logoUrl
	}
}`;

export const GET_TEAM = gql` query GetTeam($id: Int!, $season: Int!) {
		getTeam(id: $id, season: $season) {
			id
			name
			division {
				id
				name
			}
			teamName
			abbreviation
			locationName
			officialSiteUrl
			logoUrl
		}

}`;
