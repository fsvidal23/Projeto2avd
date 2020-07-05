import styled, {css} from 'styled-components';
import { shade } from 'polished';


interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1 `
  font-size: 48px;
  color: goldenrod;
  max-width: 450px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

input {
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0px 0px 5px;
  color: #3a3a3a;
  border: 2px solid #fff;

  ${(props) => props.hasError &&
  css`
    border-color: red;
  `}

  &::placeholder {
    color: #a8a8b3;
  }
}

button {
  width: 210px;
  height: 70px;
  background: goldenrod;
  color: #fff;
  border: 0;
  border-radius: 0px 5px 5px 0px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2,'goldenrod')};
  }
}


`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
      background: ${shade(0.2,'#FACC2E')};
      p {
        font-size: 18px;
        color: white;
        margin-top: 4px;
      }

      svg {
        margin-left: auto;
        color: white;
      }
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

    }

    svg {
        margin-left: auto;
        color: goldenrod;
      }
  }
`;

export const Error = styled.span`
  display: block;
  color: red;
  margin-top: 8px;
`;