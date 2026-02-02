import CtaSection from "../components/home-page/cta-section"
import IntegrationSection from "../components/home-page/integration-section"
import SocialProof from "../components/home-page/social-proof"
import FeaturedCollaborationTools from "../components/product/featured-collaboration-tools"
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
      <FeaturedCollaborationTools />
      <IntegrationSection />
      <CtaSection />
    </>
  )
}

export default ProductPage