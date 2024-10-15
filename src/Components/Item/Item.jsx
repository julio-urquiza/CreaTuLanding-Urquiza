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
                <button className="Option">ver detalle</button>
            </footer>

        </article>
    )
}

export default Item