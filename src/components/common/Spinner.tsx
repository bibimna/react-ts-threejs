import React from 'react';
import styled from 'styled-components';
import { FadeLoader } from 'react-spinners';

interface Props {
  isTransparent?: boolean;
  show?: boolean;
}

const StyledSpinner = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, ${(props) => { return ((props.isTransparent) ? 0 : 0.3); }});
  z-index: 1099;
  display: ${(props) => props.show ? 'block' : 'none'};
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
`;

export const Spinner = ({ isTransparent, show }: Props) => {
  return (
    <StyledSpinner show={show} isTransparent={isTransparent}>
      <LoaderWrapper>
        <FadeLoader loading={show} color='#0A8EE0' />
      </LoaderWrapper>
    </StyledSpinner>
  )
}