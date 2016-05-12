package com.perficient.adobe.digital.core;


import java.text.SimpleDateFormat;
import java.util.Date;

import com.adobe.cq.sightly.WCMUse;


public class HeadDate extends WCMUse {
    private String date;

    @Override
    public void activate() throws Exception {
        Date trainingDate = getProperties().get("trainingDate", Date.class);
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        if(trainingDate != null){
            date = df.format(trainingDate);
        }
        
    }
    
    public String getDate(){
        return date;
    }

}
