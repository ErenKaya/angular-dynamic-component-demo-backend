package tr.com.ias.test.controller.httprequest;

import tr.com.ias.test.controller.httprequest.ignoretest.IgnoreCondition;
import tr.com.ias.test.controller.httprequest.ignoretest.SocketAnalyzer;

public class NotRunningServerOff implements IgnoreCondition {

	@Override
	public boolean isSatisfied() {
		return new SocketAnalyzer().isPortAvailable("localhost", 8080);
	}

}
