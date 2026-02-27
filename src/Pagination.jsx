export default function Pagination({ pageNum, showPrevButton, showNextButton, changePageNum }) {



  return (
    <div>
      {showPrevButton && <button onClick={() => changePageNum(pageNum - 1)}>&lt;</button>}
      <button>{pageNum}</button>
      {showNextButton && <button onClick={() => changePageNum(pageNum + 1)}>&gt;</button>}
    </div>
  )
}
