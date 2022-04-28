/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GET_MATCHES_BY_TEAM = gql` query GetMatches($teamId: Int!, $startDate: String!, $endDate: String!) {
	getScheduleByTeam(teamId: $teamId, startDate: $startDate, endDate: $endDate) {
		teamId,
		date,
		games {
			awayTeam {
				name
			}
			homeTeam {
				name
			}
		}
	}
}`;
