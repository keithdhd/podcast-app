import PopularBox from './PopularBox'
import GenreBox from './GenreBox'
import styled from 'styled-components'
import podcastData from '../data/podcasts.json';
import { useState } from 'react';
import {Podcast} from '../interfaces'
import {Genre} from '../types'


export default function PodcastList(){

    const [podcasts, setPodcasts] = useState<Array<Podcast>>(podcastData)

    const getPopularPodcasts = (podcasts: Array<Podcast>) => {
        return podcasts.filter((p: Podcast) => {
            return p.popular === true;
        }).slice(0, 2)
    }

    // Genres filtering
    const filterByGenre = (podcasts: Array<Podcast>, genre: Genre) => {
        return podcasts.filter( (p: Podcast) => {
            return p.data.getPodcastSeries.genres.includes(genre)
        }).slice(0,5) 
    }

    const popularPodcasts = getPopularPodcasts(podcasts)
    const societyAndCulturePodcasts = filterByGenre(podcasts, "PODCASTSERIES_SOCIETY_AND_CULTURE")
    const educationPodcasts = filterByGenre(podcasts, "PODCASTSERIES_EDUCATION")
    const businessPodcasts = filterByGenre(podcasts, "PODCASTSERIES_BUSINESS")


    return (
        <ListContainer>
            <PopularBox podcasts={popularPodcasts}/>
            <GenreBox podcasts={societyAndCulturePodcasts} genreName= "Top podcasts in Society & Culture"/>
            <GenreBox podcasts={educationPodcasts} genreName= "Top podcasts in Education"/>
            <GenreBox podcasts={businessPodcasts} genreName= "Top podcasts in Business"/>
        </ListContainer>
    )

}

const ListContainer = styled.section`
    display: flex;    
    flex-direction: column;
    padding-left: 2rem;
`