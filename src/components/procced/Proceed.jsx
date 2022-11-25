function Proceed({ display, totalprice, onClick }) {
    function showform() {
        onClick()
    }
    return (

        <div style={{ display: display }} className="proceed">
            <span>Total:${totalprice}</span>
            <button onClick={showform} className="procebtn">Proceed</button>
        </div>

    )
}
export default Proceed