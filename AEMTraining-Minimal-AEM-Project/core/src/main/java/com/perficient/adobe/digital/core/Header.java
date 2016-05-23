package com.perficient.adobe.digital.core;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.sling.commons.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.sightly.WCMUse;
import com.day.cq.wcm.api.Page;

public class Header extends WCMUse {
    
    private static final Logger log = LoggerFactory.getLogger(Header.class);
    private List nav;
    
    @Override
    public void activate() throws Exception {
        String[] properties = getProperties().get("navigation",String[].class);
        nav = new ArrayList<Map>();
        for(int i=0; i< properties.length; i ++){
            JSONObject jsonObject = new JSONObject(properties[i]);
            Map item = new HashMap<String, Object>();
            item.put("label", jsonObject.get("label"));
            item.put("link", jsonObject.get("link")+".html");
            Page page = getPageManager().getPage(""+jsonObject.get("link"));
            item.put("page", page);
            nav.add(item);
        }        
    }
    
    public List getNav(){
        return nav;
    }
}
