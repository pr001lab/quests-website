import styled from 'styled-components';
import { Button } from 'components/common/common';

const Main = styled.main`
  max-width: 680px;
  margin-top: 149px;
  margin-bottom: 149px;
  margin-left: 43.92vw;
`;

const PageContentWrapper = styled.div`
  z-index: 2;
  position: relative;
`;

const PageHeading = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 29px;
`;

const PageTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: ${({ theme }) => theme.font.large};
  line-height: 95%;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  overflow-wrap: anywhere;
`;

const PageSubtitle = styled.p`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  padding-left: 7px;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 144%;
  color: ${({ theme }) => theme.color.tangerine};
`;

const PageDescription = styled.div`
  max-width: 556px;
  padding-left: 32px;
`;

const QuestDescription = styled.p`
  margin: 0;
  margin-bottom: 45px;
  padding: 0;

  line-height: 150%;
  color: ${({ theme }) => theme.color.whisper2};
  letter-spacing: 0.013em;
`;

const QuestBookingBtn = styled(Button).attrs({ type: 'button' })`
  margin-left: 2px;
`;

export {
  Main,
  PageContentWrapper,
  PageHeading,
  PageTitle,
  PageSubtitle,
  PageDescription,
  QuestDescription,
  QuestBookingBtn,
};
