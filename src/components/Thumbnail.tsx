import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

// utils

export const wrapText = (
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) => {
  const words = text.split('');
  let line = '';

  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n];
    let metrics = context.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n];
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  context.fillText(line, x, y);
};

export const drawText = (canvas: HTMLCanvasElement | null, text: string, width: number) => {
  if (!canvas) return;

  const ctx = (canvas as HTMLCanvasElement).getContext('2d');

  if (!ctx) return;

  ctx.fillStyle = 'white';
  if (text.length > 21) {
    ctx.font = '1.1rem Calibri';
    wrapText(ctx, text, 10, 45, width * 0.45, 30);
  } else {
    ctx.font = '1.3rem Calibri';
    wrapText(ctx, text, 10, 50, width * 0.45, 30);
  }
};

const drawImage = (
  canvas: HTMLCanvasElement | null,
  imageURL: string,
  text: string,
  width: number,
) => {
  if (!canvas) return;

  const newImage = new Image();
  newImage.src = imageURL;

  newImage.onload = () => {
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');

    if (!ctx) return;

    canvas.height = canvas.width * (newImage.height / newImage.width);

    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);
    drawText(canvas, text, width);
  };
};

// component

interface Props {
  backgroundImageUrl: string;
  width: number;
  height: number;
  content: string;
}

const Thumbnail = ({ backgroundImageUrl, width, height, content }: Props) => {
  const contentRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    drawImage(contentRef.current, backgroundImageUrl, content, width);
  }, []);

  return (
    <canvas
      width={width}
      height={height}
      style={{ border: '1px solid #cccccc' }}
      ref={contentRef}
    />
  );
};

export default Thumbnail;
