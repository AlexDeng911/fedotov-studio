import { IGalleryImage } from './igallery-image';

export interface IGallery {
	_id: string;
	name: string;
	subCategory: string;
	images: IGalleryImage[];
}
