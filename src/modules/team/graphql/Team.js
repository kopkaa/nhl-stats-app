import gql from 'graphql-tag';
export const GET_TEAMS = gql` query GetTeams($season: Int!) {
  getTeams(season: $season) {
	name
    teamName
  	abbreviation
  	locationName
  	officialSiteUrl
  }
}`
