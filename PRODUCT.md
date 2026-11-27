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

- Dwa osobne roczne rozdziały w dwóch równorzędnych językach. Etap 1: `/pl/` i `/en/`; etap 2: `/pl/etap-2/` i `/en/stage-2/`. Przełącznik języka zachowuje etap.
- Aktualny snapshot obejmuje okres 1.12.2025–26.11.2026; późniejsze pomiary mogą wejść do kolejnych świadomych aktualizacji.
- Próg prawidłowego BMI został po raz pierwszy osiągnięty 26.09.2026, ale utrzymanie wyniku pozostaje częścią etapu 1.
- Etap 1 trwa od 1.12.2025 do 30.11.2026 i dotyczy wagi, BMI oraz utrzymania wyniku. Osiągnięcie prawidłowego BMI nie kończy roku.
- Etap 2 trwa od 1.12.2026 do 30.11.2027 i dotyczy pasa, tkanki tłuszczowej oraz siły. W obecnym raporcie pozostaje zapowiedzią. Zapisane wcześniej pomiary pokazujemy z rzeczywistymi datami jako punkt odniesienia przed startem, nie wyniki etapu 2.
- Dane publiczne są wersjonowanymi, statycznymi snapshotami w repozytorium.
- Prywatna aplikacja „Bitwa o wagę” pozostaje tylko elementem historii.

## Visual direction

Dane jako krajobraz: ciemne otwarcie z rzeczywistą linią 318 pomiarów, jasna redakcyjna opowieść i koralowy akcent wakacyjnego regresu. Instrument Sans i Newsreader, duży oddech oraz pełne osie czasu także na telefonie.

## Direction contract

- **THESIS:** małe decyzje, powtarzane wystarczająco długo, składają się na dużą zmianę; prawdziwa droga zawiera również regresy.
- **OWN-WORLD:** krajobraz utworzony z prawdziwych danych — nocny granat, jasny błękit linii i koralowy regres przechodzą w jasny osobisty dziennik.
- **STORY:** aktualny wynik i obietnica → zdrowotny kontekst i narodziny Stasia → punkt startowy i własna gra → reguły oraz codzienny feedback → pełny wykres z wakacyjnym odbiciem → małe wygrane i codzienne dowody → osiągnięcie progu BMI oraz dalsza stabilizacja → przejście do osobnego rocznego rozdziału etapu 2 → puenta o procencie składanym, disclaimer i dyskretna kawa.
- **FIRST VIEWPORT:** minimalna nawigacja, wyraźny zakres dat i przełącznik rocznych etapów, osobisty nagłówek, aktualny wynik −18,5 kg w 360 dni i prawdziwy krajobraz 108 → 89,5 kg z widocznym wakacyjnym odbiciem.
- **FORM:** krajobraz danych połączony z osobistym magazynem — jednorazowe odsłonięcie linii w 2,2 sekundy, redakcyjne kolumny oraz wykresy jako dowody. Główny wykres obsługuje dotyk, mysz i klawiaturę; ograniczenie ruchu jest respektowane. Kierunek wskazany przez użytkownika; bez losowania concept-seed.

- **FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

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

Stage-two goal provenance: the public snapshot records the application rule source (`lib/healthy-ranges.ts`, commit `d14ae3da770c38a9fbcf50abdd4af9972c2187f5`) and profile reference date November 26, 2026. Waist is strictly below half of 192cm (96cm); the current male 20–39 age band gives 8–20% body fat. The age-dependent range must be rechecked when stage two starts. Earlier composition readings are explicitly labelled as pre-stage-two baseline in both languages, including the SVG description.
