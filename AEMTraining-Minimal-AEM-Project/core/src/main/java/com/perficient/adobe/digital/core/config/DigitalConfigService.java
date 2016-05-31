package com.perficient.adobe.digital.core.config;

import java.util.Dictionary;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.PropertyUnbounded;
import org.apache.felix.scr.annotations.Service;
import org.osgi.framework.Constants;
import org.osgi.service.component.ComponentContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(immediate = true, label = "Perficient Digital Configuration", description = "Perficient Digital Configuration", metatype = true)
@Service(value = DigitalConfigService.class)
@Properties({
    @Property(name = Constants.SERVICE_DESCRIPTION, value = "Perficient Digital Configuration Service"),
    @Property(name = Constants.SERVICE_VENDOR, value = "Perficient Digital")
})
public class DigitalConfigService {
    
    private static Logger log = LoggerFactory.getLogger(DigitalConfigService.class);
    @Property( unbounded = PropertyUnbounded.ARRAY, label = "Social Media",description = "Please input social media as format 'media;css;url' ,eg:'Facebook;fa-facebook-square;http://www.facebook.com/Perficient'")
    public static final String SOCIAL_MEDIA = "SOCIAL_MEDIA";
    
    private static Dictionary<?, ?> props = null;
    
    /**
     * Returns parameter value as a String object.
     * 
     * @param key
     *            - key value
     * @return Value of param key.
     */
    public String getPropertyValue(String key) {
        return String.valueOf(props.get(key));
    }
    
    public String[] getPropertyValues(String key){
        return (String[])props.get(key);
    }
    
    
    
    /**
     * Method called when Sling component is activated
     * 
     * @param context
     *            - ComponentContext reference
     */
    protected void activate(ComponentContext context) {
        try {
            props = context.getProperties();
            log.info("Perficient Digital Configuration activated ...");
        } catch (Exception e) {
            log.error("Error occured in activate method: ", e);
        }
    }
}

