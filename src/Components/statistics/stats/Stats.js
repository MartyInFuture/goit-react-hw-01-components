import PropTypes from 'prop-types';
import { StatsStyled } from './StatsStyled';

const Stats = ({ statisticalData }) => {
  const randomColor = () => {
    const color = [];
    for (let i = 0; i < 3; i++) {
      color.push(parseInt(Math.random() * 256));
    }
    return color;
  };

  return (
    <StatsStyled>
      {statisticalData.map(({ id, label, percentage }) => (
        <li
          key={id}
          style={{ backgroundColor: `rgb(${randomColor()})` }}
          className="item"
        >
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      ))}
    </StatsStyled>
  );
};

export default Stats;

Stats.propTypes = {
  statisticalData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
