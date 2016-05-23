package com.perficient.adobe.digital.core;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;

import javassist.expr.NewArray;

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
    public void testGetTitle(){
        headDate.init(bindings);
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        String date = df.format(new Date());
        Assert.assertEquals("Not equals",date , headDate.getDate());
    }

}
