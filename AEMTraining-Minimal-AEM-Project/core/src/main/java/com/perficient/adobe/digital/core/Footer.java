package com.perficient.adobe.digital.core;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.sightly.WCMUse;

public class Footer extends WCMUse {
    
    private static Logger log = LoggerFactory.getLogger(Footer.class);
    
    private List<Map> socialMedias;

    @Override
    public void activate() throws Exception {
        String[] medias = getProperties().get("medias",String[].class);
        socialMedias = new ArrayList<Map>();
        log.info("-------"+medias.length);
        for(int i=0; i< medias.length;i++){
            Map<String, String> mediaMap = new HashMap<String, String>();
            String[] mediaStr = medias[i].split(";");
            if(mediaStr.length == 3){
                mediaMap.put("Name", mediaStr[0]);
                mediaMap.put("Class", mediaStr[1]);
                mediaMap.put("Link", mediaStr[2]);
                log.info(mediaStr[0]+"-------------"+mediaStr[1]+"---------"+mediaStr[2]);
                socialMedias.add(mediaMap);
            }
        }
    }

    public List<Map> getSocialMedias() {
        return socialMedias;
    }
}
