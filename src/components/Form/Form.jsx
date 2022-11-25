import './Form.css'
function Form({ display }) {
    function handelSubmitForm(e) {
        e.preventDefault()
        alert('Will be sent!')
    }
    return (
        < div style={{ display: display }} className='fomparent'>
            <form onSubmit={handelSubmitForm} className="Form">
                <div className='inputs'>

                    <label htmlFor="Email">Email</label>
                    <br />
                    <input id="Email" name="Email" type="Email" />
                </div>
                <div className='inputs'>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input id="name" name="name" type="text" />
                </div>
                <div className='inputs'>
                    <label htmlFor="Address">Address</label>
                    <br />
                    <input type="text" name="Address" id="Address" />
                </div>
                <button type='submit' className='subbtn'>Checkout</button>
            </form>
        </div>

    )
}
export default Form