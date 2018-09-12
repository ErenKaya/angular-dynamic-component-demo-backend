package kim.eren.entity;

public abstract class iasHtmlComponent {

	protected String caption;
	protected int x;
	protected int y;
	protected ComponentType componentType;

	protected iasHtmlComponent() {

	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public ComponentType getComponentType() {
		return componentType;
	}

	public void setComponentType(ComponentType componentType) {
		this.componentType = componentType;
	}
	
	

}
