
import Arrow from '/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/parrow.svg'
import Elevation from '/Users/shabichasureshkumar/Desktop/Portfolio Site/frontend/src/assets/pheader.svg'
import './App.css'
import NavBar from "./NavBar";

function App() {

  return (
    <>
      < NavBar />

      <div className="frame">
        <img className="image" alt="Image" src={Elevation} />
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              <div className="text-wrapper">shabicha</div>
              <div className="text-wrapper-2">sa-/bee/-sha</div>
            </div>
            <p className="product-designer">
              Product designer and developer. Elevating the digital world with efficient systems and radial gradients.
            </p>
          </div>
          <div className="div-4">
            <div className="text-wrapper-3">MY WORK</div>
            <img className="vector" alt="Vector" src={Arrow} />
          </div>
      </div>
      </div>
    </>
  )
}

export default App
