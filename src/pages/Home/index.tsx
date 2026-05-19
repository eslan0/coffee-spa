import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Card } from "@/components/Card/Card";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="hero">
          <h2 className="hero__title">Seja bem-vindo</h2>
          <div className="hero__content">
            <Card />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
