import './carousel-arrow.css';
import { ReactComponent as LeftIcon } from './chevron-left-solid.svg';
import { ReactComponent as RightIcon } from './chevron-right-solid.svg';

type Props = {
  variant: 'left' | 'right';
  onClick: () => void;
};

export const CarouselArrow = ({ variant, onClick }: Props) => {
  const Icon = variant === 'left' ? LeftIcon : RightIcon;

  return (
    <button className="carousel-arrow" onClick={onClick}>
      <Icon className="carousel-arrow-icon" />
    </button>
  );
};
