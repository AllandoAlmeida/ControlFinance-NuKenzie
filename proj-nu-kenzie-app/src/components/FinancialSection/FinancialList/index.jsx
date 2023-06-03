import { FinancialCard } from "../FinancialCard";
import { StyledList } from "../style";

FinancialCard

export const FinancialList = ({ extractList, setExtractList }) => {
  const removeExtractFromList = (extractId) => {
    setExtractList((extractList) =>
      extractList.filter((extract) => extract.id !== extractId)
    );
  };

  return (
    <StyledList cardCount={extractList.length}>
      {extractList.map((extract) => (
        <FinancialCard
          key={extract.id}
          extract={extract}
          removeExtractFromList={removeExtractFromList}
        />
      ))}
    </StyledList>
  );
};
