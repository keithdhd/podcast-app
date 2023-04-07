import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

interface PlayButtonProps{
    itunesId: number | undefined
    duration: number | undefined
}

export function PlayButton({ itunesId, duration } : PlayButtonProps){

    return (
        <Container>
            <a href={"https://podcasts.apple.com/us/podcast/" + itunesId} target="_blank">
                <PlayButtonContainer>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </PlayButtonContainer>
            </a>
            <Duration>{duration} min</Duration>
        </Container>
    )


}

const Container = styled.div`
    display: flex;
    border: 1px solid #dadce0;
    border-radius: 100px;
    height: 32px;
    width: 95px;
    margin: 20px;
    &:hover {
        background-color: #dadce0;
    }
`

const Duration = styled.div`
    letter-spacing: .01785714em;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: #3c4043;
    margin-top: 6px;
    margin-left: 10px;
`

const PlayButtonContainer = styled.div`
    padding-left: 6px;
    font-size: 1.3rem;
    color: #3E95C0;
`





