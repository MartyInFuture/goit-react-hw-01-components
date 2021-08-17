import PropTypes from 'prop-types';

const Stats = ({ statisticalData }) => {
  return (
    <ul className="stat-list">
      {statisticalData.map((el) => (
        <li key={el.id} className="item">
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}</span>
        </li>
      ))}
    </ul>
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
