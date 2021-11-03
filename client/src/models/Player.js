/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GET_PLAYER = gql` query GetPlayer($player_id: Int!, $season: Int!) {
	getPlayer(id: $player_id, $season: Int!) {
		fullName,
		currentAge,
		stats,
		rosterStatus,
		shootsCatches,
		position,
		playerPhotoUrl,
		primaryNumber
	}
}`;
