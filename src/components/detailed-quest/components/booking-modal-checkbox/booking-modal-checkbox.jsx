import * as S from './booking-modal-checkbox.styled';

export const fieldTypes = {
  name: 'booking-legal',
  type: 'checkbox',
  className: 'checkbox-label',
  labelText: 'Я согласен с ',
  labelLink: '#',
  labelLinkText: 'правилами обработки персональных данных и пользовательским соглашением',
  errorText: 'Чтоб продолжить, установите этот флажок!'
};

const BookingModalCheckbox = ({
  isValid,
  formTouched,
  value,
  onHandleFieldOnChange
}) => {
  const {
    name,
    type,
    className,
    labelText,
    labelLink,
    labelLinkText
  } = fieldTypes;

  return (
    <S.BookingCheckboxWrapper
      error={!isValid && formTouched && fieldTypes.errorText}
    >
      <S.ErrorSpan>
        {!isValid && formTouched && fieldTypes.errorText}
      </S.ErrorSpan>
      <S.BookingCheckboxInput
        type={type}
        id={name}
        name={name}
        checked={value}
        onChange={onHandleFieldOnChange}
      />
      <S.BookingCheckboxLabel
        className={className}
        htmlFor={name}
      >
        <S.BookingCheckboxText>
          {labelText}
          <S.BookingLegalLink href={labelLink}>
            {labelLinkText}
          </S.BookingLegalLink>
        </S.BookingCheckboxText>
      </S.BookingCheckboxLabel>
    </S.BookingCheckboxWrapper>
  );
};

export default BookingModalCheckbox;
