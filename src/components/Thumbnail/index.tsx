import React from 'react';

import { MovieImage, Container } from './styles';

const SIZES = {
  NORMAL: {
    height: 150,
    width: 100,
  },
  LARGE: {
    height: 400,
    width: 390,
  },
};

type Props = {
  imageUri: string | undefined;
  size?: 'LARGE' | 'NORMAL';
};

export function Thumbnail({ imageUri, size = 'NORMAL' }: Props) {
  const { width, height } = SIZES[size];
  return (
    <Container>
      <MovieImage
      resizeMode='cover'
      source={{ uri: imageUri }}
      style={{ width: width, height: height}}
      />
    </Container>
  );
}
