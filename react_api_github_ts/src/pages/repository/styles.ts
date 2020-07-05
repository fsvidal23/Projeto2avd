import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    transition: 0.2s;
    background: goldenrod;
    padding: 5px;
    border-radius: 10px;

    &:hover {
    color: goldenrod;
    background: white;

    svg {
    margin-right: 4px;
    color: goldenrod;
  }
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  border-radius: 5px 5px 5px 5px;
  color: white;
  border: 2px solid #fff;;
  border-radius: 20px;

  header {
    display: flex;
    align-items: center;


    img{
      width: 250px;
      height: 250px;
      border-radius: 20px;
    }

    div {
      margin-left: 100px;
      background: goldenrod;
      border-radius: 10px;
      padding: 15px;

      strong{
        font-size: 36px;
        color: white;
      }

      p {
        font-size: 18px;
        color: white;
        margin-top: 4px;

      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    background: goldenrod;
    border-radius: 10px;

    li {
      margin-left: 10px;

      & + li{
        margin-left: 70px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: white;
        ;
      }

      span {
        display: block;
        margin-top: 4px;
        color: white;
      }
    }
  }
`;

