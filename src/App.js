import React, { useState } from 'react';
import './App.css';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import Home from './components/home/Home';
import DetailsBlock from './components/allBlocks/DetailsBlock';
import { isMobile } from './data';

function App() {

  const [block, setBlock] = useState("Hello");
  const [selectedSections, setSelectedSections ] = useState([]);

  const onSelect = (e, name, index) => {
    if(e !== undefined) {
          let section = e.target.value;
          
          setBlock(section);

          if(section != "Hello" && !selectedSections.includes(section)){
            setSelectedSections([...selectedSections, section]);
          }
        
    }else{
        let prevSections = [...selectedSections];
        let newBlock;
        prevSections.splice(index, 1);
        setSelectedSections(prevSections);

        if(block === name && prevSections.length !== 0){
          newBlock = prevSections[prevSections.length-1];
        }

        if(prevSections.length === 0){
          newBlock = "Hello";
        }
        setBlock(newBlock);
    }
  };


  return (
    <div id='appMainContainer' className="App">
      <div className="appInnerContainer">
        <Header block={block} onSelect={onSelect} />
          {/* {(block == "Hello" || isMobile()) && */}
          {block == "Hello"&&
            <Home />
          }

          {/* {(block != "Hello" || isMobile()) && */}
          {block != "Hello" &&
            <DetailsBlock block={block} onSelect={onSelect} selectedSections={selectedSections} />
          }
        <Footer />
      </div>
    </div>
  );
}

export default App;
