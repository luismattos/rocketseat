import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > header {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLOR.PINK_ST};
    height: 16rem;
    padding: 6.4rem 12rem;
    align-items: center;

    > div:first-child {
      align-self: start;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
    padding: 16rem 12rem;

    > div:last-child {
      display: flex;
      flex-direction: column;
    }

    > div {
      width: 32rem;
    }
  }
`;

export const ProfileImg = styled.div`
  position: relative;

  > div:first-child {
    width: 16rem;
    height: 16rem;
    background-image: url(${({ theme, userImgUrl }) => userImgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5000px;
  }

  > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 4.8rem;
    height: 4.8rem;
    right: 0;
    bottom: 0.8rem;
    border-radius: 5000px;
    background-color: ${({ theme }) => theme.COLOR.PINK};
    > svg {
      font-size: 2.4rem;
      fill: ${({ theme }) => theme.COLOR.GREY};
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

// background-image: url(${({ theme, userImgUrl }) => userImgUrl});
