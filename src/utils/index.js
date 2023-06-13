/** 
 *this function calculates total price of a new Order
 *@param {Array} products cartProduct: Array of Objects 
 *@return {number} Total price
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}