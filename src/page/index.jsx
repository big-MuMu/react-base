import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Parent from './context/parent';
import Hooks from './hooks';
import { Route, Link } from '../route';

const { Header, Sider, Content } = Layout;



const Index = (props) => {

  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} className="left-layout">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['redux']}>
            <Menu.Item key="redux" icon={<UserOutlined />}>
               {/* <a href="redux">Redux</a> */}
               <Link to="redux">Redux</Link>
            </Menu.Item>
            <Menu.Item key="hooks" icon={<VideoCameraOutlined />}>
               {/* <a href="hooks">Hooks</a> */}
               <Link to="hooks">Hooks</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => {
                setCollapsed(!collapsed);
              },
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route path='/hooks' component={Hooks}></Route>
            <Route path='/redux' component={Parent}></Route>
          </Content>
        </Layout>
      </Layout>
  )
}

export default Index;



// const Index = createClass({
//   render() {
//     return <div>index</div>
//   }
// });
// const Home = createClass({
//   render() {
//     return <div>home</div>
//   }
// });
// const About = createClass({
//   render() {
//     return <div>about</div>
//   }
// });

// const App = createClass({
//   getInitialState() {
//     return {
//       route: window.location.hash.slice(1)
//     }
//   },

//   componentDidMount() {
//     window.addEventListener('hashchange', () => {
//       console.log(222, window.location.hash)
//       this.setState({
//         route: window.location.hash.slice(1)
//       })
//     })
//     window.addEventListener('popstate', () => {
//       console.log('hhh', window.location)
//     })
//   },

//   render() {
//     let Child = Home;
//     switch (this.state.route) {
//       case 'index':
//         Child = Parent;
//         break;

//       case 'about':
//         Child = Son;
//         break;

//       case 'hooks':
//         Child = Hooks;
//         break;
    
//       default:
//         Child = Todo;
//         break;
//     }

//     return (
//       <>
//         <div>
//           <a href="#index">index</a>
//           <a href="#about">about</a>
//           <a href="#hooks">hooks</a>
//         </div>
//         <Child />
//       </>
//     )
//   }

// })