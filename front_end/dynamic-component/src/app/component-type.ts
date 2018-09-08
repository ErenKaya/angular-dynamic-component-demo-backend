import { Enum } from './enum';
export class ComponentType extends Enum<number> {
  public static readonly LABEL = new Enum(0);
  public static readonly TEXTFIELD= new Enum(1);
  public static readonly BUTTON = new Enum(2);
}