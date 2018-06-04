package tr.com.ias.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

	@RequestMapping(value = "/generate", method = RequestMethod.GET)
	@CrossOrigin
	public ResponseEntity<?> generateRandomComponent() {
		int componentCount = ThreadLocalRandom.current().nextInt(1, 10 + 1);
		List<iasHtmlComponent> componentList = new ArrayList<>();
		generateComponent(componentCount, componentList);
		return new ResponseEntity<>(componentList, HttpStatus.OK);
	}

	public void generateComponent(int componentCount, List<iasHtmlComponent> componentList) {

		for (Integer i = 0; i < componentCount; i++) {
			int componentType = ThreadLocalRandom.current().nextInt(0, ComponentType.values().length + 1);
			iasHtmlComponent component;
			Integer labelIdentifier = i;
			switch (componentType) {
			case 0:
				component = generateLabel(labelIdentifier);
				break;
			case 1:
				component = generateTextField(labelIdentifier);
				break;
			case 2:
				component = generateButton(labelIdentifier);
				break;
			default:
				component = generateLabel(labelIdentifier);
				break;
			}

			componentList.add(component);
		}
	}

	public iasHtmlLabel generateLabel(Integer labelIdentifier) {
		labelIdentifier++;
		iasHtmlLabel label = new iasHtmlLabel();
		label.setCaption("Label " + labelIdentifier);
		label.setText("Label text " + labelIdentifier);
		label.setX(labelIdentifier * 1);
		label.setZ(labelIdentifier * 1);
		label.setY(labelIdentifier * 1);
		label.setComponentType(ComponentType.LABEL);
		return label;
	}

	public iasHtmlButton generateButton(Integer buttonIdentifier) {
		buttonIdentifier++;
		iasHtmlButton button = new iasHtmlButton();
		button.setCaption("Button " + buttonIdentifier);
		button.setButtonColor("Button color" + buttonIdentifier);
		button.setX(buttonIdentifier * 2);
		button.setZ(buttonIdentifier * 2);
		button.setY(buttonIdentifier * 2);
		button.setComponentType(ComponentType.BUTTON);
		return button;
	}

	public iasHtmlTextField generateTextField(Integer textFieldIdentifier) {
		textFieldIdentifier++;
		iasHtmlTextField textField = new iasHtmlTextField();
		textField.setCaption("TextField " + textFieldIdentifier);
		textField.setTextArea("TextField1 " + textFieldIdentifier);
		textField.setX(textFieldIdentifier * 3);
		textField.setZ(textFieldIdentifier * 3);
		textField.setY(textFieldIdentifier * 3);
		textField.setComponentType(ComponentType.TEXTFIELD);
		return textField;
	}

}
