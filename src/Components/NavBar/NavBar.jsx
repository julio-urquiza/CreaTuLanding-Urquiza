import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Comercio</h3>
            <div>
                <button>productos</button>
                <button>carrito</button>
                <button>contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar