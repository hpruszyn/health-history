# Droga do formy

Dwujęzyczna, statyczna opowieść Huberta o zmianie nawyków — zaprojektowana jako długowieczny raport, a nie blog fitnessowy.

## Lokalnie

```sh
pnpm install
pnpm dev
```

Walidacja produkcyjna:

```sh
pnpm check
pnpm build
```

## Aktualizacja danych

Publiczny snapshot znajduje się w `public/data/journey-2025-2026.json`. Można go zastąpić pełnym eksportem zatwierdzonych pomiarów bez łączenia strony z prywatną bazą danych.

Przed finalną publikacją należy zaktualizować wynik etapu pierwszego, bieżące KPI etapu drugiego, fotografie oraz adres Buy Me a Coffee. Lista tych elementów znajduje się również w `PRODUCT.md`.

## Publikacja

Workflow `.github/workflows/deploy.yml` buduje stronę Astro i publikuje katalog `dist` w GitHub Pages po każdym pushu do `main`.
