import styled from "styled-components";

export const  Container = styled.div`
    width: 630px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 8px;

    > Input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY};
        }
    }

    > svg {
            margin-left: 16px;
        }
`;