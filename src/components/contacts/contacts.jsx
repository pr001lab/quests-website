import { useLocation } from 'react-router-dom';
import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from './contacts.styled';
import Map from '../map/map';
import { AppPages, ContactData } from '../../const';
import { getActiveKey } from '../../utils/utils';

const Contacts = () => {
  const {pathname} = useLocation();
  const activeKey = getActiveKey(AppPages, pathname);
  const {
    slogan,
    address,
    operatingMode,
    phone,
    email,
    mapImage,
    location
  } = ContactData;

  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>
              {AppPages[activeKey].title}
            </PageTitle>
            <PageSubtext>
              {slogan}
            </PageSubtext>
          </S.PageHeading>

          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>
                {address.title}
              </S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>
                  {address.city},
                  <br />
                  {address.street}
                </S.ContactAddress>
              </S.ContactValue>

              <S.ContactTitle>
                {operatingMode.title}
              </S.ContactTitle>
              <S.ContactValue>
                {operatingMode.workingDays}, {operatingMode.openingHours}
              </S.ContactValue>

              <S.ContactTitle>
                {phone.title}
              </S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={`tel:${phone.phoneNumber}`}>
                  {phone.phoneNumber}
                </S.ContactLink>
              </S.ContactValue>

              <S.ContactTitle>{email.title}</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href={`mailto:${email.emailAddress}`}>
                  {email.emailAddress}
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>

            <S.ContactsMap>
              <S.ContactsMapImage
                src={contactsMap}
                alt={mapImage.mapImageAlt}
                width={mapImage.width}
                height={mapImage.height}
              />
              <Map location={location} />
            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
};

export default Contacts;
