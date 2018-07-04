package tr.com.ias.entity;

public class iasHtmlLabel extends iasHtmlComponent {

	private String text;

	public iasHtmlLabel() {
		super();
		componentType = ComponentType.LABEL;
	}

	public iasHtmlLabel(String text) {
		this();
		this.text = text;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

}
