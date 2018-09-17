package kim.eren.controller.httprequest.ignoretest;

import java.io.IOException;
import java.net.ConnectException;
import java.net.SocketException;
import java.net.UnknownHostException;

public class SocketAnalyzer extends java.net.Socket {
	public boolean isPortAvailable(String host, int port) {
		boolean result = true;
		try {
			(new java.net.Socket(host, port)).close();
			result = false;
		} catch (SocketException e) {
			e.printStackTrace();
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return result;
	}
}
