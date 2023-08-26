import styled from "styled-components";

export const Container = styled.div`
  padding: 2.4rem ${({ theme, lrPadding }) => lrPadding};
  display: flex;
  justify-content: space-between;
  gap: 6.4rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.LIGHT_GREY};

  > #inSearch {
    flex-grow: 1;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  > div:first-child {
    display: flex;
    gap: 0.4rem;
    flex-direction: column;
    align-items: end;
  }

  > div:last-child {
    width: 6.4rem;
    height: 6.4rem;
    background-image: url(${({ theme, userImgUrl }) => userImgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
    border-radius: 50%;
  }

  #username {
    justify-self: end;
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
    font-size: 1.6rem;
  }

  #textButton {
    justify-self: start;
  }
`;
