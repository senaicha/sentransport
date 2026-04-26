import './Header.css';

function Header() {
  const today = new Date().toLocaleDateString('fr-FR'); // date en français

  return (
    <header className="header">
      <h1 className="header-titre">SenTransport</h1>
      <p className="header-soustitre">Votre guide du transport en commun à Dakar</p>
      <p className="header-date">{today}</p> {/* Affiche la date */}
    </header>
  );
}

export default Header;