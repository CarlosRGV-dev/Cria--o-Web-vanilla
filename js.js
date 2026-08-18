/* =========================
   ESTRELAS
========================= */

const starsContainer =
  document.getElementById("stars");

for (let i = 0; i < 180; i++) {

  const star =
    document.createElement("span");

  star.classList.add("star");

  star.style.left =
    Math.random() * 100 + "%";

  star.style.top =
    Math.random() * 100 + "%";

  const size =
    Math.random() * 3;

  star.style.width =
    size + "px";

  star.style.height =
    size + "px";

  star.style.animationDelay =
    Math.random() * 3 + "s";

  starsContainer.appendChild(star);
}


/* =========================
   MENU MOBILE
========================= */

const menuBtn =
  document.getElementById("menuBtn");

const navLinks =
  document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});


document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

    });

  });


/* =========================
   CONTADORES
========================= */

const counters =
  document.querySelectorAll("[data-target]");


const animateCounter = counter => {

  const target =
    Number(counter.dataset.target);

  let current = 0;

  const increment =
    target / 60;


  const update = () => {

    current += increment;


    if (current < target) {

      counter.textContent =
        Math.floor(current);

      requestAnimationFrame(update);

    } else {

      counter.textContent =
        target;

    }

  };


  update();

};


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          animateCounter(entry.target);

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: .5
    }

  );


counters.forEach(counter => {

  observer.observe(counter);

});


/* =========================
   MODAL DOS PLANETAS
========================= */

const modal =
  document.getElementById("modal");

const modalTitle =
  document.getElementById("modalTitle");

const modalText =
  document.getElementById("modalText");

const modalClose =
  document.getElementById("modalClose");


const planetInfo = {

  "Mercúrio":
    "Mercúrio é o menor planeta do Sistema Solar. Por estar muito próximo do Sol, possui temperaturas extremamente altas durante o dia e muito baixas durante a noite.",

  "Vênus":
    "Vênus possui uma atmosfera extremamente densa e é o planeta mais quente do Sistema Solar. Sua superfície é dominada por atividade vulcânica e temperaturas extremamente elevadas.",

  "Terra":
    "A Terra é o único planeta conhecido onde existe vida. Possui água líquida em abundância, uma atmosfera rica em nitrogênio e oxigênio e um campo magnético que ajuda a protegê-la.",

  "Marte":
    "Marte é conhecido como o planeta vermelho devido à presença de óxidos de ferro em sua superfície. Cientistas estudam o planeta em busca de sinais de água e possíveis condições favoráveis à vida."

};


/* =========================
   ABRIR PLANETA
========================= */

document
  .querySelectorAll(".planet-card")
  .forEach(card => {

    card.addEventListener("click", () => {

      const planet =
        card.dataset.planet;

      modalTitle.textContent =
        planet;

      modalText.textContent =
        planetInfo[planet];

      modal.classList.add("active");

    });

  });


/* =========================
   FECHAR MODAL
========================= */

const closeModal = () => {

  modal.classList.remove("active");

};


modalClose.addEventListener(
  "click",
  closeModal
);


modal.addEventListener(
  "click",
  event => {

    if (event.target === modal) {

      closeModal();

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


/* =========================
   BOTÃO EXPLORAR
========================= */

const exploreBtn =
  document.getElementById("exploreBtn");


exploreBtn.addEventListener(
  "click",
  () => {

    exploreBtn.textContent =
      "🚀 Explorando...";


    setTimeout(() => {

      exploreBtn.textContent =
        "✨ Exploração iniciada!";

    }, 1200);


    setTimeout(() => {

      exploreBtn.textContent =
        "Iniciar exploração ✦";

    }, 3000);

  }
);
