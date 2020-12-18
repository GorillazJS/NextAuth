import * as S from './styles'
import Header from '@Components/Header'

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container">{children}</main>
  </>
)

export default Layout
