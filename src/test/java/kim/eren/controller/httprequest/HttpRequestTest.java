package kim.eren.controller.httprequest;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;

import kim.eren.controller.httprequest.ignoretest.ConditionalIgnore;
import kim.eren.controller.httprequest.ignoretest.ConditionalIgnoreRule;

public class HttpRequestTest {
	private String url;
	private HttpURLConnection connection; 	
	private final String USER_AGENT = "Mozilla/5.0";
	URL urlObj ;
	
	@Rule
	public ConditionalIgnoreRule rule = new ConditionalIgnoreRule();
	

	
	@Before
	public void init() throws Exception{
		url = "http://localhost:8080/api/component/context";
		urlObj = new URL(url);
	}
	
	@Test
	@ConditionalIgnore( condition = NotRunningServerOff.class )
	public void test_generate_component_from_dummy_request() throws IOException {
		connection = (HttpURLConnection)urlObj.openConnection();
		connection.setRequestMethod("GET");
		connection.setRequestProperty("User-Agent", USER_AGENT);
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
