package com.perficient.adobe.digital.core;

import java.util.Date;
import java.util.HashMap;

import javax.script.Bindings;

import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.wrappers.ValueMapDecorator;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.modules.junit4.PowerMockRunner;

@RunWith(PowerMockRunner.class)
public class TestHeadDate {
    private HeadDate headDate;
    @Mock
    private Bindings bindings;
    
    private ValueMap valueMap;
    
    @Before
    public void setupMock() {
        valueMap = new ValueMapDecorator(new HashMap<String, Object>());
        valueMap.put("trainingDate", new Date());
        PowerMockito.when(bindings.get("properties")).thenReturn(valueMap);
        headDate = new HeadDate();
    }

    @Test
    public void testGetTitle() throws Exception{
        headDate.init(bindings);
        Assert.assertEquals("Not equals","2016-05-12", headDate.getDate());
    }

}
