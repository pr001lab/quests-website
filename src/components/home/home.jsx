import { useLocation } from 'react-router-dom';
import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import { AppPages, ContactData } from '../../const';

const HomePage = () => {
  const {pathname} = useLocation();
  const activeKey = Object
    .keys(AppPages).find((key) => AppPages[key].route === pathname);

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>{AppPages[activeKey].title}</PageTitle>
          <PageSubtext>{ContactData.slogan}</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
};

export default HomePage;
