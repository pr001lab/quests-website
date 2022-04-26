import {useHistory} from 'react-router-dom';
import { MainLayout } from 'components/common/common';
import { AppRoutes } from 'const';
import * as S from './page-404.styled';

const pageContent = {
  pageTitle: 'Такой страницы нет',
  pageSubtitle: 'Ошибка 404',
  textLink: 'перейти на главную страницу',
};

const Page404 = () => {
  const history = useHistory();

  return (
    <MainLayout>
      <S.Main>
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{pageContent.pageTitle}</S.PageTitle>
            <S.PageSubtitle>{pageContent.pageSubtitle}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.QuestDescription>
            </S.QuestDescription>
            <S.QuestBookingBtn
              onClick={() => history.push(AppRoutes.Home)}
            >
              {pageContent.textLink}
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>
      </S.Main>
    </MainLayout>
  );
};

export default Page404;
