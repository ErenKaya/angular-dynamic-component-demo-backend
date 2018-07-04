package tr.com.ias.entity;

public class iasHtmlTextField extends iasHtmlComponent {

	private String textArea;

	public iasHtmlTextField() {
		super();
		componentType = ComponentType.TEXTFIELD;
	}

	public iasHtmlTextField(String textArea) {
		this();
		this.textArea = textArea;
	}

	public String getTextArea() {
		return textArea;
	}

	public void setTextArea(String textArea) {
		this.textArea = textArea;
	}
}
