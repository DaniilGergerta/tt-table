import { useCallback, useEffect, useState } from 'react';
import type { FC, MouseEvent } from 'react';
import { IProduct } from 'src/controller/types';

import './styles.scss';

interface ProductCardProps {
	product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const {
		title,
		description,
		price,
		thumbnail,
		rating,
		stock,
		category,
		brand,
		images,
	} = product;

	const [mainImage, setMainImage] = useState<IProduct['thumbnail']>();

	useEffect(() => {
		setMainImage(thumbnail);
	}, [thumbnail]);

	const handleImageChange = useCallback((e: MouseEvent<HTMLImageElement>) => {
		setMainImage(e.currentTarget.src);
	}, []);

	return (
		<div className='product-card'>
			<div className='product-card__details-container'>
				<div className='product-card__details'>
					<p>{`Category: ${category}`}</p>
				</div>
				<div className='product-card__details'>
					<p>{`Brand: ${brand}`}</p>
				</div>
				<div className='product-card__details'>
					<p>{`Name: ${title}`}</p>
				</div>
				<div className='product-card__details'>
					<p>{`Price: ${price}`}</p>
				</div>
				<div className='product-card__details'>
					<p>{`Rating: ${rating}`}</p>
				</div>
				<div className='product-card__details'>
					<p>{`Stock: ${stock}`}</p>
				</div>
			</div>

			<div className='product-card__img-container'>
				<div className='product-card__container'>
					<img src={mainImage} alt={title} />
					<div className='product-card__details'>
						<p>{`Description: ${description}`}</p>
					</div>
				</div>
				<div className='product-card__details-container'>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							className='product-card__img'
							onClick={handleImageChange}
							alt={title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
