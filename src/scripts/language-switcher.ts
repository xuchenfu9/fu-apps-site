function closeMenu(container: HTMLElement): void {
  const button = container.querySelector<HTMLButtonElement>("[data-language-trigger]");
  const menu = container.querySelector<HTMLElement>("[data-language-menu]");
  if (!button || !menu) return;
  menu.hidden = true;
  button.setAttribute("aria-expanded", "false");
}

function initializeLanguageSwitchers(): void {
  const switchers = [...document.querySelectorAll<HTMLElement>("[data-language-switcher]")];

  for (const switcher of switchers) {
    const button = switcher.querySelector<HTMLButtonElement>("[data-language-trigger]");
    const menu = switcher.querySelector<HTMLElement>("[data-language-menu]");
    if (!button || !menu) continue;

    button.addEventListener("click", () => {
      const willOpen = menu.hidden;
      switchers.forEach((candidate) => closeMenu(candidate));
      menu.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof Node && !switchers.some((switcher) => switcher.contains(target))) {
      switchers.forEach((switcher) => closeMenu(switcher));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") switchers.forEach((switcher) => closeMenu(switcher));
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeLanguageSwitchers, { once: true });
} else {
  initializeLanguageSwitchers();
}
