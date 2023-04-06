export interface Episode {
  uuid: string;
  datePublished: number;
  name: string;
  duration: number;
}

export interface PodcastSeries {
  uuid: string;
  name: string;
  itunesId: number;
  description: string;
  imageUrl: string;
  episodes: Array<Episode>;
  authorName: string;
}

export interface PodcastData {
  getPodcastSeries: PodcastSeries;
}

export interface Podcast {
  data: PodcastData;
  popular: boolean;
}
