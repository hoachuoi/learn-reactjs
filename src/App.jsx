import {data, EXAMPLES} from "../data";
import Header from "./components/Header/Header";
import {MainContent1, MainContent} from "./components/MainContent/MainContent";
import { TapButton } from "./components/TapButton";
import { useState } from "react";
import TapContent from "./components/TapContent";

function App() {
  const [selectedTopic, setSelectedToppic]= useState();
  
  // let tabContent = 'lorem ipsum dolor sit amet';

  const handleSelect = (name) => {
    // alert(`You clicked on ${name}`);
    // tabContent = `This is ${name} tab`;
    // console.log(`tab`+tabContent);
    setSelectedToppic(name);
  };
  
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {data.map((item, index) => (
              <MainContent1
                // image={item.image}
                // title={item.title}
                // desc={item.desc}
                key={index}
                {...item}
              />
            ))}
          </ul>
        </section>
        <section id ="examples">
          <h2>Example</h2>
          <menu>
            <TapButton isSelected={selectedTopic == 'components'} onSelect={()=>{handleSelect('components')}} >Component</TapButton>
            <TapButton isSelected={selectedTopic == 'jsx'} onSelect={()=>{handleSelect('jsx')}} >JSX</TapButton>
            <TapButton isSelected={selectedTopic == 'props'} onSelect={()=>{handleSelect('props')}} >Props</TapButton>
            <TapButton isSelected={selectedTopic == 'state'} onSelect={()=>{handleSelect('state')}} >State</TapButton>
          </menu>
          {!selectedTopic ? <p>Chọn một tab để xem nội dung</p> : (<TapContent selectedTopic={selectedTopic} />)
          }
        </section>
      </main>
    </>
  );
}

export default App;