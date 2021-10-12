import Link from "next/link"

const Home = () => {
  return (
    <>
      <section>
        <h3>Détails sur le cours</h3>
        <ul>
          <li>
            Alexandre Turpin (chargé de cours) -{" "}
            <a href="mailto:alex.turpin@gmail.com">alex.turpin@gmail.com</a>
          </li>
          <li>
            <a href="/files/582-125-HU_PC.pdf">Plan de cours</a>
          </li>
          <li>
            <a href="/files/horaire.pdf">Horaire</a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Liens utiles</h3>
        <ul>
          <li>
            <a href="https://developer.mozilla.org/en-US/">MDN</a>
            <ul>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
                  Référence des éléments HTML
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.w3schools.com/">W3Schools</a>
          </li>
          <li>
            <a href="https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3">
              Cours HTML et CSS OpenClassrooms
            </a>
          </li>
          <li>
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li>
            <a href="https://loremipsum.io/">
              Générateur de <em>Lorem Ipsum</em> (faux texte)
            </a>
          </li>
          <li>
            <a href="https://validator.w3.org/#validate_by_input">Validateur HTML du W3C</a>
          </li>
          <li>
            <a href="https://www.w3.org/wiki/CSS/Properties/color/keywords">Noms de couleurs CSS</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool">
              Outil afin de sélectionner une couleur spécifique
            </a>
          </li>
          <li>
            <a href="http://www.csszengarden.com/">Exemples de variations de CSS</a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Notes de cours</h3>
        <ul>
          <li>
            <Link href="visual-studio">
              <a>Trucs et astuces Visual Studio Code</a>
            </Link>
          </li>
          <li>
            <Link href="/cours/01-intro-html">
              <a>Semaine 1 - Introduction au web et au HTML</a>
            </Link>
          </li>
          <li>
            <Link href="/cours/02-listes-tableaux">
              <a>Semaine 2 - Listes et tableaux</a>
            </Link>
          </li>
          <li>
            <Link href="/cours/03-liens-semantique">
              <a>Semaine 3 - Liens et navigation et éléments sémantiques</a>
            </Link>
          </li>
          <li>
            <Link href="/cours/04-multimedia">
              <a>Semaine 4 - Éléments multimédia (images, vidéo et audio)</a>
            </Link>
          </li>
          <li>
            <Link href="/cours/06-intro-css">
              <a>Semaine 6 - Introduction au CSS</a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Home
