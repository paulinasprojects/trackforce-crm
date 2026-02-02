import SocialProof from "../components/home-page/social-proof"
import FeaturedProductSection from "../components/product/featured-product-section"
import ProductHeading from "../components/product/product-heading"
import ProductImage from "../components/product/product-image"

const ProductPage = () => {
  return (
    <>
      <ProductHeading />
      <ProductImage />
      <SocialProof />
      <FeaturedProductSection />
    </>
  )
}

export default ProductPage