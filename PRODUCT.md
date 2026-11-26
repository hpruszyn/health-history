# Hubert — historia zmiany

## Purpose

Dwujęzyczna, osobista i oparta na danych opowieść Huberta o odzyskiwaniu zdrowia i formy. To trwały, okresowo aktualizowany zapis procesu, nie blog fitnessowy, poradnik medyczny ani promocja prywatnej aplikacji.

## Audience

- Hubert — jako autor i przyszły czytelnik własnej historii.
- Osoba, która trafi na stronę przypadkiem i szuka uczciwego case study zmiany nawyków.
- Czytelnik zainteresowany danymi, procesem i długim horyzontem, nie szybką metodą.

## Core promise

Pokazać prawdziwą, nieliniową drogę: setki wystarczająco dobrych decyzji złożyły się na dużą zmianę, mimo regresów i bez udawania, że istnieje uniwersalna recepta.

## Content model

- Jedna długa historia w dwóch równorzędnych wersjach: `/pl/` i `/en/`.
- Aktualny snapshot obejmuje okres 1.12.2025–26.11.2026; późniejsze pomiary mogą wejść do kolejnych świadomych aktualizacji.
- Próg prawidłowego BMI został po raz pierwszy osiągnięty 26.09.2026, ale utrzymanie wyniku pozostaje częścią etapu 1.
- Etap 2 jest trwającym eksperymentem dotyczącym pasa, tkanki tłuszczowej i siły — bez przedwczesnych wniosków.
- Dane publiczne są wersjonowanymi, statycznymi snapshotami w repozytorium.
- Prywatna aplikacja „Bitwa o wagę” pozostaje tylko elementem historii.

## Visual direction

Editorial data journal: ciepłe tło papieru, ciemny atrament, stonowany błękit danych i czerwony akcent regresu. Duża typografia redakcyjna, rytm osi czasu, cienkie reguły, duże liczby i oszczędne motywy geometryczne.

## Direction contract

- **THESIS:** małe decyzje, powtarzane wystarczająco długo, składają się na dużą zmianę; prawdziwa droga zawiera również regresy.
- **OWN-WORLD:** papierowy rocznik i osobisty raport danych — ciepły papier, atrament, granat/kobalt danych, ceglasty czerwony regresów, cienkie reguły i oszczędne motywy geometryczne.
- **STORY:** aktualny wynik i obietnica → zdrowotny kontekst i narodziny Stasia → punkt startowy i własna gra → reguły oraz codzienny feedback → pełny wykres z wakacyjnym odbiciem → małe wygrane i codzienne dowody → osiągnięcie progu BMI oraz dalsza stabilizacja → trwające metryki etapu 2 → puenta o procencie składanym, disclaimer i dyskretna kawa.
- **FIRST VIEWPORT:** minimalna nawigacja, datowany kicker, osobisty headline, krótki kontekst oraz widoczny od razu aktualny wynik 108 → 92,5 kg; celem jest jasne zakomunikowanie historii, skali zmiany i braku marketingowego tonu.
- **FORM:** seed key „roczny raport terenowy złożony z notatnika laboratoryjnego i magazynu literackiego” — jedna redakcyjna kolumna z marginaliami, kontrastujące plansze danych i wykresy traktowane jako dowody, nie dekoracyjne karty.

## Non-goals

- Brak porad medycznych, obietnic, coachingowego tonu i uniwersalnej diety.
- Brak narracji „before/after”, stockowych zdjęć i fitnessowych klisz.
- Brak bezpośredniego połączenia publicznej strony z prywatnym Supabase.
- Brak pozycjonowania pod „jak schudnąć”.

## Technical direction

- Astro, statyczny output, mobile first.
- GitHub Pages jako hosting.
- Dostępne bez JavaScriptu podstawowe treści; JavaScript wzbogaca wykres i nawigację.
- Dane raportu są wersjonowane jako statyczne snapshoty w repozytorium.

## Aktualizowanie raportu

Publiczna strona nie pobiera danych na żywo. Przy większej aktualizacji wybrane pomiary są eksportowane z prywatnego Supabase do pliku JSON, a narracja otrzymuje nową datę odniesienia. Dzięki temu każdy opublikowany stan jest trwały, ale historia może uczciwie rozwijać się dalej.
