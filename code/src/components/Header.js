import React from 'react' 
import styled from 'styled-components/macro'

const Header = () => {
  
  const onRestartButton = () => {
      window.location.reload()
  }

  return (
    <HeaderContainer>
        <i className="nes-icon is-medium star"></i>
        <button className="nes-btn is-warning" onClick={onRestartButton}>
            Restart
        </button>
        <i className="nes-icon is-medium star"></i>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 10px;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-style: inset;
    @media (min-width: 768px){
      justify-content:space-evenly;
    }
`;

export default Header