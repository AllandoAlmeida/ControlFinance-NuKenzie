import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { BalanceValue } from "../BalanceValue";
import { ButtonInsert } from "../Buttons";
import { StyledHeadCaption } from "../../styles/Typography";
import { StyledInput } from "./Input/Input";
import { StyledOption, StyledSelect } from "./Select/select";
import { StyledDiv, StyledForm, StyledSection } from "./styles";


export const Form = ({ extractList, setExtractList }) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const addExtractList = () => {
    const numericValue = parseFloat(value.replace(/[^\d]/g, ""));

    if (numericValue === 0 || isNaN(numericValue)) {
      alert(`O valor "${value}" informado é inválido!`);
      return;
    }

    const newExtract = {
      id: uuidv4(),
      title,
      value: numericValue / 100,
      category,
    };
    setExtractList((extractList) => [...extractList, newExtract]);
  };
  const submit = (e) => {
    e.preventDefault();

    addExtractList();

    setTitle("");
    setValue("");
    setCategory("");
  };
  const handleValueChange = (e) => {
    const inputValue = e.target.value.replace(/[^\d]/g, "");
    const formattedValue = formatCurrency(inputValue);
    setValue(formattedValue);
  };
  const formatCurrency = (value) => {
    const floatValue = (value / 100).toFixed(2);
    return parseFloat(floatValue).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  const handleBlur = (e) => {
    const inputValue = e.target.value.replace(/[^\d]/g, "");
    const numericValue = parseFloat(inputValue);
    const formattedValue = formatCurrency(numericValue);
    setValue(formattedValue);
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={submit}>
        <StyledDiv>
          <StyledHeadCaption>
            <label>Descrição</label>
          </StyledHeadCaption>
          <StyledInput

            type="text"
            placeholder="Título da nota"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <StyledHeadCaption>
            <label>Ex: Compra de roupas</label>
          </StyledHeadCaption>
        </StyledDiv>

        <StyledDiv>
          <StyledHeadCaption>
            <label>Valor (R$)</label>
          </StyledHeadCaption>
          <StyledInput
            type="text"
            placeholder="Valor da nota"
            value={value}
            onChange={handleValueChange}
            onBlur={handleBlur}
            required
          />
        </StyledDiv>

        <StyledDiv>
          <StyledHeadCaption>
            <label>Tipo de Valor</label>
          </StyledHeadCaption>
          <StyledSelect
            name=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <StyledOption value="">Selecione movimentação</StyledOption>
            <StyledOption value="Entrada">Entrada</StyledOption>
            <StyledOption value="Despesa">Despesa</StyledOption>
          </StyledSelect>
        </StyledDiv>

        <StyledDiv>
          <ButtonInsert />
        </StyledDiv>
      </StyledForm>

      <div>
        {extractList.length > 0 ? (
          <BalanceValue extractList={extractList} />
        ) : (
          <p></p>
        )}
      </div>
    </StyledSection>
  );
};
