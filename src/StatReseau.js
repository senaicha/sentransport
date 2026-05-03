function StatReseau({ lignes }) {

  const totalLignes = lignes.length;

  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);

  const ligneMax = lignes.reduce((max, l) =>
    l.arrets > max.arrets ? l : max
  , lignes[0]);

  return (
    <div className="stats">

      <h2>Statistiques du réseau</h2>

      <p>🚌 Total lignes : {totalLignes}</p>

      <p>📍 Total arrêts : {totalArrets}</p>

      <p>
        ⭐ Ligne avec plus d'arrêts :
        {" "} {ligneMax.numero} ({ligneMax.arrets} arrêts)
      </p>

    </div>
  );
}

export default StatReseau;