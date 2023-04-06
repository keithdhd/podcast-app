import styled from 'styled-components'

export default function Logo(){

    return (
        <Header>
            <span>CodeClan</span> Podcasts
        </Header>
    )

}

const Header = styled.h1`
    font-family: "Open Sans", sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #3c4043;
    border-bottom: 1px solid #dadce0;
    padding-bottom: 20px;
    text-align: left;
    > span {
        color: #3E95C0;
    }
`
