package tr.com.ias.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tr.com.ias.entity.ComponentType;
import tr.com.ias.entity.iasHtmlButton;
import tr.com.ias.entity.iasHtmlComponent;
import tr.com.ias.entity.iasHtmlLabel;
import tr.com.ias.entity.iasHtmlTextField;

@RestController
@RequestMapping(value = "/component")
public class ComponentController {

	@Autowired
	private ServletContext servletContext;

	@RequestMapping(value = "/generate", method = RequestMethod.GET)
	public ResponseEntity<?> generateRandomComponent() {
		int componentCount = ThreadLocalRandom.current().nextInt(1, 10 + 1);
		List<iasHtmlComponent> componentList = new ArrayList<>();
		generateComponent(componentCount, componentList);
		return new ResponseEntity<>(componentList, HttpStatus.OK);
	}

	@RequestMapping(value = "/context", method = RequestMethod.GET)
	public ResponseEntity<?> getContextPath() {
		return new ResponseEntity<>(servletContext.getServerInfo(), HttpStatus.OK);
	}

	public void generateComponent(int componentCount, List<iasHtmlComponent> componentList) {

		for (Integer i = 0; i < componentCount; i++) {
			int componentType = ThreadLocalRandom.current().nextInt(0, ComponentType.values().length + 1);
			iasHtmlComponent component;
			switch (componentType) {
			case 0:
				component = generateLabel(i);
				break;
			case 1:
				component = generateTextField(i);
				break;
			case 2:
				component = generateButton(i);
				break;
			default:
				component = generateLabel(i);
				break;
			}

			componentList.add(component);
		}
	}

	public iasHtmlComponent generateLabel(Integer i) {
		Integer labelIdentifier = i;
		labelIdentifier++;
		iasHtmlLabel label = new iasHtmlLabel();
		label.setCaption("Label " + labelIdentifier);
		label.setText("Label text " + labelIdentifier);
		label.setX(labelIdentifier * 1);
		label.setZ(labelIdentifier * 1);
		label.setY(labelIdentifier * 1);
		return label;
	}

	public iasHtmlComponent generateButton(int i) {
		Integer buttonIdentifier = i;
		buttonIdentifier++;
		iasHtmlButton button = new iasHtmlButton();
		button.setCaption("Button " + buttonIdentifier);
		button.setButtonColor("Button color" + buttonIdentifier);
		button.setX(buttonIdentifier * 2);
		button.setZ(buttonIdentifier * 2);
		button.setY(buttonIdentifier * 2);
		return button;
	}

	public iasHtmlComponent generateTextField(int i) {
		Integer textFieldIdentifier = i;
		textFieldIdentifier++;
		iasHtmlTextField textField = new iasHtmlTextField();
		textField.setCaption("TextField " + textFieldIdentifier);
		textField.setTextArea("TextArea " + textFieldIdentifier);
		textField.setX(textFieldIdentifier * 3);
		textField.setZ(textFieldIdentifier * 3);
		textField.setY(textFieldIdentifier * 3);
		return textField;
	}

}
