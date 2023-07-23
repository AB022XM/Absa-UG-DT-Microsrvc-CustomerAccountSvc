package ug.co.absa.microsrvc.customeraccountsvc.util;

import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

public class HttpConnectionUtil {

	public  CloseableHttpClient getCloseableHttpClient() {
		return HttpClients.custom().setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE)
				.build();
	}

}
