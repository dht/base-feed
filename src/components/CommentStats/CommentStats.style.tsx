import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    padding-left: 20px;
    height: 14px;
`;

export const Time = styled.div`
    flex: 1;
    color: rgb(101, 119, 134);
    font-size: 12px;
`;

export const Stats = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    position: relative;
    top: -5px;
    right: 10px;
    padding: 0 7px;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
`;
