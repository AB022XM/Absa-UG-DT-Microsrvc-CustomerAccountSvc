package ug.co.absa.microsrvc.customeraccountsvc.util;

import javax.inject.Inject;

import org.eclipse.microprofile.config.Config;

public class AccountInquiryUtil {

	@Inject
	Config config;

	    public String getConfigStringValue(String key){
	        return config.getValue(key, String.class);
	    }

	    public Integer getConfigIntValue(String key){
	        return config.getValue(key, Integer.class);
	    }

}
