import { useState } from "react";
import logo from "../img/yotube.png";
import user from "../img/usuario1.jpg";
import { getBusquedad } from "../helpers";

function Header() {
  const [busqueda, setBusqueda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (busqueda.trim() == "") {
      e.target.classList.add("error");
      setTimeout(() => {
        if (e.target.classList.contains("error")) {
          e.target.classList.remove("error");
        }
      }, 1200);
    } else {
      getBusquedad(busqueda);
    }
  };

  const getlink = (e) => {
    getBusquedad(e.target.textContent);
  };

  const toogleMenu = (e) => {
    e.preventDefault()
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "active"
    );
  };

  return (
    <>
      <header className="header">
        <section className="header__top">
          <a href="index.html">
            <img src={logo} alt="yotube" />
          </a>
          <div className="formulario">
            <form onSubmit={handleSubmit}>
              <input
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                type="search"
                placeholder="Buscar"
              />
              <button type="submit" title="Buscar">
                <i className="bx bx-search" />
              </button>
            </form>
            <div>
              <i className="bx bxs-microphone" />
            </div>
          </div>
          <div className="iconos">
            <i className="bx bx-camera-movie" />
            <i className="bx bx-border-none" />
            <i className="bx bx-bell" />
            <img src={user} alt="usuario" />
          </div>
        </section>
        <section className="header__bottom">
          <div className="icono-left">
            <i className="bx bx-chevron-left" />
          </div>
          <section className="enlaces">
            <a href="#" onClick={getlink} className="blanco">
              Todo
            </a>
            <a href="#" onClick={getlink}>
              Musica
            </a>
            <a href="#" onClick={getlink}>
              Programacion
            </a>
            <a href="#" onClick={getlink}>
              Videojuegos
            </a>
            <a href="#" onClick={getlink}>
              Libre
            </a>
            <a href="#" onClick={getlink}>
              Javacript
            </a>
            <a href="#" onClick={getlink}>
              React
            </a>
            <a href="#" onClick={getlink}>
              Comicos
            </a>
            <a href="#" onClick={getlink}>
              Computadoras
            </a>
            <a href="#" onClick={getlink}>
              Letras
            </a>
            <a href="#" onClick={getlink}>
              PopLatino
            </a>
            <a href="#" onClick={getlink}>
              Peliculas
            </a>
            <a href="#" onClick={getlink}>
              Vistos
            </a>
            <a href="#" onClick={getlink}>
              Novedades
            </a>
            <a href="#" onClick={getlink}>
              Rock
            </a>
            <a href="#" onClick={getlink}>
              Reproduciones
            </a>
          </section>
          <div className="icono-right">
            <i className="bx bx-chevron-right" />
          </div>
        </section>
      </header>

      <aside className="aside">
        <a href="#" id="menu" onClick={(e) => toogleMenu(e)}>
          <i className="bx bx-menu" /> <span>Menu</span>
        </a>
        <a href="#">
          <i className="bx bx-compass" /> <span>Explorar</span>
        </a>
        <a href="#">
          <i className="bx bx-slideshow" /> <span>Videos</span>
        </a>
        <a href="#">
          <i className="bx bx-bell-plus" /> <span>Suscripciones</span>
        </a>
        <a href="#">
          <i className="bx bx-duplicate" /> <span>Multimedia</span>
        </a>
        <a href="#">
          <i className="bx bxs-playlist" /> <span>PlayLists</span>
        </a>
        <a href="#">
          <i className="bx bx-line-chart" /> <span>Escala</span>
        </a>
        <a href="#">
          <i className="bx bx-cog" /> <span>Configuraciones</span>
        </a>
      </aside>
    </>
  );
}

export default Header;
