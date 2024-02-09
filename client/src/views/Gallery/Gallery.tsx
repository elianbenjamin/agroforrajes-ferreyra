"use client";
import React from 'react';
import styles from './Gallery.module.scss';

export type GalleryProps = {
	// types...
}

const Gallery: React.FC<GalleryProps>  = ({}) => {
	return (
		<div className={styles.gallery}>
 			Gallery works!
 		</div>
	);
};

export default Gallery;
