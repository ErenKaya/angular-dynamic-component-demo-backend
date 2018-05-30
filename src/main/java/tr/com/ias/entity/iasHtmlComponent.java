package tr.com.ias.entity;

public abstract class iasHtmlComponent {

	protected String caption;
	protected int x;
	protected int z;
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

	public int getZ() {
		return z;
	}

	public void setZ(int z) {
		this.z = z;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

}
