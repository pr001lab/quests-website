import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { AppRoutes, AppPages, ContactData } from '../../../const';
import { getActiveKey } from '../../../utils/utils';

const logoSize = {
  width: 134,
  height: 50,
};

const Header = () => {
  const {pathname} = useLocation();
  const activeKey = getActiveKey(AppPages, pathname);
  const [activeLink, setActiveLink] = useState(activeKey);

  const getHrefPhone = (ContactData.phone.phoneNumber).replace(/[^\d.]/ig, '');

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink to={AppRoutes.Home}>
          <S.Image
            src={logo}
            alt={`Логотип ${ContactData.companiesName}`}
            width={logoSize.width}
            height={logoSize.height}
          />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>
            {Object.keys(AppPages).map((key) => (
              <S.LinkItem key={key}>
                <S.Link
                  $isActiveLink={activeLink === key}
                  to={AppPages[key].route}
                  onClick={() => setActiveLink(key)}>
                  {key}
                </S.Link>
              </S.LinkItem>
            ))}
          </S.Links>
        </S.Navigation>
        <S.Phone
          href={`tel:${getHrefPhone}`}
        >
          {ContactData.phone.phoneNumber}
        </S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
