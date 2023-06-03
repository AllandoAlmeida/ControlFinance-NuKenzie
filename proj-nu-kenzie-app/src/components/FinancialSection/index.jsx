import { StyleTitleBold3 } from "../../styles/Typography";
import { EmptyList } from "../fragments/EmptyList";
import { FinancialList } from "./FinancialList";
import { StyledList, StyledSection } from "./style";

export const FinancialSection = ({ extractList, setExtractList }) => {
  return (
    <StyledSection>
      <StyleTitleBold3>Resumo financeiro</StyleTitleBold3>
      <StyledList />
      {extractList.length > 0 ? (
        <FinancialList extractList={extractList} setExtractList={setExtractList} />
      ) : (
        <EmptyList />
      )}
    </StyledSection>
  );
};
