import React from 'react';
import { Dashboard } from "../components/dashboard";
import { WidgetSetting } from "../components/setting";

function Dashboards() {
  return (
    <div className='content'>
      <Dashboard />
      <WidgetSetting />
    </div>
  )
}

export { Dashboards }