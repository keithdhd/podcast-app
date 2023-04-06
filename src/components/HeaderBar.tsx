import styled from 'styled-components'
import SearchBox from './SearchBox';
import UserBox from './UserBox';


export default function HeaderBox() {


    return (
        <Header>
            <SearchBox />
            <UserBox />
        </Header>
    )

}


const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding-top: 18px;
`