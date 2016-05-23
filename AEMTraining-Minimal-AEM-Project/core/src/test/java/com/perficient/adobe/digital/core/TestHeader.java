package com.perficient.adobe.digital.core;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.script.Bindings;

import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.wrappers.ValueMapDecorator;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.modules.junit4.PowerMockRunner;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;

@RunWith(PowerMockRunner.class)
public class TestHeader {
    private Header header;
    @Mock
    private Bindings bindings;
    @Mock
    private PageManager pageManager;
    @Mock
    private Page page;
    
    private ValueMap valueMap;
    private String[] properties= new String[1];
    
    @Before
    public void setupMock() {
        valueMap = new ValueMapDecorator(new HashMap<String, Object>());
        properties[0]= "{'link':'/content/geometrixx-outdoors/en/men','label':'Men'}";
        valueMap.put("navigation",properties);
        PowerMockito.when(bindings.get("properties")).thenReturn(valueMap);
        PowerMockito.when(bindings.get("pageManager")).thenReturn(pageManager);
        PowerMockito.when(pageManager.getPage(Mockito.anyString())).thenReturn(page);
        header = new Header();
    }

    @Test
    public void testGetTitle() throws JSONException{
        header.init(bindings);
        List nav = new ArrayList<Map>();
        for(int i=0; i< properties.length; i ++){
            JSONObject jsonObject = new JSONObject(properties[i]);
            Map item = new HashMap<String, Object>();
            item.put("label", jsonObject.get("label"));
            item.put("link", jsonObject.get("link")+".html");
            item.put("page", page);
            nav.add(item);
        }        
        Assert.assertEquals("Not equals", nav, header.getNav());
    }

}
