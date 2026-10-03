/* ════════════════════════════════════════════════════════════
   COMPOSANTS — fonctions qui construisent les morceaux de la page
   ════════════════════════════════════════════════════════════ */

// Petit utilitaire : h("div", {class:"card"}, enfant1, enfant2...)
function h(tag, props, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (k === "class") el.className = v;
    else if (k === "style") el.style.cssText = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2).toLowerCase(), v);
    else el.setAttribute(k, v);
  }
  children.flat().forEach((c) => { if (c != null && c !== false) el.append(c); });
  return el;
}

/* ---------- Images (sans filigrane) ---------- */
function ProtImg({ src, legende }, onOpen, bare = false) {
  const img = h("img", { src, alt: legende || "", draggable: "false", loading: "lazy" });
  const fig = h("figure", {
    class: "prot",
    oncontextmenu: (e) => e.preventDefault(),
    onclick: () => onOpen && onOpen({ src, legende }),
  }, img, legende && !bare ? h("figcaption", { class: "cap" }, legende) : null);

  // Image introuvable : cadre pointillé ou rien
  img.addEventListener("error", () => {
    if (AFFICHER_PLACEHOLDERS) fig.replaceWith(h("div", { class: "ph" }, "Image à ajouter", h("small", {}, src)));
    else fig.remove();
  });
  return fig;
}

/* ---------- Visionneuse plein écran ---------- */
const Lightbox = {
  el: null,
  open(image) {
    this.close();
    this.el = h("div", { class: "lightbox", onclick: () => this.close(), oncontextmenu: (e) => e.preventDefault() },
      h("span", { class: "x" }, "×"),
      ProtImg(image, null, true),
      h("div", { class: "note" }, image.legende + " — cliquez pour fermer.")
    );
    document.body.append(this.el);
  },
  close() { if (this.el) { this.el.remove(); this.el = null; } },
};
document.addEventListener("keydown", (e) => e.key === "Escape" && Lightbox.close());


/* ---------- Drapeau du Burkina Faso (SVG, aucune image à ajouter) ---------- */
function DrapeauBF() {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 300 200");
  svg.setAttribute("class", "flag");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Drapeau du Burkina Faso");
  svg.innerHTML =
    '<rect width="300" height="100" fill="#EF2B2D"/>' +
    '<rect y="100" width="300" height="100" fill="#009E49"/>' +
    '<polygon fill="#FCD116" points="150,60 158.98,87.64 188.04,87.64 164.53,104.72 173.51,132.36 150,115.28 126.49,132.36 135.47,104.72 111.96,87.64 141.02,87.64"/>';
  return svg;
}

/* ---------- Blocs de contenu ---------- */
function Header() {
  const liens = [["profil","Profil"],["parcours","Parcours"],["experience","Expérience"],["projets","Projets"],["competences","Compétences"],["galerie","Galerie"],["contact","Contact"]];
  return h("header", { class: "nav" },
    h("div", { class: "wrap" },
      h("strong", {}, PROFIL.nom),
      h("nav", {}, liens.map(([id, nom]) => h("a", { href: "#" + id }, nom)))
    )
  );
}

function Hero() {
  const initiales = PROFIL.nom.split(" ").map((m) => m[0]).join("").slice(0, 2);
  const photo = h("img", { class: "avatar", src: PROFIL.photo, alt: PROFIL.nom });
  photo.addEventListener("error", () => photo.replaceWith(h("div", { class: "avatar" }, initiales)));

  return h("div", { class: "hero", id: "profil" },
    h("div", { class: "wrap" },
      photo,
      h("div", {},
        h("h1", {}, PROFIL.nom),
        h("div", { class: "role" }, PROFIL.titre),
        h("p", {}, PROFIL.accroche),
        h("p", {}, h("em", {}, PROFIL.motivation)),
        h("a", { class: "btn primary", href: PROFIL.cv, download: "" }, "Télécharger mon CV"),
        h("a", { class: "btn ghost", href: "#contact" }, "Me contacter"),
        h("a", { class: "btn ghost", href: CONTACT.github, target: "_blank", rel: "noopener noreferrer" }, "GitHub")
      )
    ),
    h("div", { class: "wrap hero-devise" },
      DrapeauBF(),
      h("span", { class: "pays" }, "Burkina Faso"),
      h("span", { class: "devise" }, "« " + (PROFIL.devise || "La Patrie ou la Mort, nous vaincrons") + " »")
    )
  );
}

function Entry(e) {
  return h("div", { class: "card" },
    h("div", { class: "row" },
      e.periode ? h("div", { class: "period" }, e.periode) : null,
      h("div", { class: "grow" },
        h("h3", {}, e.titre, e.note ? h("span", { class: "badge" }, e.note) : null),
        h("div", { class: "meta" }, e.lieu),
        h("p", {}, e.desc),
        e.images && e.images.length
          ? h("div", { class: "thumbs" }, e.images.map((im) => ProtImg(im, (i) => Lightbox.open(i))))
          : null
      )
    )
  );
}

function Projet(p) {
  return h("div", { class: "card" },
    h("h3", {}, p.titre, h("span", { class: "badge" }, p.note)),
    h("div", { class: "meta" }, p.tech),
    h("p", {}, p.desc),
    h("ul", {}, p.points.map((x) => h("li", {}, x))),
    h("div", { class: "thumbs" }, p.images.map((im) => ProtImg(im, (i) => Lightbox.open(i))))
  );
}

function Competences() {
  return COMPETENCES.map(([cat, items]) =>
    h("div", { class: "skillrow" },
      h("b", {}, cat),
      h("div", { class: "chips" }, items.map(([nom, couleur]) =>
        h("span", { class: "chip" }, h("span", { class: "dot", style: "background:" + couleur }), nom)
      ))
    )
  );
}

function Galerie() {
  return h("div", { class: "gallery" }, GALERIE.map((im) => ProtImg(im, (i) => Lightbox.open(i))));
}

function Footer() {
  return h("footer", { id: "contact" },
    h("div", { class: "wrap" },
      h("h2", {}, "Contact"),
      h("ul", { class: "contact-list" },
        h("li", {}, "✉ ", h("a", { href: "mailto:" + CONTACT.email }, CONTACT.email)),
        h("li", {}, "⌥ ", h("a", { href: CONTACT.github, target: "_blank", rel: "noopener noreferrer" }, CONTACT.github.replace("https://", ""))),
        CONTACT.tel.map((t) => h("li", {}, "☎ ", h("a", { href: "tel:" + t.replace(/\s/g, "") }, t))),
        h("li", {}, "⌖ " + CONTACT.lieu)
      ),
      h("p", { style: "margin-top:16px" }, "© 2026 " + PROFIL.nom + ".")
    )
  );
}