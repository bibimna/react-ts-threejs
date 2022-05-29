import React from 'react';
import { ThreeWidget } from '../widget/components/three'
import { WidgetType } from "../../types/widget";

function Dashboard() {
  return (
    <div className='dashboard'>
      <ThreeWidget type={WidgetType.EARTH} />
    </div>
  )
}

export { Dashboard }