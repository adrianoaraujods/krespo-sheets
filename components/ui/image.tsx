"use client";

import * as React from "react";
import NextImage from "next/image";

import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ImageProps extends React.ComponentProps<typeof NextImage> {
  fallbackImage?: string | StaticImport;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, fallbackImage = "", ...props }, ref) => {
    const [imageSrc, setImageSrc] = React.useState(src);

    return (
      <NextImage
        ref={ref}
        onError={() => setImageSrc(fallbackImage)}
        src={imageSrc}
        {...props}
      />
    );
  }
);
Image.displayName = "Image";

export { Image };
