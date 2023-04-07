import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Podcast } from '../interfaces'
import { PlayButton } from './PlayButton'

interface PodcastLargeProps {
    podcast: Podcast
}

export default function PodcastLarge({podcast}: PodcastLargeProps){

    const duration = Math.floor(podcast.data.getPodcastSeries.episodes[0].duration / 60);

    return (
        <Link to={`feed/` + podcast.data.getPodcastSeries.uuid}>
            <Large>
                <Header>
                    <Image src={podcast.data.getPodcastSeries.imageUrl}/>
                    <Details>
                        <Title>{podcast.data.getPodcastSeries.name}</Title>
                        <Publisher>{podcast.data.getPodcastSeries.authorName}</Publisher>
                    </Details>
                </Header>
                <Description>
                    {podcast.data.getPodcastSeries.description}
                </Description>
                <Controls>
                    <PlayButton duration={duration} itunesId={podcast.data.getPodcastSeries.itunesId}/>
                    <AddToList>
                        <FontAwesomeIcon icon={faFileCirclePlus} />
                    </AddToList>
                </Controls> 
            </Large>
        </Link>
    )

}

const Controls = styled.div`
    display: flex;
`

const AddToList = styled.div`
    margin: 20px 0;
    margin: 20px 0px;
    font-size: 1.3rem;
    color: #3E95C0;
`


const Description = styled.p`
    letter-spacing: .01428571em;
    font-family: Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    max-height: 59px;
    color: #5f6368;
    height: 272px;
    max-width: 236px;
    white-space: pre-line;
    text-align: left;
    margin-left: 20px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;

`

const Title = styled.h5`
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    max-height: 24px;
    letter-spacing: .00625em;
    font-family: Roboto,Arial,sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: #3c4043;
    white-space: pre-line;
    margin: 0 0 0 20px;    
`

const Publisher = styled.h5`
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    max-height: 20px;
    letter-spacing: .01428571em;
    font-family: Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #5f6368;
    white-space: pre-line;
    margin: 0 0 0 20px; 
    text-align: left;
`

const Large = styled.div`
    border: 1px solid #dadce0;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    flex-wrap: wrap;
    margin-right: 20px;
    outline: none;
    width: 304px;
    margin-bottom: 10px;
`

const Header = styled.div`
    display: flex;
    margin: 17px 16px 16px 16px;
`

const Image = styled.img`
    background-color: rgb(218,220,224);
    border-radius: 4px;
    height: 45px;
    width: inherit;
`