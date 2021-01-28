import { connect } from "superagent";
import { getAction } from '../../store/actions/the-one-actions';

const mapDispatchToProps = { getAction }

function Characters(props) {
console.log(props);

}


const mapStateToProps = state => {
  return {
    categories: state.Switchboard.characters,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Characters);