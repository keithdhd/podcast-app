import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
  genres: Array<string>;
}

export interface PodcastData {
  getPodcastSeries: PodcastSeries;
}

export interface Podcast {
  data: PodcastData;
  popular?: boolean;
}

export interface MenuItem {
  description: string;
  icon?: IconProp;
}
