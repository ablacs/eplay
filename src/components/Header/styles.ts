import styled from 'styled-components'
import { cores } from '../../styles'
export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinkItem = styled.li`
  margin-right: 16px;
`
export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  margin-left: auto;
  img {
    margin-left: 16px;
  }
`
