import PopularBox from './PopularBox'
import GenreBox from './GenreBox'
import styled from 'styled-components'
import podcastData from '../data/podcasts.json';
import { useState } from 'react';
import {Podcast} from '../interfaces'


export default function PodcastList(){

    const [podcasts, setPodcasts] = useState<Array<Podcast>>(podcastData)

    const getPopularPodcasts = (podcasts: Array<Podcast>) => {
        return podcasts.filter((p: Podcast) => {
            return p.popular === true;
        })
    }

    // Genres filtering
    type Genre = "PODCASTSERIES_SOCIETY_AND_CULTURE" | "PODCASTSERIES_SOCIETY_AND_CULTURE_PHILOSOPHY" | "PODCASTSERIES_BUSINESS"

    const filterByGenre = (podcasts, genre: Genre) => {

    }

    const popularPodcasts = getPopularPodcasts(podcasts)
    const societyAndCulturePodcasts = filterByGenre(podcasts, "PODCASTSERIES_SOCIETY_AND_CULTURE")


    return (
        <ListContainer>
            <PopularBox podcasts={popularPodcasts}/>
            <GenreBox podcasts={societyAndCulturePodcasts} genreName: Genre = "Top podcasts in Society & Culture"/>
        </ListContainer>
    )

}

const ListContainer = styled.section`
    display: flex;    
    flex-direction: column;
    padding-left: 2rem;
`