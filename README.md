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

## Dane raportu

Publiczny zestaw danych znajduje się w `public/data/journey-2025-2026.json`. To ostateczny, statyczny zapis zatwierdzonych pomiarów; strona nie łączy się z prywatną bazą danych.

Treść i dane raportu są zamknięte na 26 września 2026. Strona celowo nie używa fotografii.

## Publikacja

Workflow `.github/workflows/deploy.yml` buduje stronę Astro i publikuje katalog `dist` w GitHub Pages po każdym pushu do `main`.
