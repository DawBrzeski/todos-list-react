import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";


export default () => (
    <Container>
        <Header
            title="O autorze" />
        <Section
            title="Dawid Brzeski"
            body={
                <><strong>Witam wszystkich bardzo serdecznie na mojej stronie! </strong> Nazywam się Dawid,
                mam 24 lata, juz niebawem 25.
                Od
                kilku dobrych lat pracuje jako inspektor, gdzie praca odbywa się zazwyczaj za granią naszego kraju.
                Praca
                nie jest cięka lecz bardzo wymagająca pod względem przemieszczania się, codziennie pracujemy w innym
                miejscu, nieraz miejsca załadunku oddalone są od siebie o 500km. Z tego tez powodu zdecydowalem się
                zapisać
                na kurs <strong>YOUCODE</strong>. Jestem tez studentem Uniwersytetu Gdanskiego na kierunku
                informatyka i
                ekonometria.
                <br></br> <br>
                </br>W komputerach jestem bardzo obeznany, od dzieciaka się nimi bawie. Przerabiałem tez
                róznorakie
                kursy min. mySQL, PS, Phyton, MS office, WP, Cyberseciurity lecz tylko czysto hobbystycznie.
                Szczerze wierzę, ze po tym kursie dam rade wszystko sobie usyschematyzowac i uda mi sie znalezc
                pierwsza
                prace w środowisku IT. </>
            }
        />
    </Container>
)