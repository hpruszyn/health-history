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

Publiczny zestaw danych znajduje się w `public/data/journey-2025-2026.json`. To wersjonowany, statyczny snapshot zatwierdzonych pomiarów; strona nie łączy się z prywatną bazą danych.

Aktualny snapshot zawiera 318 pomiarów masy od 1 grudnia 2025 do 26 listopada 2026 oraz najnowsze publiczne dane pasa, tkanki tłuszczowej i siły. Najnowszy wynik to 89,5 kg (−18,5 kg), pas 97 cm, 24,5% tkanki tłuszczowej oraz 61 kg × 8 w wyciskaniu. Próg prawidłowego BMI został po raz pierwszy osiągnięty 26 września, ale historia pozostaje otwarta: utrzymanie wyniku i etap siłowy nadal trwają. Strona celowo nie używa fotografii.

Kolejne aktualizacje powinny polegać na wygenerowaniu nowego snapshotu z prywatnej bazy i świadomej aktualizacji narracji, bez wystawiania Supabase publicznie.

## Publikacja

Workflow `.github/workflows/deploy.yml` buduje stronę Astro i publikuje katalog `dist` w GitHub Pages po każdym pushu do `main`.
