import styled from "styled-components";
import mainStyleColors from "../../style/themeColors";
import { categoryColor } from "../../utils/CategoryColor";

export const TrelloStyled = styled.div`
  .continer {
    display: flex;
    gap: 1rem;
  }
  h2 {
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  .column {
    display: flex;
    flex-direction: column;
    width: 250px;
    max-height: 90px;
    border-radius: 6px 6px 0 0;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  .column-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
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
