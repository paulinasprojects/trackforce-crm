import Footer from "../components/common/footer"
import Header from "../components/common/header"


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout