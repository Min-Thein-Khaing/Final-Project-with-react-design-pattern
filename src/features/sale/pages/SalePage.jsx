
import BreadCrumb from '../../../components/BreadCrumb'
import Container from '../../../components/Container'
import SaleCard from '../components/SaleCard'




const SalePage = () => {
  return (
    <section >
      <Container>
      <BreadCrumb currentPageName="Sale Module" />
      <SaleCard />
      </Container>
      
    </section>
  )
}

export default SalePage