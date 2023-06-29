import { IGalleryImage } from './gallery-image.interface';

export interface IGallery {
	_id: string;
	name: string;
	subCategory: string;
	images: IGalleryImage[];
}
