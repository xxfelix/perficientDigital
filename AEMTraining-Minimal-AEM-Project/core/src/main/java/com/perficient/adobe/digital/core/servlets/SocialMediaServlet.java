package com.perficient.adobe.digital.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Servlet;
import javax.servlet.ServletException;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.perficient.adobe.digital.core.config.DigitalConfigService;

@Component
@Service(value = Servlet.class)
@Properties({
    @Property(name = "sling.servlet.paths", value = "/services/socialMedia"),
    @Property(name = "service.description", value = "This is digital social media servlet"),
    @Property(name = "label", value = "SocialMediaServlet") })
public class SocialMediaServlet extends SlingAllMethodsServlet {

    private static final long serialVersionUID = 2980917774568484579L;
    
    @Reference
    private DigitalConfigService digitalConfigService;
    
    private static Logger log = LoggerFactory.getLogger(SocialMediaServlet.class);

    @Override
    protected void doPost(SlingHttpServletRequest request,
            SlingHttpServletResponse response) throws ServletException,
            IOException {
        String[] socialMedia = digitalConfigService.getPropertyValues(DigitalConfigService.SOCIAL_MEDIA);
        try {
            JSONArray result = new JSONArray();
            for(int i = 0; i < socialMedia.length; i++){
                    JSONObject jsonObject = new JSONObject();
                    jsonObject.put("text", socialMedia[i].split(";")[0]);
                    jsonObject.put("value", socialMedia[i]);
                    result.put(jsonObject);
            }
            response.setContentType("application/json"); 
            PrintWriter out = response.getWriter(); 
            out.print(result);
        } catch (JSONException e) {
            log.error("Get Footer dialog social media options error",e);
        }
        
    }

    @Override
    protected void doGet(SlingHttpServletRequest request,
            SlingHttpServletResponse response) throws ServletException,
            IOException {
        doPost(request, response);
    }
    
    

}
