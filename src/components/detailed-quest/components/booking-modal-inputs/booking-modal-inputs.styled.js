import styled, { css } from 'styled-components';

const BookingField = styled.p`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
  padding-right: 16px;

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

const BookingLabel = styled.label`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.whisper2};
`;

const ErrorSpan = styled.span`
  position: absolute;
  font-size: 12px;
  color: rgba(255, 0, 0, 1);
  margin: 0;
  margin-top: 18px;
`;

const BookingInput = styled.input`
  padding-top: 17px;
  padding-right: 24px;
  padding-bottom: 18px;
  padding-left: 23px;

  font-family: inherit;

  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  ${(props) => props.error && css`
    outline: 1px solid rgba(255, 0, 0, 1);
  `}

  border-radius: 3px;

  &::placeholder {
    color: ${({ theme }) => theme.color.whisper};
    opacity: 0.64;
  }

  &:focus,
  &:hover {
    opacity: 0.8;
  }
`;

export {
  BookingField,
  BookingLabel,
  ErrorSpan,
  BookingInput,
};
