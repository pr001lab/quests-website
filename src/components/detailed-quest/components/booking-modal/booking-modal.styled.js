import styled from 'styled-components';
import { Button } from 'components/common/common';

const BlockLayer = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.color.eclipse};
`;

const Modal = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;

  max-height: 100%;
  width: 480px;
  padding: 32px;
  padding-bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.color.nero2};
  transform: translateX(-50%) translateY(-50%);
  border-radius: 3px;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 29px;
  right: 22px;

  display: flex;
  padding: 10px;

  background: none;
  border: none;
  font: inherit;
  cursor: pointer;

  &:focus svg,
  &:hover svg {
    opacity: 0.5;
  }

  &:active svg {
    opacity: 0.3;
  }
`;

const ModalCloseLabel = styled.span.attrs({
  className: 'visually-hidden',
})``;

const ModalTitle = styled.h2`
  margin: 0;
  margin-bottom: 39px;
  padding: 0;

  font-size: ${({ theme }) => theme.font.formsHeading};
  line-height: 120%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const BookingSubmit = styled(Button)`
  align-self: center;
  margin-top: 55px;
  margin-bottom: 21px;
  padding-top: 15px;
  padding-right: 34px;
  padding-bottom: 16px;
  padding-left: 34px;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  background-color: ${({ theme }) => theme.color.pinkSwan};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
  &:disabled {
    pointer-events: none;
  }
`;

export {
  BlockLayer,
  Modal,
  ModalCloseBtn,
  ModalCloseLabel,
  ModalTitle,
  BookingForm,
  BookingSubmit,
};
