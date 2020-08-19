import { connect } from 'react-redux'
import { setCesium } from '../action/index'
import Menu from '../../components/menu/Menu'


const mapStateToProps = (state, props) => {
  return {
    cesiumViewer:  state.cesiumViewer
  }
}

const mapDispatchToProps = (dispatch, actions) => {
  return {
    setCesium: (viewer) => {
      dispatch(setCesium(viewer))
    }
  }
}
const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuContainer;
