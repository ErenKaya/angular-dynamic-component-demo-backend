import { ComponentType } from './component-type';

export abstract class iasHtmlComponent {
    protected _caption: string;
    protected _x: number;
    protected _y: number;
    protected _z: number;
    protected _componentType: ComponentType;

    get x(): number {
        return this._x;
    }
    set x(theX: number) {
        this._x = theX;
    }
    get y(): number {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }
    get z(): number {
        return this._z;
    }

    set z(z: number) {
        this._z = z;
    }
    get caption(): string {
        return this._caption;
    }

    set caption(caption: string) {
        this._caption = caption;
    }
    get componentType(): ComponentType {
        return this._componentType;
    }

    set componentType(componentType: ComponentType) {
        this.componentType = componentType;
    }

}