import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reselectQuestByIdCombo } from '../../store/data/selectors';
import { fetchQuestByIdAction } from '../../store/data/api-actions';
import { loadQuestByIdFailure } from '../../store/data/actions';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import Loader from '../loader/loader';
import { StatusLoading, translationWords } from '../../const';
import Page404 from 'components/page-404/page-404';

const QuestBookingBtnText = 'Забронировать';

const imageProps = {
  width: 1366,
  height: 768,
  altText: 'Квест',
};

const FeatureTypes = {
  Duration: 'duration',
  PeopleCount: 'peopleCount',
  Level: 'level',
};

const iconSizes = {
  [FeatureTypes.Duration]: {
    width: 20,
    height: 20,
  },
  [FeatureTypes.PeopleCount]: {
    width: 19,
    height: 24,
  },
  [FeatureTypes.Level]: {
    width: 24,
    height: 24,
  },
};

const getIconComponent = (feature) => {
  switch(feature) {
    case FeatureTypes.Duration: {
      const {width, height} = iconSizes[feature];
      return <IconClock width={width} height={height} />;
    }
    case FeatureTypes.PeopleCount: {
      const {width, height} = iconSizes[feature];
      return <IconPerson width={width} height={height} />;
    }
    case FeatureTypes.Level: {
      const {width, height} = iconSizes[feature];
      return <IconPuzzle width={width} height={height} />;
    }

    default:
      throw new Error(`Unknouwn oreder state: '${feature}'`);
  }
};

const FeatureContents = {
  [FeatureTypes.Duration]: (quest) => `${quest.duration} мин`,
  [FeatureTypes.PeopleCount]: (quest) => `${quest.peopleCount.join('-')} чел`,
  [FeatureTypes.Level]: (quest) => translationWords[quest.level],
};

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const {id: idUrl} = useParams();
  const dispatch = useDispatch();
  const {quest, questLoading, questLoadingError} = useSelector(reselectQuestByIdCombo);
  const { width, height, altText } = imageProps;

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const handleCloseBtn = () => {
    setIsBookingModalOpened(false);
  };

  const handleKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      setIsBookingModalOpened(false);
    }
  };

  useEffect(() => {
    dispatch(fetchQuestByIdAction(idUrl));

    return () => {
      dispatch(loadQuestByIdFailure(null));
    };
  }, [dispatch, idUrl]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  if (questLoadingError) {
    return <Page404 />;
  }

  if (
    [StatusLoading.Idle, StatusLoading.Loading].includes(questLoading)
    || quest === null
  ) {
    return (
      <Loader />
    );
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${quest.coverImg}`}
          width={width}
          height={height}
          alt={`${altText} ${quest.title}`}
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{translationWords[quest.type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              {Object.keys(FeatureTypes).map((key) => (
                <S.FeaturesItem key={key}>
                  {getIconComponent(FeatureTypes[key])}
                  <S.FeatureTitle>
                    {FeatureContents[FeatureTypes[key]](quest)}
                  </S.FeatureTitle>
                </S.FeaturesItem>
              ))}
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn
              onClick={onBookingBtnClick}
            >
              {QuestBookingBtnText}
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>
        {
          isBookingModalOpened &&
          <BookingModal onHandleCloseBtn={handleCloseBtn} />
        }
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
