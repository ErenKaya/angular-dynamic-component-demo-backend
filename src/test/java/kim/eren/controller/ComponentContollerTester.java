package kim.eren.controller;

import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;


public class ComponentContollerTester {
	ComponentController controller;

	@Before	
	public void init() {
		controller = new ComponentController();
	}

	@Test
	public void createComponent() {
		controller.generateComponent(10);
	}

	@Test
	public void test_iashtml_button_create() {
		assertNotNull(controller.generateButton(3));
	}

	@Test
	public void test_iashtml_textfield_create() {
		assertNotNull(controller.generateTextField(3));
	}

	@Test
	public void test_iashtml_label_create() {
		assertNotNull(controller.generateLabel(3));
	}
	

}
