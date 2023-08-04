import styled from 'styled-components';


export const Title = styled.h2`
font-size:45px;
color: grey;
margin-top:25px;
margin-bottom:0px;
text-align:center;
`

export const StatList = styled.ul`
display:flex;
margin:15px;
padding:0px;
list-style-type:none;
:first-of-type {border-radius: 12px 0 0 12px};
:last-child {border-radius: 0 12px 12px 0}
`

export const StatItem = styled.li`
display:grid;
gap:5px;
justify-items:center;
padding:20px;
width:100px`

export const Label = styled.span`
font-size: 25px;
font-weight:bold`

export const Percentage = styled.span`
font-size:20px;
font-weight:bold;
`
