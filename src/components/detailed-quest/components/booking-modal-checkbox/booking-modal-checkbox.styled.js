import styled, {css} from 'styled-components';
import IconTick from 'assets/img/icon-tick.svg';

const BookingCheckboxWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  ${(props) => props.error && css`
    outline: 1px solid rgba(255, 0, 0, 1);
  `}
`;

const ErrorSpan = styled.span`
  position: absolute;
  font-size: 12px;
  color: rgba(255, 0, 0, 1);
  margin: 0;
  margin-top: -20px;
`;

const BookingCheckboxLabel = styled.label`
  display: flex;
  position: relative;
  padding-left: 26px;

  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 3px;
    left: 2px;

    width: 16px;
    height: 16px;

    opacity: 0.4;
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.color.tangerine};
    border-radius: 4px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

const BookingCheckboxInput = styled.input.attrs({
  className: 'visually-hidden',
})`
  top: 20px;
  left: 10px;

  &:checked ~ .checkbox-label::after {
    content: '';

    background-image: url(${IconTick});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:focus ~ .checkbox-label {
    outline: 2px solid #4d90fe;
    outline-offset: 3px;
    opacity: 0.8;
  }

  &:active ~ .checkbox-label {
    opacity: 0.6;
  }
`;

const BookingCheckboxText = styled.span`
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;
  color: ${({ theme }) => theme.color.whisper2};
`;

const BookingLegalLink = styled.a`
  text-decoration: underline;
`;

export {
  BookingCheckboxWrapper,
  ErrorSpan,
  BookingCheckboxLabel,
  BookingCheckboxInput,
  BookingCheckboxText,
  BookingLegalLink,
};
