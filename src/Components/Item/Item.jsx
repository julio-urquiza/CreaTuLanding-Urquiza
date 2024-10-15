import { Link } from "react-router-dom"

const Item = ({id, name, type, description}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader" >{name}</h2>
            </header>
            <section>
                <p className="Info">
                    tipo : {type}
                </p>
                <p className="Info">
                    descripcion : {description}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">ver detalle</Link>
            </footer>

        </article>
    )
}

export default Item