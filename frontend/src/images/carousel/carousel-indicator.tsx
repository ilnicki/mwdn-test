import './carousel-indicator.css';
import { ReactComponent as DotIcon } from './circle-solid.svg';

const rangeTo = (length: number): number[] => Array.from(Array(length).keys());

type Props = {
  current: number;
  total: number;
  onSelect: (value: number) => void;
};

export const CarouselIndicator = ({ current, total, onSelect }: Props) => {
  return (
    <div className="carousel-indicator">
      {rangeTo(total).map((index) => (
        <DotIcon
          key={index}
          className={`carousel-indicator-dot ${
            index === current ? 'carousel-indicator-dot-active' : ''
          }`}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};
