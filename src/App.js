import Home from "./Components/Home.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer";
import About from "./Components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [showHideSearch, setShowHideSearch] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const setSearch = (bool) => {
    setShowHideSearch(bool);
  };
  const refresh = () => {
    setRefreshKey(refreshKey + 1);
  };
  const items = [
    {
      key: 1,
      quantity: 5,
      category: "laptop",
      name: "Lenovo IdeaPad Gaming Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) 15IHU6 Gaming Laptop  (15.6 Inch, Shadow Black, 2.25 kg)",
      price: 80000,
      image:
        "https://rukminim1.flixcart.com/image/416/416/ks99aq80/computer/y/z/7/na-gaming-laptop-lenovo-original-imag5ve3jvhgvsnx.jpeg?q=70",
      spec: [
        "NVIDIA GeForce GTX 1650",
        "15.6 Inch Full HD IPS 250nits Anti-glare, 60Hz, 45% NTSC, DC dimmer",
        "Light Laptop without Optical Disk Drive",
      ],
    },
    {
      key: 2,
      quantity: 10,
      category: "mobile",
      name: "Xiaomi 11Lite NE (Jazz Blue, 128 GB)  (8 GB RAM)",
      price: 25000,
      image:
        "https://rukminim1.flixcart.com/image/416/416/kua4r680/mobile/z/4/b/11lite5g-11-lite-ne-5g-redmi-original-imag7f6c7whutdmy.jpeg?q=70",
      spec: [
        "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
        "16.64 cm (6.55 inch) Full HD+ Display",
        "64MP + 8MP + 5MP | 20MP Front Camera",
        "4250 mAh Battery",
        "Qualcomm Snapdragon 778G Processor",
      ],
    },
    {
      key: 3,
      quantity: 8,
      category: "microwave",
      name: "SAMSUNG 28 L Convection Microwave Oven  (MC28A5025VP, Black with Pattern)",
      price: 14000,
      image:
        "https://rukminim1.flixcart.com/image/416/416/l23mhzk0/microwave-new/8/i/y/mc28a5025vp-samsung-28-original-imagdgmpzzrgwvpy.jpeg?q=70",
      spec: [
        "28 L",
        "Convection : Can be used for baking along with grilling, reheating, defrosting and cooking",
        "Tact (Buttons) : Even with hands soiled with dough, these buttons can be used",
        "Child Lock : Ensures complete safety especially for homes with small children",
      ],
    },
    {
      key: 4,
      quantity: 5,
      category: "television",
      name: "Mi 5X 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Atmos and Dolby Vision",
      price: 29999,
      image:
        "https://rukminim1.flixcart.com/image/416/416/ksoz53k0/television/c/p/h/l43m6-es-mi-original-imag6774wykv4ps8.jpeg?q=70",
      spec: [
        "Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube",
        "Operating System: Android (Google Assistant & Chromecast in-built)",
        "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
        "Sound Output: 30 W",
        "Refresh Rate: 60 Hz",
      ],
    },
  ];

  const [listItems, setListItems] = useState(items);

  const addToCart = (item) => {
    let index = listItems.findIndex((e) => e.key === item.key);
    if (index !== -1) {
      let cart = cartItems.concat({ ...listItems[index] });
      cart[cart.length - 1].quantity = 1;
      cart[cart.length - 1].key = cart.length + 15;
      listItems[index].quantity -= 1;
      setCartItems(cart);
    }
  };

  const setCartToggle = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Router>
        <Header
          title="E-Commerce"
          cart={cartItems}
          search={false}
          icons={showHideSearch}
          refresh={refresh}
          setCartToggle={setCartToggle}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                key={refreshKey}
                items={listItems}
                cart={cartItems}
                showCart={showCart}
                addToCart={addToCart}
                search={setSearch}
                setCartToggle={setCartToggle}
              />
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={<About search={setSearch} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
