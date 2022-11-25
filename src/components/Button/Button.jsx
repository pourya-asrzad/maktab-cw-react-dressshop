function Button({ onclick, className, txt }) {
    return (
        <button onClick={onclick} className={className}>{txt}</button>
    )
}
export default Button