import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductsById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)

    const { ItemId } = useParams()

    useEffect(() => {
        getProductsById(ItemId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })

    }, [])
    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...products} />
        </div>
    )
}
export default ItemDetailContainer