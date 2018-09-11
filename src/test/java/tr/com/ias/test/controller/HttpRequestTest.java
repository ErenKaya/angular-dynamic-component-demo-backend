package tr.com.ias.test.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.junit.Before;
import org.junit.Test;

public class HttpRequestTest {
	private String url;
	private HttpURLConnection connection; 	
	private final String USER_AGENT = "Mozilla/5.0";
	URL urlObj ;
	@Before
	public void init() throws Exception{
		url = "http://localhost:8080/api/component/context";
		urlObj = new URL(url);
	}
	
	@Test
	public void test_generate_component_from_dummy_request() throws IOException {
		connection = (HttpURLConnection)urlObj.openConnection();
		connection.setRequestMethod("GET");
		printResponse(connection);
		
	}

	private void printResponse(HttpURLConnection connection) throws IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		StringBuffer responseBuffer = new StringBuffer();
		String inputLine;
		while ((inputLine = in.readLine()) != null) {
			responseBuffer.append(inputLine);
		}
		in.close();
		System.out.println(responseBuffer.toString());
	}

}
