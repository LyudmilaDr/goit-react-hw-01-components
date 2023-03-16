import PropTypes from 'prop-types';

export const Statistics  = ({title, id, label, percentage}) => {
    return(
<section class="statistics">
  <h2 class="title">{title}</h2>

  <ul>
    <li key = {id} class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  </ul>
</section>
)}

Statistics.propTypes = {
    title:PropTypes.string,
    stats:PropTypes.arrayOf(
        PropTypes.shape({
            label:PropTypes.string.isRequired,
            id:PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,   
        })   
    ).isRequired,
}
