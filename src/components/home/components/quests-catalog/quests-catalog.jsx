import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectQuests } from '../../../../store/data/selectors';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { AppRoutes, translationWords } from '../../../../const';
import { capitalizeFirstLetter } from '../../../../utils/utils';

const imageProps = {
  width: 344,
  height: 232,
  altText: 'квест',
};

const filters = {
  AllQuests: 'allQuests',
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  SciFi: 'sci-fi',
};

const getIconComponent = (filter) => {
  switch(filter) {
    case filters.AllQuests:
      return <IconAllQuests />;
    case filters.Adventures:
      return <IconAdventures />;
    case filters.Horror:
      return <IconHorrors />;
    case filters.Mystic:
      return <IconMystic />;
    case filters.Detective:
      return <IconDetective />;
    case filters.SciFi:
      return <IconScifi />;
    default:
      throw new Error(`Unknouwn oreder state: '${filter}'`);
  }
};

const setFilterQuests = (quests, filter) => quests.filter((quest) => quest.type === filter);

const QuestsCatalog = () => {
  const [filter, setFilter] = useState('allQuests');
  const quests = useSelector(selectQuests);
  const questsWithFilter = filter === filters.AllQuests
    ? quests
    : setFilterQuests(quests, filter);
  const { width, height, altText } = imageProps;

  return (
    <>
      <S.Tabs>
        {Object.keys(filters).map((key) => {
          const title = filters[key];
          return (
            <S.TabItem key={title}>
              <S.TabBtn
                isActive={filter === filters[key]}
                onClick={() => setFilter(filters[key])}
              >
                {getIconComponent(title)}
                <S.TabTitle>{(capitalizeFirstLetter(translationWords[title]))}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
          );
        })}
      </S.Tabs>

      <S.QuestsList>
        {questsWithFilter.map((quest) => (
          <S.QuestItem key={quest.id}>
            <S.QuestItemLink to={`${AppRoutes.DetailedQuest}/${quest.id}`}>
              <S.Quest>
                <S.QuestImage
                  src={quest.previewImg}
                  width={width}
                  height={height}
                  alt={`${altText} ${quest.title}`}
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {quest.peopleCount.join('-')} чел
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {translationWords[quest.level]}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        ))}
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
