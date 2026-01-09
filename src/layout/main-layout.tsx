import Footer from "../components/common/footer"
import Header from "../components/common/header"


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="children-container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout