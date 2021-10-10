import styled from 'styled-components';

export const HeaderBar = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: space-between;
    top: 0;
    background-image: linear-gradient(to bottom right, rgb(235, 76, 171), 
        rgb(227, 77, 171), 
        rgb(218, 78, 170), 
        rgb(210, 80, 170), 
        rgb(202, 81, 170), 
        rgb(193, 82, 170), 
        rgb(185, 83, 169),
        rgb(176, 84, 169), 
        rgb(168, 85, 169), 
        rgb(160, 87, 169), 
        rgb(151, 88, 168), 
        rgb(143, 89, 168));
        ;
    `
export const HeaderContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: #fffc;
    `
export const HeaderButton = styled.button`
	border:1px solid transparent;
    background-color: transparent;
    color: #fffc;
	display:inline-block;
	cursor:pointer;
    padding:6px 17px;
	text-decoration:none;
	text-shadow:0px 1px 0px;
    transition: 0.6s linear all;
    &:hover {
        box-shadow: 0 50px 5px rgba(0, 0, 0, 0.15) inset;
      }
    `
