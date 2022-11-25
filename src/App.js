import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filterbar from "./components/Filterbar/Filterbar";
import Cardcontainer from "./components/Cardcontainer/Cardcontainer";
import Cart from "./components/Cart/Cart";
import data from "./dada";
import "./App.css";
import Modal from "./components/modal/Modal";
import cartData from "./data/CartData";
import { useState } from "react";
function App() {
  const [sortorder, setsortorder] = useState("Lowest");
  const [fitersize, setfitersize] = useState("ALL");
  const [dadaindex, setdadaindex] = useState(6);
  const [cartArrState, setCartArr] = useState(cartData);
  const [deletid, setdeleteid] = useState(0);
  const [showModal, setShoModal] = useState("none");
  const [dataForModal, setdataForModal] = useState([]);
  function ondeletedata(id) {
    setdeleteid((prev) => (prev = id));
    getProductId();
    console.log(deletid);
  }
  function onchangeorderfilter(filtered) {
    setsortorder(filtered);
  }
  function onchange_by_size(size) {
    setfitersize(size);
  }

  function getdatanumberprudoct(index) {
    setdadaindex((prev) => {
      return (prev = index);
    });
  }
  function getProductId(id, count) {
    if ((id, count)) {
      data.map((ele) => {
        if (ele.id == id) {
          ele.priceindex = ele.priceindex + count;
        }
      });
      const [cartArr] = data.filter((element) => {
        return element.id == id;
      });
      setCartArr((prev) => {
        const cartdata = [...prev, cartArr];
        const uniqueChars = [...new Set(cartdata)];
        const deletecart = uniqueChars.filter(
          (element) => element.id !== deletid
        );
        return deletecart;
      });
    } else {
      setCartArr((prev) => {
        const cartdata = [...prev];
        const uniqueChars = [...new Set(cartdata)];
        const deletecart = uniqueChars.filter(
          (element) => element.id !== deletid
        );
        return deletecart;
      });
    }
  }
  function SendIdToShowModal(id) {
    if (id) {
      setShoModal((prev) => (prev = "flex"));
      setdataForModal((prev) => {
        const modaldata = data.filter((element) => element.id == id);
        return (prev = modaldata);
      });
    }
  }
  function hideModal(dis) {
    setShoModal((prev) => (prev = dis));
    setdataForModal((prev) => {
      const modaldata = null;
      return (prev = modaldata);
    });
  }
  function setemptyCart() {
    setCartArr((prev) => {
      return (prev = []);
    });
  }
  return (
    <div>
      <Header />
      <div className="cart_card_container">
        <div>
          <Filterbar
            dadaindex={dadaindex}
            onchange_by_size={onchange_by_size}
            onchangeorderfilter={onchangeorderfilter}
          />
          <Cardcontainer
            onGetIdYoShowModal={SendIdToShowModal}
            onGetIndexToCart={getProductId}
            filteredbysize={fitersize}
            filteredbyprice={sortorder}
            ondataindex={getdatanumberprudoct}
          />
        </div>
        <div className="cartcoontainer">
          <Cart
            deletecart={setemptyCart}
            ondeletedata={ondeletedata}
            cartarr={cartArrState}
          />
        </div>
      </div>
      <div style={{ height: "60px" }}></div>
      <Modal
        addToCart={getProductId}
        hidemodal={hideModal}
        display={showModal}
        data={dataForModal}
      />
      <Footer />
    </div>
  );
}

export default App;
