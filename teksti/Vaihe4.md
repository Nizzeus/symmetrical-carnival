# Vaihe 4 - Projekti Esitys

## 🎯 Muistiinpano Sivu

---

## 📝 Project overview

Projektin tarkoitus on olla yksinkertainen muistiinpanonteko sivu, jossa käyttäjät voivat luoda, lukea, muokata ja poistaa muistiinpanoja.

Kohderyhmänä on kuka vaan, jolla on tarvetta muistiinpanoille, esim. opiskelijat.

---

## 📌 Käyttötapausten yhteenveto

| Käyttötapaus | Toteutettu (Kyllä/Ei) | Huomautukset / Demot |
|----------|----------------------|------------------------|
| Käyttäjä voi tehdä ja tallentaa muistiinpanoja sivulla | Kyllä | Demo kohdassa (?) |
| Käyttäjä voi lukea aiemmin tehtyjä muistiinpanoja sivulla | Kyllä | Demo kohdassa (?) |
| Käyttäjä voi poistaa aiemmin tehtyjä muistiinpanoja sivulla | Kyllä | Demo kohdassa (?) |
| Käyttäjä voi ladata muistiinpanoja tietokoneelle tekstitiedostoina | Ei | En saanut toteutettua, sillä piti keskittyä muiden käyttötapausten toteuttamiseen |
| Alkuperäinen UI prototyyppi | Ei | Innostuin vähän liikaa Figmalla, enkä ajatellut, kuinka sen oikeasti toteuttaisi, vain väriteema säilyi |

---

## ✍️ Tekninen toteutus

Projektissa käytettiin tietysti HTML:lää sivun rakenteeseen, JavaScriptiä sen koodaamiseen ja CSS:ää sen ulkonäköön. Lisäksi käytin Oracle VM VirtualBoxia ja Nginxiä saamaan sen varsinaiseen nettisivuun paikallisena virtuaalikoneena.

Jokaisella tehdyllä muistiinpanolla on oma ID-luku ja tyhjä content, kun luodaan uusi muistiinpano, sille annetaan satunnainen ID-luku väliltä 0-100000 ja kirjoitettu teksti lisätään contenttiin. Muistiinpanot tallennetaan localStoragella.

---

## 🚂 Kehitysprosessi

Aloitin melko myöhässä niin päätin valita mahdollisimman helpon tavoitteen, niin päätin tehdä simppelin "Note App":in. 

Aloitin tekemällä HTML ja CSS tiedostot, sillä ne ovat mielestäni helpompia verrattuna JavaScriptiin. Kauan aikaa en oikein päässyt omilla taidoilla eteenpäin, niin päätin etsiä netistä ohjeita. Katsoin muutamia videoita, kunnes löysin sopivan, jossa näytettiin ja kerrottiin, miten tehdä "Note App". 

Seurasin videon ohjeita suurimmaksi osaksi, muokkasin tietenkin joitain kohtia, kuten tekstit ja väriteema, jotta sivu olisi enemmän omani näköinen.

---

## ☀️ Reflektointi ja jatkoideat

Alussa oli vähän vaikeaa valita aihe, sillä en ihan ollut varma, minkälainen se voisi olla, mutta ei kestänyt kovin kauaa päättää aihe.

Paikallisen virtuaalikoneen toteuttamisessa oli myös ensin vähän vaikeuksia, mutta katsottuani kurssin videotallenteita, sain sen toimimaan.

Tajusin myös, kuinka tärkeää on aloittaa tällaiset projektit hyvissä ajoin, eikä jättää tosi myöhään. 

Olen kuitenkin ylpeä, että sain suurimman osan tavoitteista toteutettua.

---

## 📊 Projektin käytetyt työtunnit

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 20.3.2025 | 1 | Vaihe 1:en suunnittelu  | Katsoin yhtä aiemman tunnin tallennevideota ja mietin minkälaisen nettisivun teen, ja tein vaihe 1 tiedoston |

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 21.3.2025 | 1,5 | Vaihe 1:en suunnittelu  | Etsin netistä tietoa vaiheen termeistä jä täytin vaihe 1 tiedostoa |

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 22.3.2025 | 2,5 | Prototyypin teko  | Tein Figmalla prototyypin muistiinpano sivusta |

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 2.4.2025 | 1 | Arkkitehtuuri | Tein index, script ja style tiedostot ja täytin niitä hieman |

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 9.4.2025 | 2 | Ympäristö ja koodaus | Aloitin virtuaalikoneen tekemisen ja parantelin index ja styles tiedostoja |

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 11.4.2025 | 1,5 | Koodaus | Yritin ensin itse kirjoittaa javascriptiä,  mutta en oikein osanut niin etsin netistä apua sen tekemiseen. Etsin apua eri koodaus-sivuilta ja katsoin Youtube-videoita |

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 12.4.2025 | 3 | Koodaus | En oikein saanut tehtyä sellaista sivua mitä halusin, niin päätin tehdä simppelimmän version, lopuksi täytin vaihe 2 tiedostoa |

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 13.4.2025 | 0,5 | Viimeistely | Lisäsin koodiin vähän kommentteja ja hieman lisäyksiä vaihe 2 tiedostoon |

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 26.4.2025 | 1,5 | Vaihe 4 | Tein projekti esitys tiedoston ja täytin sitä |

| Päivämäärä | Tunnit käytetty | Aihe | Tulos |
| :---  |     :---:      |     :---:      |     :---:      |
| 27.4.2025 | 2 | Vaihe 4 | Unohdin eilen Committaa esitys tiedoston, niin piti tänään tehdä se uudestaan, tein myös esitys videon |

| **Yhteensä**  | **16,5h** |                                 |

---

## 🪢 Presentation link

En saanut sitä tähän linkitettyä niin laitoin sen erikseen tähän kansioon.
