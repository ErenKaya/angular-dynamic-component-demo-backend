package tr.com.ias.entity;

public class iasHtmlButton extends iasHtmlComponent {

	private String buttonColor;

	public iasHtmlButton() {
		super();
		componentType = ComponentType.BUTTON;
	}

	public iasHtmlButton(String buttonColor) {
		this();
		
		this.buttonColor = buttonColor;
	}

	public String getButtonColor() {
		return buttonColor;
	}

	public void setButtonColor(String buttonColor) {
		this.buttonColor = buttonColor;
	}
}
