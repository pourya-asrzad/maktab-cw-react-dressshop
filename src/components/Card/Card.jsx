import Button from '../Button/Button'
import './Card.css'
function Card({ img, discription, price, id, onAddToCart, onIdToShowModal }) {
    let count = 0
    function addtocart(id) {
        count++
        onAddToCart(id, count)
    }
    function idToShowModal(id) {
        onIdToShowModal(id)
    }
    return (
        <div className='card'>
            <img onClick={() => { idToShowModal(id) }} className='cardimg' width="300" src={img} alt={discription} />
            <div>
                <span className='discription'>{discription}</span>
                <div className='flexfootercard'>
                    <span>${price}</span>
                    <Button id={id} onclick={() => { addtocart(id) }} txt='Add To Cart' className='cardbtn' />
                </div>
            </div>
        </div>
    )
}
export default Card
/*
     <div className='card'>
            <img width="300" src='https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg' alt={discription} />
            <div>
                <span className='discription'>Midi sundress with shirring detail</span>
                <div className='flexfootercard'>
                    <span>$12.5</span>
                    <button className='cardbtn'>Add To Cart</button>
                </div>
            </div>
        </div>
   
*/