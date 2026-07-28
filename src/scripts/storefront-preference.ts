import { resolveRequestedStorefront } from "../lib/storefront";
import { storefronts, type Locale, type Storefront } from "../lib/types";

const storageKey = "fu-apps-storefront";

function isStorefront(value: string | null): value is Storefront {
  return value !== null && storefronts.includes(value as Storefront);
}

function readStoredStorefront(): Storefront | undefined {
  try {
    const stored = window.localStorage.getItem(storageKey);
    return isStorefront(stored) ? stored : undefined;
  } catch {
    return undefined;
  }
}

function storeStorefront(storefront: Storefront): void {
  try {
    window.localStorage.setItem(storageKey, storefront);
  } catch {
    // The selected region still applies for this page when storage is unavailable.
  }
}

function applyStorefront(storefront: Storefront): void {
  const key = storefront.toLowerCase();
  const lookup = (element: HTMLElement, name: string) => element.dataset[name] ?? "";

  document.querySelectorAll<HTMLElement>("[data-storefront-name]").forEach((element) => {
    const value = lookup(element, `storefrontName${key[0]!.toUpperCase()}${key.slice(1)}`);
    if (value) element.textContent = value;
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-storefront-cta]").forEach((element) => {
    const url = lookup(element, `storefrontUrl${key[0]!.toUpperCase()}${key.slice(1)}`);
    const label = lookup(element, `storefrontCtaLabel${key[0]!.toUpperCase()}${key.slice(1)}`);
    if (url) element.href = url;
    if (label) element.setAttribute("aria-label", label);
  });

  document.querySelectorAll<HTMLElement>("[data-storefront-note]").forEach((element) => {
    const message = lookup(element, `storefrontMessage${key[0]!.toUpperCase()}${key.slice(1)}`);
    const state = lookup(element, `storefrontState${key[0]!.toUpperCase()}${key.slice(1)}`);
    if (message) element.textContent = message;
    if (state) element.dataset.state = state;
  });
}

function initializeStorefrontPreference(): void {
  const selector = document.querySelector<HTMLSelectElement>("[data-storefront-selector]");
  const locale = document.documentElement.dataset.locale as Locale | undefined;
  if (!selector || !locale) return;

  const browserChoice = resolveRequestedStorefront(locale, navigator.languages);
  const current = readStoredStorefront() ?? browserChoice;
  selector.value = current;
  applyStorefront(current);

  selector.addEventListener("change", () => {
    if (!isStorefront(selector.value)) return;
    storeStorefront(selector.value);
    applyStorefront(selector.value);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeStorefrontPreference, { once: true });
} else {
  initializeStorefrontPreference();
}
