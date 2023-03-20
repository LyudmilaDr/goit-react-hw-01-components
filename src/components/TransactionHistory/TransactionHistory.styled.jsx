import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
border: 1px solid gray;
width: 640px;
box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16),
        1px 4px 4px rgba(0, 0, 0, 0.06),
        1px 1px 1px rgba(0, 0, 0, 0.12);
        margin-bottom: 34px;
font-family: 'Roboto';`

export const TransactionHistoryTr = styled.tr`
&:nth-child(odd) {
    background: white;
  }
  &:nth-child(even) {
    background: #D9D9D9;
  }`
 