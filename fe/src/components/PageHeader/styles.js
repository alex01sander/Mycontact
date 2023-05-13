import styled from "styled-components";

export const Container = styled.header`
    a{
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration: none;
        font-weight:bold;
    }

    h1{
        font-size: 24px;
    }
`;
