"use strict";

const menu = document.querySelector("#navigation-dialog");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");

if (menu && menuToggle && menuClose && typeof menu.showModal === "function") {
  menuToggle.hidden = false;
  menuToggle.addEventListener("click", () => {
    menu.showModal();
    document.body.classList.add("menu-open");
    menuClose.focus();
  });
  menuClose.addEventListener("click", () => menu.close());
  menu.addEventListener("close", () => {
    document.body.classList.remove("menu-open");
    menuToggle.focus();
  });
  // Un clic en dehors du rectangle du dialogue ferme aussi le menu.
  menu.addEventListener("click", (event) => {
    const bounds = menu.getBoundingClientRect();
    if (
      event.target === menu &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    )
      menu.close();
  });
}
const filterGroup = document.querySelector(".filters");
if (filterGroup) {
  const buttons = [...filterGroup.querySelectorAll("[data-filter]")];
  const projects = [
    ...document.querySelectorAll(".project-card[data-category]"),
  ];
  const status = document.querySelector(".filter-status");
  filterGroup.hidden = false;
  function filterProjects(category) {
    let count = 0;
    projects.forEach((project) => {
      const visible =
        category === "all" || project.dataset.category === category;
      project.hidden = !visible;
      if (visible) count += 1;
    });
    buttons.forEach((button) => {
      const active = button.dataset.filter === category;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    status.textContent = `${count} projet${count > 1 ? "s" : ""} affiché${count > 1 ? "s" : ""}`;
  }
  buttons.forEach((button) =>
    button.addEventListener("click", () =>
      filterProjects(button.dataset.filter),
    ),
  );
  filterProjects("all");
}

// 3. Contact : validation native, préparation d’un e-mail et copie de secours.
// Aucun serveur n’est appelé et aucun message n’est envoyé par le site.
const form = document.querySelector("#contact-form");
if (form) {
  document.querySelector("#contact-fields").disabled = false;
  const status = document.querySelector("#form-status");
  const fallback = document.querySelector("#copy-fallback");
  const preparedMessage = document.querySelector("#prepared-message");
  const fields = ["name", "email", "company", "subject", "message"];

  function prepareMessage() {
    fields.forEach((name) => {
      form.elements.namedItem(name).value = form.elements
        .namedItem(name)
        .value.trim();
    });
    if (!form.reportValidity()) return null;
    const values = new FormData(form);
    const body = [
      `Nom : ${values.get("name")}`,
      `E-mail : ${values.get("email")}`,
      `Entreprise : ${values.get("company") || "Non précisée"}`,
      "",
      values.get("message"),
    ].join("\n");
    return {
      subject: `${values.get("subject")} — Portfolio Matteo Bleu-Vialon`,
      body,
    };
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Le formulaire reste sur la page, sans rechargement.
    const message = prepareMessage();
    if (!message) return;
    const url = `mailto:matteobleuvialon@gmail.com?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;
    status.textContent =
      "Votre messagerie va être sollicitée. Aucun e-mail n’a encore été envoyé. Si elle ne s’ouvre pas, utilisez « Copier le message » puis écrivez à matteobleuvialon@gmail.com.";
    window.location.href = url;
  });

  document
    .querySelector("#copy-message")
    .addEventListener("click", async () => {
      const message = prepareMessage();
      if (!message) return;
      const text = `À : matteobleuvialon@gmail.com\nObjet : ${message.subject}\n\n${message.body}`;
      try {
        if (!navigator.clipboard || !window.isSecureContext)
          throw new Error("Clipboard unavailable");
        await navigator.clipboard.writeText(text);
        fallback.hidden = true;
        status.textContent =
          "Message copié. Collez-le dans votre messagerie, relisez-le, puis envoyez-le.";
      } catch {
        // Alternative utilisable même si le navigateur refuse le presse-papiers.
        fallback.hidden = false;
        preparedMessage.value = text;
        preparedMessage.focus();
        preparedMessage.select();
        status.textContent =
          "La copie automatique est indisponible. Sélectionnez et copiez le texte ci-dessous.";
      }
    });
}
