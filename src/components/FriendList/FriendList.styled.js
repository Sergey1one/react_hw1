import styled from 'styled-components';

export const FriendWrapper = styled.ul`
margin:0px;
margin-top:10px;
padding:0px;
display:flex`

export const FriendItem = styled.li`
display: grid;
grid-auto-columns:minmax(150px, auto);
justify-items: center;
`

export const OnlineStatus = styled.span`

display: block;
margin-top:5px;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: ${props=>props.status?`green`:`#c0c0c0`};
    `
export const FriendAvatar = styled.img`
width:80px;


`

export const FriendName = styled.p`
margin:0;
margin-top:10px;
font-size:30px`