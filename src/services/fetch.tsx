import { gql } from '@apollo/client';

export const fetchPodcast = ( uuid: string ) => {
    return gql`
    query {
      getPodcastSeries(uuid: "${uuid}") {
        uuid
        name
        episodes {
          uuid
          datePublished
          name
          duration
        }
        itunesId
        description
        imageUrl
        authorName
        genres
      }
    }
  `;
}