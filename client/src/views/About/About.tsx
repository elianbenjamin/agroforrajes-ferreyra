"use client";
import React from 'react';
import styles from './about.module.scss';

export type AboutProps = {
	// types...
}

const About: React.FC<AboutProps>  = ({}) => {
	return (
		<div className={styles.about}>
 			About works!
 		</div>
	);
};

export default About;
