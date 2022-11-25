import './Cart.css'
import Headercart from './Headercart'
import Cartcard from '../CartCard/Cartcard'
import Proceed from '../procced/Proceed'
import Form from '../Form/Form';
import { useState } from 'react'
function Cart({ cartarr, index, ondeletedata }) {
    function sendCartId(id) {
        ondeletedata(id);

    }
    const [showForm, setshowForm] = useState('none')
    function showform() {
        setshowForm('block')
    }

    const cartarrlength = cartarr.length > 0
    let totalprice = 0
    return (
        <div className='cart'>
            <Headercart />
            {

                cartarr.map((element) => {
                    totalprice += element.price * element.priceindex
                    console.log(totalprice);

                    return (
                        <Cartcard
                            key={element.id}
                            url={element.url}
                            description={element.description}
                            price={element.price}
                            index={element.priceindex}
                            id={element.id}
                            onRemove={sendCartId}
                        />
                    )
                })
            }
            {
                cartarrlength ?
                    <Proceed onClick={showform} totalprice={totalprice} />
                    : ""

            }
            <Form display={showForm} />
        </div>
    )
}

export default Cart