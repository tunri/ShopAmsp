import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

export const ImageProduct = ({ alt, ...props }: ImageProps) => {
	const [src, setSrc] = useState(props.src);

	return (
		<Image
			{...props}
			src={src}
			alt={alt}
			onError={() => setSrc("/public/images/no-image.png")}
			layout="fill"
			// placeholder="blur"
			// blurDataURL="/assets/image-placeholder.png"
		/>
	);
};

export default ImageProduct;
