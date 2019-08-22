import React, { useRef, useMemo } from 'react';
import { List } from './style';
import { useParams } from 'hooks';
import NavItem from './nav-item';

function NavList(props) {
  const params = useRef('');

  params.current = useParams().type;


  return (
    <List className="nav-list">
      {
        (
          props.list || []).map(item => <NavItem key={item.id} {...item} current={params.current}></NavItem>
        )
      }
    </List>
  )
}

// class NavList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       unlisten: null,
//       activeNav: '',
//       list: props.list || []
//     }
//   }

//   componentWillMount() {
//     const { history } = this.props;

//     this.setState({
//       activeNav:  history.location.pathname.replace(/\/timeline\//, '')
//     })

//     this.unlisten = history.listen(() => {
//       this.setState({
//         activeNav:  history.location.pathname.replace(/\/timeline\//, '')
//       })
//     })
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // console.log(nextProps, nextState)
//     if (nextProps.list.length !== nextState.list.length) {
//       return true
//     } else {
//       return false
//     }

//   }

//   componentWillUnmount() {
//     this.unlisten();
//   }

//   isActiveNav = (name) => {
//     return this.state.activeNav === name 
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <List className="nav-list">
//         {
//           (this.state.list || []).map(item => (
//             <Item key={item.id} >
//               <Link style={{ color: this.isActiveNav(item.title) ? '#007fff': '#909090'  }}  to={ '/timeline/' + item.title}>
//                 {item.name}
//               </Link>
//             </Item>
//             )
//           )
//         }
//       </List>
//     )
//   }
// }


export default NavList;