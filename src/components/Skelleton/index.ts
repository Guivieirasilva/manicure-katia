import React from 'react';
import styled, { keyframes } from 'styled-components';

interface SkeletonProps {
  height: string;
  width: string;
}

const SkeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }

  100% {
    background-position: 200px 0;
  }
`;

export const Skeleton = styled.div<SkeletonProps>`
  display: inline-block;
  border-radius: 10px;
  margin-top: 10px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: linear-gradient(90deg, rgba(242, 242, 242, 0.8) 25%, rgba(230, 230, 230, 0.8) 37%, rgba(242, 242, 242, 0.8) 63%);
  background-size: 200px 100%;
  animation: ${SkeletonAnimation} 1.5s ease-in-out infinite;
`;

