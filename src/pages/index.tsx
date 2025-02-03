import Footer from "@/components/footer";
import Layout from "@/components/layout";
import NavBar from "@/components/navbar";
import Sobre from "@/components/sobre";

export default function Home() {
  return (
    <Layout title="Boilerplate - Front" description="Boilerplate Next.js + ApolloClient (GraphQL)">
      <NavBar />
      <Sobre />
      <Footer />
    </Layout>
  );
}
