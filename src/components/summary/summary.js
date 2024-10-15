import SummaryDetails from './sammaryDetails'
import SummaryTitle from './summaryTitle'

// 此組件默認的props
Summary.defaultProps = {
  title: '默認標題',
  data: [
    {
      summary: '默認標題1',
      details: '默認內容1'
    },
    {
      summary: '默認標題2',
      details: '默認內容2'
    },
    {
      summary: '默認標題3',
      details: '默認內容3'
    }
  ]
}

export default function Summary ({ titleComponents, detailsComponents: DetailsComponent, iconComponents, data, title, icon }) {
  return (
    <>
      <div className="w-1/3 rounded-xl bg-[#def2ff] p-5 text-[#003385] ">
        {titleComponents || <SummaryTitle>{title}</SummaryTitle>}
        {data.map((item, index) => (
          DetailsComponent
            ? <DetailsComponent key={index} data={item} icon={icon} iconComponents={iconComponents} />
            : <SummaryDetails key={index} data={item} icon={icon} iconComponents={iconComponents} />
        ))}
      </div>
    </>
  )
}
