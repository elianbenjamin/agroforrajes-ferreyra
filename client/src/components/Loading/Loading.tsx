"use client";
import React from 'react';
import styles from './loading.module.scss';

export type LoadingProps = {
	// types...
}

const Loading: React.FC<LoadingProps>  = ({}) => {
	return (
		<div className={styles.loading}>
 			Loading works!
 		</div>
	);
};

export default Loading;
