import type { ImgHTMLAttributes } from 'react';
import fallbackImage from '@assets/fallback-image.png';

type ImageProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  hasShadow?: boolean;
  hasBorder?: boolean;
  hasPadding?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function CustomImage({
  src = fallbackImage,
  alt = 'generic image',
  width = 'w-[300px]',
  height = 'h-[400px]',
  hasShadow = false,
  hasBorder = true,
  hasPadding = false,
  className = '',
  ...props
}: ImageProps) {
  const defaultStyle = `object-cover object-center will-change-transform ${hasBorder ? 'border-black border-4' : ''}`;
  const shadowStyle = hasShadow ? 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : '';
  const paddingStyle = hasPadding ? 'p-[1px]' : '';

  return (
    <img
      src={src || fallbackImage}
      alt={alt}
      style={{ imageRendering: 'smooth' }}
      className={`${defaultStyle} ${className} ${shadowStyle} ${paddingStyle} ${width} ${height}`.trim()}
      {...props}
    />
  );
}
