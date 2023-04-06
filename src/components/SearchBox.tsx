import styled from 'styled-components'

export default function SearchBox() {

    return (
        <SearchInput placeholder='Search for podcasts'/>
    )

}

const SearchInput = styled.input`
    width: 80%;
    padding-left: 10px;
    padding-right: 10px;
    height:40px;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;


    background: #f1f3f4;
    border: 1px solid transparent;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    max-width: 700px;
`