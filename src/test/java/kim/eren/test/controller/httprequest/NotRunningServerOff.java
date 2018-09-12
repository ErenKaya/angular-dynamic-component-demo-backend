package kim.eren.test.controller.httprequest;

import kim.eren.test.controller.httprequest.ignoretest.IgnoreCondition;
import kim.eren.test.controller.httprequest.ignoretest.SocketAnalyzer;

public class NotRunningServerOff implements IgnoreCondition {

	@Override
	public boolean isSatisfied() {
		return new SocketAnalyzer().isPortAvailable("localhost", 8080);
	}

}
