import React from 'react'
// 高階元件樣式(HOC)，增強元件用的
import { withRouter } from 'react-router-dom'

function ProductBaby(props) {
  // 需經過高階元件後才能得到react-router的三大屬性值
  console.log(props)
  return (
    <>
      <h1>商品 - Baby 嬰兒</h1>
      {/* 由props.match.params可以得到網址參數值 */}
      商品編號：{props.match.params.id}
    </>
  )
}

// 輸出時加上高階元件(HOC)
export default withRouter(ProductBaby)
