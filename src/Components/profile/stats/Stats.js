import PropTypes from 'prop-types';
import { StatsStyled } from './StatsStyled';

const Stats = ({ stats }) => {
  return (
    <StatsStyled>
      <li className="item">
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className="item">
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className="item">
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </StatsStyled>
  );
};

export default Stats;

Stats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
