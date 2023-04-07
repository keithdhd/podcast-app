import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Logo(){

    return (
        <Header>
            <FontAwesomeIcon icon={faBars} />
            <Link to="/">
                <span>CodeClan Podcasts</span> 
            </Link>
        </Header>
    )

}

const Header = styled.h1`
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #3c4043;
    border-bottom: 1px solid #dadce0;
    padding-bottom: 20px;
    text-align: left;
    span {
        color: #3E95C0;
        display: inline-block;
        margin-left: 10px;
    }
`
