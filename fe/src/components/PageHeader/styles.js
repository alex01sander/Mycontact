import styled from "styled-components";

export const Container = styled.header`
    a{
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration: none;
        font-weight:bold;
    }

    h1{
        font-size: 24px;
    }
`;
