"use client";
import React from 'react';
import styles from './Carousel.module.scss';

export type CarouselProps = {
	// types...
}

const Carousel: React.FC<CarouselProps>  = ({}) => {
	return (
		<div className={styles.carousel}>
 			Carousel works!
 		</div>
	);
};

export default Carousel;
