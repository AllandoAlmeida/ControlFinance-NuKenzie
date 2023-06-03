import { StyleTitleBold3, StyledHeadCaption } from "../../styles/Typography";
import { StyledBalance, StyledBalanceLi } from "./sytle";

export const BalanceValue = ({ extractList }) => {
  const expensesValue = extractList.reduce((acc, extract) => {
    const extractValue = parseFloat(extract.value);
    if (extract.category === "Despesa") {
      return acc - extractValue;
    } else {
      return acc + extractValue;
    }
  }, 0);

  const formattedValue = expensesValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const displayValue = expensesValue < 0 ? `(${formattedValue})` : formattedValue;
  const colorStyle = expensesValue < 0 ? { color: "red" } : {};

  return (
    <StyledBalance>
      <StyledBalanceLi className="title">
        <StyleTitleBold3 className="title">
          Valor Total:{" "}
        </StyleTitleBold3>
        <StyleTitleBold3>
          <span style={colorStyle}>
            {displayValue}
          </span>
        </StyleTitleBold3>
      </StyledBalanceLi>
      <StyledHeadCaption>O valor se refere ao saldo.</StyledHeadCaption>
    </StyledBalance>
  );
};
