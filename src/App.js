import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from './route';
import Index from './page/index';


const App = (props) => {
  // const [collapsed, setCollapsed] = useState(true);
  // var Child = Todo;
  // const handleClick = ({ key, item}) => {
  //       switch (key) {
  //         case 'index':
  //           Child = Parent;
  //           break;

  //         case 'redux':
  //           Child = Parent;
  //           break;

  //         case 'hooks':
  //           Child = Hooks;
  //           break;
        
  //         default:
  //           Child = Todo;
  //           break;
  //       }
  // }

  return (
    <BrowserRouter>
      {/* <Route path='/hooks' render={() => Hooks}></Route>
      <Route path='/redux' render={() => Parent}></Route> */}
      <Index />
    </BrowserRouter>
    // <Layout>
    //     <BrowserRouter>
    //         <Route path='/hooks' render={() => Hooks}></Route>
    //     </BrowserRouter>
    //     <Sider trigger={null} collapsible collapsed={collapsed} className="left-layout">
    //       <div className="logo" />
    //       <Menu theme="dark" mode="inline" defaultSelectedKeys={['redux']}>
    //         <Menu.Item key="redux" icon={<UserOutlined />}>
    //            <a href="redux">Redux</a>
    //         </Menu.Item>
    //         <Menu.Item key="hooks" icon={<VideoCameraOutlined />}>
    //            <a href="hooks">Hooks</a>
    //         </Menu.Item>
    //         <Menu.Item key="3" icon={<UploadOutlined />}>
    //           nav 3
    //         </Menu.Item>
    //       </Menu>
    //     </Sider>
    //     <Layout className="site-layout">
    //       <Header className="site-layout-background" style={{ padding: 0 }}>
    //         {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    //           className: 'trigger',
    //           onClick: () => {
    //             setCollapsed(!collapsed);
    //           },
    //         })}
    //       </Header>
    //       <Content
    //         className="site-layout-background"
    //         style={{
    //           margin: '24px 16px',
    //           padding: 24,
    //           minHeight: 280,
    //         }}
    //       >
    //         <Child />
    //       </Content>
    //     </Layout>
    //   </Layout>
  )
}

export default App;
