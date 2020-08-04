import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props =>
    props.type === 'danger' ? 'crimson' : props.type === 'warning' ? '#F5E309' : '#BADA55'};
  color: white;
  border: none;
  border-radius: 15px;
  width: 300px
  height: 140px;
  font-size: 2rem;
  margin: 0 0.8rem;
  transition: 1s ease all;
  a{
    color: #fff
    text-decoration: none;
  }
  &:hover{
    transform: scale(1.2);
  }
  &:focus{
    outline:none;
  }
  &::before{
    content: '';
    width: 30px;
    height: 30px;
    background: crimson;
    position: absolute;
  }
`

export const Card = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #ece;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 45%;
    background-color: peru;
  }
  @media screen and (min-width: 1040px) {
    width: 33%;
    background-color: beige;
  }
`
