import React, { useEffect, useMemo } from 'react';

type ElementProps = JSX.IntrinsicElements['img'];
type Props = Omit<ElementProps, 'src'> & {
  url: string,
  loader: (url: string) => Promise<string>
};

export const LoadedImage: React.FC<Props> = ({ url, loader, ...restProps }) => {
  const [loadedSrc, setLoadedSrc] = React.useState<string|null>(null);

  useEffect(() => {
    setLoadedSrc(null);
    loader(url).then((src) => {
      setLoadedSrc(src);
    });
  }, [url])

  return (
    <>
      {loadedSrc ? (
        <img {...restProps} src={loadedSrc} />
      ) : (
        null
      )}
    </>
  );
};