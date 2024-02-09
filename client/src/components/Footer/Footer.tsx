"use client";
import React from 'react';
import styles from './Footer.module.scss';

export type FooterProps = {
	// types...
}

const Footer: React.FC<FooterProps>  = ({}) => {
	return (
		<div className={styles.footer}>
 			Footer works!
 		</div>
	);
};

export default Footer;
