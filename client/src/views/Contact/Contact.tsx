"use client";
import React from 'react';
import styles from './contact.module.scss';

export type ContactProps = {
	// types...
}

const Contact: React.FC<ContactProps>  = ({}) => {
	return (
		<div className={styles.contact}>
 			Contact works!
 		</div>
	);
};

export default Contact;
