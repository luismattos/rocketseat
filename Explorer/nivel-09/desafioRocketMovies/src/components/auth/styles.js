import styled from "styled-components";
import movieImg from "../../assets/movie-background.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Image = styled.div`
  width: 60%;
  background-image: url(${movieImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 40%;
  display: flex;

  justify-content: center;
  align-items: center;

  > div {
    width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  #description {
    color: ${({ theme }) => theme.COLOR.LIGHT_GREY};
    font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.REGULAR};
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.COLOR.WHITE};
  font-family: ${({ theme }) => theme.FONT.FAMILY.ROBOTOSLAB};
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.MEDIUM};
`;

export const Children = styled.div``;
