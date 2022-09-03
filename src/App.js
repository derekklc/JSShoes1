import "./App.css";

import * as S from "./App.styles";

import Header from "./molecules/Header";
import Gallery1 from "./molecules/Gallery1";

function App() {
  return (
    <div className="App">
      <Header />
      <S.BodySection>
        <Gallery1 />
      </S.BodySection>
    </div>
  );
}

export default App;
