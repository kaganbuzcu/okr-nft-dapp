import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 to-white">
      <Header />
      <Main />
      <About />
      <Gallery />
      <FAQ />
    </div>
  );
}
