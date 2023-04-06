import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faUser} from '@fortawesome/free-solid-svg-icons'

export default function UserBox() {


    return (

        <User>
            <FontAwesomeIcon icon={faListUl} />
            <FontAwesomeIcon icon={faUser} />
        </User>
    )

}

const User = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50px;
    font-size: 1.2rem;
    align-items: center;
    margin-left: 20px;
`