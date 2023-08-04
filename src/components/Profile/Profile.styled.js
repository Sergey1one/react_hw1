import styled from 'styled-components';

export const ProfileStyle = styled.div`
//  width:600px;
// height:500px;
border-radius:16px;
 
  
`;
export const UserName = styled.p`
font-size: 38px; 
margin:0px;
font-weight:bold`;

export const AvatarImg=styled.img` 
  max-height: 312px;
  border-radius: 50%;
  background: #D9D9D9;
  border: 0px solid #FFFFFF;`

export const Description = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;`

export const Tag = styled.p`
margin:5px;
color:grey;
font-size:28px`

export const LocationP = styled.p`
margin-top:5px;
text-align:center;
color:grey;
font-size:28px`

export const Stats = styled.ul`
list-style-type:none;
border-radius:8px;
background-color:grey;
margin:0px;
padding:0px;
display:flex`

export const StatItem = styled.li`

display:flex;
flex-direction:column;
align-items:center;
width:calc(100%/3)
`
export const Label = styled.span`
font-size:20px
`
export const Quantity = styled.span`
font-size:20px;
font-weight:bold`
