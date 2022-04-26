import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrdersLoading } from '../../../../store/data/selectors';
import { postOrdersAction } from '../../../../store/data/api-actions';
import { postOrdersIdle } from '../../../../store/data/actions';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { BookingModalCheckbox } from '../components';
import { BookingModalInputs } from '../components';
import { StatusLoading, BooleanVariants } from '../../../../const';
import { fieldTypes as fieldInputs } from '../booking-modal-inputs/booking-modal-inputs';
import { fieldTypes as fieldCheckbox } from '../booking-modal-checkbox/booking-modal-checkbox';

const OnSubmitFields = {
  Name: 'name',
  PeopleCount: 'peopleCount',
  Phone: 'phone',
  IsLegal: 'isLegal',
};

const modalProps = {
  modalId: 'booking-form',
  modalCloseLabelText: 'Закрыть окно',
  modalTitle: 'Оставить заявку',
  modalButtonSubmitType: 'submit',
  modalButtonSubmitText: 'Отправить заявку',
  modalButtonSubmitTextPost: 'Отправка заявки...',
};

const FeatureTypes = {
  ModalClose: 'modalClose',
};

const iconSizes = {
  [FeatureTypes.ModalClose]: {
    width: 16,
    height: 16,
  },
};

const BookingModal = ({onHandleCloseBtn}) => {
  const {
    bookingName,
    bookingPhone,
    bookingPeople
  } = fieldInputs;
  const [formState, setFormState] = useState({
    formTouched: BooleanVariants.FALSE,
    [bookingName.name]: {
      value: '',
      isValid: BooleanVariants.FALSE,
      errorText: 'Имя должно быть не менее 1-го символа!',
      regex: /.+$/,
    },
    [bookingPeople.name]: {
      value: '',
      isValid: BooleanVariants.FALSE,
      errorText: 'Количество участников должно быть больше 0!',
      regex: /^[1-9]\d*$/,
    },
    [bookingPhone.name]: {
      value: '',
      isValid: BooleanVariants.FALSE,
      errorText: 'Номер телефона должен быть не менее 10 цифр!',
      regex: /[0-9]{10}/,
    },
    [bookingPhone.name]: {
      value: '',
      isValid: BooleanVariants.FALSE,
      errorText: 'Номер телефона должен быть не менее 10 цифр!',
      regex: /[0-9]{10}/,
    },
    [fieldCheckbox.name]: {
      value: BooleanVariants.FALSE,
      isValid: BooleanVariants.FALSE,
      errorText: 'Чтоб продолжить, установите этот флажок!',
      regex: /true/,
    },
  });
  const {
    modalId,
    modalCloseLabelText,
    modalTitle,
    modalButtonSubmitType,
    modalButtonSubmitText,
    modalButtonSubmitTextPost
  } = modalProps;
  const {width, height} = iconSizes[FeatureTypes.ModalClose];
  const dispatch = useDispatch();
  const ordersLoading = useSelector(selectOrdersLoading);

  const handleFieldOnChange = (evt) => {
    let fieldValue;
    const {name, checked, value} = evt.target;
    if (name === fieldCheckbox.name) {
      fieldValue = checked;
    } else {
      fieldValue = value;
    }
    const rule = formState[name].regex;
    const isValid = rule.test(fieldValue);

    setFormState({
      ...formState,
      formTouched: BooleanVariants.TRUE,
      [name]: {
        ...formState[name],
        value: fieldValue,
        isValid: isValid,
        touched: BooleanVariants.TRUE,
      },
    });
  };

  const handleFormOnSubmit = (evt) => {
    evt.preventDefault();

    setFormState({
      ...formState,
      formTouched: BooleanVariants.TRUE,
    });

    dispatch(postOrdersAction({
      [OnSubmitFields.Name]: formState[bookingName.name].value,
      [OnSubmitFields.PeopleCount]: Number(formState[bookingPeople.name].value),
      [OnSubmitFields.Phone]: formState[bookingPhone.name].value,
      [OnSubmitFields.IsLegal]: BooleanVariants.TRUE
    }));
  };

  useEffect(() => {
    if (ordersLoading === StatusLoading.Succeeded) {
      onHandleCloseBtn();
    }
  }, [ordersLoading, onHandleCloseBtn]);

  useEffect(() => () => {
    dispatch(postOrdersIdle());
  }, [dispatch]);

  const isNotValidFields = [
    formState[bookingName.name].isValid,
    formState[bookingPeople.name].isValid,
    formState[bookingPhone.name].isValid,
    formState[fieldCheckbox.name].isValid,
  ].includes(BooleanVariants.FALSE);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={() => onHandleCloseBtn()}
        >
          <IconClose width={width} height={height} />
          <S.ModalCloseLabel
          >
            {modalCloseLabelText}
          </S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>{modalTitle}</S.ModalTitle>
        <S.BookingForm
          id={modalId}
          onSubmit={handleFormOnSubmit}
        >
          <BookingModalInputs
            stateBookingModal={formState}
            onHandleFieldOnChange={handleFieldOnChange}
          />
          <S.BookingSubmit
            type={modalButtonSubmitType}
            disabled={(formState.formTouched &&
              isNotValidFields)
              || ordersLoading === StatusLoading.Loading
            }
          >
            {ordersLoading === StatusLoading.Loading
              ? modalButtonSubmitTextPost
              : modalButtonSubmitText}
          </S.BookingSubmit>
          <BookingModalCheckbox
            isValid={formState[fieldCheckbox.name].isValid}
            formTouched={formState.formTouched}
            value={formState[fieldCheckbox.name].value}
            onHandleFieldOnChange={handleFieldOnChange}
          />
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
