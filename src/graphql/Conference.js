import gql from 'graphql-tag';
export const CONFS = gql` query {
      getConferences {
        name
      }
}`
