import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

// 排版用的元件，全部都使用
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

// 頁面元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
// withRouter 高階元件樣式(HOC) 範例
import ProductBaby from './pages/ProductBaby'

function App() {
  // 會員認証範例
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <>
        {/* logo+標頭+導覽列 */}
        <MyNavbar />
        {/* 主內容區 */}
        <MainContent>
          <h1>Link/to</h1>
          <Link to="/">首頁</Link>
          <Link to="/about">關於我們</Link>
          <Link to="/login">會員登入頁面</Link>
          <Link to="/product/baby">商品-嬰兒</Link>

          <hr />
          {/* 以下為匹配路徑對用頁面用的路由列表 */}
          <Switch>
            <Route path="/about">
              <About isAuth={isAuth} />
            </Route>
            <Route path="/login">
              <Login
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              />
            </Route>

            <Route path="/product/baby">
              <ProductBaby />
            </Route>

            <Route exact path="/">
              <Home isAuth={isAuth} />
            </Route>
          </Switch>
          {/* end 路由表 */}
        </MainContent>
        {/* 頁尾 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
