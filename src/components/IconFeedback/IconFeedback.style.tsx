import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export const Icons = styled.div`
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 57px;
`;

export const IconWrapper = styled.div`
    margin-left: -4px;
    border: 2px solid white;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 0;

    &:nth-child(1) {
        left: 0;
        z-index: 9;
    }

    &:nth-child(2) {
        left: 18px;
        z-index: 8;
    }

    &:nth-child(3) {
        left: 36px;
        z-index: 7;
    }
`;
export const Icon = styled.img`
    width: 18px;
    height: 18px;
`;

export const Count = styled.div`
    color: rgb(137, 149, 159);
`;
