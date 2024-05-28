import { FeaturedProducts, Hero} from '../components';
import Testimonial1 from '../components/Testimonial1';
import Footer from '../components/Footer';

// import { customFetch } from '../utils';
// const url = '/products?featured=true';

// const featuredProductsQuery = {
//   queryKey: ['featuredProducts'],
//   queryFn: () => customFetch(url),
// };

// export const loader = (queryClient) => async () => {
//   const response = await queryClient.ensureQueryData(featuredProductsQuery);

//   const products = response.data.data;
//   return { products };
// };

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Testimonial1/>
      <Footer />
    </>
  );
};
export default Landing;
