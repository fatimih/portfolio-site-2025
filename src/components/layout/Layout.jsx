import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollSpy } from "../../hooks/useScrollSpy";


export default function Layout() {
  const scrollState = useScrollSpy(["home", "about", "work", "contact"]);
  void scrollState;


  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}