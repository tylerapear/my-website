import { XeldaGame } from '../components/XeldaGame';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import './HomePage.css'

export function HomePage() {
  return (
    <>
      <Header />
      <div class="home-page-wrapper">
        <div class="home-page-container">
          <div className="intro-container">
            <h4>My name is</h4>
            <h1>Tyler Pearson</h1>
            <h4>And I'm an aspiring Software Engineer</h4>
          </div>
          <XeldaGame />
        </div>
      </div>
      <Footer />
    </>
  );
}