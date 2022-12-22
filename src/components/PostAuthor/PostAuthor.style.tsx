import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 16px 0;
`;

export const Avatar = styled.img`
    background-image: url(https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-1/271872926_356649429795360_6980448622900589886_n.jpg?stp=dst-jpg_p480x480&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=NE5rnPvC-EwAX9FHvkV&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfCp_x9_Vj8Ggy97rXD7XU5sRh20f-8hfBEXGpoF--4c7g&oe=63A8F57C);
    background-size: cover;
    background-position: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 3px solid white;
`;

export const Details = styled.div`
    margin-left: 5px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const Name = styled.div`
    font-size: 15px;
    font-variation-settings: 'wdth' 120, 'wght' 600;
`;

export const Scope = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    color: rgb(101, 103, 107);
    font-variation-settings: 'wdth' 120, 'wght' 300;

    i {
        font-size: 16px;
        color: rgb(120, 120, 120);
        position: relative;
        top: 2px;
    }
`;

export const Time = styled.div``;

export const Divider = styled.div`
    margin: 0 3px;
    font-size: 16px;
`;

export const Icon = styled.div``;
