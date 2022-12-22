import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
`;

export const Button = styled.button`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    outline: none;
    color: rgba(101, 103, 107, 0.768);
    padding: 7px 0;
    font-size: 15px;
    font-variation-settings: 'wdth' 100, 'wght' 450;
    transition: background-color 0.09s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: rgba(101, 103, 107, 0.1);
    }
`;

export const IconWrapper = styled.div`
    margin-right: 8px;
`;

export const Icon = styled.i``;

export const Text = styled.div``;
