import { useState} from 'react'
import { ApolloCache, ApolloError, useQuery } from '@apollo/client'
import styled from 'styled-components'
import { PlayButton } from './PlayButton'
import { SubscribeButton } from './SubscribeButton'
import { fetchPodcast } from '../services/fetch'
import { Podcast } from '../interfaces'

interface PodcastDetailsProps { 
    uuid: string
}

export default function PodcastDetails({ uuid } : PodcastDetailsProps){

    console.log(uuid);

    const [podcast, setPodcast] = useState<Podcast | null>(null);
    const { loading, error, data } = useQuery(fetchPodcast(uuid));
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message} </p>;
  
    // Set the state to be the podcast
    setPodcast(data.getPodcastSeries);

    return (
        <Container>
            <Top>
                <Details>
                    <Title>{podcast?.data.getPodcastSeries.name}</Title>
                    <Author>Sam Harris</Author>
                    <SubscribeButton />
                    <Blurb>
                        Join neuroscientist, philosopher, and five-time New York Times best-selling author Sam Harris as he explores important and controversial questions about the mind, society, current events, moral philosophy, religion, and rationality—with an overarching focus on how a growing understanding of ourselves and the world is changing our sense of how we should live. \n\nSam is also the creator of the Waking Up app. Combining Sam’s decades of mindfulness practice, profound wisdom from varied philosophical and contemplative traditions, and a commitment to a secular, scientific worldview, Waking Up is a resource for anyone interested in living a more examined, fulfilling life—and a new operating system for the mind. \n\nWaking Up offers free subscriptions to anyone who can’t afford one, and donates a minimum of 10% of profits to the most effective charities around the world. To learn more, please go to WakingUp.com.  \n\nSam Harris received a degree in philosophy from Stanford University and a Ph.D. in neuroscience from UCLA.
                    </Blurb>
                </Details>
                <Image src="https://ssl-static.libsyn.com/p/assets/0/9/7/e/097e1e1107a7009a/MAKING_SENSE_MASTER.png"/>
            </Top>
            <Bottom>
                5 days ago
                Podcast title 

                <PlayButton duration={23} itunesId={9382}/>

            </Bottom>
        </Container>
    )

}


const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Blurb = styled.div`
    letter-spacing: .01428571em;
    font-family: Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    max-height: 80px;
    color: #3c4043;
    padding-top: 12px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #dadce0;
    border-radius: 8px;
    flex-direction: column;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 16px;
    margin-left: 40px;
    padding: 24px;
    position: relative;
    width: 616px;
`

const Bottom = styled.div`
    margin-top: 10px;
    border-top: 1px solid #dadce0;
`

const Top = styled.div`
    display: flex;
`



const Author = styled.div`
    letter-spacing: .01428571em;
    font-family: Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #5f6368;
    margin-top: 4px;
`

const Title = styled.div`
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 2rem;
    color: #202124;
    max-width: 370px;
`

const Image = styled.img`
    border-radius: 8px;
    display: block;
    height: 150px;
    width: 150px;
`

