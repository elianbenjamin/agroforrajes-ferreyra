"use client";
import React from 'react';
import styles from './Service.module.scss';

export type ServiceProps = {
	// types...
}

const Service: React.FC<ServiceProps>  = ({}) => {
	return (
		<div className={styles.Service} id='service'>
 			Service works!
 		</div>
	);
};

export default Service;
