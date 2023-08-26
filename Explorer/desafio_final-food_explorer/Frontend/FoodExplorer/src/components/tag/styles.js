import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, editMode, isCreation }) => {
    if (editMode) {
      if (isCreation) {
        return "transparent";
      } else {
        return theme.COLOR.LIGHT_600;
      }
    } else {
      return theme.COLOR.DARK_100;
    }
  }};
  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;
  border: ${({ theme, editMode, isCreation }) => {
    if (editMode) {
      if (isCreation) {
        return `1px dashed ${theme.COLOR.LIGHT_500}`;
      }
    } else {
      return "none";
    }
  }};

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
  }

  #content {
    color: ${({ theme, editMode, isCreation }) => {
      if (editMode) {
        if (isCreation) {
          return theme.COLOR.LIGHT_500;
        }
      } else {
        return theme.COLOR.LIGHT_100;
      }
    }};
  }

  #icon {
    cursor: pointer;
    > svg {
      fill: ${({ theme, editMode, isCreation }) => {
        if (editMode) {
          if (isCreation) {
            return theme.COLOR.LIGHT_500;
          }
        } else {
          return theme.COLOR.LIGHT_100;
        }
      }};
    }
  }
`;
