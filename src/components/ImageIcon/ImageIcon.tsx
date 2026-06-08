export default function ImageIcon({
  src,
  alt,
  to,
  className,
}: {
  src: string;
  alt: string;
  to?: string;
  className?: string;
}) {
  const prepareSrc = () => {
    const pathToIcon = new URL(`../../assets/${src}`, import.meta.url).href;
    return pathToIcon;
  };

  return (
    <a href={to}>
      <img src={prepareSrc()} alt={alt} className={className} />
    </a>
  );
}
