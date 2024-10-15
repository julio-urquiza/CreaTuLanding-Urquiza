const products = [
    { id:'1', name:'charmander', type:'fuego', description:'es un pokemon' },
    { id:'2', name:'bulvasor', type:'planta', description:'es un pokemon' },
    { id:'3', name:'squirtel', type:'agua', description:'es un pokemon' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(products) 
        }, 500);
    })
}

export const getProductsById = (productsId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productsId))
        }, 500);
    })
}

export const getProductsByType = (productsType) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.type === productsType))
        }, 500);
    })
}