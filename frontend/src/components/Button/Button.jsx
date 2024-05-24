import { Icon } from '@mui/material'
import styled from 'styled-components'

const Btn = ({ name, icon, onClick, bg, bPad, color, bRed }) => {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRed,
            color: color
        }} onClick={onClick}
        >
          {icon && <icons />}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;

`
export default Btn
