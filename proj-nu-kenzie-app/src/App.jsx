import { useState } from "react";
import { Header } from "./Header";
import { Form } from "./components/Form";

import { GlobalStyles } from "./styles/globalStyles";
import { GlobalReset } from "./styles/reset";
import { FinancialSection } from "./components/FinancialSection";
import { StyledContainer } from "./styles/container";


export const App = () => {
const [extractList, setExtractList] = useState([]);
console.log(extractList)
  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <StyledContainer>
        <Form extractList= {extractList} setExtractList={setExtractList}/>
   
        <FinancialSection extractList={extractList} setExtractList={setExtractList}/>
      </StyledContainer>
    </div>
  );
}

