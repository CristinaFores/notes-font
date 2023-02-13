import styled from "styled-components";
import mainStyleColors from "../../style/themeColors";
import { categoryColor } from "../../utils/CategoryColor";

export const TrelloStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1104px;

  .continer {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  h2 {
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  .column {
    display: flex;

    height: min-content;
    border-radius: 6px 6px 6px 6px;
    align-content: space-between;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  .column-items {
    border-radius: 6px 6px 0 0;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  h5 {
    font-size: 1rem;
  }
  a {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.colors.primary.light};
    border-radius: 0px 0px 6px 6px;
    position: relative;
    align-items: center;
    height: 40px;
    &:hover {
      background-color: ${(props) => props.theme.colors.button.hover};
      border-radius: 6px;
      cursor: pointer;
    }
  }
`;

export const grid = 8;

export const getItemStyle = (
  isDragging: boolean,
  draggableStyle: any,
  category: string
) => ({
  userSelect: "none",

  margin: `0 0 ${grid}px 0`,
  borderRadius: "9px",
  background: isDragging
    ? mainStyleColors.colors.draggable.base
    : categoryColor(category),
  ...draggableStyle,
});

export const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "#ebc8fe" : "white",
  padding: grid,
});
