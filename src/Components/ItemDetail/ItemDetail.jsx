import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, type, description}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
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
                {/* <ItemCount initial={1} stock={1} onAdd={(quantity) => console.log('cantidad agregada', quantity)} /> */}
            </footer>
        </article>
    )
}

export default ItemDetail