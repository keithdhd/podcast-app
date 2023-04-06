import styled from 'styled-components'
import PodcastSmall from './PodcastSmall'
import { Podcast } from '../interfaces'

interface CategoryBoxProps {
    podcasts: Array<Podcast>
    category: string
}

export default function CategoryBox({podcasts, category} : CategoryBoxProps){

    const podcastElements = podcasts.map( (p: Podcast) => {
        return <PodcastSmall podcast={p} key={p.data.getPodcastSeries.uuid}/>
    } )

    return (
        <>
            <Header>{category}</Header>
            <CategoryContainer>
                {podcastElements}
            </CategoryContainer>
        </>
    )

}

const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Header = styled.h5`
    align-self: flex-start;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    max-height: 48px;
    color: #202124;
    margin-top: 40px;
    margin-bottom: 12px;
`