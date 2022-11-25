
import Button from '../Button/Button'
import './Cartcard.css'

function Cartcard({ url, description, price, index, id, onRemove }) {
    function sendCartId(id) {
        onRemove(id)
    }
    return (
        <div>
            <div className='Cartcard'>
                <img width='50' src={url} alt="" />
                <div className='middlecart'>
                    <span className='cartdes'>{description}</span>
                    <div className='cartbtn_tx'>
                        <span>$ {price} x {index}</span>
                        <Button onclick={() => (sendCartId(id))} className='removebtncart' txt='remove' />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cartcard