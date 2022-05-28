import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { WidgetType } from "../../../../types/widget";
import {Spinner} from "../../../common/Spinner";

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
    position: absolute;
    left: 0;
    top: 0;
  }
`;

function ThreeWidget({ type }: Props) {
  const [isInit, setIsInit] = useState(false);
  const [loading, setLoading] = useState(false);

  const creteWidgetContainer = () => {
    switch (type) {
      case WidgetType.EARTH:

    }
  }

  // 3D 컨테이너 생성
  useEffect(() => {

  }, [])

  return (
    <Container>
      <Spinner show={loading}/>
      <div className='widget3DContainer' ref='container' />
    </Container>
  )
}