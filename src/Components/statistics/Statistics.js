import Stats from './stats/Stats';
import PropTypes from 'prop-types';

const Statistics = ({ title, statisticalData }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <Stats statisticalData={statisticalData} />
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
