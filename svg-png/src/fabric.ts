import { fabric } from 'fabric';
import { promisify } from 'util';
import { Image, IImageOptions } from 'fabric/fabric-impl';
import { Format } from './types';

export const fabricImageFromUrl = promisify(function (url: string, imgOptions: IImageOptions, callback: (err: NodeJS.ErrnoException | null, data: Image) => void): void {
  fabric.Image.fromURL(url, (image) => {
    callback(null, image);
  }, imgOptions);
});

export async function fabricImageFromData(data: any, format: Format): Promise<Image> {
  return await fabricImageFromUrl(`data:${mimeTypes[format]};base64,${Base64.encode(data)}`, {});
}

export const mimeTypes = {
  'svg': 'image/svg+xml',
  png: 'image/png',
  jpeg: 'image/jpeg'
};
