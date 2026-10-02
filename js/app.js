/* ════════════════════════════════════════════════════════════
   APPLICATION — assemble la page
   ════════════════════════════════════════════════════════════ */

function App() {
  return [
    Header(),
    Hero(),
    h("main", { class: "wrap" },
      h("section", { id: "parcours" },
        h("h2", {}, "Formation"),
        FORMATIONS.map(Entry),
        h("h2", { style: "margin-top:28px" }, "Certifications & formations complémentaires"),
        CERTIFICATIONS.map(Entry)
      ),
      h("section", { id: "experience" }, h("h2", {}, "Expérience"), EXPERIENCES.map(Entry)),
      h("section", { id: "projets" }, h("h2", {}, "Projets"), PROJETS.map(Projet)),
      h("section", { id: "competences" }, h("h2", {}, "Compétences techniques"), Competences()),
      h("section", { id: "galerie" }, h("h2", {}, "Galerie"), Galerie())
    ),
    Footer(),
  ];
}

document.getElementById("root").append(...App().flat());
