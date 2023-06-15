import { IGalleryImage } from './gallery-image';

export interface IGallery {
	_id: string;
	name: string;
	subCategory: string;
	images: IGalleryImage[];
}
