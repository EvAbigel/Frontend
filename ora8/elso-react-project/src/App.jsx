import "./App.css";
import Header from "./content/header";
import { MainContent } from "./content/main-content";
import Sidebar from "./content/sidebar";
import { Footer } from "./content/footer";

export default function App() {
  let kedvencSzinem = "piros";
  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />

      {/* <h2>Hahó!!!</h2>
      <h2>Számolni is lehet vele: {1 + 1}</h2>
      <h2>A kedvenc színem a {kedvencSzinem}</h2> */}
    </>
  );
}
