function Proceed({ display, totalprice, onClick }) {
    function deletecart() {
        onClick()
    }
    return (

        <div style={{ display: display }} className="proceed">
            <span>Total:${totalprice}</span>
            <button onClick={deletecart} className="procebtn">Proceed</button>
        </div>

    )
}
export default Proceed