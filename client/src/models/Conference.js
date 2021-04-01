// eslint-disable-next-line import/no-extraneous-dependencies
import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const CONFS = gql` query {
      getConferences {
        name
      }
}`;
