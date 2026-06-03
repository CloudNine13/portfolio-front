import type { ImgHTMLAttributes } from 'react';
import fallbackImage from '../../assets/fallback-image.png';

type ImageProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  hasShadow?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function Image({
  src = fallbackImage,
  alt = 'generic image',
  width = '350px',
  height = '350px',
  hasShadow = false,
  className = '',
  ...props
}: ImageProps) {
  const defaultStyle = `object-cover border-black border-4`;
  const shadowStyle = hasShadow ? 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : '';

  return (
    <img
      src={src || fallbackImage}
      alt={alt}
      className={`${defaultStyle} ${shadowStyle} ${className}`.trim()}
      width={width}
      height={height}
      {...props}
    />
  );
}
