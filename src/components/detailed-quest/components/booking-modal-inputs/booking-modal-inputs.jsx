import * as S from './booking-modal-inputs.styled';

export const fieldTypes = {
  bookingName: {
    name: 'booking-name',
    labelText: 'Ваше Имя',
    type: 'text',
    placeholder: 'Имя',
  },
  bookingPhone: {
    name: 'booking-phone',
    labelText: 'Контактный телефон',
    type: 'tel',
    placeholder: 'Телефон',
  },
  bookingPeople: {
    name: 'booking-people',
    labelText: 'Количество участников',
    type: 'number',
    placeholder: 'Количество участников',
  },
};

const BookingModalInputs = ({
  stateBookingModal,
  onHandleFieldOnChange
}) => (
  Object.keys(fieldTypes).map((key) => {
    const {
      name,
      labelText,
      type,
      placeholder
    } = fieldTypes[key];
    const field = stateBookingModal[name];

    return (
      <S.BookingField key={key}>
        <S.BookingLabel htmlFor={name}>
          {labelText}
        </S.BookingLabel>
        <S.ErrorSpan>
          {!field.isValid && stateBookingModal.formTouched && field.errorText}
        </S.ErrorSpan>
        <S.BookingInput
          error={!field.isValid && stateBookingModal.formTouched}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required
          value={field.value}
          onChange={onHandleFieldOnChange}
        />
      </S.BookingField>
    );
  })
);

export default BookingModalInputs;
