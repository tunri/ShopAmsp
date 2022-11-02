import React, { FC, useState } from "react";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	ImageWithZoom,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Todo: Solo soporta Imagenes
type Props = {
	items?: any[];
};

// <Image src={c} key={"image-item-" + idx}  alt="Picture of the author" layout="fill" />
const CarouselProducts: FC<Props> = ({ items = [] }) => {
	const [slide, setSlide] = useState(0);

	return (
		<Box>
			<Grid container spacing={2}>
				<Grid container item xs={4}>
					<ImageList cols={1} rowHeight={100}>
						{items.map((item, idx) => (
							<ImageListItem key={'image-list-item-' + idx} sx={{ cursor: 'pointer'}} onClick={() => setSlide(idx)}>
								<img
									src={`${item}`}
									srcSet={`${item}`}
									alt={'image'}
									loading="lazy"
								/>
							</ImageListItem>
						))}
					</ImageList>
					{/* {items.map((c, idx) => (
						<Grid key={"image-item-" + idx} item>
							<img className="" src={c} alt="Picture of the author" />
						</Grid>
					))} */}
				</Grid>
				<Grid item xs={8}>
					<CarouselProvider
						visibleSlides={1}
						naturalSlideWidth={100}
						naturalSlideHeight={125}
						totalSlides={items.length}
						currentSlide={slide}
						step={1}
					>
						<Slider>
							{items.map((c, idx) => (
								<Slide index={idx} key={`media-${idx}`}>
									<ImageWithZoom src={c} />
								</Slide>
							))}
						</Slider>
						{/* <ButtonBack>Back</ButtonBack>
						<ButtonNext>Next</ButtonNext> */}
					</CarouselProvider>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CarouselProducts;
