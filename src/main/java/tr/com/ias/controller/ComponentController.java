package tr.com.ias.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tr.com.ias.entity.ComponentType;
import tr.com.ias.entity.iasHtmlButton;
import tr.com.ias.entity.iasHtmlComponent;
import tr.com.ias.entity.iasHtmlLabel;
import tr.com.ias.entity.iasHtmlTextField;
import tr.com.ias.entity.table.iasHtmlTable;
import tr.com.ias.entity.table.iasHtmlTableColumn;
import tr.com.ias.entity.table.iasHtmlTableRow;

@RestController
@RequestMapping(value = "/component")
public class ComponentController {

	private static final int MAX_METRICS = 500;
	private static final int MIN_METRICS = 30;

	@RequestMapping(value = "/generate", method = RequestMethod.GET)
	@CrossOrigin
	@Deprecated
	public ResponseEntity<?> generateRandomComponent() {
		int componentCount = ThreadLocalRandom.current().nextInt(1, 10 + 1);
		return new ResponseEntity<>(generateComponent(componentCount), HttpStatus.OK);
	}

	/**
	 * if you type a component type id like 1 for textfield ,0 for label etc. you
	 * can get exact component. if you not type any parameter you takes random
	 * components 1 to 10;
	 * 
	 * @param componentType
	 * @return
	 */
	@RequestMapping(value = "/generate/{componentId}", method = RequestMethod.GET)
	@CrossOrigin
	public ResponseEntity<?> generateComponentCont(@PathVariable("componentId") int componentType) {
		try {
			ComponentType componentTypeOrg = ComponentType.values()[componentType];
			switch (componentTypeOrg) {
			case TABLE:
				return new ResponseEntity<>(generateTable(), HttpStatus.OK);
			case LABEL:
				return new ResponseEntity<>(generateLabel(ThreadLocalRandom.current().nextInt(0, 5)), HttpStatus.OK);
			case TEXTFIELD:
				return new ResponseEntity<>(generateTextField(ThreadLocalRandom.current().nextInt(0, 5)),
						HttpStatus.OK);
			case BUTTON:
				return new ResponseEntity<>(generateButton(ThreadLocalRandom.current().nextInt(0, 5)), HttpStatus.OK);
			default:
				return new ResponseEntity<>(generateComponent(ThreadLocalRandom.current().nextInt(1, 10 + 1)),
						HttpStatus.OK);
			}
		} catch (ArrayIndexOutOfBoundsException ex) {
			return new ResponseEntity<>(generateComponent(ThreadLocalRandom.current().nextInt(1, 10 + 1)),
					HttpStatus.OK);
		}

	}

	private iasHtmlTable generateTable() {
		int columnCount = ThreadLocalRandom.current().nextInt(1, 5);
		int rowCount = ThreadLocalRandom.current().nextInt(1, 10);
		iasHtmlTable table = new iasHtmlTable();
		List<iasHtmlTableColumn> columnList = new ArrayList<iasHtmlTableColumn>();
		for (int cNo = 0; cNo < columnCount; cNo++) {
			iasHtmlTableColumn column = new iasHtmlTableColumn();
			List<iasHtmlTableRow> rowList = new ArrayList<iasHtmlTableRow>();
			for (int rNo = 0; rNo < rowCount; rNo++) {
				iasHtmlTableRow row = new iasHtmlTableRow();
				row.setContent("Row " + rNo);
				rowList.add(row);
			}
			column.setRows(rowList);
			column.setHeader("Header " + cNo);
			column.setPriority(cNo);
			columnList.add(column);
		}
		table.setColumns(columnList);
		table.setCaption("Basic Table");
		table.setX(100);
		table.setY(500);
		table.setComponentType(ComponentType.TABLE);

		return table;
	}

	public List<iasHtmlComponent> generateComponent(int componentCount) {
		List<iasHtmlComponent> componentList = new ArrayList<iasHtmlComponent>();
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
		return componentList;
	}

	public iasHtmlLabel generateLabel(Integer labelIdentifier) {
		labelIdentifier++;
		iasHtmlLabel label = new iasHtmlLabel();
		label.setCaption("Label " + labelIdentifier);
		label.setText("Label text " + labelIdentifier);
		label.setX(labelIdentifier * getRandomMetrics());
		label.setY(labelIdentifier * getRandomMetrics());
		label.setComponentType(ComponentType.LABEL);
		return label;
	}

	public iasHtmlButton generateButton(Integer buttonIdentifier) {
		buttonIdentifier++;
		iasHtmlButton button = new iasHtmlButton();
		button.setCaption("Button " + buttonIdentifier);
		button.setButtonColor("Button color" + buttonIdentifier);
		button.setX(buttonIdentifier * getRandomMetrics());
		button.setY(buttonIdentifier * getRandomMetrics());
		button.setComponentType(ComponentType.BUTTON);
		return button;
	}

	public iasHtmlTextField generateTextField(Integer textFieldIdentifier) {
		textFieldIdentifier++;
		iasHtmlTextField textField = new iasHtmlTextField();
		textField.setCaption("TextField " + textFieldIdentifier);
		textField.setTextArea("TextField1 " + textFieldIdentifier);
		textField.setX(textFieldIdentifier * getRandomMetrics());
		textField.setY(textFieldIdentifier * getRandomMetrics());
		textField.setComponentType(ComponentType.TEXTFIELD);
		return textField;
	}

	private Integer getRandomMetrics() {
		return ThreadLocalRandom.current().nextInt(MIN_METRICS, MAX_METRICS);
	}

}
