import type { ImgHTMLAttributes } from 'react';
import fallbackImage from '../../assets/fallback-image.png';

type ImageProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  hasShadow?: boolean;
  hasBorder?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function Image({
  src = fallbackImage,
  alt = 'generic image',
  width = '300px',
  height = '400px',
  hasShadow = false,
  hasBorder = true,
  className = '',
  ...props
}: ImageProps) {
  const defaultStyle = `object-cover object-center will-change-transform ${hasBorder ? 'border-black border-4' : ''}`;
  const shadowStyle = hasShadow ? 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : '';

  return (
    <img
      src={src || fallbackImage}
      alt={alt}
      style={{ width, height, imageRendering: 'smooth' }}
      className={`${defaultStyle} ${shadowStyle} ${className}`.trim()}
      {...props}
    />
  );
}
