import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { WidgetType } from "../../../../types/widget";
import { Spinner } from "../../../common/Spinner";
import Interface3D from "./interface/Interface3D";

interface Props {
  type: WidgetType
}

const Container = styled.div`
  position : absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index : 0;

  .widget3DContainer {
    width: 100%;
    height: 100%;
  }

  .widget3DContainer > canvas {
    height: 1020px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

function ThreeWidget({ type }: Props) {
  const [isInit, setIsInit] = useState(false);
  const [loading, setLoading] = useState(false);

  const container = useRef(null);

  // 3D 컨테이너 생성 (설정 완성 전까지 기본 지구본으로 생성)
  useEffect(() => {
    if(container.current) new Interface3D(container.current, type, {})
  }, [container.current])

  return (
    <div className='widget'>
      <Spinner show={loading}/>
      <div className='widget_container' ref={container} />
    </div>
  )
}

export { ThreeWidget }