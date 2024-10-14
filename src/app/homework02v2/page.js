'use client' // 在瀏覽器進行渲染，可以使用hooks
import Summary from '@/components/summary/summaryLayout'

export default function Homework2 () {
  const data = [{
    summary: '小八',
    details: '一隻以貓咪為原型的角色，擁有藍色的「八字瀏海」，性格開朗、樂觀，並且非常健談，常常在漫畫中擔任解說角色。'
  }, {
    summary: '吉伊',
    details: '以白色倉鼠為原型，性格膽小害羞，但內心充滿愛與關懷，是漫畫中的主角之一。開心時，它會哼起歌來，並喜歡抱著自己的小熊玩偶入睡。'
  }, {
    summary: '烏薩奇',
    details: '是一隻兔子角色，以靈活的兔耳和強大的戰鬥力著稱。它充滿活力且搞怪，是故事中的解難擔當，總能在朋友遇到困難時出手相助。'
  }]

  return (
    <>
      <Summary title="吉伊卡哇" data={data} />
    </>
  )
}
