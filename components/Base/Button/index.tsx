import styled from "styled-components";
 
const ButtonStyles = styled.button` 
    font-family: inherit,
    transition-duration: .1s;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.25rem;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    --tw-bg-opacity: 1;
    background-color: rgb(123 18 254 / var(--tw-bg-opacity));
    border-radius: 0.5rem;
    appearance: none;
    display: block;
    cursor: pointer;
    text-transform: none;
    margin: 0;
    border-width: 0;
`;
 
 
// const StyledButton = () => {
//   return (
//     <ButtonStyles>
//     </ButtonStyles>
//   )
// }

// export default StyledButton;
export default ButtonStyles;