import ReactLoaderSpiner from 'react-loader-spinner';
import * as S from './loader.styled';

export const loaderType = {
  WATCH: 'Watch',
  AUDIO: 'Audio',
  BALLTRIANGLE: 'BallTriangle',
  BARS: 'Bars',
  CIRCLES: 'Circles',
  GRID: 'Grid',
  HEARTS: 'Hearts',
  OVAL: 'Oval',
  PUFF: 'Puff',
  RINGS: 'Rings',
  TAILSPIN: 'TailSpin',
  THREEDOTS: 'ThreeDots',
  REVOLVINGDOT: 'RevolvingDot',
  TRIANGLE: 'Triangle',
  PLANE: 'Plane',
  MULTATINGDOTS: 'MutatingDots',
  CRADLELOADER: 'CradleLoader',
};

const loadersSize = {
  'type': loaderType.WATCH,
  'color': '#1A1A1A',
  'height': '150px',
  'width': '150px',
};

function Loader() {
  return (
    <S.LoaderDiv>
      <ReactLoaderSpiner
        type={loadersSize['type']}
        color={loadersSize['color']}
        height={loadersSize['height']}
        width={loadersSize['width']}
      />
    </S.LoaderDiv>
  );
}

export default Loader;
