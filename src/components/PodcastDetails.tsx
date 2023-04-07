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

    const GET_PODCAST = fetchPodcast(uuid)
    const { loading, error, data } = useQuery(GET_PODCAST);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message} </p>;
    
    console.log(data)

    return (
        <Container>
            <Top>
                <Details>
                    <Title>{data.getPodcastSeries.name}</Title>
                    <Author>{data.getPodcastSeries.authorName}</Author>
                    <SubscribeButton />
                    <Blurb>
                        {data.getPodcastSeries.description}
                    </Blurb>
                </Details>
                <Image src={data.getPodcastSeries.imageUrl}/>
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
    text-align: left;
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

