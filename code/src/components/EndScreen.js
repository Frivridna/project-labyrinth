import React from 'react'
import styled from 'styled-components'
import { useSelector} from 'react-redux'
import "nes.css/css/nes.min.css"

const EndScreen = () => {
    const lastDescription = useSelector((store) => store.games.gameStatus)

    return (
        <EndContainer>
            <div class="nes-container is-rounded is-dark">
                <Header>{lastDescription.description}</Header>

                <CssCredit>CSS from <a href="https://nostalgic-css.github.io/NES.css/">Ness.css</a> 
                </CssCredit>
            </div>
        </EndContainer>
    )
}

const EndContainer = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: inset;
    margin: 0 auto;
`
const Header = styled.h1`
    font-size: 20px;
    letter-spacing: 1px;
`

const CssCredit = styled.p`
    margin-top: 50px;
`

export default EndScreen