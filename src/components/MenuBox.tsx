import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faList, faFileCirclePlus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function MenuBox(){

    return (
       <MenuItems>
            <Item>
                <FontAwesomeIcon icon={faHouse} />    
                <Description>
                    Explore Shows
                </Description>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faList} />    
                <Description>
                    Subscriptions
                </Description>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faFileCirclePlus} />    
                <Description>
                    Queue
                </Description>
            </Item>
            <Item>
                <FontAwesomeIcon icon={faPlus} />    
                <Description>
                    Add to RSS feed
                </Description>
            </Item>
       </MenuItems>
    )

}

const MenuItems = styled.ul`
    border-bottom: 1px solid rgb(218, 220, 224);
    margin-bottom: 30px;
    padding-bottom: 20px;
    padding-left: 0;
`

const Item = styled.li`
    display: flex;
    list-style: none;
    margin-bottom: 20px;
    color: rgb(60,64,67);
`

const Description = styled.p`
    margin: 0 15px;
    font-family: Roboto,Arial,sans-serif;
    font-size: .875rem;
    letter-spacing: .0178571429em;
    font-weight: 500;
`