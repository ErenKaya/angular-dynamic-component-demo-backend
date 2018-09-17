package kim.eren.controller.httprequest;

import java.io.IOException;

import kim.eren.controller.httprequest.ignoretest.IgnoreCondition;
import kim.eren.controller.httprequest.ignoretest.SocketAnalyzer;

public class NotRunningServerOff implements IgnoreCondition {

	@Override
	public boolean isSatisfied() {
		return new SocketAnalyzer().isPortAvailable("localhost", 8080);
	}

}
