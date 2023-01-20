import { useState } from 'react';
import './App.css';
import kuva1 from './kuva1.PNG';
import kuva2 from './kuva2.PNG';
import kuva3 from './kuva3.PNG';
import kuva4 from './kuva4.PNG';
import kuva5 from './kuva5.PNG';
import kuva6 from './kuva6.PNG';
import kuva7 from './kuva7.PNG';
import kuva8 from './kuva8.PNG';
import Products from './components/Products'
import Search from './components/Search'





function App(){

  const products = [
    { id: 1,
      name: 'Portable Blackbox 2TB',
      image: kuva1 ,
      price: 7000
    },
    { id: 2,
      name: 'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment ',
      image: kuva2 ,
      price: 226.99
    },
    { id: 3,
      name: 'Original HP 63XL Black High-yield Ink Cartridge | Works with HP DeskJet 1112, 2130, 3630 Series; HP ENVY 4510, 4520 Series; HP OfficeJet 3830, 4650, 5200',
      image: kuva3 ,
      price: 41.89
    },
    { id: 4,
      name: 'Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Roku Voice Remote with TV Controls',
      image: kuva4 ,
      price: 30.99
    },
    { id: 5,
      name: 'Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia and Shortcut Keys, 2-Year Battery Life',
      image: kuva5 ,
      price: 5555
    },
    { id: 6,
      name: 'Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI',
      image: kuva6 ,
      price: 29
    },
    { id: 7,
      name: 'Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series | Eligible for Instant Ink | 3YM57AN',
      image: kuva7 ,
      price: 7777
    },
    { id: 8,
      name: 'iPhone Charger, TAKAGI Lightning Cable 3PACK 6FT Nylon Braided USB Charging Cable High Speed Data Sync Transfer Cord Compatible with iPhone 13/12/11 Pro',
      image: kuva8 ,
      price: 9.99
    }
  ];
  
  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  
  const filterProducts = (products, query) => {
    if (!query) {
      return products;
    }
    return products.filter((p) => {
      const productName = p.name.toLowerCase();
      return productName.includes(query);
    });
  };
  
  
  const filteredProducts = filterProducts(products, query);
  return (
    <div className="App">
      <div className="searcBarbox">
        <div className="searcBar">
          <Search/>
          </div>
        </div>
      <div className="productContainer">
       {filteredProducts.map(p => <Products image={p.image} name={p.name} price={p.price}/>)}
      </div>
    </div>
    
    
  );
}

export default App;
