import styled from "styled-components";

export const MainLayout = styled.div`
      height : 100%;
      display : flex;
      gap:1.5rem;
      @media (min-width: 320px) and (max-width: 1024px) {
            gap: 0;
      }
`;

export const InnerLayout = styled.div`
         padding : 2rem 1.5rem;
         width : 100%
`;