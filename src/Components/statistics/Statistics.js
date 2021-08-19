import Stats from './stats/Stats';
import PropTypes from 'prop-types';
import { StatsStyled } from './StatsStyled';

const Statistics = ({ title, statisticalData }) => {
  return (
    <StatsStyled>
      <h2 className="title">{title || ''}</h2>
      <Stats statisticalData={statisticalData} />
    </StatsStyled>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
