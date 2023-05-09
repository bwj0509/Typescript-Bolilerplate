import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    // 적용하고 싶은 글로벌 스타일 적용 가능!
  }

  a{
    color : black;
    
    &:hover{
      color : black;
    }
  }
`;

export default GlobalStyle;
