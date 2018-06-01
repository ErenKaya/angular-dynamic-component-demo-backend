import { ComponentType } from './component-type';

export abstract class iasHtmlComponent  {
    protected caption: string;
    protected x: number;
    protected y: number;
    protected z: number;
    protected componentType: ComponentType;
}