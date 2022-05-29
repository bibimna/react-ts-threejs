import React, { useState } from 'react';
import { WidgetType } from "../../types/widget";

function WidgetSetting() {
  const [selectedWidgetType, setSelectedWidgetType] = useState(WidgetType.EARTH);

  function onSelectWidget(e: any) {
    setSelectedWidgetType(e.target.value)
  }

  return (
    <div className='setting'>
      <header className='setting_header'>
        <div className='setting_header_title'> 추가할 위젯 선택 </div>
        <select className='setting_header_select' onChange={onSelectWidget}>
          <option value={WidgetType.EARTH}>지구본</option>
          <option value={WidgetType.SPHERE}>구</option>
          <option value={WidgetType.TEXT}>텍스트</option>
          <option value={WidgetType.CLOCK}>시계</option>
        </select>
      </header>
      <footer className='setting_footer'>
        <button type='button' className='btn_add'> 추가 </button>
      </footer>
    </div>
  )
}


export { WidgetSetting }