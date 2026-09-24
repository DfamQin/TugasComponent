import pfpceunah from './assets/ppakjgo.jpg';

function Header() {
  return (
    <header className="header-container">
      <h1>About Me!!!</h1>
      <div className="imgcontainer">
        <img src={pfpceunah} alt="Foto Profil" className="profile-img" />
      </div>
    </header>
  );
}

export default Header;