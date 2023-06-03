import { StyleTitleBold3, StyledHeadCaption } from "../../../styles/Typography";
import { StyledButtonDelete } from "../../../styles/button";
import { StyledCard } from "./style";

export const FinancialCard = ({ extract, removeExtractFromList }) => {
  const formattedValue = extract.value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const borderleftStyle =
    extract.category === "Despesa"
      ? { borderLeft: "4px solid var(--color-grey-2)" }
      : { borderLeft: "4px solid var(--color-color-secondary)" };

  return (
    <StyledCard style={borderleftStyle}>
      <div className="ContentLeft">
        <StyleTitleBold3>{extract.title}</StyleTitleBold3>
        <StyledHeadCaption>{extract.category}</StyledHeadCaption>
      </div>
      <div className="ContentRight">
        <StyledHeadCaption>{formattedValue}</StyledHeadCaption>
        <StyledButtonDelete onClick={() => removeExtractFromList(extract.id)}>
          Excluir
        </StyledButtonDelete>
      </div>
    </StyledCard>
  );
};
