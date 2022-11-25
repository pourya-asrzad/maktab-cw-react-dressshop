import Card from "../Card/Card"
import './Cardcontainer.css'
import data from "../../dada"
function Cardcontainer({ filteredbyprice, filteredbysize, ondataindex, onGetIndexToCart, onGetIdYoShowModal }) {
    const datafilteresbysize = data.filter((element) => {
        for (const iterator of element.size) {
            if (iterator == filteredbysize) {
                return element
            }
        }
    })

    const Highest = [...datafilteresbysize].sort(function (a, b) {
        return b.price - a.price
    });

    const Lowest = [...datafilteresbysize].sort(function (a, b) {
        return a.price - b.price
    });
    function addedToCart(id, count) {
        onGetIndexToCart(id, count);
    }
    function SowintoModal(id) {
        onGetIdYoShowModal(id)
    }
    ondataindex(datafilteresbysize.length)
    return (
        <div className="cardcontainer">
            {

                filteredbyprice == "Lowest" ? Lowest.map((element) => {
                    return (<Card onAddToCart={addedToCart}
                        key={element.id}
                        id={element.id}
                        img={element.url}
                        discription={element.description}
                        price={element.price}
                        onIdToShowModal={SowintoModal}
                    />)
                }) : Highest.map((element) => {
                    return (<Card onAddToCart={addedToCart}
                        key={element.id}
                        id={element.id}
                        img={element.url}
                        discription={element.description}
                        price={element.price}
                        onIdToShowModal={SowintoModal}
                    />)
                })

            }

        </div>
    )
}
export default Cardcontainer