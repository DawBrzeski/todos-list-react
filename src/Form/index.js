import "./style.css"; 

const Form = (props) => (
    <form className="form">
        <input autofocus className="form__input" placeholder="Co jest do zrobienia?"></input>
        <button className="form__button"> Dodaj zadanie</button>
    </form>
);

export default Form; 