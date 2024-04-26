import { TbTargetArrow } from 'react-icons/tb'
import logo from '../../assets/metodo4leis.png'
import { Container, Gears, Logo, Nav, NavItem } from './styles'
import { FaChartColumn, FaListCheck } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa'
import { LuGauge } from 'react-icons/lu'

export function Navigation() {
    return (
        <Container>
            <Logo src={logo} alt="método 4 leis" />
            <Nav>
                <NavItem to={'/dashboard'}>
                    <FaChartColumn />
                    Dashboard
                </NavItem>
                <NavItem to={'/metaFundamental'}>
                    <TbTargetArrow />
                    Meta Fundamental
                </NavItem>
                <NavItem to={'/comite'}>
                    <FaUsers />
                    Comitê
                </NavItem>
                <NavItem to={'/compromissos'}>
                    <FaListCheck />
                    Compromissos
                </NavItem>
                <NavItem to={'/desempenho'}>
                    <LuGauge />
                    Desempenho
                </NavItem>
                <NavItem to={'/cadastros'}>
                    <Gears />
                    Cadastros
                </NavItem>
            </Nav>
        </Container>
    )
}