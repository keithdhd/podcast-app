import styled from 'styled-components'
import '../../public/placeholder.jpeg'
import { Podcast } from '../interfaces'
import { Link } from 'react-router-dom'

interface PodcastSmallProps {
    podcast: Podcast
}

export default function PodcastSmall({podcast}: PodcastSmallProps){

    return (
        <Link to={`feed/` + podcast.data.getPodcastSeries.uuid}>
            <SmallContainer>
                <Image src={podcast.data.getPodcastSeries.imageUrl}/>
                <PodcastTitle>{podcast.data.getPodcastSeries.name}</PodcastTitle>
                <Publisher>{podcast.data.getPodcastSeries.authorName}</Publisher>
            </SmallContainer>
        </Link>
    )

}

const PodcastTitle = styled.h6`
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    max-height: 40px;
    color: #202124;
    display: -webkit-box;
    font-family: Roboto,Arial,sans-serif;
    font-size: 13px;
    line-height: 20px;
    overflow: hidden;
    white-space: normal;
    text-align: left;
    margin: 0;
`

const Publisher = styled.p`
    letter-spacing: .025em;
    font-family: Roboto,Arial,sans-serif;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1rem;
    color: #70757a;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
`

const SmallContainer = styled.div`
    width: 100px;
    margin-right: 20px;
    margin-top: 10px;
`

const Image = styled.img`
    background-color: rgb(218,220,224);
    border-radius: 8px;
    height: inherit;
    width: inherit;
`
