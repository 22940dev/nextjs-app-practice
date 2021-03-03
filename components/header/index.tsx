import { container, title } from './styles'
import Logo from '../logo'

const Header = () => (
  <header css={container}>
    <Logo />
    <h1 css={title}>Devlog</h1>
  </header>
)

export default Header
