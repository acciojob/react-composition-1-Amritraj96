export default function Tab(){
  funtion dis1(){
    <p>This is the content for Tab 1</p>
  }
  funtion dis2(){
    <p>This is the content for Tab 1</p>
  }
  funtion dis3(){
    <p>This is the content for Tab 1</p>
  }
  return (
    <>
      <ul>
        <li onClick={dis1}>Tab 1</li>
        <li onClick={dis2}>Tab 2</li>
        <li onClick={dis3}>Tab 3</li>
        
      </ul>
      
    </>
  )
}
