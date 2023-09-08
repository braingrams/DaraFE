import { Star, Rating } from '@smastrom/react-rating';

const CustomRating = ({ value }: any) => {
  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#F59E0B',
    inactiveStrokeColor: '#F59E0B',
    itemStrokeWidth: 2,
    activeStrokeColor: 'transparent',
  };
  return (
    <Rating
      style={{ maxWidth: 100 }}
      value={value || 0}
      readOnly
      itemStyles={myStyles}
    />
  );
};

export default CustomRating;
