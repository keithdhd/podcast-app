
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from 'styled-components'


export function SubscribeButton(){


    return (
        <Container>
                <ButtonContainer>
                    <FontAwesomeIcon icon={faPlus} />
                </ButtonContainer>
            <Label>Subscribe</Label>
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    border: 1px solid #dadce0;
    border-radius: 100px;
    height: 32px;
    width: 116px;
    margin-top: 20px;
    &:hover {
        background-color: #dadce0;
    }
`

const ButtonContainer = styled.div`
    padding-left: 6px;
    font-size: 1.3rem;
    color: #3E95C0;
`

const Label = styled.div`
    letter-spacing: .01785714em;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: #3c4043;
    margin-top: 6px;
    margin-left: 10px;
`