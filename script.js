
/* =========================================
   NOSSO UNIVERSO
   JavaScript principal
========================================= */


/* =========================================
   1. CONTADOR DO RELACIONAMENTO
========================================= */

// Data local de início do relacionamento
const dataInicio = new Date(2026, 8, 1, 23, 40, 0);

function atualizarContador() {

    const agora = new Date();

    let diferenca = Math.max(
        0,
        agora.getTime() - dataInicio.getTime()
    );

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundosTotais / 86400);

    const horas = Math.floor(
        (segundosTotais % 86400) / 3600
    );

    const minutos = Math.floor(
        (segundosTotais % 3600) / 60
    );

    const segundos = segundosTotais % 60;

    document.getElementById("days").textContent =
        String(dias).padStart(3, "0");

    document.getElementById("hours").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(segundos).padStart(2, "0");
}

atualizarContador();

setInterval(atualizarContador, 1000);


/* =========================================
   2. MENU MOBILE
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {

    const aberto = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", aberto);

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

});


// Fechar menu após clicar em um link

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =========================================
   3. HEADER AO ROLAR A PÁGINA
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}, { passive: true });


/* =========================================
   4. PÉTALAS FLUTUANTES
========================================= */

const petalsContainer = document.getElementById("backgroundPetals");

const totalPetalas = 16;

for (let i = 0; i < totalPetalas; i++) {

    const petala = document.createElement("span");

    petala.classList.add("petal");

    petala.textContent = ["✿", "❀", "♡", "✧"][
        Math.floor(Math.random() * 4)
    ];

    const tamanho = 12 + Math.random() * 14;

    const posicao = Math.random() * 100;

    const duracao = 12 + Math.random() * 15;

    const atraso = Math.random() * 15;

    petala.style.left = `${posicao}%`;

    petala.style.fontSize = `${tamanho}px`;

    petala.style.animationDuration = `${duracao}s`;

    petala.style.animationDelay = `${atraso}s`;

    petalsContainer.appendChild(petala);

}


/* =========================================
   5. ANIMAÇÃO DE ENTRADA DAS SEÇÕES
========================================= */

const elementosReveal = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    elementosReveal.forEach(elemento => {
        observer.observe(elemento);
    });

} else {

    elementosReveal.forEach(elemento => {
        elemento.classList.add("visible");
    });

}


/* =========================================
   6. PLAYER MUSICAL
========================================= */

const ourMusic = document.getElementById("ourMusic");

const musicButton = document.getElementById("musicButton");

const musicStatus = document.getElementById("musicStatus");


musicButton.addEventListener("click", async () => {

    if (ourMusic.paused) {

        try {

            await ourMusic.play();

            musicButton.textContent = "Ⅱ";

            musicButton.setAttribute(
                "aria-label",
                "Pausar música"
            );

            musicStatus.textContent = "Reproduzindo nossa música...";

        } catch (erro) {

            musicStatus.textContent =
                "Adicione o arquivo da música ao projeto.";

            console.error("Não foi possível reproduzir:", erro);

        }

    } else {

        ourMusic.pause();

    }

});


// Atualizar quando a música for pausada

ourMusic.addEventListener("pause", () => {

    musicButton.textContent = "▶";

    musicButton.setAttribute(
        "aria-label",
        "Reproduzir música"
    );

    if (ourMusic.currentTime > 0) {
        musicStatus.textContent = "Pausada";
    }

});


// Atualizar quando a música terminar

ourMusic.addEventListener("ended", () => {

    musicStatus.textContent = "Uma melodia para nós.";

});

ourMusic.addEventListener("error", () => {

    musicStatus.textContent = "Música ainda não adicionada.";

});


/* =========================================
   7. GALERIA DE FOTOGRAFIAS
========================================= */

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxClose = document.getElementById("lightboxClose");

const memoryImages = document.querySelectorAll(".memory-image img");


memoryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightboxImage.src = img.src;

        lightboxImage.alt = img.alt;

        lightbox.showModal();

    });

});


lightboxClose.addEventListener("click", () => {

    lightbox.close();

});


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.close();
    }

});


lightbox.addEventListener("close", () => {

    lightboxImage.src = "";

});


/* =========================================
   8. ANO AUTOMÁTICO NO RODAPÉ
========================================= */

const footerText = document.querySelector(".footer p");

footerText.innerHTML =
    `Nosso Universo <span>♥</span> ${new Date().getFullYear()}`;


/* =========================================
   9. REGISTRO DE INICIALIZAÇÃO
========================================= */

console.log(
    "%cNosso Universo ♥",
    "color: #b83250; font-size: 20px; font-family: Georgia;"
);

console.log(
    "Uma história que continua sendo escrita..."
);

