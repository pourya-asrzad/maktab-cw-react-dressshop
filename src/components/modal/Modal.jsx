import Button from '../Button/Button'
import './Modal.css'
function Modal({ display, data, hidemodal, addToCart }) {
    function hideModalbtn() {
        hidemodal('none')
    }
    let count = 0
    function addtocart(id) {
        count++
        hidemodal('none')
        addToCart(id, count)
    }
    return (
        <div style={{ display: display }} className="Modal">
            {data ?
                data.map((eleman) => {
                    return (
                        < >
                            < img key={eleman.id} src={eleman.url} alt="" />
                            <div key={eleman.id + 1}>
                                <div className="modal_btn_txt">
                                    <span>{eleman.description}</span>
                                    <button onClick={hideModalbtn}>x</button>
                                </div>
                                <p className='longstory'>This is for all the latest trends,
                                    no matter who you are, where you’re from and what you’re up to. Exclusive to  <br /> ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. <br />
                                    Created by us, styled by you.</p>
                                <div className='modalbtnprice'>
                                    <div className="modalprice">Price : ${eleman.price}</div>
                                    <Button onclick={() => { addtocart(eleman.id) }} txt='Add To Cart' className='cart_btn' />
                                </div>
                            </div>
                        </>
                    )
                }) : ""
            }
        </div>
    )
}
export default Modal