import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MenuItem } from '../interfaces'


interface MenuBoxProps {
    items: Array<MenuItem>
}

export default function MenuBox({ items } : MenuBoxProps){

    const menuItemElements = items.map( (item, index) => {
        return ( <Item key={index}>
                    {item.icon ? <FontAwesomeIcon icon={item.icon} /> : ""}
                        
                    <Description>
                        { item.description }
                    </Description>
                </Item>
        ) 
    })

    return (
       <MenuItems>
           {menuItemElements}
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